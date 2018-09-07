window.onload = function () {

  //VARIABLES
  var parks;  // Array of parks 
  var chosenPark;  // Randomly chosen park 
  var abc; // Alphabet buttons 
  var getHint;  // Word getHint
  var word;  // Word 
  var letterGuess;  // Letter user guesses 
  var storedGuesses = [];  // Stores user's letter guesses 
  var letterCount;  // Letter count 
  var counter;  // Counts correct guesses
  var space;  // Number of spaces in park '*'
  var wins //Player wins 
  var losses //Player losses 

  // RETRIEVE ELEMENTS FROM DOCUMENT
  var showLetterCount = document.getElementById("myLetterCount");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var showWinCount = document.getElementById("winCount")
  var showLossCount = document.getElementById("lossCount")

  // SET WIN AND LOSS COUNTS
  var wins = 0; //Player wins 
  var losses = 0; //Player losses 

  // CREATE ALPHABET UL
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "'"];

  var abc = function () {
    myAbc = document.getElementById('abc');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myAbc.appendChild(letters);
      letters.appendChild(list);
    }
  }

  // CREATE GUESSES UL
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "*") {
        guess.innerHTML = "*";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      storedGuesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // SHOW LETTER COUNT AND WIN COUNT
  comments = function () {
    showLetterCount.innerHTML = "Guesses Remaining:     " + letterCount;
    if (letterCount < 1) {
      showLetterCount.innerHTML = "Game Over";
      losses++;
      letterCount = 10;
      showLossCount.innerHTML = "Losses:  " + losses;
      letters.parentNode.removeChild(letters);
    }
    if (counter + space === storedGuesses.length) {
      showLetterCount.innerHTML = "You Won!";
      wins++;
      showWinCount.innerHTML = "Wins:   " + wins;
      letters.parentNode.removeChild(letters);
    }
  }

  // ONCLICK FUNCTION
  check = function () {
    list.onclick = function () {
      var letterGuess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      this.style.backgroundColor = "rgb(141, 149, 156)";
      for (var i = 0; i < word.length; i++) {
        if (word[i] === letterGuess) {
          storedGuesses[i].innerHTML = letterGuess;
          counter += 1;
        }
      }
      var j = (word.indexOf(letterGuess));
      if (j === -1) {
        letterCount -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

  // PLAY
  play = function () {
    parks = [
      ["ACADIA", "ARCHES", "BADLANDS", "BIG*BEND", "BISCAYNE", "CRATER*LAKE", "DEATH*VALLEY", "DENALI", "EVERGLADES", "GLACIER", "GRAND*CANYON", "GRAND*TETON", "GREAT*SMOKY*MOUNTAINS", "HAWAI'I*VOLCANOES", "ISLE*ROYALE", "JOSHUA*TREE", "MAMMOTH*CAVE", "MESA*VERDE", "OLYMPIC", "PETRIFIED*FOREST", "REDWOOD", "ROCKY*MOUNTAIN", "SAGUARO", "SEQUOIA*AND*KINGS*CANYON", "SHENANDOAH", "WIND*CAVE", "YELLOWSTONE", "YOSEMITE", "ZION"]
    ];

    chosenPark = parks[Math.floor(Math.random() * parks.length)];
    word = chosenPark[Math.floor(Math.random() * chosenPark.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    abc();
    storedGuesses = [];
    letterCount = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();

  // HINT

  hint.onclick = function () {

    hints = [
      ["Within its borders you will find the tallest mountain on the Atlantic coast.", "This park is known for its more than 2,000 sandstone arches.", "This park contains the largest known collection of late Eocene and Oligocene mammal fossils.", "Know for its arid canyons, this park is one of several parks that sit on the U.S. - Mexico border.  It also encompasses a large part of the Chihuahuan Desert.", "This park has four interrelated marine ecosystems and sits on the north end of the Florida Keys.", "This park is home to the deepest lake in the United States.  It is formed by the caldera of Mt. Mazama.", "This park is the is the hottest, lowest, and driest place in the United States. Daytime temperatures that have exceeded 130 °F (54 °C).", "This park is home to the tallest mountain in North America. ", "This park is comprised of the largest tropical wilderness in the United States.", "Located in the Rocky Mountains, this park includes 26 glaciers and 130 named lakes. ", "Over millions of years, the Colorado River has exposed this park’s grand multi-colored layers.  ", "Home to Jackson Hole, this park also boasts the tallest mountain in its namesake mountain range.", "This park is home to over 400 vertebrate species, 100 tree species, and 5000 plant species.  It’s namesake is a smaller chain located in the southern Appalachian Mountains.", "Two of the world's most active geological features are housed within this park. In 2018 the face of the park was forever altered.", "One large island, over 400 smaller islands, shipwrecks, waterways, and hiking trails compose this island in Lake Superior.", "This park stretches thought the Colorado and Mojave Deserts, as well as the Little San Bernardino Mountains. The park features sand dunes, dry lakes, mountains, monoliths, and many of its namesake.", "This park is home to the world’s longest known cave system.", "This park is home to one of the largest Ancestral Puebloan cliff dwelling.", "This park on the Pacific coast is home to the only rainforest in North America. ", "This park features cliffs of bentonite rock. It houses dinosaur follis, 225 million year old fossils and 350+ Native American sites.", "This park is home to the tallest trees on earth. ", "This park straddles the Continental Divide and is home to a scenic road which reaches more than 12,000 feet in elevation.", "Nestled in both the Rincon and Tucson Mountains, this park is home to barrel cacti, chollas, prickly pear, and its namesake.", "You will find General Sherman here, as well as the tallest mountain in the contiguous United States.", "A long and narrow park, you could travel this park by trail or by road, the two run nearly parallel. ", "Below ground, this park is famous for calcite formations called boxwork. Above ground, bison, black-footed ferrets, and prairie dogs still roam. ", "This park is situated on one of the largest calderas on earth.", "This park is home to granite cliffs, old-growth forests, three giant sequoia groves and one of North America's tallest waterfalls at 2,425 feet (739 m) high.", "Much of this park was formed by formed by forks of the Virgin River, which has divided it into four ecosystems: desert, riparian, woodland, and coniferous forest."]
    ];

    var parkIndex = parks.indexOf(chosenPark);
    var hintIndex = chosenPark.indexOf(word);
    showClue.innerHTML = " " + hints[parkIndex][hintIndex];
  };

  // RESET
  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    showClue.innerHTML = "";
    play();
  }
}
