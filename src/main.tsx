import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/geist-sans/400.css"; 
import "@fontsource/geist-sans/700.css";
import "@fontsource/aldrich/400.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
