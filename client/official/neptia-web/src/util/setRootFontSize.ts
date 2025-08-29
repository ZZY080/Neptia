// utils/setRootFontSize.ts
(function (window: Window, document: Document) {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // 设置 body 的 font-size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置 html 的 font-size
  function setRootFontSize() {
    const screenWidth = docEl.clientWidth || window.innerWidth;
    const scale = screenWidth / 375; // 以 375px 设计稿为基准
    const fontSize = 16 * Math.min(scale, 2); // 限制最大缩放比例
    docEl.style.fontSize = fontSize + "px";
  }

  setRootFontSize();
  window.addEventListener("resize", setRootFontSize);
  window.addEventListener("pageshow", function (e: PageTransitionEvent) {
    if (e.persisted) {
      setRootFontSize();
    }
  });

  // 设置 dpr
  docEl.setAttribute("data-dpr", dpr.toString());
})(window, document);
