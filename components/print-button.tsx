"use client";

import Button from "@/components/ui/button";

export default function PrintButton() {
  return (
    <Button type="button" onClick={() => window.print()} className="shadow-lg">
      PDF 저장
    </Button>
  );
}
