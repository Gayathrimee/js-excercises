//  1
const isEqualTo = (a,b) => (a === 100 || b === 100 || a + b === 100)

console.log(isEqualTo(100,10))      // true
console.log(isEqualTo(50,20))       //false

// -------------------

// 2
const getStringExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getStringExtension('index.html'))       // .html
console.log(getStringExtension('script.js'))        // .js
console.log(getStringExtension('webpack.config.js'))        // .js (cuz we used last idx of string)


// -------------------

//3.
// functions used: - String.fromCharCode, - charCodeAt

const moveForward = (str) => str
                .split('')
                .map(char => 
                   char === 'z'? 'a': String.fromCharCode(char.charCodeAt(0) + 1)
                )
                .join('')
    
console.log(moveForward('zmzfgz'))
console.log(moveForward('fzxzsgqh'))
console.log(moveForward('zmfdk'))


// 4.
const formatDate = (date = new Date()) =>{
   const days = date.getDate()
   const months = date.getMonth() + 1
   const years = date.getFullYear()

   return `${days}/${months}/${years}`
}

console.log(formatDate())


// 5. 
// const newString = 'New!'

const addNew = (str) => str.indexOf('New!') === 0? str : `New! ${str}`

console.log(addNew('New! me'))

// 6.
const makeNewString = (str) => str.length < 3 ? str : str.slice(0,3) + str.slice(-3)

console.log(makeNewString('creating'))


// 7. 
const firstHalves = (str) => str.slice(0, str.length / 2)

console.log(firstHalves('temple'))

// 8. 
const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1)
console.log(concatenate('aabc','ddef'))

// 9.
const nearestTo100 = (a,b) => (100-a) < (100-b) ? a : b
console.log(nearestTo100('20','30'))