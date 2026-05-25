import Navbar from "@component/layout/Navbar/Navbar";
import Footer from "@component/layout/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
