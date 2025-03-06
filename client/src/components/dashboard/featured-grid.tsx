import { InfluencerCard } from "./influencer-card";
import type { Influencer } from "@shared/schema";

interface FeaturedGridProps {
  influencers: Influencer[];
  isLoading?: boolean;
}

export function FeaturedGrid({ influencers, isLoading }: FeaturedGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[200px] rounded-lg bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {influencers.map((influencer) => (
        <InfluencerCard key={influencer.id} influencer={influencer} />
      ))}
    </div>
  );
}
