import React from "react";
import { Folder } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  items: any[];
  onNavigate: (item: any) => void;
}

const Project = ({ items, onNavigate }: ProjectProps) => {
  if (!items) return null;

  return (
    <div className="flex-1 p-6 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 items-start content-start overflow-y-auto custom-scrollbar">
      {items.map((item, i) => (
        <div
          key={item.id || i}
          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-500/10 transition-colors cursor-default text-center group"
          onClick={() => onNavigate(item)}
        >
          {item.kind === "folder" ? (
            <Folder
              className="size-12 text-blue-500 transition-all drop-shadow-sm group-hover:scale-105"
              fill="currentColor"
              fillOpacity={0.2}
            />
          ) : (
            <div className="relative">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="size-12 object-cover rounded-md shadow-sm group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/icons/file (1).svg";
                  }}
                />
              ) : (
                <Image
                  src="/icons/file (1).svg"
                  alt="File"
                  width={48}
                  height={48}
                  className="size-12 object-contain group-hover:scale-105 transition-transform"
                />
              )}
            </div>
          )}
          <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-tight w-full truncate font-medium">
            {item.name || item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Project;
