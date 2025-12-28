'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setEmail('');
    setIsLoading(false);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/50"
              >
                <FaEnvelope className="text-2xl text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with <span className="bg-gradient-primary bg-clip-text text-transparent">Latest Courses</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get exclusive course updates, industry insights, and special offers delivered to your inbox
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/50 rounded-xl p-6 text-center"
                >
                  <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-500 mb-2">Successfully Subscribed!</h3>
                  <p className="text-gray-400">Thank you for subscribing to our newsletter.</p>
                </motion.div>
              )}
            </form>

            {/* Trust Elements */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>1000+ subscribers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
