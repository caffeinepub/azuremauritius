import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Car,
  Clock,
  Fuel,
  Headphones,
  MapPin,
  Users,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface CarType {
  id: number;
  type: string;
  model: string;
  pricePerDay: number;
  seats: number;
  fuel: string;
  ac: boolean;
  transmission: string;
  image: string;
}

const CARS: CarType[] = [
  {
    id: 1,
    type: "Economy",
    model: "Suzuki Alto",
    pricePerDay: 28,
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Manual",
    image: "/assets/generated/car-alto.dim_600x360.jpg",
  },
  {
    id: 2,
    type: "Compact",
    model: "Toyota Vitz",
    pricePerDay: 38,
    seats: 5,
    fuel: "Petrol",
    ac: true,
    transmission: "Automatic",
    image: "/assets/generated/car-vitz.dim_600x360.jpg",
  },
  {
    id: 3,
    type: "SUV",
    model: "Mitsubishi Outlander",
    pricePerDay: 72,
    seats: 7,
    fuel: "Diesel",
    ac: true,
    transmission: "Automatic",
    image: "/assets/generated/car-outlander.dim_600x360.jpg",
  },
  {
    id: 4,
    type: "Luxury",
    model: "Mercedes C-Class",
    pricePerDay: 145,
    seats: 5,
    fuel: "Petrol",
    ac: true,
    transmission: "Automatic",
    image: "/assets/generated/car-mercedes.dim_600x360.jpg",
  },
  {
    id: 5,
    type: "Minivan",
    model: "Toyota HiAce",
    pricePerDay: 95,
    seats: 12,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    image: "/assets/generated/car-hiace.dim_600x360.jpg",
  },
  {
    id: 6,
    type: "Convertible",
    model: "Mazda MX-5",
    pricePerDay: 120,
    seats: 2,
    fuel: "Petrol",
    ac: true,
    transmission: "Manual",
    image: "/assets/generated/car-mx5.dim_600x360.jpg",
  },
];

const FEATURES = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Free Delivery",
    desc: "Car delivered to your hotel or villa at no extra charge.",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Airport Pickup",
    desc: "Meet & greet service at Sir Seewoosagur Ramgoolam Airport.",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "GPS Included",
    desc: "All cars equipped with up-to-date GPS navigation systems.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Support",
    desc: "Round-the-clock roadside assistance throughout your stay.",
  },
];

export function CarRentalPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    carType: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success("Enquiry sent! We'll contact you within 2 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickupDate: "",
      returnDate: "",
      carType: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen" data-ocid="car_rental.page">
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
            Explore Mauritius at Your Own Pace
          </h1>
          <p className="text-white/80 text-lg">
            Quality rental cars for every budget and adventure
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-teal/5 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {f.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Fleet Grid */}
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
          Our Fleet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {CARS.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={`car_rental.item.${i + 1}`}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <Badge className="bg-teal/10 text-teal border-0 text-xs">
                    {car.type}
                  </Badge>
                  {car.ac && (
                    <Badge className="bg-blue-50 text-blue-600 border-0 text-xs">
                      A/C
                    </Badge>
                  )}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">
                  {car.model}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-teal" />
                    {car.seats} Seats
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Fuel className="w-3.5 h-3.5 text-teal" />
                    {car.fuel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-teal" />
                    {car.transmission}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal" />
                    Per day
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-teal font-bold text-xl">
                    &euro;{car.pricePerDay}
                    <span className="text-xs font-normal text-gray-400">
                      /day
                    </span>
                  </p>
                  <Button
                    size="sm"
                    className="bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-xs"
                    onClick={() =>
                      document
                        .getElementById("rental-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    data-ocid={`car_rental.primary_button.${i + 1}`}
                  >
                    Book This
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Form */}
        <div id="rental-form" className="bg-white rounded-2xl shadow-card p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
            Book a Car
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Fill in the form below and we'll confirm your booking within 2
            hours.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div>
              <Label htmlFor="cr-name">Full Name</Label>
              <Input
                id="cr-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your full name"
                required
                className="mt-1"
                data-ocid="car_rental.name.input"
              />
            </div>
            <div>
              <Label htmlFor="cr-email">Email Address</Label>
              <Input
                id="cr-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="you@email.com"
                required
                className="mt-1"
                data-ocid="car_rental.email.input"
              />
            </div>
            <div>
              <Label htmlFor="cr-phone">Phone Number</Label>
              <Input
                id="cr-phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, phone: e.target.value }))
                }
                placeholder="+1 234 567 8900"
                required
                className="mt-1"
                data-ocid="car_rental.phone.input"
              />
            </div>
            <div>
              <Label htmlFor="cr-car">Car Type</Label>
              <Select
                value={formData.carType}
                onValueChange={(v) =>
                  setFormData((p) => ({ ...p, carType: v }))
                }
              >
                <SelectTrigger
                  id="cr-car"
                  className="mt-1"
                  data-ocid="car_rental.type.select"
                >
                  <SelectValue placeholder="Select a car type" />
                </SelectTrigger>
                <SelectContent>
                  {CARS.map((c) => (
                    <SelectItem key={c.id} value={c.type}>
                      {c.type} — {c.model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cr-pickup">Pickup Date</Label>
              <Input
                id="cr-pickup"
                type="date"
                value={formData.pickupDate}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, pickupDate: e.target.value }))
                }
                required
                className="mt-1"
                data-ocid="car_rental.pickup.input"
              />
            </div>
            <div>
              <Label htmlFor="cr-return">Return Date</Label>
              <Input
                id="cr-return"
                type="date"
                value={formData.returnDate}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, returnDate: e.target.value }))
                }
                required
                className="mt-1"
                data-ocid="car_rental.return.input"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="cr-notes">Additional Notes</Label>
              <Textarea
                id="cr-notes"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, notes: e.target.value }))
                }
                placeholder="Special requirements, airport arrival time, hotel name..."
                rows={3}
                className="mt-1"
                data-ocid="car_rental.notes.textarea"
              />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3 h-12 text-base"
                data-ocid="car_rental.submit_button"
              >
                {submitting ? "Sending Enquiry..." : "Submit Booking Enquiry"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
