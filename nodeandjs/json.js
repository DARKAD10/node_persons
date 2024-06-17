// json to object 
const { age } = require("./notes");

const jsonString ='{"name":"Jhon","age":30, "city":"New city"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);

// object to json 
const objectConv ={
    name: "akash", 
    age:211
};

const jsonStringfe = JSON.stringify(objectConv);
console.log(jsonStringfe);