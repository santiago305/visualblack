import FooterSocials from "./FooterSocials";

const FooterContact = () => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">
          Contacto
        </h4>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a
            href="mailto:info@visualblack.es"
            className="transition-colors hover:text-foreground"
          >
            info@visualblack.es
          </a>

          <a
            href="tel:+51939780945"
            className="transition-colors hover:text-foreground"
          >
            +51 939 780 945
          </a>
        </div>
      </div>

      <FooterSocials />
    </div>
  );
};

export default FooterContact;