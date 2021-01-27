const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const gradients = [
  "linear-gradient( rgb(50, 50, 255), white 15%,  rgb(50, 50, 255) 85%)",
];

const options = {
  threshold: 0.6,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  // Be aware that your callback is executed on the main thread.
  // It should operate as quickly as possible; if anything time-consuming needs to be done, use Window.requestIdleCallback().
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.background = gradients[0];
    }
  });
}


sections.forEach((section) => {
  observer.observe(section);
});
