import { useState } from "react";
import { Toaster } from "sonner";
import { StartSession } from "./components/StartSession";
import type { Kit } from "./types/kit.types";

type SessionStatus = "idle" | "recording" | "completed";

const CompanionApp = () => {
  const [selectedKit, setSelectedKit] = useState<Kit | undefined>(undefined);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle");

  return (
    <>
      <StartSession
        selectedKit={selectedKit}
        handleKitClick={(kit) => setSelectedKit(kit)}
        handleStartSession={() => setSessionStatus("recording")}
      />
      <Toaster />
    </>
  );
};

export default CompanionApp;
