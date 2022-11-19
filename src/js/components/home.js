export default function throttle(func, ms) {
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
  const aboutFooterTop = document.querySelector(".about-footer__top");
  const aboutFooterBottom = document.querySelector(".about-footer__bottom");
  let aboutFooterTopHeight =
    window.pageYOffset +
    aboutFooterTop.getBoundingClientRect().top -
    innerHeight;
  if (window.pageYOffset >= aboutFooterTopHeight) {
    if (innerWidth > 992) {
      aboutFooterTop.style.marginLeft = `${-window.pageYOffset * 0.1}px`;
      aboutFooterBottom.style.marginLeft = `${
        window.pageYOffset * 0.1 - 1500
      }px`;
    } else if (innerWidth < 992) {
      aboutFooterTop.style.marginLeft = `${-window.pageYOffset * 0.1}px`;
      aboutFooterBottom.style.marginLeft = `${
        window.pageYOffset * 0.1 - 800
      }px`;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mouseMove = throttle(mouseMove, 30);
document.addEventListener("scroll", mouseMove);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
