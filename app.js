//hackerrank challenge with node
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    console.log('input is '+inputStdin);
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    console.log('grabbed values'+inputString);
    main();
    console.log('finished running code');
});

function readLine() {
    console.log('readline '+ inputString);
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    console.log('compare '+ a +' '+b +' a length '+ a.length);
    let scoreA = 0;
    let scoreB = 0;
    for(let i=0; i<a.length; i++) {
        if (a[i]>b[i]) {
            console.log('a score ');
            scoreA++;
        } else if (b[i]>a[i]) {
            console.log('b score ');
            scoreB++;
        } 
    }
    console.log('final '+[scoreA, scoreB]);
    return [scoreA, scoreB];
}

function main() {
    const ws = fs.createWriteStream('hacker_rank_write_file.txt');
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    console.log('main a '+a);
    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));
    console.log('main b '+b);
    const result = compareTriplets(a, b);
    console.log('main result '+result);
    ws.write(result.join(' ') + '\n');
    console.log('solution is written');
    ws.end();
}


//-hackrank style below--------------------------------------------
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     console.log(inputStdin);
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the compareTriplets function below.
// function compareTriplets(a, b) {
//     console.log('compare ' + a + ' ' + b + ' a length ' + a.length);
//     let scoreA = 0;
//     let scoreB = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             console.log('a score ');
//             scoreA++;
//         } else if (b[i] > a[i]) {
//             console.log('b score ');
//             scoreB++;
//         }
//     }
//     console.log('final ' + [scoreA, scoreB]);
//     return [scoreA, scoreB];

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

//     const result = compareTriplets(a, b);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }

