import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
