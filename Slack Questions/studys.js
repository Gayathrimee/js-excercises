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
async function retryOperation(operation, retries, callback) {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const result = await operation();
        callback(result); // Execute the callback on success
        return; // Stop retrying after a successful attempt
      } catch (error) {
        console.log(`Attempt ${attempt + 1} failed: ${error.message}`);
        if (attempt === retries - 1) {
          throw new Error("All retries failed"); // Final rejection if all attempts fail
        }
      }
    }
  }
  
  // Example asynchronous function to simulate fetching data
  async function fetchData() {
    if (Math.random() < 0.7) throw new Error("Network error");
    return "Data received";
  }
  
  // Callback function to handle success
  function onSuccess(data) {
    console.log("Operation successful:", data);
  }
  
  // Self-invoking async function to execute the retryOperation
  (async () => {
    try {
      await retryOperation(fetchData, 3, onSuccess);
      console.log("Completed");
    } catch (error) {
      console.log(error.message); // Logs "All retries failed" if all attempts fail
    }
  })();
    

// 004
class TaskScheduler {
    constructor(){
        this.tasks = new Map()      // To store scheduled tasks
        this.nextId = 1             // To generate unique task IDs
    }

    // Method to schedule a task
    scheduleTask(task, delay = 2000){
        if (typeof task !== 'function'){
            throw new Error ('The task must be a function')
        }

        if(delay < 0){
            throw new Error('Delay cannot be less than 0 milliseconds')
        }

        const taskId = this.nextId++;

        const taskPromise = new Promise((resolve,reject) =>{
            const timeoutId = setTimeout(() =>{

                try {
                    const result = task()
                    resolve(result)

                } catch (error){
                    reject (error)
                } 

            }, delay)

            //Store the timeout ID and promise in the tasks map
            this.tasks.set(taskId, { timeoutId})
        })

        // Return the both task ID and task promise
        this.tasks.get(taskId).promise = taskPromise
        return taskPromise
    }

    // Method to cancel a scheduled task
    cancelTask(taskId){
        return new Promise ((resolve,reject) =>{
            const task = this.tasks.get(taskId)
            if(!task){
                return reject (new Error('No task found with the given ID'))
            }

            clearTimeout(task.timeoutId)    // clear the timeout
            this.tasks.delete(taskId)       // Remove the task from the map
            resolve('Task was cancelled')   // Resolve with cancellation message
        })
    }
}

// Sample Usage
const scheduler = new TaskScheduler()

// Define a task
const myTask = () => {
    console.log('Task executed!')
    return 'Task completed successfully!'
}

// Schedule the task with a 3-second delay
const taskId = scheduler.scheduleTask(myTask, 3000)

// Cancel the task after 1 second
setTimeout(() =>{
    scheduler.cancelTask(taskId)
    .then(message => console.log(message))
    .catch(error => console.error(error))
}, 1000)

// If the task is not cancelled, it will log "Task executed!" after 3 seconds
scheduler.scheduleTask(myTask,3000)
         .then(result => console.log(result))
         .catch(error => console.error(error)) 