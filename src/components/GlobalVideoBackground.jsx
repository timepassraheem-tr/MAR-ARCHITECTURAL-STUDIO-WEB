import React, { useRef, useEffect, useState } from 'react';

export default function GlobalVideoBackground({ timeRange = [0, 60] }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const timeRangeRef = useRef(timeRange);
  const targetTimeRef = useRef(timeRange[0] || 0);
  const rafIdRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile, { passive: true });
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Update target time on section change
  useEffect(() => {
    timeRangeRef.current = timeRange;
    targetTimeRef.current = timeRange[0] || 0;
  }, [timeRange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    // Force video readiness
    const unlockVideo = () => {
      if (video) {
        video.muted = true;
        video.play().then(() => video.pause()).catch(() => {});
      }
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
      window.removeEventListener('scroll', unlockVideo);
    };

    window.addEventListener('touchstart', unlockVideo, { passive: true, once: true });
    window.addEventListener('click', unlockVideo, { passive: true, once: true });
    window.addEventListener('scroll', unlockVideo, { passive: true, once: true });

    // High performance smooth scrubbing & parallax RAF loop
    const updateScrubbingAndParallax = () => {
      if (video) {
        // Calculate scroll progress across the page
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const scrollFraction = docH > 0 ? Math.max(0, Math.min(1, currentY / docH)) : 0;

        const [startSec, endSec] = timeRangeRef.current || [0, 60];
        const span = Math.max(1, endSec - startSec);
        const target = startSec + (scrollFraction * span);
        targetTimeRef.current = target;

        // Smooth video frame interpolation (lerp factor 0.18)
        const currentVideoTime = video.currentTime;
        const diff = targetTimeRef.current - currentVideoTime;

        if (Math.abs(diff) > 0.005) {
          try {
            video.currentTime = currentVideoTime + (diff * 0.18);
          } catch (e) {}
        }

        // Luxurious architectural Parallax Depth translation
        if (containerRef.current) {
          // Slight vertical parallax shift and cinematic gentle scale
          const parallaxOffset = (scrollFraction - 0.5) * -45; // Smooth -22px to +22px shift
          const scaleOffset = 1.05 + (scrollFraction * 0.03); // Subtle cinematic breathe
          containerRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(${scaleOffset})`;
        }
      }

      rafIdRef.current = requestAnimationFrame(updateScrubbingAndParallax);
    };

    rafIdRef.current = requestAnimationFrame(updateScrubbingAndParallax);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
      window.removeEventListener('scroll', unlockVideo);
    };
  }, [isMobile]);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <div 
        ref={containerRef}
        className="w-full h-full absolute inset-0 transition-transform duration-75 ease-out"
        style={{ willChange: 'transform' }}
      >
        <video
          key={isMobile ? 'vertical-mobile' : 'desktop-view'}
          ref={videoRef}
          className="w-full h-full object-cover select-none pointer-events-none"
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
      </div>

      {/* Subtle cinematic gradient overlay to ensure perfect readability on mobile & desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
    </div>
  );
}
