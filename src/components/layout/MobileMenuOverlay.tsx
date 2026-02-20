import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

type ServiceItem = {
  name: string;
  description: string;
  href: string;
};

interface MobileMenuOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navItems: NavItem[];
  services: ServiceItem[];
}

/**
 * Mobile menu rendered via Portal with slide-down animation.
 * Content-height based, not fullscreen.
 */
export function MobileMenuOverlay({ open, onOpenChange, navItems, services }: MobileMenuOverlayProps) {
  const location = useLocation();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    if (!open) return;
    onOpenChange(false);
    setMobileServicesOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const portalTarget = useMemo(() => (typeof document !== "undefined" ? document.body : null), []);
  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.05
            }}
            style={{ transformOrigin: "top" }}
            className="fixed top-0 left-0 right-0 z-[100] bg-primary rounded-b-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
            aria-label="Mobile navigation menu"
          >
            {/* Header with Logo and Close Button */}
            <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b border-primary-foreground/10">
              <Link to="/" onClick={() => onOpenChange(false)} className="inline-flex items-center">
                <img
                  src="/assets/zemnas-logo-transparent.png"
                  alt="Zemnas"
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>
              
              {/* Close Button */}
              <motion.button
                onClick={() => onOpenChange(false)}
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </motion.button>
            </div>

            {/* Nav */}
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 + 0.1, duration: 0.25 }}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex items-center justify-between w-full py-3.5 text-lg font-semibold text-primary-foreground"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            id="mobile-services-submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 space-y-2">
                              {services.map((service, sIndex) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: sIndex * 0.03 }}
                                >
                                  <Link
                                    to={service.href}
                                    onClick={() => onOpenChange(false)}
                                    className="block py-2.5 px-3 rounded-xl text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                                  >
                                    {service.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => onOpenChange(false)}
                      className="block py-3.5 text-lg font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => onOpenChange(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold bg-primary-foreground text-primary rounded-2xl hover:bg-primary-foreground/90 transition-colors shadow-lg"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalTarget,
  );
}
