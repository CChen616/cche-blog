(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{420:function(s,n,e){"use strict";e.r(n);var t=e(2),a=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"setting-up-aws-ec2-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-aws-ec2-instance"}},[s._v("#")]),s._v(" Setting up AWS EC2 Instance")]),s._v(" "),n("p",[s._v("First, we start with setting up an AWS EC2 instance. You can choose an Amazon Machine Image (AMI) that best fits your requirements, typically a Linux-based one such as Amazon Linux or Ubuntu. Here I'm using Amazon Linux\nInstalling Nginx")]),s._v(" "),n("p",[s._v("After your EC2 instance is set up and running, the next step is to install Nginx. You can do this by running the following commands:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"transferring-application-files-to-ec2-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transferring-application-files-to-ec2-instance"}},[s._v("#")]),s._v(" Transferring Application Files to EC2 Instance")]),s._v(" "),n("p",[s._v("Here I'm using "),n("strong",[s._v("WinSCP")]),s._v(" as the tool to copy the vue project directory to remote server.")]),s._v(" "),n("h2",{attrs:{id:"configuring-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nginx"}},[s._v("#")]),s._v(" Configuring Nginx")]),s._v(" "),n("p",[s._v("Now that your application files are in place, you need to configure Nginx to serve your application. The default Nginx configuration file is usually located at "),n("code",[s._v("/etc/nginx/sites-available/default")]),s._v(" for "),n("strong",[s._v("Debian-based system")]),s._v(". But for "),n("strong",[s._v("RPM-based system")]),s._v(" like "),n("strong",[s._v("Red Hat")]),s._v(" which I'm using for this project, the configuration file is located as "),n("code",[s._v("/etc/nginx/conf.d")]),s._v(" This file needs to be edited to point Nginx at your application's 'index.html' file.")]),s._v(" "),n("p",[s._v("For example, my "),n("code",[s._v("index.html")]),s._v(" is located at "),n("code",[s._v("/home/user/dist/index.html")]),s._v(", and my Nginx configuration looks like this:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen 80;\n    server_name ip_address;\n\n    location / {\n        root /home/user/dist;\n        try_files $uri $uri/ /index.html;\n    }\n\n    location ~ ^/static/ {\n        root /home/user/dist;\n        expires 30d;\n    }\n\n    error_page 500 502 503 504 /50x.html;\n    location = /50x.html {\n        root /usr/share/nginx/html;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("So far everything seems to be fine, but when I try to access the website through broswer, it kept giving http response 500, and I used "),n("code",[s._v("cat /var/log/nginx/error.log")]),s._v(" to see what was happening and the log shows:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('2023/05/26 17:31:20 [crit] 4679#4679: *8 stat() "/home/user/dist/index.html" failed (13: Permission denied), client: ip-address, server: ip-address, request: "GET /favicon.ico HTTP/1.1", host: "ip-address", referrer: "ip-address"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("After searching online for hours, I found that it's because nginx have no access to the "),n("code",[s._v("index.html")]),s._v(" file. The final solution is to edit the nginx.conf file, change the first line "),n("code",[s._v("user nginx")]),s._v(" to "),n("code",[s._v("user root")]),s._v(".")])])}),[],!1,null,null,null);n.default=a.exports}}]);