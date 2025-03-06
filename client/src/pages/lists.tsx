import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockLists = [
  {
    id: 1,
    name: "Fashion Influencers 2024",
    count: 45,
    lastUpdated: "2024-02-18"
  },
  {
    id: 2,
    name: "Tech Reviewers",
    count: 28,
    lastUpdated: "2024-02-15"
  },
  {
    id: 3,
    name: "Fitness Experts",
    count: 32,
    lastUpdated: "2024-02-10"
  }
];

export default function ListsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Lists</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New List
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLists.map((list) => (
            <Card key={list.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{list.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{list.count} influencers</span>
                  <span>Updated {list.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
