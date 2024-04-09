const button = document.getElementById("button");
const dice = document.getElementById("dice");
button.addEventListener('click', (e) => {
    const choice = Math.ceil(6 * Math.random());
    
    const anim = `roll-${choice}`;
    dice.style.animationName = anim;
    setTimeout(() => { dice.style.animationName = 'rotation'}, 3000);
});

