 // Create variables

 // FUNCHTIONS


 // Array of words for word guess
 let game = [“Acadia”, “Arches”, “Badlands”, “Big Bend”, “Crater Lake”, “Death Valley”, “Denali”, “Everglades”, “Glacier”, “Grand Canyon”, “Grand Teton”, “Great Smoky Mountains”, “Hawaiʻi Volcanoes” “Joshua Tree”, “Mammoth Cave”, “Mesa Verde”, “Olympic”, “Petrified Forest”, “Redwood”, “Rocky Mountain”, “Saguaro”, “Sequoia”, “Shenandoah”, “Wind Cave”, “Yellowstone”, “Yosemite”, “Zion”];
 let randomLetter =“”;
 var person; 
 var myScore=0;
 var computerScore=0;


//generate a random number from 0-2
while (myScore < 5  && computerScore < 5) {
        person = prompt(“Hello let's play rock, paper scissors: Enter R P S“);
        person=person.toUpperCase();
        randomLetter=game[Math.floor(Math.random() * 3)];
        alert(“Computer's Response is “+ randomLetter);
        if(person===“R“ && (randomLetter===“P“||randomLetter===“S“)){
            myScore++;
            alert(“Computer's Loses This Round! You Win. Your score is  “+ myScore + “ Computer's score is “+ computerScore);
        } 
        else if(person===“P“ && randomLetter===“R“) {
            myScore++;
            alert(“Computer's Loses This Round! You Win. Your score is  “+ myScore + “ Computer's score is “+ computerScore);
        }
        else if(person===“S“ && randomLetter===“P“) {
            myScore++;
            alert(“Computer's Loses This Round! You Win. Your score is  “+ myScore + “ Computer's score is “+ computerScore);
        } 
        else if(person===randomLetter) {
            alert(“No one wins this round! Your score is  “+ myScore+ “ Computer's score is “+ computerScore);
        }
        else{
            computerScore++;
            alert(“You Lose This Round!  The Computer's score is  “+ computerScore + “ and your score is “+ myScore);

        }
//scoring
        if(computerScore> myScore){
            alert(“*** you lose ***“);
        }else{
            alert(“************You Win. Your score is  “+ myScore + “Computer's score is “+ computerScore);
        }
    
    myScore=0;
    computerScore=0;