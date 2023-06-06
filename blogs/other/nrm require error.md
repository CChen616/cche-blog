---
title: nrm require error
date: 2023-05-31
categories:
 - Other
tags:
 - Node.js
---
# Problem
Recently, I encountered the following error while trying to download the nrm package source switching tool using npm:

```bash
C:\Users\cche224\AppData\Roaming\npm\node_modules\nrm\cli.js:9
const open = require('open');
             ^

Error [ERR_REQUIRE_ESM]: require() of ES Module C:\Users\cche224\AppData\Roaming\npm\node_modules\nrm\node_modules\open\index.js from C:\Users\cche224\AppData\Roaming\npm\node_modules\nrm\cli.js not supported.
Instead change the require of index.js in C:\Users\cche224\AppData\Roaming\npm\node_modules\nrm\cli.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (C:\Users\cche224\AppData\Roaming\npm\node_modules\nrm\cli.js:9:14) {
  code: 'ERR_REQUIRE_ESM'
}
```

# Solution

The newest version of Chalk is only compatible with ESM module, thus it suppose developer to use import instead of require. 


```bash
npm install -g nrm open@8.4.2 -save
```