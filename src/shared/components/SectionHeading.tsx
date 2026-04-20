import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => {
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
      <h2 className="font-heading text-3xl md:text-4xl font-bold mt-1">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground mt-2 max-w-125 mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
