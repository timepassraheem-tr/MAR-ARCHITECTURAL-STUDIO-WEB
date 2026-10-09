import React, { useRef, useEffect } from 'react';

export default function GlobalVideoBackground({ timeRange = [0, 60] }) {
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);
  const timeRangeRef = useRef(timeRange);

  const durationRef = useRef(60);
  const targetTimeRef = useRef(timeRange[0] || 0);
  const isSeekingRef = useRef(false);

  // Sync when page changes
  useEffect(() => {
    timeRangeRef.current = timeRange;
    const start = Math.max(0, timeRange[0]);
    targetTimeRef.current = start;
    if (videoRef.current && videoRef.current.readyState >= 1) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = start;
      } catch (e) {}
    }
  }, [timeRange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const onLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        durationRef.current = video.duration;
      }
      video.pause();
      video.currentTime = timeRangeRef.current[0] || 0.001;
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    if (video.readyState >= 1) onLoadedMetadata();

    const onSeeked = () => {
      isSeekingRef.current = false;
    };
    video.addEventListener('seeked', onSeeked);

    // Ultra-Responsive 60/120fps Synchronizer
    const updateLoop = () => {
      if (video && video.readyState >= 2) {
        // Direct scroll calculation on every RAF frame for 100% lockstep with Lenis!
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
        const docHeight = document.documentElement.scrollHeight;
        const windowH = window.innerHeight;
        const totalScrollable = docHeight - windowH;

        if (totalScrollable > 0) {
          const progress = Math.max(0, Math.min(1, scrollY / totalScrollable));
          const [startSec, endSec] = timeRangeRef.current || [0, durationRef.current];
          const maxSec = durationRef.current || 60;
          const actualStart = Math.min(startSec, maxSec);
          const actualEnd = Math.min(endSec, maxSec);
          const span = Math.max(0.5, actualEnd - actualStart);
          targetTimeRef.current = actualStart + progress * span;
        }

        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = target - current;

        // ADAPTIVE HYBRID PLAYBACK ENGINE:
        // When user scrolls forward (diff > 0.04s and within 2.5s catchup window):
        // PLAY the video forward with dynamic speed matching scroll velocity!
        // This yields continuous 60/120 FPS hardware-accelerated playback with ZERO sticking!
        if (diff > 0.04 && diff < 2.5) {
          const playbackSpeed = Math.min(4.0, Math.max(0.5, diff * 3.2));
          video.playbackRate = playbackSpeed;
          if (video.paused) {
            const p = video.play();
            if (p !== undefined) p.catch(() => {});
          }
        } 
        // When in sync (within 40 milliseconds):
        else if (Math.abs(diff) <= 0.04) {
          if (!video.paused) {
            video.pause();
          }
        } 
        // When scrolling backwards (diff < -0.04) or jumping large distance (diff >= 2.5):
        else {
          if (!video.paused) {
            video.pause();
          }
          if (!isSeekingRef.current && Math.abs(diff) > 0.06) {
            isSeekingRef.current = true;
            try {
              video.currentTime = target;
            } catch (e) {
              isSeekingRef.current = false;
            }
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('seeked', onSeeked);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover select-none pointer-events-none"
        preload="auto"
        muted
        playsInline
        controls={false}
        style={{ 
          objectPosition: 'center bottom',
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(106%) brightness(102%) saturate(106%)'
        }}
      >
        <source src="/MAR_CONS_VIDEO.mp4" type="video/mp4" />
        <source src="/MAR CONS VIDEO.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
