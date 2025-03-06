import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Influencer } from "@shared/schema";

interface InfluencerCardProps {
  influencer: Influencer;
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={influencer.imageUrl} alt={influencer.name} />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{influencer.name}</h3>
          <p className="text-sm text-muted-foreground">@{influencer.username}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <Badge variant="outline">{influencer.platform}</Badge>
            <Badge variant="secondary">{influencer.category}</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>{influencer.followers.toLocaleString()} followers</span>
            <span>{influencer.engagement}% engagement</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{influencer.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
