import { services } from "@/data/services";
import { NAV_LINKS, PATHS } from "@/routes/paths";

import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterLinksSection from "./FooterLinksSection";

const Footer = () => {
  const serviceItems = services.map((service) => ({
    label: service.title,
    path: PATHS.serviceDetail(service.slug),
  }));

  const navItems = NAV_LINKS.slice(1).map((link) => ({
    label: link.name,
    path: link.path,
  }));

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-vb py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinksSection title="Servicios" items={serviceItems} />
          <FooterLinksSection title="Navegacion" items={navItems} />
          <FooterContact />
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} visualblack. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
