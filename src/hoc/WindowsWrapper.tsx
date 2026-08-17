"use client";

import useWindowsStore, { WindowKey } from "@/store/windows";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export interface WindowOptions {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerSearch?: React.ReactNode;
  isLight?: boolean;
  initialWidth?: string | number;
  initialHeight?: string | number;
}

const WindowsWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  windowKey: WindowKey,
  options: WindowOptions = {},
) => {
  const WrappedComponent = (props: P) => {
    const { windows, focusWindow, closeWindow } = useWindowsStore();
    const windowState = windows[windowKey];
    const { isOpen, zIndex } = windowState;

    const ref = useRef<HTMLDivElement>(null);
    const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
    const [isRendered, setIsRendered] = useState(isOpen);
    const [isMaximized, setIsMaximized] = useState(false);

    if (isOpen !== prevIsOpen) {
      setPrevIsOpen(isOpen);
      if (isOpen) {
        setIsRendered(true);
      }
    }

    const toggleMaximize = (e: React.MouseEvent) => {
      e.stopPropagation();
      const container = ref.current;
      if (!container) return;

      if (!isMaximized) {
        gsap.to(container, {
          x: 0,
          y: 0,
          left: "2%",
          top: "40px",
          width: "96vw",
          height: "calc(98vh - 100px)",
          duration: 0.3,
          ease: "power2.out",
        });
        setIsMaximized(true);
      } else {
        gsap.to(container, {
          x: 0,
          y: 0,
          left: "10%",
          top: "8%",
          width: options.initialWidth || "850px",
          height: options.initialHeight || "600px",
          duration: 0.3,
          ease: "power2.out",
        });
        setIsMaximized(false);
      }
    };

    const handleResizeStart = (e: React.MouseEvent, side: string) => {
      e.stopPropagation();
      e.preventDefault();
      const container = ref.current;
      if (!container || isMaximized) return;

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
        const updates: Record<string, number> = {};

        if (side.includes("e")) updates.width = Math.max(320, startW + dx);
        if (side.includes("w")) {
          const newWidth = Math.max(320, startW - dx);
          updates.width = newWidth;
          updates.x = startPosX + (startW - newWidth);
        }
        if (side.includes("s")) updates.height = Math.max(220, startH + dy);
        if (side.includes("n")) {
          const newHeight = Math.max(220, startH - dy);
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
      if (!ref.current) return;

      if (isOpen) {
        gsap.fromTo(
          ref.current,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.1)" },
        );

        Draggable.create(ref.current, {
          handle: "#window-header",
          onPress: () => focusWindow(windowKey),
          edgeResistance: 0.65,
          type: "x,y",
          inertia: true,
        });
      } else if (isRendered) {
        gsap.to(ref.current, {
          scale: 0.8,
          opacity: 0,
          y: 40,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => setIsRendered(false),
        });
      }
    }, [isOpen, isRendered]);

    if (!isRendered) return null;

    const windowTitle =
      windowKey === "about-mac"
        ? "About This Mac"
        : windowKey.charAt(0).toUpperCase() + windowKey.slice(1);

    const defaultStyles: React.CSSProperties = {
      zIndex,
      position: "absolute",
      left: "10%",
      top: "8%",
      width: options.initialWidth || "850px",
      height: options.initialHeight || "600px",
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        className={`app-window px-0 ${options.isLight ? "window-light" : ""} shadow-2xl rounded-2xl border border-gray-300/80 overflow-hidden backdrop-blur-3xl`}
        style={defaultStyles}
        onMouseDown={() => focusWindow(windowKey)}
      >
        {/* macOS Window Titlebar */}
        <div
          id="window-header"
          className="window-header grid grid-cols-[1fr_2fr_1fr] items-center px-3.5 h-10 select-none cursor-move border-b border-gray-200 bg-[#e8eaed]/90 text-gray-800 backdrop-blur-md"
        >
          {/* Left Side: Traffic Lights + HeaderLeft */}
          <div className="flex items-center gap-3">
            <div className="window-controls flex items-center gap-1.5 group">
              <button
                type="button"
                className="window-control window-control-close bg-[#ff5f57] border border-[#e0443e] hover:brightness-90 size-3 rounded-full flex items-center justify-center text-black/60 transition-all cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(windowKey);
                }}
                title="Close Window"
                aria-label="Close"
              />
              <button
                type="button"
                className="window-control window-control-minimize bg-[#febc2e] border border-[#d89e24] hover:brightness-90 size-3 rounded-full flex items-center justify-center text-black/60 transition-all cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(windowKey);
                }}
                title="Minimize Window"
                aria-label="Minimize"
              />
              <button
                type="button"
                className="window-control window-control-maximize bg-[#28c840] border border-[#1aab29] hover:brightness-90 size-3 rounded-full flex items-center justify-center text-black/60 transition-all cursor-pointer"
                onClick={toggleMaximize}
                title="Toggle Fullscreen"
                aria-label="Maximize"
              />
            </div>

            {options.headerLeft && (
              <div className="flex items-center gap-2">
                {options.headerLeft}
              </div>
            )}
          </div>

          {/* Center Side: Search Bar or Title */}
          <div className="flex justify-center">
            {options.headerSearch ? (
              options.headerSearch
            ) : (
              <h2 className="text-center font-semibold text-xs text-gray-700 dark:text-gray-200 truncate">
                {windowTitle}
              </h2>
            )}
          </div>

          {/* Right Side: HeaderRight */}
          <div className="flex items-center justify-end gap-2">
            {options.headerRight && options.headerRight}
          </div>
        </div>

        {/* Window Body */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          <Component {...props} />
        </div>

        {/* Resize Handles */}
        {!isMaximized && (
          <>
            <div
              onMouseDown={(e) => handleResizeStart(e, "n")}
              className="absolute top-0 left-0 w-full h-1.5 cursor-n-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "s")}
              className="absolute bottom-0 left-0 w-full h-1.5 cursor-s-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "w")}
              className="absolute top-0 left-0 w-1.5 h-full cursor-w-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "e")}
              className="absolute top-0 right-0 w-1.5 h-full cursor-e-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "se")}
              className="absolute bottom-0 right-0 size-4 cursor-se-resize z-60"
            />
          </>
        )}
      </section>
    );
  };

  WrappedComponent.displayName = `WindowsWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default WindowsWrapper;
