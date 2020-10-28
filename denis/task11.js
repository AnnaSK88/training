const tree = (levels, block = '*') => {
    const result = []; 
    let steps = levels;
    while (--steps) {
        result.push(Array(levels-steps).fill(block).join(''))
    }
    return result.join('\n');
}

console.log(tree(13));
