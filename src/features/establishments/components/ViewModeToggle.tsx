import { Button } from "@/components/ui/button";
import { LayoutGrid, List, ListFilter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { ViewMode } from "@/types/ApplicationsTypes";

interface ViewModeToggleProps {
  viewMode: string;
  setViewMode: Dispatch<SetStateAction<ViewMode>>;
}

export default function ViewModeToggle({ viewMode, setViewMode }: ViewModeToggleProps) {
  return (
    <div className="border rounded-md flex">
      <Button
        variant="ghost"
        size="icon"
        className={cn("rounded-none border-r", viewMode === "grid" && "bg-gray-100")}
        onClick={() => setViewMode("grid")}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("rounded-none border-r", viewMode === "list" && "bg-gray-100")}
        onClick={() => setViewMode("list")}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("rounded-none", viewMode === "compact" && "bg-gray-100")}
        onClick={() => setViewMode("compact")}
      >
        <ListFilter className="h-4 w-4" />
      </Button>
    </div>
  );
}
