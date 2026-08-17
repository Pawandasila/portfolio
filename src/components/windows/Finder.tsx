"use client";

import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Folder,
  LayoutGrid,
  List,
  Search,
  Briefcase,
  Sparkles,
  Users,
} from "lucide-react";
import WindowsWrapper from "@/hoc/WindowsWrapper";
import useWindowsStore from "@/store/windows";
import { useState } from "react";
import { CLIENT_ENGAGEMENTS, locations } from "@/constants";
import { ProjectItem, InternshipItem } from "@/types";

const Finder = () => {
  const { openWindow, windows } = useWindowsStore();
  const finderData = windows["finder"]?.data || {};
  const searchQuery = (finderData.searchQuery as string) || "";
  const storeCategory = (finderData.activeCategory as string) || "Client Work";

  const [activeCategory, setActiveCategory] = useState<string>(storeCategory);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedDomain, setSelectedDomain] = useState<string>("All");

  const categories = [
    {
      name: "Client Work",
      icon: <Briefcase className="size-4 text-amber-500" />,
      badge: "7",
    },
    {
      name: "Personal Projects",
      icon: <Sparkles className="size-4 text-blue-500" />,
      badge: "5",
    },
    {
      name: "Internships",
      icon: <Folder className="size-4 text-emerald-500" />,
      badge: "2",
    },
    { name: "Resume", icon: <FileText className="size-4 text-red-500" /> },
  ];

  const clientDomains = [
    "All",
    "E-Commerce",
    "EdTech",
    "Community",
    "Fitness",
    "Marketing",
    "Recruitment",
  ];

  // Filter items
  const getFilteredClients = (): ProjectItem[] => {
    let list: ProjectItem[] = CLIENT_ENGAGEMENTS as unknown as ProjectItem[];
    if (selectedDomain !== "All") {
      list = list.filter((c) =>
        c.domain?.toLowerCase().includes(selectedDomain.toLowerCase()),
      );
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.role && c.role.toLowerCase().includes(q)) ||
          (c.tags && c.tags.some((t) => t.toLowerCase().includes(q))) ||
          c.shortDescription.toLowerCase().includes(q),
      );
    }
    return list;
  };

  const getFilteredPersonalProjects = (): ProjectItem[] => {
    const rawList = locations.work[1]?.children || [];
    let list: ProjectItem[] = rawList as unknown as ProjectItem[];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.title?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  };

  const getFilteredInternships = (): InternshipItem[] => {
    const rawList = locations.work[2]?.children || [];
    return rawList as unknown as InternshipItem[];
  };

  const handleOpenClient = (client: ProjectItem) => {
    openWindow("project-detail", { project: client });
  };

  const handleOpenProject = (project: ProjectItem) => {
    openWindow("project-detail", { project });
  };

  const handleOpenInternship = (intern: InternshipItem) => {
    openWindow("project-detail", {
      project: {
        id: intern.id,
        title: intern.title,
        name: intern.name,
        company: intern.company,
        role: intern.position,
        shortDescription: intern.description.slice(0, 120),
        description: intern.description,
        tags: intern.tags,
        duration: intern.duration,
      },
    });
  };

  return (
    <div className="flex-1 flex bg-[#fbfbfb] h-full overflow-hidden select-none text-gray-900">
      {/* Sidebar */}
      <aside className="w-56 bg-[#f4f5f7] border-r border-gray-200 p-3 flex flex-col justify-between shrink-0">
        <div className="space-y-4">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-2.5 mb-1.5">
              Portfolio Folders
            </h3>
            <div className="space-y-0.5">
              {categories.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setActiveCategory(item.name);
                    if (item.name === "Resume") {
                      openWindow("resume");
                    }
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === item.name
                      ? "bg-blue-600 text-white shadow-xs font-semibold"
                      : "hover:bg-black/5 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        activeCategory === item.name
                          ? "bg-white/25 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-2xs space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Client Delivery Highlights
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[11px]">
                  Total Engagements:
                </span>
                <span className="font-bold text-amber-600">7 Clients</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[11px]">
                  Daily Traffic:
                </span>
                <span className="font-bold text-blue-600">2,400+ DAU</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[11px]">Core Stack:</span>
                <span className="font-semibold text-emerald-600">
                  Next.js / Supabase
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Me CTA Button */}
        <button
          type="button"
          onClick={() => openWindow("contact")}
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
        >
          <Briefcase className="size-3.5" /> Hire Pawan Dasila
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0 bg-[#fafafa] overflow-hidden">
        {/* Domain Filter Bar for Client Work */}
        {activeCategory === "Client Work" && (
          <div className="flex items-center justify-between px-6 py-2 bg-white border-b border-gray-200 gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-0.5">
              {clientDomains.map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setSelectedDomain(dom)}
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                    selectedDomain === dom
                      ? "bg-blue-600 text-white font-semibold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200/60"
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg shrink-0 border border-gray-200/60">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1 rounded cursor-pointer ${viewMode === "grid" ? "bg-white text-blue-600 shadow-2xs" : "text-gray-400"}`}
                title="Grid View"
              >
                <LayoutGrid className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-1 rounded cursor-pointer ${viewMode === "list" ? "bg-white text-blue-600 shadow-2xs" : "text-gray-400"}`}
                title="List View"
              >
                <List className="size-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 pb-32 custom-scrollbar">
          {activeCategory === "Client Work" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className="size-5 text-amber-500" />
                  Client Engagements &amp; High-Impact Deliveries
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Production web platforms delivered for diverse clients with
                  scalable backends, payment gateways, and high user traffic.
                </p>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {getFilteredClients().map((client) => (
                    <div
                      key={client.id}
                      onClick={() => handleOpenClient(client)}
                      className="group flex flex-col justify-between p-4.5 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer relative"
                    >
                      <div className="space-y-3">
                        {/* Title & Role Only (No category text or price above) */}
                        <div>
                          <h3 className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {client.name}
                          </h3>
                          <p className="text-xs text-purple-600 font-medium mt-0.5">
                            {client.role}
                          </p>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                          {client.shortDescription}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {client.tags
                            ?.slice(0, 4)
                            .map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Footer: Traffic & Action */}
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 text-xs">
                        <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                          <Users className="size-3.5 text-blue-500" />
                          {client.trafficImpact}
                        </span>
                        <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform font-semibold flex items-center gap-1">
                          Case Study →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden text-xs shadow-2xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold text-[11px]">
                        <th className="py-2.5 px-4">Client / Project</th>
                        <th className="py-2.5 px-4">Role</th>
                        <th className="py-2.5 px-4">Traffic Impact</th>
                        <th className="py-2.5 px-4">Core Tech</th>
                        <th className="py-2.5 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {getFilteredClients().map((client) => (
                        <tr
                          key={client.id}
                          onClick={() => handleOpenClient(client)}
                          className="hover:bg-blue-50/50 cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-4 font-semibold text-gray-900">
                            {client.name}
                          </td>
                          <td className="py-3 px-4 text-purple-600 font-medium">
                            {client.role}
                          </td>
                          <td className="py-3 px-4 text-blue-600 font-medium">
                            {client.trafficImpact}
                          </td>
                          <td className="py-3 px-4 text-gray-500">
                            {client.tags?.slice(0, 3).join(", ")}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                              View
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* PERSONAL PROJECTS VIEW */}
          {activeCategory === "Personal Projects" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="size-5 text-blue-500" />
                  Personal Projects &amp; Developer Tools
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Innovative AI platforms, developer CLI tools, and web
                  applications created by Pawan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {getFilteredPersonalProjects().map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleOpenProject(p)}
                    className="group flex flex-col justify-between p-4.5 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                          {p.name || p.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-mono font-medium">
                          {p.year || "2025"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {p.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {p.tags?.slice(0, 3).map((t: string, i: number) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 text-xs text-blue-600 font-semibold">
                      <span>Explore Case Study</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTERNSHIPS VIEW */}
          {activeCategory === "Internships" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Folder className="size-5 text-emerald-500" />
                  Engineering Internships
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Professional development experience at IIT Kharagpur and
                  GreenFuelEnergy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getFilteredInternships().map((intern) => (
                  <div
                    key={intern.id}
                    onClick={() => handleOpenInternship(intern)}
                    className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-base text-gray-900">
                          {intern.company}
                        </h3>
                        <p className="text-xs text-emerald-600 font-medium">
                          {intern.position}
                        </p>
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono font-medium">
                        {intern.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {intern.tags?.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 pt-2 border-t border-gray-100 flex justify-between items-center">
                      <span>View Details &amp; Contributions</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// --- Header Navigation & Search ---
const FinderHeaderSearch = () => {
  const { windows, updateWindowData } = useWindowsStore();
  const searchQuery = (windows["finder"]?.data?.searchQuery as string) || "";

  return (
    <div
      className="flex items-center gap-3 w-full justify-center"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="window-search max-w-[320px]">
        <Search className="search-icon text-gray-400" />
        <input
          type="text"
          placeholder="Search client engagements &amp; projects..."
          value={searchQuery}
          onChange={(e) =>
            updateWindowData("finder", { searchQuery: e.target.value })
          }
          className="text-xs"
        />
      </div>
    </div>
  );
};

const FinderHeaderNav = () => {
  const { windows } = useWindowsStore();
  const activeCategory =
    (windows["finder"]?.data?.activeCategory as string) || "Client Work";

  return (
    <div className="flex items-center gap-2 ml-3">
      <div className="flex items-center gap-0.5">
        <ChevronLeft className="icon opacity-40 cursor-default" />
        <ChevronRight className="icon opacity-40 cursor-default" />
      </div>
      <span className="text-xs font-bold text-gray-700 ml-1">
        Finder — {activeCategory}
      </span>
    </div>
  );
};

const finderWindow = WindowsWrapper(Finder, "finder", {
  isLight: true,
  initialWidth: "960px",
  initialHeight: "640px",
  headerLeft: <FinderHeaderNav />,
  headerSearch: <FinderHeaderSearch />,
  headerRight: (
    <div className="flex items-center gap-2 mr-3">
      <span className="text-[11px] font-mono text-gray-500 font-medium">
        7 Clients • 5 Apps
      </span>
    </div>
  ),
});

export default finderWindow;
