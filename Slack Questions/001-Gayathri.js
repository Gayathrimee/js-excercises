// -----------------------------------------------
//1. Array sum kandu pidikkuka. Oru array of numbers input aai eduth, avayile ella elements'nteyum sum thirike nalkunna oru function ezhuthuka.
 const getSumOfNumbers = (arr) => {
    // ...
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum
  };                   

  console.log(getSumOfNumbers([5,6,7,9]))
  
  // -----------------------------------------------
  //2. Oru array input aai eduth, avayile numbers nte maathram sum kandu pidichu thirike tharunna oru function ezhuthuka.
  // Note: array il numbers maathram alla, string, or objects may also be present. Avayil, numbers nte maathram sum aanu kandu pidikkendeth.
   const getSum = (arr) => {
    // ...
    const numbers = arr.toString().match(/\d/g)

    if(numbers){
        const count = numbers.reduce((sum,num) => sum + Number(num), 0)
         
        return count
    }
  };
  console.log(getSum('sdf32'))
  console.log(getSum('5490vxdsf'))
  
  // -----------------------------------------------
  //3. Largest value kandu pidikkuka. Oru array of numbers input aai eduth, athile largest number kandu pidich thirike tharunna function ezhuthuka.
   const getLargestNumber = (arr) => 
    // ...
    Math.max(...arr.filter(num => num))
  ;
  console.log(getLargestNumber([500,1,2,3,4,9,27,105]))
  
       
  // -----------------------------------------------
  //4. Oru string input aai eduth, athile vowels(a, e, i, o, u) nte enanm count cheithu thirike tharunna oru function ezhuthuka.
   const countVowels = (str) => {
    // ...
    const vowels = ['a','e','i','o','u']
    const spread = [...str]
    
    str.split('')

    return spread.filter(vowel => vowels.includes(vowel)).length

  };

  console.log(countVowels('aejdfo'))
  console.log(countVowels('aeiou'))
   
  // -----------------------------------------------
  //5. Oru array of numbers input aai eduth, athile duplicate items remove cheithu return cheyyunna oru function ezhuthuka.
//   Ex: console.log(removeDuplicates([1,1,2])) should print [1,2]
   const removeDuplicates = (arr) => 
    // ...
    [... new Set(arr)]
  ;
  console.log(removeDuplicates([1,2,3,4,2,2,1,3,3]))
  console.log(removeDuplicates([1,1,2]))
  
  // -----------------------------------------------
  //6. Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.
   const filterByAge = (arr, minAge) => {
    // ...
   return arr.filter(person => person.age >= minAge)
  };

  const people = [
    { name: 'dora', age: '21'},
    { name: 'buji', age: '16'},
    { name: 'kaliya', age: '27'},
    { name: 'bheem', age: '22'},
    { name: 'lilly', age: '10'},
    { name: 'sofi', age: '11'},
  ];
  console.log(filterByAge(people,20))
  console.log(filterByAge(people,15))
  
  // -----------------------------------------------
  //7. Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
  // (Hint: Use array sorting methods)
   const sortByName = (arr) => 

    arr.split('').sort((a,b) => a > b ? 1 : -1).join(''); 
    // [... new Set (arr.split('').sort((a,b) => a > b ? 1 : -1).join(''))];

  console.log(sortByName('zwebmeowola'))
  
  // -----------------------------------------------
  //8. Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.

const validEmail = (email) =>{
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regEx.test(email)

}


  console.log(validEmail('gayathri730@gmail.com'))
  console.log(validEmail('d.d@d'))

  
  // -----------------------------------------------
  //9. Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.
   const mergeSortedArrays = (arr1, arr2) => {
    // ...
    return [...arr1, ...arr2].sort((a,b) => a > b ? 1 : -1).join('')
  };
  console.log(mergeSortedArrays('asdk','sbdfkac'))
  
  // -----------------------------------------------
