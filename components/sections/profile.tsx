import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, FileText, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import GithubIcon from "@/components/icons/github-icon";
import type { Profile as ProfileType } from "@/lib/types/resume";

export default function Profile({ profile }: { profile: ProfileType }) {

  return (
    <div className="w-full flex flex-col gap-4">
      <Badge variant="accent">{profile.title}</Badge>

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:items-start">
        <div className="flex min-w-0 flex-col gap-2">
          <h1 className="text-3xl font-bold">
            {profile.name}
          </h1>

          <dl className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
            <dt className="flex items-center gap-2 whitespace-nowrap text-gray-700 dark:text-gray-400">
              <Mail size={16} className="shrink-0" aria-hidden="true" />
              <span>이메일</span>
            </dt>
            <dd className="min-w-0 break-all">
              <Link href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </Link>
            </dd>

            <dt className="flex items-center gap-2 whitespace-nowrap text-gray-700 dark:text-gray-400">
              <GithubIcon className="shrink-0" />
              <span>깃허브</span>
            </dt>
            <dd className="min-w-0 break-all text-purple-600 hover:underline dark:text-purple-300">
              <Link href={profile.github} target="_blank" rel="noopener noreferrer">
                <span>{profile.github}</span>
                <ArrowUpRight size={12} className="stroke-purple-300 inline-block ml-1" aria-hidden="true" />
              </Link>
            </dd>

            <dt className="flex items-center gap-2 whitespace-nowrap text-gray-700 dark:text-gray-400">
              <Globe size={16} className="shrink-0" aria-hidden="true" />
              <span>블로그</span>
            </dt>
            <dd className="min-w-0 break-all text-purple-600 hover:underline dark:text-purple-300">
              <Link href={profile.blog} target="_blank" rel="noopener noreferrer">
                <span>{profile.blog}</span>
                <ArrowUpRight size={12} className="stroke-purple-300 inline-block ml-1" aria-hidden="true" />
              </Link>
            </dd>

            <dt className="flex items-center gap-2 whitespace-nowrap text-gray-700 dark:text-gray-400">
              <FileText size={16} className="shrink-0" aria-hidden="true" />
              <span>이력서</span>
            </dt>
            <dd className="min-w-0 break-all text-purple-600 hover:underline dark:text-purple-300">
              <Link href={profile.website} target="_blank" rel="noopener noreferrer">
                <span>{profile.website}</span>
                <ArrowUpRight size={12} className="stroke-purple-300 inline-block ml-1" aria-hidden="true" />
              </Link>
            </dd>
          </dl>
        </div>

        <Image
          src="/profile.jpg"
          alt="프로필 사진"
          width={120}
          height={160}
          className="shrink-0 object-cover"
          preload
        />
      </div>
    </div>
  );
}
