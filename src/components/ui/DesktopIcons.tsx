"use client";

import React from "react";
import useWindowsStore from "@/store/windows";
import {
  Folder,
  FileText,
  Terminal as TerminalIcon,
  Sparkles,
  UserCheck,
  Briefcase,
} from "lucide-react";

interface DesktopIconProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  badge?: string;
}

export const DesktopIcons = () => {
  const { openWindow } = useWindowsStore();

  const icons: DesktopIconProps[] = [
    {
      id: "clients",
      name: "Client Engagements",
      badge: "7 Clients",
      icon: (
        <div className="relative">
          <Folder
            className="size-12 text-amber-400 drop-shadow-md"
            fill="currentColor"
            fillOpacity={0.4}
          />
          <Briefcase className="size-5 text-amber-700 absolute top-4 left-3.5" />
        </div>
      ),
      onClick: () => openWindow("finder", { activeCategory: "Client Work" }),
    },
    {
      id: "projects",
      name: "Personal Projects",
      badge: "5 Apps",
      icon: (
        <div className="relative">
          <Folder
            className="size-12 text-blue-400 drop-shadow-md"
            fill="currentColor"
            fillOpacity={0.4}
          />
          <Sparkles className="size-5 text-blue-700 absolute top-4 left-3.5" />
        </div>
      ),
      onClick: () => openWindow("finder", { activeCategory: "Projects" }),
    },
    {
      id: "resume",
      name: "Resume.pdf",
      badge: "PDF",
      icon: (
        <div className="relative flex items-center justify-center size-12 bg-white/90 rounded-lg shadow-md border border-gray-200">
          <FileText className="size-7 text-red-500" />
        </div>
      ),
      onClick: () => openWindow("resume"),
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: (
        <div className="relative flex items-center justify-center size-12 bg-gray-900 rounded-xl shadow-md border border-gray-700">
          <TerminalIcon className="size-6 text-green-400" />
        </div>
      ),
      onClick: () => openWindow("terminal"),
    },
    {
      id: "about",
      name: "About Pawan.txt",
      icon: (
        <div className="relative flex items-center justify-center size-12 bg-white/90 rounded-lg shadow-md border border-gray-200">
          <UserCheck className="size-7 text-blue-500" />
        </div>
      ),
      onClick: () => openWindow("contact"),
    },
  ];

  return (
    <div className="absolute top-12 right-4 z-20 flex flex-col gap-5 p-2 select-none">
      {icons.map((item) => (
        <button
          key={item.id}
          type="button"
          onDoubleClick={item.onClick}
          onClick={item.onClick}
          className="group flex flex-col items-center justify-center w-24 p-2 rounded-xl hover:bg-white/15 active:bg-white/25 transition-all text-center focus:outline-none focus:ring-1 focus:ring-blue-400/50 backdrop-blur-xs"
        >
          <div className="group-hover:scale-105 group-active:scale-95 transition-transform drop-shadow-lg">
            {item.icon}
          </div>
          <span className="mt-1.5 text-[12px] font-medium text-white px-1.5 py-0.5 rounded shadow-sm bg-black/30 backdrop-blur-md leading-tight text-center max-w-[90px] truncate">
            {item.name}
          </span>
          {item.badge && (
            <span className="text-[10px] text-blue-200/90 font-medium px-1 bg-black/40 rounded mt-0.5">
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default DesktopIcons;
