import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trucks = [
  {
    name: 'Burger Blitz',
    type: 'Gourmet Burgers',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    name: 'Taco Haven',
    type: 'Authentic Mexican',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    name: 'Green Bowl',
    type: 'Salads & Vegan',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    name: 'Wok n Roll',
    type: 'Asian Fusion',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
  },
];

export function FeaturedTrucks() {
  return (
    <section className="py-24 bg-transparent lg:py-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl space-y-4">
            <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Network Spotlight</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">Featured Food Trucks</h3>
            <p className="text-slate-500 font-medium italic">Discover the top-performing vendors in our association, verified for quality and reliability.</p>
          </div>
          <Link to="/find-trucks" className="group flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
            View Directory
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trucks.map((truck, index) => (
            <motion.div
              key={truck.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-4 rounded-[2.5rem] hover:bg-white transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                <img 
                  src={truck.image} 
                  alt={truck.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-gray-900">{truck.rating}</span>
                </div>
              </div>
              <div className="space-y-1.5 px-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">{truck.type}</p>
                <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{truck.name}</h4>
                <div className="flex items-center gap-1 text-slate-400">
                  <MapPin size={14} />
                  <span className="text-xs font-medium italic">{truck.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
