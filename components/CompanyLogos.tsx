'use client';

import { motion } from 'framer-motion';
import { companyLogos } from '@/lib/data/institute';
import { FaBuilding } from 'react-icons/fa';

export default function CompanyLogos() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by leading organizations for professional IT training and corporate programs
          </p>
        </motion.div>

        {/* 16 Client Cards - 4 per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyLogos.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative bg-background border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col items-center justify-center h-32">
                {/* Placeholder for company logo - User will add images later */}
                <div className="text-center">
                  <FaBuilding className="text-3xl text-gray-500 group-hover:text-primary transition-colors mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-500 group-hover:text-primary transition-colors">
                    {company.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-primary rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Hiring Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
