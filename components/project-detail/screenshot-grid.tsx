import Image from "next/image";
import type { Screenshot } from "@/types/resume";

export default function ScreenshotGrid({ screenshots }: { screenshots: Screenshot[] }) {
  if (screenshots.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <li key={shot.src} className="flex flex-col gap-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
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
