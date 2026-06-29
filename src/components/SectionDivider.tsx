import { useInView } from "@/hooks/useInView";

interface SectionDividerProps {
  title: string;
  isGold?: boolean;
}

export function SectionDivider({ title, isGold = false }: SectionDividerProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative my-10 flex items-center justify-center"
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        className="absolute inset-x-0 h-px"
        style={{
          background: isGold
            ? "linear-gradient(90deg, transparent 0%, var(--border-gold) 20%, var(--border-gold) 80%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, var(--border-subtle) 20%, var(--border-subtle) 80%, transparent 100%)",
        }}
      />
      <span
        className="relative font-inter font-medium uppercase px-4"
        style={{
          fontSize: "10px",
          letterSpacing: "0.08em",
          color: isGold ? "var(--gold)" : "var(--text-secondary)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        {title}
      </span>
    </div>
  );
}
