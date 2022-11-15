// export default cube = function () {
//   const homeBody = document.getElementById("#homeBody");
//   homeBody.classList.toggle("bg");
// };

export default function home() {
  // const homeBody = document.getElementById("#homeBody");

  // switch.addEventListener("click", home);
  switchBody.addEventListener("click", (e) => {
    homeBody.classList.toggle("bg");
    switchDot.classList.toggle("active");
  });
  //
}
home();
//  const blockTitle = document.querySelector(".block_title");
// const switchDot = document.querySelector(".switch_dot");
// const topBubble = document.querySelector(".topBubble");

// topBubble.classList.toggle("bg");
