import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Moyens from "./pages/Moyens";
import MoyenHumain from "./pages/MoyenHumain";       // <== هنا صححت المسار
import MoyenMatiriel from "./pages/MoyenMatiriel";
import Contact from "./pages/Contact";
import Projet from "./pages/Projet";
import ProjetDetails from "./pages/ProjetDetails";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/moyens" element={<Moyens />} />
          <Route path="/moyen-humain" element={<MoyenHumain />} />
          <Route path="/moyen-materiel" element={<MoyenMatiriel />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/projet" element={<Projet />} />
           <Route path="/services" element={<Services />} />
           <Route path="/projet-details/:id" element={<ProjetDetails/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
