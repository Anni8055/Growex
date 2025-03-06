import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockCampaigns = [
  {
    id: 1,
    name: "Summer Collection Launch",
    status: "Active",
    sent: 150,
    opened: 89,
    replied: 45,
    lastSent: "2024-02-18"
  },
  {
    id: 2,
    name: "Beauty Product Review",
    status: "Draft",
    sent: 0,
    opened: 0,
    replied: 0,
    lastSent: "-"
  }
];

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Outreach Campaigns</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>

        <div className="grid gap-6">
          {mockCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{campaign.name}</CardTitle>
                  <Badge 
                    variant={campaign.status === "Active" ? "default" : "secondary"}
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <Button variant="outline" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Sent</p>
                    <p className="font-medium">{campaign.sent}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Opened</p>
                    <p className="font-medium">{campaign.opened}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Replied</p>
                    <p className="font-medium">{campaign.replied}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
