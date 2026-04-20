import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { services } from "@/data/services";
import { PATHS } from "@/routes/paths";

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith(`${PATHS.services}/`);

  return (
    <div
      className="relative flex h-12 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex h-12 items-center text-sm font-medium transition-colors hover:text-foreground ${
          isServiceActive ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Soluciones
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
          >
            <div className="min-w-55 rounded-md border border-border bg-background py-1 shadow-lg">
              {services.map((service) => {
                const servicePath = PATHS.serviceDetail(service.slug);
                const active = location.pathname === servicePath;

                return (
                  <Link
                    key={service.slug}
                    to={servicePath}
                    className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-secondary ${
                      active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span className="text-base leading-none">{service.icon}</span>
                    <span>{service.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown;
