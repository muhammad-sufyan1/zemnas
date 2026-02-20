import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreativeService from "./pages/services/CreativeService";
import MarketingService from "./pages/services/MarketingService";
import SoftwareService from "./pages/services/SoftwareService";
import ManagedService from "./pages/services/ManagedService";
import DemandGeneration from "./pages/services/marketing/DemandGeneration";
import FunnelsLandingPages from "./pages/services/marketing/FunnelsLandingPages";
import WebsiteInfrastructure from "./pages/services/marketing/WebsiteInfrastructure";
import PerformanceOptimization from "./pages/services/marketing/PerformanceOptimization";
import CustomDevelopment from "./pages/services/software/CustomDevelopment";
import AIPoweredTools from "./pages/services/software/AIPoweredTools";
import WorkflowAutomation from "./pages/services/software/WorkflowAutomation";
import IntegrationAPIs from "./pages/services/software/IntegrationAPIs";
import MarketingCreativeOps from "./pages/services/managed/MarketingCreativeOps";
import WebsiteMaintenance from "./pages/services/managed/WebsiteMaintenance";
import TechnicalSupport from "./pages/services/managed/TechnicalSupport";
import OngoingOptimization from "./pages/services/managed/OngoingOptimization";
import ExplainerVideos from "./pages/services/creative/ExplainerVideos";
import MotionAnimation from "./pages/services/creative/MotionAnimation";
import ShortFormContent from "./pages/services/creative/ShortFormContent";
import UIUXDesign from "./pages/services/creative/UIUXDesign";
import MarketingCreatives from "./pages/services/creative/MarketingCreatives";
import BrandVisualSystems from "./pages/services/creative/BrandVisualSystems";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";

const queryClient = new QueryClient();

const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/services/creative" element={<CreativeService />} />
          <Route path="/services/creative/explainer-videos" element={<ExplainerVideos />} />
          <Route path="/services/creative/motion-animation" element={<MotionAnimation />} />
          <Route path="/services/creative/short-form-content" element={<ShortFormContent />} />
          <Route path="/services/creative/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/creative/marketing-creatives" element={<MarketingCreatives />} />
          <Route path="/services/creative/brand-visual-systems" element={<BrandVisualSystems />} />
          <Route path="/services/marketing" element={<MarketingService />} />
          <Route path="/services/marketing/demand-generation" element={<DemandGeneration />} />
          <Route path="/services/marketing/funnels-landing-pages" element={<FunnelsLandingPages />} />
          <Route path="/services/marketing/website-infrastructure" element={<WebsiteInfrastructure />} />
          <Route path="/services/marketing/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/services/software" element={<SoftwareService />} />
          <Route path="/services/software/custom-development" element={<CustomDevelopment />} />
          <Route path="/services/software/ai-powered-tools" element={<AIPoweredTools />} />
          <Route path="/services/software/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/software/integration-apis" element={<IntegrationAPIs />} />
          <Route path="/services/managed" element={<ManagedService />} />
          <Route path="/services/managed/marketing-creative-ops" element={<MarketingCreativeOps />} />
          <Route path="/services/managed/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/managed/technical-support" element={<TechnicalSupport />} />
          <Route path="/services/managed/ongoing-optimization" element={<OngoingOptimization />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
