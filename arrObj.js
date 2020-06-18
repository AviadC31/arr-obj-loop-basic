//***Session 1***//

/*EX1*/
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
var CRUD = []
CRUD[0] = genes[0]
CRUD[1] = genes[1]
CRUD[2] = genes[4]
CRUD[3] = genes[2]
CRUD.push(genes[3],genes[3])
CRUD.unshift("FXT")
//console.log(CRUD)

/*EX2*/
let car = {
    color: "brown",
    numWheels: "four",
    isFancy: false
}
//console.log("The",car.color,"car has",car.numWheels,"wheels.")
//if(car.isFancy) console.log("It is fancy")
//else console.log("It is not fancy")

/*EX3*/
const itemsOrder = {
    item: "bamba",
    toBeginning: true,
    items: ['bisli','kifly']
}
if(itemsOrder.toBeginning) itemsOrder.items.unshift(itemsOrder.item)
else itemsOrder.items.push(itemsOrder.item)
//console.log(itemsOrder.items)
 

//***Session 2***//

//EX1//
const p1={
    name:"Ruth",
    age:"25",
    city:"Tel Aviv"
}
const p2={
    name:"Beni",
    age:"25",
    city:"Haifa"
}
//if(p1.age==p2.age)
//if(p1.city==p2.city) console.log(p1.name,"wanted to date",p2.name)
//else console.log(p1.name,"wanted to date",p2.name,",but couldn't")

/*EX2*/

const myList = [
    {
  a:"1",
  b:"2"
 }, 
    {
  a:"1",
  b:"2"
 }]
myList[0].a='2'
myList.splice(1)
//console.log(myList)

/*EX3*/
const myList2 = [
    obj1={
 a:"1",
 b:"2"
}, 
    obj2={
 a:"1",
 b:"2"
}]
myList.push(myList2[0],myList2[1])
//console.log(myList)

/*EX4*/
const library={
    books: [
         {
        title: "abc",
        author: "Rami"
    },
        {
        title: "adce",
        author: "Yoram"
    }]
}
myList.push(library.books[0],library.books[1])
//console.log(myList)

/*EX5*/
