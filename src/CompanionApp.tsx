import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { StartSession } from "./components/StartSession";
import { ActiveSession } from "./components/ActiveSession";
import type { Kit } from "./types/kit.types";
import type { Incident } from "./types/incident.types";

export type SessionStatus = "idle" | "recording" | "completed";

const CompanionApp = () => {
  const [selectedKit, setSelectedKit] = useState<Kit | undefined>(undefined);
  const [selectedIncident, setSelectedIncident] = useState<
    Incident | undefined
  >(undefined);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle");
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  useEffect(() => {
    if (sessionStatus !== "recording") return;

    const interval = setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [sessionStatus]);

  const handleChangeSessionStatus = (status: SessionStatus) => {
    setSessionStatus(status);
  };

  const handleSessionEnded = () => {
    setSelectedKit(undefined);
    setSelectedIncident(undefined);
    setSessionStatus("idle");
    setRecordingSeconds(0);
  };

  return (
    <>
      <section className="bg-neutral-100 min-h-screen w-full flex justify-center items-center p-4">
        {sessionStatus === "idle" && (
          <StartSession
            selectedKit={selectedKit}
            handleKitClick={(kit) => setSelectedKit(kit)}
            handleChangeSessionStatus={handleChangeSessionStatus}
          />
        )}
        {sessionStatus !== "idle" && (
          <ActiveSession
            selectedKit={selectedKit}
            selectedIncident={selectedIncident}
            recordingSeconds={recordingSeconds}
            handleChangeSessionStatus={handleChangeSessionStatus}
            handleIncidentClick={(incident) => setSelectedIncident(incident)}
            handleSessionEnded={handleSessionEnded}
            handleChangeIncidentSelected={() => setSelectedIncident(undefined)}
          />
        )}
        <Toaster position="top-center" richColors />
      </section>
    </>
  );
};

export default CompanionApp;
