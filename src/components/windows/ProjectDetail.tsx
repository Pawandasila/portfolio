import React from "react";
import useWindowsStore from "@/store/windows";
import { ExternalLink, Layers, Users, Zap, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import WindowsWrapper from "@/hoc/WindowsWrapper";

const ProjectDetailContent = () => {
  const { windows } = useWindowsStore();
  const project = windows["project-detail"]?.data?.project;

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-500">
        No project data found.
      </div>
    );
  }

  const {
    title,
    shortDescription,
    description,
    results,
    link,
    github,
    image,
    tags,
    teamSize,
    duration,
    highlights,
    year,
    company,
  } = project;

  return (
    <div className="flex flex-col h-full bg-linear-to-b from-white to-gray-50 dark:from-[#1b1b1b] dark:to-[#111] text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* HERO */}

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="relative h-64 sm:h-80">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <Layers size={56} />
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-8 space-y-14">
            <div className="block w-full">
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-2">
                {company} • {year}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="mt-2 text-lg text-gray-200 max-w-3xl">
                {shortDescription}
              </p>
            </div>

            <section>
              <h2 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                <Zap size={14} /> Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <ReactMarkdown>{description}</ReactMarkdown>
              </div>
            </section>

            {/* Highlights */}
            {highlights?.length > 0 && (
              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                  Highlights
                </h2>
                <div className="space-y-4">
                  {highlights.map((h: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white dark:bg-white/5 rounded-xl p-4 border border-gray-100 dark:border-white/10"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                      <p className="text-gray-700 dark:text-gray-200">{h}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {results?.length > 0 && (
              <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                  Impact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {results.map((res: any, i: number) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 p-6 shadow-sm"
                    >
                      <div className="text-3xl font-bold">{res.metric}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {res.title}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT (STICKY) */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* CTA */}
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 space-y-3">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-[1.02] transition"
                  >
                    <ExternalLink size={18} /> Live Project
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
                  >
                    View Code
                  </a>
                )}
              </div>

              {/* META */}
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 space-y-4">
                <Meta
                  label="Team Size"
                  value={`${teamSize} people`}
                  icon={<Users size={14} />}
                />
                <Meta label="Year" value={year} icon={<Calendar size={14} />} />
                {duration && <Meta label="Duration" value={duration} />}
              </div>

              {/* TAGS */}
              {tags?.length > 0 && (
                <div className="rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Meta = ({ label, value, icon }: any) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="flex items-center gap-2 font-medium">
      {icon} {value}
    </span>
  </div>
);

const ProjectDetail = WindowsWrapper(ProjectDetailContent, "project-detail", {
  initialWidth: "960px",
  initialHeight: "660px",
  isLight: true,
  headerLeft: (
    <span className="ml-4 text-xs font-semibold uppercase tracking-wider">
      Project Case Study
    </span>
  ),
});

export default ProjectDetail;
