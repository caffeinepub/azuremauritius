import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface HeroProps {
  onSearch: (query: string, category: string) => void;
}

const FILTER_TABS = [
  "All",
  "Activities",
  "Tours",
  "Car Rental",
  "Accommodation",
];
const CATEGORIES = [
  "All Categories",
  "Catamaran Cruises",
  "Safari Wildlife",
  "Sightseeing Tours",
  "Ile aux Cerfs",
  "Dolphins & Whales",
  "Helicopter & Skydiving",
  "Hiking & Trekking",
  "Quad & 4x4",
  "Horse Riding",
];

export function Hero({ onSearch }: HeroProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleSearch = () => {
    onSearch(
      searchQuery,
      selectedCategory === "All Categories" ? "" : selectedCategory,
    );
  };

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-ocid="hero.section"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Experience Mauritius
            <br />
            <span className="text-teal-light">Your Way</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 drop-shadow font-sans font-light">
            Handpicked tours, activities &amp; stays for every type of traveler
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Filter Tabs */}
          <div className="flex overflow-x-auto border-b">
            {FILTER_TABS.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-teal text-teal"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                data-ocid={`hero.${tab.toLowerCase().replace(" ", "-")}.tab`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search inputs */}
          <div className="flex flex-col sm:flex-row gap-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="sm:w-52 px-4 py-4 text-sm text-gray-700 border-r border-gray-200 bg-white focus:outline-none focus:bg-gray-50"
              data-ocid="hero.select"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Catamaran, hiking, dolphin watching..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-4 py-4 text-sm text-gray-700 focus:outline-none"
              data-ocid="hero.search_input"
            />
            <Button
              onClick={handleSearch}
              className="m-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 rounded-xl h-12"
              data-ocid="hero.primary_button"
            >
              <Search className="w-4 h-4 mr-2" />
              Find Experiences
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
