import {
  Cpu,
  type LucideIcon,
  Power,
  RefreshCw,
  RobotArm,
  ScanEye,
  Workflow,
} from "lucide-react";
import content from "@/content/de.json";
import type { Service } from "@/types/service";

type ServiceKey = keyof typeof content.services.items;

// Icons per service, in display order; the texts live in content/de.json under the same keys
const SERVICE_ICONS: Record<ServiceKey, LucideIcon> = {
  tiaPortal: Cpu,
  programArchitecture: Workflow,
  retrofit: RefreshCw,
  visionSystems: ScanEye,
  robots: RobotArm,
  commissioning: Power,
};

export const SERVICES: Service[] = (
  Object.keys(SERVICE_ICONS) as ServiceKey[]
).map((key) => ({
  icon: SERVICE_ICONS[key],
  ...content.services.items[key],
}));
