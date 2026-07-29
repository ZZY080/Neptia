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
        content="Neptia 由 CEO 曾志远领衔，聚焦航空航天、低空经济、深空探索、医疗科技与全球零售，以自主研发的平台、算法和数据智能推动未来产业规模化落地。"
      />

      <meta
        name="keywords"
        content="Neptia, 航空航天, 低空经济, 深空探索, 卫星遥感, 火箭遥测, 地面测控, 航天器数字孪生, 智慧医疗, 医疗设备, 全球零售, Soptia, 曾志远"
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
