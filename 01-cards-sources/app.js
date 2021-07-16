let images = [
  "https://images.unsplash.com/photo-1532692966749-619e0feb9e78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
  "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
];

for (image of images) {
  console.log(image);
  var newElement = document.createElement("div");
  newElement.classList.add("slide");
  newElement.setAttribute("style", "background-image: url('" + image + "')");
  document.getElementById("demoImg").appendChild(newElement);
}

function slidesPlagin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlagin();
