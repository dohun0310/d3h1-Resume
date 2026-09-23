import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export default function BackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("text-sm text-purple-600 hover:underline dark:text-purple-300", className)}
    >
      ← 메인으로 돌아가기
    </Link>
  );
}
