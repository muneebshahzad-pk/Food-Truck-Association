import { Hero } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { ServicesSection } from '../components/home/Services';
import { FeaturedTrucks } from '../components/home/FeaturedTrucks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Testimonials } from '../components/home/Testimonials';
import { GoogleReviews } from '../components/home/GoogleReviews';
import { motion } from 'motion/react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <Hero />
      <HowItWorks />
      <ServicesSection />
      <FeaturedTrucks />
      <WhyChooseUs />
      <Testimonials />
      <GoogleReviews />
      
      {/* Call to Action Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/20 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-800 blur-[80px]" />
            
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight max-w-4xl mx-auto relative z-10">
              Ready to Scale Your <br />
              <span className="text-orange-600 italic font-serif">Food Truck Business?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic max-w-2xl mx-auto relative z-10">
              Join the most powerful network of food truck owners and event organizers. Your next big job is just one click away.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-orange-900/40 hover:bg-orange-700 transition-all">
                Join as a Vendor
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Book a Truck
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
