/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //当点击nav__link的时候，我们会移除show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== GSAP ANIMATION ===============*/
//标题，按钮和描述
TweenMax.from(".home__title", 1, {
  delay: 4.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__description", 1, {
  delay: 4.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__button", 1, {
  delay: 4.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
//后面液体
TweenMax.from(".home__liquid", 1, {
  delay: 4.6,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
//果汁瓶
TweenMax.from(".home__juice-animate", 1, {
  delay: 5.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
// 两瓣苹果
TweenMax.from(".home__apple1", 1, {
  delay: 5.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__apple2", 1, {
  delay: 5.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
//叶子
TweenMax.from(".home__leaf:nth-child(1)", 2, {
  delay: 5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(2)", 2, {
  delay: 5.1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(3)", 2, {
  delay: 5.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(4)", 2, {
  delay: 5.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(5)", 2, {
  delay: 5.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(6)", 2, {
  delay: 5.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
let circulaProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value"),
  animation = document.querySelector(".animation"),
  header = document.querySelector(".header"),
  homeShapeSmall = document.querySelector(".home__shape-small"),
  homeShapeBig = document.querySelector(".home__shape-big"),
  shapeBg = document.querySelector(".home__shape-bg");

let progressStartValue = 0,
  progressEndValue = 100,
  speed = 25;
//   speed表示毫秒数
let timer,
  n = 0,
  sum1 = 180;
sum2 = 120;
let progress;

function move() {
  clearInterval(progress);
  progress = setInterval(() => {
    n++;
    if (progressStartValue < 100) {
      progressStartValue++;
    }
    progressValue.textContent = `${progressStartValue}%`;
    circulaProgress.style.background = `conic-gradient(#99bcac  ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (progressStartValue === progressEndValue) {
      circulaProgress.style.background = `conic-gradient(#007175  ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
      if (n <= sum1 && n > sum2) {
        animation.style.opacity = (60 - (n - sum2)) / 60;
      }
      if (n > sum1) {
        header.classList.remove("close");
        homeShapeBig.classList.remove("close");
        homeShapeSmall.classList.remove("close");
        shapeBg.classList.remove("close");
        animation.classList.add("over");

        clearInterval(progress);
      }
    }
  }, speed);
}
move();
