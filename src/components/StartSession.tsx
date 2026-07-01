import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IoPlaySharp } from "react-icons/io5";
import { KitCard } from "./KitCard";
import { SessionHeader } from "./shared/SessionHeader";
import { SessionContainer } from "./shared/SessionContainer";
import { cn } from "../lib/utils";
import { getDevices } from "../api/devices";
import type { SessionStatus } from "../CompanionApp";
import type { Kit } from "../types/kit.types";

interface Props {
  handleKitClick: (kit: Kit) => void;
  handleChangeSessionStatus: (status: SessionStatus) => void;
  selectedKit: Kit | undefined;
}

export const StartSession = ({
  handleKitClick,
  handleChangeSessionStatus,
  selectedKit,
}: Props) => {
  const [kits, setKits] = useState<Kit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDevices() {
      const data = await getDevices();

      setKits(data);
      setIsLoading(false);
    }

    loadDevices();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center font-bold text-neutral-900 text-xl">
        Cargando...
      </div>
    );
  return (
    <SessionContainer>
      <SessionHeader />
      <div className="p-6 rounded-b-3xl">
        <h2 className="text-2xl font-bold mb-2">Nueva Sesión</h2>
        <p className="text-neutral-600">¿Qué equipo vas a utilizar hoy?</p>
        <div className="flex flex-col gap-2 mt-6">
          {kits.map((k) => {
            return (
              <KitCard
                key={k.deviceId}
                kit={k}
                handleClick={handleKitClick}
                isSelected={selectedKit?.deviceId === k.deviceId}
              />
            );
          })}
        </div>
        <div className="border-t-2 border-neutral-100 mt-8 pt-4">
          <button
            disabled={!selectedKit}
            className={cn(
              "w-full p-5 rounded-2xl flex justify-center items-center gap-2 text-xl font-bold transition duration-200 ease-out",
              selectedKit
                ? "cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white"
                : "cursor-not-allowed bg-neutral-200 text-neutral-400",
            )}
            onClick={() => {
              handleChangeSessionStatus("recording");
              toast.success("Sesión iniciada correctamente.");
            }}
          >
            <IoPlaySharp />
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </SessionContainer>
  );
};
