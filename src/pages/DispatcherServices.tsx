import { motion } from 'motion/react';
import { PhoneCall, Calendar, Map, ClipboardCheck, BarChart, Send, ShieldCheck, Zap } from 'lucide-react';

const dispatcherFeatures = [
  { 
    title: 'Live Route Dispatching', 
    desc: 'Real-time monitoring and rerouting based on traffic, weather, and venue demand.',
    icon: PhoneCall,
    color: 'bg-brand-primary'
  },
  { 
    title: 'Exclusive Inventory', 
    desc: 'Access to prime street parking and high-volume corporate campus spots.',
    icon: Calendar,
    color: 'bg-blue-600'
  },
  { 
    title: 'Compliance & Permits', 
    desc: 'We handle the paperwork, health inspections, and local city permit renewals.',
    icon: ClipboardCheck,
    color: 'bg-green-600'
  },
  { 
    title: 'Yield Management', 
    desc: 'Dynamic pricing suggestions and portion control optimization.',
    icon: BarChart,
    color: 'bg-orange-600'
  }
];

export function DispatcherServices() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">The Control Center</h1>
              <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 leading-[1.1]">Elite Dispatching <br /> <span className="text-brand-primary">Services.</span></h2>
              <p className="text-gray-500 text-lg italic leading-relaxed max-w-xl">
                The Food Trucks Association provides the industries only full-service dispatch operation. We are the brain behind your business, handling everything but the cooking.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">
                Book a Dispatcher
              </button>
              <div className="flex items-center gap-2 text-gray-400 italic font-bold text-sm px-4">
                <ShieldCheck size={20} className="text-green-500" />
                24/7 Support Guaranteed
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-gray-100 rounded-3xl p-2 aspect-[4/5] overflow-hidden rotate-2">
                    <img src="https://images.unsplash.com/photo-1596495573105-d14658dc1ee6?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-brand-primary rounded-3xl p-8 text-white aspect-square flex flex-col justify-end -rotate-3">
                    <Zap size={32} className="mb-4" />
                    <p className="text-2xl font-display font-black tracking-tight">Real-Time Routing</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 pt-12"
                >
                  <div className="bg-brand-secondary rounded-3xl p-8 text-white aspect-square flex flex-col justify-end rotate-3">
                    <Map size={32} className="mb-4 text-brand-primary" />
                    <p className="text-2xl font-display font-black tracking-tight">Site Selection</p>
                  </div>
                  <div className="bg-gray-100 rounded-3xl p-2 aspect-[4/5] overflow-hidden -rotate-2">
                    <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
             </div>
             {/* Decorative circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 mt-24 bg-gray-50">
        <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dispatcherFeatures.map((f, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 space-y-6 hover:-translate-y-2 transition-transform">
                  <div className={`${f.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg`}>
                    <f.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-black text-gray-900 leading-tight">{f.title}</h4>
                  <p className="text-gray-500 italic text-sm font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Control Panel Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-brand-secondary rounded-[4rem] px-8 py-20 lg:p-24 overflow-hidden relative shadow-2xl">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 text-white">
                  <h3 className="text-4xl md:text-5xl font-display font-black leading-tight">The Dispatcher's Dashboard</h3>
                  <p className="text-gray-400 italic text-lg max-w-lg">
                    See exactly where your fleet is at any moment. Monitor sales velocity, inventory levels, and upcoming job assignments in one integrated view.
                  </p>
                  <ul className="space-y-4">
                    {['24/7 Direct Radio Comms', 'Automated Health-Permit Tracking', 'Fuel & Logistics Payment Portal', 'Dynamic Revenue Forecasting'].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold italic">
                        <div className="w-2 h-2 rounded-full bg-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-brand-secondary px-10 py-4 rounded-xl font-black text-lg hover:bg-brand-primary hover:text-white transition-all">
                    Request Demo
                  </button>
                </div>

                <div className="relative">
                  <div className="bg-gray-800 rounded-[2rem] border-8 border-gray-700 shadow-2xl p-2 aspect video overflow-hidden">
                     <div className="w-full h-full bg-gray-950 rounded-xl p-6 space-y-6 font-mono text-[10px] text-brand-primary">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                           <p className="text-white font-bold tracking-widest uppercase">System: Operational</p>
                           <p className="animate-pulse">Live Link: Stable</p>
                        </div>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <div className="w-1/2 h-16 bg-white/5 rounded-lg border border-white/5 p-4">
                                 <p className="text-gray-500">Active Trucks</p>
                                 <p className="text-2xl text-white">1,492</p>
                              </div>
                              <div className="w-1/2 h-16 bg-white/5 rounded-lg border border-white/5 p-4">
                                 <p className="text-gray-500">Real-time Revenue</p>
                                 <p className="text-2xl text-white">$42,910.42</p>
                              </div>
                           </div>
                           <div className="h-32 bg-white/5 rounded-lg border border-white/5 p-4 flex items-end gap-1">
                              {[30, 60, 45, 90, 100, 80, 60, 40, 20, 50, 70, 90, 80, 60, 40, 30].map((h, i) => (
                                <div key={i} className="flex-grow bg-brand-primary/50 rounded-t-sm" style={{ height: `${h}%` }} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Decorative glowing shadow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 blur-[120px] -z-10" />
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
