class User {
    constructor(username, email) {
        this.username = username
        this.email = email
    }
    getEmail() {
        return `${this.username}'s email: ${this.email}`
    }
}
class Teacher extends User {
    constructor(username, email, age, password) {
        super(username, email)
        this.age = age
        this.password = password
    }
    static getPassword() { // this function can't be accessed from outside
        return `${this.username}'s password: ${this.password}`
    }
    getAge() {
        return `${this.username}'s age: ${this.age}`
    }
    sudoGetter() { // sudo getter to execute the static password
        return this.getPassword()
    }
}

const siddhu = new User("Siddhu", "sid@gmail.com")
const amulya = new Teacher("Amulya", "amul@outlook.com", 29, "12345")

console.log(`Siddhu is a User, ${siddhu instanceof User}`)
console.log(`Siddhu is a Teacher, ${siddhu instanceof Teacher}`)

// Teacher is inherited from User
console.log(`Amulya is a User, ${amulya instanceof User}`)
console.log(`Amulya is a Teacher, ${amulya instanceof Teacher}`)

console.log(siddhu.getEmail())
console.log(amulya.getEmail())
console.log(amulya.getAge())
// console.log(amulya.getPassword()) // will throw an error --> TypeError: amulya.getPassword is not a function
// console.log(amulya.sudoGetter()) // will throw an error --> can't be invoked by sudoGetters also