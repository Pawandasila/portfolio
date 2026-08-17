"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout";
import { Dock, Welcome, DesktopIcons, Spotlight, ControlCenter } from "@/components/ui";
import { Finder, Safari, Terminal, ProjectDetail, AboutMac } from "@/components/windows";

const Resume = dynamic(() => import("@/components/windows/Resume"), {
  ssr: false,
});

export default function Home() {
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState<string>("/images/bg.jpg");

  return (
    <main
      className="w-full h-full relative overflow-hidden select-none"
      style={{
        background: wallpaper.startsWith("linear-gradient")
          ? wallpaper
          : `url(${wallpaper}) center/cover no-repeat`,
      }}
    >
      {/* macOS Top Navbar */}
      <Navbar
        onToggleSpotlight={() => setSpotlightOpen((prev) => !prev)}
        onToggleControlCenter={() => setControlCenterOpen((prev) => !prev)}
      />

      {/* Desktop Clickable Shortcuts */}
      <DesktopIcons />

      {/* Desktop Ambient Background Typography */}
      <Welcome />

      {/* macOS App Windows */}
      <Terminal />
      <Safari />
      <Finder />
      <Resume />
      <ProjectDetail />
      <AboutMac />

      {/* Bottom Dock */}
      <Dock />

      {/* Spotlight Search Overlay (⌘K) */}
      <Spotlight
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
      />

      {/* macOS Control Center Popover */}
      <ControlCenter
        isOpen={controlCenterOpen}
        onClose={() => setControlCenterOpen(false)}
        onSelectWallpaper={(url) => setWallpaper(url)}
      />
    </main>
  );
}
