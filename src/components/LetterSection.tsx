import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const LetterSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const letter = `అమ్మా 🤗

నువ్వే నా మొదటి 👩‍🏫 టీచర్, నా 💪 బలం, నా ప్రేరణ ✨.
నిన్ను చూసి నేనే చాలా inspire అయ్యాను ❤️.

నీ ప్రేమ 💖, నీ care 🤲 నా జీవితంలోనే పెద్ద gift 🎁.
నీ స్థానాన్ని ఎవరూ ఎన్నటికి తీసుకోలేరు … నువ్వే నా ప్రపంచం 🌍.

నా నవ్వు 😂, నా ధైర్యం 💪, నా కలలు 🌟 — ఇవన్నీ నువ్వు ఇచ్చినవే 🙏.
నీతో ఉండటం నా జీవితంలో అతిపెద్ద ఆశీర్వాదం 🙏💖.

నువ్వే నా జీవితం లో 👑 క్వీన్ 👸, నా సర్వస్వం 💕.
నువ్వు లేకపోతే నేను నేను కాదు 🙏.
నువ్వే నా ప్రపంచం 🌍, నా ప్రేమ ❤️, నా ఆనందం ✨.

ఈ రోజు నీ birthday 🎂 కాబట్టి ఒక మాట —
నిన్ను చాలా చాలా ప్రేమిస్తున్నా అమ్మా ❤️😍
నువ్వే నా hero 👑✨

హ్యాపీ బర్త్‌డే అమ్మా 🎂🥳💖`;

  useEffect(() => {
    if (currentIndex < letter.length) {
      const timer = setTimeout(() => {
        setDisplayedText(letter.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Typing speed

      return () => clearTimeout(timer);
    }
  }, [currentIndex, letter]);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-yellow-200/30" />
      
      {/* Background sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            A Letter From My Heart 💌
          </h2>
          <div className="flex justify-center gap-2 text-2xl">
            <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
            <Heart className="w-6 h-6 text-pink-400 fill-current animate-pulse" />
            <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Letter Paper */}
          <div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            </div>

            {/* Letter content */}
            <div className="relative z-10">
              <div className="text-gray-800 text-lg leading-relaxed font-serif">
                <motion.div
                  className="whitespace-pre-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-pink-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💝
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 text-3xl"
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🌸
              </motion.div>
            </div>

            {/* Golden border glow */}
            <div className="absolute inset-0 rounded-3xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 opacity-50" />
            </div>
          </div>

          {/* Shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-3xl blur-xl opacity-20 -z-10 transform translate-y-4" />
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                🌹
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;