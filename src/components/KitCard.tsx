import { TfiPackage } from "react-icons/tfi";
import { BsCheck2Circle } from "react-icons/bs";
import type { Kit } from "../types/kit.types";
import { cn } from "../lib/utils";

interface Props {
  kit: Kit;
  handleClick: (kit: Kit) => void;
  isSelected: boolean;
}

export const KitCard = ({ kit, handleClick, isSelected }: Props) => {
  const { kit: kitName, description } = kit;

  return (
    <button
      onClick={() => handleClick(kit)}
      className={cn(
        "p-4 border-2 flex gap-4 items-center w-full rounded-xl cursor-pointer transition-colors duration-200",
        isSelected ? "border-blue-600 bg-blue-50/50" : "border-neutral-200",
      )}
    >
      <div
        className={cn(
          "p-3 rounded-xl transition-colors duration-200",
          isSelected ? "bg-blue-600" : "bg-neutral-100",
        )}
      >
        <TfiPackage
          className={cn(
            "w-4 h-4 transition-colors duration-200",
            isSelected ? "text-white" : "text-neutral-600",
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg text-start wrap-break-word">
          {kitName}
        </h3>
        <p className="text-sm text-neutral-500 text-start wrap-break-word">
          {description}
        </p>
      </div>
      {isSelected && (
        <div className="p-3 rounded-xl shrink-0">
          <BsCheck2Circle className="text-blue-600 w-6 h-6" />
        </div>
      )}
    </button>
  );
};
