const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
// console.log(item)

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
}

function dragstart(e) {
  // console.log(e.target)
  // console.log(this)
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

function dragend(e) {
  e.target.classList.remove("hold", "hide");
  //or  e.target.className ='item'
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add("hovered");
}

function dragleave(e) {
  e.target.classList.remove("hovered");
}

function drop(e) {
  e.target.classList.remove("hovered");
  e.target.append(item);
}
