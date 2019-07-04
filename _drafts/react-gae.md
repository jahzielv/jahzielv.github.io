---
layout: post
comments: true
title: Deploying a React App on Google App Engine
---

# Deploying a React App on Google App Engine

A good friend of mine recently asked me if I had a blog post about hosting a React App on Google App Engine, and I realized that I didn't have one. GAE is my favorite cloud platform to host my personal app so I figured I'd write a quick post about it!

## What's GAE? ☁️

Google App Engine (GAE) is Google's managed web app hosting offering. It aims to be a quick and cheap way to deploy web applications using a variety of languages, including Node.js, Python, Go, Java, and PHP. I'll be talking about my app called Ankiport, which has a Python backend and a React front end, so I'll be detailing steps to use the Node.js and Python platforms on GAE. GAE requires much less configuration than running an app from a Compute instance, and will also cost less. Google detects when your app isn't getting traffic and spins the VM that runs your code down, spinning it back up when your app starts getting used again.

## How do?
