window.onload = () => {
  let img = document.querySelectorAll(".img");
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");
  let buttons = document.querySelectorAll(".roll-p");

  //设置一个数组，来存id
  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  //设置一个变量来当图片的索引
  let index = 0;

  initialize();

  //设置一个定时器，让图片轮播
  let timer = setInterval(next, 2000);

  //给箭头绑定点击事件
  left.addEventListener("click", prev);
  //当鼠标放在箭头上的时候，计时器停止
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  //当鼠标离开箭头的时候,让定时器重新开始
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 2000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 2000);
  });

  //为小按钮添加点击事件
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      clearInterval(timer);
      timer = null;
      //需要判断用户点击的小方块与当前图片的索引之差
      // 如果大于0，说明用户需要更换的是后面的图片
      // 反之，是前面的图片
      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
      timer = setInterval(next, 2000);
    });
  }

  //创建一个函数来切换图片
  function prev() {
    //切换上一张就是把数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //创建一个函数来让小方块跟着图片移动
  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    //让当前索引变色
    buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
  }

  //创建一个函数来初始化图片
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  // this.classList.toggle("active");
  console.log("111");
  navToggleBtn.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

// 判断要不要加上active状态
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
let list = document.querySelector(".list");
let roll = document.querySelector(".roll");
//复制一份
list.innerHTML += list.innerHTML;
let left = 0;

//定义定时器
let timer;
function move() {
  //养成好习惯 先清零
  clearInterval(timer);
  timer = setInterval(function () {
    left -= 1;
    //如果到头了，就让left归零
    if (left <= -(7 * 384 + 7 * 10)) {
      left = 0;
    }
    list.style.left = left + "px";
  }, 10);
  //这是定时函数 20是表示20毫秒
}
move();

//如果鼠标移动到上面了，就停止
// roll.onmouseenter = function () {
//   clearInterval(timer);
// };
//鼠标移走就继续动
// roll.onmouseleave = function () {
//   move();
// };
