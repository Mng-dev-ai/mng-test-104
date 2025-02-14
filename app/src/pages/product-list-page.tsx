import { useState, useEffect } from "react";
import ProductCard from "@/components/ui/product-card";
import { products } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { CategoryFilter } from "@/components/category-filter";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function ProductListPage() {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParams] = useSearchParams();

    useEffect(() => {
    const currentSearchQuery = searchParams.get("q") || "";
        setSearchQuery(currentSearchQuery);
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !filteredCategory || product.category === filteredCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <CategoryFilter
        onFilterChange={(category) => setFilteredCategory(category)}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product: Product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}