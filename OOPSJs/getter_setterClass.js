class User {
    #name // true private variable (must declare it)
    constructor(nameV, rollNoV) {
        console.log("Constructor called...")
        this.name = nameV // <-- this line triggers the setter below (this.name = value == this.setName(value))
        this.rollNo = rollNoV // calling setter for rollNo (roll no --> public variable)
    }

    set name(value) { // nameV will be passed as value
        console.log("Setter called for", value);
        if (value.length < 3) {
            console.log("Name is too short!")
        } else {
            this.#name = value // assigning the value to the actual variable
        }
    }

    get name() {
        console.log("Getter called for name...")
        return this.#name
    }

    set rollNo(value) { // rollNoV will be passed as value
        console.log("Setter called for roll no...")
        this._rollNo = value
    }

    get rollNo() {
        console.log("Getter called for roll no...")
        return this._rollNo
    }
}

const aryan = new User("Aryan", 21) // constructor called
console.log(aryan.name) // calling getter for aryan
// console.log(aryan.#name) // directly trying to access true private variable --> error
console.log(aryan.rollNo)
console.log("Public variable: ", aryan._rollNo) // public variable
// Note: If we want read only access then we can define the getters and won't define the setters to avoid write access, ex: we can read the length of array but can write the length of array like arr.length = 5 (❌ wrong)