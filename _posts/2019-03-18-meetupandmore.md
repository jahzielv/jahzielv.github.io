---
layout: post
title: First Dev Meetup!
comments: true
---

# My First Developer Meetup!

First off, let me just say that I'm proud of myself for posting on time. It is pretty late Monday night, but I'm technically still on time, so that's a victory in my book 🎉🎊

So I went to my first ever developer Meetup tonight! The [Atlanta JavaScript Meetup](https://www.meetup.com/AtlantaJavaScript/) was one of the top results I found when looking for dev Meetups in the Atlanta area, and I was super stoked to be able to attend tonight. The talk was on the JavaScript stack trace and how to use it for debugging in the browser - I learned some nifty tricks about `console` that will make debugging a lot easier than just traditional `console.log()`. Check out my `Meetup Notes` section down at the bottom of this post to see what I learned tonight! The best part of the event, however, was just being in the same room as a bunch of professional engineers. My main interaction with the wider engineering community has been online up until tonight, and it was really great to finally meet some folks that are just as passionate as I am about software engineering and the Web. It was weird hearing people talk about concepts and topics that I'd only ever seen on a computer screen, but it's something that I can definitely get used to! I really look forward to the next Meetup I'll be able to attend. I'll actually be at the [Full Stack Dev Networking Meeting](https://www.meetup.com/Tech-Full-Stack-Web-Developers/events/255976272) next Wednesday the 27th, so make sure to say hi if you're going to be there!

One of the main reasons I want to start attending these dev Meetups is to see what students like myself can gain from the larger engineering community. I was able to chat with Randall, the Meetup organizer, about student engagement in the Meetup. He noted that there are few to no students that come to their meetings, which suprised me, if for nothing else than the fact that college students rarely pass up free Moe's 😜. In all seriousness, I'm very surprised at how little Georgia Tech students know about and are engaged with the larger engineering community. Whether it's participation in open source projects or in organizations like Atlanta JavaScript Meetup, I don't hear very much about Tech students getting plugged in. While that could be because I'm just not connected to the right students and haven't heard of people getting plugged in, I think that this lack of engagement comes from the fact that we as students have very little bandwidth beyond getting school done. Georgia Tech keeps us busy, and it's hard to get excited about the software community when you have homework and projects due. I'd really like to find a way to bridge this gap between students and professionals. One of the things that I love about the Web is the vibrant community. All areas of software have their own communities, but the Web has a very easy-to-find and welcoming one that makes it easy to get excited about software engineering. I think that students could get a lot from being connected to this community while they're still students; outside of the obvious networking benefits, having an outlet to learn about practical ways to apply knowledge from school can be a great source of motivation to students that might be burnt out on learning. It's easy to forget that the concepts that we learn in classrooms map to real world, practical skills and products. I'm still ruminating on what the most effective way to bridge that gap with students, but I've got some ideas that I'll post about as they start to come together 😉. If you're a student, let me know what kind of event would help you get connected, or how you got plugged into the community if you already are!

It's getting late, so I should wrap this one up. See below for my notes from the Meetup! Catch y'all next week.

Cheers,

### Jahz.

---

# Atlanta JavaScript Meetup Notes 2019-03-18

## JS News

-   ["We Fired All Our Top Talent"](https://medium.freecodecamp.org/we-fired-our-top-talent-best-decision-we-ever-made-4c0a99728fde)

## Talk: Don't be afraid of the JavaScript stack trace

-   JS is single threaded
-   The call stack gets all the function calls in order; once call resolves, it's popped from stack
-   The heap: memory allocation to vars and objects
-   The queue:
-   The stack trace: list of all functions called, in order, with line #'s and args
-   Stack trace starts with an anon func b/c execution starts from global scope, usually `window`
-   `console` has 5 different methods for outputting to the console:
    -   `log()`
    -   `debug()`
    -   `log()`
    -   `warn()`
    -   `error()`
-   But there's one more! `console.table()`:
    -   displays objs as a table
    -   click on headers to sort
    -   works recusively on objects
    -   takes keys as either a string or a list of strings to filter views
-   Ok but one more! `console.trace()`:
    -   prints out the stack trace
    -   shows file where it was called
-   `debug()`
    -   call it in the console
    -   pass in a function, when executed dev tools stops execution and finds function in source
-   `window.onerror`
    -   Set to a function that logs and sends back stack trace to your servers

[Code and slides!](https://github.com/ratracegrad/DevNexus-dont-be-afraid-of-the-javascript-stack-trace)
