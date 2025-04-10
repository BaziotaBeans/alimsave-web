"use client";

import { useState } from "react";
import { Establishment } from "@/features/establishments/types/Establishments";
import { ViewMode } from "@/types/ApplicationsTypes";
import Filters from "../Filters";
import ViewModeToggle from "../ViewModeToggle";
import EstablishmentCard from "../EstablishmentCard";
import { cn } from "@/lib/utils";

export default function EstablishmentsListing() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    regions: [] as string[],
    categories: [] as string[],
    pickupOnly: false,
  });

  const establishments: Establishment[] = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "Z Deli Delicatessen",
      category: "Mixed, Sweets & Savories",
      openingTime: "09:00",
      closingTime: "20:00",
      distance: 0.0,
      price: "2 - 500kz",
      rating: 4.9,
      image: "/images/food/food-1.png",
      pickupAvailable: true,
      region: ["Center", "South Zone", "North Zone", "East Zone"][Math.floor(Math.random() * 4)],
    }));

  const filteredEstablishments = establishments.filter((est) => {
    if (filters.regions.length > 0 && !filters.regions.includes(est.region)) return false;

    if (filters.categories.length > 0) {
      const categorySplit = est.category.split(", ");
      const hasCategory = categorySplit.some((cat) =>
        filters.categories.some((c) => cat.includes(c)),
      );
      if (!hasCategory) return false;
    }

    if (filters.pickupOnly && !est.pickupAvailable) return false;

    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-semibold text-blue">
          {filteredEstablishments.length} estabelecimentos encontrados
        </h1>

        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Filters
            filters={filters}
            setFilters={setFilters}
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>

      <div
        className={cn(
          "grid gap-6",
          viewMode === "grid" && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          viewMode === "list" && "grid-cols-1",
          viewMode === "compact" && "grid-cols-1 sm:grid-cols-2",
        )}
      >
        {filteredEstablishments.map((est) => (
          <EstablishmentCard key={est.id} establishment={est} viewMode={viewMode} />
        ))}
      </div>

      {filteredEstablishments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No establishments found with the selected filters.</p>
        </div>
      )}
    </div>
  );
}
