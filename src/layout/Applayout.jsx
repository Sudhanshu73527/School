import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Fotter from "../Components/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
};

export default AppLayout;
