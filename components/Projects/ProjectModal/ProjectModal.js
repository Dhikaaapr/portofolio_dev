import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[90vh] h-[85vh] flex items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white pointer-events-auto transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {project.isMobile ? (
          <div className="relative h-full aspect-[9/19] pointer-events-auto border-[12px] border-gray-900 rounded-[3rem] overflow-hidden bg-black shadow-2xl">
            <div className="absolute top-0 w-full h-full bg-black">
              <video
                src={`/projects/${project.video}`}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-fill"
              />
            </div>
            {/* Phone Notch/Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-2xl z-10"></div>
          </div>
        ) : (
          <div className="relative w-full max-w-5xl aspect-video pointer-events-auto rounded-xl overflow-hidden shadow-2xl bg-black border border-gray-800">
            <video
              src={`/projects/${project.video}`}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
