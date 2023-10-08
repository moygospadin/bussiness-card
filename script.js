//Movement Animation Variables:
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const socialList = document.querySelector(".social-list");

//Movement Animation Event:
container.addEventListener("mousemove", (event) => {
  // console.log(event.pageX, event.pageY);
  let xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In:
container.addEventListener("mouseenter", (event) => {
  card.style.transition = "all 0.2s ease";

  socialList.style.transform = "translateZ(100px)";
});

//Animate Out:
container.addEventListener("mouseleave", (event) => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all 0.5s ease";

  socialList.style.transform = "translateZ(0px)";
});

const UFO_TEMPLATE = `
<div class="container-ufo">
  <div class="spaceship">
    <div class="robot">
      <div id="half">
        <div id="brain"></div>
      </div>
      <div id="head">
        <span id="lc"></span><span id="le"></span><span id="re"></span>
        <div id="mouth"></div>
        <span id="rc"></span>
      </div>
      <div id="foot"></div>
      <div id="leg-1"></div>
      <div id="leg-2"></div>
    </div>
    <div class="spaceship_top"></div>
    <div class="spaceship_middle">
      <div class="spaceship_balls_1"></div>
      <div class="spaceship_balls_2"></div>
      <div class="spaceship_balls_3"></div>
      <div class="spaceship_balls_4"></div>
      <div class="spaceship_balls_5"></div>
    </div>
    <div class="spaceship_bottom">
      <div class="abduct_hole1"></div>
      <div class="abduct_hole2"></div>
      <div class="abduct_hole3"></div>
      <div class="abduct_hole4"></div>
      <div class="abduct_hole5"></div>
    </div>
  </div>
</div>
`;

body.insertAdjacentHTML("afterbegin", UFO_TEMPLATE);
const containerUfo = document.querySelector(".container-ufo");
setTimeout(() => containerUfo.classList.add('animation-fade-dissapear'), 5000);
setTimeout(() => containerUfo.remove(), 7000);