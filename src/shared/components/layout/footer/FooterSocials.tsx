import {
  FaFacebookF,
  FaInstagram,
  // FaLinkedinIn,
  // FaTiktok,
  // FaXTwitter,
} from "react-icons/fa6";

type SocialItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const socials: SocialItem[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/visualblack01",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/visualblack01/",
    icon: <FaInstagram />,
  },
  // {
  //   name: "X",
  //   href: "https://x.com/",
  //   icon: <FaXTwitter />,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/",
  //   icon: <FaLinkedinIn />,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://www.tiktok.com/",
  //   icon: <FaTiktok />,
  // },
];

const FooterSocials = () => {
  return (
    <div>
      <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">
        Redes
      </h4>

      <div className="flex flex-wrap items-center gap-2">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
          >
            <span className="text-sm">{social.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
