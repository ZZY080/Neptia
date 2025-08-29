import Content from "@component/layout/Content/Content";
// import Footer from '@component/layout/Footer/Footer';
import Header from "@component/layout/Header/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // 监听窗口大小变化，更新 Header 高度
  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {/* 头部 */}
        <Header />
        {/* 内容 */}
        <Content height={windowHeight - 80 - 225} />
        {/* 底部 */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
