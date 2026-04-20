import { Link, useParams } from "react-router-dom";

import { getServiceBySlug, services } from "@/data/services";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PATHS } from "@/routes/paths";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <section className="py-16 md:py-24">
      <div className="container-vb space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {service.eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="text-balance text-base text-muted-foreground md:text-lg">
            {service.shortDescription}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <article className="rounded-md border border-border bg-background p-6 md:p-8">
            <h2 className="font-heading text-2xl font-semibold">Que incluye</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              {service.description}
            </p>

            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold">Entregables</h3>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-md border border-border bg-secondary/40 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="rounded-md border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="font-heading text-2xl font-semibold">Beneficios</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-sm leading-7 text-muted-foreground md:text-base">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-border bg-background p-5">
              <h3 className="font-heading text-lg font-semibold">
                Conversemos sobre tu proyecto
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Si esta solucion encaja con lo que necesitas, podemos llevarla a una propuesta concreta.
              </p>
              <Link
                to={PATHS.contact}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Ir a contacto
              </Link>
            </div>
          </aside>
        </div>

        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold">Otras soluciones</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={PATHS.serviceDetail(item.slug)}
                className="rounded-md border border-border bg-background p-5 transition-colors hover:border-foreground/20"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
