import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CgpaPage from "./pages/CgpaPage";
import AttendancePage from "./pages/AttendancePage";
import PercentagePage from "./pages/PercentagePage";
import AiToolsPage from "./pages/AiToolsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cgpa" element={<CgpaPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/percentage" element={<PercentagePage />} />
          <Route path="/ai-tools" element={<AiToolsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
