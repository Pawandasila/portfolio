"use client";

import React, { useState } from "react";
import {
  Wifi,
  Bluetooth,
  Moon,
  Sun,
  Volume2,
  Airplay,
  Music,
  Play,
  Pause,
  SkipForward,
  Image as ImageIcon,
} from "lucide-react";

interface ControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallpaper?: (bgUrl: string) => void;
}

export const ControlCenter = ({
  isOpen,
  onClose,
  onSelectWallpaper,
}: ControlCenterProps) => {
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [brightness, setBrightness] = useState(90);

  if (!isOpen) return null;

  const wallpapers = [
    { name: "Sonoma Dark", url: "/images/bg.jpg" },
    {
      name: "Aurora Night",
      url: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)",
    },
    {
      name: "Mac Monterey",
      url: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
    },
    {
      name: "Deep Space",
      url: "linear-gradient(135deg, #030712 0%, #111827 50%, #1f2937 100%)",
    },
  ];

  return (
    <div className="fixed inset-0 z-[9990] select-none" onClick={onClose}>
      <div
        className="absolute top-9 right-4 w-80 bg-[#1e1e1e]/85 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-3 text-white space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Grid: Connectivity & Toggles */}
        <div className="grid grid-cols-2 gap-2">
          {/* Left Block: Connectivity */}
          <div className="bg-white/10 rounded-xl p-2.5 space-y-2.5 border border-white/5">
            <button
              type="button"
              onClick={() => setWifiOn(!wifiOn)}
              className="flex items-center gap-2.5 w-full text-left"
            >
              <div
                className={`p-2 rounded-full transition-colors ${
                  wifiOn
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                <Wifi className="size-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold leading-tight">Wi-Fi</p>
                <p className="text-[10px] text-gray-400 truncate">
                  {wifiOn ? "Pawan-5G High Speed" : "Off"}
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setBluetoothOn(!bluetoothOn)}
              className="flex items-center gap-2.5 w-full text-left"
            >
              <div
                className={`p-2 rounded-full transition-colors ${
                  bluetoothOn
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                <Bluetooth className="size-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold leading-tight">Bluetooth</p>
                <p className="text-[10px] text-gray-400 truncate">
                  {bluetoothOn ? "AirPods Pro" : "Off"}
                </p>
              </div>
            </button>
          </div>

          {/* Right Block: Dark Mode & AirDrop */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2.5 bg-white/10 rounded-xl p-2.5 border border-white/5 text-left hover:bg-white/15 transition-colors"
            >
              <div
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-blue-500 text-white"
                    : "bg-amber-400 text-black"
                }`}
              >
                {darkMode ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight">Dark Mode</p>
                <p className="text-[10px] text-gray-400">
                  {darkMode ? "On" : "Off"}
                </p>
              </div>
            </button>

            <div className="flex items-center gap-2.5 bg-white/10 rounded-xl p-2.5 border border-white/5">
              <div className="p-2 rounded-full bg-blue-500 text-white">
                <Airplay className="size-4" />
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight">
                  Screen Mirror
                </p>
                <p className="text-[10px] text-gray-400">Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Display Brightness Slider */}
        <div className="bg-white/10 rounded-xl p-2.5 border border-white/5 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-gray-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Sun className="size-3.5" /> Display
            </span>
            <span className="text-[10px] text-gray-400">{brightness}%</span>
          </div>
          <input
            type="range"
            min="30"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-blue-500 h-1.5 bg-white/20 rounded-lg cursor-pointer"
          />
        </div>

        {/* Sound Volume Slider */}
        <div className="bg-white/10 rounded-xl p-2.5 border border-white/5 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-gray-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Volume2 className="size-3.5" /> Sound
            </span>
            <span className="text-[10px] text-gray-400">{volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-blue-500 h-1.5 bg-white/20 rounded-lg cursor-pointer"
          />
        </div>

        {/* Now Playing Widget */}
        <div className="bg-white/10 rounded-xl p-2.5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="size-10 rounded-lg bg-linear-to-tr from-purple-600 to-pink-500 flex items-center justify-center shrink-0 shadow-md">
              <Music className="size-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold truncate">
                Full Stack Flow • Lo-Fi
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                Pawan Dasila Studio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
            >
              {isPlaying ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
            </button>
            <button
              type="button"
              className="p-1.5 rounded-full hover:bg-white/15 transition-colors text-gray-400"
            >
              <SkipForward className="size-4" />
            </button>
          </div>
        </div>

        {/* Wallpaper Picker */}
        <div className="bg-white/10 rounded-xl p-2.5 border border-white/5 space-y-1.5">
          <p className="text-[11px] font-semibold text-gray-300 flex items-center gap-1.5">
            <ImageIcon className="size-3.5" /> Wallpaper Themes
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {wallpapers.map((wp, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelectWallpaper && onSelectWallpaper(wp.url)}
                className="group relative h-8 rounded-lg overflow-hidden border border-white/20 hover:border-blue-400 transition-all text-[9px] font-medium flex items-end p-1 text-white shadow-sm"
                style={{
                  background: wp.url.startsWith("linear-gradient")
                    ? wp.url
                    : `url(${wp.url}) center/cover no-repeat`,
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                <span className="relative z-10 truncate text-[8px] font-medium">
                  {wp.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
