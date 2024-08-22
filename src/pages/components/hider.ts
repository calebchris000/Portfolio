export function circleToShow() {
  const existingHider = document.querySelector(".hider, .shower");
  if (existingHider) {
    document.body.removeChild(existingHider);
  }
  const hider = document.createElement("div");
  hider.classList.add("hider");
  const loader_animation = document.createElement("div");
  loader_animation.innerHTML = loader();
  hider.appendChild(loader_animation);
  document.body.appendChild(hider);

  const { innerWidth, innerHeight } = window;
  const maxDimension = Math.max(innerWidth, innerHeight);
  const circleSize = Math.sqrt(2) * maxDimension;
  hider.style.clipPath = `circle(${circleSize}px at top left)`;

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
  const existingHider = document.querySelector(".hider, .shower");
  if (existingHider) {
    document.body.removeChild(existingHider);
  }
  const hider = document.createElement("div");
  hider.classList.add("hider");
  const loader_animation = document.createElement("div");
  loader_animation.innerHTML = loader();
  hider.appendChild(loader_animation);
  document.body.appendChild(hider);

  const { innerWidth, innerHeight } = window;
  const maxDimension = Math.max(innerWidth, innerHeight);
  const circleSize = Math.sqrt(2) * maxDimension;
  hider.style.clipPath = `circle(${circleSize}px at top left)`;

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
    // document.body.removeChild(hider);
  }, 2000);
}

