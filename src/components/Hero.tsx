import { Trophy } from "@/components/icons";

export function Hero() {
  return (
    <section
      className="w-full py-16 pb-10 animate-slide-up"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(200, 150, 62, 0.06) 0%, transparent 60%)",
      }}
    >
      <div
        className="mx-auto px-6 text-center"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <Trophy className="w-8 h-8 mx-auto mb-4" color="var(--gold)" />

        <h1
          className="font-playfair font-bold"
          style={{
            fontSize: "42px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
          }}
        >
          FIFA WORLD CUP 2026
        </h1>

        <h2
          className="font-playfair font-semibold mt-3"
          style={{
            fontSize: "28px",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: "var(--gold)",
          }}
        >
          Prediction Tracker
        </h2>

        <p
          className="font-inter mt-2"
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
          }}
        >
          Mohit &middot; Pandu &middot; Tarun
        </p>

        {/* Divider */}
        <div
          className="mx-auto my-4"
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "var(--gold)",
            borderRadius: "1px",
          }}
        />

        <p
          className="font-inter uppercase"
          style={{
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}
        >
          Knockout Stage Bracket Challenge
        </p>

        <p
          className="font-inter font-semibold mt-2"
          style={{
            fontSize: "18px",
            color: "var(--text-secondary)",
          }}
        >
          29 June — 20 July 2026
        </p>
      </div>
    </section>
  );
}
