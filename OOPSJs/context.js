function setUserName(username) {
    this.username = username
}

function User(username, email, age) {
    setUserName.call(this, username) // .call(this, ..parameters..) gives the context of current func() to the called func()
    this.email = email
    this.age = age
}

// So, the username is set by setUsername() but the context should belongs to User() function because the setUsername()'s execution contexet will be removed from call stack as soon as it executes, therefore its properties(this.username) will also be removed and never assigned back to the User().
// To avoid that, we use "helperFunc.call(this, ..parameters..)"

const aryan = new User("Aryan Sachan", "aryuCr@zy.com", 22)
console.log(aryan)