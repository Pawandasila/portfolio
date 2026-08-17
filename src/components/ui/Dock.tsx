"use client";

import { dockApps } from "@/constants";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import useWindowsStore, { WindowKey } from "@/store/windows";

export const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const { windows, openWindow, closeWindow } = useWindowsStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon-wrapper");

    const animateIcon = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((i) => {
        const { left: iconLeft, width } = i.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.2) / 6000);

        gsap.to(i, {
          scale: 1 + 0.38 * intensity,
          y: -16 * intensity,
          duration: 0.15,
          ease: "power1.out",
        });
      });
    };

    const handleMouseLeave = () => {
      icons.forEach((i) => {
        gsap.to(i, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const onMove = (e: MouseEvent) =>
      animateIcon(e.clientX - dock.getBoundingClientRect().left);

    dock.addEventListener("mousemove", onMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", onMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  const toggleApp = (app: (typeof dockApps)[0]) => {
    if (!app.canOpen) return;

    const winKey = app.id as WindowKey;
    const windowState = windows[winKey];

    if (windowState?.isOpen) {
      closeWindow(winKey);
    } else {
      openWindow(winKey);
    }
  };

  return (
    <section id="dock" className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[99999] select-none">
      <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      <div
        ref={dockRef}
        className="flex items-end gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/40 border border-white/50 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all"
      >
        {dockApps.map((app, idx) => {
          const isOpen = windows[app.id as WindowKey]?.isOpen;

          return (
            <div key={idx} className="dock-icon-wrapper flex flex-col items-center">
              <button
                type="button"
                className="dock-icon size-12 3xl:size-16 rounded-xl flex items-center justify-center transition-transform active:scale-90 focus:outline-none cursor-pointer"
                aria-label={app.name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={100}
                disabled={!app.canOpen}
                onClick={() => toggleApp(app)}
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className={`size-11 object-contain drop-shadow-md transition-all ${
                    app.canOpen ? "" : "opacity-50"
                  }`}
                />
              </button>

              {/* Active Dot Indicator */}
              <div
                className={`size-1.5 rounded-full bg-gray-900 shadow-xs mt-0.5 transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dock;
