import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-124.297)]">
        <Outlet />
      </div>
    </>
  );
};

export default App;