const loader = () => {
  return `
  <style>
    /* From Uiverse.io by SangeethSujith */
    .banter-loader {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 72px;
        height: 72px;
        transform: translate(-50%, -50%);
    }

    .banter-loader__box {
        float: left;
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }

    .banter-loader__box:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 7px;
    }

    .banter-loader__box:nth-child(3n) {
        margin-right: 0;
        margin-bottom: 6px;
    }

    .banter-loader__box:nth-child(1):before,
    .banter-loader__box:nth-child(4):before {
        margin-left: 26px;
    }

    .banter-loader__box:nth-child(3):before {
        margin-top: 52px;
    }

    .banter-loader__box:last-child {
        margin-bottom: 0;
    }

    @keyframes moveBox-1 {
        9.0909090909% {
            transform: translate(-26px, 0);
        }

        18.1818181818% {
            transform: translate(0px, 0);
        }

        27.2727272727% {
            transform: translate(0px, 0);
        }

        36.3636363636% {
            transform: translate(26px, 0);
        }

        45.4545454545% {
            transform: translate(26px, 26px);
        }

        54.5454545455% {
            transform: translate(26px, 26px);
        }

        63.6363636364% {
            transform: translate(26px, 26px);
        }

        72.7272727273% {
            transform: translate(26px, 0px);
        }

        81.8181818182% {
            transform: translate(0px, 0px);
        }

        90.9090909091% {
            transform: translate(-26px, 0px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(1) {
        animation: moveBox-1 4s infinite;
    }

    @keyframes moveBox-2 {
        9.0909090909% {
            transform: translate(0, 0);
        }

        18.1818181818% {
            transform: translate(26px, 0);
        }

        27.2727272727% {
            transform: translate(0px, 0);
        }

        36.3636363636% {
            transform: translate(26px, 0);
        }

        45.4545454545% {
            transform: translate(26px, 26px);
        }

        54.5454545455% {
            transform: translate(26px, 26px);
        }

        63.6363636364% {
            transform: translate(26px, 26px);
        }

        72.7272727273% {
            transform: translate(26px, 26px);
        }

        81.8181818182% {
            transform: translate(0px, 26px);
        }

        90.9090909091% {
            transform: translate(0px, 26px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(2) {
        animation: moveBox-2 4s infinite;
    }

    @keyframes moveBox-3 {
        9.0909090909% {
            transform: translate(-26px, 0);
        }

        18.1818181818% {
            transform: translate(-26px, 0);
        }

        27.2727272727% {
            transform: translate(0px, 0);
        }

        36.3636363636% {
            transform: translate(-26px, 0);
        }

        45.4545454545% {
            transform: translate(-26px, 0);
        }

        54.5454545455% {
            transform: translate(-26px, 0);
        }

        63.6363636364% {
            transform: translate(-26px, 0);
        }

        72.7272727273% {
            transform: translate(-26px, 0);
        }

        81.8181818182% {
            transform: translate(-26px, -26px);
        }

        90.9090909091% {
            transform: translate(0px, -26px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(3) {
        animation: moveBox-3 4s infinite;
    }

    @keyframes moveBox-4 {
        9.0909090909% {
            transform: translate(-26px, 0);
        }

        18.1818181818% {
            transform: translate(-26px, 0);
        }

        27.2727272727% {
            transform: translate(-26px, -26px);
        }

        36.3636363636% {
            transform: translate(0px, -26px);
        }

        45.4545454545% {
            transform: translate(0px, 0px);
        }

        54.5454545455% {
            transform: translate(0px, -26px);
        }

        63.6363636364% {
            transform: translate(0px, -26px);
        }

        72.7272727273% {
            transform: translate(0px, -26px);
        }

        81.8181818182% {
            transform: translate(-26px, -26px);
        }

        90.9090909091% {
            transform: translate(-26px, 0px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(4) {
        animation: moveBox-4 4s infinite;
    }

    @keyframes moveBox-5 {
        9.0909090909% {
            transform: translate(0, 0);
        }

        18.1818181818% {
            transform: translate(0, 0);
        }

        27.2727272727% {
            transform: translate(0, 0);
        }

        36.3636363636% {
            transform: translate(26px, 0);
        }

        45.4545454545% {
            transform: translate(26px, 0);
        }

        54.5454545455% {
            transform: translate(26px, 0);
        }

        63.6363636364% {
            transform: translate(26px, 0);
        }

        72.7272727273% {
            transform: translate(26px, 0);
        }

        81.8181818182% {
            transform: translate(26px, -26px);
        }

        90.9090909091% {
            transform: translate(0px, -26px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(5) {
        animation: moveBox-5 4s infinite;
    }

    @keyframes moveBox-6 {
        9.0909090909% {
            transform: translate(0, 0);
        }

        18.1818181818% {
            transform: translate(-26px, 0);
        }

        27.2727272727% {
            transform: translate(-26px, 0);
        }

        36.3636363636% {
            transform: translate(0px, 0);
        }

        45.4545454545% {
            transform: translate(0px, 0);
        }

        54.5454545455% {
            transform: translate(0px, 0);
        }

        63.6363636364% {
            transform: translate(0px, 0);
        }

        72.7272727273% {
            transform: translate(0px, 26px);
        }

        81.8181818182% {
            transform: translate(-26px, 26px);
        }

        90.9090909091% {
            transform: translate(-26px, 0px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(6) {
        animation: moveBox-6 4s infinite;
    }

    @keyframes moveBox-7 {
        9.0909090909% {
            transform: translate(26px, 0);
        }

        18.1818181818% {
            transform: translate(26px, 0);
        }

        27.2727272727% {
            transform: translate(26px, 0);
        }

        36.3636363636% {
            transform: translate(0px, 0);
        }

        45.4545454545% {
            transform: translate(0px, -26px);
        }

        54.5454545455% {
            transform: translate(26px, -26px);
        }

        63.6363636364% {
            transform: translate(0px, -26px);
        }

        72.7272727273% {
            transform: translate(0px, -26px);
        }

        81.8181818182% {
            transform: translate(0px, 0px);
        }

        90.9090909091% {
            transform: translate(26px, 0px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(7) {
        animation: moveBox-7 4s infinite;
    }

    @keyframes moveBox-8 {
        9.0909090909% {
            transform: translate(0, 0);
        }

        18.1818181818% {
            transform: translate(-26px, 0);
        }

        27.2727272727% {
            transform: translate(-26px, -26px);
        }

        36.3636363636% {
            transform: translate(0px, -26px);
        }

        45.4545454545% {
            transform: translate(0px, -26px);
        }

        54.5454545455% {
            transform: translate(0px, -26px);
        }

        63.6363636364% {
            transform: translate(0px, -26px);
        }

        72.7272727273% {
            transform: translate(0px, -26px);
        }

        81.8181818182% {
            transform: translate(26px, -26px);
        }

        90.9090909091% {
            transform: translate(26px, 0px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .banter-loader__box:nth-child(8) {
        animation: moveBox-8 4s infinite;
    }

    @keyframes moveBox-9 {
        9.0909090909% {
            transform: translate(-26px, 0);
        }

        18.1818181818% {
            transform: translate(-26px, 0);
        }

        27.2727272727% {
            transform: translate(0px, 0);
        }

        36.3636363636% {
            transform: translate(-26px, 0);
        }

        45.4545454545% {
            transform: translate(0px, 0);
        }

        54.5454545455% {
            transform: translate(0px, 0);
        }

        63.6363636364% {
            transform: translate(-26px, 0);
        }

        72.7272727273% {
            transform: translate(-26px, 0);
        }

        81.8181818182% {
            transform: translate(-52px, 0);
        }

        90.9090909091% {
            transform: translate(-26px, 0);
        }

        100% {
            transform: translate(0px, 0);
        }
    }

    .banter-loader__box:nth-child(9) {
        animation: moveBox-9 4s infinite;
    }
  </style>

  <div class="banter-loader">
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
  </div>

  `;
};
