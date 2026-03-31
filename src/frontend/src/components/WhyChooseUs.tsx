import { BadgePercent, HeadphonesIcon, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Curated Experiences",
    desc: "Every activity on Azure is hand-selected by our local team. We only list experiences we'd personally recommend — no filler, no fluff.",
  },
  {
    icon: BadgePercent,
    title: "Transparent Pricing",
    desc: "The price you see is the price you pay. No surprise fees at checkout, no hidden surcharges — just honest, upfront pricing on every booking.",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Experts On Call",
    desc: "Our Mauritius-based team is available 7 days a week to help you plan, answer questions, and ensure every detail of your trip is perfect.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white" data-ocid="whychooseus.section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            The Azure Difference
          </h2>
          <p className="text-gray-500 mt-2 font-sans max-w-xl mx-auto">
            Here&apos;s why thousands choose us every year
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center group"
              data-ocid={`whychooseus.card.${i + 1}`}
            >
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/20 transition-colors">
                <feat.icon className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
