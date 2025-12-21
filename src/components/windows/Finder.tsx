import {
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Folder,
  Home,
  LayoutGrid,
  Monitor,
  Search,
  Star,
  FileCode,
  Image as ImageIcon,
  Download,
} from "lucide-react";
import WindowsWrapper from "@/hoc/WindowsWrapper";

import useWindowsStore from "@/store/windows";
import { useState, useEffect } from "react";
import { locations } from "@/constants";
import Project from "./project";

const Finder = () => {
  const { openWindow, windows, updateWindowData } = useWindowsStore();
  const finderData = windows["finder"]?.data || {};
  const searchQuery = finderData.searchQuery || "";
  const navigationPath = finderData.navigationPath || [];

  const [activeCategory, setActiveCategory] = useState("Recents");

  // Sync activeCategory from window data if provided
  useEffect(() => {
    if (finderData.activeCategory) {
      setActiveCategory(finderData.activeCategory);
    }
  }, [finderData.activeCategory]);

  // Reset navigation path when changing categories
  useEffect(() => {
    if (activeCategory !== "Projects") {
      updateWindowData("finder", { navigationPath: [] });
    }
  }, [activeCategory, updateWindowData]);

  const favorites = [
    { name: "Recents", icon: <Clock /> },
    { name: "Projects", icon: <Folder /> },
    { name: "Desktop", icon: <Monitor /> },
    { name: "Downloads", icon: <Download /> },
  ];

  const allFiles = [
    { name: "Projects", icon: <Folder />, category: ["Recents", "Desktop"] },
    {
      name: "Resume.pdf",
      icon: <FileText className="text-red-500!" />,
      id: "resume",
      category: ["Recents", "Desktop", "Downloads"],
    },
  ];

  const activeFiles = allFiles.filter((file) =>
    file.category.includes(activeCategory)
  );

  const filteredFiles = activeFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileClick = (file: any) => {
    if (file.name === "Projects") {
      setActiveCategory("Projects");
      return;
    }
    if (file.id === "resume") {
      openWindow("resume");
    }
  };

  // --- Project Navigation Logic ---
  const getCurrentItems = () => {
    let current: any[] = locations.work; // Root [Internships, Projects]

    // Traverse based on navigationPath
    for (const pathId of navigationPath) {
      const found = current.find(
        (item: any) => item.name === pathId || item.id === pathId
      );
      if (found && found.children) {
        current = found.children;
      }
    }
    return current;
  };

  const handleProjectNavigate = (item: any) => {
    if (item.kind === "folder" || item.children) {
      // Drill down
      updateWindowData("finder", {
        navigationPath: [...navigationPath, item.name],
      });
    } else {
      // Open Detail
      openWindow("project-detail", { project: item });
    }
  };

  return (
    <div className="flex-1 flex bg-white h-full overflow-hidden">
      {/* Sidebar */}
      <aside className="finder-sidebar border-r border-gray-200">
        <section className="sidebar-section">
          <h3>Favorites</h3>
          {favorites.map((item) => (
            <div
              key={item.name}
              className={`sidebar-item transition-all duration-200 ${
                activeCategory === item.name
                  ? "bg-blue-500 text-white! font-medium shadow-sm [&_svg]:text-white!"
                  : "hover:bg-black/5 dark:hover:bg-white/5"
              }`}
              onClick={() => setActiveCategory(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 bg-white">
        {activeCategory === "Projects" ? (
          <Project
            items={getCurrentItems()}
            onNavigate={handleProjectNavigate}
          />
        ) : (
          <div className="finder-grid custom-scrollbar">
            {filteredFiles.map((file, i) => (
              <div
                key={i}
                className="file-item group"
                onClick={() => handleFileClick(file)}
              >
                {file.icon}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

// --- Header Components ---

const FinderHeaderSearch = () => {
  const { windows, updateWindowData } = useWindowsStore();
  const searchQuery = windows["finder"]?.data?.searchQuery || "";

  return (
    <div
      className="flex items-center gap-3 w-full justify-center"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="window-search max-w-[300px]">
        <Search className="search-icon opacity-50" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) =>
            updateWindowData("finder", { searchQuery: e.target.value })
          }
        />
      </div>
    </div>
  );
};

const FinderHeaderNav = () => {
  const { windows, updateWindowData } = useWindowsStore();
  const navigationPath = windows["finder"]?.data?.navigationPath || [];

  const handleBack = () => {
    if (navigationPath.length > 0) {
      const newPath = [...navigationPath];
      newPath.pop();
      updateWindowData("finder", { navigationPath: newPath });
    }
  };

  return (
    <div className="flex items-center gap-2 ml-4">
      <div className="flex items-center gap-0.5">
        <ChevronLeft
          className={`icon ${
            navigationPath.length > 0
              ? "opacity-100 hover:text-black cursor-pointer"
              : "opacity-30 cursor-default"
          }`}
          onClick={handleBack}
        />
        <ChevronRight className="icon opacity-30 cursor-default" />
      </div>
      <span className="text-sm font-semibold ml-2 text-gray-700">
        {navigationPath.length > 0
          ? navigationPath[navigationPath.length - 1]
          : "Projects"}
      </span>
    </div>
  );
};

const finderWindow = WindowsWrapper(Finder, "finder", {
  isLight: true,
  headerLeft: <FinderHeaderNav />,
  headerSearch: <FinderHeaderSearch />,
  headerRight: (
    <div className="flex items-center gap-4 mr-4">
      <LayoutGrid className="icon opacity-60 hover:text-black" />
      <div className="flex items-center gap-1">
        <Search className="icon p-1.5! opacity-60 hover:text-black" />
      </div>
    </div>
  ),
});

export default finderWindow;
