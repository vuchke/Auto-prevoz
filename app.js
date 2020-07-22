// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.background = "#222222a8";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.background = "#64646431";
    document.getElementById("logo").style.fontSize = "18px";
  }
}

// Active Navbar
const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const options = {
  threshold: 0.4,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;

    const activeAnchor = document.querySelector(`[data-page=${className}]`);

    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,

      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

// //////////////////////////////// Mobile Nav     ///////////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    if (link.classList.contains("fade")) {
      link.classList.remove("fade");
      
    } else {
      link.classList.add("fade");
    }

  //  
    // link.addEventListener("click", () => {
    //   navLinks.classList.remove("open");
    // });
  });
});

// /////////////////////////////Panels
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

///////////////////////////            NEON              ////////////////////////////
const text = document.querySelector(".neonOff");

//rasparcava text na slova i pravi novi niz
const splitText = text.textContent.split("");

let index = 0;
//prazni sastav texta
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  //vraca svako slovo okruzeno sa spanom
  text.innerHTML += `<span>${splitText[i]}</span>`;
}

setInterval(() => {
  //ako je index jednak duzini niza slova znaci da je dosao do kraja
  if (index === splitText.length) {
    //vraca index na nula i skida neonOn klasu sa svih spanova
    index = 0;
    const letters = document.querySelectorAll(".neonOff span");

    letters.forEach((item) => {
      item.classList.remove("neonOn");
    });
  } else {
    //ide redom i dodaje klasu neonOn
    const letter = document.querySelectorAll(".neonOff span")[index];
    letter.classList.add("neonOn");
    index++;
  }
}, 100);

//Datepicker
$.datetimepicker.setLocale("sr-YU");
jQuery("#datetimepicker").datetimepicker({
  theme: "dark",
  step: 30,
  format: "d/M/Y H:i",
  minDate: 0,
  dayOfWeekStart: 1,
});
