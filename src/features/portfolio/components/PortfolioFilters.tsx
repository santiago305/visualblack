type Props = {
  activeCategory: string;
  categories: readonly string[];
  onSelect: (category: string) => void;
};

export function PortfolioFilters({
  activeCategory,
  categories,
  onSelect,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === category
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
