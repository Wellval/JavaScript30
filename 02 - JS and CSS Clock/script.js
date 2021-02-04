function setDate() {
    let date = new Date();
    let seconds = date.getSeconds();
    let secondHand = document.querySelector('.second-hand');
    let secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    let mins = date.getMinutes();
    let minHand = document.querySelector('.min-hand');
    let minDegree = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    let hours = date.getHours();
    let hourHand = document.querySelector('.hour-hand');
    let hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    let hands = document.querySelectorAll('.hand');
    for (let hand of hands) {
    if (secondDegree === 90) {
        hand.style.transition = 'none';
    }
}
}

setInterval(setDate, 1000);