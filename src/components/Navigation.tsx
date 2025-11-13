import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`transition-colors ${
                isScrolled ? 'text-[#1E3A8A]' : 'text-white'
              } hover:text-[#2563EB]`}
            >
              實習成果網頁
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('work')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              } hover:text-[#2563EB]`}
            >
              工作內容
            </button>
            <button
              onClick={() => scrollToSection('learning')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              } hover:text-[#2563EB]`}
            >
              學習
            </button>
            <button
              onClick={() => scrollToSection('reflection')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              } hover:text-[#2563EB]`}
            >
              自我評估
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              } hover:text-[#2563EB]`}
            >
              聯絡我
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
