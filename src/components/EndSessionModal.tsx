import { GoClock } from "react-icons/go";
import { formatTime } from "../lib/utils";

interface Props {
  recordingSeconds: number;
  handleCloseModal: () => void;
}

export const EndSessionModal = ({
  recordingSeconds,
  handleCloseModal,
}: Props) => {
  return (
    <div
      className="bg-neutral-900/40 rounded-3xl absolute inset-0"
      onClick={handleCloseModal}
    >
      <div
        className="bg-white absolute rounded-3xl p-4 top-10 bottom-10 right-3 left-3 z-10"
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
        {/* TODO: IncidentCard */}

        <div className="mt-auto flex gap-2">
          <button
            onClick={handleCloseModal}
            className="px-5 py-3 rounded-xl font-bold text-sm text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            // onClick={handleEndSession}
            className="flex-1 bg-neutral-900 hover:bg-black text-white py-3 rounded-xl font-bold text-sm transition-colors active:scale-[0.98]"
          >
            Guardar Registro
          </button>
        </div>
      </div>
    </div>
  );
};
