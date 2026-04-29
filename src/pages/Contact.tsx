import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h1 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">Get in Touch</h1>
              <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-tight">We're Here to <br /> <span className="text-brand-primary underline underline-offset-8 decoration-4">Support You.</span></h2>
              <p className="text-gray-500 text-lg italic leading-relaxed">
                Whether you're a truck owner looking for jobs or an organizer seeking world-class food, we want to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Email Us', info: 'contact@fta-trucks.com', icon: Mail },
                { title: 'Call Us', info: '+1 (555) 123-4567', icon: Phone },
                { title: 'Office', info: '123 Street Ave, Austin, TX', icon: MapPin },
                { title: 'Hours', info: 'Mon - Fri: 8am - 8pm EST', icon: Clock },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm shadow-gray-200/40">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic mb-1">{item.title}</p>
                    <p className="text-lg font-display font-black text-gray-900 leading-none">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group overflow-hidden rounded-[2.5rem] aspect-video">
               <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-brand-primary/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-display font-black text-2xl uppercase tracking-tighter">Visit Austin HQ</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
             <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center">
                   <MessageSquare size={24} />
                </div>
                <h3 className="text-3xl font-display font-black text-gray-900 leading-tight">Send a Message</h3>
             </div>
             
             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic px-1">First Name</label>
                      <input type="text" placeholder="John" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium italic transition-all" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic px-1">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium italic transition-all" />
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic px-1">Email Address</label>
                   <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium italic transition-all" />
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic px-1">Subject</label>
                   <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium italic transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Vendor Partnership</option>
                      <option>Event Booking</option>
                      <option>Dispatcher Service Inquiry</option>
                      <option>Technical Support</option>
                   </select>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic px-1">Message</label>
                   <textarea rows={6} placeholder="How can we help you today?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium italic resize-none transition-all"></textarea>
                </div>

                <button className="w-full bg-brand-primary text-white py-6 rounded-2xl font-display font-black text-xl shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-3 hover:translate-y-[-2px] active:translate-y-0 transition-all">
                   Send Message
                   <Send size={22} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
