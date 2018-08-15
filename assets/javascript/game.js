window.onload = function () {

// CREATE VARIBLES
let player; 
let parkName = ""; //array
let randomPark; //park selected from array
let parkLetter; //letters in park name
let letterCount; // number of letters from randomly selected park
let letterGuessed; //letter guessed
let letterCountRemaining;  


// CREATE ARRAY OF PARKS FOR WORD GUESS
let parkName = ["Acadia", "Arches", "Badlands", "Big Bend", "Crater Lake", "Death Valley", "Denali", "Everglades", "Glacier", "Grand Canyon", "Grand Teton", "Great Smoky Mountains", "Hawaiʻi Volcanoes" "Joshua Tree", "Mammoth Cave", "Mesa Verde", "Olympic", "Petrified Forest", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Wind Cave", "Yellowstone", "Yosemite", "Zion"];

//

//CREATE FUNCIONS

//STEPS TO SHOW LETTER BLANKS ON SCREEN 
//randomly retrieve name
let randomPark = parkName[Math.floor(Math.random() * parkName.length)]; 
//calculate number blanks
// write blanks on screen
letterCount
// determine how many letter guesses player has based on lenght of word/ words


//PLACE LETTER GUESSES WHERE THEY BELONG 
// place correct guesses in correct spot or decrease guess count
if (letterGuessed === parkLetter) {
    //letter is placed in correct spot
}
else if (letterGuessed !== parkLetter) { 
    //incorrect letter guess is placed in box
}
while 
    // there are spaces to be filled or there are guesses to be made



// SHOW REMAINING NUMBER OF GUESSES



// GIVE HINTS IF GUESSED 3 WRONG IN A ROW

//CONGRATULATE WINNER
//Show video/ facts/ pictures of park

}  // closing for function onload

