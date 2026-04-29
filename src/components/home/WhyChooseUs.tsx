import { CheckCircle2, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Reliable Dispatching',
    description: 'We use premium route planning software and human expertise to ensure your truck is always in the right place at the right time.',
    icon: Zap,
  },
  {
    title: 'Verified Network',
    description: 'Every vendor and event in our network is fully vetted for legal compliance, safety, and reputation.',
    icon: ShieldCheck,
  },
  {
    title: 'Data-Driven Bookings',
    description: 'We don\'t just guess. We analyze historical data and upcoming trend predictions to match vendors with the most profitable events.',
    icon: BarChart3,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden rounded-[4rem] mx-4 my-24 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="bg-orange-600 p-4 rounded-[3rem] rotate-3 shadow-2xl relative z-10 p-4 glass-card border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?q=80&w=1978&auto=format&fit=crop" 
                  alt="Food Truck Operations" 
                  className="rounded-[2rem] w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Decorative glowing blobs */}
             <div className="absolute top-1/4 -left-12 w-64 h-64 bg-orange-600/30 blur-[100px] -z-10" />
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-orange-400 uppercase tracking-widest">The Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold leading-tight tracking-tight">Why Partner With The Association?</h3>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                We believe that food truck owners shouldn't have to be logistics experts. We provide the infrastructure you need to win.
              </p>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="mt-1 bg-white/10 p-3 rounded-2xl text-orange-400 border border-white/10 backdrop-blur-sm">
                    <reason.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-display font-bold">{reason.title}</h4>
                    <p className="text-gray-400 text-sm italic leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 p-6 glass-card border-white/10 bg-white/5">
              <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
              <p className="text-sm font-medium text-gray-300 italic">
                100% Guaranteed payouts for every event booked through our association.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
