import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname !== "/" && (
        <header>
          <Navbar />
        </header>
      )}
      <div className="min-h-[calc(100vh-124.297)]">
        <Outlet />
      </div>
    </>
  );
};

export default App;
