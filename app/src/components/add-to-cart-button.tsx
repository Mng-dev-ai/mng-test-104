import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { useCartStore } from "@/store/cart-store";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addProduct = useCartStore((state) => state.addProduct);

  const handleAddToCart = () => {
    addProduct(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button onClick={handleAddToCart} className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}