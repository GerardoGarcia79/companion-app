import { cn } from "../lib/utils";
import type { Incident } from "../types/incident.types";

interface Props {
  incident: Incident;
  handleIncidentClick: (incident: Incident) => void;
  isSelected: boolean;
}

export const IncidentCard = ({
  incident,
  handleIncidentClick,
  isSelected = false,
}: Props) => {
  const { incident: incidentName, description, icon: Icon } = incident;

  return (
    <button
      onClick={() => handleIncidentClick(incident)}
      className={cn(
        "p-3 border-2 flex gap-4 items-center w-full rounded-xl cursor-pointer transition-colors duration-200",
        isSelected ? "border-blue-600 bg-blue-50/50" : "border-neutral-200",
      )}
    >
      <div
        className={cn(
          "p-3 rounded-full transition-colors duration-200",
          isSelected ? "bg-blue-600" : "bg-neutral-100",
        )}
      >
        <Icon
          className={cn(
            "w-4 h-4 transition-colors duration-200",
            isSelected ? "text-white" : "text-neutral-600",
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg text-start wrap-break-word">
          {incidentName}
        </h3>
        <p className="text-xs text-neutral-500 text-start wrap-break-word">
          {description}
        </p>
      </div>
      <div
        className={cn(
          "h-5 w-5 rounded-full shrink-0 border-2 transition-colors",
          isSelected
            ? "bg-blue-600 border-blue-600"
            : "bg-white border-neutral-300",
        )}
      />
    </button>
  );
};
