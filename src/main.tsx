import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { ThemeProvider } from "@emotion/react";
import { themeOverrides } from "./theme.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={themeOverrides}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
