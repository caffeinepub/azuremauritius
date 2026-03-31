import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, category?: string) => void;
}

const NAV_LINKS = [
  { label: "Home", view: "home" },
  { label: "Tours", view: "tours" },
  { label: "Accommodation", view: "accommodation" },
  { label: "Car Rental", view: "car-rental" },
  { label: "Guide", view: "guide" },
  { label: "About", view: "about" },
  { label: "Contact", view: "contact" },
];

const ACTIVITIES_SUBMENU = [
  { label: "All Activities", view: "activities" },
  { label: "Special Offers", view: "special-offers" },
  { label: "Best Sellers", view: "best-sellers" },
  { label: "Tours", view: "tours" },
];

const ALL_MOBILE_LINKS = [
  { label: "Home", view: "home" },
  { label: "All Activities", view: "activities" },
  { label: "Special Offers", view: "special-offers" },
  { label: "Best Sellers", view: "best-sellers" },
  { label: "Tours", view: "tours" },
  { label: "Accommodation", view: "accommodation" },
  { label: "Car Rental", view: "car-rental" },
  { label: "Guide", view: "guide" },
  { label: "About", view: "about" },
  { label: "Contact", view: "contact" },
];

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActivitiesActive = [
    "activities",
    "special-offers",
    "best-sellers",
  ].includes(currentView);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 flex-shrink-0"
            data-ocid="header.link"
          >
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
              <span className="text-white font-bold text-sm">MA</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-teal font-bold text-base leading-none block">
                MauritiusAttractions
              </span>
              <span className="text-gray-500 text-xs leading-none">
                Discover The Island
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            data-ocid="header.link"
          >
            {/* Activities Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActivitiesActive
                      ? "text-teal bg-teal/10"
                      : "text-gray-700 hover:text-teal hover:bg-gray-50"
                  }`}
                  data-ocid="nav.activities.toggle"
                >
                  Activities
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                {ACTIVITIES_SUBMENU.map((item) => (
                  <DropdownMenuItem
                    key={item.view}
                    onClick={() => onNavigate(item.view)}
                    className="cursor-pointer"
                    data-ocid={`nav.${item.view}.link`}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentView === link.view
                    ? "text-teal bg-teal/10"
                    : "text-gray-700 hover:text-teal hover:bg-gray-50"
                }`}
                data-ocid={`nav.${link.view}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => onNavigate("activities")}
              className="hidden sm:flex bg-teal hover:bg-teal-dark text-white font-semibold text-sm px-4 py-2 h-9"
              data-ocid="header.primary_button"
            >
              BOOK NOW
            </Button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
              data-ocid="header.search_input"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              data-ocid="header.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white" data-ocid="header.panel">
          <div className="px-4 py-2 space-y-1">
            {ALL_MOBILE_LINKS.map((link) => (
              <button
                type="button"
                key={link.view}
                onClick={() => {
                  onNavigate(link.view);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  currentView === link.view
                    ? "text-teal bg-teal/10"
                    : "text-gray-700 hover:text-teal hover:bg-gray-50"
                }`}
                data-ocid={`nav.mobile.${link.view}.link`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <Button
                onClick={() => {
                  onNavigate("activities");
                  setMobileOpen(false);
                }}
                className="w-full bg-teal hover:bg-teal-dark text-white font-semibold"
                data-ocid="header.mobile.primary_button"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
