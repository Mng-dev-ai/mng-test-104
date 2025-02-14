import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  onFilterChange: (category: string | null) => void;
}

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex space-x-2 mb-4">
      <Button
        variant={activeCategory === null ? "secondary" : "outline"}
        onClick={() => handleCategoryClick(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "secondary" : "outline"}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            activeCategory === category && "bg-blue-500 text-white"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}