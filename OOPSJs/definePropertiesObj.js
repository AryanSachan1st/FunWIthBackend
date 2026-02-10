const jsonData = Object.getOwnPropertyDescriptor(Math, "PI") // (Object, property)
console.log(jsonData)

const user = {
    name: "Aryan Sachan",
    age: 22,
    tech: {
        language: ["java", "javascript"],
        tools: ["git", "wsl", "vscode"],
        domain: ["web development", "genAI"]
    },
    getName: function() {
        return this.name
    }
}

Object.defineProperty(user, "name", {
    value: "Kartik",
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user, "name"))
console.log(user.name) // displaying
console.log(user.getName()) // displaying

// Objects.entries() and loops only returns enumerable properties
for (const [key, val] of Object.entries(user)) {
    if (typeof val !== "function") {
        console.log(`${key}: ${val}`)
    }
}

/* use of configurable flag-
So once 'configurable' is 'false', you cannot:
1. Delete the property
2. Redefine it with Object.defineProperty
3. Change its enumerable, configurable, or writable flags
*/

const superhero = {
    name: "Peter Parker",
    role: "Spider man",
    strenghts: {
        "physical": "sticking and crawling the walls like spider",
        "sensical": "peter tingle",
        "attack": "web shooters",
        "raw": "strength up to hold an entire ship breadking aparts from between"
    }
}
Object.defineProperty(superhero, "role", {
    value: "Spider man",
    writable: false,
    enumerable: true,
    configurable: false
})
superhero.role = "thor" // will not show up because writable is false in superhero
for (const [key, val] of Object.entries(superhero)) {
    console.log(`${key}: ${superhero[key]}`)
}