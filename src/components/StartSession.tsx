import { toast } from "sonner";
import { IoPlaySharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { mockKits } from "../data/mockKits";
import { KitCard } from "./KitCard";
import { cn } from "../lib/utils";
import type { Kit } from "../types/kit.types";

interface Props {
  handleKitClick: (kit: Kit) => void;
  handleStartSession: () => void;
  selectedKit: Kit | undefined;
}

export const StartSession = ({
  handleKitClick,
  handleStartSession,
  selectedKit,
}: Props) => {
  return (
    <div className="w-full max-w-md shadow-lg rounded-lg bg-white">
      <div className="bg-black text-white p-6 rounded-t-3xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl">GeoCompanion</h1>
            <p className="text-sm text-neutral-400">Operador de Campo</p>
          </div>
          <div className="flex justify-center items-center">
            <SlLocationPin className="text-blue-400 w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="p-6 rounded-b-3xl">
        <h2 className="text-2xl font-bold mb-2">Nueva Sesión</h2>
        <p className="text-neutral-600">¿Qué equipo vas a utilizar hoy?</p>
        <div className="flex flex-col gap-2 mt-6">
          {mockKits.map((k) => {
            return (
              <KitCard
                key={k.id}
                kit={k}
                handleClick={handleKitClick}
                isSelected={selectedKit?.id === k.id}
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
              handleStartSession();
              toast.success("Sesión iniciada correctamente.");
            }}
          >
            <IoPlaySharp />
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  );
};
