document.addEventListener("DOMContentLoaded", () => {
  const animBg = new Animbg(".anim-bg");
  document.addEventListener("mousemove", (e) => animBg.listenCursorMove(e));
});
