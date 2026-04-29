import { motion } from 'motion/react';
import { Calendar, PhoneCall, ShieldCheck, Map, Users } from 'lucide-react';

const services = [
  {
    title: 'Truck Dispatching',
    description: 'Expert dispatchers managing your schedule, logistics, and job assignments in real-time.',
    icon: PhoneCall,
  },
  {
    title: 'Event Booking',
    description: 'Access to exclusive festivals, corporate events, and large-scale public gatherings.',
    icon: Calendar,
  },
  {
    title: 'Vendor Management',
    description: 'Comprehensive portal to manage your profile, documents, and performance metrics.',
    icon: Users,
  },
  {
    title: 'Verified Vendors',
    description: 'A network of background-checked and health-department-approved food truck professionals.',
    icon: ShieldCheck,
  },
  {
    title: 'Route Optimization',
    description: 'Advanced data models to help you find the most profitable locations at any given time.',
    icon: Map,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Our Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">Expert Services for Modern Food Entrepreneurs</h3>
              <p className="text-slate-500 text-lg leading-relaxed italic">
                We handle the backend logistics so you can focus on what you do best: making incredible food. From dispatching to site selection, we're your partner in success.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 glass-card hover:bg-white transition-all group"
                >
                  <service.icon className="text-orange-600 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl glass-card p-4">
                <img 
                  src="https://images.unsplash.com/photo-1596495573105-d14658dc1ee6?q=80&w=2071&auto=format&fit=crop" 
                  alt="Food Truck Dispatch Center" 
                  className="w-full h-full object-cover aspect-square rounded-[2rem]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-[2rem]" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="text-orange-400 font-black uppercase tracking-widest text-xs mb-2">Exclusive Access</p>
                  <p className="text-2xl font-display font-black">Join 2,000+ vendors nationwide.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
