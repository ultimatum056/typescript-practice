let sales: number = 123_456_789;
let course = 'Typescript'
let level;

console.log(sales);

function render (document: any) {
    console.log(document)
}

// arrrays
let numbers: number[] = [1,2,3];
let numbersArr2: Array<number> = [4, 5, 2];

// tuples

let user: readonly [number, string] = [1, 'Mosh'];
// user.push('break type safety');
console.log('// user', user)