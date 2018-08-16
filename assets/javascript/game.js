window.onload = function () {

    // CREATE VARIBLES
    let park; // Array of parks
    let selectedPark; //Park selected from array  (// chosenCategory)
    let alphabet; //Array of letters to choose
    let letters; //buttons that hold letters from array
    let space; //Number of spaces in word
    let guess; //Letter guessed
    let guesses = []; // Stored guesses
    let counter; //Count correct guesses
    let remaining; //Guesses remaining 
    let hint; //Array of hints 
    let clue; //Not sure if I need this -  this is the clue button


    // CREATE ARRAYS
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let park = ["Acadia", "Arches", "Badlands", "Big Bend", "Crater Lake", "Death Valley", "Denali", "Everglades", "Glacier", "Grand Canyon", "Grand Teton", "Great Smoky Mountains", "Hawaiʻi Volcanoes" "Joshua Tree", "Mammoth Cave", "Mesa Verde", "Olympic", "Petrified Forest", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Wind Cave", "Yellowstone", "Yosemite", "Zion"];

    let hint = ["Features a famous lighthouse in Maine."]; // have to add more hints that line up with parks

    // GET ELEMENTS FROM DOC --   do I need more of these?
    let remaining = document.querySelector("remaining");
    let clue = document.querySelector("clue");
    let hint = document.querySelector("hint");

    //CREATE FUNCIONS

    // create alphabet ul  --- this is a mess!  my key words are all messed up!
    let letters = function () {
        myletters = document.querySelector("letters");
         = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

//Randomly retrieve park  -  i think this is a mess too!
result = function () {
    selectedParkHolder = document.querySelector('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-random-park');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Show guesses remaining
comments = function () {
    showRemaining.innerHTML = "You have " + remaining + " guesses remaining.";
    if (remaining < 1) {
        showRemaining.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            showRemaining.innerHTML = "You Win!";
        }
    }
}

// OnClick Function
check = function () {
    list.onclick = function () {
        let guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            }
        }
        let w = (word.indexOf(guess));
        if (w === -1) {
            remaining -= 1;
            comments();
        } else {
            comments();
        }
    }
}

// Play
play = function () {
    let selectedPark = park[Math.floor(Math.random() * park.length)];
    word = selectedPark[Math.floor(Math.random() * selectedPark.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    letters();

    guesses = [];
    remaining = 12;
    counter = 0;
    space = 0;
    result();
    comments();
}

play();


// Hint

clues.onclick = function () {
    let clueIndex = indexOf(word);
    showHint.innerHTML = "Clue: Which park " + clues[clueIndex];
};

}



 //Change button color when selected example
//    var button = document.querySelector('.button');

//button.onclick = function () {
// var red = Math.floor(Math.random() * 256);
// var blue = Math.floor(Math.random() * 256);
// var green = Math.floor(Math.random() * 256);

// this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
//};
