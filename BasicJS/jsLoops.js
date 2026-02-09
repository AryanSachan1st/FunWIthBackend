let message = "Relax"

// So even though char is declared with const, it isn’t changed — it’s just redeclared fresh in each loop cycle.
for (const char of message) {
    // console.log(char)
}

/*
1. for-in loop can iterate through any type of data which has public properties (like indexes) --> but key will return the index value
2. for-of loop can only be used to iterate over iterable data like arrays, maps, strings and sets. It will directly return the value at the index position
*/

let arr = message.split("")
arr.forEach(element => { // used to iterate over arrays
    // console.log(element)
});

// MAPS-
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")

// attaching external properties in map using dot(.) operator (can be accessed using for...in loop)
map.name = "G-Map"
map.purpose = "provides map services to google's internal services"

for (const key in map) {
    console.log(key, map[key])
}

// console.log(map)
// console.log(map["IN"]) // will return undefined
/*
Some map functions-
map.get(key) --> returns the value corresponds to that key, returns undefined if not found
map.set(key, value) --> to insert and update
map.size --> returns the number of key value pairs in the map
map.has(key) --> checks whether the key exists in the map or not

IMPORTANT NOTE FOR MAPS-
When you use map.set("IN", "India"), the data is stored inside the Map's internal storage slots. It is NOT attached as a property like map.IN = "India".
*/

for (const [key, value] of map) {
    // console.log(value)
}

const superHeros = {
    'spider_man': 'web_shooters',
    'thor': 'lightning',
    'iron_man': 'tech'
}
const dc = ['flash', 'superman', 'wonder woman']

// for-in (arrays) - works fine
for (const key in dc) {
    // console.log(key, dc[key])
}

// for-in (objects) - works fine
for (const key in superHeros) {
    // console.log(key, superHeros[key])
}

// for-in (maps) - will not return anything
for (const key in map) {
    // console.log(map.get(key))
}

// for-of (objects) - will NOT work (Objects are not iterable)
// for (const key of superHeros) {
//     // console.log(key)
// }
for (const key of dc) { // for-of should only be used in iterables like arrays
    // console.log(key)
}

/*
for...in: Inspects Object Properties. (Map data is not a property [key]).
for...of: Consumes Iterators. (Map has a built-in iterator [key, value] to reveal its data).
*/

for (const [key, val] of map) { // maps are iterables
    console.log(key, val)
}

// For-each loop and its usage variations - for...each takes callback func: () => {}
dc.forEach(function (hero) {
    // console.log(hero)
})
dc.forEach((hero, index, array) => {
    console.log(hero, index*3, array) // can change the values in between
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
    // console.log(developer['name'], developer['tech'])
} )