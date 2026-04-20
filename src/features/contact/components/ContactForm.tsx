import { useState } from "react";
import { Send } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_STATE: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function buildContactMessage({ name, email, phone, message }: FormValues) {
  return `Hola, mi nombre es ${name}.

Estoy interesado en sus servicios y me gustaría conocer más detalles.

Pueden contactarme al correo ${email} o al número ${phone}.

Les comparto un poco más de información:
${message || "Me gustaría recibir más información sobre sus servicios."}

Quedo atento a su respuesta.`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormValues>(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validación básica
    if (!form.name || !form.email || !form.phone) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    const message = buildContactMessage(form);

    const whatsappUrl = `https://wa.me/51939780945?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-4 rounded-xl border border-border bg-background p-6"
    >
      <h2 className="font-heading text-2xl font-semibold">
        Contáctanos
      </h2>

      {/* Nombre */}
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
      />

      {/* Correo */}
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
      />

      {/* Teléfono */}
      <input
        type="tel"
        name="phone"
        placeholder="Tu teléfono"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
      />

      {/* Mensaje */}
      <textarea
        name="message"
        placeholder="Cuéntanos un poco más sobre lo que necesitas (opcional)"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full resize-none rounded-md border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
      />

      {/* Botón */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <Send className="h-4 w-4" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}