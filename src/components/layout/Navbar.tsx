"use client";

import { navLinks } from "@/constants";
import useWindowsStore from "@/store/windows";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState, useRef } from "react";
import {
  Search,
  Sliders,
  Wifi,
  BatteryCharging,
  Briefcase,
  ExternalLink,
} from "lucide-react";

interface NavbarProps {
  onToggleSpotlight?: () => void;
  onToggleControlCenter?: () => void;
}

export const Navbar = ({ onToggleSpotlight, onToggleControlCenter }: NavbarProps) => {
  const [time, setTime] = useState<string>("");
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const appleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => setTime(dayjs().format("ddd MMM D  h:mm A"));
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (appleMenuRef.current && !appleMenuRef.current.contains(e.target as Node)) {
        setAppleMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { openWindow } = useWindowsStore();

  const handleNavClick = (type: string) => {
    switch (type) {
      case "finder":
        openWindow("finder", { activeCategory: "Projects" });
        break;
      case "clients":
        openWindow("finder", { activeCategory: "Client Work" });
        break;
      case "resume":
        openWindow("resume");
        break;
      case "contact":
        openWindow("contact");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="relative z-50 flex justify-between items-center bg-white/60 text-gray-900 backdrop-blur-2xl px-3.5 py-1 text-[13px] select-none border-b border-black/10 shadow-2xs">
      {/* Left Menu Section */}
      <div className="flex items-center gap-1.5" ref={appleMenuRef}>
        {/* Apple Logo with Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setAppleMenuOpen(!appleMenuOpen)}
            className={`p-1 px-2 rounded hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer ${
              appleMenuOpen ? "bg-black/15" : ""
            }`}
            aria-label="Apple Menu"
          >
            <Image
              src="/images/logo.svg"
              alt="Apple"
              width={14}
              height={14}
              className="brightness-0"
            />
          </button>

          {appleMenuOpen && (
            <div className="absolute left-0 top-full mt-1.5 w-60 bg-white/95 text-gray-900 rounded-xl shadow-2xl border border-gray-200 py-1 text-xs backdrop-blur-2xl animate-in fade-in duration-100 z-[999999] flex flex-col gap-0.5">
              <button
                type="button"
                onClick={() => {
                  openWindow("about-mac");
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="font-medium">About This Mac</span>
                <span className="text-[10px] opacity-70">Specs</span>
              </button>

              <div className="h-[1px] bg-gray-200 my-1" />

              <button
                type="button"
                onClick={() => {
                  openWindow("finder", { activeCategory: "Client Work" });
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <Briefcase className="size-3 text-amber-600" /> Client Engagements
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-full">
                  7
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  openWindow("finder", { activeCategory: "Personal Projects" });
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="font-medium">Personal Projects</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded-full">
                  5
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  openWindow("terminal");
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="font-medium">Terminal (CLI Skills)</span>
                <span className="text-[10px] font-mono opacity-70">_</span>
              </button>

              <div className="h-[1px] bg-gray-200 my-1" />

              <button
                type="button"
                onClick={() => {
                  window.open("https://github.com/pawandasila", "_blank");
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="font-medium">GitHub Profile</span>
                <ExternalLink className="size-3 opacity-60" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/pawan-dasila-92483b251/", "_blank");
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="font-medium">LinkedIn Profile</span>
                <ExternalLink className="size-3 opacity-60" />
              </button>

              <div className="h-[1px] bg-gray-200 my-1" />

              <button
                type="button"
                onClick={() => {
                  openWindow("contact");
                  setAppleMenuOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Contact Developer...
              </button>

              <button
                type="button"
                onClick={() => {
                  window.location.reload();
                }}
                className="w-full text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Restart Session...
              </button>
            </div>
          )}
        </div>

        {/* Active App Title */}
        <span className="font-bold text-[13px] tracking-tight px-1.5 py-0.5 rounded hover:bg-black/10 cursor-default text-gray-900">
          Pawan Dasila
        </span>

        {/* Top App Links */}
        <div className="flex items-center gap-0.5 max-sm:hidden">
          {navLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.type)}
              className="px-2 py-0.5 rounded text-[13px] hover:bg-black/10 transition-colors cursor-pointer text-gray-800 font-medium hover:text-black"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Status Section */}
      <div className="flex items-center gap-2 text-gray-800">
        {/* Wi-Fi Status */}
        <div className="p-1 px-1.5 rounded hover:bg-black/10 transition-colors cursor-default">
          <Wifi className="size-3.5 text-gray-700" />
        </div>

        {/* Battery */}
        <div className="flex items-center gap-1 p-1 px-1.5 rounded hover:bg-black/10 transition-colors cursor-default text-xs font-medium">
          <span className="text-[11px] font-mono">100%</span>
          <BatteryCharging className="size-4 text-emerald-600" />
        </div>

        {/* Spotlight Trigger */}
        <button
          type="button"
          onClick={onToggleSpotlight}
          className="p-1 px-1.5 rounded hover:bg-black/10 transition-colors text-gray-700 cursor-pointer"
          title="Spotlight Search (⌘K)"
          aria-label="Spotlight Search"
        >
          <Search className="size-3.5" />
        </button>

        {/* Control Center Trigger */}
        <button
          type="button"
          onClick={onToggleControlCenter}
          className="p-1 px-1.5 rounded hover:bg-black/10 transition-colors text-gray-700 cursor-pointer"
          title="Control Center"
          aria-label="Control Center"
        >
          <Sliders className="size-3.5" />
        </button>

        {/* Clock & Date */}
        <time className="px-2 py-0.5 rounded hover:bg-black/10 transition-colors cursor-default font-semibold text-[12px] min-w-[130px] text-right tracking-tight text-gray-900">
          {time || "Mon 10:00 AM"}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
