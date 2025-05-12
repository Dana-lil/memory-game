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
    {name:"banana", image:"images/banana.png"},
    {name:"cherry", image:"images/cherry.png"},
    {name:"grape", image:"images/grape.png"},
    {name:"kiwi", image:"images/kiwi.png"},
    {name:"lemon", image:"images/lemon.png"},
    {name:"orange", image:"images/orange.png"},
    {name:"peach", image:"images/peach.png"},
     {name:"strawberry", image:"images/strawberry.png"},
      {name:"berry", image:"images/berry.png"},
       {name:"redberry", image:"images/redberry.png"},
        {name:"wildberry", image:"images/wildberry.png"},
];


// initial time

 let seconds =0;
    let minutes =0;