import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import song from "/audio/song.mp3"

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Here you would add actual audio playback logic
    const audio = new Audio(song);
    if (isPlaying) audio.pause(); else audio.play();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Here you would add actual mute logic
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
                    animation: isPlaying ? 'bounce 1s infinite' : 'none'
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
                    top: '100%',
                  }}
                  initial={{ y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    y: -40,
                    opacity: [1, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
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