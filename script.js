const joc=document.getElementById('joc');
const btnReset=document.getElementById('btnReset');
genereazaTabla();
function genereazaTabla(){
    let l,c;
    for(let i=0;i<9;i++){
        let e=document.createElement('div');
        l=Math.round((i+2)/3)-1; 
        c=Math.round(i%3);
        e.setAttribute('l',l);
        e.setAttribute('c',c);
        joc.appendChild(e);
    
    }
}

// https://www.youtube.com/watch?v=iw8TH9ZgtGM&list=PLTwWgdVvyeRodZrDNJDtMpu81xuXNQpAd&index=26
