function User(username, email) {
    Object.defineProperty(this, "email", {
        set: function(value) {
            console.log("Calling setter for email--")
            this._email = value
        },
        get: function() {
            console.log("calling getter for email--")
            return this._email
        }
    })
    Object.defineProperty(this, "username", {
        set: function(value) {
            console.log("Calling setter for username--")
            this._username = value
        },
        get: function() {
            console.log("Calling getter for username--")
            return this._username
        }
    })
    
    this.username = username
    this.email = email
}
const aryan = new User("aryan sachan", "aryan@google.com")
console.log(aryan.username);
console.log(aryan.email);
