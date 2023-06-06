---
title: "Importing the numpy C-extensions failed.  No module named 'numpy.core._multiarray_umath"
date: 2023-06-03
categories:
 - AWS
tags: 
 - AWS
---
# Problem

Deployment of a function on AWS Lambda that uploads an image, uses YOLO to detect objects in the image, and then stores the results in a database. During function testing, the following error was encountered:

`Importing the numpy C-extensions failed.  No module named 'numpy.core._multiarray_umath'`

# Root Cause

The numpy dependency package uploaded to the Lambda layer was downloaded on a local Windows host using the pip command. However, the running environment of Lambda is Amazon Linux. Some methods in numpy involve binary encoding issues, which are not universal.

# Solution

Download the relevant dependency package on an Amazon Linux server, package it, and then deploy it on the Lambda layer.

# Extra

After fixing the above issue, another issue was encountered:

Unable to import module 'lambda_function': libGL.so.1: cannot open shared object file: No such file or directory

libGL.so.1 is part of the OpenGL library, typically provided by graphic drivers, and is used to render 3D graphics. However, the AWS Lambda environment does not have this library because it is a serverless environment without any graphic hardware. Moreover, Lambda functions are not designed for graphic processing or graphic rendering.

The use of opencv-python-headless resolved this issue.