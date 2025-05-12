const moves =document.getElementById("moves-count");
const timeValue =document.getElementById("time");
const startButton =document.getElementById("start");
const stopButton =document.getElementById("stop");
const resetButton =document.querySelector(".game-container");

const result =document.getElementById("result");
const controls =document.querySelector(".controls-container");
 

let cards ;
let interval;
let firstCard = false;
let secondCard = false;


//  items array 
const items =[
    {name:"apple", image:"apple.jpg"},
    {name:"banana", image:"banana.jpg"},
    {name:"cherry", image:"cherry.jpg"},
    {name:"grape", image:"grape.jpg"},
    {name:"kiwi", image:"kiwi.jpg"},
    {name:"lemon", image:"lemon.jpg"},
    {name:"orange", image:"orange.jpg"},
    {name:"peach", image:"peach.jpg"},
     {name:"strawberry", image:"strawberry.jpg"},
      {name:"berry", image:"berry.jpg"},
       {name:"redberry", image:"redberry.jpg"},
        {name:"wildberry", image:"wildberry.jpg"},
];


// initial time

 let seconds =0;
    let minutes =0;
    // initial moves and win count 

    let movesCount = 0;
    let winCount = 0;


    // for the timer we should 
    // create a function that will start the timer
    const timeGenerator = () => {
        seconeds += 1;
      if ( seconeds >= 60 ){
        menutes += 1;
        seconeds = 0;
      }
    };



    // now formt the time before displaying it 
     let seconedsValue =seconeds < 10 ? `0${seconeds}` : seconeds;
     let minutesValue =minutes < 10 ? `0${minutes}` : minutes;
        timeValue.innerHTML = `${minutesValue}:${seconedsValue}`;