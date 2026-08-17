"use client";

import React from "react";
import Image from "next/image";
import WindowsWrapper from "@/hoc/WindowsWrapper";
import { Cpu, HardDrive, MemoryStick, Layers, Globe, Sparkles } from "lucide-react";
import useWindowsStore from "@/store/windows";

const AboutMacContent: React.FC = () => {
  const { openWindow } = useWindowsStore();

  return (
    <div className="flex flex-col items-center justify-between h-full p-6 text-gray-900 bg-[#fbfbfb] select-none">
      {/* Top Header */}
      <div className="flex flex-col items-center text-center">
        <div className="relative size-24 mb-4 drop-shadow-md">
          <Image
            src="/images/profile.jpg"
            alt="Pawan Dasila"
            fill
            className="rounded-full object-cover ring-4 ring-blue-500/20"
          />
          <div className="absolute -bottom-1 -right-1 size-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow">
            <Sparkles className="size-4" />
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900">MacBook Pro (Pawan Edition)</h1>
        <p className="text-xs text-gray-500 mt-0.5 font-medium">
          16-inch, 2026 • Full Stack Developer &amp; AI Innovator
        </p>
      </div>

      {/* Hardware Specs Breakdown */}
      <div className="w-full max-w-sm bg-white rounded-xl p-4 space-y-2.5 border border-gray-200 shadow-2xs text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1.5 font-medium">
            <Cpu className="size-3.5 text-blue-500" /> Chip
          </span>
          <span className="font-semibold text-gray-900">Apple M3 Max (Dev Engine)</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1.5 font-medium">
            <MemoryStick className="size-3.5 text-purple-500" /> Core Stack
          </span>
          <span className="font-semibold text-gray-900">Next.js 16, React 19, Node.js</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1.5 font-medium">
            <Layers className="size-3.5 text-emerald-500" /> Database &amp; Cloud
          </span>
          <span className="font-semibold text-gray-900">Supabase, PostgreSQL, AWS</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1.5 font-medium">
            <HardDrive className="size-3.5 text-amber-500" /> Client Deliveries
          </span>
          <span className="font-bold text-amber-600">7 Production Engagements</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1.5 font-medium">
            <Globe className="size-3.5 text-sky-500" /> Location
          </span>
          <span className="font-semibold text-gray-900">Uttarakhand, India (Open to Remote)</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 w-full max-w-sm">
        <button
          type="button"
          onClick={() => openWindow("finder", { activeCategory: "Client Work" })}
          className="flex-1 py-2 px-3 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-2xs text-center cursor-pointer"
        >
          View Client Work...
        </button>

        <button
          type="button"
          onClick={() => openWindow("contact")}
          className="py-2 px-3 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors border border-gray-200 text-center cursor-pointer"
        >
          Contact Pawan
        </button>
      </div>

      <p className="text-[10px] text-gray-400 font-mono">macOS Sequoia 15.4 • Portfolio v2.0</p>
    </div>
  );
};

const AboutMacWindow = WindowsWrapper(AboutMacContent, "about-mac", {
  initialWidth: "460px",
  initialHeight: "480px",
  isLight: true,
  headerLeft: <span className="ml-2 text-xs font-semibold text-gray-700">About This Mac</span>,
});

export default AboutMacWindow;
