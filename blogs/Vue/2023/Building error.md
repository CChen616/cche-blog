---
title: (digital envelope routines) Error when building vue project
date: 2023-05-26
categories:
 - Vue
tags:
 - Vue
 - Node.js
---
# 5/27/2023 update
Do not include '' in Markdown file title, otherwise will encounter `'can not read a block mapping entry; a multiline key may not be an implicit key'` while `npm run dev`

## Error
Enconter an error when try to run `npm run build` to pack up vue project

```
PS C:\Users\cche224\Desktop\vue-test\cche-blog\blog> npm run build

> build
> vuepress build .

wait Extracting site metadata...
tip Apply theme vuepress-theme-reco ...
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/last-updated (i.e. "@vuepress/plugin-last-updated") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress-reco/back-to-top (i.e. "@vuepress-reco/vuepress-plugin-back-to-top") ...
tip Apply plugin @vuepress-reco/pagation (i.e. "@vuepress-reco/vuepress-plugin-pagation") ...
tip Apply plugin @vuepress-reco/comments (i.e. "@vuepress-reco/vuepress-plugin-comments") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/medium-zoom (i.e. "@vuepress/plugin-medium-zoom") ...
tip Apply plugin @vuepress/nprogress (i.e. "@vuepress/plugin-nprogress") ...
tip Apply plugin @vuepress/blog (i.e. "@vuepress/plugin-blog") ...
tip Apply plugin smooth-scroll (i.e. "vuepress-plugin-smooth-scroll") ...

* Client █████████████████████████ building (10%) 1/2 modules 1 active
 cache-loader » babel-loader » node_modules\@vuepress\core\lib\client\clientEntry.js

* Server █████████████████████████ building (10%) 1/1 modules 0 active


C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\loader-runner\lib\LoaderRunner.js:114
                        throw e;
                        ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\webpack\lib\NormalModule.js:417:16)
    at handleParseError (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\webpack\lib\NormalModule.js:471:10)
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\webpack\lib\NormalModule.js:503:5
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\webpack\lib\NormalModule.js:358:12
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\loader-runner\lib\LoaderRunner.js:186:6
    at context.callback (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\cache-loader\dist\index.js:196:7
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\neo-async\async.js:2830:7
    at done (C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\neo-async\async.js:2865:11)
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\neo-async\async.js:2818:7
    at C:\Users\cche224\Desktop\vue-test\cche-Blog\blog\node_modules\cache-loader\dist\index.js:185:9 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.16.0
```

## Reason
**Node.js** version not compatible with **openssl**

## Solution

run `$env:NODE_OPTIONS="--openssl-legacy-provider"` in windows cmd

or 

Alter the "scripts" configuration in the package.json file.

```json
  //Befroe
    "scripts": {
    "dev": "vuepress dev . --open --host \"localhost\"",
    "build": "vuepress build ."
  },

  //After
    "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev . --open --host \"localhost\"",
    "build": "vuepress build ."
  }
```


