const board = document.querySelector("#board");
// const colors = [
//   "#FF6633",
//   "#FFB399",
//   "#FF33FF",
//   "#FFFF99",
//   "#00B3E6",
//   "#E6B333",
//   "#3366E6",
//   "#999966",
//   "#99FF99",
//   "#B34D4D",
//   "#80B300",
//   "#809900",
//   "#E6B3B3",
//   "#6680B3",
//   "#66991A",
//   "#FF99E6",
//   "#CCFF1A",
//   "#FF1A66",
//   "#E6331A",
//   "#33FFCC",
//   "#66994D",
//   "#B366CC",
//   "#4D8000",
//   "#B33300",
//   "#CC80CC",
//   "#66664D",
//   "#991AFF",
//   "#E666FF",
//   "#4DB3FF",
//   "#1AB399",
//   "#E666B3",
//   "#33991A",
//   "#CC9999",
//   "#B3B31A",
//   "#00E680",
//   "#4D8066",
//   "#809980",
//   "#E6FF80",
//   "#1AFF33",
//   "#999933",
//   "#FF3380",
//   "#CCCC00",
//   "#66E64D",
//   "#4D80CC",
//   "#9900B3",
//   "#E64D66",
//   "#4DB380",
//   "#FF4D4D",
//   "#99E6E6",
//   "#6666FF",
// ];
const SQUARES_NUMBER = 920;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
// function getColor() {
//   const i = Math.floor(Math.random() * colors.length);
//   return colors[i];
// }
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }