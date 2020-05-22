document.addEventListener("DOMContentLoaded", () => {
  console.log("ok");
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");

  document.addEventListener("mousewheel", (e) => {
    console.log(e.wheelDelta);
  });
});
