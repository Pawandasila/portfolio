import { skills } from "@/constants";
import WindowsWrapper from "@/hoc/WindowsWrapper";

const Terminal = () => {
  return (
    <div className="window-terminal flex flex-col h-full bg-[#1e1e1e] text-white font-mono">
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="flex items-center gap-2 mb-2 text-green-400">
          <span>➜</span>
          <span className="text-blue-400">@pawandasila %</span>
          <span>ls skills/</span>
        </div>

        <div className="space-y-6 ml-6">
          {Object.entries(skills).map(([category, items]) => (
            <section key={category}>
              <h3 className="text-blue-400 mb-2 capitalize">
                {category.replace(/([A-Z])/g, " $1")}:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center group hover:bg-white/5 px-2 rounded"
                  >
                    <span className="text-green-400">• {skill.name}</span>
                    <span className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.proficiency} ({skill.years})
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6 text-green-400">
          <span>➜</span>
          <span className="text-blue-400">@pawandasila %</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

const TerminalWindow = WindowsWrapper(Terminal, "terminal");

export default TerminalWindow;
