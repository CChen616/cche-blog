---
title: Git pull error 'There isn’t anything to compare. main and master are entirely different commit histories'
date: 2023-05-28
categories:
 - React
tags:
 - React
---
## Problem

`There isn’t anything to compare. main and master are entirely different commit histories` when tring to merge GitHub pull requests

## Solution
It's due to branch commited is entirely different from original main branch.

```bash
# switch to master
git checkout master
# force to rename master branch to main branch
git branch main master -f
# switch to main
git checkout main
# force to push local main branch to remote repository, and rewrite the remote branch content
git push origin main -f
```