const marvel=["thor","aryan","iron","hulk"]
const DC= ["superman","flash","batman","shehulk"]

// marvel.push(DC)
// const allHeroes=marvel.concat(DC)
// console.log(allHeroes);

const all_new=[...marvel,...DC]
// console.log(all_new)
const another_array=[1,2,3,4,[4,5,6],7,[6,4,5,[8,9]]]

// const allarray=another_array.flat(Infinity)
// console.log(allarray);
console.log(Array.isArray("hello"))
console.log(Array.from("hello"))
console.log(Array.from({name:"hello"}))
let score1=100
let score2=200
let score3=400
console.log(Array.of(score1,score2,score3))

