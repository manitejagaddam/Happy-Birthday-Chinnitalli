import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating balloons */}
      <motion.div
        className="absolute top-20 left-10 text-6xl"
        animate={{
          y: [-20, -40, -20],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎈
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 text-5xl"
        animate={{
          y: [-30, -50, -30],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="absolute top-40 left-1/4 text-4xl"
        animate={{
          y: [-25, -45, -25],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🎈
      </motion.div>

      {/* Confetti elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#7bed9f', '#70a1ff'][i % 5],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main content */}
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4 relative"
            animate={{
              textShadow: [
                "0 0 20px #ff6b9d",
                "0 0 40px #c44569",
                "0 0 20px #ff6b9d"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Happy Birthday
          </motion.h1>
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
            className="flex items-center justify-center gap-4"
          >
            <Heart className="text-red-400 w-12 h-12" />
            <h2 className="text-5xl md:text-7xl font-bold text-pink-500">
              అమ్మ
            </h2>
            <Heart className="text-red-400 w-12 h-12" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-4 text-4xl"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            🎉
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            ❤️
          </motion.span>
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          >
            🎂
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🎁
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8"
        >
          <Sparkles className="w-8 h-8 text-yellow-300 mx-auto animate-spin" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;