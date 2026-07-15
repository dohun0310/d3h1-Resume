import type { Metadata } from "next";
import localFont from "next/font/local";
import { resume } from "@/lib/data/resume";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

const { profile } = resume;

export const metadata: Metadata = {
  // TODO: 배포 도메인이 정해지면 실제 URL로 교체
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.introduction,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.introduction,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.introduction,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
