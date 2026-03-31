import { Button } from "@/components/ui/button";
import { CATEGORIES, IMAGE_MAP } from "@/data/activities";
import { motion } from "motion/react";
import { useState } from "react";

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

export function Categories({ onSelectCategory }: CategoriesProps) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? CATEGORIES : CATEGORIES.slice(0, 5);

  return (
    <section className="py-12 px-4" data-ocid="categories.section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Browse by Experience
            </h2>
            <p className="text-gray-500 mt-1 font-sans">
              From ocean thrills to island tranquility
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="hidden sm:flex border-teal text-teal hover:bg-teal hover:text-white transition-colors"
            data-ocid="categories.toggle"
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayed.map((cat, i) => (
            <motion.button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={`categories.item.${i + 1}`}
            >
              <img
                src={IMAGE_MAP[cat.imageKey]}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 category-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="text-white font-semibold text-sm leading-tight">
                  {cat.name}
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  {cat.count} activities
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="sm:hidden mt-4 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-teal text-teal hover:bg-teal hover:text-white"
            data-ocid="categories.mobile.toggle"
          >
            {showAll ? "Show Less" : "View All Categories"}
          </Button>
        </div>
      </div>
    </section>
  );
}
