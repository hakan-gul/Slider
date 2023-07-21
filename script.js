const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll("img");
let currentImg = 1;
let timeout;

prevButton.addEventListener("click", () => {
  clearTimeout(timeout);
  currentImg--;
  updateImg();
});

nextButton.addEventListener("click", () => {
  clearTimeout(timeout);
  currentImg++;
  updateImg();
});

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  slider.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);
}
updateImg();
