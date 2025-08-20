import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';

const SurpriseSection = () => {
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);
  const [showMassiveAnimation, setShowMassiveAnimation] = useState(false);

  const handleSurpriseClick = () => {
    setSurpriseRevealed(true);
    setShowMassiveAnimation(true);

    setTimeout(() => {
      setShowMassiveAnimation(false);
    }, 8000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          {!surpriseRevealed ? (
            <motion.div
              key="surprise-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-8"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-8"
                animate={{
                  textShadow: [
                    "0 0 20px #ff6b9d",
                    "0 0 40px #c44569",
                    "0 0 20px #ff6b9d"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                One More Surprise! ✨
              </motion.h2>

              <motion.div
                className="text-6xl mb-8"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎁
              </motion.div>

              <motion.button
                onClick={handleSurpriseClick}
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl border-4 border-white/30"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 105, 180, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(255, 105, 180, 0.3)",
                    "0 15px 40px rgba(196, 69, 105, 0.4)",
                    "0 10px 30px rgba(255, 105, 180, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <Gift className="w-8 h-8" />
                  Click for a Surprise
                  <Sparkles className="w-8 h-8" />
                </div>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="surprise-message"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="space-y-8"
            >
              <motion.div
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-8 leading-tight"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  backgroundPosition: { duration: 3, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
                style={{
                  backgroundSize: "200% 200%",
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.5)"
                }}
              >
                To the best mom in the world,
                <br />
                may your days always shine
                <br />
                as bright as your smile
              </motion.div>

              <motion.div
                className="text-8xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💖
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Massive Animation Effects */}
        <AnimatePresence>
          {showMassiveAnimation && (
            <>
              {/* Massive Fireworks */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`mega-firework-${i}`}
                  className="absolute text-6xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 2, 3, 0],
                    opacity: [0, 1, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {['🎆', '✨', '🎇', '💥'][i % 4]}
                </motion.div>
              ))}

              {/* Floating Hearts */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`mega-heart-${i}`}
                  className="absolute text-4xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '100%',
                  }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: -window.innerHeight - 100,
                    x: (Math.random() - 0.5) * 200,
                    rotate: Math.random() * 360,
                    scale: [1, 1.5, 1]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {['💖', '💕', '💗', '💝', '❤️'][i % 5]}
                </motion.div>
              ))}

              {/* Balloons */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`mega-balloon-${i}`}
                  className="absolute text-5xl"
                  style={{
                    left: `${5 + (i * 6)}%`,
                    top: '100%',
                  }}
                  initial={{ y: 0 }}
                  animate={{
                    y: -window.innerHeight - 150,
                    x: (Math.random() - 0.5) * 100,
                    rotate: [0, 10, -10, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 8,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                >
                  🎈
                </motion.div>
              ))}

              {/* Massive Confetti */}
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={`mega-confetti-${i}`}
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#7bed9f', '#70a1ff', '#ffa502', '#ff4757'][i % 7],
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: (Math.random() - 0.5) * 800,
                    y: (Math.random() - 0.5) * 800,
                    rotate: Math.random() * 720,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 4,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Golden sparkles */}
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`golden-sparkle-${i}`}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 4,
                    repeat: 2
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={surpriseRevealed ? {
          background: [
            "radial-gradient(circle at 20% 50%, #ff6b9d 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #c44569 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, #f8b500 0%, transparent 50%)",
            "radial-gradient(circle at 60% 50%, #7bed9f 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #ff6b9d 0%, transparent 50%)"
          ]
        } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default SurpriseSection;