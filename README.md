<h1 align="center">  
    Closure Concept
</h1>  

<p align="center">  
   A short introduction to the concept of closure in JavaScript.  
</p>

# Basics
A closure is created when you have two functions, where one of these functions resides in the scope of the other.

Example:
```javascript
function outerFunction() {
    const outerVariable = "Hello";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const innerFunction = outerFunction();
innerFunction(); // prints "Hello"
```

# Pro's of Closures
> 1. Closures prevent variables declared within outside from leaking out into the global scope.
     From the above example, the variable "outerVariable" is only accessible within the innerFunction and is not accessible outside in the global scope.
> 2. So this unlocks the facility to create private variables and methods.

# Cons of Closures
> Closures are not hoisted /& optimized.

# Notes
> 1. In the above example we could also use Arrow functions, and it still works the same.
> 2. Basically a closure is actually created when you nest a scope within another scope (not just functions in functions). We usually don't recognise them as closures, but they are closures.

# What is the project about?
> The project is about the concept of closures.
> This project has funcCounter file which has a function that should persist how many times, it has been called.
> The funcCounter is the outer function and it has state variable map, which is accessible from the inner function.
> Now whenever the inner function is called with an argument where its been called from, it will increment the state variable map.

# How to run this?
```shell
node index.js
```

<h6 align="center">
    Please suggest anything that improves this short explanation.
</h6>
<h6 align="center">
    Thanks and Regards.
</h6>
<h6 align="center">
    <a href="mailto:charan0017@gmail.com">Sai Charan Jaddu</a>
</h6>
