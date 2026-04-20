import { ContactForm } from "@/features/contact";
import SectionHeading from "@/shared/components/SectionHeading";

export function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-vb">
        <SectionHeading
          label="Contacto"
          title="Hablemos"
          description="Tienes un proyecto en mente? Nos encantaria escucharte."
        />

        <ContactForm />
      </div>
    </section>
  );
}
