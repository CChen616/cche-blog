---
title: JavaScript arrow function
date: 2023-05-21
categories:
 - JavaScript
tags:
 - JavaScript
---
## JavaScript arrow function

normal function: function(){}

```javascript
let sum = function(a,b){
    return a+b
}
```

arrow function: () => {}

```javascript
let sum = (a, b) => {
    return a + b
}
```

suitable for imbedding function

```javascript
let num = [1,2,3]
console.log(nums.map((i) => (i + 1)))
```

The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.

```javascript
// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;
```

The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return.

```javascript
// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

Compared to a normal function, arrow function has no new and prototype, neither can be used as constructor, which means it can not generate prototype attribute

**Arrow functions 'this' refers to the global object in general, and when they are enclosed by regular functions, it refers to the outer scope.**