let cardflipsound = document.getElementById("cardflip");
let keysound = document.getElementById("key");
let bongsound = document.getElementById("bong");
let winsound = document.getElementById("win");

contador = 0;
/*checar se o player clicou na primeira img*/
let checkgates2 = false;
let checkjobs2 = false;
let checkallen2 = false;
let checkdaniel2 = false;
let checkjohh2 = false;
let checkmicro2 = false;
let checkbalmer2 = false;
let checkwosniak2 = false;

let ganhador1 = 0;
let ganhador2 = 0;
let checkallgates = 0;
let checkalljobs = 0;

let contadorgates = 0;
let contadorgates2 = 0;
let contadorjobs = 0;
let contadorjobs2 = 0;
let seachimgates = null;
let seachimgbalmer = null;
let balmerplan = [];
let wosniakplan = [];
let johhplan = [];
let jobsplan = [];
let allenplan = [];
let microsoftplan = [];
let danielplan = [];
let gatesplan = [];
let checkbalmer;
let checkjohh;
let checkjobs;
let checkw;
let checkallen;
let checkmicro;
let checkdaniel;
let checkgates;

let metodogates = "oi";
let btn = document.getElementById("btn-embaralhas");
let qiGates = null;
let qiJobs = null;
let qiJohh = null;
let qiPaul = null;
let qidaniel = null;
let qibalmer = null;
let qiwosniak = 0;
let ataquemicrosoft = null;

/* parte de cima*/
let qiGates2 = null;
let qiJobs2 = null;
let qiJohh2 = null;
let qiPaul2 = null;
let qidaniel2 = null;
let qibalmer2 = null;
let qiwosniak2 = null;
let ataquemicrosoft2 = null;

/*div2*/

let img5 = document.createElement("img");
img5.id = "image5";
let img6 = document.createElement("img");
img6.id = "image6";
let img7 = document.createElement("img");
img7.id = "image7";
let img8 = document.createElement("img");
img8.id = "image8";
let div2 = document.createElement("div");
div2.id = "cu";
div2.appendChild(img5);
div2.appendChild(img6);
div2.appendChild(img7);
div2.appendChild(img8);

/*player2*/

/*player1*/
var img1 = document.createElement("img");
img1.id = "image1";
let img2 = document.createElement("img");
img2.id = "image2";
let img3 = document.createElement("img");
img3.id = "image3";
let img4 = document.createElement("img");
img4.id = "image4";
var div = document.createElement("div");
div.id = "all";
div.appendChild(img1);
div.appendChild(img2);
div.appendChild(img3);
div.appendChild(img4);
/*player1*/

let arr = [
  "cardsimages/Bill gates.png",
  "cardsimages/daniel kottke.png",
  "cardsimages/johh scurley.png",
  "cardsimages/microsoft.png",
  "cardsimages/paul allen.png",
  "cardsimages/steve ballmer.png",
  "cardsimages/steve jobs.png",
  "cardsimages/steve wosniak.png",
];

