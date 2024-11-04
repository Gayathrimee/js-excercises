/*
Problem: Retry Operation with Callback on Success
Write a function retryOperation that takes three arguments:

- An asynchronous function operation that returns a promise.
- A number retries that specifies the maximum number of times to retry the operation if it fails.
- A callback function to execute upon the first successful attempt of operation. The callback should receive the result of the successful operation as its argument.

The retryOperation function should attempt to execute the operation function. If it fails (i.e., the promise is rejected), it should retry up to the specified number of retries. 
If it succeeds, it should execute the callback function with the result and immediately stop retrying.

If all attempts fail, retryOperation should return a final rejection.

Example usage:

async function fetchData() {
  // Simulated operation that might fail
  if (Math.random() < 0.7) throw new Error("Network error");
  return "Data received";
}

function onSuccess(data: string) {
  console.log("Operation successful:", data);
}

retryOperation(fetchData, 3, onSuccess)
  .then(() => console.log("Completed"))
  .catch(() => console.log("All retries failed"));

Make sure not to use .then and .catch. Instead use async/await.
*/

async function retryOperation(operation,retries,callback){
  for( let attempt = 0; attempt < retries; attempt ++){

    try{
      const result = await operation()
      callback(result);   
      return;    

    } catch (error){
      console.log(`Attempt ${attempt + 1} failed: ${error.message}`);
      
      if(attempt === retries - 1){
        throw new Error ('All retries failed');
      }
    }
  }

}
async function fetchData(){
  if(Math.random() < 0.7) throw new Error ('Network error')
    return 'Data received'
}

function onSuccess(data){
  console.log('Operation successful:', data)
}

(async () =>{
  try {
    await retryOperation (fetchData, 3 ,onSuccess)
    console.log('completed')

  } catch (error){
    console.log(error.message)
  }
}) ()