// excercise 1
// Write a js pgm to check 2 no.s and return true if one of the no. is 100 or if the sum of the 2 no. is 100

let a = 100
let b = 10
let isChecked = false 

if(a === 100 || b === 100){
    isChecked = true

} else if(a + b === 100){
    isChecked = true 

} else{
    isChecked = false
}


if(a === 100 || b === 100 || a + b === 100){
    isChecked = true
} else {
    isChecked = false
}

console.log(isChecked)
// right
// ------------------------

// 2. write a js pgm to get the extension of a filename 

const fileExtension = (word) => (word)

// ...was not able to do

// ------------------------

// 3. write a js pgm to replace every character in a given string with the character following it in the alphabet 

// const nextElement = (el) => el.map(each => each.replace.nextElementSibling(''))
// console.log(nextElement('me')) 

// ... wrong
// ------------------------

// 4.Write a JS prgm to get the current data.
// Expected output: mm-dd-yyyy or dd-mm-yyyy, dd-mm-yyy

const time = new Date()
const month = time.getMonth() + 1
const day = time.getDate()
const year = time.getFullYear()

const today = `${day < 10 ? '0' + day: day}-${month < 10 ? '0' + month: month}-${year}`

// return today

console.log(today)
// right
// ------------------------

// 5. Write a js pgm to create a new string adding 'New!' if front of a given string. If the given string begins with 
// 'New!' already, then return the original string.

// const newString = 'New!'

// const allString = (str) => str.slice(str.firstIndexOf(str))

// console.log(allString('we'))

// // or

// const nextIndex = (str) => str.slice('')

// if(!str.contains('New')){
//     str.add('New')

//     // return nextIndex
// } 

// console.log(nextIndex('me'))    
       
// ------------------------

//6. write js program to create a new string from a given string taking the first 3 characters and the last 3 characters and the 
// the last 3 characters of a string and adding them together. The string length must be 3 or more. If not, the original string is returned.

// don't know

// ------------------------

// 7. Extract 1st half of a string of even length

const firstHalf = (str) => 
                str.length % 2 === 0 ? str.slice(str.length / 2) : str

console.log(firstHalf('abcdesdf'))      //this returns esdf, but since we need 1st half, we need to write (0, str.le...)
console.log(firstHalf('abcdesdfg'))      //this returns whole word
// not that right, but almost there

// ------------------------

// 8. Concatenate 2 strings except their 1st character

const Concatenate = (a,b) => a.slice(1) + ' ' + b.slice(1)
console.log(Concatenate('mnew','mbag'))
// right

// ------------------------

// 9. given 2 values, find out which one is nearest to 100

const nearestValue = (a,b) => {
    const an = a < 100
    const bn = b < 100

    return ( an < bn ? bn:  an )
}
console.log(nearestValue('20', '10')) 

// or
const nearValue = (a,b) =>{

    if(a < 100  && b < 100){
        return a ? a > b : b
    }
}
console.log(nearValue('100','0'))
// wrong

// ------------------------

// 10. check a given string contains  2 to 4 occurence of a specified character.

// const stringOccurence = (str,val) => str
//                 .split('')
//                 .map(char => (val))
//                 .filter(val.length)
//                 .join('')
            
// console.log(stringOccurence('containsss','s'))

// ------------------------

// 11. find the number of even digits in an array of integers

const evenIntegers = (str) => parseInt(str.split('')) 

// 12. Find the no. of even values upto a given no.
// eg: given no-5, even no.s upto 5 are 2,4 i.e 2 no.s

const countNums = (num) => num.split('').filter(ch => ch % 2 === 0).length
const uptoEvenNums = (num) => Array.from(countNums(num) < num.length)

console.log(uptoEvenNums(''))

// ------------------------

//13. Check whether a given array of integers is sorted in ascending order
const ascendingNums = (arr) => Array.from(arr.map(num => num < num + 1 ? num : num + 1))

console.log(ascendingNums([1,10,9,6,5]))

// ------------------------

// 14. get the largest even no. from an array of integers.

const largestNum = (arr) => arr.filter(num => num)

// 15. Replace the 1st digit in a string (should contains at least digit) with $ character

const digits = (arr) => arr.replace(arr.split(1), '$')
console.log(digits('1fdfjid'))
console.log(digits('fdfjid'))            

// 16. given a year, report if it is a leap year

const leapYear = (str) => {
    if(str % 4 === 0)
        return true

    else return false
}

console.log(leapYear('2001'))

// ------------------------

// 17. Compare 2 objects to determine if the 1st one contains the same properties as the 
//      2nd one (which may also have additional properties)
// don't know

// ------------------------

// 18. Convert a comma-seperated values (csv) string to a 2D array. A new line indicates a new row in the array.
// eg: 
//      abc,def,ghi
//      jkl,mno,pqr
//      stu,vwx,yza

// don't know

// 19. Generate a random hexadecimal color code.
// eg: #ff033

const randomColor = (clr) => Math.random()

// 20. write a fn that returns true if the provided predicate fn returns true for al elements in a collection, false otherwise.
// eg: [1,2,3,4,5], (x) => x > 0 returns true cuz all are > 0

// don't know