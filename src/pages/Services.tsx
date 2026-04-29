import { motion } from 'motion/react';
import { Truck, Calendar, MapPin, ShieldCheck, BarChart3, Users, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: 'Professional Dispatching',
    desc: 'Our specialized dispatch team manages your entire operational lifecycle, from route optimization to on-the-ground logistics.',
    icon: Zap,
    link: '/dispatcher',
    benefits: ['24/7 Radio Support', 'Dynamic Routing', 'Yield Management']
  },
  {
    title: 'Event Placement',
    desc: 'Access our private marketplace of high-traffic events, from Coachella-style festivals to exclusive corporate luncheons.',
    icon: Calendar,
    link: '/find-trucks',
    benefits: ['Guaranteed Payouts', 'Verified Organizers', 'Site Preparation']
  },
  {
    title: 'Vendor Licensing',
    desc: 'We handle the red tape. Our team assists with health department permits, fire marshal inspections, and local city business licenses.',
    icon: ShieldCheck,
    link: '/become-vendor',
    benefits: ['Permit Tracking', 'Inspection Prep', 'Legal Representation']
  },
  {
    title: 'Route Analytics',
    desc: 'Stop guessing. Use our historical data engine to find the streets and events that generate the highest profit-per-hour.',
    icon: BarChart3,
    link: '/',
    benefits: ['Competitor Mapping', 'Trend Prediction', 'Sales Tracking']
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom space-y-24">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
           <h1 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">The Ecosystem</h1>
           <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-tight">Comprehensive Solutions for Mobile Food Success.</h2>
           <p className="text-gray-500 text-lg italic font-medium leading-relaxed">
             We have built the industry's most robust support system for food truck owners. Select a service below to learn how we can scale your operations.
           </p>
        </div>

        {/* Services mapping */}
        <div className="grid lg:grid-cols-2 gap-12">
           {allServices.map((service, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-gray-50 p-10 lg:p-16 rounded-[4rem] group hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100"
             >
                <div className="flex flex-col md:flex-row gap-10 items-start">
                   <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon size={36} />
                   </div>
                   <div className="space-y-6">
                      <h3 className="text-3xl font-display font-black text-gray-900 leading-tight">{service.title}</h3>
                      <p className="text-gray-500 italic font-medium leading-relaxed">{service.desc}</p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {service.benefits.map(b => (
                           <li key={b} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 italic">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                              {b}
                           </li>
                         ))}
                      </ul>

                      <Link to={service.link} className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-primary/20 pb-1 group-hover:border-brand-primary transition-all">
                         Learn More
                      </Link>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Feature grid bottom */}
        <section className="bg-brand-secondary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px]" />
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h3 className="text-4xl font-display font-black leading-tight">Beyond Operations: We Build Communities.</h3>
                 <p className="text-gray-400 italic text-lg leading-relaxed">
                   When you join the Association, you're not just buying a service. You're joining a fraternal network of local business owners committed to high standards and mutual success.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                       {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-12 h-12 rounded-full border-4 border-brand-secondary" referrerPolicy="no-referrer" />)}
                    </div>
                    <p className="text-sm font-bold italic text-white/60">Join <span className="text-white">500+ professionals</span> this month.</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: 'Network Score', val: '98%', icon: Award },
                   { label: 'Avg Growth', val: '+45%', icon: Zap },
                   { label: 'Cities Covered', val: '120+', icon: MapPin },
                   { label: 'Active Support', val: '24/7', icon: Users },
                 ].map((stat, i) => (
                   <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-2">
                      <stat.icon size={24} className="text-brand-primary mb-2" />
                      <p className="text-3xl font-display font-black leading-none">{stat.val}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
