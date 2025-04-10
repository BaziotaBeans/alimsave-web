import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type FilterValues = {
  minPrice: number;
  maxPrice: number;
  regions: string[];
  categories: string[];
  pickupOnly: boolean;
};

interface FiltersProps {
  filters: FilterValues;
  setFilters: Dispatch<SetStateAction<FilterValues>>;
  filterOpen: boolean;
  setFilterOpen: (open: boolean) => void;
}

const regions = ["Center", "South Zone", "North Zone", "East Zone"];
const categories = ["Mixed", "Sweets", "Savories", "Drinks", "Vegetarian"];

export default function Filters({ filters, setFilters, filterOpen, setFilterOpen }: FiltersProps) {
  const toggleRegion = (region: string) => {
    setFilters((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((r: string) => r !== region)
        : [...prev.regions, region],
    }));
  };

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c: string) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Filter</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">Price</h3>
            <Slider
              defaultValue={[filters.minPrice, filters.maxPrice]}
              max={1000}
              step={50}
              onValueChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: value[0],
                  maxPrice: value[1],
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Region</h3>
            {regions.map((region) => (
              <div key={region} className="flex items-center space-x-2">
                <Checkbox
                  id={`region-${region}`}
                  checked={filters.regions.includes(region)}
                  onCheckedChange={() => toggleRegion(region)}
                />
                <Label htmlFor={`region-${region}`}>{region}</Label>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Category</h3>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <Label htmlFor={`category-${category}`}>{category}</Label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
