import { BsCheck2Circle } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosBatteryDead } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import type { Incident } from "../types/incident.types";

export const mockIncidents: Incident[] = [
  {
    id: 1,
    incident: "Todo OK",
    description: "Ningún problema reportado",
    icon: BsCheck2Circle,
    incidentStatus: "ok",
  },
  {
    id: 2,
    incident: "Fallo de cámara",
    description: "Problemas de imagen o sensor",
    icon: IoCameraOutline,
    incidentStatus: "camera_failure",
  },
  {
    id: 3,
    incident: "Batería baja",
    description: "Equipo apagado antes de tiempo",
    icon: IoIosBatteryDead,
    incidentStatus: "battery_low",
  },
  {
    id: 4,
    incident: "Otro incidente",
    description: "Clima, interrupciones, etc.",
    icon: IoWarningOutline,
    incidentStatus: "other",
  },
];
