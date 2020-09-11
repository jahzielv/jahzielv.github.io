---
layout: post
title: August Updates
---
# August Updates

Status: Drafts

What's that? A missing monthly update? I have no idea what you're talking about!

In all seriousness, July was a pretty busy time for me. My summer semester was wrapping up, which was pretty tough with 3 project based classes. Thankfully everything went well and I got pretty good grades, which set me up well for the last 2 classes of my undergrad career that started in August! I'm 3 weeks into this semester, where I'm taking Processor Design (CS 3220) and Computer Networking I (CS 3251). Both these classes are a return to my systems programming roots, which I'm very excited about. It looks like there's some exciting projects in store for both of them! Other than classes, I've been doing my best to connect with my friends on campus when I can, and staying inside the rest of the time. Georgia still has a pretty high rate of COVID-19 infection unfortunately, which means most of my usual pursuits outside of school are either cancelled or very modified this semester. Anywho, let's get to the update! 

## Stuff I've Learned

### Gemini

[Gemini](https://gemini.circumlunar.space) is a relatively new application layer protocol for the Internet. If you've kept up with me lately, you now that I've been trying to have more control over my digital self; I've stopped using Twitter and Facebook (haven't removed my accounts yet, but it's coming) and started using [Mastodon](https://thecabal.xyz/@hapax) instead. Gemini is an attempt to get back to the roots of the Web that caught my eye and seemed to fit right in with my thinking lately. The protocol is super stripped down and simple, but flexible enough that it could be used for more than just sending text (although you probably shouldn't). The simple spec seemed ripe for me to implement it myself, and so I did!

### NOVID

[NOVID](https://novid.org) is hands-down the biggest brain contact tracing app out there right now. I really believe in Po's work and the vision he has for the NOVID project. I'm really proud of Georgia Tech's early adoption of the app and how we're crucial in making sure that the app is respecting privacy and staying secure. NOVID allows you to get a 6th sense: a Coronavirus sense that allows you to detect where the virus is and whether it's getting too close to you and your circle. Check it out!

### Sockets are used for IPC

I didn't know this, but now I do!

### TCP programming with Rust

Rust makes it really easy to start working with TCP, and there's a ton of 3rd party libraries that can make the process eve simpler. Also, I'm getting better at Rust!! I've seen definite improvement in my ability to write idiomatic Rust and to not get bogged down by the borrow checker as much. Practice makes perfect!

### Stream redirection in the shell

This might seem kinda silly, but I never knew what `2>` meant when redirecting output from programs running in the shell. Now I know that's redirecting file descriptor 2, AKA `stderr`. The more you know!

## Stuff I've Done

### Wrote [Titan](https://github.com/jahzielv/titan)

Ok so that Gemini thing I talked about earlier? I implemented it in Rust! I wanted to install a Gemini server on my cloud dev machine, but of course I was seized by the DIY bug. I've really wanted to add more systems project notches to my belt. Gemini gave me the chance to do just that! It's really a testament to the spec that I was able to implement a working server in just a couple of days without any prior experience. At first I was just aiming to create a working server, but then I thought: why not make something actually useful? I set out to make two things: a Gemini server framework that felt like Express in Node land; and a very basic server executable, built with the framework. The prebuilt server can be configured via TOML, so you don't have to write any code if you don't want to. The framework can be used to build your own custom Gemini server with custom Rust code to run when each route is hit. Here's a quick hello world:

```rust
use libtitan::StatusCode;
use titan::Titan;

fn main() {
    let mut server: Titan = Titan::new();

    server.get("/hello-world", |response| {
				response.set_body("# Hello world!");
				res.set_meta("text/gemini");
				res.set_status(StatusCode::Success);
		}

    titan::start(&server);
}
```

I'm super proud of this project and of what I was able to do in such a short amount of time! There's a couple of things I need to clean up before releasing a version to crates.io, but once I do I'll be starting up a server at gemini://jahziel.xyz and cross-posting my content from my website to there. 

### Wrote [piece on NOVID](https://nique.net/news/2020/09/02/tech-tests-novid-app/)

I was super fortunate to interview Po-Shen Loh, NOVID's creator, for a piece I wrote about the app in the *Technique*. Check it out if you want to learn more about the app!

### Started my latest keyboard build

I'm building a [Quefrency Rev 2](https://keeb.io/collections/quefrency-split-staggered-65-keyboard), which should be my endgame board for a while. It's been super fun to reactivate this hobby!

### Started applying for jobs!

Check out my resume [here](https://jahz.co/resume). If you want someone who is looking for the joy in computing and is really hungry for experience building systems software, give me a shout!

## Stuff I've Read

### Books

Writing this post is a good wakeup call: I gotta re-add reading into my morning routine!

### Web

- Cool read about Monarch, Google's in-memory time scale database. [http://www.vldb.org/pvldb/vol13/p3181-adams.pdf](http://www.vldb.org/pvldb/vol13/p3181-adams.pdf)
- A neat paper about the classic threads vs eventing issue. Found it because I wanted to answer that question as I was working on Titan. Sadly the code they have on their website doesn't build on my Ubuntu machine. Maybe I'll reimplement it one day! [http://capriccio.cs.berkeley.edu/pubs/threads-hotos-2003.pdf](http://capriccio.cs.berkeley.edu/pubs/threads-hotos-2003.pdf)
- I've been thinking a lot about my privilege lately and how I'm going to administer it as it increases once I get a job. Lots of the ideas behind effective altruism resonated with me: [https://en.wikipedia.org/wiki/Effective_altruism](https://en.wikipedia.org/wiki/Effective_altruism)

## Stuff I've Found

### [Gather](https://gather.town)

Holy cow, this is some of the best designed software I've found in a while. If you're looking for something to replace Zoom or Google Meet, Gather is your thing! It really gets at the major issue with interacting with a large group via video chat: smaller conversations are *really* hard to coordinate. Most video chatting software has a breakout room feature of some sort by now, but these rooms aren't organic since they have to be created by the meeting host. Gather makes it super easy to regain the spontaneity of in-person interaction by adding a "physical" dimension to video chat. Users on Gather have small avatars on a map, reminiscent of Pokemon or an old Mario Bros game. If you move your avatar close to someone else's, you can see their video and hear their audio. Move away, and their output fades. This makes it possible to have smaller groups within a larger one that users can move in and out of, just like in real life. Honestly, I haven't been this blown away by a piece of software in a while. I'm not really doing it justice in this small blurb, so go and give it a try!