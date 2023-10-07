//Movement Animation Variables:
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const socialList = document.querySelector('.social-list');

//Movement Animation Event:
container.addEventListener('mousemove', (event) => {
    // console.log(event.pageX, event.pageY);
    let xAxis = (window.innerWidth / 2 - event.pageX) /15;
    let yAxis = (window.innerHeight / 2 - event.pageY) /15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In:
container.addEventListener('mouseenter', (event) => {
    card.style.transition = 'all 0.2s ease';

    socialList.style.transform = "translateZ(100px)";
})

//Animate Out:
container.addEventListener('mouseleave', (event) => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    card.style.transition = 'all 0.5s ease';

    socialList.style.transform = "translateZ(0px)";
})