import { Button } from "@/components/ui/button";
import { ACTIVITIES, IMAGE_MAP } from "@/data/activities";
import type { Activity } from "@/data/activities";
import { Clock, MapPin, Tag } from "lucide-react";
import { motion } from "motion/react";

interface SpecialOffersProps {
  onBook: (activity: Activity) => void;
}

export function SpecialOffers({ onBook }: SpecialOffersProps) {
  const offers = ACTIVITIES.filter((a) => a.isSpecialOffer).slice(0, 3);

  return (
    <section className="py-12 px-4" data-ocid="offers.section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            Exclusive Deals
          </h2>
          <p className="text-gray-500 mt-1 font-sans">
            Save on handpicked Mauritius experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group flex flex-col"
              data-ocid={`offers.item.${i + 1}`}
            >
              {/* Banner Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGE_MAP[activity.imageKey]}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-teal text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  HOT DEAL
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-gray-900 text-base mb-2 line-clamp-2">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    {activity.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal" />
                    {activity.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">From</p>
                    <p className="text-teal font-bold text-xl">
                      &euro;{activity.price}
                    </p>
                  </div>
                  <Button
                    onClick={() => onBook(activity)}
                    size="sm"
                    className="bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl"
                    data-ocid={`offers.primary_button.${i + 1}`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
