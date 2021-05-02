let fs = require("fs");
//regex for IP address
let r = /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/gm;
let urlregex = /(?<=GET)(.*?)(?=HTTP)/gm; 
let file = fs.readFileSync("programming-task-example-data.log").toString('utf-8'); 

let IParray = getIP(file);
let URLarray = getURL(file);

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
  };
  console.log("Number of Unique URLs: " + k.length);
}

function getTop3(){
  let count = [];
  IParray.forEach (num => {
    count[num] = count[num] ? count[num] + 1 : 1;   
  }); 
  //Object.entries turns the object into Arrays 
  let sortCount = Object.entries(count).sort(([,a],[,b]) => b-a).slice(0,3);
  //getting the top 3 after sorting them from highest to lowest. 
  let firstURL = sortCount[0];
  let secondURL = sortCount[1];
  let thirdURL = sortCount[2];
  console.log(`Top 3 Most visited URLS: \n First: ${firstURL} times. \n Second: ${secondURL} times. \n Third: ${thirdURL} times.`);
}

function countUnique(iterable){
  let val = iterable; 
  let first10char =  val[1].substring(0,10);
  console.log("this is 10 letters" + first10char);
  return new Set(iterable);
}

//console.log(countUnique(URLarray));

//console.log(countIP(IParray));
//console.log(getTop3(IParray));
//console.log(URLarray);
