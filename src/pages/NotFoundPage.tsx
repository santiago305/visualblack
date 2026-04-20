import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { PATHS } from "@/routes/paths";

export function NotFoundPage() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-[60vh] h-full items-center overflow-hidden py-10 sm:py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="container-vb flex justify-center">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <div className="relative">
            <h1 className="font-heading text-[72px] font-bold leading-none tracking-tight text-foreground/90 xs:text-[84px] sm:text-[110px] md:text-[140px] lg:text-[170px]">
              404
            </h1>
            <div className="absolute inset-0 -z-10 bg-foreground/10 opacity-30 blur-2xl" />
          </div>

          <h2 className="mt-4 text-balance font-heading text-2xl font-semibold sm:mt-5 sm:text-3xl md:text-4xl">
            Pagina no encontrada
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            La ruta que estas intentando visitar no existe, fue movida o no esta
            disponible en este momento.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center">
            <Link
              to={PATHS.home}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <Link
              to={PATHS.contact}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ir a contacto
            </Link>
          </div>

          <p className="mt-6 break-all text-[11px] text-muted-foreground/70 sm:text-xs">
            Ruta: {location.pathname}
          </p>
        </div>
      </div>
    </section>
  );
}
