export function Legend() {
  return (
    <div className="flex justify-center my-10">
      <div
        className="inline-flex items-center gap-6 px-5 py-2.5 rounded-full"
        style={{
          backgroundColor: "var(--bg-card)",
        }}
      >
        <LegendItem color="var(--correct)" label="Correct" />
        <LegendItem color="var(--incorrect)" label="Incorrect" />
        <LegendItem color="var(--pending)" label="Pending" />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span
        className="font-inter"
        style={{
          fontSize: "12px",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
