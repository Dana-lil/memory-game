


#  🎮 Cat Memory card game ! 


![alt text](image-1-1.png)  




## How to play the game?

The game starts with all the cards face down and players take turns to turn over **two cards**. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again. The winner is the person with the most cards when all the cards have been taken.

## about the game :
The Memory Card Game, also known as "Concentration," is a popular game played with many cards where players try to remember the location of matching pairs. The goal is to collect the most pairs of matching cards.


## winning conditions ! 
 * you should flip cards and match them correctley !
* you should match all the cards , and maybe try to hurry up because the more you finish early the more you win ! 

## structure of the game 

```javascript 
const moves =document.getElementById("moves-count");
const timeValue =document.getElementById("time");
const startButton =document.getElementById("start");
const stopButton =document.getElementById("stop");
const resetButton =document.querySelector(".game-container");
const gameContainer =document.querySelector(".game-container");
const result =document.getElementById("result");
const controls =document.querySelector(".controls-container");
 
```
## why used them?

 * **Moves-Count** : for displaying the moves and how many moves have the player moved.

![alt text](image-2.png)

* **Time** : of course for displaying the time that the player spend at each game .

![alt text](image-3.png)

* **Start** : start button to start the Game at the ery begining 

![alt text](image-4.png)

* **Stop** : stop button for stoping the game anyTime the player desire .

![alt text](image-5.png)

* **Game-Container** : this is the container or the wrapper that contains the reset button and all the cards and functionality , including the stop button .

* **Result** : will display the result after and while the game is in procces 

![alt text](image-6.png)



> #### i used some kind of ***assists*** from youtube and websites that i  can learn how to grid my matrix and make some gaps between them and so on 
* [grid assist](https://youtube.com/shorts/m0HjrGSLuy4?si=ZkV293anYCBtmpt2)

* [a video that gave me an idea of the structure of the game ](https://youtu.be/xWdkt6KSirw?si=VQfoQtsC1qNWHghd)










 > ### 🎮 now if you want to try the best game ever , click the link below ! :)


 * ### [The Memory Game](https://dana-lil.github.io/memory-game/)