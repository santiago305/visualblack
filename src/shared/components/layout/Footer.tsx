import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-vb py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Link to="/" className="font-heading text-xl font-bold tracking-tight">
              visual<span className="text-muted-foreground">black</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-[280px]">
              Marketing digital y desarrollo web. Tu aliado integral para el mundo digital.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3">Servicios</h4>
            <div className="flex flex-col gap-1.5">
              <Link to="/servicios/marketing-digital" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Marketing Digital</Link>
              <Link to="/servicios/campanas-publicitarias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Campañas Publicitarias</Link>
              <Link to="/servicios/gestion-redes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gestión de Redes</Link>
              <Link to="/servicios/desarrollo-web" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Desarrollo Web</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3">Contacto</h4>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span>info@visualblack.com</span>
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex flex-col gap-1.5 mt-4">
              <Link to="/portafolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portafolio</Link>
              <Link to="/nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Nosotros</Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</Link>
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
