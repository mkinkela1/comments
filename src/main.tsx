import React from "react";
import ReactDOM from "react-dom/client";
import { CommentsProvider } from "src/contexts/CommentsContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>,
);
