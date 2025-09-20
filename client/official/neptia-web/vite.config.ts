import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. 服务配置
  server: {
    host: "0.0.0.0",
  },
  // 2. 路径映射配置
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@component": path.resolve(__dirname, "./src/component"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@util": path.resolve(__dirname, "./src/util"),
      "@i18n": path.resolve(__dirname, "./src/i18n"),
    },
  },
});
