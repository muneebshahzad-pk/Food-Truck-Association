import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, Store, MapPin, Phone, ChefHat, CheckCircle2 } from 'lucide-react';

export function BecomeVendor() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center space-y-6 max-w-lg"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-display font-black text-gray-900">Application Received!</h2>
          <p className="text-gray-500 italic leading-relaxed">
            Thank you for applying to the Food Trucks Association. Our team will review your application and contact you within 2-3 business days.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-primary/20"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">Join the Elite</h1>
              <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-tight">Apply to Become a <br /> <span className="text-brand-primary underline decoration-brand-primary/20">Verified Vendor</span></h2>
              <p className="text-gray-500 text-lg italic leading-relaxed">
                Take the first step towards scaling your food truck business. Our association provides the leads, logistics, and support you need to dominate your market.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Exclusive Gigs', desc: 'Get matched with high-paying private and corporate events.', icon: Store },
                { title: 'Logistics Support', desc: 'Our dispatchers handle the complicated route planning.', icon: Truck },
                { title: 'Marketing Boost', desc: 'Be featured in our national directory and social media.', icon: ChefHat },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-brand-primary border border-gray-100">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-display font-black text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-brand-secondary text-white space-y-4 shadow-xl">
               <p className="text-brand-primary font-black uppercase tracking-widest text-xs italic">Association Stats</p>
               <div className="grid grid-cols-2 gap-8 pt-2">
                  <div>
                    <p className="text-3xl font-display font-black">2.5k+</p>
                    <p className="text-xs text-gray-400 font-medium italic">Active Vendors</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-black">$12M+</p>
                    <p className="text-xs text-gray-400 font-medium italic">Monthly Payouts</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/40 backdrop-blur-lg border border-white/60 p-10 rounded-[3rem] shadow-sm relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Truck Name</label>
                <input required type="text" placeholder="The Rolling Burger" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Food Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all appearance-none">
                    <option>Burgers</option>
                    <option>Tacos / Mexican</option>
                    <option>Asian Fusion</option>
                    <option>Desserts</option>
                    <option>Vegan / Health</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Base City</label>
                  <input required type="text" placeholder="Austin, TX" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all" />
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block px-1">Description</label>
                <textarea rows={3} placeholder="Tell us about your menu..." className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold mt-2 hover:bg-orange-600 transition-all shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