/*embaralha*/
const embaralhar = (elemento) => {
  for (let u = arr.length - 1; u > 0; u--) {
    ramdomic = Math.floor(Math.random() * (u + 1));

    let sort = arr[ramdomic];
    arr[ramdomic] = arr[u];
    arr[u] = sort;
  }

  document.body.appendChild(div2);

  document.body.appendChild(div);
  img1.addEventListener("mouseover", () => {
    img1.src = arr[0];
    img1.height = 300;
  });
  img2.addEventListener("mouseover", () => {
    img2.src = arr[1];
    img2.height = 300;
  });
  img3.addEventListener("mouseover", () => {
    img3.src = arr[2];
    img3.height = 300;
  });
  img4.addEventListener("mouseover", () => {
    img4.src = arr[3];
    img4.height = 300;
  });
  img5.addEventListener("mouseover", () => {
    img5.src = arr[4];
    img5.height = 300;
  });
  img6.addEventListener("mouseover", () => {
    img6.src = arr[5];
    img6.height = 300;
  });
  img7.addEventListener("mouseover", () => {
    img7.src = arr[6];
    img7.height = 300;
  });
  img8.addEventListener("mouseover", () => {
    img8.src = arr[7];
    img8.height = 300;
  });

  /*mouse leave*/
  img1.addEventListener("mouseleave", () => {
    img1.src = "cardverso/6.png";
    img1.height = 300;
  });
  img2.addEventListener("mouseleave", () => {
    img2.src = "cardverso/6.png";
    img2.height = 300;
  });
  img3.addEventListener("mouseleave", () => {
    img3.src = "cardverso/6.png";
    img3.height = 300;
  });
  img4.addEventListener("mouseleave", () => {
    img4.src = "cardverso/6.png";
    img4.height = 300;
  });
  img5.addEventListener("mouseleave", () => {
    img5.src = "cardverso/6.png";
    img5.height = 300;
  });
  img6.addEventListener("mouseleave", () => {
    img6.src = "cardverso/6.png";
    img6.height = 300;
  });
  img7.addEventListener("mouseleave", () => {
    img7.src = "cardverso/6.png";
    img7.height = 300;
  });
  img8.addEventListener("mouseleave", () => {
    img8.src = "cardverso/6.png";
    img8.height = 300;
  });

  return [
    (img1.src = "cardverso/6.png"),
    (img1.height = 300),
    (img2.src = "cardverso/6.png"),
    (img2.height = 300),
    (img3.src = "cardverso/6.png"),
    (img3.height = 300),
    (img4.src = "cardverso/6.png"),
    (img4.height = 300),
    (img5.src = "cardverso/6.png"),
    (img5.height = 300),
    (img6.src = "cardverso/6.png"),
    (img6.height = 300),
    (img7.src = "cardverso/6.png"),
    (img7.height = 300),
    (img8.src = "cardverso/6.png"),
    (img8.height = 300),
  ];

  //   return [
  //     (img1.src = arr[0]),
  //     (img1.height = 200),
  //     (img2.src = arr[1]),
  //     (img2.height = 200),
  //     (img3.src = arr[2]),
  //     (img3.height = 200),
  //     (img4.src = arr[3]),
  //     (img4.height = 200),
  //     (img5.src = arr[4]),
  //     (img5.height = 200),
  //     (img6.src = arr[5]),
  //     (img6.height = 200),
  //     (img7.src = arr[6]),
  //     (img7.height = 200),
  //     (img8.src = arr[7]),
  //     (img8.height = 200),
  //   ];
};

let o = embaralhar([]);

