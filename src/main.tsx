import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InputValueProvider } from "./providers/inputValueProvider";
import { ModalProvider } from "./providers/modalProvider";

const queriClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queriClient}>
      <InputValueProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </InputValueProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
