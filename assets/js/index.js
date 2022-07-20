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
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__description", 1, {
  delay: 0.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__button", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
//后面液体
TweenMax.from(".home__liquid", 1, {
  delay: 0.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
//果汁瓶
TweenMax.from(".home__juice-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
// 两瓣苹果
TweenMax.from(".home__apple1", 1, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__apple2", 1, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
//叶子
TweenMax.from(".home__leaf:nth-child(1)", 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(2)", 2, {
  delay: 1.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(3)", 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(4)", 2, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(5)", 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(6)", 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
