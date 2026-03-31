import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  CheckCircle,
  Coffee,
  Dumbbell,
  MapPin,
  Star,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  Pool: <Waves className="w-3.5 h-3.5" />,
  WiFi: <Wifi className="w-3.5 h-3.5" />,
  Breakfast: <Coffee className="w-3.5 h-3.5" />,
  Parking: <Car className="w-3.5 h-3.5" />,
  Gym: <Dumbbell className="w-3.5 h-3.5" />,
  Restaurant: <Utensils className="w-3.5 h-3.5" />,
};

interface Hotel {
  id: number;
  name: string;
  type: "hotel" | "villa" | "apartment";
  stars: number;
  pricePerNight: number;
  location: string;
  description: string;
  amenities: string[];
  imageUrl: string;
  badge?: string;
}

const HOTELS: Hotel[] = [
  {
    id: 1,
    name: "Grand Bay Beach Resort",
    type: "hotel",
    stars: 5,
    pricePerNight: 320,
    location: "Grand Baie, North Mauritius",
    description:
      "Iconic beachfront 5-star resort with private beach, infinity pool, and world-class spa. Steps from Grand Baie's vibrant nightlife and shopping.",
    amenities: ["Pool", "WiFi", "Breakfast", "Gym"],
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "Le Morne Luxury Villas",
    type: "villa",
    stars: 5,
    pricePerNight: 550,
    location: "Le Morne, South-West Mauritius",
    description:
      "Exclusive private villas perched above the Le Morne lagoon. Each villa features a private plunge pool, butler service, and sweeping ocean views.",
    amenities: ["Pool", "WiFi", "Breakfast", "Restaurant"],
    imageUrl:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    badge: "Editor's Pick",
  },
  {
    id: 3,
    name: "Trou aux Biches Boutique Hotel",
    type: "hotel",
    stars: 4,
    pricePerNight: 195,
    location: "Trou aux Biches, North Mauritius",
    description:
      "Charming boutique hotel nestled in a lush tropical garden, just 50m from one of Mauritius' most beautiful beaches. Personalised service and local charm.",
    amenities: ["Pool", "WiFi", "Breakfast"],
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  {
    id: 4,
    name: "Blue Horizon Apartments",
    type: "apartment",
    stars: 3,
    pricePerNight: 85,
    location: "Flic en Flac, West Mauritius",
    description:
      "Modern self-catering apartments with ocean views in the heart of Flic en Flac. Perfect for families or longer stays. Full kitchen, balcony, and secure parking.",
    amenities: ["WiFi", "Parking", "Pool"],
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    id: 5,
    name: "Mahebourg Heritage Guesthouse",
    type: "hotel",
    stars: 3,
    pricePerNight: 75,
    location: "Mahebourg, South-East Mauritius",
    description:
      "Authentic Creole guesthouse in the historic town of Mahebourg. Featuring antique furniture, home-cooked Mauritian breakfasts, and easy access to Blue Bay Marine Park.",
    amenities: ["WiFi", "Breakfast", "Parking"],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 6,
    name: "Tamarin Bay Villa Retreat",
    type: "villa",
    stars: 4,
    pricePerNight: 380,
    location: "Tamarin, West Mauritius",
    description:
      "Secluded luxury villa with direct lagoon access in the surf village of Tamarin. Ideal for groups or families seeking privacy with top-end finishes and a chef on request.",
    amenities: ["Pool", "WiFi", "Parking", "Restaurant"],
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
  },
  {
    id: 7,
    name: "Port Louis City Suites",
    type: "apartment",
    stars: 3,
    pricePerNight: 110,
    location: "Port Louis, Capital City",
    description:
      "Contemporary serviced apartments in the heart of Port Louis, ideal for business travellers. Close to the waterfront, Caudan shopping centre, and all major attractions.",
    amenities: ["WiFi", "Gym", "Parking"],
    imageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    id: 8,
    name: "Bel Ombre Eco Resort",
    type: "hotel",
    stars: 4,
    pricePerNight: 240,
    location: "Bel Ombre, South Mauritius",
    description:
      "Award-winning eco-resort on a private nature reserve in the pristine south. Offering forest walks, organic dining, lagoon kayaking, and mindful wellness programmes.",
    amenities: ["Pool", "WiFi", "Breakfast", "Restaurant", "Gym"],
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    badge: "Eco Certified",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${
            s <= count ? "text-gold fill-gold" : "text-gray-200 fill-gray-200"
          }`}
        />
      ))}
    </span>
  );
}

interface EnquiryModalProps {
  hotel: Hotel | null;
  open: boolean;
  onClose: () => void;
}

function EnquiryModal({ hotel, open, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      checkin: "",
      checkout: "",
      guests: "2",
      message: "",
    });
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="accommodation.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {submitted ? "Enquiry Sent!" : `Enquire About ${hotel?.name}`}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div
            className="text-center py-8"
            data-ocid="accommodation.success_state"
          >
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-teal" />
            </div>
            <p className="text-gray-700 font-semibold text-lg mb-2">
              We&apos;ve received your enquiry for
              <br />
              <span className="text-teal">{hotel?.name}</span>!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Our team will get back to you within 24 hours.
            </p>
            <Button
              onClick={handleClose}
              className="bg-teal hover:bg-teal-dark text-white rounded-xl"
              data-ocid="accommodation.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            {hotel && (
              <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-sm">
                    {hotel.name}
                  </p>
                  <p className="text-white/80 text-xs">{hotel.location}</p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="enq-name" className="text-xs font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="enq-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="mt-1"
                    data-ocid="accommodation.input"
                  />
                </div>
                <div>
                  <Label htmlFor="enq-email" className="text-xs font-medium">
                    Email *
                  </Label>
                  <Input
                    id="enq-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="enq-phone" className="text-xs font-medium">
                    Phone
                  </Label>
                  <Input
                    id="enq-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+230 5xx xxxx"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="enq-guests" className="text-xs font-medium">
                    Guests
                  </Label>
                  <Input
                    id="enq-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={form.guests}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="enq-checkin" className="text-xs font-medium">
                    Check-in *
                  </Label>
                  <Input
                    id="enq-checkin"
                    name="checkin"
                    type="date"
                    value={form.checkin}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="enq-checkout" className="text-xs font-medium">
                    Check-out *
                  </Label>
                  <Input
                    id="enq-checkout"
                    name="checkout"
                    type="date"
                    value={form.checkout}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="enq-message" className="text-xs font-medium">
                  Message
                </Label>
                <textarea
                  id="enq-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special requests or questions..."
                  rows={3}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  data-ocid="accommodation.textarea"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 rounded-xl"
                  data-ocid="accommodation.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-teal hover:bg-teal-dark text-white rounded-xl font-semibold"
                  data-ocid="accommodation.submit_button"
                >
                  Send Enquiry
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function AccommodationPage() {
  const [enquiryHotel, setEnquiryHotel] = useState<Hotel | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen" data-ocid="accommodation.page">
      {/* Hero */}
      <div className="relative h-56 flex items-center justify-center bg-gradient-to-br from-teal to-teal-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-mauritius.dim_1600x800.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">
            Find Your Perfect Stay
          </h1>
          <p className="text-white/80 text-lg">
            Hotels, villas and apartments across Mauritius
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Tabs defaultValue="all" data-ocid="accommodation.filter.tab">
          <TabsList className="mb-8 bg-white border rounded-xl p-1 shadow-xs">
            <TabsTrigger value="all" className="rounded-lg">
              All
            </TabsTrigger>
            <TabsTrigger value="hotel" className="rounded-lg">
              Hotels
            </TabsTrigger>
            <TabsTrigger value="villa" className="rounded-lg">
              Villas
            </TabsTrigger>
            <TabsTrigger value="apartment" className="rounded-lg">
              Apartments
            </TabsTrigger>
          </TabsList>

          {["all", "hotel", "villa", "apartment"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {HOTELS.filter((h) => tab === "all" || h.type === tab).map(
                  (hotel, i) => (
                    <motion.div
                      key={hotel.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
                      data-ocid={`accommodation.item.${i + 1}`}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={hotel.imageUrl}
                          alt={hotel.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {hotel.badge && (
                          <Badge className="absolute top-3 left-3 bg-teal text-white border-0 text-xs z-10">
                            {hotel.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <StarRating count={hotel.stars} />
                          <span className="text-xs text-gray-400 capitalize">
                            {hotel.type}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-gray-900 text-base mb-1 line-clamp-1">
                          {hotel.name}
                        </h3>
                        <p className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-teal" />
                          {hotel.location}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                          {hotel.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {hotel.amenities.slice(0, 3).map((am) => (
                            <span
                              key={am}
                              className="flex items-center gap-1 text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full"
                            >
                              {AMENITY_ICONS[am]}
                              {am}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-400">From</p>
                            <p className="text-teal font-bold text-lg">
                              &euro;{hotel.pricePerNight}
                              <span className="text-xs font-normal text-gray-400">
                                /night
                              </span>
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-xs"
                            onClick={() => {
                              setEnquiryHotel(hotel);
                              setEnquiryOpen(true);
                            }}
                            data-ocid={`accommodation.primary_button.${i + 1}`}
                          >
                            Enquire Now
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <EnquiryModal
        hotel={enquiryHotel}
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
}
