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
let lossTimeOut ;

//  items (images of cards) array 
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
// the seconds and minutes should be starting from zero
 let seconds =0;
    let minutes =0;

    // initial moves and win count 
    // that means at first the moves and the win shoulde be 0 
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
      // now formting the time before displaying it 
     let secondsValue =seconds < 10 ? `0${seconds}` : seconds;
     let minutesValue =minutes < 10 ? `0${minutes}` : minutes;
     //this will display the time in sec and min in the screen 
      timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}  `;
        
    };

 

    // a function for calculating moves
    const movesCounter = () => {
        movesCount += 1;
        // this will diplay moves on screen
        moves.innerHTML = `<span>Moves:</span>${movesCount}`;
    };

    //function generateRandom
    //picking random objects from the items Array 
    const generteRandom = (size =4 ) => {
        // temprory array 
        let TempsArray = [...items];
        // intial cardValues Array 
        let cardValues = [];
        // size should be double (4*4 matrix)/2 since pair of cards may exist 
        size = (size * size) / 2;
        // random object  selection 
        for (let i = 0; i < size; i++) {
            // get random index 
           let randomIndex= Math.floor(Math.random() * TempsArray.length);
            // push the object to the cardValues array 
            cardValues.push(TempsArray[randomIndex]);
            // remove the object from the temp array 
            TempsArray.splice(randomIndex, 1);

        } 
        return cardValues;
    };

    const matrixGenerator = (cardValues, size =4) => {
        gameContainer.innerHTML = "";
        cardValues = [...cardValues, ...cardValues];
        // shuffle the array
        cardValues.sort(() => Math.random() - 0.5);
        for ( let i=0; i<size*size; i++){ 


        // this code is generating cards for a memory game. and adding the cards to the game container 
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


        // cards 

cards= document.querySelectorAll(".card-container");
cards.forEach((card) =>{
    card.addEventListener("click", () =>{

//This checks if the clicked card has not already been matched.
//If it's already matched, we ignore it (because we don’t want to flip matched cards again).
        if(!card.classList.contains("matched")) {
            // flip the clicked card
            card.classList.add("flipped");
            if(!firstCard){
                firstCard=card;
                firstCardValue=card.getAttribute
             ("data-card-value");
            } 
             else{
            movesCounter();
            secondCard =card;
            let secondCardValue =card.getAttribute("data-card-value");
            if(firstCardValue == secondCardValue){
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                 
                firstCard = false;
                winCount += 1;

                if(winCount == Math.floor(cardValues.length / 2)) {
                    result.innerHTML = `<h2> You won </h2>
                    <h4> Moves: ${movesCount} </h4>`;
                    stopGame();
                    
                }
            }
             else {
                // if the cards do not match then flip the cards back to normal 
                let [tempFirst , tempSecond] = [firstCard,secondCard]; 
                firstCard =false;
                secondCard = false ;
                let dalay = setTimeout(() => {
                    tempFirst.classList.remove("flipped");
                    tempSecond.classList.remove("flipped");
                 },900);
            }
        }
        }
       
    })
})
    };

//start game 
startButton.addEventListener("click" , () =>{
    movesCount = 0;
    seconds =0;
    time =0;

    // working in controls and buttons visibality 
     controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");

    // start the timer when the game begins 
    interval = setInterval(timeGenerator , 1000);
    
    // adding the you lose 
    lossTimeOut =setTimeout(() =>{
        if (winCount < Math.floor(items.length /2)){
            result.innerHTML =`<h2> You lost </h2>
            <h4> Time is Up! Moves: ${movesCount} </h4>`;
            stopGame();
        }
    }, 60000);

    // the initial moves 
    moves.innerHTML = `<span>Moves:</span> ${movesCount}
    `;
    
initializer();

});

 // stop the game 
 stopButton.addEventListener(
    "click" , ( stopGame = () => {
       //In JavaScript, the .classList property is used to work with the 
       // list of classes assigned to an HTML element.
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);

 })
);

const initializer = () => {
    result.innerHTML = "";
    winCount =0;
    let cardValues =generteRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
};




