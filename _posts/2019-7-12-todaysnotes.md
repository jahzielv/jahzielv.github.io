---
layout: post
comments: true
title: Today
---

# Today's Notes

## ECMA 402 Meeting

Normally, I'm not one for checking my phone in the middle of the night. Last night, however, I'm glad I did. As you may have known, I've been working on JavaScript documentation for most of this year. I got started writing MDN Docs when I responded to Daniel Ehrenberg's (a TC39 member) request on Twitter for people to help him write docs for new JS language features. Since then, I've written or edited a growing group of MDN doc pages, and have learned a ton about how the JavaScript language works and is built. I'm very close to finishing up the current set of docs that I've been working on for a couple of months, and after asking Dan for some more work, he started an email chain to introduce me to other folks working on the `Intl` spec. They very graciously added me to the ECMA 402 group, and I was able to participate in an official ECMA meeting for the first time today! I haven't done a great job of documenting how much I love standards work, so in case you don't know, I REALLY LIKE STANDARDS WORK. I'm convinced that I want to pursue a career in standards design and implementation for the open web, and working with ECMA on these documentation efforts has been a great way to start getting my foot in the door. I got to meet some cool people and give a small briefing on what I've been doing. It's really great to talk to folks who are also passionate about Open Web standards and get to hear feedback on the work I've been doing. I'm looking forward to more great meetings with ECMA 402!

## ATL Go Meetup

After work today, I slid down to the city to check out the Atlanta Go Meetup! I've been working on a really cool project called [Resumic](https://github.com/resumic/schema) which is written in Go, so I figured I'd go check the meetup out and see what I could learn! Big shoutout to Pivotal for hosting and having some DOPE pasta for dinner. The talks were super informative for a relatively new Gopher like myself, covering some basics on modules and concurrency. I'll attach my notes down below. I'm excited to see where we can improve efficiency and performance in Resumic using Goroutines, which I'm now more familiar with thanks to the talks tonight.



## Typora

This site is built with Jekyll, which means that these blog posts are actually Markdown files that Jekyll turns into HTML pages. I usually write Markdown in VS Code, especially since I'm often tinkering with this site's code. While it's still the best code editor I've ever used, I've noticed that VS Code will sometimes lag when I'm typing a lot and at high speed. I usually don't type quickly for long periods of time when I code, so this isn't typically a hangup. However, writing long bits of prose (like blog posts) very quickly exposes this issue. I've used a cool PWA Markdown editor called Stackedit for a while, but I realized today that although it works offline, it can't load local files for editing. I started to look around this evening for a new, lightweight Markdown editor that I could use to write blog posts without VS Code's overhead. After some searching, I found [Typora](https://typora.io/), the editor I'm using _right now_ to write this post. It's a beautiful, extremely minimalistic editor that instantly renders your Markdown so that you're always seeing what you're getting. It supports GitHub flavored Markdown, as well as math blocks, elegant code blocks, and lots of other cool features, all with a UI that doesn't interrupt your writing. I highly recommend checking it out!



### Cheers,

Jahz.



---

# Golang Meetup ATL

## Concurrency in Go

- Concurrency is the composition of independent processes
- Preheating the oven!
- Goroutines do this in Go!
  - They run concurrently w/other functions
  - != thread, but can be put onto threads
  - smaller than threads, less memory
- What can go wrong?
  - Race conditions
  - main routine doesn't wait for your goroutines!
- Solutions
  - WaitGroup
    - Add goroutines to WG, then run them and wait for everything to finish
    - Gotcha: if in loops with lambdas, scope messes up and only one goroutine gets added
  - Locks
    - Mutex locks that help you conserve your resources
  - Channels
    - Goroutines use these to communicate!
    - Can pass messages between them
    - Can use types/structs, or primitives
- Possible Errors
  - deadlocks

------

## Modules!

- What is a module?
  - A tree of Go files with a `go.mod` file at the root directory
  - Can have more than one per repo
- What is `Go.mod`?
  - A module statement that names your module
  - A list of the dependencies for your module