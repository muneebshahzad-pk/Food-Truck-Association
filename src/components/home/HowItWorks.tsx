import { UserCheck, ClipboardList, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Register',
    description: 'Complete our simple onboarding process to verify your food truck and contact details.',
    icon: UserCheck,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Get Listed',
    description: 'Showcase your menu, specialties, and service areas on our national food truck directory.',
    icon: ClipboardList,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Receive Jobs',
    description: 'Our dispatchers match you with high-volume events, festivals, and corporate bookings.',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-widest">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">How it Works</h3>
          <p className="text-slate-500 font-medium leading-relaxed italic">Joining the Association is the fastest way to scale your operations and reach new customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 rounded-[3rem] text-center space-y-6 hover:bg-white transition-all group relative overflow-hidden"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${step.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-sm`}>
                <step.icon size={28} />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-display font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed italic font-medium">{step.description}</p>
              </div>
              
              <span className="absolute top-6 left-6 text-[10px] font-black text-slate-200 uppercase tracking-widest">Step {index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
