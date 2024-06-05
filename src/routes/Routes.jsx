import App from "../App";
import ConstructionsType from "../pages/ConstructionsType";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/constructions-type",
        element: <ConstructionsType />,
      },
    ],
  },
]);
