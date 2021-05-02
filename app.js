//regex for IP address
let IPregex = /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/gm;
let urlregex = /(?<=GET)(.*?)(?=HTTP)/gm; 
let fs = require("fs");
let file = fs.readFileSync("programming-task-example-data.log").toString('utf-8'); 
let IParray = getIP(file);
let URLarray = getURL(file);

//exports for testing 
module.exports = {
  getIP,
  getURL,
  countUnique,
  getTop3,
}; 

//calling the functions to get results 
console.log('Number of Unique IP Addresses: ' + countUnique(IParray));
getTop3(IParray);
getTop3(URLarray);

//retrieving the IP address from the text file 
function getIP(address){
  let result = address.match(IPregex); 
  return result;
}

//retrieving the URL from text file
function getURL(url){
  let result = url.match(urlregex);
  return result;
}

//Counting the number of unique values 
function countUnique(arr){
  let uniqueValue = new Set(arr).size;
  return uniqueValue;
}

//getting the top 3 most repeated/visited number from an array/object
function getTop3(arr){
  let count = [];
  arr.forEach (num => {
    count[num] = count[num] ? count[num] + 1 : 1;   
  }); 
  //Object.entries turns the object into Arrays 
  let sortCount = Object.entries(count).sort(([,a],[,b]) => b-a).slice(0,3);
  //getting the top 3 after sorting them from highest to lowest. 
  let firstURL = sortCount[0];
  let secondURL = sortCount[1];
  let thirdURL = sortCount[2];
  console.log(`Top 3 Most visited : \n First: ${firstURL} times. \n Second: ${secondURL} times. \n Third: ${thirdURL} times.`);
  return sortCount;
}

