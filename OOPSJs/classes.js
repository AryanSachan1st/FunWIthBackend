class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass() {
        return `class encrypted password for ${this.username}: $%$#${this.password}#$%`
    }
    modifyUserName() {
        return `class modified username: ${this.username.toUpperCase()}`
    }
}
const aryan = new User("Aryan", "aryu@mad.com", "ary@n007")
console.log(aryan)
console.log(aryan.encryptPass())
console.log(aryan.modifyUserName())

// Insider's lens-
function UserFunc(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
UserFunc.prototype.encryptPass = function() { // never use arrow functions because they do not have their own 'this'
    return `function() encrypted password for ${this.username}: $%$#${this.password}#$%`
}
UserFunc.prototype.modifyUserName = function() {
    return `function() modified username: ${this.username.toUpperCase()}`
}

const kunal = new UserFunc("Kunal", "kun@al.com", "kunal#007")
console.log(kunal)
console.log(kunal.encryptPass())
console.log(kunal.modifyUserName())