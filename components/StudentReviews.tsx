'use client';

import { motion } from 'framer-motion';
import { FaGoogle, FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Khalid Mohammed',
    rating: 5,
    text: 'I completed the CCNA course at Firewall Zone, and it was an excellent experience. The explanations were clear, the instructor was knowledgeable, and the hands-on practice was very helpful. I highly recommend FirewallZone to anyone studying CCNA.',
    time: '1 week ago'
  },
  {
    id: 2,
    name: 'Aariz Khan',
    rating: 5,
    text: 'I had a great experience completing my CCNP Enterprise training here. The labs were very practical, and the concepts were explained clearly. It has really helped me prepare for my career goals in Riyadh. Highly recommended for any networking aspirant.!',
    time: '1 week ago'
  },
  {
    id: 3,
    name: 'Sai',
    rating: 5,
    text: 'My name is pavankalyan. I learned ccna in firewall zone It is easily understand and instructor also good and friendly.',
    time: '2 months ago'
  },
  {
    id: 4,
    name: 'shahbaz Khan',
    rating: 5,
    text: 'A very good institute for learning and skill development. The trainers explain concepts clearly and focus on practical knowledge. Regular assessments and doubt-clearing sessions really help in improving performance. Overall, it is worth joining for serious learners.',
    time: 'A Week ago'
  }
  {
    id: 5,
    name: 'Mohammed Rayaan',
    rating: 5,
    text: 'I completed my ccna in firewall zone and classes were excellent. If anybody is interested in networking course please go ahead for this institute blindly.',
    time: 'A Week ago'
  }
{
    id: 6,
    name: 'Sayan Kara',
    rating: 5,
    text: 'my self sayyan i recently completed the CCNP certification, and it turned out to be a solid step forward in my networking career. The course goes well beyond basic concepts and really pushes you to understand how enterprise networks work in real situations. Topics like routing, switching, troubleshooting, and network design are explained in depth, with a strong focus on practical application.',
    time: '1 Month ago'
  }
];

export default function StudentReviews() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Student Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
             <span className="text-xl sm:text-2xl font-bold">4.9</span>
             <div className="flex text-yellow-500 text-sm sm:text-base">
               {[...Array(5)].map((_, i) => <FaStar key={i} />)}
             </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400">Based on 229+ Reviews on Google</p>
        </div>

        <div className="overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
           <div className="flex gap-4 sm:gap-6 min-w-max">
             {/* Google Summary Card */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-[280px] sm:w-[300px] h-[260px] sm:h-[280px] bg-white text-gray-900 rounded-xl p-5 sm:p-6 shadow-lg flex flex-col items-center justify-center border border-gray-200 flex-shrink-0"
             >
               <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-3 sm:mb-4">
                 <FaGoogle className="text-2xl sm:text-3xl text-red-500" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold mb-2">Firewall Zone</h3>
               <div className="flex items-center gap-1 text-yellow-500 text-lg sm:text-xl mb-2">
                 {[...Array(5)].map((_, i) => <FaStar key={i} />)}
               </div>
               <p className="text-gray-600 font-medium text-sm sm:text-base">4.9 / 5.0</p>
               <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Based on 239+ reviews</p>
               <a 
                 href="https://www.google.com/search?q=firewall+zone+hyderabad+reviews" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-5 sm:px-6 py-1.5 sm:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
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
                 className="w-[300px] sm:w-[350px] relative bg-card border border-border rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col flex-shrink-0"
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
