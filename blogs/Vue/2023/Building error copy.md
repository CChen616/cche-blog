---
title: Deploy vue-based blog on AWS with nginx
date: 2023-05-26
categories:
 - Vue
tags:
 - Vue
 - Node.js
 - nginx
 - AWS
---

## Setting up AWS EC2 Instance

First, we start with setting up an AWS EC2 instance. You can choose an Amazon Machine Image (AMI) that best fits your requirements, typically a Linux-based one such as Amazon Linux or Ubuntu. Here I'm using Amazon Linux
Installing Nginx

After your EC2 instance is set up and running, the next step is to install Nginx. You can do this by running the following commands:

```bash
sudo apt update
sudo apt install nginx
```

## Transferring Application Files to EC2 Instance

Here I'm using **WinSCP** as the tool to copy the vue project directory to remote server.

## Configuring Nginx

Now that your application files are in place, you need to configure Nginx to serve your application. The default Nginx configuration file is usually located at `/etc/nginx/sites-available/default` for **Debian-based system**. But for **RPM-based system** like **Red Hat** which I'm using for this project, the configuration file is located as `/etc/nginx/conf.d` This file needs to be edited to point Nginx at your application's 'index.html' file.

For example, my `index.html` is located at `/home/user/dist/index.html`, and my Nginx configuration looks like this:

```
server {
    listen 80;
    server_name ip_address;

    location / {
        root /home/user/dist;
        try_files $uri $uri/ /index.html;
    }

    location ~ ^/static/ {
        root /home/user/dist;
        expires 30d;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
```

So far everything seems to be fine, but when I try to access the website through broswer, it kept giving http response 500, and I used `cat /var/log/nginx/error.log` to see what was happening and the log shows:

```
2023/05/26 17:31:20 [crit] 4679#4679: *8 stat() "/home/user/dist/index.html" failed (13: Permission denied), client: ip-address, server: ip-address, request: "GET /favicon.ico HTTP/1.1", host: "ip-address", referrer: "ip-address"
```

After searching online for hours, I found that it's because nginx have no access to the `index.html` file. The final solution is to edit the nginx.conf file, change the first line `user nginx` to `user root`.