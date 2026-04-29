import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Marco Rossi',
    role: 'Owner, Napoli Pizza Truck',
    text: 'Before joining the FTA, I was spending 20 hours a week just trying to find locations. Now, I just show up and cook. My revenue has doubled in 6 months.',
    avatar: 'https://i.pravatar.cc/150?u=marco',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Event Director, City Festival',
    text: 'Booking 15 food trucks used to be a nightmare of paperwork and coordination. FTA makes it a one-click process. Their vendors are the best in the business.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'David Chung',
    role: 'Owner, Wok-on-Wheels',
    text: 'The dispatchers are incredible. They found me a recurring spot at a business park that literally saved my business during the slow winter season.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Wall of Success</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">Trusted by Industry Leaders</h3>
          <p className="text-slate-500 font-medium leading-relaxed italic">Hear from the truck owners and event organizers who have scaled with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[3rem] relative flex flex-col items-center text-center space-y-6 group hover:bg-white transition-all"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-orange-600 p-4 rounded-2xl text-white shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                <Quote size={24} />
              </div>
              
              <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-sm">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="flex gap-1 text-orange-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 italic font-medium leading-relaxed">"{t.text}"</p>
              
              <div className="pt-6 border-t border-slate-100 w-full">
                <h4 className="font-display font-bold text-slate-900">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-widest font-black text-orange-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
