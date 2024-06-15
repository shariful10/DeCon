import App from "../App";
import Home from "../pages/Home";
import BuildingCore from "../pages/BuildingCore";
import BuildingInfo from "../pages/BuildingInfo";
import BuildingShell from "../pages/BuildingShell";
import { createBrowserRouter } from "react-router-dom";
import ResultAndReport from "../pages/ResultAndReport";
import ConstructionsType from "../pages/ConstructionsType";
import PdfReport from "../components/pdf/PdfReport";

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
			{
				path: "/report",
				element: <PdfReport />,
			},
		],
	},
]);
