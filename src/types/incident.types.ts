import type { IconType } from "react-icons";

export type Incident = {
  id: number;
  incident: string;
  description: string;
  icon: IconType;
  incidentStatus: string;
};
