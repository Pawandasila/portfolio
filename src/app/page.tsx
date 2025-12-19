"use client";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout";
import { Dock, Welcome } from "@/components/ui";
import { Finder, Safari, Terminal, ProjectDetail } from "@/components/windows";

const Resume = dynamic(() => import("@/components/windows/Resume"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full relative overflow-hidden">
      <Navbar />
      <Welcome />
      <Terminal />
      <Safari />
      <Finder />
      <Resume />
      <ProjectDetail />
      <Dock />
    </main>
  );
}
