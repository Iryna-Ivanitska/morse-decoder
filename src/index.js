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
};

function decode(expr) {
    let output = '';
    
    for (let i = 0; i < expr.length / 10; i++) {
        let zeros = expr.slice(i*10,i*10+10);
        if (zeros === '**********') {
            output += ' ';
    } else {
        let number = parseInt(zeros).toString();
        let code = '';

        for (let j = 0; j < number.length / 2; j++) {
            if (number.slice(j*2,j*2+2) == '10') code += '.';
            if (number.slice(j*2,j*2+2) == '11') code += '-';
        }
        output += MORSE_TABLE[code]; 
    } 
          
}
return output;
}

module.exports = {
    decode
}