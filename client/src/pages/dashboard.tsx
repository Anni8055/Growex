import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Filters } from "@/components/dashboard/filters";
import { FeaturedGrid } from "@/components/dashboard/featured-grid";
import { FeaturedCategories } from "@/components/dashboard/featured-categories";
import type { Influencer } from "@shared/schema";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [platform, setPlatform] = useState("All");

  const { data: influencers = [], isLoading } = useQuery<Influencer[]>({
    queryKey: ["influencers"],
    staleTime: 60000,
  });

  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesSearch =
      searchQuery === "" ||
      influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      influencer.username.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      category === "All" || influencer.category === category;

    const matchesLocation =
      location === "All" || influencer.location === location;

    const matchesPlatform =
      platform === "All" || influencer.platform === platform;

    return matchesSearch && matchesCategory && matchesLocation && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-8">
          <Filters
            onSearchChange={setSearchQuery}
            onCategoryChange={setCategory}
            onLocationChange={setLocation}
            onPlatformChange={setPlatform}
          />
        </div>

        <FeaturedCategories />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Search Results</h2>
          <FeaturedGrid
            influencers={filteredInfluencers}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}