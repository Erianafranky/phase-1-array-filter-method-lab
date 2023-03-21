// Code your solution here
//function to  return the matching list of drivers. The function should be case insensitive
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === attribute.toLowerCase() })
  }

//function that returns all drivers whose names begin with the provided letters
function fuzzyMatch(name, attribute){
    return name.filter(function(names) {
        return names.slice(0, attribute.length) === attribute
    })
} 

//function to  return each element whose name property matches the provided string argument.
function matchName(names, attribute) {
    return names.filter(function (driver) {
         return driver.name === attribute 
    })
  }