//10.   Write a function that takes an array of objects (each object represents a product with properties "price" and "quantity") as input. Return the total price of all products (price * quantity).
   const calculateProductPrice = (arr) => {
    // ...

    let totalPrice =  []
    
    for(let i = 0; i < arr.length; i++){
      const price = arr[i].price
      const quantity = arr[i].quantity
      
      totalPrice += price * quantity  
    }

    return totalPrice
  };

  const products = [
    {price: 9, quantity : 9},
    {price: 90, quantity : 1}
  ]

  console.log(calculateProductPrice(products))

  // -----------------------------------------------
  //11. Write a function that takes an array of objects (of any export type) as input. Return a new object where keys are unique values of the "property" and values are arrays of objects belonging to that property.
  // Example:
  /*
  export const characters = [
    { name: "Daenerys Targaryen", family: "Targaryen" },
    { name: "Jon Snow", family: "Stark" },
    { name: "Tyrion Lannister", family: "Lannister" },
    { name: "Sansa Stark", family: "Stark" },
    { name: "Arya Stark", family: "Stark" },
    { name: "Cersei Lannister", family: "Lannister" },
    { name: "Jaime Lannister", family: "Lannister" },
    { name: "Theon Greyjoy", family: "Greyjoy" },
    { name: "Margaery Tyrell", family: "Tyrell" },
    { name: "Petyr Baelish", family: "Baelish" },
    { name: "Jorah Mormont", family: "Mormont" },
    { name: "Brienne of Tarth", family: "Tarth" },
    { name: "Davos Seaworth", family: "Seaworth" },
    { name: "Varys", family: "unknown" },
    { name: "Melisandre", family: "unknown" },
    { name: "Ramsay Bolton", family: "Bolton" },
    { name: "Littlefinger", family: "Baelish" },
    { name: "Hodor", family: "unknown" },
    { name: "Bran Stark", family: "Stark" },
    { name: "Ygritte", family: "Wildling" },
  ]
  
  export const groupedResult = groupByProperty(characters, 'family') // where 'family' is the name of the "property" using which you like to group the data
  
  Now, if you log groupedResult, it should print the below: (note: the order of keys is not important)
  
  {
    'Targaryen': [{'name': 'Daenerys Targaryen', 'family': 'Targaryen'}],
    'Stark': [{'name': 'Jon Snow', 'family': 'Stark'}, {'name': 'Sansa Stark', 'family': 'Stark'}, {'name': 'Arya Stark', 'family': 'Stark'}, {'name': 'Bran Stark', 'family': 'Stark'}],
    'Lannister': [{'name': 'Tyrion Lannister', 'family': 'Lannister'}, {'name': 'Cersei Lannister', 'family': 'Lannister'}, {'name': 'Jaime Lannister', 'family': 'Lannister'}],
    'Greyjoy': [{'name': 'Theon Greyjoy', 'family': 'Greyjoy'}],
    'Tyrell': [{'name': 'Margaery Tyrell', 'family': 'Tyrell'}],
    'Baelish': [{'name': 'Petyr Baelish', 'family': 'Baelish'}, {'name': 'Littlefinger', 'family': 'Baelish'}],
    'Mormont': [{'name': 'Jorah Mormont', 'family': 'Mormont'}],
    'Tarth': [{'name': 'Brienne of Tarth', 'family': 'Tarth'}],
    'Seaworth': [{'name': 'Davos Seaworth', 'family': 'Seaworth'}],
    'unknown': [{'name': 'Varys', 'family': 'unknown'}, {'name': 'Melisandre', 'family': 'unknown'}, {'name': 'Hodor', 'family': 'unknown'}],
    'Bolton': [{'name': 'Ramsay Bolton', 'family': 'Bolton'}],
    'Wildling': [{'name': 'Ygritte', 'family': 'Wildling'}]
  }
  */
  
   const characters = [
    { name: "Daenerys Targaryen", family: "Targaryen" },
    { name: "Jon Snow", family: "Stark" },
    { name: "Tyrion Lannister", family: "Lannister" },
    { name: "Sansa Stark", family: "Stark" },
    { name: "Arya Stark", family: "Stark" },
    { name: "Cersei Lannister", family: "Lannister" },
    { name: "Jaime Lannister", family: "Lannister" },
    { name: "Theon Greyjoy", family: "Greyjoy" },
    { name: "Margaery Tyrell", family: "Tyrell" },
    { name: "Petyr Baelish", family: "Baelish" },
    { name: "Jorah Mormont", family: "Mormont" },
    { name: "Brienne of Tarth", family: "Tarth" },
    { name: "Davos Seaworth", family: "Seaworth" },
    { name: "Varys", family: "unknown" },
    { name: "Melisandre", family: "unknown" },
    { name: "Ramsay Bolton", family: "Bolton" },
    { name: "Littlefinger", family: "Baelish" },
    { name: "Hodor", family: "unknown" },
    { name: "Bran Stark", family: "Stark" },
    { name: "Ygritte", family: "Wildling" },
  ]
   const groupByProperty = (arr, property) => {
    // ...
    return arr.reduce((a,b) =>{
      const family = b[property]

      if(!a[family]){
        a[family]  = []
      }

      a[family].push({
        name: b.name, family: b.family
      })

      return a;
    }, {})
  };

  console.log(groupByProperty(characters, 'family'))
            
  // -----------------------------------------------
  //12.  Write a function to aggregate order data for reporting:
  // You have a JSON array representing customer orders. Each order object has properties like "customerId" "items" (array of product objects), and "totalPrice."
  // Write a function that takes the JSON array and a specific customer ID as input.
  // Return a new object containing:
  // - The customer ID (field name: customerId)
  // - Total number of orders placed by the customer (field name: totalOrders)
  // - Total amount spent by the customer (across all orders) (field name: totalAmount)
  // - Most frequently purchased product (by quantity) and its total quantity (field name : mostFrequentProduct)
  
