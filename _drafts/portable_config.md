---
layout: post
title: Jahziel's Dev Env
---

I like to feel at home when I'm using a computer. I think that this feeling is common to most programmers and computer types; even if you're a person that leaves the default background on a new computer, you still have some sort of modification or personalization that you add to make it your own. My MacBook, which I've had for about 2 years now and have named Schaeffer, is carefully tuned to my preferences and needs for my style and area of programming. I thought about what it takes to make me feel at home when using my machine, and came up with a list:

### Environment

1. A POSIX system
2. `zsh` and my `zshrc`
3. My `vimrc` and vim > 8.0

### Tools:

1. Git (for SCM)
2. Node (for scripting and other JS stuff)
3. [Starship](https://starship.rs) (for a cool looking prompt)
4. Python (dependency for lots of stuff, not so much for scripting)

**Environment** refers to extensions of the system, **Tools** to additional software that I use to build stuff. A little while ago, I saw the value in keeping my two main config files (`.zshrc` and `.vimrc`) on GitHub for ease of access. Eventually, I realized that I could automate installation using `make` and added a simple Makefile that would move the files to the correct places. This is where my configuration setup was before last night. I've thought before about how I could improve this process, adding functionality and reducing the number of steps needed. I refined the Makefile when setting up a few VMWare Ubuntu instances for class, but the real opportunity for improvement came last night, when I got a new machine to tinker with.

I've become interested in systems software over the past school year. While MacOS still has my heart and works great for most of what I do from day to day, there are some systems programming tools that work better on Linux. Systems tools _can_ run on MacOS, but often times configuration is a pain and I wanted life to be a little easier. Most of my systems school projects I've been doing on a Ubuntu VM that I run on VMWare Fusion. While my MacBook handles the VM pretty well, it does stretch the 8GB of RAM pretty thin, especially when running a Chrome instance. The hypervisor project I worked on earlier this semester, which required spinning up KVM machines on my VM, stretched Schaeffer to its breaking point. I've decided that one day I'm going to [build my own Linux dev box](link to scooter computers), but right now I'm operating under the limited resources of a college student. I started Googling around for a good cloud provider that could get me what I needed: as much compute as I could get for less than $10/month. After some searching, I came across [Hetzner Cloud](https://www.hetzner.com/). They offered a deal that I couldn't beat: 2 VCPUs, 8GB of RAM, and 80 GB of SSD for about \$9/month! A few clicks to select my plan and OS, perhaps 5 minutes of waiting, and I had my own Ubuntu cloud-based development box ready to get cracking on some kernel code. <GCP price comparison>.  

The time was right to take advantage of this pristine machine and work on my environment setup script. After some consultation of shell syntax, I cobbled together a bash script that would install all the stuff I needed to feel at home.

- Ordered myself a server, and got to work on automating my environment setup
- Goal: get all env and tools installed with a single bash script
- It's short, but gets the job done!
- Why does this matter?
- Feeling at home is important for a developer
- Using my windows machine at work can be demoralizing sometimes, because my tools and conventions aren't set up like I'm used to
- Chefs carry around their knives, I carry around my env setup script
- I'll be adding variety through flags
  - Want different setups depending on the need
  - Maybe I don't need the whole setup
  - Involves minimal [bash|zsh]rc's with just basic aliases, vimrc with no plugins, maybe even PowerShell profile?
- I try to keep my "home" as relatively close to stock as possible
- For example, vimrc doesn't have a ton of different ways to do builtin vim things, focuses more on additional functionality. I try to use default keybindings for most things so that if I can't make a machine my home, I can still get around and be productive
- Don't underestimate a good shell prompt! Having information right at the prompt can be very helpful/reduce number of small but common actions

