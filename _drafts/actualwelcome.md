---
layout: default
title: JVE - Blog
---

# Hello MTV - Welcome To My Crib

Hi there! Good to see you! Like the new place? Me too! I'm really excited to share this most recent project with you all.

## Use the Platform

The idea of actually writing my own personal site had been floating around in my head ever since last semester when I discovered the joys of web dev, but had never really been a serious thought until recently. I realized that the work I'd been doing had mostly been stuff with frameworks; those ubiquitous layers of abstraction that make it easier to get things done - or at least create even _higher_ levels of abstraction for building apps on the web. It dawned on me, however, that really those frameworks aren't really doing anything magical. They're using HTML, CSS, and JavaScript, just like websites have for almost all of the history of the web. So I decided that I would try to create something without any frameworks like React, just with the basic building blocks of the web. And what better thing to make than that website I'd thought of but never built! While using hosted, prebuilt solutions like WordPress (what I'd used until now) is still my suggestion to most people that want to build a website, I wanted to get the experience with working directly with the guts of the web. There's so much about these basic tools that I don't know about, and while I'm very grateful to the library and framework people for making it easier to build cool stuff fast, I think that as with all layers of abstraction, you lose a connection to the underlying systems when you only use frameworks.

## The Deets

The new jahz.co is built with just HTML, CSS, and <a href="http://vanilla-js.com/"><img src="http://vanilla-js.com/assets/button.png"/></a> - kinda. I started off with a barebones site with just bare Web building blocks, and it looked pretty good! I was able to do the fading in and out animation with just CSS, implement a dark/light mode toggle with JavaScript, and generally get the look and feel I wanted from the new site. I ran into a wall, however, when I got to the blog.

Blogging on WordPress is, of course, super easy. The editor is sleek and full of features, and publishing only takes one click. I knew that the downside to going to a fully custom site would be losing the ease of blogging with WP, but I was willing to take the risk. I decided that I wanted to use Markdown to write my posts. I soon realized that I'd have to write a significant amount of code (or at least more than I wanted to write) in order to build a server that would convert the Markdown to HTML and inject it into some standard blog post template. I really didn't want to go down this path, since my goal was mainly to tinker with HTML and CSS and not to design yet another web server/CMS. After digging for a solution, I found GitHub pages! I'd known about GH pages for while, but I didn't realize how easy it was to actually deploy a site. The biggest feature that drew me to GH Pages, however, was that it allowed me to have the exact blogging workflow I wanted! I could write posts in Markdown in VS Code, push my changes to the site's repo, and see the new post immediately! When I discovered these features, I immediately created a new repo to host my site.

## Setting up GitHub Pages - without lots of Jekyll stuff

GitHub Pages is powered by [Jekyll](https://jekyllrb.com/), a very popular static site generator that makes it easy to create cool-looking sites with Markdown, HTML, CSS, and Liquid. My biggest worry when I started trying GH Pages out was that I'd have to convert a lot of my site over to using Jekyll, especially regarding the styling. Jekyll's themes that you can easily install are really handy for most people, but I didn't want to lose the work I'd put into making my site look the way I wanted. I wanted a way to use Jekyll to serve my content, without having to add a lot of extra configuration or be tied into a prepackaged theme.
