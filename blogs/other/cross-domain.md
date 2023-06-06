---
title: Cross-domain - Jsonp and cors
date: 2023-06-07
categories:
 - other
tags:
 - ajax
---
To understand cross-domain issue, we first need to understand the concept of same-origin.

The origin consists of the protocol + domain name + port number.

Two URLs with exactly the same protocol, domain name, and port number are considered the same origin.

For example:

https://google.com and https://twitter.com are not the same origin.

https://google.com and https://www.google.com are also not the same origin.

The two must be exactly the same.

**The limitation of cross-origin access is implemented by the browser, not the server.**

When an access to a different origin occurs, the browser recognizes it as cross-origin access. The browser restricts this kind of cross-origin behavior to protect users' privacy and security.

When an access to a different origin occurs, the browser recognizes it as cross-origin access. The browser restricts this kind of cross-origin behavior to protect users' privacy and security.

Therefore, we need to use solutions like JSONP and CORS to solve cross-origin access issues.

## JSONP (JSON with Padding) Cross-domain Access

JSONP is a way of cross-domain access that takes advantage of the feature of the script tag that allows cross-domain access. The main principle is to use the feature of the src attribute of the script tag that can access resources under different domain names. We can define a callback function on the client side, and then return a js code that calls this callback function on the server side, thus achieving cross-domain access. **The callback name is randomly generated, and we pass this name to the backend in the form of a callback. The backend will return this function to us for execution.**

**Code example**

Client code:

```js
/**
 * Send JSONP request
 * @param {string} url Request address
 * @param {function} callback Callback function
 */
function jsonp(url, callback) {
  // Create script tag
  const script = document.createElement('script');
  // Set the src attribute of the script tag, including the callback function name
  script.src = url + '?callback=' + callback;
  // Add the script tag to the page
  document.body.appendChild(script);
}
// Define the callback function
function handleResponse(response) {
  console.log(response);
}
// Send JSONP request
jsonp('http://www.example.com/api/data', 'handleResponse');
```

Server code:

```js
const http = require('http');
// Create server
http.createServer(function(request, response) {
  // Get the callback function name
  const callback = request.query.callback;
  // Construct the response data
  const data = {name: 'John', age: 20};
  const responseData = callback + '(' + JSON.stringify(data) + ')';
  // Return the response data that calls the callback function
  response.end(responseData);
}).listen(8080);
```

The advantage of JSONP is its **compatibility with IE and support for cross-domain**.

The disadvantage is that since **it is a script tag, it cannot get as precise information as AJAX (for example, it cannot get the status code, the head)**, and it only supports GET requests, not POST requests.

## CORS (Cross-Origin Resource Sharing)

CORS is a standard way of cross-domain access, which is implemented by setting response headers such as Access-Control-Allow-Origin on the server side. When the browser sends a cross-origin request, the server can allow access by setting the Access-Control-Allow-Origin header.

The advantage of CORS is that it supports all types of HTTP requests.

It allows the browser to send XMLHttpRequests to cross-origin servers, thereby overcoming the limitation that AJAX can only be used in the same origin.