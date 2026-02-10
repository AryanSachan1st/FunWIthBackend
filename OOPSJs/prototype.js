const heros = {
    "thor": "hammar",
    "spider man": "web shooters",
    "iron man": "tech"
}
const warriors = ["Shivaji", "Maharana Pratap", "Rani Lakshmi Bai"]

// .prototype is not available for instances
Object.prototype.aryan = () => {
    console.log("Aryan is present in all objects")
}
heros.aryan()
warriors.aryan()

// directly assign a separate property/function to an instance
heros.org = function() {
    console.log("These heros belong to marvel")
}
heros.org()