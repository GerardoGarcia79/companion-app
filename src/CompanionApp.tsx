import { useState } from "react";
import { Toaster } from "sonner";
import { StartSession } from "./components/StartSession";
import type { Kit } from "./types/kit.types";
import { ActiveSession } from "./components/ActiveSession";

type SessionStatus = "idle" | "recording" | "completed";

const CompanionApp = () => {
  const [selectedKit, setSelectedKit] = useState<Kit | undefined>(undefined);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle");

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
        {sessionStatus !== "idle" && <ActiveSession />}
        <Toaster />
      </section>
    </>
  );
};

export default CompanionApp;
