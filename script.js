const joc = document.getElementById('joc');
const btnReset = document.getElementById('btnReset');
let jucator = "X", mutari = 0;
let tabla = [[null, null, null],
[null, null, null],
[null, null, null]];

genereazaTabla();
joc.addEventListener('click', (e) => {
    const th = e.target;
    let l = parseInt(e.target.getAttribute('l'));
    let c = parseInt(e.target.getAttribute('c'));
    if (tabla[l][c])
        return;
    tabla[l][c] = jucator;
    tg.innerHtml = jucator;
    mutari++;
    if (gameOver(l, c, jucator)) {
        alert(`Jucatorul ${jucator} a castigat!`);
        btnReset.disabled = false;
    } else if (mutari == 9) {
            alert("Remiza!");
            btnReset.disabled = false;
        } else {
            schimbaJucator();
        }
    });
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
