import type { Service } from "@/features/services/types/service.types";

export const services: Service[] = [
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    shortDescription:
      "Impulsamos tu marca con una estrategia digital clara, pensada para atraer clientes y convertir atención en oportunidades reales.",
    description:
      "Diseñamos una estrategia digital alineada a tus objetivos comerciales para mejorar tu visibilidad, fortalecer tu presencia online y transformar el tráfico en resultados medibles.",
    highlight:
      "Una estrategia bien ejecutada no solo te hace ver mejor, también te ayuda a vender con más claridad y consistencia.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Diagnóstico inicial de marca y presencia digital",
      "Estrategia de comunicación y posicionamiento",
      "Plan de acción por canales y objetivos",
      "Seguimiento de indicadores clave de rendimiento",
    ],
    benefits: [
      "Mayor visibilidad para tu negocio",
      "Mejor posicionamiento en entornos digitales",
      "Decisiones basadas en datos y objetivos claros",
    ],
    idealFor: [
      "Empresas que quieren crecer su presencia online",
      "Marcas que necesitan una estrategia más ordenada",
      "Negocios que buscan generar oportunidades reales",
    ],
  },
  {
    slug: "campanas-publicitarias",
    title: "Campañas Publicitarias",
    shortDescription:
      "Creamos campañas enfocadas en generar tráfico, leads y ventas con una ejecución optimizada y orientada a resultados.",
    description:
      "Planificamos, lanzamos y optimizamos campañas publicitarias digitales para que tu inversión tenga dirección, control y resultados concretos desde el primer momento.",
    highlight:
      "No se trata solo de anunciar, sino de invertir mejor para llegar a las personas correctas en el momento correcto.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Definición de objetivos y segmentación de audiencias",
      "Creatividades y copies para anuncios",
      "Configuración de campañas y eventos de conversión",
      "Optimización continua según rendimiento",
    ],
    benefits: [
      "Mayor retorno sobre la inversión publicitaria",
      "Segmentación más precisa",
      "Escalabilidad según resultados reales",
    ],
    idealFor: [
      "Negocios que quieren captar clientes más rápido",
      "Marcas que ya invierten en pauta y quieren mejorar",
      "Empresas que buscan campañas con enfoque comercial",
    ],
  },
  {
    slug: "gestion-redes",
    title: "Gestión de Redes Sociales",
    shortDescription:
      "Construimos una presencia digital constante y coherente para que tu marca conecte, destaque y permanezca activa.",
    description:
      "Gestionamos tus redes sociales con una línea visual y editorial clara, orientada a reforzar tu marca, generar interacción y mantener una comunicación sostenida con tu audiencia.",
    highlight:
      "Una marca que se comunica con claridad y constancia transmite más confianza, más valor y más recordación.",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Definición de tono, estilo y pilares de contenido",
      "Calendario editorial y planificación mensual",
      "Diseño, publicación y monitoreo de contenidos",
      "Reporte de crecimiento, alcance e interacción",
    ],
    benefits: [
      "Presencia digital más profesional y consistente",
      "Mejor conexión con tu audiencia",
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
      "Diseñamos y desarrollamos sitios web modernos, rápidos y pensados para presentar tu marca con impacto y claridad.",
    description:
      "Creamos experiencias web alineadas a tu identidad y a tus objetivos comerciales, priorizando estructura, diseño, velocidad y una navegación que acompañe mejor la decisión del cliente.",
    highlight:
      "Tu sitio web no debe ser solo una vitrina: debe convertirse en una herramienta que inspire confianza y apoye tu crecimiento.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    deliverables: [
      "Estructura y arquitectura de contenidos",
      "Diseño visual responsive y alineado a marca",
      "Desarrollo y publicación del sitio web",
      "Base técnica preparada para crecer y escalar",
    ],
    benefits: [
      "Mejor presentación digital de tu negocio",
      "Experiencia más clara para el usuario",
      "Base técnica sólida y ordenada",
    ],
    idealFor: [
      "Empresas que necesitan una web más profesional",
      "Marcas que quieren vender mejor su propuesta",
      "Negocios que buscan una base digital más sólida",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}