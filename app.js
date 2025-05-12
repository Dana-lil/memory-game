const moves =document.getElementById("moves-count");
const timeValue =document.getElementById("time");
const startButton =document.getElementById("start");
const stopButton =document.getElementById("stop");
const resetButton =document.querySelector(".game-container");
const gameContainer =document.querySelector(".game-container");
const result =document.getElementById("result");
const controls =document.querySelector(".controls-container");
 

let cards ;
let interval;
let firstCard = false;
let secondCard = false;


//  items array 
const items =[
    {name:"1", image:"1.png"},
    {name:"2", image:"2.png"},
    {name:"3", image:"3.png"},
    {name:"4", image:"4.png"},
    {name:"5", image:"5.png"},
    {name:"6", image:"6.png"},
    {name:"7", image:"7.png"},
    {name:"8", image:"8.png"},
     {name:"9", image:"9.png"},
      {name:"10", image:"10.png"},
       {name:"11", image:"11.png"},
        {name:"12", image:"12.png"},
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
        for ( let i=0; i<size*size; i++){ 

            gameContainer.innerHTML += `
            <div class="card-container" data-card-value="${cardValues[i].name}">
                <div class="card-before">?</div>
                <div class="card-after">
                <img src="${cardValues[i].image}"
                class ="image"/></div>
                </div>
                    `;
        }

        // grid 
        gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    };

const initializer = () => {
    result.innerHTML = "";
    winCount =0;
    let cardValues =generteRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
};

initializer();
