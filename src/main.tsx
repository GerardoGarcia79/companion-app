import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CompanionApp from "./CompanionApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompanionApp />
  </StrictMode>,
);
