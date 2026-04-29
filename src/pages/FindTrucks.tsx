import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MapPin, Star, Calendar, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const trucks = [
  { id: 1, name: 'Burger Blitz', type: 'Gourmet Burgers', location: 'Austin, TX', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop', rating: 4.9, availability: 'Available Now' },
  { id: 2, name: 'Taco Haven', type: 'Mexican', location: 'Los Angeles, CA', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop', rating: 4.8, availability: 'Booked' },
  { id: 3, name: 'Green Bowl', type: 'Salads & Vegan', location: 'Portland, OR', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop', rating: 4.7, availability: 'Available Now' },
  { id: 4, name: 'Wok n Roll', type: 'Asian Fusion', location: 'Seattle, WA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop', rating: 4.9, availability: 'Available Tomorrow' },
  { id: 5, name: 'Sushi Wheels', type: 'Japanese', location: 'San Francisco, CA', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop', rating: 4.6, availability: 'Available Now' },
  { id: 6, name: 'Sweet Treats', type: 'Desserts', location: 'Miami, FL', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop', rating: 4.8, availability: 'Booked' },
];

const categories = ['All', 'Gourmet Burgers', 'Mexican', 'Asian Fusion', 'Desserts', 'Japanese', 'Salads & Vegan'];
const cities = ['All', 'Austin, TX', 'Los Angeles, CA', 'Portland, OR', 'Seattle, WA', 'San Francisco, CA', 'Miami, FL'];

export function FindTrucks() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCity, setActiveCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrucks = trucks.filter(truck => {
    const matchesCategory = activeCategory === 'All' || truck.type === activeCategory;
    const matchesCity = activeCity === 'All' || truck.location === activeCity;
    const matchesSearch = truck.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          truck.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Truck Directory</h2>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">Find the Perfect Truck</h1>
          <p className="text-slate-500 max-w-2xl font-medium italic">Browse our exclusive network of professional food vendors. Filter by city, category, or availability to find your ideal match.</p>
        </div>

        {/* Filters */}
        <div className="glass-card p-10 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">Active Truck Dispatcher</h3>
            <div className="flex gap-4">
              <select 
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-600/20"
                value={activeCity}
                onChange={(e) => setActiveCity(e.target.value)}
              >
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              <select 
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-600/20"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or food category..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTrucks.length > 0 ? filteredTrucks.map((truck, index) => (
            <motion.div
              key={truck.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-[2rem] border border-slate-100 flex gap-5 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-24 h-24 bg-orange-50 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={truck.image} 
                  alt={truck.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900 group-hover:text-orange-600 transition-colors">{truck.name}</h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tight mb-2">
                    {truck.location} • {truck.type}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "px-3 py-1 text-[10px] font-black rounded-full tracking-wider",
                    truck.availability === 'Available Now' ? 'bg-green-100 text-green-700' : 
                    truck.availability === 'Booked' ? 'bg-slate-100 text-slate-500' : 'bg-orange-100 text-orange-700'
                  )}>
                    {truck.availability.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-[11px] font-bold">{truck.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-display font-black text-gray-900">No trucks found</h3>
              <p className="text-gray-500 italic">Try adjusting your filters or search keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
