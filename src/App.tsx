
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Advantages from "./pages/Advantages";
import Stakeholders from "./pages/Stakeholders";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Roadmap from "./pages/Roadmap";  // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadmap" element={<Roadmap />} />  {/* Add this route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

