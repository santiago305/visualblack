import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { services } from "@/data/services";
import { NAV_LINKS, PATHS } from "@/routes/paths";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavbar = ({ isOpen, onClose }: Props) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith(`${PATHS.services}/`);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-border bg-background md:hidden"
        >
          <div className="container-vb flex flex-col gap-3 py-4">
            <Link
              to={PATHS.home}
              onClick={onClose}
              className={`text-sm font-medium transition-colors ${
                location.pathname === PATHS.home ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Inicio
            </Link>

            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`text-left text-sm font-medium transition-colors ${
                isServiceActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Soluciones {servicesOpen ? "-" : "+"}
            </button>

            <AnimatePresence initial={false}>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2 pl-3"
                >
                  {services.map((service) => {
                    const servicePath = PATHS.serviceDetail(service.slug);

                    return (
                      <Link
                        key={service.slug}
                        to={servicePath}
                        onClick={onClose}
                        className={`text-sm transition-colors ${
                          location.pathname === servicePath ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {service.title}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
