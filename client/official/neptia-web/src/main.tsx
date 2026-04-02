import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@src/App.tsx";

// import "@util/setRootFontSize"; // 引入动态设置 font-size 的逻辑
import "@src/index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
