import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayount";

import Home from "../pages/animes/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/animes/_id";
import Watch from "../pages/animes/Watch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
