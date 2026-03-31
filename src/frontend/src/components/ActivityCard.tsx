import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Activity, IMAGE_MAP } from "@/data/activities";
import { Clock, Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
  onBook: (activity: Activity) => void;
}

export function ActivityCard({
  activity,
  index = 1,
  onBook,
}: ActivityCardProps) {
  const [liked, setLiked] = useState(false);
  const imgSrc = IMAGE_MAP[activity.imageKey] || IMAGE_MAP.sightseeing;

  return (
    <div
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
      data-ocid={`activities.item.${index}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Heart */}
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
          data-ocid={`activities.toggle.${index}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
        {activity.isBestSeller && (
          <Badge className="absolute top-3 left-3 bg-gold text-white border-0 text-xs font-semibold">
            Best Seller
          </Badge>
        )}
        {activity.isSpecialOffer && !activity.isBestSeller && (
          <Badge className="absolute top-3 left-3 bg-teal text-white border-0 text-xs font-semibold">
            Special Offer
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-3.5 h-3.5 ${
                star <= Math.round(activity.rating)
                  ? "text-gold fill-gold"
                  : "text-gray-200 fill-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({activity.reviewCount})
          </span>
        </div>

        <h3 className="font-serif font-bold text-gray-900 text-base mb-2 line-clamp-2 leading-snug">
          {activity.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {activity.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[100px]">{activity.location}</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">From</span>
            <p className="text-teal font-bold text-lg leading-none">
              &euro;{activity.price}
            </p>
          </div>
          <Button
            onClick={() => onBook(activity)}
            size="sm"
            className="bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-4 rounded-xl"
            data-ocid={`activities.primary_button.${index}`}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
