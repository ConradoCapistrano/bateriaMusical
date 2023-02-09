// uma forma de 'limpar' o codigo.
const qS = (el)=>document.querySelector(el);
const qSa = (el)=>document.querySelectorAll(el);
let clickArray = qSa('.key');

document.body.addEventListener('keyup', (event)=>{
    playsound(event.code.toLowerCase());
});

qS('.composer button').addEventListener('click', ()=>{
    let song = qS('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

clickArray.forEach((element)=> {
    element.addEventListener('click', ()=>{
        let clickKey = element.getAttribute('data-key')
        playsound(clickKey);
    })
});

function playsound(sound) {
    let audioElement = qS(`#s_${sound}`);
    let keyElement = qS(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playsound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
};

