import { useState } from "react";
import { TfiPackage } from "react-icons/tfi";
import { FaStop } from "react-icons/fa";
import { EndSessionModal } from "./EndSessionModal";
import { SessionContainer } from "./shared/SessionContainer";
import { SessionHeader } from "./shared/SessionHeader";
import { cn, formatTime } from "../lib/utils";
import type { Kit } from "../types/kit.types";

interface Props {
  selectedKit: Kit | undefined;
  recordingSeconds: number;
}

export const ActiveSession = ({ selectedKit, recordingSeconds }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SessionContainer>
      <SessionHeader />
      <div className="p-6 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="inline-flex items-center gap-2 mx-auto rounded-full bg-neutral-100 px-4 py-2">
            <TfiPackage
              className={cn(
                "w-4 h-4 transition-colors duration-200",
                "text-neutral-600",
              )}
            />
            <p className="text-neutral-600 text-sm font-semibold">
              {selectedKit?.kit}
            </p>
          </div>
          <div className="border-8 border-red-100 bg-red-50 w-48 h-48 rounded-full flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 rounded-full h-2 w-2" />
              <p className="text-red-600 font-semibold">Grabando</p>
            </div>
            <p className="font-bold text-4xl">{formatTime(recordingSeconds)}</p>
          </div>
          <div className="mt-auto">
            <p className="text-neutral-500 mb-6 px-4 text-center">
              Mantén esta pantalla abierta durante tu recorrido. Presiona el
              botón al finalizar.
            </p>
            <button
              disabled={!selectedKit}
              className={cn(
                "w-full p-5 rounded-2xl flex justify-center items-center gap-2 text-xl font-bold transition duration-200 ease-out shadow-xl shadow-red-600/20",
                selectedKit
                  ? "cursor-pointer bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white"
                  : "cursor-not-allowed bg-neutral-200 text-neutral-400",
              )}
              onClick={() => setShowModal(true)}
            >
              <FaStop />
              DETENER SESIÓN
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <EndSessionModal
          recordingSeconds={recordingSeconds}
          handleCloseModal={() => setShowModal(false)}
        />
      )}
    </SessionContainer>
  );
};
