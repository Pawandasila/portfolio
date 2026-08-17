"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Folder, FileText, Terminal, Briefcase, Sparkles, X } from "lucide-react";
import useWindowsStore from "@/store/windows";
import { CLIENT_ENGAGEMENTS, locations, skills } from "@/constants";
import { ProjectItem } from "@/types";

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Spotlight = ({ isOpen, onClose }: SpotlightProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { openWindow } = useWindowsStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  if (!isOpen) return null;

  // Search through clients, projects, skills
  const q = query.toLowerCase().trim();

  const filteredClients: ProjectItem[] = (CLIENT_ENGAGEMENTS as unknown as ProjectItem[]).filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      (c.role && c.role.toLowerCase().includes(q)) ||
      (c.domain && c.domain.toLowerCase().includes(q)) ||
      (c.tags && c.tags.some((t) => t.toLowerCase().includes(q)))
  );

  const rawProjects = locations.work[1]?.children || [];
  const personalProjects: ProjectItem[] = rawProjects as unknown as ProjectItem[];
  const filteredProjects: ProjectItem[] = personalProjects.filter(
    (p) =>
      p.name?.toLowerCase().includes(q) ||
      p.title?.toLowerCase().includes(q) ||
      p.tags?.some((t: string) => t.toLowerCase().includes(q))
  );

  const allSkillsList = Object.entries(skills).flatMap(([category, list]) =>
    list.map((s) => ({ ...s, category }))
  );
  const filteredSkills = allSkillsList.filter((s) => s.name.toLowerCase().includes(q));

  const handleSelectClient = (client: ProjectItem) => {
    openWindow("project-detail", { project: client });
    handleClose();
  };

  const handleSelectProject = (project: ProjectItem) => {
    openWindow("project-detail", { project });
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-28 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-[#1e1e1e]/90 text-white rounded-2xl shadow-2xl border border-white/15 overflow-hidden backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="size-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Spotlight Search: type a client, project, or skill..."
            className="w-full bg-transparent text-lg text-white placeholder:text-gray-500 outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 cursor-pointer"
            >
              <X className="size-4" />
            </button>
          )}
          <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400 font-mono">ESC</span>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 custom-scrollbar">
          {/* Quick Actions */}
          {!q && (
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase px-2 mb-1.5">
                Quick Shortcuts
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    openWindow("finder", { activeCategory: "Client Work" });
                    handleClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Briefcase className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Client Engagements</p>
                    <p className="text-xs text-gray-400">7 Client Projects &amp; Case Studies</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    openWindow("terminal");
                    handleClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Terminal className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Interactive Terminal</p>
                    <p className="text-xs text-gray-400">Run CLI commands &amp; view stats</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    openWindow("resume");
                    handleClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <FileText className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Pawan&apos;s Resume</p>
                    <p className="text-xs text-gray-400">View and download PDF</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    openWindow("safari", { view: "chat" });
                    handleClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Sparkles className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">AI Assistant</p>
                    <p className="text-xs text-gray-400">Ask questions about experience</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Client Engagements */}
          {filteredClients.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase px-2 mb-1.5 flex items-center justify-between">
                <span>Client Engagements ({filteredClients.length})</span>
                <span className="text-[10px] text-gray-400 font-normal">Direct Case Studies</span>
              </p>
              <div className="space-y-1">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    onClick={() => handleSelectClient(client)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                        <Briefcase className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate group-hover:text-blue-300">
                          {client.name} — <span className="text-gray-300 font-normal">{client.role}</span>
                        </p>
                        <p className="text-xs text-gray-400 truncate">{client.domain}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-gray-400 font-medium">{client.trafficImpact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-blue-400 uppercase px-2 mb-1.5">
                Personal Projects ({filteredProjects.length})
              </p>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProject(p)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                        <Folder className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate group-hover:text-blue-300">
                          {p.name || p.title}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{p.shortDescription}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{p.year || "2025"}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {filteredSkills.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase px-2 mb-1.5">
                Skills &amp; Tech Stack ({filteredSkills.length})
              </p>
              <div className="flex flex-wrap gap-1.5 px-2">
                {filteredSkills.map((s, i) => (
                  <span
                    key={i}
                    onClick={() => {
                      openWindow("terminal");
                      handleClose();
                    }}
                    className="cursor-pointer text-xs px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/30 transition-colors"
                  >
                    {s.name} <span className="text-[10px] text-emerald-400/70">({s.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-t border-white/10 text-[11px] text-gray-400">
          <span>Search client engagements, tech stack, and portfolio</span>
          <span className="font-mono">Pawan Dasila Portfolio • macOS</span>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
