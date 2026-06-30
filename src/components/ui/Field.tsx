import React from "react";

export default function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
        {label}
      </div>
      {children}
      {error && <p className="mt-1.5 text-xs text-primary">{error}</p>}
    </div>
  );
}
