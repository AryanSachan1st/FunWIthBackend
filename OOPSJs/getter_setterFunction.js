function User(email, password) {
    Object.defineProperty(this, "email", {
        set: function(value) {
            console.log("Setter called for email...")
            this._email = value
        },
        get: function() {
            console.log("Getter called for email...")
            return this._email
        }
    })
    Object.defineProperty(this, "password", {
        set: function(value) {
            console.log("Setter called for password...")
            this._password = value
        },
        get: function() {
            console.log("Getter called for password...")
            return this._password
        }
    })

    // call the setters after defining them
    this.email = email;
    this.password = password;
}

const aryan = new User("arya@gmail.com", "1234#4321")
console.log(aryan.email)
console.log(aryan.password)