let symb = Symbol("mysym1")
const JsUser = {
    id: 1,
    name: "Aryan",
    tech: "AI engineer",
    [symb]: "mySymbolValue" // initializing symbol property
}
// console.log(JsUser);
// console.log(JsUser.tech)
// console.log(JsUser["tech"])

// assigning additional parameter
JsUser.greetings = function() {
    console.log(`Hello ${this.name}, welcome to the world of JavaScript Objects!`)
}
// JsUser.greetings()

Object.freeze(JsUser) // prevent modification to the object
JsUser.id = 2 // will not change (no output)
JsUser.age = 22 // will not add (no output)
// delete JsUser["name"] // will not delete

// console.log(JsUser)

const singletonObj = new Object() // creating object using Object constructor
// console.log(typeof singletonObj)

const userDetails = {
    userId: 101,
    userName: "aryuCrazy",
    hobbies: {
        tech: {
            languages: ["Java", "JavaScript", "Python"],
            frameworks: ["React", "Node.js", "Django"],
            AI: ["TensorFlow", "PyTorch", "Keras"]
        },
        sports: ["Cricket", "Chess", "Badminton"]
    },
    isActive: true
}
// console.log(userDetails.hobbies?.tech?.AI[0]) // Optional chaining to access nested properties, '?.' prevents errors if any property is undefined

const additionalInfo = {
    location: "India",
    profession: "Developer"
}
const mergedUserDetails = {...userDetails, ...additionalInfo} // Merging two objects using spread operator
console.log("Merged User: ", mergedUserDetails)

const wrappedUser = {
    id: "Generate-123",
    // Spreading 'additionalInfo' INSIDE the 'details' key
    details: { ...additionalInfo }
}
console.log("Wrapped User: ", wrappedUser);

const assignedObj = Object.assign({}, userDetails, additionalInfo) // Merging two objects using Object.assign() (same as spread operator)
console.log("Mergrig objects using assign: ", assignedObj)

const objKeys = Object.keys(userDetails)
console.log(objKeys) // Getting all keys of the object
console.log(typeof objKeys) // object

const objValues = Object.values(userDetails)
// console.log(objValues) // Getting all values of the object

const objEntries = Object.entries(userDetails)
console.log(objEntries) // Getting all key-value pairs as an array of arrays

// console.log(userDetails.hasOwnProperty("userName")) // Checking if a property exists in the object

const {tech} = userDetails.hobbies // Destructuring to extract 'tech' hobbies
const {tech: tech_hobbies} = userDetails.hobbies // renaming tech -> tech_hobbies
console.log(tech)

// to check whether an object is empty or not
if (Object.keys(userDetails).length === 0) {
    // console.log("Object is empty")
}