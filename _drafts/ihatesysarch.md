---
layout: post
comments: true
title: Why people hate systems programming and how to make them love it
---

# Why people hate systems programming...

## and how to make them love it (or at least not hate it)

### Outline 

- **Thesis**: Systems programming is difficult. It doesn't have to be as scary or as hard to get into as it currently is. Both traditional and non-traditional education groups can improve how they teach systems programming. IMO, every engineer can benefit from knowing some minimal amount of systems programming – at least how a computer works.

- **Intro**:

  - Have you ever gotten a Blue Screen of Death? ![https://www.howtogeek.com/wp-content/uploads/2009/11/5bsod.png](https://www.howtogeek.com/wp-content/uploads/2009/11/5bsod.png)
    This is one of the most dreaded sights for any computer user. It signals an entry to a mysterious land, a land of no return for your computer. Most of us despair when we see this on our machines, even the most seasoned engineers among us. We might not understand fully what's going on when we get a BSoD, but we do know that there's something fundamentally wrong with the computer. Some core part of how the machine operates is broken, and there's not really much we can do about it except emply the age-old wisdom: turning it off and on again. For most folks that I've encountered on my engineering journey, the words *systems programming* conjures up similar emotions to seeing a BSoD. I know that this was certainly the case for me when I started learning about systems. I'd like to talk about this fear that we seem to have of this unknown land of kernel panics and virtual memory. I don't think we have to be as scared as we've been told that we must be.

- Body 1: what's broken about systems education
  
  - In general, systems are either ignored or painted as scary
    
    - As I mentioned before, I think we all have an innate fear of systems programming. We have the huge blessing of living in a time where we can benefit from systems work done in the past by others. In high contrast to 30-40 years ago, most new jobs aren't related to systems programming in some way. New jobs in our industry are largely working at the top of the layers of abstraction: web development, applications development, artificial intelligence, and so on. These areas of computing are not much related to systems in any way. For the most part, this is a really good thing! One of the core values of computer folks over the years is that no problem should ever need to be solved twice. If we have solid abstractions downstream from us, we should take advantage and build on top of them, and not need to worry too much about what they are or how they work. My fear, however, is that we might be taking things too quickly. While it's certainly true that we have pretty solid systems that we can stand on to do things like web dev, I fear that many folks, especially folks that are new to the industry, are not being properly educated on how the systems that they are standing on actually work. I took a look at the syllabus for [Course Report's top 10 coding bootcamps](https://www.coursereport.com/best-coding-bootcamps) and found that none of them teach systems related concepts. The most "systems"-y thing that they teach is using the command line/terminal. To their credit, many of them place emphasis on teaching fundamental data structures and algorithms, but most of them seemed interested in these topics as interview prep versus building a solid engineering foundation. This was the first time I'd done a deep dive into the bootcamp world, and I admit I was surprised at what I found.
      "But Jahz, aren't these programs meant to be fast? They're trade schools, not universities. Part of the point of having bootcamps is to learn practical skills quickly, not necessarily deep dives into how computers work." This is a valid point, and one that I concede. I think that if we ask most bootcamps, they'll respond with something similar: systems programming is simply outside of the scope of the camp. Their focus is on getting folks skills to get a job ASAP, not to get them a full CS education. While I do concede that this is true, I'd like to ask: should it be true? Are bootcamps doing their students a disservice by not at least introducing them to some core systems programming concepts? I'd say the answer is yes. 
    
      Now, don't hear what I'm not saying. I know that for many of you, "GATEKEEPING" alarms are going off in your heads. I'm not trying to be a gatekeeper or to put down the bootcamp system. The evidence is clear that folks can graduate from bootcamps and get great jobs at high profile companies, which is certainly more than I've done in my career so far. I'm really proud to be part of one of the first industries that is trying to shake up how folks can get started and extend the opportunity to work in computers to more people than ever before. My goal isn't to put down bootcamps, but rather to think about how they can be improved and how they can better serve their clients.
    
      In academia, things are slightly better when it comes to systems, but not by much. Where non-traditional education puts systems design by the wayside, 
    
  - Top 10 bootcamps (according to Course Report) with systems concepts in SE curriculum
  
    - Flatiron School 🙅‍♂️
    - Hack Reactor 🙅‍♂️
    - Codesmith 🙅‍♂️
      - Has high emphasis on data structures/algos (actual implementation of some fundamental data structures)
    - App Academy🙅‍♂️(does have a mention of pointers in Algo I/Interview prep section)
      - Does seem to have an emphasis placed on data structures/algos
    - DigitalCrafts 🙅‍♂️
    - General Assembly 🙅‍♂️
    - Software Guild 🙅‍♂️
    - Turing School 🙅‍♂️
    - Tech Elevator 🙅‍♂️
    - Fullstack Academy 🙅‍♂️
    - **Note:** almost all bootcamps mention the "command line"/"terminal" as one of the tools they teach, but never mention it as a central part of interacting with a machine.
  
- Body 2: can we fix it? yes we can!
  - Academia: don't beat people up or scare them out of sysarch
  - Non-trad: offer some courses in systems programming
  - Why should people care about systems?
    - BECAUSE THEY PROGRAM COMPUTERS
    - Other disciplines don't have anywhere near as much "accessibility" as software, yet sw is just (and in many cases more) important in the world scope
    - 
  
- Body 3: I like systems! How can I help?
  - Make content!
    - Millions of React tutorials, 0 libc porting tutorials
    - Matt Brubeck's browser engine tutorial is a great example
    - We need more content to educate folks that might be interested but never start because they don't know *where* to start.
    - So you like systems programming? A rare kindred spirit! If you're someone who's already into systems programming, perhaps the best thing you can do is create educational content. We need to lift systems from the relative obscurity they have and promote them as the essential parts of computing that they are. For my operating systems class' final project, my group was porting 
  - What will I do?
    - Start creating more systems centered stuff
      - Blog posts on dev.to (and jahz.co) about OS stuff I've learned
      - Walking through 