import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import SeriesPage from "./pages/SeriesPage.tsx";
import Favoritos from "./pages/Favoritos.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favoritos",
        element: <Favoritos />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
