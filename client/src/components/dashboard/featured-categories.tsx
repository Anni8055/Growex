import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Top Fashion Instagramers in India",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800",
    href: "/search?category=fashion&location=india&platform=instagram"
  },
  {
    title: "Top Lifestyle Tiktokers in India",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800",
    href: "/search?category=lifestyle&location=india&platform=tiktok"
  },
  {
    title: "Top Fitness Youtubers in India",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800",
    href: "/search?category=fitness&location=india&platform=youtube"
  },
  {
    title: "Top Instagramers in Madrid",
    image: "https://images.unsplash.com/photo-1558442092-f97cd912eaa8?auto=format&fit=crop&w=800",
    href: "/search?location=madrid&platform=instagram"
  },
  {
    title: "Top Youtubers in New York",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800",
    href: "/search?location=new-york&platform=youtube"
  },
  {
    title: "Top Tiktokers in Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800",
    href: "/search?location=tokyo&platform=tiktok"
  }
];

export function FeaturedCategories() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Featured selection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.href} href={category.href}>
            <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0 relative aspect-[4/3]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold">
                  {category.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
