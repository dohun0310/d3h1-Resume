export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700 dark:text-gray-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
