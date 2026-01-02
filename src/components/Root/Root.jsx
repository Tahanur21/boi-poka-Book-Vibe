import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
