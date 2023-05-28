---
title: Scoped Style
date: 2023-05-24
categories:
 - Vue
tags:
 - Vue
---
# Vue.js Scoped CSS
## Overview
In Vue.js, the scoped attribute can be added to your `<style>` tags in the single-file components. This feature enables CSS encapsulation within the component. When a `<style>` tag has the scoped attribute, its CSS will apply only to the current component.

## Syntax
To apply scoped CSS, simply add the scoped attribute to your `<style>` tag:
```vue
<style scoped>
  /* your CSS here */
</style>
```

## How It Works
When a component's styles are scoped, Vue.js will add a unique attribute (such as data-v-f3f3eg9) to HTML tags that are present in the component's template. This unique attribute allows Vue.js to identify which components should receive the styles.

For example, if you have the following scoped CSS:
```vue
<style scoped>
  .my-class {
    color: red;
  }
</style>
```

The generated CSS would look like:

```css
.my-class[data-v-f3f3eg9] {
  color: red;
}
```


## Using /deep/, >>>, and ::v-deep Selectors
In Vue 2, the ::v-deep selector could be used to force styles to apply to child components. In Vue 3, ::v-deep has been deprecated and replaced with the /deep/ and >>> selectors.

All three selectors effectively increase the specificity of your CSS rule, allowing it to affect child components even within a scoped style block.

Here's an example of how to use them:

```vue
<style scoped>
  .parent /deep/ .child {
    color: blue;
  }

  /* or */

  .parent >>> .child {
    color: blue;
  }
</style>
```

In the above example, any element with the child class that's nested inside an element with the parent class will have a text color of blue, even if the child class is in a child component.
