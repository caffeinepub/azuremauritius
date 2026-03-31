import { Button } from "@/components/ui/button";
import { ACTIVITIES, CATEGORIES, IMAGE_MAP } from "@/data/activities";
import type { Activity } from "@/data/activities";
import { ChevronLeft, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ActivityCard } from "./ActivityCard";

interface ActivitiesPageProps {
  initialCategory?: string;
  onBook: (activity: Activity) => void;
  onBack: () => void;
}

export function ActivitiesPage({
  initialCategory = "",
  onBook,
  onBack,
}: ActivitiesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc">(
    "popular",
  );

  let filtered = selectedCategory
    ? ACTIVITIES.filter((a) => a.category === selectedCategory)
    : ACTIVITIES;

  if (sortBy === "price-asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen" data-ocid="activities.page">
      {/* Page Hero */}
      <div
        className="relative h-48 flex items-center justify-center"
        style={{
          backgroundImage: selectedCategory
            ? `url('${IMAGE_MAP[CATEGORIES.find((c) => c.name === selectedCategory)?.imageKey || "sightseeing"]}')`
            : "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-3xl font-bold text-white">
            {selectedCategory || "All Activities"}
          </h1>
          <p className="text-white/80 mt-1">
            {filtered.length} activities found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb / Back */}
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-teal font-medium mb-6 hover:underline"
          data-ocid="activities.back.link"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            type="button"
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory
                ? "bg-teal text-white"
                : "bg-white text-gray-600 border hover:bg-gray-50"
            }`}
            data-ocid="activities.filter.tab"
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.name}
              onClick={() =>
                setSelectedCategory(
                  cat.name === selectedCategory ? "" : cat.name,
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === cat.name
                  ? "bg-teal text-white"
                  : "bg-white text-gray-600 border hover:bg-gray-50"
              }`}
              data-ocid={`activities.${cat.imageKey}.tab`}
            >
              {cat.name}
              {selectedCategory === cat.name && <X className="w-3 h-3" />}
            </button>
          ))}

          {/* Sort */}
          <div className="ml-auto flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm text-gray-700 bg-white border rounded-lg px-3 py-2 focus:outline-none"
              data-ocid="activities.sort.select"
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="activities.empty_state">
            <p className="text-gray-500 text-lg">
              No activities found for this category.
            </p>
            <Button
              onClick={() => setSelectedCategory("")}
              className="mt-4 bg-teal hover:bg-teal-dark text-white"
              data-ocid="activities.reset.button"
            >
              View All Activities
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
              >
                <ActivityCard
                  activity={activity}
                  index={i + 1}
                  onBook={onBook}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
