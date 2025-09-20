import Navbar from "@component/layout/Navbar/Navbar";
import Footer from "@component/layout/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* 子路由的 */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
