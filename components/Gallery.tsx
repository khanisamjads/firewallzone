'use client';

import { motion } from 'framer-motion';
import { FaImage } from 'react-icons/fa';

const galleryImages = [
  { id: 1, title: 'Training Lab 1', description: 'Cisco Router Lab' },
  { id: 2, title: 'Training Lab 2', description: 'Switch Configuration Lab' },
  { id: 3, title: 'Classroom Session', description: 'Live CCNA Training' },
  { id: 4, title: 'Hands-on Practice', description: 'Students in Lab' },
  { id: 5, title: 'Certificate Ceremony', description: 'CCNA Graduates' },
  { id: 6, title: 'Lab Equipment', description: 'Firewall Devices' },
  { id: 7, title: 'Online Training', description: 'Virtual Lab Session' },
  { id: 8, title: 'Group Training', description: 'Corporate Batch' },
  { id: 9, title: 'Practical Session', description: 'Network Setup' },
  { id: 10, title: 'Faculty Team', description: 'Expert Trainers' },
  { id: 11, title: 'Institute Building', description: 'Firewall Zone Campus' },
  { id: 12, title: 'Student Success', description: 'Placement Drive' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take a look at our state-of-the-art training facilities and successful batches
          </p>
        </motion.div>

        {/* Gallery Grid - 4 per row, 3 rows = 12 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-background border border-border rounded-xl overflow-hidden aspect-square hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Placeholder for image - User will add actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center p-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <FaImage className="text-4xl text-gray-500 group-hover:text-primary transition-colors mb-2" />
                  <div className="text-sm font-semibold text-gray-500 group-hover:text-foreground transition-colors text-center">
                    {image.title}
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-1">
                    {image.description}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
