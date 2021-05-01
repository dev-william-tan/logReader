const { table } = require("console");
let fs = require("fs");
const { maxHeaderSize } = require("http");
//regex for IP address
let r = /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/gm;
let urlregex = /(?<=GET)(.*?)(?=H)/gm; 
let file = fs.readFileSync("programming-task-example-data.log").toString('utf-8'); 

let IParray = getIP(file);
let URLarray = getURL(file);
let IPcount = countIP(IParray);

//retrieving the IP address from the text file 
function getIP(address){
  let result = address.match(r); 
  return result;
}

//retrieving the URL from text file
function getURL(url){
  let result = url.match(urlregex);
  return result;
}


//Counting the number of Unique IP Addresses 
function countIP(){
  let count = [];  
  let k = [];
  //if count matches then add 1 if not it will stay as 1 
  IParray.forEach (num => {
      count[num] = count[num] ? count[num] + 1 : 1;   
  }); 
  for (const [key] of Object.entries(count)){
    k.push(key);
  }
  console.log("Number of Unique IP Addresses: " + k.length);
}

function getTop3(){
  let count = [];
  let k = [];
  let v = [];
  IParray.forEach (num => {
    count[num] = count[num] ? count[num] + 1 : 1;   
  }); 
  for (const [key, value] of Object.entries(count)){
    k.push(key);
    v.push(value);
  }
  
  let getMax = v.sort((a,b) => b-a).slice(0,3);
  for (let i = 0; i < getMax.length; i++ ){
    let element = Object.keys(count).find(key => count[key] === getMax[i]);
    console.log(`Top 3 most repeated IP Addresses are ${element} with ${getMax[i]} repeated times`);
  } 

}

console.log(IPcount);
console.log(getTop3(IParray));
console.log(URLarray);
