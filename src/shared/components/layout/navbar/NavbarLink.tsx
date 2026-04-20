import { Link } from "react-router-dom";

type Props = {
  to: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
};

const NavbarLink = ({ to, label, active, onClick, className = "" }: Props) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex h-12 items-center text-sm font-medium transition-colors hover:text-foreground ${
        active ? "text-foreground" : "text-muted-foreground"
      } ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;