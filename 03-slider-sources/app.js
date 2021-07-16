let images = [
  "https://images.unsplash.com/photo-1532692966749-619e0feb9e78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
  "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80",
];

for (image of images) {
  console.log(image);
  var newElement = document.createElement("div");
  // newElement.classList.add("main-slide");
  newElement.setAttribute("style", "background-image: url('" + image + "')");
  document.getElementById("demoImg").appendChild(newElement);
}

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlides("up");
});
downBtn.addEventListener("click", () => {
  changeSlides("down");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    changeSlides("up");
  } else if (e.key === "ArrowDown") {
    changeSlides("down");
  }
});

function changeSlides(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
