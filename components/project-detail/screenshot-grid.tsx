import Image from "next/image";
import type { Screenshot } from "@/lib/types/resume";

export default function ScreenshotGrid({
  screenshots,
  eager = false,
}: {
  screenshots: Screenshot[];
  eager?: boolean;
}) {
  if (screenshots.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <li key={shot.src} className="flex flex-col gap-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              loading={eager ? "eager" : "lazy"}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          {shot.caption ? (
            <p className="text-sm text-gray-700 dark:text-gray-400">{shot.caption}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
