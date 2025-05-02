// MediaItem.tsx (client component)
"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { FaTimes, FaVideo } from "react-icons/fa";

// Media item interface to handle both images and videos
export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string; // For videos, an optional thumbnail
  title?: string;
}

// Define the props using a simple structure instead of a function
interface MediaItemProps {
  item: MediaItem;
  titleText: string;
  projectImageText: string;
  closeText: string;
  browserNotSupportVideoText: string;
}

export const MediaItemClient = ({
  item,
  titleText,
  projectImageText,
  closeText,
  browserNotSupportVideoText,
}: MediaItemProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle video play
  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  // For images, render a simple image container with gallery view capability
  if (item.type === "image") {
    return (
      <>
        {/* Regular image thumbnail view */}
        <div
          className="relative h-64 bg-gray-300 rounded-lg overflow-hidden group cursor-pointer"
          onClick={() => setIsGalleryOpen(true)}
        >
          {/* Image component */}
          <Image
            src={item.url}
            alt={item.title ? titleText : projectImageText}
            fill
            className="rounded-lg"
          />

          {/* Caption overlay that appears on hover */}
          {item.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {titleText}
            </div>
          )}
        </div>

        {/* Gallery/Lightbox Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-screen w-full h-full flex flex-col">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2"
                onClick={() => setIsGalleryOpen(false)}
                aria-label={closeText}
              >
                <FaTimes size={24} />
              </button>

              {/* Enlarged image */}
              <div className="relative flex-grow flex items-center justify-center">
                <div className="relative w-full h-full max-h-[80vh]">
                  <Image
                    src={item.url}
                    alt={item.title ? titleText : projectImageText}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
              </div>

              {/* Caption */}
              {item.title && (
                <div className="text-white p-4 text-center text-xl">
                  {titleText}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  // For videos, render a video player with lazy loading
  return (
    <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
      {/* Video component with thumbnail */}
      <video
        ref={videoRef}
        className="w-full h-full rounded-lg"
        poster={item.thumbnail}
        controls
        preload="none" // For performance - only load when user interacts
        onPlay={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        onEnded={() => setIsVideoPlaying(false)}
      >
        <source src={item.url} type="video/mp4" />
        {browserNotSupportVideoText}
      </video>

      {/* Play button overlay - Only show when video is not playing */}
      {!isVideoPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handleVideoPlay}
        >
          <div className="bg-customTeal bg-opacity-80 rounded-full p-4 shadow-lg">
            <FaVideo className="text-white text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};
