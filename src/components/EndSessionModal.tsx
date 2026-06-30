import { GoClock } from "react-icons/go";
import { formatTime } from "../lib/utils";
import { mockIncidents } from "../data/mockIncidents";
import { IncidentCard } from "./IncidentCard";

interface Props {
  recordingSeconds: number;
  handleCancel: () => void;
}

export const EndSessionModal = ({ recordingSeconds, handleCancel }: Props) => {
  return (
    <div
      className="bg-neutral-900/40 rounded-3xl absolute inset-0"
      onClick={handleCancel}
    >
      <div
        className="bg-white absolute rounded-3xl p-3 top-10 bottom-10 right-3 left-3 z-10 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Fin de la Sesión</h3>
          <div className="flex items-center gap-1.5 text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full text-xs font-medium">
            <GoClock />
            <span>{formatTime(recordingSeconds)}</span>
          </div>
        </div>
        <p className="text-neutral-600 text-sm mb-4 mt-2">
          ¿Hubo algún incidente durante la recolección de datos?
        </p>
        <div className="flex flex-col gap-2 mb-4">
          {/* TODO: IncidentCard */}
          {mockIncidents.map((incident) => (
            <IncidentCard incident={incident} key={incident.id} />
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <button
            onClick={handleCancel}
            className="px-5 py-3 rounded-xl font-bold text-sm text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            // TODO:  onClick={handleEndSession}
            className="flex-1 bg-neutral-900 hover:bg-black text-white py-3 rounded-xl font-bold text-sm transition-colors active:scale-[0.98]"
          >
            Guardar Registro
          </button>
        </div>
      </div>
    </div>
  );
};
