import App from "../App";
import BuildingInfo from "../pages/BuildingInfo";
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
				path: "/building-information",
				element: <BuildingInfo />,
			},
		],
	},
]);
