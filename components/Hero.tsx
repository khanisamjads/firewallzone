'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaGraduationCap, FaNetworkWired, FaShieldAlt, FaBriefcase, FaServer, FaCertificate } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Hands-on Training Labs',
    description: 'Master networking with real Cisco routers, switches, and firewalls in our state-of-the-art labs.',
    bgGradient: 'from-blue-900 to-slate-900',
    bgImage: '/gallery/firewall-networking-1.jpeg',
    icon: FaServer,
    highlight: '100+ Devices'
  },
  {
    id: 2,
    title: 'Expert Faculty',
    description: 'Learn from Cisco Certified Internetwork Experts (CCIE) with 25+ years of industry experience.',
    bgGradient: 'from-slate-900 to-zinc-900',
    bgImage: '/gallery/class-1.jpeg',
    icon: FaGraduationCap,
    highlight: 'CCIE Trainers'
  },
  {
    id: 3,
    title: 'Career Transformation',
    description: 'Join 5000+ success stories. We provide 100% placement assistance and interview preparation.',
    bgGradient: 'from-zinc-900 to-neutral-900',
    bgImage: '/gallery/students-1.jpeg',
    icon: FaBriefcase,
    highlight: '95% Placement'
  },
  {
    id: 4,
    title: 'Global Certifications',
    description: 'Get certified in CCNA, CCNP, Palo Alto, Fortinet, and Azure to boost your career globally.',
    bgGradient: 'from-neutral-900 to-stone-900',
    bgImage: '/gallery/empowering-1.png',
    icon: FaCertificate,
    highlight: 'Cisco Official'
  },
  {
    id: 5,
    title: 'Flexible Learning',
    description: 'Choose between comprehensive classroom training or interactive online sessions that fit your schedule.',
    bgGradient: 'from-stone-900 to-gray-900',
    bgImage: '/gallery/best-networking-1.png',
    icon: FaNetworkWired,
    highlight: 'Hybrid Learning'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <>
      {/* Main Hero Slider */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={slides[currentSlide].bgImage} 
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Background Gradient & Pattern */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} opacity-60`}>
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Content (Text) - Spans 7 cols */}
                  <div className="lg:col-span-7 text-white space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                        {slides[currentSlide].description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        href="/courses"
                        className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 group"
                      >
                        Explore Courses
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all"
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right Content (Feature Box) - Spans 5 cols */}
                  <div className="lg:col-span-5 hidden lg:flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="relative"
                    >
                      {/* Glassmorphism Card */}
                      <div className="w-80 aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                        
                        {/* Glowing Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-500">
                            <CurrentIcon className="text-5xl text-white" />
                          </div>
                          <div className="text-4xl font-bold text-white mb-2">{slides[currentSlide].highlight}</div>
                          <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Key Highlight</div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse" />
                      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 left-0 w-full z-20">
          <div className="container mx-auto px-4 flex justify-between items-end">
            {/* Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section (Replaces old stats area) */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We help you become a <span className="text-primary">Skilled IT Professional</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Firewall Zone Institute of IT is a premier training center dedicated to transforming students into
            expert network engineers and cybersecurity professionals. With over 25 years of excellence,
            we bridge the gap between academic learning and industry requirements.
          </motion.p>
        </div>
      </section>
    </>
  );
}
