'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaLinkedin } from 'react-icons/fa';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialsPage() {
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
              Student <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400">
              Hear from our successful students who have transformed their careers with our training
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-2xl" />
              ))}
              <span className="text-foreground ml-2 text-xl font-bold">4.9/5</span>
              <span className="text-gray-400 ml-2">from 200+ reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-400">Happy Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-400">Placement Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-400">Hiring Companies</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <FaQuoteLeft className="text-3xl" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.feedback}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    {testimonial.company && (
                      <div className="text-xs text-primary">{testimonial.company}</div>
                    )}
                  </div>
                  {testimonial.linkedin && (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>

                {/* Course Badge */}
                <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {testimonial.course}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-400">Watch our students share their success stories</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: video * 0.1 }}
                className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-border hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-400 text-sm">Video Testimonial {video}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Be Our Next Success Story!</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful professionals who have transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Enroll Now
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
