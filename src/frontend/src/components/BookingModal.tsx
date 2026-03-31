import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Activity } from "@/data/activities";
import { IMAGE_MAP } from "@/data/activities";
import { CheckCircle2, Clock, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  activity: Activity | null;
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ activity, open, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"info" | "form" | "success">("info");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "2",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("info");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        people: "2",
        message: "",
      });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setStep("success");
  };

  if (!activity) return null;
  const imgSrc = IMAGE_MAP[activity.imageKey] || IMAGE_MAP.sightseeing;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl p-0 overflow-hidden"
        data-ocid="booking.modal"
      >
        {step === "success" ? (
          <div
            className="flex flex-col items-center justify-center p-12 text-center"
            data-ocid="booking.success_state"
          >
            <CheckCircle2 className="w-16 h-16 text-teal mb-4" />
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Booking Inquiry Sent!
            </h2>
            <p className="text-gray-500 mb-6">
              Thank you, <strong>{form.name}</strong>! We've received your
              inquiry for
              <strong> {activity.title}</strong>. Our team will contact you at{" "}
              {form.email} within 24 hours.
            </p>
            <Button
              onClick={handleClose}
              className="bg-teal hover:bg-teal-dark text-white"
              data-ocid="booking.close_button"
            >
              Explore More Activities
            </Button>
          </div>
        ) : step === "info" ? (
          <>
            {/* Activity Info */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={imgSrc}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="font-serif text-xl font-bold text-white">
                  {activity.title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${s <= Math.round(activity.rating) ? "text-gold fill-gold" : "text-white/30"}`}
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">
                    ({activity.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal" />
                  {activity.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal" />
                  {activity.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-teal" />
                  All levels welcome
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {activity.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">From</p>
                  <p className="text-teal font-bold text-2xl">
                    &euro;{activity.price}
                    <span className="text-sm font-normal text-gray-400">
                      {" "}
                      / person
                    </span>
                  </p>
                </div>
                <Button
                  onClick={() => setStep("form")}
                  className="bg-teal hover:bg-teal-dark text-white font-semibold px-6"
                  data-ocid="booking.primary_button"
                >
                  Book This Activity
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="font-serif text-xl">
                Book: {activity.title}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    data-ocid="booking.name.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    data-ocid="booking.email.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+230 5XX XXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    data-ocid="booking.phone.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, date: e.target.value }))
                    }
                    data-ocid="booking.date.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="people">Number of People *</Label>
                  <Input
                    id="people"
                    type="number"
                    min="1"
                    max="30"
                    required
                    value={form.people}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, people: e.target.value }))
                    }
                    data-ocid="booking.people.input"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or questions..."
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  data-ocid="booking.message.textarea"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("info")}
                  className="flex-1"
                  data-ocid="booking.cancel_button"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-teal hover:bg-teal-dark text-white font-semibold"
                  data-ocid="booking.submit_button"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
