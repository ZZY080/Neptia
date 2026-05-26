import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Product from "@src/page/product";
import PaymentSuccess from "@src/page/payment-success";

function App() {
  const RouterComponent =
    import.meta.env.VITE_USE_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;

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
        content="Neptia 以信息为核心，通过产品承载与传递，让价值触达全球每一个角落。我们为全球企业提供跨境技术服务，同时提供信息服务，包括海外品牌推广中国市场，帮助企业打破壁垒、连接世界，实现知识、机遇与灵感的自由流动，让每个人的价值得以展现。"
      />

      <meta
        name="keywords"
        content="Neptia, 跨境技术服务, 信息服务, 全球企业, 出海, 国际化解决方案, 海外扩展, 全球市场, 跨境支付, 跨境物流, 海外电商, 全球商业咨询, 企业出海, 跨境运营, 海外落地, 品牌推广, 中国市场, 海外品牌"
      />

      <RouterComponent
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="index" element={<Index />} />
            <Route path="product" element={<Product />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
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
      </RouterComponent>
    </HelmetProvider>
  );
}

export default App;
