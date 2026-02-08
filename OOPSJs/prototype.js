const heros = {
    "thor": "hammar",
    "spider man": "web shooters",
    "iron man": "tech"
}
const warriors = ["Shivaji", "Maharana Pratap", "Rani Lakshmi Bai"]

Object.prototype.aryan = () => {
    console.log("Aryan is present in all objects")
}

heros.aryan()
warriors.aryan()