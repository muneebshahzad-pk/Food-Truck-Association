import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const googleReviewsData = [
  {
    id: 1,
    author: 'Michael Rodriguez',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5,
    date: '2 days ago',
    text: 'The best thing to happen to the food truck industry in years. The dispatcher service is top-notch and always finds us the best high-traffic spots. 10/10 recommend!'
  },
  {
    id: 2,
    author: 'Sarah Thompson',
    avatar: 'https://i.pravatar.cc/150?u=sarah_t',
    rating: 5,
    date: '1 week ago',
    text: 'As an event organizer, the Food Truck Association has made my life so much easier. I can book multiple vetted trucks for my festivals with just one phone call.'
  },
  {
    id: 3,
    author: 'Jason Lee',
    avatar: 'https://i.pravatar.cc/150?u=jason',
    rating: 5,
    date: '2 weeks ago',
    text: 'Highly professional team. They helped us navigate all the permits for our multi-city tour and kept our kitchen busy every single day.'
  },
  {
    id: 4,
    author: 'Elena Petrova',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 5,
    date: '1 month ago',
    text: 'Game changer. Our revenue increased by 40% after just two months of being listed in the directory. The community support is also amazing.'
  }
];

export function GoogleReviews() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Customer Trust</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">Excellent on Google</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} fill="currentColor" />)}
              </div>
              <span className="text-slate-900 font-bold text-xl">4.9/5</span>
              <span className="text-slate-400 text-sm font-medium italic">based on 1,284 reviews</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
             <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-bold text-slate-900">Google Business</span>
             </div>
             <a href="#" className="text-orange-600 font-bold text-sm hover:underline">Write a review</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleReviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2.5rem] space-y-4 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{review.author}</h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-1">{review.date}</p>
                  </div>
                  <div className="ml-auto">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed line-clamp-4">"{review.text}"</p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Review</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
