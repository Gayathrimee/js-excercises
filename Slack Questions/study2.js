// 001 -12

const orders = [
    {
        customerId:'c123',
        items:[
            { productName:'laptop', quantity: 1},
            { productName:'mouse', quantity: 2}
        ],
        totalPrice: 1200
    },
    {
        customerId:'c456',
        items:[
            { productName:'keyboard', quantity: 1},
            { productName:'mouse', quantity: 2}
        ],
        totalPrice: 150
    },
    {
        customerId:'c123',
        items:[
            { productName:'laptop', quantity: 1},
            { productName:'USB Cable', quantity: 1},
            { productName:'mouse', quantity: 2}
        ],
        totalPrice: 1500
    },
    {
        customerId:'c123',
        items:[
            { productName:'laptop', quantity: 1},
            { productName:'mouse', quantity: 2}
        ],
        totalPrice: 1100
    }
]

const aggregateOrder = (arr,customerId) =>{

    const customerOrders = arr.filter(order => order.customerId === customerId)

    const totalOrders = customerOrders.length

    const totalAmount = customerOrders.reduce((sum,order) => sum + order.totalPrice, 0)

    const productFrequency = {}

    customerOrders.forEach(order =>{
        order.items.forEach(item =>{

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

    for(const [product,quantity] of Object.entries(productFrequency)){
        if(quantity > maxQuantity){
            mostFrequentProduct = product
            maxQuantity = quantity
        }
    }

    return {
        customerId, totalOrders, totalAmount,
        mostFrequentProduct : {product: mostFrequentProduct, quantity:maxQuantity}
    }
}

console.log(aggregateOrder(orders, 'c123'))