const fs = require('fs');

function elevator() {
    fs.readFile('./instructions.txt', (err, data) => {
        const instructions = data.toString();
        const instructionsArray = instructions.split('');
        const floor = instructionsArray.reduce((acc, currVal) => {
            if (currVal === '(') {
                return acc += 1;
            }
            else if (currVal === ')') {
                return acc -= 1;
            }
        }, 0);
        console.log(floor);
    })
}

elevator();

function basement() {
    fs.readFile('./instructions.txt', (err, data) => {
        const instructions = data.toString();
        const instructionsArray = instructions.split('');
        let acc = 0;
        let counter = 0;
        const floor = instructionsArray.some((currVal) => {
            if (currVal === '(') {
                acc += 1;
            }
            else if (currVal === ')') {
                acc -= 1;
            }
            counter++;
            return acc < 0;
        });
        console.log(counter);
    })
}

basement();

