import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";
import logo from "@/assets/logo.svg";

const FooterBrand = () => {
  return (
    <div className="space-y-2">
      <Link
        to={PATHS.home}
        className="inline-block"
      >
        <img src={logo} alt="visualblack" className="h-8 w-auto" />
      </Link>

      <p className="max-w-70 text-sm leading-relaxed text-muted-foreground">
        Marketing digital y desarrollo web. Tu aliado integral para el mundo
        digital.
      </p>
    </div>
  );
};

export default FooterBrand;
