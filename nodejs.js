/* Synchronous to Asynchronous */
/* It allows us to write code that looks synchronous at a first sight 
but is asynchronous under the hood 
errors are “silently” swallowed (!!) within an Async function unless we add a try/catch
Ensure that your async functions are entirely surrounded by try/catch, at least at the top level*/
async function myAsyncFunction() {
    try {
      const result = await somethingThatReturnsAPromise();  
      console.log(result);
    } catch (error) {
      console.log(error);
    }
}