function teste() {
  contador += 1;
  o = embaralhar([]);

  /*parte de baixo*/

  /*card1*/
  img1.addEventListener("click", () => {
    cardflipsound.play();
    if (arr[0] == "cardsimages/Bill gates.png") {
      qiGates = 150;
      checkgates2 = true;

      seachimgates = "1";
    } else if (arr[0] == "cardsimages/daniel kottke.png") {
      checkdaniel2 = true;
      qidaniel = 70;
      seachimgdaneil = "1";
    } else if (arr[0] == "cardsimages/johh scurley.png") {
      checkjohh2 = true;
      qiJohh = 90;
      seachimgjohh = "1";
    } else if (arr[0] == "cardsimages/microsoft.png") {
      checkmicro2 = true;
      ataquemicrosoft = 299;
      seachmocroimg = "1";
    } else if (arr[0] == "cardsimages/paul allen.png") {
      checkallen2 = true;
      qiPaul = 200;
      seachimgpaul = "1";
    } else if (arr[0] == "cardsimages/steve ballmer.png") {
      checkbalmer2 = true;
      qibalmer = 93;
      seachimgbalmer = "1";
    } else if (arr[0] == "cardsimages/steve jobs.png") {
      checkjobs2 = true;
      qiJobs = 180;
      seachimgjobs = "1";
    } else if (arr[0] == "cardsimages/steve wosniak.png") {
      checkwosniak2 = true;
      searchimgwosniak = "1";
      qiwosniak = 10;
    }
  });

  /*card1*/

  /*card2*/
  img2.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[1] == "cardsimages/Bill gates.png") {
      checkgates2 = true;
      qiGates = 150;
      seachimgates = "2";
    } else if (arr[1] == "cardsimages/daniel kottke.png") {
      checkdaniel2 = true;
      qidaniel = 70;
      seachimgdaneil = "2";
    } else if (arr[1] == "cardsimages/johh scurley.png") {
      checkjohh2 = true;
      qiJohh = 90;
      seachimgjohh = "2";
    } else if (arr[1] == "cardsimages/microsoft.png") {
      checkmicro2 = true;
      ataquemicrosoft = 299;
      seachmocroimg = "2";
    } else if (arr[1] == "cardsimages/paul allen.png") {
      checkallen2 = true;
      qiPaul = 200;
      seachimgpaul = "2";
    } else if (arr[1] == "cardsimages/steve ballmer.png") {
      checkbalmer2 = true;
      qibalmer = 93;
      seachimgbalmer = "2";
    } else if (arr[1] == "cardsimages/steve jobs.png") {
      checkjobs2 = true;
      qiJobs = 180;
      seachimgjobs = "2";
    } else if (arr[1] == "cardsimages/steve wosniak.png") {
      checkwosniak2 = true;
      qiwosniak = 10;
      searchimgwosniak = "2";
    }
  });
  /*card2*/

  /*card3*/
  img3.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[2] == "cardsimages/Bill gates.png") {
      checkgates2 = true;
      qiGates = 150;
      seachimgates = "3";
    } else if (arr[2] == "cardsimages/daniel kottke.png") {
      checkdaniel2 = true;
      qidaniel = 70;
      seachimgdaneil = "3";
    } else if (arr[2] == "cardsimages/johh scurley.png") {
      checkjohh2 = true;
      qiJohh = 90;
      seachimgjohh = "3";
    } else if (arr[2] == "cardsimages/microsoft.png") {
      checkmicro2 = true;
      ataquemicrosoft = 299;
      seachmocroimg = "3";
    } else if (arr[2] == "cardsimages/paul allen.png") {
      checkallen2 = true;
      qiPaul = 200;
      seachimgpaul = "3";
    } else if (arr[2] == "cardsimages/steve ballmer.png") {
      checkbalmer2 = true;
      qibalmer = 93;
      seachimgbalmer = "3";
    } else if (arr[2] == "cardsimages/steve jobs.png") {
      checkjobs2 = true;
      qiJobs = 180;
      seachimgjobs = "3";
    } else if (arr[2] == "cardsimages/steve wosniak.png") {
      checkwosniak2 = true;
      qiwosniak = 10;
      searchimgwosniak = "3";
    }
  });
  /*card3*/

  /*card4*/
  img4.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[3] == "cardsimages/Bill gates.png") {
      checkgates2 = true;
      qiGates = 150;
      seachimgates = "4";
    } else if (arr[3] == "cardsimages/daniel kottke.png") {
      checkdaniel2 = true;
      qidaniel = 70;
      seachimgdaneil = "4";
    } else if (arr[3] == "cardsimages/johh scurley.png") {
      checkjohh2 = true;
      qiJohh = 90;
      seachimgjohh = "4";
    } else if (arr[3] == "cardsimages/microsoft.png") {
      checkmicro2 = true;
      ataquemicrosoft = 299;
      seachmocroimg = "4";
    } else if (arr[3] == "cardsimages/paul allen.png") {
      checkallen2 = true;
      qiPaul = 200;
      seachimgpaul = "4";
    } else if (arr[3] == "cardsimages/steve ballmer.png") {
      checkbalmer2 = true;
      qibalmer = 93;
      seachimgbalmer = "4";
    } else if (arr[3] == "cardsimages/steve jobs.png") {
      checkjobs2 = true;
      qiJobs = 180;
      seachimgjobs = "4";
    } else if (arr[3] == "cardsimages/steve wosniak.png") {
      checkwosniak2 = true;
      qiwosniak = 10;
      searchimgwosniak = "4";
    }
  });
  /*parte de baixo chega ao fim*/

  /*parte de cima*/
  img5.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[4] == "cardsimages/Bill gates.png") {
      qiGates2 = 150;
      gatesplan.push("5");
      checkgates = true;
    } else if (arr[4] == "cardsimages/daniel kottke.png") {
      qidaniel2 = 70;
      danielplan.push("5");
      checkdaniel = true;
    } else if (arr[4] == "cardsimages/johh scurley.png") {
      qiJohh2 = 90;
      johhplan.push("5");
      checkjohh = true;
    } else if (arr[4] == "cardsimages/microsoft.png") {
      ataquemicrosoft2 = 299;
      microsoftplan.push("5");
      checkmicro = true;
    } else if (arr[4] == "cardsimages/paul allen.png") {
      qiPaul2 = 200;
      allenplan.push("5");
      checkallen = true;
    } else if (arr[4] == "cardsimages/steve ballmer.png") {
      qibalmer2 = 93;
      balmerplan.push("5");
      checkbalmer = true;
    } else if (arr[4] == "cardsimages/steve jobs.png") {
      qiJobs2 = 180;
      jobsplan.push("5");
      checkjobs = true;
    } else if (arr[4] == "cardsimages/steve wosniak.png") {
      qiwosniak2 = 10;
      wosniakplan.push("5");
      checkw = true;
    }
  });
  /*card1*/
  /*card6*/
  img6.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[5] == "cardsimages/Bill gates.png") {
      qiGates2 = 150;
      gatesplan.push("6");
      checkgates = true;
    } else if (arr[5] == "cardsimages/daniel kottke.png") {
      qidaniel2 = 70;
      danielplan.push("6");
      checkdaniel = true;
    } else if (arr[5] == "cardsimages/johh scurley.png") {
      qiJohh2 = 90;
      johhplan.push("6");
      checkjohh = true;
    } else if (arr[5] == "cardsimages/microsoft.png") {
      ataquemicrosoft2 = 299;
      microsoftplan.push("6");
      checkmicro = true;
    } else if (arr[5] == "cardsimages/paul allen.png") {
      qiPaul2 = 200;
      allenplan.push("6");
      checkallen = true;
    } else if (arr[5] == "cardsimages/steve ballmer.png") {
      qibalmer2 = 93;
      balmerplan.push("6");
      checkbalmer = true;
    } else if (arr[5] == "cardsimages/steve jobs.png") {
      qiJobs2 = 180;
      jobsplan.push("6");
      checkjobs = true;
    } else if (arr[5] == "cardsimages/steve wosniak.png") {
      qiwosniak2 = 10;
      wosniakplan.push("6");
      checkw = true;
    }
  });
  /*card2*/
  /*card3*/
  img7.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[6] == "cardsimages/Bill gates.png") {
      qiGates2 = 150;
      gatesplan.push("7");

      checkgates = true;
    } else if (arr[6] == "cardsimages/daniel kottke.png") {
      qidaniel2 = 70;
      danielplan.push("7");
      checkdaniel = true;
    } else if (arr[6] == "cardsimages/johh scurley.png") {
      qiJohh2 = 90;
      johhplan.push("7");
      checkjohh = true;
    } else if (arr[6] == "cardsimages/microsoft.png") {
      ataquemicrosoft2 = 299;
      microsoftplan.push("7");
      checkmicro = true;
    } else if (arr[6] == "cardsimages/paul allen.png") {
      qiPaul2 = 200;
      allenplan.push("7");
      checkallen = true;
    } else if (arr[6] == "cardsimages/steve ballmer.png") {
      qibalmer2 = 93;
      balmerplan.push("7");
      checkbalmer = true;
    } else if (arr[6] == "cardsimages/steve jobs.png") {
      qiJobs2 = 180;
      jobsplan.push("7");
      checkjobs = true;
    } else if (arr[6] == "cardsimages/steve wosniak.png") {
      qiwosniak2 = 10;
      wosniakplan.push("7");
      checkw = true;
    }
  });
  /*card3*/
  /*card4*/
  img8.addEventListener("click", function () {
    cardflipsound.play();
    if (arr[7] == "cardsimages/Bill gates.png") {
      qiGates2 = 150;
      gatesplan.push("8");
      checkgates = true;
    } else if (arr[7] == "cardsimages/daniel kottke.png") {
      qidaniel2 = 70;
      danielplan.push("8");
      checkdaniel = true;
    } else if (arr[7] == "cardsimages/johh scurley.png") {
      qiJohh2 = 90;
      johhplan.push("8");
      checkjohh = true;
    } else if (arr[7] == "cardsimages/microsoft.png") {
      ataquemicrosoft2 = 299;
      microsoftplan.push("8");
      checkmicro = true;
    } else if (arr[7] == "cardsimages/paul allen.png") {
      qiPaul2 = 200;
      allenplan.push("8");
      checkallen = true;
    } else if (arr[7] == "cardsimages/steve ballmer.png") {
      qibalmer2 = 93;
      balmerplan.push("8");
      checkbalmer = true;
    } else if (arr[7] == "cardsimages/steve jobs.png") {
      qiJobs2 = 180;
      jobsplan.push("8");
      checkjobs = true;
    } else if (arr[7] == "cardsimages/steve wosniak.png") {
      qiwosniak2 = 10;
      wosniakplan.push("8");
      checkw = true;
    }
  });

  if (contador == 2) {
    alert('embaralhos esgotados')
    btn.remove();
  }
}
/*paulparte*/
const paulpart = addEventListener("keydown", (p) => {
  if (p.keyCode == 80 && checkallen2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        document.getElementById("image" + balmerplan[b]).remove();
        qiPaul = null;

        checkbalmer = false;
        ganhador1 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        document.getElementById("image" + seachimgpaul).remove();

        qiwosniak2 = false;
        checkw = false;
        ganhador2 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();

        qiPaul = null;
        ganhador1 += 1;
        checkjohh = false;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + seachimgpaul).remove();
        qiJobs2 = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + allenplan[a]).remove();
        document.getElementById("image" + seachimgpaul).remove();

        checkallen = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        document.getElementById("image" + seachimgpaul).remove();
        ataquemicrosoft2 = null;
        checkmicro = false;
        ganhador2 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + danielplan[d]).remove();
        qiPaul = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + seachimgpaul).remove();
        qiGates = null;
        checkgates = false;
        ganhador2 += 1;
        contadorgates2 += 1;
      }
    }

    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let zz = 0; zz < gatesplan.length; zz++) {
        document.getElementById("image" + gatesplan[zz]).remove();
      }
    }
    if (contadorjobs2 == 2 && checkalljobs == 0) {
      checkalljobs = 1;
      ganhador1 += 1;
      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

const balmerpart = addEventListener("keydown", (b) => {
  if (b.keyCode == 66 && checkbalmer2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        document.getElementById("image" + balmerplan[b]).remove();
        document.getElementById("image" + seachimgbalmer).remove();

        checkbalmer = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        document.getElementById("image" + seachimgbalmer).remove();

        qiwosniak = null;
        checkw = false;
        ganhador2 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();

        qibalmer = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + seachimgbalmer).remove();

        qiJobs = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + allenplan[a]).remove();

        qibalmer = null;
        checkallen = false;
        ganhador1 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        document.getElementById("image" + seachimgbalmer).remove();

        ataquemicrosoft2 = null;
        checkmicro = false;
        ganhador2 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + danielplan[d]).remove();

        qibalmer = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + seachimgbalmer).remove();
        contadorgates2 += 1;
        qiGates = null;
        checkgates = false;
        ganhador2 += 1;
      }
    }
    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let cc = 0; cc < gatesplan.length; cc++) {
        document.getElementById("image" + gatesplan[cc]).remove();
      }
    }

    if (contadorjobs2 == 2 && checkalljobs == 0) {
      ganhador1 += 1;
      checkalljobs = 1;

      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

/*daniel kottke*/

const danielparte = addEventListener("keydown", (d) => {
  if (d.keyCode == 68 && checkdaniel2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        qibalmer2 = null;
        checkbalmer = false;
        ganhador2 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        qiwosniak2 = null;
        checkw = false;
        ganhador2 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();
        qidaniel = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        qiGates = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        qiPaul2 = null;
        checkallen = false;
        ganhador2 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        ataquemicrosoft2 = null;
        checkmicro = false;
        ganhador2 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + danielplan[d]).remove();
        document.getElementById("image" + seachimgdaneil).remove();

        checkdaniel = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + seachimgdaneil).remove();
        qiGates = null;
        checkgates = false;
        ganhador2 += 1;
        contadorgates2 += 1;
      }
    }
    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let cc = 0; cc < gatesplan.length; cc++) {
        document.getElementById("image" + gatesplan[cc]).remove();
      }
    }

    if (contadorjobs2 == 2 && checkalljobs == 0) {
      checkalljobs = 1;
      ganhador1 += 1;
      alert("jobs perdeu as suas forças");
      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

/* jobs parte*/

const jobspart = addEventListener("keydown", (s) => {
  if (s.keyCode == 83 && checkjobs2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + balmerplan[b]).remove();

        qiJobs = null;
        checkbalmer = false;
        ganhador1 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + wosniakplan[w]).remove();

        qiJobs = null;
        checkw = false;
        ganhador1 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + johhplan[j]).remove();

        qiJobs = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        bongsound.play();
        contadorjobs += 1;
        document.getElementById("image" + jobsplan[s]).remove();
        qiJobs = null;
        document.getElementById("image" + seachimgjobs).remove();

        checkjobs = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + allenplan[a]).remove();

        qiJobs = null;
        checkallen = false;
        ganhador1 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + microsoftplan[m]).remove();

        qiJobs = null;
        checkmicro = false;
        ganhador1 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        contadorjobs += 1;
        document.getElementById("image" + danielplan[d]).remove();

        qiJobs = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();

        document.getElementById("image" + gatesplan[g]).remove();
        document.getElementById("image" + seachimgjobs).remove();

        qiJobs = null;
        checkgates = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    if (contadorjobs == 2) {
      ganhador2 += 1;
      document.getElementById("image" + seachimgjobs).remove();
    }
  }
});

