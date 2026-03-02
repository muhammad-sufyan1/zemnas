import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CreativeService = lazy(() => import("./pages/services/CreativeService"));
const MarketingService = lazy(() => import("./pages/services/MarketingService"));
const DemandGeneration = lazy(() => import("./pages/services/marketing/DemandGeneration"));
const FunnelsLandingPages = lazy(() => import("./pages/services/marketing/FunnelsLandingPages"));
const WebsiteInfrastructure = lazy(() => import("./pages/services/marketing/WebsiteInfrastructure"));
const PerformanceOptimization = lazy(() => import("./pages/services/marketing/PerformanceOptimization"));
const ExplainerVideos = lazy(() => import("./pages/services/creative/ExplainerVideos"));
const MotionAnimation = lazy(() => import("./pages/services/creative/MotionAnimation"));
const ShortFormContent = lazy(() => import("./pages/services/creative/ShortFormContent"));
const UIUXDesign = lazy(() => import("./pages/services/creative/UIUXDesign"));
const MarketingCreatives = lazy(() => import("./pages/services/creative/MarketingCreatives"));
const BrandVisualSystems = lazy(() => import("./pages/services/creative/BrandVisualSystems"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Work = lazy(() => import("./pages/Work"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));

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

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<InsightDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
