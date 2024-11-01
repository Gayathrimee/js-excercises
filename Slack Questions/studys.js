// 001 -12

const orders = [
    {
        customerId:'c123',
        items:[
            {productName: 'laptop', quantity:1},
            {productName: 'mouse', quantity:2}
        ],
        totalPrice: 1200
    },
    {
        customerId:'c456',
        items:[
            {productName: 'keyboard', quantity:1},
            {productName: 'mouse', quantity:2}
        ],
        totalPrice: 150
    },
    {
        customerId:'c123',
        items:[
            {productName: 'laptop', quantity:1},
            {productName: 'keyboard', quantity:1},
            {productName: 'USB cable', quantity:3}
        ],
        totalPrice: 1300
    },
    {
        customerId:'c123',
        items:[
            {productName: 'USB Cable', quantity:2},
            {productName: 'laptop', quantity:1}
        ],
        totalPrice: 900
    }
]

const aggregateOrders = (arr,customerId) =>{
    //Filter orders for the specifies customer
    const customerOrders = arr.filter(order => order.customerId === customerId)

    //Total number of orders
    const totalOrders = customerOrders.length

    //Calculate total amount spent by the customer
    const totalAmount = customerOrders.reduce((sum,order) => sum + order.totalPrice,0)

    //Calculate the frequency of each product purchased by the customer
    const productFrequency = {}
                
    customerOrders.forEach(order => {
        order.items.forEach(item => {

            const productName = item.productName
            const quantity = item.quantity

            // Increment the quantity in productFrequency
            if(productFrequency[productName]){
                productFrequency[productName] += quantity

            } else {
                productFrequency[productName] = quantity
            }
        })
    })

    // find the most frequent product and its quantity
    let mostFrequentProduct = null;
    let maxQuantity = 0;

    for(const [product,quantity] of Object.entries(productFrequency)){
        if(quantity > maxQuantity) {
            mostFrequentProduct = product
            maxQuantity = quantity
        }
    }

    // return the aggregated data
    return {
        customerId,
        totalOrders,
        totalAmount,
        mostFrequentProduct : {product:mostFrequentProduct, quantity:maxQuantity}
    }

}

console.log(aggregateOrders(orders,'c123'))


// 003
async function retryOperation(operation,retries,callback){
    for (let attempt = 0; attempt <= retries; attempt ++){

        try{
            const result = await operation()
            callback(result)
            return

        } catch{
            if(attempt === retries){
                throw new Error('All retries failed')
            }
        }
    }
}

async function fetchData(){
    if(Math.random() < 0.7) throw new Error('Network error')
    return 'Data received'
}

function onSuccess(data){
    console.log('operation successful', data)
}

retryOperation(fetchData,3,onSuccess)
    .then(() => console.log('completed'))
    .catch(() => console.log('All retries failed'))

             