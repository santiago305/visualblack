import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS, PATHS } from "@/routes/paths";
import NavbarLink from "./NavbarLink";
import ServicesDropdown from "./ServicesDropdown";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container-vb flex h-12 items-center justify-between">
        <Link
          to={PATHS.home}
          className="inline-block"
        >
          <img src="/logo.svg" alt="visualblack" className="h-7 w-auto" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavbarLink
            to={PATHS.home}
            label="Inicio"
            active={location.pathname === PATHS.home}
          />

          <ServicesDropdown />

          {NAV_LINKS.slice(1).map((link) => (
            <NavbarLink
              key={link.path}
              to={link.path}
              label={link.name}
              active={location.pathname === link.path}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-0.5 p-2 md:hidden"
          aria-label="Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block h-px w-4 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-4 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block h-px w-4 bg-foreground"
          />
        </button>
      </div>

      <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
