import PageShell from "@/components/page-shell";
import BackLink from "@/components/back-link";

export default function NotFound() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-bold">프로젝트를 찾을 수 없습니다</h1>
        <p className="text-gray-700 dark:text-gray-400">
          요청한 프로젝트가 존재하지 않거나 삭제되었습니다.
        </p>
        <BackLink />
      </main>
    </PageShell>
  );
}
