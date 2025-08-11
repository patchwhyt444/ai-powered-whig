
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import About from "./pages/About";
import SellFast from "./pages/SellFast";
import NotFound from "./pages/NotFound";
import BuyersList from "./pages/BuyersList";
import WholesalersJV from "./pages/WholesalersJV";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-fast" element={<SellFast />} />
          <Route path="/buyers-list" element={<BuyersList />} />
          <Route path="/wholesalers-jv" element={<WholesalersJV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
