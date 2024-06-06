import App from "../App";
import ConstructionsType from "../pages/ConstructionsType";
import BuildingInfo from "../pages/BuildingInfo";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import BuildingCore from "../pages/BuildingCore";

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
        path: "/building-information",
        element: <BuildingInfo />,
      },
      {
        path: "/building-core",
        element: <BuildingCore />,
      },
      {
        path: "/constructions-type",
        element: <ConstructionsType />,
      },
    ],
  },
]);
