const cursor = document.createElement("div");
cursor.classList.add("cursor");

document.body.appendChild(cursor);

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
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  cursor.style.background =
    cursor.style.background === "white" ? "none" : "white";
});
