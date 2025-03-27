const randomNumber1 = Math.ceil(Math.random() * 6);
console.log(randomNumber1); // To get num 1 - 6

const randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber2); // To get num 1 - 6

// Img 1 change based on number generated
const randomImg1 = "images/dice" + randomNumber1 + ".png"; 
const Img1 = document.querySelectorAll('img')[0].setAttribute('src', randomImg1);

// Img 2 change based on number generated
const randomImg2 = "images/dice" + randomNumber2 + ".png";
const Img2 = document.querySelectorAll('img')[1].setAttribute('src', randomImg2);

// h1 change 
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML="Player 1 Winner!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML="Player 2 Winner!";
} else {
    document.querySelector('h1').innerHTML="Draw!";
}