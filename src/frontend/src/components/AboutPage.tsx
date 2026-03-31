import {
  Award,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  {
    value: "10+",
    label: "Years Experience",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    value: "200+",
    label: "Activities & Tours",
    icon: <Award className="w-6 h-6" />,
  },
  {
    value: "50,000+",
    label: "Happy Travellers",
    icon: <Users className="w-6 h-6" />,
  },
  {
    value: "4.8★",
    label: "Average Rating",
    icon: <Star className="w-6 h-6" />,
  },
];

const VALUES = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Passion for Mauritius",
    desc: "We are deeply in love with this island. Our team lives and breathes Mauritius, and that passion shows in every experience we curate. We only recommend what we would take our own families to.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Trust & Transparency",
    desc: "No hidden fees, no misleading descriptions. What you see is what you get. We vet every operator, every vessel, and every guide to ensure safety and quality before we list them on our platform.",
    color: "from-teal to-cyan-500",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Customer First Always",
    desc: "From initial enquiry to post-trip follow-up, our team is with you every step. We go beyond the booking — our concierge team answers questions day and night so you can travel with complete peace of mind.",
    color: "from-amber-400 to-orange-500",
  },
];

const WHY_BOOK = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
    title: "Best Prices Guaranteed",
    desc: "We negotiate directly with activity operators so our prices are always competitive. Find the same activity cheaper elsewhere and we'll match it.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
    title: "Expert Local Knowledge",
    desc: "Our team has explored every corner of Mauritius. We recommend based on real experience, seasonal conditions, and your personal travel style.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
    title: "24/7 Customer Support",
    desc: "Something come up during your trip? Our support team is available around the clock via phone, email, and WhatsApp throughout your holiday.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
    title: "Easy Instant Booking",
    desc: "Book any activity in under 2 minutes. Instant confirmation, no waiting, and flexible cancellation on most activities up to 48 hours before.",
  },
];

const TEAM = [
  {
    name: "Priya Rajkumar",
    role: "Founder & CEO",
    initials: "PR",
    bg: "from-teal to-cyan-500",
    bio: "Born in Mauritius, Priya founded Azure Travel Co. after 15 years in the tourism industry. Her mission: to share the real Mauritius with travellers from around the world.",
  },
  {
    name: "Antoine Duchamps",
    role: "Head of Experiences",
    initials: "AD",
    bg: "from-orange-400 to-rose-400",
    bio: "Former dive instructor turned tour curator, Antoine has personally vetted every activity in our catalogue. He knows every underwater cave and mountain trail on the island.",
  },
  {
    name: "Sunita Bhojwani",
    role: "Customer Experience Lead",
    initials: "SB",
    bg: "from-purple-400 to-violet-500",
    bio: "With a background in luxury hospitality, Sunita ensures every guest feels like a VIP from the moment they enquire to the moment they return home.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen" data-ocid="about.page">
      {/* Hero */}
      <div
        className="relative h-72 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <p className="text-teal-light font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Born in Mauritius, Built for Travellers
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Azure Travel Co. was founded with a single belief: that every
            traveller deserves access to the authentic Mauritius — beyond the
            resort walls and tourist brochures.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="bg-teal/5 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                data-ocid={`about.stat.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mx-auto mb-3">
                  {s.icon}
                </div>
                <p className="font-serif text-3xl font-bold text-teal">
                  {s.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Mission & Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Our Mission & Values
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything we do is guided by three core values that have been at
              the heart of our company since day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                data-ocid={`about.values.item.${i + 1}`}
              >
                <div className={`h-3 bg-gradient-to-r ${v.color}`} />
                <div className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${v.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-xl mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Book With Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-teal/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Why Book With Azure?
              </h2>
              <p className="text-gray-500">
                4 reasons thousands of travellers choose us every year.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_BOOK.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card"
                  data-ocid={`about.why.item.${i + 1}`}
                >
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Meet the Team
            </h2>
            <p className="text-gray-500">
              The passionate people behind your perfect Mauritius holiday.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl shadow-card p-6 text-center hover:shadow-card-hover transition-shadow"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${member.bg} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-teal text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
