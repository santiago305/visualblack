import { ContactForm } from "@/features/contact";
import { PageSeo, StructuredData } from "@/components/seo";
import { contactPageSeo, createContactBreadcrumbSchema } from "@/lib/seo";
import SectionHeading from "@/shared/components/SectionHeading";

export function ContactPage() {
  return (
    <>
      <PageSeo metadata={contactPageSeo} />
      <StructuredData id="contact-breadcrumb" data={createContactBreadcrumbSchema()} />
      <section className="py-16">
        <div className="container-vb">
          <SectionHeading
            label="Contacto"
            title="Hablemos"
            description="Tienes un proyecto en mente? Nos encantaria escucharte."
            level="h1"
          />

          <ContactForm />
        </div>
      </section>
    </>
  );
}
