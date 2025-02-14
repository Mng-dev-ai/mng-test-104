import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";

export function CartDrawer() {
  const { cart, removeProduct, clearCart } = useCartStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart ({cart.length})
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your Cart</DrawerTitle>
          <DrawerDescription>
            {cart.length === 0
              ? "Your cart is empty."
              : `You have ${cart.length} items in your cart.`}
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[300px] px-4">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="py-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-md mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={() => removeProduct(item.id)}
              >
                Remove
              </Button>
              <Separator className="my-2" />
            </div>
          ))}
        </ScrollArea>
        <DrawerFooter>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <Button className="w-full" onClick={clearCart} disabled={cart.length === 0}>
            Checkout
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" className="mt-2 w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}