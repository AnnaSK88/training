const input = 'hello world';
const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

const crypt = (source, rot) => {
    return input.split('').reduce((result, item) => {
        const index = abc.indexOf(item);
        if (index !== -1) {
            result += index + rot > abc.length ? abc[index + rot - abc.length] : abc[index + rot]
            return result;
        }
        result +=' ';
        return result;
    }, '')
}

console.log(crypt(input, 1));