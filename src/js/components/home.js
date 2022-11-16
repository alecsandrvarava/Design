export default setTimeout(() => {
  homeBody.classList.add("active");
}, 500);

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
function mouseMove() {
  if (window.innerHeight - 400 <= window.pageYOffset) {
    const blockRow_1 = document.querySelector(".home__row-1-text");
    const blockRow_2 = document.querySelector(".home__row-2-text");
    const blockRow_3 = document.querySelector(".home__row-3-text");
    const blockRow_4 = document.querySelector(".home__row-4-text");
    blockRow_1.style.marginLeft = `${window.pageYOffset * 0.05}px`;
    blockRow_2.style.marginLeft = `${-window.pageYOffset * 0.05}px`;
    blockRow_3.style.marginLeft = `${-window.pageYOffset * 0.05}px`;
    blockRow_4.style.marginLeft = `${window.pageYOffset * 0.05}px`;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const homeImg = document.querySelectorAll(".home-img");
  const homeImgArrow = document.querySelector(".home-img-2");
  homeImgArrow.style.top = `${-window.pageYOffset * 0.2}px`;
  homeImg.forEach((el) => {
    el.style.top = `${-window.pageYOffset * 0.4}px`;
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (window.innerHeight + 300 <= window.pageYOffset) {
    const wellWrapText_1 = document.querySelector(".well__text-1");
    const wellWrapText_2 = document.querySelector(".well__text-2");
    const wellWrapText_3 = document.querySelector(".well__text-3");
    let margin = window.pageYOffset * 0.1 - 160;
    let topP1 =
      window.pageYOffset +
      wellWrapText_1.getBoundingClientRect().top -
      innerHeight;
    let topP2 =
      window.pageYOffset +
      wellWrapText_2.getBoundingClientRect().top -
      innerHeight;
    let topP3 =
      window.pageYOffset +
      wellWrapText_3.getBoundingClientRect().top -
      innerHeight;
    if (window.pageYOffset >= topP1) {
      wellWrapText_1.classList.add("active");
    } else {
      wellWrapText_1.classList.remove("active");
    }

    if (window.pageYOffset >= topP2) {
      wellWrapText_2.classList.add("active");
    } else {
      wellWrapText_2.classList.remove("active");
    }
    if (window.pageYOffset >= topP3) {
      wellWrapText_3.classList.add("active");
    } else {
      wellWrapText_3.classList.remove("active");
    }
    wellWrapText_1.style.marginLeft = `${-margin}px`;
    wellWrapText_2.style.marginLeft = `${margin}px`;
    wellWrapText_3.style.marginLeft = `${-margin}px`;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let topBubblHeight =
    window.pageYOffset + topBubbl.getBoundingClientRect().top - innerHeight;
  if (window.pageYOffset >= topBubblHeight) {
    if (innerWidth > 992) {
      topBubbl.style.top = `${-window.pageYOffset * 0.2}px`;
    } else if (innerWidth < 992) {
      topBubbl.style.top = `${-window.pageYOffset * 0.12}px`;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let dotsHeight =
    window.pageYOffset + dots.getBoundingClientRect().top - innerHeight;
  if (window.pageYOffset >= dotsHeight) {
    dots.style.marginLeft = `${-window.pageYOffset * 0.25 + 200}px`;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (window.innerHeight + 300 <= window.pageYOffset) {
    const makeWrapText_1 = document.querySelector(".make__text-1");
    const makeWrapText_2 = document.querySelector(".make__text-2");
    const makeWrapText_3 = document.querySelector(".make__text-3");
    let margin = window.pageYOffset * 0.1 - 160;
    let topP1 =
      window.pageYOffset +
      makeWrapText_1.getBoundingClientRect().top -
      innerHeight;
    let topP2 =
      window.pageYOffset +
      makeWrapText_2.getBoundingClientRect().top -
      innerHeight;
    let topP3 =
      window.pageYOffset +
      makeWrapText_3.getBoundingClientRect().top -
      innerHeight;
    if (window.pageYOffset >= topP1) {
      makeWrapText_1.classList.add("active");
    } else {
      makeWrapText_1.classList.remove("active");
    }
    if (window.pageYOffset >= topP2) {
      makeWrapText_2.classList.add("active");
    } else {
      makeWrapText_2.classList.remove("active");
    }
    if (window.pageYOffset >= topP3) {
      makeWrapText_3.classList.add("active");
    } else {
      makeWrapText_3.classList.remove("active");
    }
    makeWrapText_1.style.marginLeft = `${margin}px`;
    makeWrapText_3.style.marginLeft = `${-margin}px`;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let topP1 =
    window.pageYOffset + wellP1.getBoundingClientRect().top - innerHeight;
  let topP2 =
    window.pageYOffset + wellP2.getBoundingClientRect().top - innerHeight;
  let topP3 =
    window.pageYOffset + wellP3.getBoundingClientRect().top - innerHeight;
  if (window.pageYOffset >= topP1) {
    wellP1.style.transform = `translateY(0px)`;
  } else {
    wellP1.style.transform = `translateY(300%)`;
  }
  if (window.pageYOffset >= topP2) {
    wellP2.style.transform = `translateY(0px)`;
  } else {
    wellP2.style.transform = `translateY(150%)`;
  }
  if (window.pageYOffset >= topP3) {
    wellP3.classList.add("active");
  } else {
    wellP3.classList.remove("active");
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let topFooterBubbl =
    window.pageYOffset + topBubbl.getBoundingClientRect().top - innerHeight;
  if (window.pageYOffset >= topFooterBubbl) {
    if (innerWidth > 992) {
      footerBubbl.style.top = `${-window.pageYOffset * 0.15 + 1000}px`;
    } else if (innerWidth < 992) {
      footerBubbl.style.top = `${-window.pageYOffset * 0.1 + 400}px`;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mouseMove = throttle(mouseMove, 50);
document.addEventListener("scroll", mouseMove);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("scroll", (e) => {
//   if (window.innerHeight - 400 <= e.target.documentElement.scrollTop) {
//     const blockRow_1 = document.querySelector(".home__row-1-text");
//     const blockRow_2 = document.querySelector(".home__row-2-text");
//     const blockRow_3 = document.querySelector(".home__row-3-text");
//     const blockRow_4 = document.querySelector(".home__row-4-text");
//     blockRow_1.style.marginLeft = `${
//       e.target.documentElement.scrollTop * 0.05
//     }px`;
//     blockRow_2.style.marginLeft = `${
//       -e.target.documentElement.scrollTop * 0.05
//     }px`;
//     blockRow_3.style.marginLeft = `${
//       -e.target.documentElement.scrollTop * 0.05
//     }px`;
//     blockRow_4.style.marginLeft = `${
//       e.target.documentElement.scrollTop * 0.05
//     }px`;
//   }
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const homeImg = document.querySelectorAll(".home-img");
//   const homeImgArrow = document.querySelector(".home-img-2");
//   homeImgArrow.style.top = `${-e.target.documentElement.scrollTop * 0.2}px`;
//   homeImg.forEach((el) => {
//     el.style.top = `${-e.target.documentElement.scrollTop * 0.4}px`;
//   });
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   if (window.innerHeight + 300 <= e.target.documentElement.scrollTop) {
//     const wellWrapText_1 = document.querySelector(".well__text-1");
//     const wellWrapText_2 = document.querySelector(".well__text-2");
//     const wellWrapText_3 = document.querySelector(".well__text-3");
//     let margin = e.target.documentElement.scrollTop * 0.1 - 160;
//     let topP1 =
//       window.pageYOffset +
//       wellWrapText_1.getBoundingClientRect().top -
//       innerHeight;
//     let topP2 =
//       window.pageYOffset +
//       wellWrapText_2.getBoundingClientRect().top -
//       innerHeight;
//     let topP3 =
//       window.pageYOffset +
//       wellWrapText_3.getBoundingClientRect().top -
//       innerHeight;
//     if (window.pageYOffset >= topP1) {
//       wellWrapText_1.classList.add("active");
//     } else {
//       wellWrapText_1.classList.remove("active");
//     }

//     if (window.pageYOffset >= topP2) {
//       wellWrapText_2.classList.add("active");
//       // console.log(wellWrapText_2);
//       // console.log(topP2);
//       // console.log(window.pageYOffset);
//     } else {
//       wellWrapText_2.classList.remove("active");
//     }
//     if (window.pageYOffset >= topP3) {
//       wellWrapText_3.classList.add("active");
//     } else {
//       wellWrapText_3.classList.remove("active");
//     }
//     wellWrapText_1.style.marginLeft = `${-margin}px`;
//     wellWrapText_2.style.marginLeft = `${margin}px`;
//     wellWrapText_3.style.marginLeft = `${-margin}px`;
//   }
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   let topBubblHeight =
//     window.pageYOffset + topBubbl.getBoundingClientRect().top - innerHeight;
//   if (window.pageYOffset >= topBubblHeight) {
//     if (innerWidth > 992) {
//       topBubbl.style.top = `${-e.target.documentElement.scrollTop * 0.2}px`;
//     } else if (innerWidth < 992) {
//       topBubbl.style.top = `${-e.target.documentElement.scrollTop * 0.12}px`;
//     }
//   }
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   let dotsHeight =
//     window.pageYOffset + dots.getBoundingClientRect().top - innerHeight;
//   if (window.pageYOffset >= dotsHeight) {
//     dots.style.marginLeft = `${
//       -e.target.documentElement.scrollTop * 0.25 + 200
//     }px`;
//   }
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   if (window.innerHeight + 300 <= e.target.documentElement.scrollTop) {
//     const makeWrapText_1 = document.querySelector(".make__text-1");
//     const makeWrapText_2 = document.querySelector(".make__text-2");
//     const makeWrapText_3 = document.querySelector(".make__text-3");
//     let margin = e.target.documentElement.scrollTop * 0.1 - 160;
//     let topP1 =
//       window.pageYOffset +
//       makeWrapText_1.getBoundingClientRect().top -
//       innerHeight;
//     let topP2 =
//       window.pageYOffset +
//       makeWrapText_2.getBoundingClientRect().top -
//       innerHeight;
//     let topP3 =
//       window.pageYOffset +
//       makeWrapText_3.getBoundingClientRect().top -
//       innerHeight;
//     if (window.pageYOffset >= topP1) {
//       makeWrapText_1.classList.add("active");
//     } else {
//       makeWrapText_1.classList.remove("active");
//     }
//     if (window.pageYOffset >= topP2) {
//       makeWrapText_2.classList.add("active");
//     } else {
//       makeWrapText_2.classList.remove("active");
//     }
//     if (window.pageYOffset >= topP3) {
//       makeWrapText_3.classList.add("active");
//     } else {
//       makeWrapText_3.classList.remove("active");
//     }
//     makeWrapText_1.style.marginLeft = `${margin}px`;
//     makeWrapText_3.style.marginLeft = `${-margin}px`;
//   }
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   let topP1 =
//     window.pageYOffset + wellP1.getBoundingClientRect().top - innerHeight;
//   let topP2 =
//     window.pageYOffset + wellP2.getBoundingClientRect().top - innerHeight;
//   let topP3 =
//     window.pageYOffset + wellP3.getBoundingClientRect().top - innerHeight;
//   if (window.pageYOffset >= topP1) {
//     wellP1.style.transform = `translateY(0px)`;
//   } else {
//     wellP1.style.transform = `translateY(300%)`;
//   }
//   if (window.pageYOffset >= topP2) {
//     wellP2.style.transform = `translateY(0px)`;
//   } else {
//     wellP2.style.transform = `translateY(150%)`;
//   }
//   if (window.pageYOffset >= topP3) {
//     wellP3.classList.add("active");
//   } else {
//     wellP3.classList.remove("active");
//   }

//   // transform: scale(1.1);
//   // sliderLink-1
//   // transform: translateY(100px);
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // let topsliderLink1 =
//   //   window.pageYOffset + wellP1.getBoundingClientRect().top + innerHeight;
//   // if (window.pageYOffset >= topsliderLink1) {
//   //   sliderLink1.style.transform = `scale(1.1)`;
//   // } else {
//   //   sliderLink1.style.transform = `scale(1)`;
//   // }
//   let topsliderLink1 =
//     window.pageYOffset + sliderLink1.getBoundingClientRect().top;
//   let topsliderLink1Height =
//     topsliderLink1 - e.target.documentElement.scrollTop;
//   // console.log(e.target.documentElement.scrollTop);
//   // console.log(topsliderLink1);
//   if (topsliderLink1 <= e.target.documentElement.scrollTop) {
//     function slider() {
//       // sliderLink1.style.transform = `translateY(${-topsliderLink1Height}px)`;
//       console.log("EEEEEEEEEEEEEEEEEEEEE");
//     }

//     // slider = throttle(slider, 2000);
//   } else {
//     sliderLink1.style.transform = "translateY(0px)";
//   }
//   // sliderLink1.style.transform = "translateY(100px)";
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// });
