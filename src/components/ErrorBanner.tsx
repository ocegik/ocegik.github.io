import { Warning } from "@/components/icons";

interface ErrorBannerProps {
  message: string;
}

export function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <div
      className="w-full py-3 px-6 flex items-center justify-center gap-2"
      style={{
        backgroundColor: "rgba(231, 76, 60, 0.08)",
        borderBottom: "1px solid rgba(231, 76, 60, 0.15)",
      }}
    >
      <Warning className="w-4 h-4 flex-shrink-0" color="var(--incorrect)" />
      <span
        className="font-inter"
        style={{
          fontSize: "13px",
          color: "var(--incorrect)",
        }}
      >
        {message}
      </span>
    </div>
  );
}
