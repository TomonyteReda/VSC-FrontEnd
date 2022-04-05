/* Sukurkite html dokumentą
Sukurkite script.js failą
Html dokumente užkraukite javascript iš script.js failo.
script.js faile:
Sukurkite skirtingų tipų kintamuosius, naudokite let ir const
Panaudokite matematines operacijas
Panaudokite string formatingą su string literals
Panaudokite lyginimo operacijas == ir ===
Kiekvieno žingsnio rezultatus atspausdinkite consolėje su console.log */

console.log("Labas vakaras");
const constValue = "konstanta"
console.log(constValue)
let variableValue = '200'
let boolValue = true
let empltyValue
let nullValue = null
console.log(variableValue)
console.log(boolValue)
console.log(empltyValue)
console.log(nullValue)
let calcValue = variableValue + 100 / 5 * 20 % 3
console.log(calcValue)
let text = "Hello World"
let text1 = '!'
let greetings = `${text}${text1}`
console.log(greetings)
console.log(greetings[0]+greetings[1])
console.log(greetings+text1+text1)
let multipleLines = greetings + '\n' + greetings + '\t' + boolValue
console.log(multipleLines)
let valueNum = Number(calcValue)
console.log(typeof(calcValue))
console.log(typeof(valueNum))
console.log(variableValue+1 == calcValue)
console.log(variableValue+1 == valueNum)
console.log(variableValue+1 === valueNum)
for (var i=1; i<100; i+=20) {
    console.log(i)
}

