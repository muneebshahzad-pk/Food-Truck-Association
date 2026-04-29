import { motion } from 'motion/react';
import { Truck, Users, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom space-y-24">
        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">Our Story</h1>
              <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-tight">Empowering the <br /> <span className="text-brand-primary italic">Flavor Chasers.</span></h2>
              <p className="text-gray-500 text-lg italic leading-relaxed">
                Founded in 2018, the Food Trucks Association was born from a simple observation: food truck owners were spending more time on logistics than on their craft.
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-medium italic">
              We started in a small office in Austin, TX with a simple mission: to streamline the connection between mobile food vendors and the people who love their food. Today, we are the largest network of its kind, supporting thousands of vendors across North America.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
               <div>
                  <p className="text-4xl font-display font-black text-gray-900">5k+</p>
                  <p className="text-xs font-black uppercase tracking-widest text-brand-primary">Successful Events</p>
               </div>
               <div>
                  <p className="text-4xl font-display font-black text-gray-900">24/7</p>
                  <p className="text-xs font-black uppercase tracking-widest text-brand-primary">Dispatch Support</p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-gray-100 p-4 rounded-[4rem] -rotate-3 shadow-2xl relative z-10 overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?q=80&w=1978&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover rounded-[3.5rem]" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50 rounded-[4rem] px-8 lg:px-24">
           <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] italic">Core Values</h2>
              <h3 className="text-4xl font-display font-black text-gray-900">What We Stand For</h3>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'Quality First', desc: 'We only partner with the best food trucks and cleanest venues.', icon: Award },
                { title: 'Innovation', desc: 'Custom logistics software built specifically for mobile food.', icon: Truck },
                { title: 'Community', desc: 'Supporting local entrepreneurs and local economies.', icon: Heart },
                { title: 'Transparency', desc: 'Clear contracts, fair payouts, and honest communication.', icon: Users },
              ].map((val, i) => (
                <div key={i} className="text-center space-y-4">
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto text-brand-primary">
                      <val.icon size={28} />
                   </div>
                   <h4 className="text-xl font-display font-black text-gray-900">{val.title}</h4>
                   <p className="text-gray-500 italic text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Vision Section */}
        <section className="container-custom">
           <div className="bg-brand-secondary rounded-[4rem] overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                 <div className="p-12 lg:p-24 space-y-8 text-white">
                    <h3 className="text-4xl font-display font-black leading-tight">Our Vision for the Future</h3>
                    <p className="text-gray-400 italic text-lg leading-relaxed">
                      We envision a world where the best food isn't confined to a fixed location. A world where talented chefs can reach their audience anywhere, anytime, with minimal overhead and maximum efficiency.
                    </p>
                    <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-primary/20">
                      Join the Movement
                    </button>
                 </div>
                 <div className="relative min-h-[400px]">
                    <img src="https://images.unsplash.com/photo-1596495573105-d14658dc1ee6?q=80&w=2071&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-transparent to-transparent hidden lg:block" />
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
