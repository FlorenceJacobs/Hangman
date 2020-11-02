const afficherLettres = (lettresMapping) => {
    const lettresHTML = lettresMapping.map((lettreMap)=>{
        if (lettreMap.isChosen === false) {
            return `<li><button class="h4 btn btn-outline-light">${lettreMap.lettre}</button></li>`;
        } else {
            return `<li><button class="dejaChoisi h4 btn btn-outline-light">${lettreMap.lettre}</button></li>`;
        }
    })
    els.letterChoice.querySelector('ul').innerHTML = lettresHTML.join("");
};

const afficherMot = (motsMapping) => {
    const motHTML = motsMapping.map((lettreMap) => {
        if (lettreMap.isVisible === true) {
            return `<li class="h3">${lettreMap.lettre}</li>`;
        }else {
            return `<li class="h3">_</li>`;
        };
    });
    els.wordToFind.querySelector('ul').innerHTML = motHTML.join("");
};

const afficherScore = () => {
    els.score.innerHTML = `<span class="h3">${scoreCount} / ${scoreMax}</span>`;
};

const getLettresMapping = (lettres) => {
    const lettresMapping = lettres.map((lettre) => {
        return {
            lettre : lettre,
            isChosen : false
        };
    });
    return lettresMapping;
};

const getMotsMapping = (mot) => {
    const arrayMot = mot.split("");
    const motsMapping = arrayMot.map((lettre,i)=> {
        let isVisible = false;
        //Premiere et derniere lettres visibles
        //if (i==0 || i==arrayMot.length-1){
        //    isVisible = true;
        //}
        return {
            lettre : lettre,
            isVisible : isVisible
        };
    });
    return motsMapping;
};

const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

const obtenirLettres = () => {
    const lettres = [];
    for (let i=65; i<=90; i++){
        lettres.push(String.fromCharCode(i));
    };
    return lettres;
};

const selectionMot = () => {
    const randomIndex = getRandomInt(0,mots.length-1);
    return mots[randomIndex];
};

const endGame = () => {
    motsMapping.forEach((lettreMap) => {
        lettreMap.isVisible = true;
        afficherMot(motsMapping);
    })
    document.querySelector('body').style.backgroundColor = "rgb(77, 21, 99)";
    els.letterChoice.innerHTML = `<h1>Pe[n|r]du ! :o(</h1>`;
    els.recharger.innerHTML = `<button onClick="window.location.reload();" id="rejouer" class="btn btn-outline-light mt-5">Rejouer&nbsp;!</button>`
};

const winGame = () => {
    els.letterChoice.innerHTML = `<h1>&nbsp;Bravo, le pendu ne l'est plus&nbsp;!&nbsp;</h1>`;
    els.recharger.innerHTML = `<button onClick="window.location.reload();" id="rejouer" class="btn btn-outline-light btn-large">Rejouer&nbsp;!</button>`;
    let suppCanvas = document.getElementById("canvasHangman");
    suppCanvas.remove();
    let suppScore = document.getElementById("score");
    suppScore.remove();
    let imgWin = document.createElement("img");
    imgWin.src = "./assets/img/winGame.jpeg";
    let blockImg = document.getElementById("imageWinner");
    blockImg.appendChild(imgWin);
};  
