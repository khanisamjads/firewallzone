'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaPhone, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-[200px] md:text-[300px] font-bold leading-none bg-gradient-primary bg-clip-text text-transparent select-none">
            404
          </h1>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the network void.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <FaHome />
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary transition-all"
          >
            <FaSearch />
            Browse Courses
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
            Or Try These Links
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/testimonials"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/gallery"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Gallery
            </Link>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <FaPhone className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="text-gray-400 mb-4">
              Our team is here to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918886192132"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                +91 888 6192132
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="mailto:info@firewall-zone.com"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                info@firewall-zone.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
