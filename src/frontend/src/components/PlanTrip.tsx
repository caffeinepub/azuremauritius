import { Car, Heart, Hotel, Map as MapIcon, Package } from "lucide-react";
import { motion } from "motion/react";

const TILES = [
  {
    icon: MapIcon,
    label: "Tour Planner",
    desc: "Plan your perfect itinerary",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Package,
    label: "Tour Packages",
    desc: "All-inclusive deals",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Car,
    label: "Car Rental",
    desc: "Explore at your own pace",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Hotel,
    label: "Accommodation",
    desc: "Hotels, villas & more",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Heart,
    label: "Wedding Packages",
    desc: "Your dream island wedding",
    color: "bg-rose-50 text-rose-500",
  },
];

export function PlanTrip() {
  return (
    <section
      className="py-12 px-4 bg-teal text-white"
      data-ocid="plantrip.section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold">
            Plan Your Perfect Trip
          </h2>
          <p className="text-white/80 mt-2 font-sans">
            Everything you need for an unforgettable Mauritius holiday
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TILES.map((tile, i) => (
            <motion.button
              key={tile.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3 transition-colors cursor-pointer"
              data-ocid={`plantrip.item.${i + 1}`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <tile.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{tile.label}</p>
                <p className="text-white/70 text-xs mt-0.5">{tile.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
