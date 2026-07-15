import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-bold">프로젝트를 찾을 수 없습니다</h1>
        <p className="text-gray-500 dark:text-gray-400">
          요청한 프로젝트가 존재하지 않거나 삭제되었습니다.
        </p>
        <Link
          href="/"
          className="text-sm text-purple-600 hover:underline dark:text-purple-300"
        >
          ← 메인으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
