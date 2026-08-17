"use client";

import { useState, useRef, useEffect } from "react";
import { CLIENT_ENGAGEMENTS, skills } from "@/constants";
import WindowsWrapper from "@/hoc/WindowsWrapper";
import useWindowsStore from "@/store/windows";

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

const Terminal = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-gray-300 text-xs">
          <p className="text-emerald-400 font-bold">
            💻 Pawan Dasila — Terminal zsh session v2.0 (macOS Darwin)
          </p>
          <p className="text-gray-400">
            Type <span className="text-amber-300 font-bold">help</span> to view available commands or <span className="text-blue-300 font-bold">clients</span> to list client deliveries.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openWindow } = useWindowsStore();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    let response: React.ReactNode = null;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-amber-400 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <div><span className="text-emerald-400 font-bold">clients</span> — List all 7 client engagements & values</div>
              <div><span className="text-emerald-400 font-bold">skills</span> — Display full technical stack & tools</div>
              <div><span className="text-emerald-400 font-bold">projects</span> — List personal AI & web applications</div>
              <div><span className="text-emerald-400 font-bold">whoami</span> — Display bio & profile summary</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — Get direct email & social profiles</div>
              <div><span className="text-emerald-400 font-bold">finder</span> — Open macOS Finder window</div>
              <div><span className="text-emerald-400 font-bold">resume</span> — Open developer resume (PDF)</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "clients":
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">💼 Client Engagements & Production Deliveries (7):</p>
            <div className="space-y-2">
              {CLIENT_ENGAGEMENTS.map((c, i) => (
                <div key={c.id} className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-start">
                  <div>
                    <span className="text-emerald-300 font-bold">[{i + 1}] {c.name}</span>
                    <span className="text-gray-400 ml-2">({c.role})</span>
                    <p className="text-gray-300 text-[11px] mt-0.5">{c.domain} • {c.tags.slice(0, 3).join(", ")}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-300 font-mono font-bold block">{c.engagementValue}</span>
                    <span className="text-blue-300 text-[10px]">{c.trafficImpact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-3 text-xs">
            <p className="text-blue-400 font-bold">⚡ Core Technical Competencies:</p>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-amber-300 font-semibold capitalize mb-1">
                  {category.replace(/([A-Z])/g, " $1")}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill.name} className="px-2 py-0.5 rounded bg-white/10 text-emerald-300 text-[11px]">
                      {skill.name} <span className="text-gray-400 text-[10px]">({skill.proficiency})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1.5 text-xs text-gray-300">
            <p className="text-blue-400 font-bold">🚀 Featured Personal Projects:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-white font-semibold">TrendTide</span> — YouTube Analytics & AI Content Creation (Next.js, Neon DB)</li>
              <li><span className="text-white font-semibold">Finora</span> — AI Personal Finance Dashboard (React, Gemini AI, MongoDB)</li>
              <li><span className="text-white font-semibold">Pixora</span> — Web-Based AI Image Editor & Enhancer (Next.js 14, Canvas)</li>
              <li><span className="text-white font-semibold">PostBoy</span> — Modern AI-Assisted API Testing Platform (Next.js 15, Prisma)</li>
              <li><span className="text-white font-semibold">Parity CLI</span> — Dev Environment Consistency CLI (npm package)</li>
            </ul>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div className="space-y-1 text-xs text-gray-300">
            <p><span className="text-emerald-400 font-bold">Name:</span> Pawan Dasila</p>
            <p><span className="text-emerald-400 font-bold">Role:</span> Full Stack Developer & AI Software Engineer</p>
            <p><span className="text-emerald-400 font-bold">Education:</span> Graphic Era Hill University (B.Tech CSE, 2026)</p>
            <p><span className="text-emerald-400 font-bold">Focus:</span> Scalable Web Architectures, Supabase, Next.js, AI Integrations</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-blue-400 font-bold">📬 Contact Channels:</p>
            <p>📧 Email: <a href="mailto:pawandasila06@gmail.com" className="text-amber-300 underline">pawandasila06@gmail.com</a></p>
            <p>🐙 GitHub: <a href="https://github.com/pawandasila" target="_blank" className="text-amber-300 underline">github.com/pawandasila</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/pawan-dasila-92483b251/" target="_blank" className="text-amber-300 underline">linkedin.com/in/pawan-dasila</a></p>
          </div>
        );
        break;

      case "finder":
        openWindow("finder", { activeCategory: "Client Work" });
        response = <p className="text-xs text-blue-300">Opening Finder (Client Work)...</p>;
        break;

      case "resume":
        openWindow("resume");
        response = <p className="text-xs text-red-300">Opening Resume...</p>;
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            zsh: command not found: {rawCmd}. Type <span className="text-amber-300 font-bold">help</span> for a list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: response }]);
    setInputVal("");
  };

  return (
    <div
      className="window-terminal flex flex-col h-full bg-[#181818] text-white font-mono select-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="text-emerald-400">➜</span>
              <span className="text-blue-400">pawandasila@macbook</span>
              <span className="text-gray-400">~ %</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="ml-4">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 text-xs text-green-400">
          <span className="text-emerald-400">➜</span>
          <span className="text-blue-400">pawandasila@macbook</span>
          <span className="text-gray-400">~ %</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none font-mono text-xs caret-emerald-400"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

const TerminalWindow = WindowsWrapper(Terminal, "terminal", {
  initialWidth: "750px",
  initialHeight: "480px",
  headerLeft: <span className="ml-2 text-xs font-mono text-gray-400">zsh — 80x24</span>,
});

export default TerminalWindow;
