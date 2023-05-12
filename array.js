/* let myarray=['elumalai','ganesh','mathiew']
console.log(myarray);
const data=myarray.push(25);
console.log(data);
console.log(myarray.length);
console.log(myarray);
 */
//..........................................pop()----delete end of the array

// let remove=myarray.pop()
// console.log(myarray);
//----------------------------------------shift()---delete begining of the array

// let deletefront=myarray.shift();
// console.log(myarray);

//--------------------------------------unshift()---add begining of the array

// let addfront=myarray.unshift('hi mchi')
// console.log(myarray);


//--------------------------------------for in loop-----if key based data (object) we will using for in loop
// for(let mydatas in myarray){
//     console.log(myarray[mydatas])
// }

//-----------------------------------for of loop-----if index based data (array) data we will using for of loop
// for(let myword of myarray){
//     console.log(myword);
// }

//-----------------------------------forEach method
// myarray.forEach((item,index)=>
//     console.log(index)
// )

//=======================================================================================================================================================

//-------------------------------- filter(callback function)

//step 1
// let age=[7,8,12,45,66]

// mylimite=age.filter((myage)=>{return myage<13})
// console.log(mylimite);

// step 2
// let data=[
//     {name:"elumalai",age:30,skill:"js"},
//     {name:"elumalai2",age:28,skill:"js"},
//     {name:"malai",age:29,skill:"css"},
//     {name:"elu",age:29,skill:"html"},
//     {name:"siva",age:27,skill:"automobil"}
// ]

// let filtered_by=data.find(eachdata=>{
//     return eachdata.skill=="js"
// });
// console.log(filtered_by);

//-----------------------------------------------------includes


/* let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);

 */
//==============================================================================map()==============================
//step 1
/* let mymap=["mskdj","tere","ewew","vdsk"]
let newMap=mymap.map(newmap=>{return "my learn" +newmap})
console.log(newMap); */
//step 2
/* let testcode=[1,2,3,4,5];
let netest=testcode.map(neew=>{
    return neew*5
})
console.log(netest); */


///===========for loop ====================

/* let myarray=['elumalai','ganesh','mathiew'];
const count=myarray.length;
for(let i = count; i>=0; i--){
    console.log(myarray[i])
}
 */

//===================splice method====================
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2,1,"elumalai",'carrpt');

console.log(fruits) */

///===============filter===================
/* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length == 5);

console.log(result); */
//===============================infinity loop=============

/* let data = [100,245,6482,"dfgd","5421","oikd"];
for(let t = 0; t<=6; t++ )
{
    console.log(`hi i am ${t}`);
} */

let data = [1,2,3,5,5,4,4,2,2];
functionremoveDuuplicat(data){

    idrat = []
    
    
}