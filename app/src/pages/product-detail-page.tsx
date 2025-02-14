import { useParams } from "react-router-dom";
import { products } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  return (
    <Card className="flex flex-col md:flex-row">
    <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none" />
      </div>
      <div className="md:w-1/2">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">${product.price}</p>
          <p className="text-sm text-muted-foreground">Category: {product.category}</p>
        </CardContent>
        
          <AddToCartButton product={product} />
        
      </div>
      
    </Card>
  );
}