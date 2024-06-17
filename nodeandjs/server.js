// function add(a,b)
// {
//     return a+b;
// }
 
// var result = add(2,9) ;
//  //calling function 
//  console.log(result);
//  console.log("read");
// const add = function (a,b){
//     return a+b;
// }

// const result = add(2,4);
// console.log (result);

// const add = (a,b) => a+b;// short cut of function 

// const result = add(50,10);
// console.log (result);

// (function(){
//    console.log("function directly run vayo");

// })();

//call back function 
// function callback(){
//     console.log("it will be called by another fun");
// }


// function muni define garera gareko
// const add = function (a,b,king){
//    const result =a+b;
//    console.log("result is:"+result)
//     king();// call back fun calling
// }
// // add(3,5,function (){
// //     console.log("result yeta")
// // });
// // short form mathiko 
// add(3,5,() =>console.log("short wala add"));

const  notes = require ("./notes");
// connect another js wuth each other
console.log("server is loadeeeeed");

const age = notes.age;

const result = notes.addNum(age+8, 10);
console.log(result)



const _ = require("lodash");


var data =["person", "person",1,2,3,"name","age",1,2,"2"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString());



