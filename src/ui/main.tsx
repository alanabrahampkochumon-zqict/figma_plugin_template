import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function createCircle() {}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <h1>Your first Figma plugin</h1>
        <label htmlFor="radius">Radius</label>
        <input type="number" id="radius" />
        <label htmlFor="radius">Radius</label>
        <input type="number" id="radius" />
        <label htmlFor="color">Color</label>
        <input type="number" id="color" />

        <button>Create Circle</button>
    </StrictMode>,
);
