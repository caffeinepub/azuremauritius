import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ACTIVITIES, IMAGE_MAP } from "@/data/activities";
import type { Activity } from "@/data/activities";
import { Clock, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

interface BestSellersPageProps {
  onBook: (activity: Activity) => void;
}

export function BestSellersPage({ onBook }: BestSellersPageProps) {
  const bestSellers = ACTIVITIES.filter((a) => a.isBestSeller);

  return (
    <div className="min-h-screen" data-ocid="best_sellers.page">
      {/* Hero */}
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-gold to-amber-500">
        <div className="relative z-10 text-center">
          <p className="text-white/90 text-sm uppercase tracking-widest font-semibold mb-2">
            Top Rated
          </p>
          <h1 className="font-serif text-4xl font-bold text-white">
            Our Best Selling Experiences
          </h1>
          <p className="text-white/80 mt-2">
            The activities our guests love most — ranked by popularity
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.07, 0.4), duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group flex flex-col"
              data-ocid={`best_sellers.item.${i + 1}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGE_MAP[activity.imageKey]}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Ranking Badge */}
                <div className="absolute top-3 left-3 w-9 h-9 bg-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">#{i + 1}</span>
                </div>
                <Badge className="absolute top-3 right-3 bg-white/95 text-gold border-0 text-xs font-bold">
                  Best Seller
                </Badge>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-3.5 h-3.5 ${
                        s <= Math.round(activity.rating)
                          ? "text-gold fill-gold"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">
                    ({activity.reviewCount} reviews)
                  </span>
                </div>
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
                    data-ocid={`best_sellers.primary_button.${i + 1}`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
