import { Button } from "@/components/ui/button";
import { ACTIVITIES } from "@/data/activities";
import type { Activity } from "@/data/activities";
import { motion } from "motion/react";
import { ActivityCard } from "./ActivityCard";

interface BestSellersProps {
  onBook: (activity: Activity) => void;
  onSeeMore: () => void;
}

export function BestSellers({ onBook, onSeeMore }: BestSellersProps) {
  const bestSellers = ACTIVITIES.filter((a) => a.isBestSeller).slice(0, 4);

  return (
    <section className="py-12 px-4" data-ocid="bestsellers.section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Top Rated
            </h2>
            <p className="text-gray-500 mt-1 font-sans">
              Our highest-reviewed experiences
            </p>
          </div>
          <Button
            variant="outline"
            onClick={onSeeMore}
            className="hidden sm:flex border-teal text-teal hover:bg-teal hover:text-white"
            data-ocid="bestsellers.secondary_button"
          >
            See All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ActivityCard activity={activity} index={i + 1} onBook={onBook} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
