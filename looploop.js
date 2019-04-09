'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    let i = 0;
    let results = [];

    for (i = 0; i < queries.length; i++) {
        let find = queries[i];
        process.stdout.write(JSON.stringify(find));

        let count = 0;

        let e = 0;
        for (e = 0; e < strings.length; e++) {
            process.stdout.write(JSON.stringify(find));
            if (strings[e] == find) {
                count += 1;
            }
            //results.push
            //text += cars[i]
        };
        results.push(count);
        count = 0;
    };
    process.stdout.write(JSON.stringify(results));

    return results;

}

function main() {
    const ws = fs.createWriteStream('hacker_rank_write_file_loop.txt');

    const stringsCount = parseInt(readLine(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    let res = matchingStrings(strings, queries);

    ws.write(res.join("\n") + "\n");

    ws.end();
}
