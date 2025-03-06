import { Filters } from "@/components/dashboard/filters";
import { FeaturedGrid } from "@/components/dashboard/featured-grid";
import { useState } from "react";

const mockInfluencers = [
  {
    id: 1,
    name: "Sarah Smith",
    username: "sarahstyle",
    platform: "Instagram",
    followers: 150000,
    engagement: 3.2,
    location: "New York",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300",
    bio: "Fashion and lifestyle blogger, sharing daily inspiration"
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "mikefitness",
    platform: "YouTube",
    followers: 500000,
    engagement: 4.5,
    location: "Tokyo",
    category: "Fitness",
    imageUrl: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fit=crop&w=300",
    bio: "Helping you achieve your fitness goals"
  }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [platform, setPlatform] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Search Influencers</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <Filters
            onSearchChange={setSearchQuery}
            onCategoryChange={setCategory}
            onLocationChange={setLocation}
            onPlatformChange={setPlatform}
          />
        </div>

        <div className="mt-8">
          <FeaturedGrid influencers={mockInfluencers} />
        </div>
      </div>
    </div>
  );
}
