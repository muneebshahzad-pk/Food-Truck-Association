import { Link } from 'react-router-dom';
import { Truck, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-sm border-t border-white/40 pt-16 pb-8 text-slate-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-orange-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">Food Truck Association</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              Connecting food truck owners with massive opportunities. Professional dispatching and event booking services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900/5 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900/5 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900/5 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Find Trucks', 'Become a Vendor'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-500 hover:text-orange-600 transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Truck Dispatching', 'Event Booking', 'Vendor Management', 'Site Selection'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-600 flex-shrink-0" size={18} />
                <span className="text-slate-500 text-sm italic font-medium">123 Street Ave, Austin, TX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-600 flex-shrink-0" size={18} />
                <span className="text-slate-500 text-sm italic font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-600 flex-shrink-0" size={18} />
                <span className="text-slate-500 text-sm italic font-medium">contact@fta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-wider font-bold text-slate-400 uppercase">
          <p>© 2026 FOOD TRUCK ASSOCIATION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
