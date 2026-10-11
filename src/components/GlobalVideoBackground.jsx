import React, { useRef, useEffect, useState } from 'react';

export default function GlobalVideoBackground({ timeRange = [0, 60] }) {
  const videoRef = useRef(null);
  const timeRangeRef = useRef(timeRange);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile, { passive: true });
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Sync when page changes: smoothly seek to page start time and keep playing
  useEffect(() => {
    timeRangeRef.current = timeRange;
    const video = videoRef.current;
    if (video) {
      const start = Math.max(0, timeRange[0] || 0);
      try {
        video.currentTime = start;
        const p = video.play();
        if (p !== undefined) p.catch(() => {});
      } catch (e) {}
    }
  }, [timeRange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict attributes for mobile iOS/Android autoplay compatibility
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    // Force play immediately
    const startPlayback = () => {
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If mobile browser requires user interaction first, bind touch/click once
            const unlockOnInteraction = () => {
              if (video) video.play().catch(() => {});
              window.removeEventListener('touchstart', unlockOnInteraction);
              window.removeEventListener('touchend', unlockOnInteraction);
              window.removeEventListener('click', unlockOnInteraction);
            };
            window.addEventListener('touchstart', unlockOnInteraction, { passive: true, once: true });
            window.addEventListener('touchend', unlockOnInteraction, { passive: true, once: true });
            window.addEventListener('click', unlockOnInteraction, { passive: true, once: true });
          });
        }
      }
    };

    startPlayback();

    // Time update listener: Keep within section time range or loop seamlessly
    const handleTimeUpdate = () => {
      const [startSec, endSec] = timeRangeRef.current || [0, 60];
      const maxEnd = endSec || (video.duration && !isNaN(video.duration) ? video.duration : 60);
      
      // If reached end of section range, loop back to start of section
      if (video.currentTime >= maxEnd || video.currentTime < (startSec - 1)) {
        try {
          video.currentTime = startSec;
          video.play().catch(() => {});
        } catch (e) {}
      }
    };

    // If video ends, restart cleanly
    const handleEnded = () => {
      const startSec = timeRangeRef.current ? timeRangeRef.current[0] : 0;
      try {
        video.currentTime = startSec;
        video.play().catch(() => {});
      } catch (e) {}
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isMobile]);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <video
        key={isMobile ? 'vertical-mobile' : 'desktop-view'}
        ref={videoRef}
        className="w-full h-full object-cover select-none pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        style={{ 
          objectPosition: 'center center',
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(106%) brightness(95%) saturate(108%)'
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

      {/* Subtle cinematic gradient overlay to ensure perfect readability on mobile & desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
    </div>
  );
}
