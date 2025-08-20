import React from 'react';
import HeroSection from './components/HeroSection';
import CakeCuttingSection from './components/CakeCuttingSection';
import MemoriesSection from './components/MemoriesSection';
import LetterSection from './components/LetterSection';
import SurpriseSection from './components/SurpriseSection';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <MusicPlayer />
      <HeroSection />
      <CakeCuttingSection />
      <MemoriesSection />
      <LetterSection />
      <SurpriseSection />
    </div>
  );
}

export default App;