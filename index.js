var num = document.querySelectorAll(".drum").length;

for (let i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    makeSound(this.innerHTML);
    animateButtons(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animateButtons(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      alert("This is key is not functional.");
      break;
  }
}

function animateButtons(key) {
  var butt = document.querySelector("." + key);
  butt.classList.add("pressed");

  setTimeout(function () {
    butt.classList.remove("pressed");
  }, 150);
}
