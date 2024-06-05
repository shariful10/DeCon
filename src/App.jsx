import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<>
			<div className="min-h-[calc(100vh-124.297)]">
				<Outlet />
			</div>
		</>
	);
};

export default App;
