import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2" | "h3";
}

const SectionHeading = ({
  label,
  title,
  description,
  align = "center",
  level = "h2",
}: SectionHeadingProps) => {
  const HeadingTag = level;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-8 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          {label}
        </span>
      )}
      <HeadingTag className="mt-1 font-heading text-3xl font-bold md:text-4xl">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-sm text-muted-foreground mt-2 max-w-125 mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
