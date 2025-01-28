### Async/Await:
Helps write asynchronous code in a synchronous manner

## Async: 
Makes a function return a promise

## Await:
Makes a async function wait for a promise

# Await is only valid when the function is declared 'async'
When a function is declared async and await is used, 'try' and 'catch' blocks are used for errors

**async/await cannot be used without Promises. The await keyword pauses the execution of an async function until the Promise is resolved or rejected, making it dependent on Promises to function.**

## Promises:
1. It returns an object
2. It has 2 states: pending, resolved

## Fetch:
1. Returns a promise
2. An API endpoint is a digital location where an API receives requests for data or functionality.

## Promise.race:
Returns the fastest settled promise