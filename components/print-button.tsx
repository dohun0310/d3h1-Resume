"use client";

import Button from "@/components/ui/button";

export default function PrintButton() {
  return (
    <Button
      type="button"
      onClick={() => window.print()}
      aria-label="이력서를 PDF로 저장"
      className="print-hidden fixed right-4 top-4 z-50 shadow-lg"
    >
      PDF 저장
    </Button>
  );
}
