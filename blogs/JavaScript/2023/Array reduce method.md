---
title: Array reduce method
date: 2023-05-30
categories:
 - JavaScript   
tags:
 - JavaScript
 - ES6
---
## Start from the simplest example:

```js
var  arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
```

output:
```
1 2 1
3 3 2
6 4 3
10 5 4
[1, 2, 3, 4, 5] 15
```

In the context of the reduce function, the callback function has four parameters with the following meanings:
- **prev** (or accumulator): The value of the previous item or the accumulated result from the previous iteration.
- **cur** (or current value): The current item that will be involved in the accumulation process.

- **index**: The index of the current value in the array or iterable being reduced.

- **arr** (or array): The array or iterable itself that is being reduced.

First, let's clarify the difference between prev and cur parameters. Initially, I thought they were of the same type, but later I realized that I misunderstood. prev represents the result after each accumulation, and its type may be different from each item in the array. On the other hand, cur represents the current item being accumulated in the array. We can understand this better with an example later on.

Secondly, in the example mentioned, we can see that the iteration actually takes place four times, even though there are five items in the array. The first item in the array is used as the initial value for prev, and the iteration starts from the second item.

Let's consider the following example:

A student's final exam scores are as follows:

```js
var result = [
    {
        subject: 'math',
        score: 90
    },
    {
        subject: 'chinese',
        score: 80
    },
    {
        subject: 'english',
        score: 85
    }
];
```

How to calculate the total score of this student?

It is obvious that we can easily obtain the result using a for loop.

```js
var sum = 0;
for(var i=0; i<result.length; i++) {
    sum += result[i].score;
}
```

But rather than using for loop, we want to solve the problem using reduce instead

```js
var sum = result.reduce(function(prev, cur){
    return prev + cur.score;
}, 0);
```
At this point, I added a second argument to reduce. By printing the values, I noticed that setting this second argument caused reduce to start iterating from the first item.

This second argument is used to set the initial type and value of prev. For example, setting it to 0 indicates that the initial value of prev is of type number and its value is 0. As a result, the final result of reduce will also be of type number.

Since the second argument represents the initial value of the accumulated result, let's say the student received a penalty of -10 points in the total score due to a disciplinary violation. We can simply set the initial value to -10.

```js
var sum = result.reduce(function(prev, cur) {
    return cur.score + prev;
}, -10);
```

Let's add some complexity to this example. Suppose the student's total score is weighted differently for each subject, with weights of 50%, 30%, and 20% respectively. How can we calculate the final weighted result?

```js
var dis = {
    math: 0.5,
    chinese: 0.3,
    english: 0.2
}

var sum = result.reduce(function(prev, cur) {
    return cur.score + prev;
}, -10);

var qsum = result.reduce(function(prev, cur) {
    return prev + cur.score * dis[cur.subject]
}, 0)

console.log(sum, qsum);
```

Another great example showcasing the usage of reduce is to determine the frequency of each letter in a given string.

In the following code, I initialized the first parameter of the callback function within the second argument of reduce. By converting the string into an array, the iteration result will be an object, where each key represents a letter from the string. Feel free to run the code and experience the result.

```js
var arrString = 'abcdaabc';

arrString.split('').reduce(function(res, cur) {
    res[cur] ? res[cur] ++ : res[cur] = 1
    return res;
}, {})
```