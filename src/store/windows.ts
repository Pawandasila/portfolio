import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

/* ---------------- TYPES ---------------- */

export type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowData = Record<string, any> | null;

export interface WindowItem {
  isOpen: boolean;
  zIndex: number;
  data: WindowData;
}

export interface WindowsStore {
  windows: Record<WindowKey, WindowItem>;
  nextZIndex: number;

  openWindow: (windowKey: WindowKey, data?: WindowData) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey, data?: WindowData) => void;
  updateWindowData: (windowKey: WindowKey, data: Record<string, any>) => void;
}

/* ---------------- STORE ---------------- */

const useWindowsStore = create<WindowsStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG as Record<WindowKey, WindowItem>,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        // Redirection logic for contact -> safari view
        if (windowKey === "contact") {
          const win = state.windows["safari"];
          if (!win) return;

          win.data = { ...(win.data || {}), view: "contact" };
          win.isOpen = true;
          win.zIndex = state.nextZIndex;
          state.nextZIndex++;
          return;
        }

        const win = state.windows[windowKey];
        if (!win) return;

        win.data = data ?? win.data;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.data = null;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
      }),

    focusWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.data = data ?? win.data;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    updateWindowData: (windowKey, newData) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        const currentData = win.data || {};
        win.data = { ...currentData, ...newData };
      }),
  }))
);

export default useWindowsStore;
