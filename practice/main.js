// A business name generator 
let a = Math.ceil(Math.random()*3);
let b = Math.ceil(Math.random()*3);
let c = Math.ceil(Math.random()*3);

const adjactives = {
    1: 'Awesome',
    2: 'swift',
    3: 'delight'
}
const words = {
    1: 'lenin',
    2: 'schwab',
    3: 'morgans'
}
const suffix = {
    1: 'pvt. ltd.',
    2: 'company',
    3: 'limited'
}

console.log(`${adjactives[a]} ${words[b]} ${suffix[c]}`);