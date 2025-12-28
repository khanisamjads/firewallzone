'use client';

import { motion } from 'framer-motion';
import { FaGoogle, FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Mohammed Imran',
    rating: 5,
    text: 'Completed CCNA and CCNP Security training here. Excellent lab facilities with real devices. The trainers are very experienced and helpful. Got placed in a top MNC immediately after course completion.',
    time: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Best institute for Networking in Hyderabad. I did my Palo Alto and Fortinet firewall training. The way they explain concepts with real-time scenarios is amazing. Highly recommended!',
    time: '1 month ago'
  },
  {
    id: 3,
    name: 'Asif Khan',
    rating: 5,
    text: 'Firewall Zone changed my career path. I had a gap of 2 years, but their career guidance and placement support helped me get a job as a Network Engineer. 25 years of experience really shows in their teaching.',
    time: '2 months ago'
  },
  {
    id: 4,
    name: 'Swathi Reddy',
    rating: 5,
    text: 'Wonderful learning experience. The "Cyber Security" course covers everything from basics to advanced tools. The lab is open all day for practice. Thank you Firewall Zone team.',
    time: '3 months ago'
  }
];

export default function StudentReviews() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
             <span className="text-2xl font-bold">4.9</span>
             <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => <FaStar key={i} />)}
             </div>
          </div>
          <p className="text-gray-400">Based on 229+ Reviews on Google</p>
        </div>

        <div className="overflow-x-auto pb-8 hide-scrollbar">
           <div className="flex gap-6 min-w-max px-4">
             {/* Google Summary Card */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-[300px] h-[280px] bg-white text-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center border border-gray-200"
             >
               <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                 <FaGoogle className="text-3xl text-red-500" />
               </div>
               <h3 className="text-xl font-bold mb-2">Firewall Zone</h3>
               <div className="flex items-center gap-1 text-yellow-500 text-xl mb-2">
                 {[...Array(5)].map((_, i) => <FaStar key={i} />)}
               </div>
               <p className="text-gray-600 font-medium">4.9 / 5.0</p>
               <p className="text-gray-500 text-sm mb-4">Based on 229+ reviews</p>
               <a 
                 href="https://www.google.com/search?q=firewall+zone+hyderabad+reviews" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
               >
                 Review Us on Google
               </a>
             </motion.div>

             {/* Review Cards */}
             {reviews.map((review, index) => (
               <motion.div
                 key={review.id}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="w-[350px] relative bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
               >
                 <div className="flex items-start justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <FaUserCircle className="text-4xl text-gray-400" />
                     <div>
                       <h4 className="font-bold text-foreground">{review.name}</h4>
                       <span className="text-xs text-gray-500">{review.time}</span>
                     </div>
                   </div>
                   <FaGoogle className="text-gray-300" />
                 </div>
                 
                 <div className="flex text-yellow-500 text-xs mb-4">
                   {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                 </div>

                 <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                   {review.text}
                 </p>
                 
                 <FaQuoteLeft className="text-primary/10 text-4xl absolute bottom-4 right-4" />
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
