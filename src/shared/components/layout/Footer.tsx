import { Link } from "react-router-dom";
import { NAV_LINKS, PATHS, SERVICE_LINKS } from "@/routes/paths";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-vb py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Link to={PATHS.home} className="font-heading text-xl font-bold tracking-tight">
              visual<span className="text-muted-foreground">black</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-70">
              Marketing digital y desarrollo web. Tu aliado integral para el mundo digital.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3">Servicios</h4>
            <div className="flex flex-col gap-1.5">
              {SERVICE_LINKS.map((service) => (
                <Link key={service.path} to={service.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3">Contacto</h4>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span>info@visualblack.com</span>
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex flex-col gap-1.5 mt-4">
              {NAV_LINKS.slice(1).map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} visualblack. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
