---
layout: post
title: June Updates
---
## Stuff I've Learned

### How the borrow checker works, kinda

I spent time this month writing a simple Rust program. I was able to fix some of the borrow checker's complaints without too much Googling. Perhaps the biggest win as I struggled to squash borrow bugs was realizing that I was doing what garbage collectors in other languages try to do. Having to do some of the work needed to move an abstraction is tough, but I think that in having us share this burden, Rust forces us to think more carefully about the code we're writing. Sure, I was constantly wishing that I was writing TypeScript instead of Rust, but that's not the point! Rust, like Go, is built for load bearing programs, programs that need to be solid and reliable and not thrown together hastily. Could I have written my little CLI faster in Node? Yes. Would I have stopped to think about the abstractions I was creating and why I was writing particular lines of code as much? No. Like with any other language of machines or humans, Rust is going to take time to get used to. But I hope to get used to it and I plan to keep adding to my little RSS feed manager, which you can read about below.

### Why RSS is important

I want to have more control over my experience on the Web. I'm consistently disillusioned with how Twitter (my main social media outlet) performs as a platform for ideas. Thankfully, lots of folks whose ideas I want to read and think about write blogs! Now if only someone could come up with a handy way of keeping track of blogs and their content...

Add RSS to your blog. You'll be making the world a better place!

## Stuff I've Done

### Set up a [Mastodon instance](https://thecabal.xyz).

I'd heard about [Mastodon](https://joinmastodon.org/) in the past, but I've gotten more interested lately in having more control about the things that I do on the Web. I really think that Mastodon is a great solution to lots of the problems that we see on the Web nowadays! It seems like a good compromise between the way the Web used to be (very self-made, with an emphasis on DIY) and the modern Web. Mastodon has pretty much everything that you'd want out of a social networking site, but without the nagging feeling that you're selling your soul to the devil. Setting up the instance took a little more work than I bargained for, but it was pretty fun! The coolest part was setting up my own mail server with [Postfix](http://www.postfix.org/). The instance is hosted on my cloud server named Watson. As for the name... it sounded cool and was only $1 on Namecheap 😆

### Hemingway: [https://crates.io/crates/hemingway](https://crates.io/crates/hemingway).

I wrote a Rust program!! As part of my desire to use the Web without as much social media, I've been trolling for good blogs to read. I realized that if I was going to want to keep up with these blogs regularly, I'd have to get an RSS reader (if you don't have RSS enabled on your blog, pls add it!). But why download one for free when you can build it yourself in a new language?? I actually wanted a terminal-based RSS reader instead of a GUI or web-based one, and I need way more practice with Rust, so I decided to try and build it myself. The result is Hemingway (`hem` on the command line). The name came from my desire to make sure that the program is as simple as possible. No frills, just a basic update of what's new on your favorite blogs. The current version is serviceable, but I'll be doing some tweaking soon.

## Stuff I've Read

### Books

Still working on *So you want to talk about race*, *The Federalist Papers*, and started *Capital*. The biography of Marx in my edition of *Capital* was basically a small book, so I'll count that as a book I read ;)

### Web

Increment Magazine: Very well curated magazine covering different software topics each issue. I found the Programming Languages issue this month; the [compilers](https://increment.com/programming-languages/crash-course-in-compilers/) article is really good! Lots of useful links to other interesting stuff.

## Stuff I've Found

### Atlanta has a [Citizen's Review Board](https://acrbgov.org/about-us/):

This group is basically a watchdog organization for the police, giving citizens a way to keep the police accountable. I look forward to participating in the board once I'm living full time in Atlanta.

### [ActivityPub](https://activitypub.rocks/):

ActivityPub is an open standard for social networking. I'm getting more and more interested in options for separating from Big Social Media, and I love that there's an open standard in the books for building more ethical and friendly social media platforms!

### [Antsle Private Servers:](https://antsle.com/buy/#0)

These servers could be interesting for projects post-graduations. I'm not sure if one of these would work for a home cloud dev machine, but it would be really nice to not have to go to a vendor when I want a VM for some random project. Of course the downside is having to do my own maintenance... we'll see 🤪

### [The Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/about.html):

A concise guide to doing common stuff in Rust. It has great recipes for basics (which is what I'm looking at rn), but also more advanced stuff. 

### [Julia Evan's questions](https://questions.wizardzines.com/#whats-this):

These are a great way to learn something new about computing! I went through the [HTTP Headers](https://questions.wizardzines.com/http-request-headers.html) question set and learned a bunch of stuff about different HTTP headers.
