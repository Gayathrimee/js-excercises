// 1.
const theNumbers = (a,b) => a === 100 || b === 100 || (a + b === 10)

console.log(theNumbers(0,10))
console.log(theNumbers(100,100))
console.log(theNumbers(20,80))

// 2.
const fileExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(fileExtension('index.html'))


// 3. 
const moveForward = (str) => str
                .split('')
                .map(char =>
                    char === 'z'? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)
                )
                .join('')

console.log(moveForward('djasklfh'))