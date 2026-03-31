import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ACTIVITIES, IMAGE_MAP } from "@/data/activities";
import type { Activity } from "@/data/activities";
import { Clock, MapPin, SlidersHorizontal, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface ToursPageProps {
  onBook: (activity: Activity) => void;
}

const EXTRA_TOURS: Activity[] = [
  {
    id: 101,
    title: "3-Day Island Discovery Package",
    category: "Sightseeing Tours",
    price: 285,
    duration: "3 Days",
    location: "All Regions, Mauritius",
    description:
      "Comprehensive multi-day tour covering the North, South, East and West of Mauritius. Includes hotel stays, all transfers, meals, and guided excursions to the island's top landmarks.",
    rating: 4.9,
    reviewCount: 87,
    isSpecialOffer: true,
    isTrending: true,
    isBestSeller: true,
    imageKey: "sightseeing",
  },
  {
    id: 102,
    title: "Honeymoon Romance Package",
    category: "Sightseeing Tours",
    price: 440,
    duration: "2 Days",
    location: "Le Morne & Grand Baie",
    description:
      "A curated romantic escape with sunset cruise, beachside candlelit dinner, couples spa, and luxury villa stay along the iconic Le Morne peninsula.",
    rating: 5.0,
    reviewCount: 54,
    isSpecialOffer: true,
    isTrending: true,
    isBestSeller: false,
    imageKey: "catamaran",
  },
  {
    id: 103,
    title: "East Coast & Ile aux Cerfs Full Day",
    category: "Ile aux Cerfs",
    price: 99,
    duration: "Full Day (9 hours)",
    location: "East Coast, Mauritius",
    description:
      "The ultimate east coast experience: morning at Mahebourg waterfront, snorkeling at Blue Bay Marine Park, and an afternoon on the pristine Ile aux Cerfs island.",
    rating: 4.7,
    reviewCount: 143,
    isSpecialOffer: false,
    isTrending: false,
    isBestSeller: true,
    imageKey: "ilecerfs",
  },
  {
    id: 104,
    title: "Cultural Heritage South Tour",
    category: "Sightseeing Tours",
    price: 65,
    duration: "Full Day (8 hours)",
    location: "South & Central Mauritius",
    description:
      "Dive deep into Mauritian culture visiting the Siva Soopramanien temple, the coloured earths of Chamarel, Black River Gorges viewpoints, and a local rum distillery.",
    rating: 4.6,
    reviewCount: 98,
    isSpecialOffer: false,
    isTrending: true,
    isBestSeller: false,
    imageKey: "sightseeing",
  },
];

const ALL_TOURS = [
  ...ACTIVITIES.filter((a) =>
    ["Sightseeing Tours", "Ile aux Cerfs", "Catamaran Cruises"].includes(
      a.category,
    ),
  ),
  ...EXTRA_TOURS,
];

export function ToursPage({ onBook }: ToursPageProps) {
  const [duration, setDuration] = useState("");
  const [region, setRegion] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);

  const filtered = ALL_TOURS.filter((t) => {
    if (duration === "half-day" && !t.duration.toLowerCase().includes("half"))
      return false;
    if (duration === "full-day" && !t.duration.toLowerCase().includes("full"))
      return false;
    if (duration === "multi-day" && !t.duration.toLowerCase().includes("day"))
      return false;
    if (region && !t.location.toLowerCase().includes(region.toLowerCase()))
      return false;
    if (t.price > maxPrice) return false;
    return true;
  });

  return (
    <div className="min-h-screen" data-ocid="tours.page">
      {/* Hero */}
      <div
        className="relative h-56 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">
            Explore Our Tour Packages
          </h1>
          <p className="text-white/80 text-lg">
            Handcrafted itineraries for every kind of traveller
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-4 h-4 text-teal" />
                <h3 className="font-semibold text-gray-800">Filter Tours</h3>
              </div>

              <div className="mb-5">
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </p>
                {[
                  { label: "All Durations", value: "" },
                  { label: "Half Day", value: "half-day" },
                  { label: "Full Day", value: "full-day" },
                  { label: "Multi Day", value: "multi-day" },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setDuration(opt.value)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                      duration === opt.value
                        ? "bg-teal text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    data-ocid="tours.filter.tab"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="mb-5">
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </p>
                {[
                  { label: "All Regions", value: "" },
                  { label: "North", value: "north" },
                  { label: "South", value: "south" },
                  { label: "East", value: "east" },
                  { label: "West", value: "west" },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setRegion(opt.value)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                      region === opt.value
                        ? "bg-teal text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    data-ocid="tours.region.tab"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div>
                <label
                  htmlFor="price-range"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Max Price:{" "}
                  <span className="text-teal font-semibold">
                    &euro;{maxPrice}
                  </span>
                </label>
                <input
                  type="range"
                  min={30}
                  max={500}
                  value={maxPrice}
                  id="price-range"
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-teal"
                  data-ocid="tours.price.select"
                />
              </div>
            </div>
          </aside>

          {/* Tour Grid */}
          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-4">
              {filtered.length} tours found
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-16" data-ocid="tours.empty_state">
                <p className="text-gray-500">
                  No tours match your filters. Try adjusting them.
                </p>
                <Button
                  onClick={() => {
                    setDuration("");
                    setRegion("");
                    setMaxPrice(500);
                  }}
                  className="mt-4 bg-teal hover:bg-teal-dark text-white"
                  data-ocid="tours.reset.button"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((tour, i) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: Math.min(i * 0.05, 0.3),
                      duration: 0.4,
                    }}
                    className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
                    data-ocid={`tours.item.${i + 1}`}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={IMAGE_MAP[tour.imageKey]}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {tour.isBestSeller && (
                        <Badge className="absolute top-3 left-3 bg-gold text-white border-0 text-xs">
                          Best Seller
                        </Badge>
                      )}
                      {tour.isSpecialOffer && !tour.isBestSeller && (
                        <Badge className="absolute top-3 left-3 bg-teal text-white border-0 text-xs">
                          Special Offer
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= Math.round(tour.rating)
                                ? "text-gold fill-gold"
                                : "text-gray-200 fill-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">
                          ({tour.reviewCount})
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-gray-900 text-base mb-2 line-clamp-2">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {tour.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="truncate max-w-[100px]">
                            {tour.location}
                          </span>
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                        {tour.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">From</p>
                          <p className="text-teal font-bold text-lg">
                            &euro;{tour.price}
                          </p>
                        </div>
                        <Button
                          onClick={() => onBook(tour)}
                          size="sm"
                          className="bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-xs"
                          data-ocid={`tours.primary_button.${i + 1}`}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
