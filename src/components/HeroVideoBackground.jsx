import React, { useRef, useEffect, useState } from 'react';

/**
 * HeroVideoBackground
 * Self-contained looping video background strictly for the Hero section.
 * - Starts at `startTime` (different for each page).
 * - Loops seamlessly within [startTime, endTime].
 * - Auto-adapts to mobile vertical video (9:16) vs desktop video (16:9).
 */
export default function HeroVideoBackground({ startTime = 0, endTime = 60 }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile, { passive: true });
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    try {
      video.currentTime = Math.max(0, startTime);
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    } catch (e) {}

    // Unlock on touch for strict mobile browsers
    const unlockOnTouch = () => {
      if (video) video.play().catch(() => {});
      window.removeEventListener('touchstart', unlockOnTouch);
      window.removeEventListener('click', unlockOnTouch);
    };
    window.addEventListener('touchstart', unlockOnTouch, { passive: true, once: true });
    window.addEventListener('click', unlockOnTouch, { passive: true, once: true });

    // Loop strictly inside [startTime, endTime]
    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime || video.currentTime < (startTime - 1)) {
        try {
          video.currentTime = startTime;
          video.play().catch(() => {});
        } catch (e) {}
      }
    };

    const handleEnded = () => {
      try {
        video.currentTime = startTime;
        video.play().catch(() => {});
      } catch (e) {}
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('touchstart', unlockOnTouch);
      window.removeEventListener('click', unlockOnTouch);
    };
  }, [startTime, endTime, isMobile]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#0f1115]">
      <video
        key={isMobile ? `mobile-${startTime}` : `desktop-${startTime}`}
        ref={videoRef}
        className="w-full h-full min-h-full object-cover select-none pointer-events-none scale-105"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        style={{
          objectPosition: 'center 40%',
          filter: 'contrast(106%) brightness(88%) saturate(110%)'
        }}
      >
        {isMobile ? (
          <>
            <source src="/MAR_VIDEO_MOBILE_VERTICAL.mp4" type="video/mp4" />
            <source src="/MAR_VIDEO_DESKTOP.mp4" type="video/mp4" />
          </>
        ) : (
          <>
            <source src="/MAR_VIDEO_DESKTOP.mp4" type="video/mp4" />
            <source src="/MAR_CONS_VIDEO.mp4" type="video/mp4" />
          </>
        )}
      </video>

      {/* Cinematic dark gradient overlay extending downward smoothly into matte black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115]/50 via-transparent to-[#0f1115] pointer-events-none" />
    </div>
  );
}
