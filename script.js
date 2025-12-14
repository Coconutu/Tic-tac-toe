const joc = document.getElementById('joc');
const btnReset = document.getElementById('btnReset');
genereazaTabla();

function genereazaTabla() {
    
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            let e = document.createElement('div');
            e.setAttribute('l', l);
            e.setAttribute('c', c);
            joc.appendChild(e);
        }
    }
}
// https://www.youtube.com/watch?v=iw8TH9ZgtGM&list=PLTwWgdVvyeRodZrDNJDtMpu81xuXNQpAd&index=26
