export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: string;
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    id: "marketing-digital",
    title: "Marketing Digital",
    shortDescription: "Estrategias integrales para posicionar tu marca en el mundo digital.",
    description: "Diseñamos y ejecutamos estrategias de marketing digital personalizadas que conectan tu marca con tu audiencia ideal. Desde SEO y SEM hasta content marketing y analytics, cubrimos todo el espectro digital para maximizar tu ROI.",
    benefits: [
      "Análisis de mercado y competencia",
      "Estrategia de contenido personalizada",
      "SEO técnico y on-page",
      "Google Ads y Meta Ads",
      "Analytics y reportes mensuales",
      "Optimización continua de campañas",
    ],
    icon: "📊",
    relatedProjects: ["campaign-360", "email-automation"],
  },
  {
    id: "campanas-publicitarias",
    title: "Campañas Publicitarias",
    shortDescription: "Campañas de alto impacto que generan resultados medibles.",
    description: "Creamos campañas publicitarias que capturan la atención y convierten. Utilizamos datos y creatividad para diseñar mensajes que resuenan con tu audiencia en cada punto de contacto.",
    benefits: [
      "Planificación estratégica de medios",
      "Creatividad basada en datos",
      "A/B testing continuo",
      "Retargeting inteligente",
      "Informes de rendimiento en tiempo real",
      "Optimización de presupuesto",
    ],
    icon: "🎯",
    relatedProjects: ["campaign-360", "branding-restaurant"],
  },
  {
    id: "gestion-redes",
    title: "Gestión de Redes Sociales",
    shortDescription: "Construimos y gestionamos tu presencia en redes con estrategia.",
    description: "Gestionamos tus redes sociales con una estrategia clara y contenido de calidad. Desde la planificación editorial hasta la interacción con tu comunidad, nos encargamos de todo para que tu marca brille.",
    benefits: [
      "Estrategia de contenido por plataforma",
      "Calendario editorial",
      "Creación de contenido visual",
      "Community management",
      "Análisis de métricas y crecimiento",
      "Gestión de crisis y reputación",
    ],
    icon: "📱",
    relatedProjects: ["social-media-growth"],
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    shortDescription: "Sitios y aplicaciones web que combinan diseño y tecnología.",
    description: "Desarrollamos experiencias web de alto rendimiento que combinan diseño excepcional con tecnología de vanguardia. Desde landing pages hasta plataformas complejas, cada proyecto está optimizado para convertir.",
    benefits: [
      "Diseño UI/UX personalizado",
      "Desarrollo responsive y accesible",
      "Optimización de rendimiento",
      "Integración con APIs y servicios",
      "CMS y paneles de administración",
      "Soporte y mantenimiento continuo",
    ],
    icon: "💻",
    relatedProjects: ["ecommerce-luxe", "fintech-dashboard", "portal-educativo"],
  },
  {
    id: "asesoria",
    title: "Asesoría Estratégica",
    shortDescription: "Consultoría experta para optimizar tu presencia digital.",
    description: "Ofrecemos asesoría especializada para empresas que buscan optimizar su estrategia digital. Analizamos tu situación actual, identificamos oportunidades y trazamos un roadmap claro hacia tus objetivos.",
    benefits: [
      "Auditoría digital completa",
      "Análisis de competencia",
      "Roadmap estratégico",
      "KPIs y métricas de éxito",
      "Capacitación de equipos",
      "Seguimiento y ajustes trimestrales",
    ],
    icon: "🧠",
    relatedProjects: ["branding-restaurant", "app-salud"],
  },
];
