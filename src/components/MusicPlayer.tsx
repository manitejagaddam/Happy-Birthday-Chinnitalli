import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import song from "/audio/song.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(song);
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 1.0;
    audio.currentTime = 40;
    audio.muted = true;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);

        // 🔥 unmute after 2 seconds
        setTimeout(() => {
          audio.muted = false;
          setIsMuted(false);
        }, 2000);

        // cleanup listener once successful
        document.removeEventListener("click", tryPlay);
        document.removeEventListener("keydown", tryPlay);
      } catch (err) {
        console.log("⚠️ Autoplay blocked, waiting for interaction.");
      }
    };

    // try immediately
    tryPlay();

    // fallback: wait for first interaction
    document.addEventListener("click", tryPlay);
    document.addEventListener("keydown", tryPlay);

    return () => {
      audio.pause();
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("keydown", tryPlay);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="backdrop-blur-lg bg-white/20 rounded-2xl border border-white/30 shadow-2xl p-4">
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-5 h-5 ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Music Info */}
          <div className="text-white">
            <p className="text-sm font-medium">🎵 Birthday Tune</p>
            <motion.div
              className="flex gap-1 mt-1"
              animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-3 bg-pink-300 rounded-full"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animation: isPlaying ? "bounce 1s infinite" : "none",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Mute Button */}
          <motion.button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </motion.button>
        </div>

        {/* Music Notes Animation */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`note-${i}`}
                  className="absolute text-pink-300 text-sm pointer-events-none"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: "100%",
                  }}
                  initial={{ y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    y: -40,
                    opacity: [1, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut",
                  }}
                >
                  ♪
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
