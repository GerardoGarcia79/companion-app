import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { StartSession } from "./components/StartSession";
import type { Kit } from "./types/kit.types";
import { ActiveSession } from "./components/ActiveSession";

type SessionStatus = "idle" | "recording" | "completed";

const CompanionApp = () => {
  const [selectedKit, setSelectedKit] = useState<Kit | undefined>(undefined);
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

  return (
    <>
      <section className="bg-neutral-100 min-h-screen w-full flex justify-center items-center p-4">
        {sessionStatus === "idle" && (
          <StartSession
            selectedKit={selectedKit}
            handleKitClick={(kit) => setSelectedKit(kit)}
            handleStartSession={() => setSessionStatus("recording")}
          />
        )}
        {sessionStatus !== "idle" && (
          <ActiveSession
            selectedKit={selectedKit}
            recordingSeconds={recordingSeconds}
          />
        )}
        <Toaster />
      </section>
    </>
  );
};

export default CompanionApp;
