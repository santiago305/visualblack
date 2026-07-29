import type { Service } from "@/features/services/types/service.types";

export const services: Service[] = [
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    shortDescription:
      "Impulsamos tu marca con una estrategia digital clara, pensada para atraer clientes y convertir atencion en oportunidades reales.",
    description:
      "Disenamos una estrategia digital alineada a tus objetivos comerciales para mejorar tu visibilidad, fortalecer tu presencia online y transformar el trafico en resultados medibles.",
    highlight:
      "Una estrategia bien ejecutada no solo te hace ver mejor, tambien te ayuda a vender con mas claridad y consistencia.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Diagnostico inicial de marca y presencia digital",
      "Estrategia de comunicacion y posicionamiento",
      "Plan de accion por canales y objetivos",
      "Seguimiento de indicadores clave de rendimiento",
    ],
    benefits: [
      "Mayor visibilidad para tu negocio",
      "Mejor posicionamiento en entornos digitales",
      "Decisiones basadas en datos y objetivos claros",
    ],
    idealFor: [
      "Empresas que quieren crecer su presencia online",
      "Marcas que necesitan una estrategia mas ordenada",
      "Negocios que buscan generar oportunidades reales",
    ],
  },
  {
    slug: "campañas-publicitarias",
    title: "Campañas Publicitarias",
    shortDescription:
      "Creamos campañas enfocadas en generar trafico, leads y ventas con una ejecucion optimizada y orientada a resultados.",
    description:
      "Planificamos, lanzamos y optimizamos campañas publicitarias digitales para que tu inversion tenga direccion, control y resultados concretos desde el primer momento.",
    highlight:
      "No se trata solo de anunciar, sino de invertir mejor para llegar a las personas correctas en el momento correcto.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Definicion de objetivos y segmentacion de audiencias",
      "Creatividades y copies para anuncios",
      "Configuracion de campañas y eventos de conversion",
      "Optimizacion continua segun rendimiento",
    ],
    benefits: [
      "Mayor retorno sobre la inversion publicitaria",
      "Segmentacion mas precisa",
      "Escalabilidad segun resultados reales",
    ],
    idealFor: [
      "Negocios que quieren captar clientes mas rapido",
      "Marcas que ya invierten en pauta y quieren mejorar",
      "Empresas que buscan campañas con enfoque comercial",
    ],
  },
  {
    slug: "gestion-redes",
    title: "Gestion de Redes Sociales",
    shortDescription:
      "Construimos una presencia digital constante y coherente para que tu marca conecte, destaque y permanezca activa.",
    description:
      "Gestionamos tus redes sociales con una linea visual y editorial clara, orientada a reforzar tu marca, generar interaccion y mantener una comunicacion sostenida con tu audiencia.",
    highlight:
      "Una marca que se comunica con claridad y constancia transmite mas confianza, mas valor y mas recordacion.",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Definicion de tono, estilo y pilares de contenido",
      "Calendario editorial y planificacion mensual",
      "Diseño, publicacion y monitoreo de contenidos",
      "Reporte de crecimiento, alcance e interaccion",
    ],
    benefits: [
      "Presencia digital mas profesional y consistente",
      "Mejor conexion con tu audiencia",
      "Mayor claridad en el mensaje de tu marca",
    ],
    idealFor: [
      "Marcas que quieren verse activas y profesionales",
      "Empresas que necesitan constancia en redes",
      "Negocios que quieren fortalecer comunidad y confianza",
    ],
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    shortDescription:
      "Disenamos y desarrollamos sitios web modernos, rapidos y pensados para presentar tu marca con impacto y claridad.",
    description:
      "Creamos experiencias web alineadas a tu identidad y a tus objetivos comerciales, priorizando estructura, diseño, velocidad y una navegacion que acompane mejor la decision del cliente.",
    highlight:
      "Tu sitio web no debe ser solo una vitrina: debe convertirse en una herramienta que inspire confianza y apoye tu crecimiento.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Estructura y arquitectura de contenidos",
      "Diseño visual responsive y alineado a marca",
      "Desarrollo y publicacion del sitio web",
      "Base tecnica preparada para crecer y escalar",
    ],
    benefits: [
      "Mejor presentacion digital de tu negocio",
      "Experiencia mas clara para el usuario",
      "Base tecnica solida y ordenada",
    ],
    idealFor: [
      "Empresas que necesitan una web mas profesional",
      "Marcas que quieren vender mejor su propuesta",
      "Negocios que buscan una base digital mas solida",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
