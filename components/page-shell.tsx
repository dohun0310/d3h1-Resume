import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">{children}</div>;
}
