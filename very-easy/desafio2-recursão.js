function chunker(n) {
    if (n === 0) {
        return '';
    }

    return n === 1 ? 'chunk' : 'chunk-' + chunker(n - 1);

    //// forma alternativa:
    // if (n === 1) {
    //     return 'chunk';
    // } else {
    //     return 'chunk-' + chunker(n - 1);
    // }
}

console.log(chunker(4)); // chunk-chunk-chunk-chunk
console.log(chunker(1)); // chunk
console.log(chunker(8)); // chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk
console.log(chunker(2)); // chunk-chunk