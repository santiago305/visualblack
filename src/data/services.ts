import type { Service } from "@/features/services/types/service.types";

export const services: Service[] = [
  {
    slug: "marketing-digital",
    icon: "📊",
    eyebrow: "Solucion 01",
    title: "Marketing Digital",
    shortDescription:
      "Estrategias para posicionar tu marca, atraer clientes y convertir trafico en oportunidades reales.",
    description:
      "Disenamos una estrategia digital alineada a tus objetivos comerciales, con foco en visibilidad, captacion y resultados medibles.",
    deliverables: [
      "Auditoria inicial y planteamiento estrategico",
      "Definicion de canales y plan de accion",
      "Calendario de contenidos y activaciones",
      "Seguimiento de metricas clave",
    ],
    benefits: [
      "Mayor alcance para tu marca",
      "Mejor posicionamiento en canales digitales",
      "Decisiones respaldadas por datos",
    ],
  },
  {
    slug: "campanas-publicitarias",
    icon: "📢",
    eyebrow: "Solucion 02",
    title: "Campanas Publicitarias",
    shortDescription:
      "Campanas enfocadas en generar trafico, leads y ventas con una ejecucion optimizada.",
    description:
      "Creamos, lanzamos y optimizamos campanas pagadas para que tu inversion publicitaria se traduzca en resultados concretos.",
    deliverables: [
      "Planeacion de audiencias y objetivos",
      "Creatividades y copies para anuncios",
      "Configuracion de campanas y conversiones",
      "Optimizacion continua del rendimiento",
    ],
    benefits: [
      "Mayor retorno de la inversion publicitaria",
      "Segmentacion mas precisa",
      "Escalabilidad segun el rendimiento",
    ],
  },
  {
    slug: "gestion-redes",
    icon: "📱",
    eyebrow: "Solucion 03",
    title: "Gestion de Redes Sociales",
    shortDescription:
      "Contenido, comunidad y consistencia para fortalecer la presencia de tu marca en redes.",
    description:
      "Gestionamos tus redes con una linea visual y editorial clara para construir comunidad, reforzar marca y mantener actividad sostenida.",
    deliverables: [
      "Definicion de tono y pilares de contenido",
      "Calendario editorial mensual",
      "Publicacion y seguimiento de contenidos",
      "Reportes de crecimiento e interaccion",
    ],
    benefits: [
      "Presencia digital mas consistente",
      "Mejor relacion con tu audiencia",
      "Mayor claridad en el mensaje de marca",
    ],
  },
  {
    slug: "desarrollo-web",
    icon: "💻",
    eyebrow: "Solucion 04",
    title: "Desarrollo Web",
    shortDescription:
      "Sitios web funcionales, rapidos y alineados con tu marca y tus objetivos comerciales.",
    description:
      "Desarrollamos experiencias web pensadas para presentar tu marca con claridad, facilitar la navegacion y apoyar tu proceso comercial.",
    deliverables: [
      "Arquitectura y estructura de paginas",
      "Diseno visual responsive",
      "Desarrollo y puesta en produccion",
      "Base preparada para escalar contenido",
    ],
    benefits: [
      "Mejor presentacion digital de tu negocio",
      "Experiencia mas clara para el usuario",
      "Base tecnica ordenada para crecer",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
