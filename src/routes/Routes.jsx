import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BuildingCore from "../pages/BuildingCore";
import BuildingInfo from "../pages/BuildingInfo";
import BuildingShell from "../pages/BuildingShell";
import ConstructionsType from "../pages/ConstructionsType";
import Home from "../pages/Home";
import Report from "../pages/Result/Report";
import ResultAndReport from "../pages/ResultAndReport";

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
        path: "/building-shell",
        element: <BuildingShell />,
      },
      {
        path: "/constructions-type",
        element: <ConstructionsType />,
      },
      {
        path: "/result-and-report",
        element: <ResultAndReport />,
      },
    ],
  },
]);
