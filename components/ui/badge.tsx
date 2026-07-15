import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "neutral" | "accent";

const badgeVariants: Record<BadgeVariant, string> = {
  neutral: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
  accent: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
};

export default function Badge({
  variant = "neutral",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-4 py-1 text-sm",
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
