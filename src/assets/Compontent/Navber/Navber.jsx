import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Navber = () => {
    return (
        <div>
             
              <Header></Header>
              <Outlet></Outlet>
              
        </div>
    );
};

export default Navber;