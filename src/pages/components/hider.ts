export function circleToShow() {
  const hider = document.createElement("div");
  hider.classList.add("hider");
  document.body.appendChild(hider);

  const { innerWidth, innerHeight } = window;
  const maxDimension = Math.max(innerWidth, innerHeight);
  const circleSize = Math.sqrt(2) * maxDimension;

  hider.animate(
    {
      clipPath: [
        `circle(${circleSize}px at top left)`,
        "circle(0px at top left)",
      ],
    },
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards",
    },
  );

  setTimeout(() => {
    document.body.removeChild(hider);
  }, 2000);
}

export function circleToHide() {
  const hider = document.createElement("div");
  hider.classList.add("hider");
  document.body.appendChild(hider);

  const { innerWidth, innerHeight } = window;
  const maxDimension = Math.max(innerWidth, innerHeight);
  const circleSize = Math.sqrt(2) * maxDimension;

  hider.animate(
    {
      clipPath: [
        `circle(0px at top left)`,
        `circle(${circleSize}px at top left)`,
      ],
    },
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards",
    },
  );

  setTimeout(() => {
    document.body.removeChild(hider);
  }, 2000);
}
