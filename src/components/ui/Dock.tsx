"use client";
import { dockApps } from "@/constants";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import useWindowsStore, { WindowKey } from "@/store/windows";

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcon = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((i) => {
        const { left: iconLeft, width } = i.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.4) / 7000);

        gsap.to(i, {
          scale: 1 + 0.5 * intensity,
          y: -20 * intensity,
          duration: 0.2,
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

  const { windows, openWindow, closeWindow } = useWindowsStore();

  const toggleApp = (app: (typeof dockApps)[0]) => {
    if (!app.canOpen) return;

    const window = windows[app.id as WindowKey];

    if (window.isOpen) {
      closeWindow(app.id as WindowKey);
    } else {
      openWindow(app.id as WindowKey);
    }
  };

  return (
    <section id="dock">
      <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app, idx) => {
          return (
            <div key={idx} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={app.name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={120}
                disabled={!app.canOpen}
                onClick={() => toggleApp(app)}
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={120}
                  height={120}
                  loading="lazy"
                  className={`object-contain w-[60px] h-auto ${
                    app.canOpen ? "" : "opacity-60"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dock;
