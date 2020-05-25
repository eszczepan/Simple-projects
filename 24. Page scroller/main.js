document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller("#root");
  document.addEventListener("mousewheel", scroller.listenScroll);
  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
});
