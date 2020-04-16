process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let string;

    while ((string = process.stdin.read()) !== null) {
        process.stdout.write(reverseStringExceptNewline(string));
    }
});

function reverseStringExceptNewline(str) {
    return str.split("").reverse().join("").substr(1) + '\n';
}
