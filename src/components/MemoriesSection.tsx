import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera } from 'lucide-react';
import pic1 from "/mani amma akka2.jpg"
import pic2 from "/amma nana function .jpg"
import pic3 from "/amma nana munnar.jpg"
import pic4 from "/mani and amma ammamam house.jpg"
// import pic5 from "/mani and amma beach.jpg"
import pic5 from "/akka amma nana.jpg"
import pic6 from "/family.jpg"

const MemoriesSection = () => {
  // Placeholder photos - replace with actual photo URLs
  const photos = [
    { id: 1, url: pic1, caption: 'Beautiful memories ❤️' },
    { id: 2, url: pic5, caption: 'Special moments 💖' },
    { id: 4, url: pic6, caption: 'Forever grateful 🙏' },
    { id: 3, url: pic3, caption: 'Love and laughter 😊' },
    { id: 5, url: pic2, caption: 'Cherished times 💕' },
    { id: 6, url: pic4, caption: 'Sweet memories 🌸' }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Beautiful Memories ✨
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Every photo tells a story of love, laughter, and the wonderful moments we've shared together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Photo Card */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>

                {/* Sparkles on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>

                {/* Hearts floating effect */}
                <motion.div
                  className="absolute top-2 left-2 text-red-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-6 h-6 fill-current" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-yellow-400/20 blur-xl" />
                </div>
              </div>

              {/* Photo frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm" />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Camera className="w-8 h-8 text-pink-300" />
          <span className="text-pink-500 text-lg font-medium">Made with love by Akka & Thammudu</span>
          <Heart className="w-8 h-8 text-red-400 fill-current" />
        </motion.div>
      </div>

      {/* Background sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </section>
  );
};

export default MemoriesSection;