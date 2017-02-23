
// local storage entries are per application (per UUID)

var key = '1452431391977'; // date as a string in milliseconds,  === Sun Jan 10 2016 15:09:51 GMT+0200 (EET)

var observation = '{ "species": "Tringa totanus",
                     "location": [
                     	"60.195892", 
                     	"24.9587945"],
                     "count": "2",
                     "time": "1452431391977"}';  // json as a string

// Write a key with associated value
localStorage.setItem(key, value);

// Read a key's value. May be null!
var value = localStorage.getItem(key);


