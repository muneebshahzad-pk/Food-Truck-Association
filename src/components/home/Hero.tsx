import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Truck, MapPin, ArrowRight, Play } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 xl:col-span-7"
        >
          <div className="glass-card p-10 md:p-14 space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              Direct Dispatcher Services
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-extrabold leading-[1.1] text-slate-900">
              Connecting Food Trucks <br />
              <span className="text-orange-600 font-serif italic">with Opportunities</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              The premier dispatching association for food truck logistics, event booking, and mobile vendor management.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition-all"
              >
                Find Trucks
              </button>
              <button
                className="bg-white/80 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-white transition-all"
              >
                Join as Vendor
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-12 xl:col-span-5 hidden xl:block"
        >
          <div className="relative z-10 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl space-y-8">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <div className="space-y-6">
              {[
                { step: '01', text: 'Register your food truck or event' },
                { step: '02', text: 'Get listed in our dispatch system' },
                { step: '03', text: 'Receive high-intent job requests' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className={cn("w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm", i === 0 ? "bg-orange-600" : "bg-white/10")}>
                    {item.step}
                  </span>
                  <p className="text-lg font-medium text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
