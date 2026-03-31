import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  CloudRain,
  DollarSign,
  Globe,
  MapPin,
  Sun,
  Thermometer,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const MONTHS = [
  {
    month: "Jan",
    weather: "Hot & Sunny",
    temp: "29°C",
    icon: "☀️",
    note: "Peak season, book ahead",
  },
  {
    month: "Feb",
    weather: "Hot & Sunny",
    temp: "30°C",
    icon: "☀️",
    note: "Ideal beach weather",
  },
  {
    month: "Mar",
    weather: "Warm & Humid",
    temp: "29°C",
    icon: "🌤️",
    note: "Cyclone season ends",
  },
  {
    month: "Apr",
    weather: "Warm & Pleasant",
    temp: "27°C",
    icon: "🌤️",
    note: "Great for diving",
  },
  {
    month: "May",
    weather: "Mild & Breezy",
    temp: "25°C",
    icon: "🌥️",
    note: "Shoulder season deals",
  },
  {
    month: "Jun",
    weather: "Cool & Dry",
    temp: "22°C",
    icon: "🌬️",
    note: "Whale watching",
  },
  {
    month: "Jul",
    weather: "Cool & Dry",
    temp: "21°C",
    icon: "🌬️",
    note: "Peak winter season",
  },
  {
    month: "Aug",
    weather: "Cool & Windy",
    temp: "21°C",
    icon: "💨",
    note: "Kite surfing season",
  },
  {
    month: "Sep",
    weather: "Mild & Fresh",
    temp: "23°C",
    icon: "🌤️",
    note: "Great outdoor activities",
  },
  {
    month: "Oct",
    weather: "Warming Up",
    temp: "25°C",
    icon: "⛅",
    note: "Spring shoulder season",
  },
  {
    month: "Nov",
    weather: "Hot & Humid",
    temp: "27°C",
    icon: "🌡️",
    note: "Great value month",
  },
  {
    month: "Dec",
    weather: "Hot & Sunny",
    temp: "29°C",
    icon: "☀️",
    note: "Festive season busy",
  },
];

const REGIONS = [
  {
    name: "North",
    desc: "Home to the cosmopolitan Grand Baie, Pamplemousses Botanical Garden, and stunning white-sand beaches. Bustling nightlife, shopping, and easy access to offshore islands.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "South",
    desc: "The wild and rugged heart of Mauritius. Discover the coloured earths of Chamarel, spectacular Gris Gris cliffs, Black River Gorges National Park, and the historic town of Mahebourg.",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "East",
    desc: "Crystal-clear lagoons and the iconic Ile aux Cerfs. The east is perfect for water sports, catamaran trips, and some of the finest snorkelling spots on the island.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "West",
    desc: "Sun drenched beaches at Flic en Flac, the surf haven of Tamarin, and Casela Nature Parks. Best sunsets on the island and top-rated restaurants line the western coastline.",
    color: "from-orange-400 to-amber-400",
  },
  {
    name: "Central",
    desc: "The cool plateau highlands featuring Port Louis, the vibrant capital, Curepipe, and the stunning Trou aux Cerfs volcanic crater. A cultural and commercial hub with fresh mountain air.",
    color: "from-purple-400 to-violet-500",
  },
];

const FACTS = [
  { icon: <Globe className="w-4 h-4" />, label: "Area", value: "2,040 km²" },
  {
    icon: <Users className="w-4 h-4" />,
    label: "Population",
    value: "~1.3 Million",
  },
  {
    icon: <DollarSign className="w-4 h-4" />,
    label: "Currency",
    value: "Mauritian Rupee (MUR)",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Capital",
    value: "Port Louis",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Languages",
    value: "English, French, Creole",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: "Timezone",
    value: "UTC+4 (MUT)",
  },
  {
    icon: <Sun className="w-4 h-4" />,
    label: "Best Season",
    value: "May – December",
  },
  {
    icon: <Thermometer className="w-4 h-4" />,
    label: "Avg Temp",
    value: "20–30°C",
  },
];

