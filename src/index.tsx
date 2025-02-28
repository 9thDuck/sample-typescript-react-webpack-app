import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

root.render(<App />);
