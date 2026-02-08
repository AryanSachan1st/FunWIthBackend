let message = "Relax"

// So even though char is declared with const, it isn’t changed — it’s just redeclared fresh in each loop cycle.
for (const char of message) {
    // console.log(char)
}

/*
1. for-in loop can iterate through any type of data --> but key will return the index value
2. for-of loop can only be used to iterate over iterable data like arrays, maps, strings and sets. It will directly return the value at the index position

// Recommended: Use for...in to iterate over objects, and use for...of to iterate over iterable data (like arrays, strings, maps, sets, etc.).
*/

let arr = message.split("")
arr.forEach(element => { // used to iterate over arrays
    // console.log(element)
});

//Maps
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")

// console.log(map)

for (const [key, value] of map) {
    // console.log(value)
}

const superHeros = {
    'spider man': 'web shooters',
    'thor': 'lightning',
    'iron man': 'tech'
}
const dc = ['flash', 'superman', 'wonder woman']
for (const key in dc) { // for-in loop will return the index number as keys in object
    // console.log(dc[key])
}
for (const key in superHeros) { // we can iterate through objects using for-in loop
    // console.log(key)
}
for (const key in map) { // not return anything in case of maps.
    console.log(key)
}
// for (const key of superHeros) { // Object is not iterable
//     console.log(key)
// }
for (const key of dc) { // for-of should only be used in iterables like arrays
    // console.log(key)
}
for (const [key, val] of map) { // maps are iterables
    // console.log(key, val)
}

// For-each loop and its usage variations
dc.forEach(function (hero) {
    // console.log(hero)
})
dc.forEach((hero, index, array) => {
    // console.log(hero, index, array)
})
// dc.forEach(printMe)
function printMe(item) {
    // console.log(item)
}

const devsFav = [
    {
        'name': 'Aryan',
        'tech': 'AI/ML'
    },
    {
        'name': 'Kartik',
        'tech': 'Backend'
    },
    {
        'name': 'Ritik',
        'tech': 'cyber security'
    }
]
devsFav.forEach( (developer) => {
    console.log(developer['name'], developer['tech'])
} )