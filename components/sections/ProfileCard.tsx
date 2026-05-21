import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Quote, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { resume } from "@/data/resume";

export default function ProfileCard() {
  const { profile } = resume;

  return (
    <div className={cn("w-full flex flex-col gap-4")}>
      <div className="w-fit px-4 py-1 rounded-full bg-purple-100">
        <p className="text-sm text-purple-600">
          {profile.title}
        </p>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            {profile.name}
          </h1>

          <dl className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
            <dt className="flex items-center gap-2 text-gray-500">
              <Mail size={16} aria-hidden="true" />
              <span>이메일</span>
            </dt>
            <dd>
              <Link href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </Link>
            </dd>

            <dt className="flex items-center gap-2 text-gray-500">
              <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="translate(1 1) scale(0.91667)">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
                </g>
              </svg>
              <span>깃허브</span>
            </dt>
            <dd className="text-purple-600 hover:underline">
              <Link href={profile.github} target="_blank" rel="noopener noreferrer">
                <span>{profile.github}</span>
                <ArrowUpRight size={12} className="stroke-purple-300 inline-block ml-1" />
              </Link>
            </dd>

            <dt className="flex items-center gap-2 text-gray-500">
              <Globe size={16} aria-hidden="true" />
              <span>블로그</span>
            </dt>
            <dd className="text-purple-600 hover:underline">
              <Link href={profile.blog} target="_blank" rel="noopener noreferrer">
                <span>{profile.blog}</span>
                <ArrowUpRight size={12} className="stroke-purple-300 inline-block ml-1" />
              </Link>
            </dd>
          </dl>
        </div>

        <Image
          src="/profile.jpg"
          alt="프로필 사진"
          width={120}
          height={160}
          className="object-cover"
        />
      </div>

      <blockquote className="border-t border-gray-100">
        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <Quote size={16} />
          <span>자기소개</span>
        </div>

        <p className="mt-2">
          {profile.introduction}
        </p>
      </blockquote>
    </div>
  );
}
