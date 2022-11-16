// export default cube = function () {
//   const homeBody = document.getElementById("#homeBody");
//   homeBody.classList.toggle("bg");
// };

export default function home() {
  // const homeBody = document.getElementById("#homeBody");

  // switch.addEventListener("click", home);
  switchBody.addEventListener("click", (e) => {
    homeBody.classList.toggle("bg");
    topBubbl.classList.toggle("bg");
    makeBody.classList.toggle("bg");
    switchDot.classList.toggle("active");
  });
  //
}
home();
let date = new Date();
const footerDatе = document.getElementById("footerDatе");
footerDatе.innerHTML = date.getFullYear();
