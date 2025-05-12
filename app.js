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
        seconds += 1;
      if ( seconds >= 60 ){
        minutes += 1;
        seconds = 0;
      }
      // now formt the time before displaying it 
     let secondsValue =seconds < 10 ? `0${seconds}` : seconds;
     let minutesValue =minutes < 10 ? `0${minutes}` : minutes;
        timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
        
    };



    // for calculating moves
    const movesCounter = () => {
        movesCount += 1;
        moves.innerHTML = `<span>Moves:</span>${movesCount}`;
    };


    //pick random objects from the items Array 
    const generteRandom = (size =4 ) => {
        // temprory array 
        let TempArray = [...items];
        // intial cardValues Array 
        let cardValues = [];
        // size should be double (4*4 matrix)/2 since pair of cards may exist 
        size = (size * size) / 2;
        // random object  selection 
        for (let i = 0; i < size; i++) {
            // get random index 
            let randomIndex = Math.floor(Math.random() * TempArray.length);
            // push the object to the cardValues array 
            cardValues.push(TempArray[randomIndex]);
            // remove the object from the temp array 
            TempArray.splice(randomIndex, 1);

        }

        return cardValues
    };

    const matrixGenerator = (cardValues, size =4) => {
        gameContainer.innerHTML = "";
        cardValues = [...cardValues, ...cardValues];
        // shuffle the array
        cardValues.sort(() => Math.random() - 0.5);
        for ( let i=0; i<size*size; i++){}
    };

    