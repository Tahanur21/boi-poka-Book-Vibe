import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;