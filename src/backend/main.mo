import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Float "mo:base/Float";

actor {

  type Activity = {
    id: Nat;
    title: Text;
    category: Text;
    price: Float;
    duration: Text;
    location: Text;
    description: Text;
    rating: Float;
    reviewCount: Nat;
    isSpecialOffer: Bool;
    isTrending: Bool;
    isBestSeller: Bool;
    imageUrl: Text;
  };

  type BookingInquiry = {
    id: Nat;
    name: Text;
    email: Text;
    phone: Text;
    activityId: Nat;
    activityTitle: Text;
    date: Text;
    numberOfPeople: Nat;
    message: Text;
  };

  stable var nextBookingId: Nat = 1;
  stable var bookings: [BookingInquiry] = [];

  let activities: [Activity] = [
    { id = 1; title = "Catamaran Cruise - Gabriel Island & Lunch"; category = "Catamaran Cruises"; price = 49.0; duration = "7 hrs"; location = "North"; description = "Sail to Gabriel Island on a luxury catamaran with lunch, snorkeling, and drinks included. An unforgettable day on the turquoise waters of Mauritius."; rating = 4.8; reviewCount = 312; isSpecialOffer = true; isTrending = true; isBestSeller = true; imageUrl = "catamaran" },
    { id = 2; title = "Walking With Lions at Casela Nature Parks"; category = "Safari Wildlife"; price = 34.0; duration = "1 hr"; location = "West"; description = "Get up close with majestic lions at Casela Nature Parks. Walk alongside these incredible animals in a safe, guided experience."; rating = 4.9; reviewCount = 245; isSpecialOffer = false; isTrending = true; isBestSeller = true; imageUrl = "safari" },
    { id = 3; title = "Mauritius South West Tour (Classic)"; category = "Sightseeing Tours"; price = 29.0; duration = "7 hrs"; location = "South West"; description = "Explore the scenic south west coast of Mauritius - visit Chamarel, the Black River Gorges, and beautiful coastal viewpoints."; rating = 4.7; reviewCount = 189; isSpecialOffer = true; isTrending = false; isBestSeller = true; imageUrl = "sightseeing" },
    { id = 4; title = "Swim With Dolphins & Benitiers Island"; category = "Dolphins & Whales"; price = 79.0; duration = "6 hrs 30 mins"; location = "South West"; description = "Swim with wild spinner dolphins in the open ocean, then visit the pristine Benitiers Island for lunch and snorkeling."; rating = 4.9; reviewCount = 427; isSpecialOffer = true; isTrending = true; isBestSeller = true; imageUrl = "dolphins" },
    { id = 5; title = "Helicopter Sightseeing Tour"; category = "Helicopter & Skydiving"; price = 215.0; duration = "30 mins"; location = "South West"; description = "See Mauritius from above! This breathtaking helicopter tour takes you over the iconic underwater waterfall illusion, Black River Gorges and the stunning coastline."; rating = 4.9; reviewCount = 98; isSpecialOffer = true; isTrending = false; isBestSeller = false; imageUrl = "helicopter" },
    { id = 6; title = "Hiking Trip at Tamarind Falls"; category = "Hiking & Trekking"; price = 49.0; duration = "3 hrs"; location = "Center"; description = "Trek through lush tropical forest to reach the stunning Tamarind Falls, a series of seven beautiful waterfalls in the heart of Mauritius."; rating = 4.6; reviewCount = 156; isSpecialOffer = false; isTrending = true; isBestSeller = false; imageUrl = "hiking" },
    { id = 7; title = "Budget Day Package at Ile Aux Cerfs"; category = "Ile aux Cerfs"; price = 45.0; duration = "6 hrs"; location = "East"; description = "Spend a full day on the beautiful Ile Aux Cerfs island. Enjoy white sandy beaches, water sports, and a delicious lunch."; rating = 4.7; reviewCount = 302; isSpecialOffer = false; isTrending = true; isBestSeller = true; imageUrl = "ilecerfs" },
    { id = 8; title = "Mauritius North Tour"; category = "Sightseeing Tours"; price = 47.0; duration = "8 hrs"; location = "North"; description = "Discover the north of Mauritius - visit Port Louis market, Cap Malheureux chapel, the colorful Hindu temples, and the beautiful lagoon."; rating = 4.6; reviewCount = 211; isSpecialOffer = false; isTrending = true; isBestSeller = false; imageUrl = "northtour" },
    { id = 9; title = "Parasailing"; category = "Sea & Water Activities"; price = 52.0; duration = "Flexible"; location = "North"; description = "Soar above the crystal clear waters of Mauritius on a parasailing adventure. Enjoy breathtaking panoramic views of the lagoon and coastline."; rating = 4.5; reviewCount = 134; isSpecialOffer = false; isTrending = true; isBestSeller = false; imageUrl = "parasailing" },
    { id = 10; title = "Horse Riding On The Beach"; category = "Horse Riding"; price = 116.0; duration = "Flexible"; location = "South West"; description = "Experience the ultimate beach horse riding adventure. Gallop along pristine white sand beaches with the warm Indian Ocean breeze."; rating = 4.8; reviewCount = 87; isSpecialOffer = false; isTrending = true; isBestSeller = false; imageUrl = "horseriding" },
    { id = 11; title = "Quad Biking Adventure - South"; category = "Quad & 4x4"; price = 65.0; duration = "2 hrs"; location = "South"; description = "Rev up your holiday with an exciting quad biking adventure through the rugged terrain of southern Mauritius. Suitable for beginners and experts."; rating = 4.7; reviewCount = 178; isSpecialOffer = false; isTrending = false; isBestSeller = true; imageUrl = "quad" },
    { id = 12; title = "Catamaran Cruise to Ile Aux Cerfs"; category = "Catamaran Cruises"; price = 67.0; duration = "6 hrs"; location = "East"; description = "Sail in style to Ile Aux Cerfs on a beautiful catamaran. Enjoy snorkeling, water sports, a BBQ lunch, and plenty of time to relax on the beach."; rating = 4.8; reviewCount = 265; isSpecialOffer = false; isTrending = true; isBestSeller = true; imageUrl = "catamaran2" },
    { id = 13; title = "Swim With Dolphins & Whale Watching"; category = "Dolphins & Whales"; price = 99.0; duration = "5 hrs 30 mins"; location = "South West"; description = "Encounter wild dolphins and majestic whales on this incredible ocean adventure. Includes snorkeling and time on Benitiers Island."; rating = 4.9; reviewCount = 312; isSpecialOffer = false; isTrending = true; isBestSeller = true; imageUrl = "dolphins2" },
    { id = 14; title = "Underwater Sea Walk - Belle Mare"; category = "Sea & Water Activities"; price = 35.0; duration = "1 hr"; location = "East"; description = "No diving experience needed! Walk on the sea bed and discover the vibrant marine life of the Indian Ocean up close with an underwater helmet."; rating = 4.7; reviewCount = 198; isSpecialOffer = false; isTrending = true; isBestSeller = false; imageUrl = "seawalk" },
    { id = 15; title = "Breakfast with Giraffes at Casela"; category = "Safari Wildlife"; price = 86.0; duration = "1 hr"; location = "West"; description = "Start your day with an extraordinary experience - enjoy breakfast in the company of graceful giraffes at Casela Nature Parks."; rating = 4.9; reviewCount = 76; isSpecialOffer = true; isTrending = false; isBestSeller = false; imageUrl = "giraffes" },
    { id = 16; title = "Luxury Day at Ile Des Deux Cocos"; category = "Ile aux Cerfs"; price = 98.0; duration = "5 hrs 30 mins"; location = "South East"; description = "Spend a luxurious day on the exclusive Ile Des Deux Cocos - a private island with pristine beaches, gourmet lunch, and water sports."; rating = 4.9; reviewCount = 143; isSpecialOffer = false; isTrending = true; isBestSeller = true; imageUrl = "deuxcocos" },
    { id = 17; title = "Zip Line & Canyoning Adventure"; category = "Hiking & Trekking"; price = 75.0; duration = "4 hrs"; location = "South"; description = "Get your adrenaline pumping with an exhilarating zip line and canyoning experience through the lush valleys and gorges of Mauritius."; rating = 4.8; reviewCount = 112; isSpecialOffer = false; isTrending = false; isBestSeller = false; imageUrl = "zipline" },
    { id = 18; title = "Sunset Catamaran Cruise"; category = "Catamaran Cruises"; price = 55.0; duration = "3 hrs"; location = "West"; description = "End your day in paradise with a romantic sunset cruise along the west coast. Enjoy cocktails, canapes, and a spectacular Mauritian sunset."; rating = 4.8; reviewCount = 189; isSpecialOffer = false; isTrending = false; isBestSeller = true; imageUrl = "sunset" },
    { id = 19; title = "Deep Sea Fishing - Full Day"; category = "Sea & Water Activities"; price = 110.0; duration = "8 hrs"; location = "North"; description = "Venture into the deep blue waters of the Indian Ocean in search of marlin, tuna, and wahoo. Equipment and lunch included."; rating = 4.7; reviewCount = 94; isSpecialOffer = false; isTrending = false; isBestSeller = false; imageUrl = "fishing" },
    { id = 20; title = "Safari Wildlife Encounter at Casela"; category = "Safari Wildlife"; price = 42.0; duration = "3 hrs"; location = "West"; description = "Discover African wildlife in the heart of Mauritius. See lions, tigers, zebras, giraffes, and over 150 species of birds at Casela Nature Parks."; rating = 4.7; reviewCount = 231; isSpecialOffer = false; isTrending = false; isBestSeller = true; imageUrl = "casela" }
  ];

  public query func getActivities() : async [Activity] {
    activities
  };

  public query func getActivitiesByCategory(category: Text) : async [Activity] {
    Array.filter<Activity>(activities, func(a) { a.category == category })
  };

  public query func getTrendingActivities() : async [Activity] {
    Array.filter<Activity>(activities, func(a) { a.isTrending })
  };

  public query func getSpecialOffers() : async [Activity] {
    Array.filter<Activity>(activities, func(a) { a.isSpecialOffer })
  };

  public query func getBestSellers() : async [Activity] {
    Array.filter<Activity>(activities, func(a) { a.isBestSeller })
  };

  public func submitBookingInquiry(name: Text, email: Text, phone: Text, activityId: Nat, activityTitle: Text, date: Text, numberOfPeople: Nat, message: Text) : async Nat {
    let id = nextBookingId;
    let inquiry: BookingInquiry = { id; name; email; phone; activityId; activityTitle; date; numberOfPeople; message };
    bookings := Array.append(bookings, [inquiry]);
    nextBookingId += 1;
    id
  };

  public query func getBookingInquiries() : async [BookingInquiry] {
    bookings
  };
};
