import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <p className="mt-4 text-lg font-semibold">${product.price}</p>
      </CardContent>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}