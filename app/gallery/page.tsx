'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages, FaLaptop, FaUsers, FaCertificate } from 'react-icons/fa';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'lab' | 'classroom' | 'events' | 'certifications';
  description?: string;
}

const categories = [
  { id: 'all', name: 'All Photos', icon: FaImages },
  { id: 'lab', name: 'Lab Facilities', icon: FaLaptop },
  { id: 'classroom', name: 'Classrooms', icon: FaUsers },
  { id: 'events', name: 'Events', icon: FaUsers },
  { id: 'certifications', name: 'Certifications', icon: FaCertificate },
];

// Placeholder gallery data
const galleryImages: GalleryImage[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800', title: 'State-of-art Networking Lab', category: 'lab', description: '100+ devices including routers, switches, and firewalls' },
  { id: '2', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', title: 'Modern Classroom', category: 'classroom', description: 'AC classrooms with comfortable seating' },
  { id: '3', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Student Workshop', category: 'events', description: 'Hands-on workshop on cyber security' },
  { id: '4', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800', title: 'CCNA Certification', category: 'certifications', description: 'Students receiving CCNA certificates' },
  { id: '5', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800', title: 'Cisco Equipment', category: 'lab', description: 'Latest Cisco routers and switches' },
  { id: '6', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800', title: 'Interactive Learning', category: 'classroom', description: 'Interactive sessions with expert trainers' },
  { id: '7', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Graduation Ceremony', category: 'events', description: 'Batch completion ceremony' },
  { id: '8', src: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800', title: 'Palo Alto Firewall', category: 'lab', description: 'Enterprise-grade firewall equipment' },
  { id: '9', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', title: 'Group Study', category: 'classroom', description: 'Collaborative learning environment' },
  { id: '10', src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', title: 'Industry Expert Session', category: 'events', description: 'Guest lecture by industry professional' },
  { id: '11', src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', title: 'CCNP Certificate', category: 'certifications', description: 'Proud CCNP certified students' },
  { id: '12', src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800', title: 'Server Room', category: 'lab', description: 'High-end server infrastructure' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (imageIndex - 1 + filteredImages.length) % filteredImages.length
      : (imageIndex + 1) % filteredImages.length;
    
    setImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400">
              Take a virtual tour of our world-class facilities, classrooms, and events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-card/50 sticky top-0 z-30 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-card border border-border text-gray-400 hover:text-primary hover:border-primary'
                }`}
              >
                <category.icon />
                {category.name}
              </motion.button>
            ))}
          </div>
          
          <div className="text-center mt-6 text-gray-400">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => openLightbox(image, index)}
                  className="group relative aspect-square bg-card rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary transition-all"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold mb-1">{image.title}</h3>
                      {image.description && (
                        <p className="text-gray-300 text-sm">{image.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-7xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-gray-300">{selectedImage.description}</p>
                )}
                <div className="text-gray-400 text-sm mt-2">
                  {imageIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Experience Our Facilities</h2>
            <p className="text-xl text-white/90 mb-8">
              Visit us to see our world-class infrastructure and meet our expert trainers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Schedule a Visit
              </a>
              <a
                href="/courses"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                View Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
