import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { category: 'Fashion', engagement: 4.2, followers: 250000 },
  { category: 'Travel', engagement: 3.8, followers: 180000 },
  { category: 'Fitness', engagement: 5.1, followers: 320000 },
  { category: 'Food', engagement: 4.5, followers: 210000 },
  { category: 'Lifestyle', engagement: 3.9, followers: 280000 }
];

export function CategoryPerformance() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Category Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="category" className="text-sm" />
              <YAxis className="text-sm" />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagement" fill="hsl(var(--primary))" name="Engagement Rate (%)" />
              <Bar dataKey="followers" fill="hsl(var(--chart-2))" name="Followers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