const TIPS = [
  {
    q: "Do I need a visa to visit Mauritius?",
    a: "Citizens of most countries can enter Mauritius visa-free for up to 90 days. You need a valid passport, proof of accommodation, return ticket, and sufficient funds. Check with your nearest Mauritius embassy for the latest requirements.",
  },
  {
    q: "What currency is used in Mauritius?",
    a: "The Mauritian Rupee (MUR) is the local currency. Euros, US Dollars, and British Pounds are widely accepted in hotels and tourist areas. ATMs are widely available in towns and shopping centres.",
  },
  {
    q: "Is it safe to drink tap water in Mauritius?",
    a: "Tap water in Mauritius is treated and generally safe to drink in urban areas. However, bottled water is recommended for sensitive travellers, especially in rural areas. Bottled water is inexpensive and widely available.",
  },
  {
    q: "What should I wear when visiting temples and sacred sites?",
    a: "When visiting Hindu temples, mosques, or other religious sites, dress modestly — cover shoulders and knees. Remove shoes before entering. Many sites will provide a sarong. Avoid visiting during prayer times.",
  },
  {
    q: "How do I get around Mauritius?",
    a: "Mauritius has a public bus network covering all major routes, which is cheap but slow. Taxis are widely available but always agree on a price before departing. Car rental is the most convenient option for independent exploration. Ride-sharing apps are also available.",
  },
];

export function GuidePage() {
  return (
    <div className="min-h-screen" data-ocid="guide.page">
      {/* Hero */}
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <p className="text-teal-light font-semibold text-sm uppercase tracking-widest mb-2">
            Plan Your Trip
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
            Your Complete Mauritius Travel Guide
          </h1>
          <p className="text-white/80 text-lg">
            Everything you need to know before you go
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mauritius is a volcanic island nation in the Indian Ocean,
                  located about 2,000 kilometres off the south-east coast of
                  Africa. Known for its turquoise lagoons, white sandy beaches,
                  lush mountains, and vibrant multicultural society, Mauritius
                  is widely regarded as one of the most beautiful destinations
                  in the world.
                </p>
                <p>
                  The island offers a remarkable blend of cultures — a fusion of
                  African, European, Indian, and Chinese influences that is
                  reflected in its food, architecture, festivals, and way of
                  life. With Creole, French, and English all widely spoken,
                  communication is effortless for most international visitors.
                </p>
                <p>
                  Beyond the postcard beaches, Mauritius surprises with its
                  diverse interior — volcanic mountains, waterfalls, nature
                  reserves teeming with rare wildlife, and a rich colonial
                  heritage. Whether you seek pure relaxation, underwater
                  adventure, cultural immersion, or thrilling outdoor pursuits,
                  Mauritius delivers it all with warmth and grace.
                </p>
              </div>
            </motion.section>

            {/* Best Time */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                Best Time to Visit
              </h2>
              <p className="text-gray-500 mb-6">
                Mauritius is a year-round destination, but each season has its
                character.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {MONTHS.map((m, i) => (
                  <motion.div
                    key={m.month}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-white rounded-xl p-3 text-center shadow-card hover:shadow-card-hover transition-shadow"
                    data-ocid={`guide.item.${i + 1}`}
                  >
                    <div className="text-2xl mb-1">{m.icon}</div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {m.month}
                    </p>
                    <p className="text-teal text-xs font-medium">{m.temp}</p>
                    <p className="text-gray-400 text-xs mt-1 leading-tight">
                      {m.note}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Regions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Top Regions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {REGIONS.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-card group"
                    data-ocid={`guide.region.item.${i + 1}`}
                  >
                    <div
                      className={`h-24 bg-gradient-to-br ${r.color} flex items-end px-5 pb-3`}
                    >
                      <h3 className="font-serif font-bold text-white text-xl">
                        {r.name} Mauritius
                      </h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Tips Accordion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Useful Travel Tips
              </h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-3"
                data-ocid="guide.tips.panel"
              >
                {TIPS.map((tip, i) => (
                  <AccordionItem
                    key={tip.q}
                    value={`tip-${i}`}
                    className="bg-white rounded-xl shadow-card border-0 px-5 overflow-hidden"
                    data-ocid={`guide.tips.item.${i + 1}`}
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                      {tip.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                      {tip.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.section>
          </div>

          {/* Sidebar: Island Facts */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-5">
                Island Facts
              </h3>
              <div className="space-y-4">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{f.label}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {f.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-3">
                  <CloudRain className="w-4 h-4 text-teal" />
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Cyclone Season
                  </h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The cyclone season runs from November to April. Mauritius is
                  well-prepared and most hotels have emergency protocols. Travel
                  insurance is strongly recommended.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
