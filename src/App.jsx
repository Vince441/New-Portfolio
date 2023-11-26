import React from "react";
import "./styles/Index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./pages/Home.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
