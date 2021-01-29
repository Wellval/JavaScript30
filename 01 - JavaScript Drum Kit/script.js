window.addEventListener('keydown', (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
for (let key of keys) {
    key.addEventListener('transitionend', removeTransition);
}