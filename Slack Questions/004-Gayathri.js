/*
Problem: Delayed Task Scheduler
Objective
Your task is to build a simple "task scheduler" that takes in any function, waits for a specified delay (defaulting to 2 seconds), and then executes the function. This utility will simulate a basic delay mechanism, useful for cases like deferred execution in applications, background jobs, or delayed UI updates.

Requirements
Create a TaskScheduler class with the following functionality:

The class should have a method scheduleTask, which accepts:
- A function task to be executed.
- An optional delay parameter in milliseconds (default to 2000 ms).

scheduleTask should wait for the given delay before executing task.
It should return a unique id corresponding to the task that is scheduled. (which can be simply an integer value).


Add a cancelTask method that prevents a scheduled task from executing if called before the delay elapses. It should take the id of the task to be cancelled as the argument.
cancelTask should be able to resolve the promise with a message saying "Task was cancelled" instead of the task’s actual result.

Promise Handling:
- scheduleTask should return a Promise that resolves to the value returned by task once it has been executed.
- If task throws an error, the Promise should reject with that error.

Edge Case Handling:
- If a non-function value is passed as task, throw a descriptive error.
- If a delay less than 0 is provided, throw an error to prevent unintended behavior.

Sample usage:
// Sample Usage
const scheduler = new TaskScheduler();

// Define a task
const myTask = () => {
    console.log('Task executed!');
    return 'Task completed successfully!';
};

// Schedule the task with a 3-second delay
const taskId = scheduler.scheduleTask(myTask, 3000);

// Cancel the task after 1 second
setTimeout(() => {
    scheduler.cancelTask(taskId)
        .then(message => console.log(message))
        .catch(error => console.error(error));
}, 1000);

// If the task is not cancelled, it will log "Task executed!" after 3 seconds
scheduler.scheduleTask(myTask, 3000)
    .then(result => console.log(result))
    .catch(error => console.error(error));
*/

class TaskScheduler {
    constructor() {
        this.tasks = new Map();      // To store scheduled tasks
        this.nextId = 1;             // To generate unique task IDs
    }

    // Method to schedule a task
    scheduleTask(task, delay = 2000) {
        if (typeof task !== 'function') {
            throw new Error('The task must be a function');
        }

        if (delay < 0) {
            throw new Error('Delay cannot be less than 0 milliseconds');
        }

        const taskId = this.nextId++;

        const taskPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                try {
                    const result = task();
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
                this.tasks.delete(taskId);  // Clean up after execution
            }, delay);

            // Store the timeout ID and promise in the tasks map
            this.tasks.set(taskId, { timeoutId });
        });

        // Return both the task ID and task promise
        this.tasks.get(taskId).promise = taskPromise;
        return taskPromise;
    }

    // Method to cancel a scheduled task
    cancelTask(taskId) {
        return new Promise((resolve, reject) => {
            const task = this.tasks.get(taskId);
            if (!task) {
                return reject(new Error('No task found with the given ID'));
            }

            clearTimeout(task.timeoutId);    // Clear the timeout
            this.tasks.delete(taskId);       // Remove the task from the map
            resolve('Task was cancelled');   // Resolve with cancellation message
        });
    }
}

// Sample Usage
const scheduler = new TaskScheduler();

// Define a task
const myTask = () => {
    console.log('Task executed!');
    return 'Task completed successfully!';
};

// Schedule the task with a 3-second delay
const taskId = scheduler.scheduleTask(myTask, 3000);

// Cancel the task after 1 second
setTimeout(() => {
    scheduler.cancelTask(taskId)
        .then(message => console.log(message))
        .catch(error => console.error(error));
}, 1000);

// Schedule another task to see successful completion
scheduler.scheduleTask(myTask, 3000)
    .then(result => console.log(result))
    .catch(error => console.error(error));