// aside

const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// dark-light

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/aside/dark.svg";
  } else {
    this.firstElementChild.src = "images/aside/light.svg";
  }
  document.body.classList.toggle("light");
});