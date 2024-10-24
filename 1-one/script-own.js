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

// console.log(isChecked)
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

// 7. Extract 1st half of a string of even length

const firstHalf = (str) => 
                str.length % 2 === 0 ? str.slice(str.length / 2) : str

console.log(firstHalf('abcdesdf'))      //this returns esdf, but since we need 1st half, we need to write (0, str.le...)
console.log(firstHalf('abcdesdfg'))      //this returns whole word


// 8. Concatenate 2 strings except their 1st character

const Concatenate = (a,b) => a.slice(1) + ' ' + b.slice(1)

console.log(Concatenate('mnew','mbag'))

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

// 10. check a given string contains  2 to 4 occurence of a specified character.

const stringOccurence = (str,val) => str
                .split('')
                .map(char => char.contains(val))
                .filter(val.length)
                .join('')
            
console.log(stringOccurence('containsss','s'))