const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let symb = '';
      for (let i = 0; i < expr.length; i += 10) {
        symb = symb + ',' + expr.slice(i, i + 10).replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
      }
    let arr = symb.split(',').slice(1);
   
    let keys = Object.keys(MORSE_TABLE);
    for (let i = 0; i < Object.keys(MORSE_TABLE).length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (keys[i] === arr[j]) {
          arr.splice(j, 1, MORSE_TABLE[keys[i]]);
        }
      }
    }
    return arr.join('');
};

module.exports = {
    decode
}