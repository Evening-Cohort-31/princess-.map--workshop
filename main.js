// take this array and using .map() add a crown emoji to in front of the Princess
const names = ["Tiana", "Snow White", "Aurora"];
const crownNames = names.map((name) => `👑 ${name}`)
console.log(crownNames)

//take this array and use .map() return an array of the princess names
const princesses = [
  { name: "Cinderella", kingdom: "Disney" },
  { name: "Mia", kingdom: "Genovia" },
  { name: "Peach", kingdom: "Mario World" }
];
const otherPrincess = princesses.map((princess) => princess.name)
console.log(otherPrincess)

 // take this array and use .map() return an array of the princess kingdoms
const princessKingdom = princesses.map(princess => princess.kingdom)
console.log(princessKingdom)

//take this array and use .map() return an array of the princess names and princess kingdom
const nameAndKingdom = princesses.map(princess => `Name:${princess.name} Kingdom:${princess.kingdom}`)
console.log(nameAndKingdom)



// change this for of loop --> .map()
const hailThePrincess = (nameString) => {
    return `Hail Her Majesty, ${nameString}`
}

//  shorthand function, implicit return 
// const hailThePrincess = (nameString) => `Hail her majesty, ${nameString} `

for (const name of names) {
    const hailMessage = hailThePrincess(name)
    console.log(hailMessage)
}

const mapHail = names.map((name) => hailThePrincess(name))

// chaining actions
console.log("tostring",mapHail.toString())
console.log("join", mapHail.join("\n"))