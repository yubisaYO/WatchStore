let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
});

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const boxEl = document.querySelectorAll(".box");
const mainImageEl = document.querySelector(".hero-main img");
const color = ["White", "Black", "Pink"];

let colorImageEl = () => {
  for (let i = 0; i < color.length; i++) {
    if (mainImageEl.attributes.src.value.includes(color[i])) return color[i];
  }
};

boxEl.forEach((box) => {
  box.classList.remove("active");
  box.onclick = () => {
    console.log(box);
    // mainImageEl.style.opacity = 1;
    const currentSrc = mainImageEl.getAttribute("src");
    mainImageEl.style.opacity = 0;
    setTimeout(() => {
      mainImageEl.style.opacity = 1;
      mainImageEl.setAttribute(
        "src",
        box.childNodes[5].attributes[0].textContent
      );
    }, 300);

    boxEl.forEach((clearbox) => {
      clearbox.classList.remove("active");
    });
    console.log(mainImageEl.getAttribute("src"));
    box.classList.add("active");
  };
});
