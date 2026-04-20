import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

import { getServiceBySlug } from "@/data/services";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const WHATSAPP_NUMBER = "51939780945";

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceSlug = searchParams.get("service");
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  const handleChange =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const serviceContext = selectedService
      ? `Vengo interesado en el servicio de ${selectedService.title}.`
      : "Quiero conocer mas sobre sus servicios.";

    const userMessage =
      formData.message.trim() ||
      "Me gustaria recibir mas informacion sobre sus servicios.";

    const message = `
Hola, mi nombre es ${formData.name}.

${serviceContext}

Pueden contactarme al correo ${formData.email} o al numero ${formData.phone}.

Les comparto un poco mas de informacion:
${userMessage}

Quedo atento a su respuesta.
    `;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData(initialFormState);
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-125 space-y-3"
    >
      {selectedService && (
        <div className="rounded-sm border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground">
          Servicio de interes: <span className="font-medium text-foreground">{selectedService.title}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-xs font-medium">
          Nombre
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange("name")}
          className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm transition-colors focus:border-foreground/40 focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-xs font-medium">
          Correo electronico
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange("email")}
          className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm transition-colors focus:border-foreground/40 focus:outline-none"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-xs font-medium">
          Telefono
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange("phone")}
          className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm transition-colors focus:border-foreground/40 focus:outline-none"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-xs font-medium">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange("message")}
          className="w-full resize-none rounded-sm border border-border bg-background px-3 py-2 text-sm transition-colors focus:border-foreground/40 focus:outline-none"
          placeholder="Cuentanos sobre tu proyecto..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </motion.form>
  );
}
