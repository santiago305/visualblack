import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PATHS, SERVICE_LINKS } from "@/routes/paths";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith(PATHS.services);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container-vb flex items-center justify-between h-12">
        <Link to={PATHS.home} className="font-heading text-xl font-bold tracking-tight">
          visual<span className="text-muted-foreground">black</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to={PATHS.home}
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === PATHS.home ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span
              className={`text-sm font-medium transition-colors hover:text-foreground cursor-default ${
                isServiceActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Soluciones
            </span>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-background border border-border rounded-sm shadow-lg min-w-55 py-1">
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-secondary ${
                          location.pathname === s.path ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        <span className="text-base">{s.icon}</span>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-0.75 p-2"
          aria-label="Menu"
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block w-4 h-px bg-foreground" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-px bg-foreground" />
          <motion.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block w-4 h-px bg-foreground" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container-vb py-4 flex flex-col gap-3">
              <Link to={PATHS.home} onClick={() => setIsOpen(false)} className={`text-sm font-medium transition-colors ${location.pathname === PATHS.home ? "text-foreground" : "text-muted-foreground"}`}>
                Inicio
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`text-sm font-medium text-left transition-colors ${isServiceActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                Soluciones {mobileServicesOpen ? "−" : "+"}
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-3 flex flex-col gap-2"
                  >
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm transition-colors ${location.pathname === s.path ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {s.icon} {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
