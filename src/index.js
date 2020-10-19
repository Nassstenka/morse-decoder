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
    let i = 0;
    let result = "";
    while (i < expr.length) {
        let tempString = expr.substring(i, i + 10);
        i += 10;
        if (tempString === "**********") {
            result += " ";
            continue;
        }
        let codeString = "";
        for (let j = 0; j < tempString.length - 1; j += 2) {
            let duo = tempString[j] + tempString[j + 1];
            if (duo === "10") codeString += "."
            else if (duo === "11") codeString += "-";
        }
        result += MORSE_TABLE[codeString];
    }
    return result;
}

module.exports = {
    decode
}