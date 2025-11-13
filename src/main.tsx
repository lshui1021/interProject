import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// @ts-ignore: CSS module type declaration not present in this project
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
  