import { circleToHide } from "@src/pages/components/hider";

function handleDownloadResume() {
  const link = document.createElement("a");
  link.href =
    "https://raw.githubusercontent.com/calebchris000/Portfolio/main/src/lib/resume.pdf";
  link.download = "Resume - Caleb Nwaizu.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleKeyPress(e: KeyboardEvent) {
  e.preventDefault();

  const { key } = e;
  if (key.toUpperCase() === "R") {
    handleDownloadResume();
  } else if (key.toUpperCase() === "H") {
    if (window.location.pathname !== "/home") {
      circleToHide();

      setTimeout(() => {
        window.location.href = "/home";
      }, 500);
    }
  } else if (key.toUpperCase() === "W") {
    circleToHide();
    setTimeout(() => {
      window.location.href = "/projects";
    }, 500);
  } else if (key.toUpperCase() === "C") {
    circleToHide();
    setTimeout(() => {
      window.location.href = "/contact";
    }, 500);
  }
}

if (window.location.pathname !== "/contact") {
  window.addEventListener("keypress", handleKeyPress);
}
