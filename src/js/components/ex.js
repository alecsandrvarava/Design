import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
disableScroll();
window.addEventListener("load", () => {
  const gif = document.querySelectorAll(".gif");
  loadBlock.classList.add("load");
  setTimeout(() => {
    loadBlock.remove();
  }, 1000);
  setTimeout(() => {
    homeBody.classList.add("active");
  }, 500);
  setTimeout(() => {
    gif.forEach((el) => {
      el.classList.add("active");
    });
  }, 800);
  enableScroll();
});
