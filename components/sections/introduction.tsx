export default function Introduction({ introduction }: { introduction: string }) {
  return (
    <section className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">자기소개</h2>
      <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
        {introduction}
      </p>
    </section>
  );
}
