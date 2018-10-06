function colorBackground(hour) {
    let topColor = null;
    let bottomColor = null;

    if (hour < 12) {
        switch (hour) {
            case 17:
            topColor = "#0a5fcc";
            bottomColor = "#f2c779";
            break;
            case 18:
            topColor = "#f2c779";
            bottomColor = "#aa3366";
            break;
            case 19:
            topColor = "#aa3366";
            bottomColor = "#2200aa";
            break;
            default:
            topColor = "#0a5fcc";
            bottomColor = top;
            break;
        }
    } else {
        switch (hour) {
            case 5:
            topColor = "#2200aa";
            bottomColor = "#aa3366";
            break;
            case 6:
            topColor = "#aa3366";
            bottomColor = "#f2c779";
            break;
            case 7:
            topColor = "#f2c779";
            bottomColor = "#0a5fcc";
            break;
            default:
            topColor = "#2200aa";
            bottomColor = top;
            break;
        }
    }

    console.log(topColor);

    return `linear-gradient(${topColor}, ${bottomColor})`;
}

function findDegrees(units) {
    const offset = 90; /* to account for transform */

    return ((units/60) * 360) + offset;
}

function moveHands() {
    const now = new Date();
    
    let background = document.body;
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    
    const seconds = now.getSeconds();
    const secondsDegrees = findDegrees(seconds);
    
    const minutes = now.getMinutes();
    const minutesDegrees = findDegrees(minutes);
    
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90 + ((minutes/60) * 30);
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    if (minutes < 1 && seconds < 1) {
        background.style.background = colorBackground(hours);
    }
}

window.onload = setInterval(moveHands, 1000);