/*jobs parte*/
const billpart = addEventListener("keydown", (g) => {
  if (g.keyCode == 71 && checkgates2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + balmerplan[b]).remove();

        qiGates = null;
        checkbalmer = false;
        ganhador1 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + wosniakplan[w]).remove();

        qiGates = null;
        checkw = false;
        ganhador1 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + johhplan[j]).remove();

        qiGates = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        bongsound.play();

        document.getElementById("image" + jobsplan[s]).remove();
        qiGates = null;
        document.getElementById("image" + seachimgates).remove();

        checkjobs = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + allenplan[a]).remove();

        qiGates = null;
        checkallen = false;
        ganhador1 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + microsoftplan[m]).remove();

        qiGates = null;
        checkmicro = false;
        ganhador1 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        contadorgates += 1;
        document.getElementById("image" + danielplan[d]).remove();

        qiGates = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + gatesplan[g]).remove();
        document.getElementById("image" + seachimgates).remove();

        qiGates = null;
        checkgates = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    if (contadorgates == 2) {
      ganhador2 += 1;
      document.getElementById("image" + seachimgates).remove();
    }
  }
});

/*johhparte*/
const johhparte = addEventListener("keydown", (j) => {
  if (j.keyCode == 74 && checkjohh2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qibalmer2 = null;
        checkbalmer = false;
        ganhador2 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qiwosniak2 = null;
        checkw = false;
        ganhador2 += 1;
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();
        document.getElementById("image" + seachimgjohh).remove();

        checkjohh = false;
        ganhador1 += 1;
        ganhador2 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qiGates = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qiPaul2 = null;
        checkallen = false;
        ganhador2 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        ataquemicrosoft2 = null;
        checkmicro = false;
        ganhador2 += 1;
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qidaniel2 = null;
        checkdaniel = false;
        ganhador2 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + seachimgjohh).remove();
        qiGates2 = null;
        checkgates = false;
        ganhador2 += 1;
        contadorgates2 += 1;
      }
    }
    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let cc = 0; cc < gatesplan.length; cc++) {
        document.getElementById("image" + gatesplan[cc]).remove();
      }
    }
    if (contadorjobs2 == 2 && checkalljobs == 0) {
      checkalljobs = 1;
      ganhador1 += 1;
      alert("jobs perdeu as suas forças");
      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

/*microsoftparte*/
const microsoftparte = addEventListener("keydown", (m) => {
  if (m.keyCode == 77 && checkmicro2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        document.getElementById("image" + balmerplan[b]).remove();
        ataquemicrosoft = null;
        checkbalmer = false;
        ganhador1 += 1;
      }
    }

    for (let w = 0; w < wosniakplan.length; w++) {
      if (checkw == true) {
        keysound.play();
        document.getElementById("image" + seachmocroimg).remove();
        qiwosniak2 = null;
        checkw = false;
        ganhador2 += 1;
        alert(
          "wosniak usou de suas vantagens estratégicas para vencer a microsoft"
        );
      }
    }
    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();
        ataquemicrosoft = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + seachmocroimg).remove();
        qiJobs2 = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + allenplan[a]).remove();
        ataquemicrosoft = null;
        checkallen = false;
        ganhador1 += 1;
      }
    }

    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + danielplan[d]).remove();
        ataquemicrosoft = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + seachmocroimg).remove();
        qiGates2 = null;
        checkgates = false;
        ganhador2 += 1;
        contadorgates2 += 1;
      }
    }
    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let cc = 0; cc < gatesplan.length; cc++) {
        document.getElementById("image" + gatesplan[cc]).remove();
      }
    }
    if (contadorjobs2 == 2 && checkalljobs == 0) {
      checkalljobs += 1;
      ganhador1 += 1;
      alert("jobs perdeu as suas forças");
      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

/*wosniakparte*/
const wosniakparte = addEventListener("keydown", (w) => {
  if (w.keyCode == 87 && checkwosniak2 == true) {
    for (let b = 0; b < balmerplan.length; b++) {
      if (checkbalmer == true) {
        keysound.play();
        ganhador1 += 1;
        let animacao = document.getElementById("image" + balmerplan[b]).animate(
          [
            { transform: "rotateY(0deg)", opacity: 1 },
            { transform: "rotateY(180deg)", opacity: 0 },
          ],
          { duration: 2300 }
        );

        animacao.addEventListener("finish", () => {
          document.getElementById("image" + balmerplan[b]).remove();
          qiwosniak = null;
          checkbalmer = false;
        });
      }
    }

    for (let j = 0; j < johhplan.length; j++) {
      if (checkjohh == true) {
        keysound.play();
        document.getElementById("image" + johhplan[j]).remove();
        qiwosniak = null;
        checkjohh = false;
        ganhador1 += 1;
      }
    }
    for (let s = 0; s < jobsplan.length; s++) {
      if (checkjobs == true) {
        keysound.play();
        document.getElementById("image" + searchimgwosniak).remove();
        qiJobs2 = null;

        checkjobs = false;
        ganhador2 += 1;
        contadorjobs2 += 1;
      }
    }
    for (let a = 0; a < allenplan.length; a++) {
      if (checkallen == true) {
        keysound.play();
        document.getElementById("image" + allenplan[a]).remove();
        qiwosniak = null;
        checkallen = false;
        ganhador1 += 1;
      }
    }
    for (let m = 0; m < microsoftplan.length; m++) {
      if (checkmicro == true) {
        keysound.play();
        document.getElementById("image" + microsoftplan[m]).remove();
        qiwosniak = null;
        checkmicro = false;
        ganhador1 += 1;
        alert(
          "wosniak usou de suas vantagens estratégicas para vencer a microsoft"
        );
      }
    }
    for (let d = 0; d < danielplan.length; d++) {
      if (checkdaniel == true) {
        keysound.play();
        document.getElementById("image" + danielplan[d]).remove();
        qiwosniak = null;
        checkdaniel = false;
        ganhador1 += 1;
      }
    }

    for (let g = 0; g < gatesplan.length; g++) {
      if (checkgates == true) {
        keysound.play();
        document.getElementById("image" + searchimgwosniak).remove();
        qiGates2 = null;
        checkgates = false;
        ganhador2 += 1;
        contadorgates2 += 1;
      }
    }
    if (contadorgates2 == 2 && checkallgates == 0) {
      checkallgates = 1;
      ganhador1 += 1;
      for (let cc = 0; cc < gatesplan.length; cc++) {
        document.getElementById("image" + gatesplan[cc]).remove();
      }
    }
    if (contadorjobs2 == 2 && checkalljobs == 0) {
      checkalljobs = 1;
      ganhador1 += 1;
      alert("jobs perdeu as suas forças");
      for (let aa = 0; aa < jobsplan.length; aa++) {
        document.getElementById("image" + jobsplan[aa]).remove();
      }
    }
  }
});

/*gates  parte*/
if (
  (arr[0] == "cardsimages/Bill gates.png" && qiGates != null) ||
  (arr[1] == "cardsimages/Bill gates.png" && qiGates != null) ||
  (arr[2] == "cardsimages/Bill gates.png" && qiGates != null) ||
  (arr[3] == "cardsimages/Bill gates.png" && qiGates != null)
) {
  addEventListener(billpart);
  qiGates = null;
  qiJobs = null;
}

if (
  (arr[0] == "cardsimages/steve jobs.png" && qiJobs != null) ||
  (arr[1] == "cardsimages/steve jobs.png" && qiJobs != null) ||
  (arr[2] == "cardsimages/steve jobs.png" && qiJobs != null) ||
  (arr[3] == "cardsimages/steve jobs.png" && qiJobs != null)
) {
  addEventListener(jobspart);
  qiGates = null;
  qiJobs = null;
}

/*balmerparte*/
if (
  (arr[0] == "cardsimages/steve ballmer.png" && qibalmer != null) ||
  (arr[1] == "cardsimages/steve ballmer.png" && qibalmer != null) ||
  (arr[2] == "cardsimages/steve ballmer.png" && qibalmer != null) ||
  (arr[3] == "cardsimages/steve ballmer.png" && qibalmer != null)
) {
  addEventListener(balmerpart);
}

/*paul*/
if (
  (arr[0] == "cardsimages/paul allen.png" && qiPaul != null) ||
  (arr[1] == "cardsimages/paul allen.png") & (qiPaul != null) ||
  (arr[2] == "cardsimages/paul allen.png" && qiPaul != null) ||
  (arr[3] == "cardsimages/paul allen.png" && qiPaul != null)
) {
  addEventListener(paulpart);
}

/*danielparte*/
if (
  (arr[0] == "cardsimages/daniel kottke.png" && qidaniel != null) ||
  (arr[1] == "cardsimages/daniel kottke.png" && qidaniel != null) ||
  (arr[2] == "cardsimages/daniel kottke.png" && qidaniel != null) ||
  (arr[3] == "cardsimages/daniel kottke.png" && qidaniel != null)
) {
  addEventListener(danielparte);
}

/*johhparte*/
if (
  (arr[0] == "cardsimages/johh scurley.png" && qiJohh != null) ||
  (arr[1] == "cardsimages/johh scurley.png" && qiJohh != null) ||
  (arr[2] == "cardsimages/johh scurley.png" && qiJohh != null) ||
  (arr[3] == "cardsimages/johh scurley.png" && qiJohh != null)
) {
  addEventListener(johhparte);
}

/*microsoftparte*/
if (
  (arr[0] == "cardsimages/microsoft.png" && ataquemicrosoft != null) ||
  (arr[1] == "cardsimages/microsoft.png" && ataquemicrosoft != null) ||
  (arr[2] == "cardsimages/microsoft.png" && ataquemicrosoft != null) ||
  (arr[3] == "cardsimages/microsoft.png" && ataquemicrosoft != null)
) {
  addEventListener(microsoftparte);
}

/*woasniakparte*/
if (
  (arr[0] == "cardsimages/steve wosniak.png" && qiwosniak != 0) ||
  (arr[1] == "cardsimages/steve wosniak.png" && qiwosniak != 0) ||
  (arr[2] == "cardsimages/steve wosniak.png" && qiwosniak != 0) ||
  (arr[3] == "cardsimages/steve wosniak.png" && qiwosniak != 0)
) {
  addEventListener(wosniakparte);
}
addEventListener("keypress", () => {
  console.log(ganhador2);
});

addEventListener("keypress", () => {
  if (ganhador1 == 4 && ganhador2 == 4) {
    alert("empate");
    location.reload();
  } else if (ganhador1 == 4) {
    winsound.play();

    alert("player 1 ganhou o jogo");
    function relodad(reseta) {
      return location.reload();
    }
    setTimeout(relodad, 3000);
  } else if (ganhador2 == 4) {
    winsound.play();
    alert("player 2 ganhou o jogo");

    function relodad(reset) {
      return location.reload();
    }
    setTimeout(relodad, 3000);
  }
});

// addEventListener("keypress", () => {
//   arr[0] == "cardsimages/Bill gates.png" && qiGates != null
//     ? (metodo = true)
//     : (metodo = false);
//   if (metodo == true) {
//     for (let b = 0; b < balmerplan.length; b++) {
//       if (checkbalmer == true) {
//         document.getElementById("image" + balmerplan[b]).remove();
//         checkbalmer = false;
//       }
//     }

//     for (let w = 0; w < wosniakplan.length; w++) {
//       if (checkw == true) {
//         document.getElementById("image" + wosniakplan[w]).remove();
//         checkw = false;
//       }
//     }
//     for (let j = 0; j < johhplan.length; j++) {
//       if (checkjohh == true) {
//         document.getElementById("image" + johhplan[j]).remove();
//         checkjohh = false;
//       }
//     }
//     for (let s = 0; s < jobsplan.length; s++) {
//       if (checkjobs == true) {
//         document.getElementById("image" + jobsplan[s]).remove();
//         img1.remove();
//         checkjobs = false;
//       }
//     }
//     for (let a = 0; a < allenplan.length; a++) {
//       if (checkallen == true) {
//         document.getElementById("image" + allenplan[a]).remove();
//         checkallen = false;
//       }
//     }
//     for (let m = 0; m < microsoftplan.length; m++) {
//       if (checkmicro == true) {
//         document.getElementById("image" + microsoftplan[m]).remove();
//         checkmicro = false;
//       }
//     }
//     for (let d = 0; d < danielplan.length; d++) {
//       if (checkdaniel == true) {
//         document.getElementById("image" + danielplan[d]).remove();
//         checkdaniel = false;
//       }
//     }

//     for (let g = 0; g < gatesplan.length; g++) {
//       if (checkgates == true) {
//         document.getElementById("image" + gatesplan[g]).remove();
//         checkgates = false;
//       }
//     }
//   }
// });
//   if (
//     metodo == true &&
//     arr[4] == "cardsimages/steve wosniak.png" &&
//     qiwosniak2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/daniel kottke.png" &&
//     qidaniel2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/johh scurley.png" &&
//     qiJohh2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/microsoft.png" &&
//     ataquemicrosoft2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/paul allen.png" &&
//     qiPaul2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/steve ballmer.png" &&
//     qibalmer2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/steve jobs.png" &&
//     qiJobs2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   } else if (
//     metodo == true &&
//     arr[4] == "cardsimages/steve wosniak.png" &&
//     qiwosniak2 != null
//   ) {
//     let animacao = img5.animate(
//       [
//         { transform: "rotate(0deg)", opacity: 1 },
//         { transform: "rotate(360deg)", opacity: 0 },
//       ],
//       { duration: 2300 }
//     );

//     animacao.addEventListener("finish", () => {
//       img5.remove();
//     });
//   }
// });
