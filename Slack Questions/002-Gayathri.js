/*
Problem: Search for a key in a nested object 
Write a function findValue that takes three arguments:

- A nested object data
- A target key to search for within the object
- An optional maxDepth parameter that specifies the maximum depth to search within the object. If maxDepth is not provided, the function should search through all levels.

The function should return an object with two properties:
- isFound: a boolean indicating whether the key was found within the specified depth.
- value: the value associated with the key if found, or null if not found.

Sample usage:

const data = {
  name: "Alice",
  info: {
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    },
    preferences: {
      color: "blue",
      hobbies: ["reading", "gardening"]
    }
  }
};

console.log(findValue(data, "city", 2)); 
// { isFound: false, value: null } (exceeds maxDepth of 2)   

console.log(findValue(data, "city", 3)); 
// { isFound: true, value: "Wonderland" }

console.log(findValue(data, "name")); 
// { isFound: true, value: "Alice" } (default depth search)
*/


const findValue = (data,targetKey,maxDepth = Infinity, currentDepth = 0) =>{
  
  if (currentDepth >= maxDepth) return {isFound:false, value:null}

  for(const key in data){
    if (key === targetKey){
      return {isFound:true, value:data[key]}
    }

    if(typeof data[key] === 'object' && data[key] !== null){
      const result = findValue(data[key], targetKey, maxDepth, currentDepth + 1)

      if(result.isFound){
        return result
      }
    }
  } 
                    
  return { isFound: false, value:null}
};
 
const data = {
  name: "Alice",
  info: {
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    },
    preferences: {
      color: "blue",
      hobbies: ["reading", "gardening"]
    }
  }
}; 

console.log(findValue(data, "city", 2));    
// { isFound: false, value: null } (exceeds maxDepth of 2)   

console.log(findValue(data, "city", 3)); 
// { isFound: true, value: "Wonderland" }

console.log(findValue(data, "name",0)); 
// { isFound: true, value: "Alice" } (default depth search)  

console.log(findValue(data,'hobbies',2))
console.log(findValue(data,'age',2))
console.log(findValue(data,'zip',2))
console.log(findValue(data,'color',3)) 
console.log(findValue(data,'info',1)) 