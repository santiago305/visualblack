import { Link } from "react-router-dom";

type Item = {
  label: string;
  path: string;
};

type Props = {
  title: string;
  items: Item[];
};

const FooterLinksSection = ({ title, items }: Props) => {
  return (
    <div>
      <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksSection;