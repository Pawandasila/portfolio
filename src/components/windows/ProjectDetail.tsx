"use client";

import React from "react";
import useWindowsStore from "@/store/windows";
import {
  ExternalLink,
  Layers,
  Zap,
  Briefcase,
  Globe,
  CheckCircle2,
  Code2,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import WindowsWrapper from "@/hoc/WindowsWrapper";
import Link from "next/link";
import { ProjectItem, ProjectResult } from "@/types";

const ProjectDetailContent: React.FC = () => {
  const { windows } = useWindowsStore();
  const project = windows["project-detail"]?.data?.project as ProjectItem | undefined;

  if (!project) {
    return (
      <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center h-full bg-[#fbfbfb]">
        <Briefcase className="size-10 mb-3 text-gray-400" />
        <p className="text-sm font-semibold">No project or client data selected.</p>
        <p className="text-xs text-gray-400 mt-1">Select an item from Finder to view its case study.</p>
      </div>
    );
  }

  const {
    title,
    name,
    shortDescription,
    description,
    results,
    link,
    github,
    tags,
    highlights,
    year,
    company,
    role,
    trafficImpact,
    domain,
  } = project;

  const isClientWork = !!trafficImpact || !!role;

  return (
    <div className="flex flex-col h-full bg-[#fbfbfb] text-gray-900 overflow-hidden select-text">
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* HERO BANNER - LIGHT ELEGANT GRADIENT */}
        <div className="relative bg-gradient-to-r from-blue-50 via-slate-100 to-indigo-100 text-gray-900 px-8 py-8 border-b border-gray-200">
          <div className="max-w-4xl relative z-10 space-y-3">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              {isClientWork && (
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1.5 shadow-2xs font-bold">
                  <Briefcase className="size-3.5 text-amber-600" /> Client Engagement
                </span>
              )}
              {domain && (
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-medium">
                  {domain}
                </span>
              )}
              {role && (
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200 font-medium">
                  {role}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 font-mono">
                {year || "2026"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {title || name}
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-normal">
              {shortDescription}
            </p>

            {/* Traffic Impact Pill */}
            {trafficImpact && (
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="bg-blue-50 border border-blue-300 rounded-xl px-3.5 py-1.5 flex items-center gap-2 shadow-2xs">
                  <span className="text-xs text-blue-800 font-medium">Traffic Impact:</span>
                  <span className="text-sm font-bold text-blue-700">{trafficImpact}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MAIN BODY GRID */}
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Case Study Overview & Highlights */}
          <div className="lg:col-span-8 space-y-6">
            {/* Impact / Results Metrics */}
            {results && results.length > 0 && (
              <section>
                <h2 className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2.5 flex items-center gap-1.5">
                  <Zap className="size-3.5 text-amber-500" /> Key Impact &amp; Metrics
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {results.map((res: ProjectResult, i: number) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-0.5"
                    >
                      <div className="text-lg font-extrabold text-blue-600">
                        {res.metric}
                      </div>
                      <div className="text-xs text-gray-600 font-medium leading-tight">
                        {res.title}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <section>
                <h2 className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-500" /> Technical Deliverables &amp; Architecture
                </h2>
                <div className="space-y-2">
                  {highlights.map((h: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200 shadow-2xs"
                    >
                      <span className="mt-1 size-2 rounded-full bg-emerald-500 shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Detailed Description */}
            <section>
              <h2 className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="size-3.5 text-blue-500" /> In-Depth Case Study
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs prose prose-sm max-w-none text-gray-800 leading-relaxed">
                <ReactMarkdown>{description}</ReactMarkdown>
              </div>
            </section>
          </div>

          {/* RIGHT: Actions & Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {/* Live CTAs */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2.5">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-xs active:scale-98"
                >
                  <Globe className="size-4" /> Open Live Project
                  <ExternalLink className="size-3.5 opacity-80" />
                </Link>
              )}

              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-xs transition-all border border-gray-200"
                >
                  <Code2 className="size-4" /> View Source Code
                </Link>
              )}

              <Link
                href="mailto:pawandasila06@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 font-medium text-xs transition-colors border border-amber-200"
              >
                Inquire Similar Solution
              </Link>
            </div>

            {/* Metadata Card */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2.5 text-xs">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Project Overview
              </h4>

              {company && (
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Client / Brand</span>
                  <span className="font-semibold text-gray-900">{company}</span>
                </div>
              )}

              {role && (
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Role</span>
                  <span className="font-semibold text-purple-600">{role}</span>
                </div>
              )}

              {trafficImpact && (
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Daily Traffic</span>
                  <span className="font-semibold text-blue-600">{trafficImpact}</span>
                </div>
              )}

              <div className="flex justify-between items-center py-1">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live &amp; Active
                </span>
              </div>
            </div>

            {/* Tech Stack Chips */}
            {tags && tags.length > 0 && (
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200/60"
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
  );
};

const ProjectDetail = WindowsWrapper(ProjectDetailContent, "project-detail", {
  initialWidth: "960px",
  initialHeight: "680px",
  isLight: true,
  headerLeft: (
    <span className="ml-3 text-xs font-semibold text-gray-700">
      Case Study Detail
    </span>
  ),
});

export default ProjectDetail;
