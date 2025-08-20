import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

const CakeCuttingSection = () => {
  const [cakeCut, setCakeCut] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const handleCakeCut = () => {
    setCakeCut(true);
    setShowExplosion(true);
    
    // Play party sound (you can add actual audio file)
    // const audio = new Audio('/party-sound.mp3');
    // audio.play();

    setTimeout(() => {
      setShowExplosion(false);
    }, 3000);

    setTimeout(() => {
      setCakeCut(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12"
        >
          Time to Cut the Cake! 🎂
        </motion.h2>

        <div className="relative">
          {/* Cake Animation */}
          <motion.div
            className="w-80 h-80 mx-auto mb-8"
            animate={cakeCut ? { scale: [1, 1.1, 0.9], rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Birthday Cake Emoji as placeholder for Lottie */}
            <div className="text-9xl md:text-[12rem] relative">
              <motion.span
                animate={cakeCut ? { opacity: 0 } : { opacity: 1 }}
                className="inline-block"
              >
                🎂
              </motion.span>
              
              {/* Cake slices after cutting */}
              <AnimatePresence>
                {cakeCut && (
                  <>
                    <motion.span
                      initial={{ x: 0, y: 0, rotate: 0 }}
                      animate={{ x: -50, y: 20, rotate: -15 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 text-8xl"
                    >
                      🍰
                    </motion.span>
                    <motion.span
                      initial={{ x: 0, y: 0, rotate: 0 }}
                      animate={{ x: 50, y: 20, rotate: 15 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 text-8xl"
                    >
                      🍰
                    </motion.span>
                  </>
                )}
              </AnimatePresence>

              {/* Candles */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                animate={cakeCut ? { opacity: 0, scale: 0 } : {}}
              >
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: cakeCut ? 0 : [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    >
                      🕯️
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Cut Cake Button */}
          <motion.button
            onClick={handleCakeCut}
            disabled={cakeCut}
            className={`
              px-8 py-4 text-xl font-bold rounded-full transition-all duration-300
              ${cakeCut 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
              }
              text-white shadow-lg backdrop-blur-sm border border-white/20
            `}
            whileHover={!cakeCut ? { scale: 1.05 } : {}}
            whileTap={!cakeCut ? { scale: 0.95 } : {}}
          >
            {cakeCut ? 'Enjoy! 😋' : 'Cut the Cake 🍰'}
          </motion.button>
        </div>

        {/* Explosion Effects */}
        <AnimatePresence>
          {showExplosion && (
            <>
              {/* Fireworks */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`firework-${i}`}
                  className="absolute text-4xl"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: [0, 1.5, 0], 
                    rotate: [0, 180, 360],
                    opacity: [1, 1, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                >
                  ✨
                </motion.div>
              ))}

              {/* Floating balloons */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`balloon-${i}`}
                  className="absolute text-3xl"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    top: '80%',
                  }}
                  initial={{ y: 0, x: 0, rotate: 0 }}
                  animate={{ 
                    y: -200, 
                    x: Math.random() * 100 - 50,
                    rotate: Math.random() * 360
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3, delay: i * 0.1 }}
                >
                  🎈
                </motion.div>
              ))}

              {/* Confetti explosion */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#7bed9f', '#70a1ff'][i % 5],
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    rotate: Math.random() * 360,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: Math.random() * 0.5 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CakeCuttingSection;