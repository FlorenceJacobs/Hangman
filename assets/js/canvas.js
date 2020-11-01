let canvas = function () {
    myCanvasHangman = document.getElementById("canvasHangman");
    ctx = myCanvasHangman.getContext("2d");
    //Potence
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(15, 380, 150, 8);
    ctx.fillRect(40, 30, 8, 355);
    ctx.fillRect(15, 30, 170, 8);
    ctx.fillRect(178, 30, 8, 30);
};

let tete = function() {
    myCanvasHangman = document.getElementById("canvasHangman");
    ctx = myCanvasHangman.getContext("2d");
    //Tete
    ctx.beginPath();
    ctx.arc(185, 260, 20, 0, 2 * Math.PI);
    ctx.stroke();
};

let cheveux = function() {
    //Cheveux
    tracer(169, 272, 161, 290);
    tracer(174, 277, 171, 295);
    tracer(181, 280, 180, 299);
    tracer(189, 280, 190, 297);
    tracer(196, 278, 198, 295);
    tracer(202, 272, 205, 291);
};
   
let oval = function(x, y, rayonX, rayonY, rotation, angleDebut, angleFin) {
    myCanvasHangman = document.getElementById("canvasHangman");
    ctx = myCanvasHangman.getContext("2d");
    //ellipse - pieds
    ctx.beginPath();
    ctx.ellipse(x, y, rayonX, rayonY, rotation, angleDebut, angleFin);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
};

let tracer = function(initX, initY, endX, endY) {
    ctx.moveTo(initX, initY);
    ctx.lineTo(endX, endY);
    ctx.lineCap = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

let jambeGauche = function() {
    tracer(182, 66, 190, 149);
    oval(189, 58, 4, 15, 45 * Math.PI/150, 0, 2 * Math.PI);
};

let jambeDroite = function() {
    tracer(190, 149, 241, 170);
    tracer(241, 170, 270, 142);
    oval(278, 142, 4, 15, 45 * Math.PI/70, 0, 2 * Math.PI);
};

let corps = function() {
    oval(183, 194, 27, 45, 45 * Math.PI/43, 0, 2 * Math.PI);
}

let brasGauche = function() {
    tracer(162, 230, 120, 265);
};

let brasDroit = function() {
    tracer(200, 224, 252, 220);
};

penduArray = [jambeGauche, jambeDroite, corps, brasGauche, brasDroit, tete, cheveux];

let pendrelependu = function(scoreCount) {
    let trait = scoreCount-1;
    penduArray[trait]();
};