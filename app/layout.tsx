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
  metadataBase: new URL("https://resume.d3h1.com"),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
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
