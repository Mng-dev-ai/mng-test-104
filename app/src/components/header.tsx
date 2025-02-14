import { Link } from "react-router-dom";
import { CartDrawer } from "@/components/cart-drawer";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchInput } from "./ui/search-input";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSearchQuery = searchParams.get("q") || "";

     useEffect(() => {
        const currentSearchQuery = searchParams.get("q") || "";
    }, [searchParams]);


    const handleSearchChange = (value: string) => {
        if (value) {
            setSearchParams({ q: value });
        } else {
            setSearchParams({});
        }
    };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              E-Commerce
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchInput
                value={initialSearchQuery}
                onChange={handleSearchChange}
            />
          </div>
          <nav className="flex items-center">
            <Link to="/">
            </Link>
            <CartDrawer />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}