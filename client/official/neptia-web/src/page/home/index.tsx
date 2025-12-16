import Navbar from "@component/layout/Navbar/Navbar";
import Footer from "@component/layout/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 顶部导航 */}
      <Navbar />

      {/* 中间内容区域 */}
      <main className="flex flex-1 overflow-y-auto  flex-col">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
