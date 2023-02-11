/////////////////////////////////////////////////// Method-1 //////////////////////////////////////////////////////////////

// let randomNumber1 = Math.floor(6 * Math.random() + 1);
// // console.log(randomNumber1);

// switch (randomNumber1) {
//     case 1:
//         document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
//         break;
//     case 2:
//         document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
//         break;
//     case 3:
//         document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
//         break;
//     case 4:
//         document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
//         break;
//     case 5:
//         document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
//         break;
//     case 6:
//         document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
//         break;
// }

// let randomNumber2 = Math.floor(6 * Math.random() + 1);
// // console.log(randomNumber2);

// switch (randomNumber2) {
//     case 1:
//         document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
//         break;
//     case 2:
//         document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
//         break;
//     case 3:
//         document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
//         break;
//     case 4:
//         document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
//         break;
//     case 5:
//         document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
//         break;
//     case 6:
//         document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
//         break;
// }

/////////////////////////////////////////////////// Method-2 //////////////////////////////////////////////////////////////

let randomNumber1 = Math.floor(6 * Math.random() + 1);
let img1_source = "images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1_source);

let randomNumber2 = Math.floor(6 * Math.random() + 1);
let img2_source = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2_source);

if (randomNumber1 > randomNumber2) document.querySelector("h1.main_heading").innerHTML = "Player 1 wins";
else if (randomNumber2 > randomNumber1) document.querySelector("h1.main_heading").innerHTML = "Player 2 wins";
else document.querySelector("h1.main_heading").innerHTML = "It's a Draw";