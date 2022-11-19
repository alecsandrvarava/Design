import { jarallax } from "jarallax";

export default function parallax() {
  jarallax(document.querySelectorAll(".parallax"), {
    speed: 0.1,
  });
}
parallax();
