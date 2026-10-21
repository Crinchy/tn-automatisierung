import type { MigrationStep } from "@/types/migration-step";

export const MIGRATION_STEPS: MigrationStep[] = [
  { from: "S7-300 / Step7 classic", to: "S7-1500 / TIA" },
  { from: "AWL / unstrukturiert", to: "SCL / FUP strukturiert" },
  { from: "WinCC flexible", to: "WinCC Unified" },
  { from: "Profibus DP", to: "Profinet IO" },
  { from: "Klassische F-CPU", to: "F-CPU 1500" },
];
