import { PATHS } from "@/routes/paths";

import { buildMetadata } from "./metadata";

export const homePageSeo = buildMetadata({
  title: "Marketing digital y desarrollo web",
  description:
    "Visualblack crea estrategias digitales, campanas publicitarias, gestion de redes y desarrollo web para marcas que quieren crecer con claridad.",
  keywords: [
    "marketing digital colombia",
    "desarrollo web colombia",
    "agencia digital",
    "campanas publicitarias",
    "gestion de redes sociales",
    "visualblack",
  ],
  path: PATHS.home,
});

export const aboutPageSeo = buildMetadata({
  title: "Nosotros",
  description:
    "Conoce a visualblack, una agencia digital que combina estrategia, creatividad y tecnologia para impulsar negocios en el entorno digital.",
  keywords: [
    "nosotros visualblack",
    "agencia digital colombia",
    "equipo visualblack",
    "estrategia digital",
  ],
  path: PATHS.about,
});

export const contactPageSeo = buildMetadata({
  title: "Contacto",
  description:
    "Habla con visualblack sobre tu proximo proyecto de marketing digital, redes sociales, campanas o desarrollo web.",
  keywords: [
    "contacto visualblack",
    "agencia digital colombia contacto",
    "desarrollo web contacto",
    "marketing digital contacto",
  ],
  path: PATHS.contact,
});

export const notFoundPageSeo = buildMetadata({
  title: "Pagina no encontrada",
  description:
    "La pagina que buscas no esta disponible. Explora las soluciones y canales de contacto de visualblack.",
  keywords: ["visualblack", "pagina no encontrada"],
  path: null,
  robots: "noindex, nofollow",
});
