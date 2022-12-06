import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18nConfig";
import { QuoteForm } from "./QuoteForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuoteForm />
  </React.StrictMode>
);
