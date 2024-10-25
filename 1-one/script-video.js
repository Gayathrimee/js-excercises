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
console.log(nearestTo100('120','130'))

// 10.
const countChars = (str,char) =>
   str.split('').filter(ch => ch=== char).length

const count2To4 = (str,char) =>
   countChars(str,char) >=2 && countChars(str,char) <= 4

console.log(count2To4('ooooooh','o'))
console.log(count2To4('ooooh','o'))
console.log(count2To4('oh','o'))

// or
const charCount = (str,char) => (str.split(char).length - 1) > 1 && (str.split(char).length -1) < 5
console.log(charCount('moooo','o'))

// 11.
const evenNumbers = (arr) =>
      arr.filter(num => num % 2 === 0).length

console.log(evenNumbers([1,2,3,4,5,6]))
console.log(evenNumbers([1,1,3,3,5,5]))
console.log(evenNumbers([2,2,4,4,6,6]))

// 12. 
const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).length

const createArray = (num) =>{
   const returnArray = []

   for(let i = 1; i <= num; i+= 1){
      returnArray.push(i)
   }

   return returnArray
}

console.log(countEvenNumbers(createArray(4))) 

// 13. 
const isAscending = (arr) =>{
   for(let i = 0; i < arr.length; i++){
      if(arr[i + 1] < arr[i]) return false
   }

   return true
}
console.log(isAscending([1,3,2,5,1]))
console.log(isAscending([1,2,3,4]))

// 14. 
const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0 ))
console.log(largestEven([5,1,6,10,3,11]))
console.log(largestEven([1,5,1]))      // this return -infinity

// 15.
const replaceDigit = (str) => str.replace(/[0-9]/,'$')
// const replaceDigit = (str) => str.replace(/[0-9]\g/,'$')    //can also write like these
// const replaceDigit = (str) => str.replace(/\d/,'$')

console.log(replaceDigit('1asdf'))
console.log(replaceDigit('asd 1545 dsff'))
console.log(replaceDigit('asdfd5487'))

// 16.
const isLeapYear = (year) => year % 4 === 0;
console.log(isLeapYear(2014))
console.log(isLeapYear(2015))
console.log(isLeapYear(2016))
console.log(isLeapYear(2017))
console.log(isLeapYear(2018))

// 17.
const objA = {a:1, b:2, d:1}
const objB = {a:1, b:1, c:1}
const objC = {a:1, b:2, d:1}

const objectsEqual = (a,b) => 
   Object.keys(a).every(key => b[key])

console.log(objectsEqual(objA,objB)) 
console.log(objectsEqual(objA,objC)) 
console.log(objectsEqual(objC,objB)) 

// 18.
const parseCSV = (csvString) => 
   csvString.split('\n').map(row => row.split(','))

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

console.log(parseCSV(str))

// 19.
const getRandomNum = () => Math.floor(Math.random() * 16).toString(16)

const getRandomClr = () => '#' + Array.from({length:6}).map(getRandomNum).join('')

console.log(getRandomClr())
console.log(getRandomClr())
console.log(getRandomClr())
console.log(getRandomClr())

// 20.
console.log([1,2,3,4,5].every(x => x > 0))
console.log([1,2,3,4,5].every(x => x > 3))

// or 
const isEveryElem = (arr,fn) => {
   for(let i = 0; i< arr.length; i++){
      if(!fn(arr[i])){
         return false
      }
   }
   return true
}

console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))
console.log(isEveryElem([1,2,3,4,5], (x) => x > 3))