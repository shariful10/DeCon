import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<Toaster />
		</Provider>
	</React.StrictMode>
);
