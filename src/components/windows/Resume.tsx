"use client";

import React from "react";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import WindowsWrapper from "@/hoc/WindowsWrapper";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const resumeUrl = "/files/resume.pdf";

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="h-full w-full bg-[#525659] overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex justify-center">
        <div className="shadow-2xl h-fit">
          <Document
            file={resumeUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-[800px] w-[600px] bg-white text-gray-400">
                Loading Resume...
              </div>
            }
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={700}
                className="mb-4"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

const resumeWindow = WindowsWrapper(Resume, "resume", {
  isLight: true,
  initialWidth: "900px",
  initialHeight: "650px",
  headerSearch: (
    <div className="flex items-center justify-center w-full">
      <h2 className="text-[13px] font-medium text-gray-700">Resume.pdf</h2>
    </div>
  ),
  headerRight: (
    <div className="flex items-center gap-4 mr-4">
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/files/resume.pdf";
          link.download = "Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="icon p-1.5! hover:bg-black/5 rounded-md transition-colors"
        title="Download Resume"
      >
        <Download className="size-4 text-gray-600 hover:text-black" />
      </button>
    </div>
  ),
});

export default resumeWindow;
