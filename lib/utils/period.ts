import type { ProjectPeriod } from "@/lib/types/resume";

export function formatPeriod(period: ProjectPeriod) {
  if (period.end) return `${period.start} - ${period.end}`;
  if (period.ongoing) return `${period.start} - 진행 중`;
  return period.start;
}

export function formatPeriodAndRole(period: ProjectPeriod, role: string) {
  return `${formatPeriod(period)} · ${role}`;
}
