import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      ),
    },
  ],
  // {
  //   basename: "/buddy-talk",
  // }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
