import { AboutPage } from "@/components/AboutPage";
import { AccommodationPage } from "@/components/AccommodationPage";
import { ActivitiesPage } from "@/components/ActivitiesPage";
import { BestSellers } from "@/components/BestSellers";
import { BestSellersPage } from "@/components/BestSellersPage";
import { BookingModal } from "@/components/BookingModal";
import { CarRentalPage } from "@/components/CarRentalPage";
import { Categories } from "@/components/Categories";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";
import { GuidePage } from "@/components/GuidePage";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PlanTrip } from "@/components/PlanTrip";
import { SpecialOffers } from "@/components/SpecialOffers";
import { SpecialOffersPage } from "@/components/SpecialOffersPage";
import { ToursPage } from "@/components/ToursPage";
import { TrendingActivities } from "@/components/TrendingActivities";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import type { Activity } from "@/data/activities";
import { useState } from "react";

type View =
  | "home"
  | "activities"
  | "tours"
  | "accommodation"
  | "car-rental"
  | "guide"
  | "contact"
  | "about"
  | "special-offers"
  | "best-sellers";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [bookingActivity, setBookingActivity] = useState<Activity | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBook = (activity: Activity) => {
    setBookingActivity(activity);
    setBookingOpen(true);
  };

  const handleNavigate = (newView: string, category?: string) => {
    setView(newView as View);
    if (category) setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setView("activities");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (_query: string, category: string) => {
    setSelectedCategory(category);
    setView("activities");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentView={view} onNavigate={handleNavigate} />

      <main className="flex-1">
        {view === "home" ? (
          <>
            <Hero onSearch={handleSearch} />
            <div className="bg-background">
              <Categories onSelectCategory={handleSelectCategory} />
              <TrendingActivities
                onBook={handleBook}
                onSeeMore={() => handleNavigate("activities")}
              />
              <SpecialOffers onBook={handleBook} />
              <BestSellers
                onBook={handleBook}
                onSeeMore={() => handleNavigate("activities")}
              />
              <PlanTrip />
              <WhyChooseUs />
            </div>
          </>
        ) : view === "activities" ? (
          <ActivitiesPage
            initialCategory={selectedCategory}
            onBook={handleBook}
            onBack={() => {
              setView("home");
              setSelectedCategory("");
            }}
          />
        ) : view === "tours" ? (
          <ToursPage onBook={handleBook} />
        ) : view === "accommodation" ? (
          <AccommodationPage />
        ) : view === "car-rental" ? (
          <CarRentalPage />
        ) : view === "guide" ? (
          <GuidePage />
        ) : view === "contact" ? (
          <ContactPage />
        ) : view === "about" ? (
          <AboutPage />
        ) : view === "special-offers" ? (
          <SpecialOffersPage onBook={handleBook} />
        ) : view === "best-sellers" ? (
          <BestSellersPage onBook={handleBook} />
        ) : null}
      </main>

      <Footer onNavigate={handleNavigate} />

      <BookingModal
        activity={bookingActivity}
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <Toaster />
    </div>
  );
}
