const cursor = document.createElement("div");
cursor.classList.add("cursor");

document.body.appendChild(cursor);

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.textContent = "Right click for options";
tooltip.innerHTML = `
  <svg
      stroke="white"
      fill="none"
      width="32"
      height="32"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      ><path d="M7 14h-4v-4"></path><path
          d="M21 12c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2"
      ></path></svg
  >

  ${tooltip.textContent}
`;
document.body.appendChild(tooltip);

if (!localStorage.getItem("tooltip_shown")) {
  localStorage.setItem("tooltip_shown", JSON.stringify(false));
}

document.addEventListener("mousedown", (e) => {
  cursor.style.scale = "0.8";
});

document.addEventListener("mouseup", (e) => {
  cursor.style.scale = "1";
});

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const cursorRect = cursor.getBoundingClientRect();
  const cursorWidth = cursorRect.width;
  const cursorHeight = cursorRect.height;
  cursor.style.left = `${clientX - cursorWidth / 2}px`;
  cursor.style.top = `${clientY - cursorHeight / 2}px`;
  tooltip.style.left = `${clientX + 60}px`;
  tooltip.style.top = `${clientY - 20}px`;

  const target = e.target as HTMLElement;

  if (!target) return;

  if (target.tagName === "A" || target.tagName === "BUTTON") {
    cursor.style.borderColor = "#4a61f5";
    cursor.style.scale = "1.2";
  } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    cursor.style.borderColor = "#28a745";
    cursor.style.scale = "1.2";
  } else if (target.tagName === "SELECT") {
    cursor.style.borderColor = "#ffc107";
    cursor.style.scale = "1.2";
  } else if (target.classList.contains("interactive")) {
    cursor.style.borderColor = "#dc3545";
    cursor.style.scale = "1.2";
  } else {
    cursor.style.borderColor = "initial";
    cursor.style.scale = "1";
  }

  const tooltip_shown = JSON.parse(
    localStorage.getItem("tooltip_shown") ?? "0",
  );

  if (typeof tooltip_shown === "boolean" && !tooltip_shown) {
    setTimeout(() => {
      tooltip.style.pointerEvents = "auto";
      tooltip.style.opacity = "1";
    }, 2000);
    setTimeout(() => {
      tooltip.style.pointerEvents = "none";
      tooltip.style.opacity = "0";
      localStorage.setItem("tooltip_shown", JSON.stringify(true));
    }, 6000);
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  cursor.style.background =
    cursor.style.background === "white" ? "none" : "white";
});
