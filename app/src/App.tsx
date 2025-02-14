import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "@/pages/product-list-page";
import ProductDetailPage from "@/pages/product-detail-page";
import Header from "@/components/header";
import Footer from "@/components/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-8">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;