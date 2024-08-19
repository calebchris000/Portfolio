const parent = document.createElement("div");
const blob = document.createElement("div");
const blobBlur = document.createElement("div");

parent.classList.add("blob_parent");
blob.classList.add("blob");
blobBlur.classList.add("blob_blur");

parent.appendChild(blob);
parent.appendChild(blobBlur);
document.body.appendChild(parent);

let mouseTimeout: number | null = null;

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const parentRect = parent.getBoundingClientRect();
  const parentWidth = parentRect.width;
  const parentHeight = parentRect.height;

  if (mouseTimeout !== null) {
    clearTimeout(mouseTimeout);
  }

  mouseTimeout = setTimeout(() => {
    parent.style.left = `${clientX - parentWidth / 2}px`;
    parent.style.top = `${clientY - parentHeight / 2}px`;
  }, 200);
});

window.addEventListener("mousedown", (e) => {
  const randomGradients = [
    "linear-gradient(to right, red, orange)",
    "linear-gradient(to right, #ff9966, #ff5e62)",
    "linear-gradient(to bottom, #00c6ff, #0072ff)",
    "linear-gradient(45deg, #8e2de2, #4a00e0)",
    "linear-gradient(to left, #f857a6, #ff5858)",
    "linear-gradient(to top, #43cea2, #185a9d)",
    "linear-gradient(135deg, #ff00cc, #333399)",
    "linear-gradient(to right, #ff512f, #dd2476)",
    "linear-gradient(to bottom, #4facfe, #00f2fe)",
    "linear-gradient(45deg, #7f00ff, #e100ff)",
    "linear-gradient(to left, #11998e, #38ef7d)",
  ];
  const randomGradient =
    randomGradients[Math.floor(Math.random() * randomGradients.length)];
  blob.style.background = `${randomGradient}`;
});
