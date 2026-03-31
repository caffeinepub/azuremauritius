import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const FAQS = [
  {
    q: "How do I book an activity?",
    a: 'You can book directly through our website using the "Book Now" button on any activity page. Select your preferred date and number of guests, complete the booking form, and you\'ll receive a confirmation email within minutes.',
  },
  {
    q: "Can I get a refund if I cancel my booking?",
    a: "Cancellations made 48 hours or more before the activity start time are eligible for a full refund. Cancellations within 24–48 hours receive a 50% refund. Cancellations within 24 hours are non-refundable. Please refer to individual activity terms for exceptions.",
  },
  {
    q: "What happens if my activity is cancelled due to bad weather?",
    a: "Safety is our priority. If an activity is cancelled by our operator due to adverse weather or sea conditions, you will receive a full refund or the option to reschedule at no additional cost.",
  },
  {
    q: "Do prices include transfers from my hotel?",
    a: "Most activities include complimentary hotel transfers from major tourist areas. Please check the activity description for inclusion details. If transfers are not included, we can arrange them at an additional cost.",
  },
  {
    q: "How quickly will I receive my booking confirmation?",
    a: "Booking confirmations are sent to your email immediately upon successful payment. If you do not receive your confirmation within 30 minutes, please check your spam folder or contact us at info@bluestonetravels.com.",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    travelDate: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      travelDate: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen" data-ocid="contact.page">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal to-teal-dark py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white mb-2">
          Get in Touch
        </h1>
        <p className="text-white/80 text-lg">
          Our team is here to help you plan the perfect Mauritius experience
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="bg-white rounded-2xl shadow-card p-6 mb-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:+919227990612"
                    className="text-teal hover:underline"
                  >
                    +91 9227990612
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:info@bluestonetravels.com"
                    className="text-teal hover:underline"
                  >
                    info@bluestonetravels.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Address</p>
                  <p className="text-gray-600 text-sm">
                    Corporate Road, Makarba
                    <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday – Friday: 9:00 AM – 6:00 PM IST
                  </p>
                  <p className="text-gray-600 text-sm">
                    Saturday: 10:00 AM – 4:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919227990612"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-colors"
              data-ocid="contact.whatsapp.primary_button"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <div className="bg-white rounded-2xl shadow-card p-6">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="ct-first">First Name</Label>
                  <Input
                    id="ct-first"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, firstName: e.target.value }))
                    }
                    placeholder="Jane"
                    required
                    className="mt-1"
                    data-ocid="contact.firstname.input"
                  />
                </div>
                <div>
                  <Label htmlFor="ct-last">Last Name</Label>
                  <Input
                    id="ct-last"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, lastName: e.target.value }))
                    }
                    placeholder="Smith"
                    required
                    className="mt-1"
                    data-ocid="contact.lastname.input"
                  />
                </div>
                <div>
                  <Label htmlFor="ct-email">Email</Label>
                  <Input
                    id="ct-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="jane@email.com"
                    required
                    className="mt-1"
                    data-ocid="contact.email.input"
                  />
                </div>
                <div>
                  <Label htmlFor="ct-phone">Phone</Label>
                  <Input
                    id="ct-phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+1 234 567 8900"
                    className="mt-1"
                    data-ocid="contact.phone.input"
                  />
                </div>
                <div>
                  <Label htmlFor="ct-subject">Subject</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, subject: v }))
                    }
                  >
                    <SelectTrigger
                      id="ct-subject"
                      className="mt-1"
                      data-ocid="contact.subject.select"
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activity">Activity Enquiry</SelectItem>
                      <SelectItem value="booking">Booking Issue</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ct-date">Date of Travel</Label>
                  <Input
                    id="ct-date"
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, travelDate: e.target.value }))
                    }
                    className="mt-1"
                    data-ocid="contact.date.input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="ct-msg">Message</Label>
                  <Textarea
                    id="ct-msg"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    required
                    className="mt-1"
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3 h-12 text-base"
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="contact.faq.panel"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="bg-white rounded-xl shadow-card border-0 px-5 overflow-hidden"
                data-ocid={`contact.faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
