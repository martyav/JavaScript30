
function playSound(event) {
    const code = event.keyCode;
    const uiButton = document.querySelector(`.key[data-key="${code}"]`);    
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    
    console.log(uiButton);
    
    try {
        audio.currentTime = 0; // rewind on every press
        audio.play();
        uiButton.classList.add('playing');
    }
    catch (error) {
        const key = event.key;
        console.log(`${error}.\nProperty is attached to null because there is no available audio for a press from key ${key}, with key code ${code}`);
    }
}

function removeTransition(event) {
    if (event.target.classList.contains('playing')) {
        event.target.classList.remove('playing'); // we could use .toggle, but that would also add/remove/add the class if the button registers the key as being held down
    } 
}

function setUpInteractions() {
    console.log("!!")
    const keys = Array.from(document.querySelectorAll('.key'));
    window.addEventListener('keydown', playSound);
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

window.onload = setUpInteractions;