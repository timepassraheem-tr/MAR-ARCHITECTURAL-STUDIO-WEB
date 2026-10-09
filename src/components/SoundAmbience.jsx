import React, { useEffect, useRef } from 'react';

/**
 * Web Audio API synthesized cinematic ambient soundscape.
 * Generates an ethereal, deep architectural resonant drone (sub-bass + gentle low-pass filtered harmonic)
 * completely in-browser without requiring external MP3 downloads.
 */
export default function SoundAmbience({ isAudioActive }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  useEffect(() => {
    if (isAudioActive) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        if (!audioCtxRef.current) {
          const ctx = new AudioContext();
          audioCtxRef.current = ctx;

          // Master Gain
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
          masterGain.connect(ctx.destination);
          gainNodeRef.current = masterGain;

          // Low-pass filter for deep cinematic warmth
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(140, ctx.currentTime);
          filter.connect(masterGain);

          // Sub drone oscillator 1 (55Hz - A1 note)
          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(55, ctx.currentTime);
          osc1.connect(filter);
          osc1.start();

          // Sub drone oscillator 2 (110Hz - A2 subtle harmonic detuned)
          const osc2 = ctx.createOscillator();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(110.5, ctx.currentTime);
          
          const osc2Gain = ctx.createGain();
          osc2Gain.gain.setValueAtTime(0.03, ctx.currentTime);
          osc2.connect(osc2Gain);
          osc2Gain.connect(filter);
          osc2.start();
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.setValueAtTime(0.01, audioCtxRef.current.currentTime);
            gainNodeRef.current.gain.exponentialRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 2);
          }
        }
      } catch (e) {
        console.warn("AudioContext error:", e);
      }
    } else {
      if (audioCtxRef.current && gainNodeRef.current) {
        try {
          const ctx = audioCtxRef.current;
          gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
          setTimeout(() => {
            if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
              audioCtxRef.current.suspend();
            }
          }, 900);
        } catch (e) {}
      }
    }
  }, [isAudioActive]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  return null;
}
