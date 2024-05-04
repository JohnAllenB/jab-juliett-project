$(document).ready(function() {
  $('#generateBtn').click(function() {
    var text = $('#inputText').val();
    var natoPhonetic = generateNato(text);
    var civilianPhonetic = generateCivilian(text);
    $('#output').html('<strong>NATO:</strong> ' + natoPhonetic + '<br> <strong>Civilian:</strong> ' + civilianPhonetic);
  });
});

function generateNato(text) {
  var natoAlphabet = {
    'A': 'Alpha',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu'
  };

  var upperText = text.toUpperCase();
  var phonetic = '';

  for (var i = 0; i < upperText.length; i++) {
    var char = upperText[i];
    if (natoAlphabet[char]) {
      phonetic += natoAlphabet[char] + ' ';
    } else {
      phonetic += char + ' ';
    }
  }

  return phonetic.trim();
}

function generateCivilian(text) {
  var civilianAlph = {
    'A': 'Adam',
    'B': 'Boy',
    'C': 'Charlie',
    'D': 'David',
    'E': 'Edward',
    'F': 'Frank',
    'G': 'George',
    'H': 'Henry',
    'I': 'Ida',
    'J': 'John',
    'K': 'King',
    'L': 'Lincoln',
    'M': 'Mary',
    'N': 'Nora',
    'O': 'Ocean',
    'P': 'Paul',
    'Q': 'Queen',
    'R': 'Robert',
    'S': 'Sam',
    'T': 'Tom',
    'U': 'Union',
    'V': 'Victor',
    'W': 'William',
    'X': 'X-ray',
    'Y': 'Yellow',
    'Z': 'Zebra'
  };

  var upperText = text.toUpperCase();
  var phonetic = '';

  for (var i = 0; i < upperText.length; i++) {
    var char = upperText[i];
    if (civilianAlph[char]) {
      phonetic += civilianAlph[char] + ' ';
    } else {
      phonetic += char + ' ';
    }
  }

  return phonetic.trim();
}
