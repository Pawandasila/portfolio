"use client";

import useWindowsStore, { WindowKey } from "@/store/windows";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// @ts-ignore
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export interface WindowOptions {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerSearch?: React.ReactNode;
  isLight?: boolean;
  initialWidth?: string | number;
  initialHeight?: string | number;
}

const WindowsWrapper = (
  Component: React.ComponentType<any>,
  windowKey: WindowKey,
  options: WindowOptions = {}
) => {
  const WrappedComponent = (props: any) => {
    const { windows, focusWindow, closeWindow } = useWindowsStore();
    const windowState = windows[windowKey];
    const { isOpen, zIndex } = windowState;

    const ref = useRef<HTMLDivElement>(null);

    const handleResizeStart = (e: React.MouseEvent, side: string) => {
      e.stopPropagation();
      e.preventDefault();
      const container = ref.current;
      if (!container) return;

      focusWindow(windowKey);

      const startW = container.offsetWidth;
      const startH = container.offsetHeight;
      const startX = e.clientX;
      const startY = e.clientY;

      const startPosX = gsap.getProperty(container, "x") as number;
      const startPosY = gsap.getProperty(container, "y") as number;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;
        const updates: any = {};

        if (side.includes("e")) updates.width = Math.max(300, startW + dx);
        if (side.includes("w")) {
          const newWidth = Math.max(300, startW - dx);
          updates.width = newWidth;
          updates.x = startPosX + (startW - newWidth);
        }
        if (side.includes("s")) updates.height = Math.max(200, startH + dy);
        if (side.includes("n")) {
          const newHeight = Math.max(200, startH - dy);
          updates.height = newHeight;
          updates.y = startPosY + (startH - newHeight);
        }
        gsap.set(container, updates);
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    useGSAP(() => {
      if (isOpen && ref.current) {
        // Dragging logic
        Draggable.create(ref.current, {
          handle: "#window-header",
          onPress: () => focusWindow(windowKey),
          edgeResistance: 0.65,
          type: "x,y",
          inertia: true,
        });
      }
    }, [isOpen]);

    if (!isOpen) return null;

    // Get capitalized name for header
    const windowTitle = windowKey.charAt(0).toUpperCase() + windowKey.slice(1);

    // Initial positioning and sizing
    const defaultStyles: React.CSSProperties = {
      zIndex,
      position: "absolute",
      left: "15%",
      top: "10%",
      width: options.initialWidth || "850px",
      height: options.initialHeight || "600px",
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        className={`app-window px-0 ${options.isLight ? "window-light" : ""}`}
        style={defaultStyles}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <div
          id="window-header"
          className="window-header grid grid-cols-[1fr_2fr_1fr] items-center px-4"
        >
          {/* Left Side: Controls + HeaderLeft */}
          <div className="flex items-center gap-4">
            <div className="window-controls flex items-center gap-2">
              <button
                type="button"
                className="window-control close window-control-close text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(windowKey);
                }}
                aria-label="Close"
              />
              <div className="window-control minimise window-control-minimize" />
              <div className="window-control maximize window-control-maximize" />
            </div>
            {options.headerLeft && (
              <div className="flex items-center gap-2">
                {options.headerLeft}
              </div>
            )}
          </div>

          {/* Center Side: HeaderSearch or Title */}
          <div className="flex justify-center">
            {options.headerSearch ? (
              options.headerSearch
            ) : (
              <h2 className="text-center font-medium">{windowTitle}</h2>
            )}
          </div>

          {/* Right Side: HeaderRight */}
          <div className="flex items-center justify-end gap-2">
            {options.headerRight && options.headerRight}
          </div>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <Component {...props} />
        </div>

        {/* Resize Handles */}
        <div
          onMouseDown={(e) => handleResizeStart(e, "n")}
          className="absolute top-0 left-0 w-full h-1.5 cursor-n-resize z-50 group-hover:bg-white/5"
          style={{ transform: "translateY(-50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "s")}
          className="absolute bottom-0 left-0 w-full h-1.5 cursor-s-resize z-50 group-hover:bg-white/5"
          style={{ transform: "translateY(50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "w")}
          className="absolute top-0 left-0 w-1.5 h-full cursor-w-resize z-50 group-hover:bg-white/5"
          style={{ transform: "translateX(-50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "e")}
          className="absolute top-0 right-0 w-1.5 h-full cursor-e-resize z-50 group-hover:bg-white/5"
          style={{ transform: "translateX(50%)" }}
        />

        <div
          onMouseDown={(e) => handleResizeStart(e, "nw")}
          className="absolute top-0 left-0 size-4 cursor-nw-resize z-60"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "ne")}
          className="absolute top-0 right-0 size-4 cursor-ne-resize z-60"
          style={{ transform: "translate(50%, -50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "sw")}
          className="absolute bottom-0 left-0 size-4 cursor-sw-resize z-60"
          style={{ transform: "translate(-50%, 50%)" }}
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, "se")}
          className="absolute bottom-0 right-0 size-4 cursor-se-resize z-60 flex items-center justify-center"
          style={{ transform: "translate(50%, 50%)" }}
        >
          <div className="size-1.5 bg-white/20 rounded-full" />
        </div>
      </section>
    );
  };

  WrappedComponent.displayName = `WindowsWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default WindowsWrapper;
