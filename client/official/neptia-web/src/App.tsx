import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@i18n";
import Index from "@src/page/index/index";
import Service from "@src/page/service";
import About from "@src/page/about";
import Contact from "@src/page/contact";
import NotFound from "@src/page/not-found";
import Insight from "@src/page/insight";
import Home from "@src/page/home";
import { Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <HelmetProvider>
      <title>Neptia</title>
      <meta
        name="description"
        content="Neptia 以信息为核心，通过产品的承载与传递，让价值触达全球每一个角落。我们相信信息的力量能够打破壁垒，连接世界，推动知识、机遇与灵感的自由流动，并让每个人的价值得以展现。"
      />
      <meta name="keywords" content="Wis,The Way Insight" />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="index" element={<Index />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="insight" element={<Insight />} />
            <Route
              path="not-fount"
              element={<Navigate to={"/not-found"} replace />}
            />
          </Route>
          {/* 默认重定向 */}
          <Route path="/" element={<Navigate to={"/home/index"} replace />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/not-found"} replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
