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

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  tooltip.style.left = `${clientX + 60}px`;
  tooltip.style.top = `${clientY - 20}px`;

  const tooltip_shown = JSON.parse(
    localStorage.getItem("tooltip_shown") ?? "0",
  );

  if (typeof tooltip_shown === "boolean" && !tooltip_shown) {
    setTimeout(() => {
      tooltip.style.pointerEvents = "auto";
      tooltip.style.opacity = "1";
    }, 2000);
  }
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  tooltip.classList.add("tooltip_hide");
  localStorage.setItem("tooltip_shown", JSON.stringify(true));
});
