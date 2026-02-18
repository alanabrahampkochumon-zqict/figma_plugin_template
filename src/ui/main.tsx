import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CircleGenerator from "./CircleGenerator";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CircleGenerator />
    </StrictMode>,
);
