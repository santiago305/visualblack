import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";

const FooterBrand = () => {
  return (
    <div className="space-y-2">
      <Link
        to={PATHS.home}
        className="inline-block font-heading text-xl font-bold tracking-tight"
      >
        visual<span className="text-muted-foreground">black</span>
      </Link>

      <p className="max-w-70 text-sm leading-relaxed text-muted-foreground">
        Marketing digital y desarrollo web. Tu aliado integral para el mundo
        digital.
      </p>
    </div>
  );
};

export default FooterBrand;