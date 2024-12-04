import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./style.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure there is an element with id 'root' in your HTML.");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