const orders = [
    {
    customerId:'1',
    items:[
        { productName:'laptop', quantity: 1},
        { productName:'mouse', quantity: 2}
    ],
    totalPrice: 1200
},
{
    customerId:'2',
    items:[
        { productName:'keyboard', quantity: 1},
        { productName:'mouse', quantity: 2}
    ],
    totalPrice: 150
},
{
    customerId:'1',
    items:[
        { productName:'laptop', quantity: 1},
        { productName:'USB Cable', quantity: 1},
        { productName:'mouse', quantity: 2}
    ],
    totalPrice: 1500
  },
  {
    customerId:'1',
    items:[
      { productName:'laptop', quantity: 1},
      { productName:'mouse', quantity: 2}
    ],
    totalPrice: 1100
  }
]


   const aggregateOrders = (arr, customerId) => {

    const customerOrders = arr.filter(order => order.customerId === customerId)
    const totalOrders = customerOrders.length
    const totalAmount = customerOrders.reduce((sum,order) => sum + order.totalPrice, 0)

    const productFrequency = {}

    customerOrders.forEach(order => {
      order.items.forEach(item => {

        const productName = item.productName
        const quantity = item.quantity
        
        if(productFrequency[productName]){
          productFrequency[productName] += quantity

        } else{
          productFrequency[productName] = quantity
        }
      })
    })

    let mostFrequentProduct = null
    let maxQuantity = 0

    for (const [product,quantity] of Object.entries(productFrequency)){
      if(quantity > maxQuantity){
        mostFrequentProduct = product
        maxQuantity = quantity
      }
    }

    return {
      customerId,
      totalOrders,
      totalAmount,
      mostFrequentProduct : {product:mostFrequentProduct, quantity:maxQuantity}
    }

  };
  
console.log(aggregateOrders(orders, '2'))