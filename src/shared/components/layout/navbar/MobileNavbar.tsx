import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, PATHS, SERVICE_LINKS } from "@/routes/paths";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavbar = ({ isOpen, onClose }: Props) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServiceActive =
    location.pathname === PATHS.services ||
    location.pathname.startsWith(`${PATHS.services}/`) ||
    SERVICE_LINKS.some((service) => location.pathname === service.path);

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
                location.pathname === PATHS.home
                  ? "text-foreground"
                  : "text-muted-foreground"
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
              Soluciones {servicesOpen ? "−" : "+"}
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
                  {SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={onClose}
                      className={`text-sm transition-colors ${
                        location.pathname === service.path
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
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