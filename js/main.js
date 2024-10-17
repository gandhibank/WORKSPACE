// root (html and body) start
let mainHeight = window.outerHeight;
let mainwidth = window.outerWidth;
let sparkle = [];
let myBody = document.body;
let mainContent = document.getElementById("mainContent");
setTimeout(() => {
  mainContent.style.display = "block";
}, 3495);

// sparkle dots
for (let i = 0; i < 35; i++) {
  let elem = document.createElement("span");
  elem.classList.add("sparkle");
  document.body.appendChild(elem);
  sparkle[i] = elem;
}

for (let i = 0; i < sparkle.length; i++) {
  let randomTop = Math.floor(Math.random() * mainHeight + 1);
  let randomLeft = Math.floor(Math.random() * mainwidth + 1);
  let randomhue = Math.floor(Math.random() * 360 + 1);
  sparkle[i].style.top = `${randomTop}px`;
  sparkle[i].style.left = `${randomLeft}px`;
  sparkle[i].style.backgroundColor = `hsl(${randomhue}, 50%, 60%)`;
  sparkle[i].style.boxShadow = `0 0 5px gray`;
}

window.onscroll = function (event) {
  for (let i = 0; i < sparkle.length; i++) {
    let randomTop = Math.floor(Math.random() * mainHeight + 1);
    let randomLeft = Math.floor(Math.random() * mainwidth + 1);
    sparkle[i].style.top = `${randomTop}px`;
    sparkle[i].style.left = `${randomLeft}px`;
  }
};

// randomly pick spark
let spinner = document.createElement("div");
spinner.setAttribute("class", `spark`);
for (let e = 1; e <= 8; e++) {
  let wing = document.createElement("div");
  wing.setAttribute("class", `stick stick${e}`);
  spinner.appendChild(wing);
}
// sparkle animation
let sparkleSpin = setInterval(() => {
  let randowSparkle = Math.floor(Math.random() * sparkle.length);
  if (spinner.parentNode) {
    spinner.parentNode.removeChild(spinner);
  }
  sparkle[randowSparkle].appendChild(spinner);
}, 2000);

let modeToggle = document.getElementById("modeCheck");
let homeAnchor = document.getElementById("myName");
let modeText = document.getElementById("modeText");
modeToggle.addEventListener("click", function (e) {
  if (modeToggle.checked) {
    myBody.className = "darkMode";
    modeText.innerHTML = "Light";
  } else {
    myBody.className = "";
    modeText.innerHTML = "Dark";
  }
});
homeAnchor.addEventListener("click", function (ev) {
  ev.preventDefault();
});

// navbar start
let navbar = document.getElementById("navbar");
// navbar ends
// about me svg
let aboutcontainer = document.getElementById("aboutcontainer");
let prjectContainer = document.getElementById("prjectContainer");
let contactContainer = document.getElementById("contactContainer");
let toTopIcon = document.getElementById("toTopIcon");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
window.addEventListener("scroll", function (e) {
  if (window.scrollY >= aboutcontainer.offsetTop - 100) {
    layer2.children[1].classList.add("extendStroke");
  } else {
    layer2.children[1].classList.remove("extendStroke");
  }
  if (window.scrollY >= prjectContainer.offsetTop - 100) {
    layer3.children[1].classList.add("circleSvg");
  } else {
    layer3.children[1].classList.remove("circleSvg");
  }
  if (window.scrollY >= contactContainer.offsetTop - 100) {
    layer4.children[1].classList.add("curvegrow");
  } else {
    layer4.children[1].classList.remove("curvegrow");
  }
  if (window.scrollY >= 100) {
    toTopIcon.style.display = "block";
  } else {
    toTopIcon.style.display = "none";
  }
});
toTopIcon.addEventListener("click", function (ev) {
  window.scrollTo(0, 0);
});
// footer
// greeting
let greeting = document.getElementById("greeting");
let daynow = new Date();
let daynum = daynow.getDay();
let dayText = daynow.toLocaleDateString("en-IN", { weekday: "long" });
console.log(dayText);
let yearText = daynow.getYear();
let message;
if (daynum === 0 || daynum === 6) {
  message = `Happy Weekend 😎`;
} else {
  message = `Have a great ${dayText} 😎`;
}
greeting.innerHTML = message;
// root (html and body) ends---------------

// overlayer js ------------
let overlayer = document.getElementById("overlayBanner");
let ghost = document.createElement("div");
let ghostEyeLeft = document.createElement("div");
let ghostEyeRight = document.createElement("div");
ghost.setAttribute("class", "ghost");
ghostEyeLeft.setAttribute("class", "ghostEyeLeft");
ghostEyeRight.setAttribute("class", "ghostEyeRight");
ghost.appendChild(ghostEyeLeft);
ghost.appendChild(ghostEyeRight);
let ghostArray = [];
let ghostSpreadLength = window.innerWidth;
for (let i = 0, j = 0; i < ghostSpreadLength; i += 100, j++) {
  let ghostClone = ghost.cloneNode(true);
  ghostArray[j] = ghostClone;
  ghostArray[j].style.left = `${i}px`;
  ghostArray[j].style.bottom = `-100px`;
  overlayer.appendChild(ghostArray[j]);
}
let randomPrevious = 0;
let sec = 700;
let ghostintervalTime = 0;
let ghostEntry = setInterval(() => {
  let random = Math.floor(Math.random() * ghostArray.length + 1);
  ghostArray[random].style.animation = `ghostloop 0.1s linear both alternate`;
  mainHeight = window.outerHeight;
  mainwidth = window.outerWidth;
  ghostintervalTime = ghostintervalTime + sec;
  if (ghostintervalTime >= 3000) {
    clearInterval(ghostEntry);
  }
}, sec);

// overlayers ends -----------
