"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CurrentLocationSVG } from "@/components/shared/customIcon/currentLocation";
import {
  Search,
  X,
  Filter,
  Coffee,
  Pizza,
  ShoppingCart,
  Utensils,
  Beer,
  Cake,
  Beef,
  Apple,
  Salad,
  Sandwich,
  IceCream,
  Wine,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Mock data for command palette
const mockEstablishments = [
  { id: 1, name: "Restaurante Sabor Caseiro", type: "restaurant" },
  { id: 2, name: "Padaria Pão Dourado", type: "bakery" },
  { id: 3, name: "Mercado Fresh", type: "market" },
  { id: 4, name: "Pizzaria Bella Napoli", type: "restaurant" },
  { id: 5, name: "Café Aroma", type: "cafe" },
  { id: 6, name: "Bar do Zé", type: "bar" },
  { id: 7, name: "Sorveteria Gelato", type: "ice_cream" },
  { id: 8, name: "Confeitaria Doce Sabor", type: "bakery" },
  { id: 9, name: "Mercado Express", type: "market" },
  { id: 10, name: "Restaurante Fusion", type: "restaurant" },
  { id: 11, name: "Hamburgueria Artesanal", type: "fast_food" },
  { id: 12, name: "Adega Vinhos Finos", type: "wine_store" },
  { id: 13, name: "Açougue Premium", type: "butcher" },
  { id: 14, name: "Hortifruti Orgânico", type: "grocery" },
  { id: 15, name: "Lanchonete Rápida", type: "fast_food" },
];

const filters = [
  { id: "restaurants", name: "Restaurantes", icon: <Utensils className="w-4 h-4" /> },
  { id: "pizzarias", name: "Pizzarias", icon: <Pizza className="w-4 h-4" /> },
  { id: "bakeries", name: "Padarias", icon: <Coffee className="w-4 h-4" /> },
  { id: "markets", name: "Mercados", icon: <ShoppingCart className="w-4 h-4" /> },
  { id: "bars", name: "Bares", icon: <Beer className="w-4 h-4" /> },
  { id: "confectionery", name: "Confeitarias", icon: <Cake className="w-4 h-4" /> },
  { id: "butcher", name: "Açougues", icon: <Beef className="w-4 h-4" /> },
  { id: "grocery", name: "Hortifruti", icon: <Apple className="w-4 h-4" /> },
  { id: "healthy", name: "Saudáveis", icon: <Salad className="w-4 h-4" /> },
  { id: "fast_food", name: "Fast Food", icon: <Sandwich className="w-4 h-4" /> },
  { id: "ice_cream", name: "Sorveterias", icon: <IceCream className="w-4 h-4" /> },
  { id: "wine_store", name: "Adegas", icon: <Wine className="w-4 h-4" /> },
];

export function SearchEstablishments() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showFiltersInCommand, setShowFiltersInCommand] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Setup keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter],
    );
  };

  const getEstablishmentIcon = (type: string) => {
    switch (type) {
      case "restaurant":
        return <Utensils className="w-4 h-4 text-gray-500" />;
      case "bakery":
        return <Coffee className="w-4 h-4 text-gray-500" />;
      case "market":
        return <ShoppingCart className="w-4 h-4 text-gray-500" />;
      case "cafe":
        return <Coffee className="w-4 h-4 text-gray-500" />;
      case "bar":
        return <Beer className="w-4 h-4 text-gray-500" />;
      case "ice_cream":
        return <IceCream className="w-4 h-4 text-gray-500" />;
      case "fast_food":
        return <Sandwich className="w-4 h-4 text-gray-500" />;
      case "wine_store":
        return <Wine className="w-4 h-4 text-gray-500" />;
      case "butcher":
        return <Beef className="w-4 h-4 text-gray-500" />;
      case "grocery":
        return <Apple className="w-4 h-4 text-gray-500" />;
      default:
        return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  const getEstablishmentType = (type: string) => {
    switch (type) {
      case "restaurant":
        return "Restaurante";
      case "bakery":
        return "Padaria";
      case "market":
        return "Mercado";
      case "cafe":
        return "Café";
      case "bar":
        return "Bar";
      case "ice_cream":
        return "Sorveteria";
      case "fast_food":
        return "Fast Food";
      case "wine_store":
        return "Adega";
      case "butcher":
        return "Açougue";
      case "grocery":
        return "Hortifruti";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-3 w-full lg:max-w-[480px] mx-auto z-40">
      <div className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 flex-1 h-14 sm:h-16 w-full bg-white rounded-lg pl-10 pr-[120px] text-left text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden md:block md:text-base">Pesquisar por estabelecimento</span>
            <span className="block md:hidden text-sm md:text-base">Pesquisar</span>
            <kbd
              className={cn(
                // "absolute right-[150px] top-1/2 transform -translate-y-1/2",
                "pointer-events-none inline-flex h-5 select-none items-center gap-1",
                "rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
              )}
            >
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "absolute top-0 right-0 text-blue font-semibold w-28 md:w-40 h-full border-l text-sm sm:text-base",
              "flex items-center justify-center gap-2 cursor-pointer transition-all",
            )}
          >
            <CurrentLocationSVG />
            {!isMobile ? "Perto de si" : "Próximo"}
          </motion.button>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm sm:text-base md:text-xl text-white pl-2.5"
        >
          RESTAURANTE, PADARIAS, MERCADOS!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-white text-blue p-2 rounded-full shadow-md flex items-center justify-center"
        >
          <Filter className="w-5 h-5" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-4 shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-blue">Filtros</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleFilter(filter.id)}
                  className={cn(
                    "p-3 rounded-lg flex items-center gap-2 transition-all",
                    selectedFilters.includes(filter.id)
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  )}
                >
                  {filter.icon}
                  <span className="text-sm">{filter.name}</span>
                </motion.button>
              ))}
            </div>

            {selectedFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.map((filter) => {
                    const filterData = filters.find((f) => f.id === filter);
                    return (
                      <motion.span
                        key={filter}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {filterData?.name}
                        <button
                          onClick={() => toggleFilter(filter)}
                          className="ml-1 hover:bg-blue-600 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Pesquisar por estabelecimento..."
          value={searchValue}
          onValueChange={setSearchValue}
        />
        <CommandList>
          <CommandEmpty>Nenhum estabelecimento encontrado.</CommandEmpty>

          <CommandGroup heading="Estabelecimentos">
            {mockEstablishments
              .filter(
                (est) =>
                  searchValue === "" || est.name.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .slice(0, 6)
              .map((establishment) => (
                <CommandItem
                  key={establishment.id}
                  onSelect={() => {
                    setSearchValue(establishment.name);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 py-3"
                >
                  {getEstablishmentIcon(establishment.type)}
                  <div>
                    <p className="font-medium">{establishment.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {getEstablishmentType(establishment.type)}
                    </p>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>

          <div className="px-2 py-1.5">
            <button
              onClick={() => setShowFiltersInCommand(!showFiltersInCommand)}
              className="flex w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filtros</span>
                {selectedFilters.length > 0 && (
                  <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                    {selectedFilters.length}
                  </span>
                )}
              </div>
              {showFiltersInCommand ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {showFiltersInCommand && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CommandGroup heading="Categorias">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {filters.map((filter) => (
                      <CommandItem
                        key={filter.id}
                        onSelect={() => toggleFilter(filter.id)}
                        className={cn(
                          "flex items-center gap-2 py-2",
                          selectedFilters.includes(filter.id) && "bg-blue-50",
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-center gap-2",
                            selectedFilters.includes(filter.id) ? "text-blue-700" : "text-gray-700",
                          )}
                        >
                          {filter.icon}
                          <span>{filter.name}</span>
                        </div>
                        {selectedFilters.includes(filter.id) && (
                          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                            <Check className="h-3 w-3 text-blue-700" />
                          </span>
                        )}
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </motion.div>
            )}
          </AnimatePresence>

          {selectedFilters.length > 0 && (
            <CommandGroup heading="Filtros selecionados">
              <div className="flex flex-wrap gap-1 p-2">
                {selectedFilters.map((filter) => {
                  const filterData = filters.find((f) => f.id === filter);
                  return (
                    <span
                      key={filter}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {filterData?.icon}
                      {filterData?.name}
                      <button
                        onClick={() => toggleFilter(filter)}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}

// Check component for the filter items
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
