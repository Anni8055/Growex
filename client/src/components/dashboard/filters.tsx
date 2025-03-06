import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, LOCATIONS, PLATFORMS } from "@/lib/data";

interface FiltersProps {
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onPlatformChange: (value: string) => void;
}

export function Filters({ 
  onSearchChange, 
  onCategoryChange,
  onLocationChange,
  onPlatformChange
}: FiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <Input
          placeholder="Search influencers..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>
      <Select onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {CATEGORIES.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={onLocationChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          {LOCATIONS.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={onPlatformChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Platform" />
        </SelectTrigger>
        <SelectContent>
          {PLATFORMS.map((platform) => (
            <SelectItem key={platform} value={platform}>
              {platform}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}