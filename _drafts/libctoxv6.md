---
layout: post
title: My first big systems project - porting libc to xv6
---

# Learning about systems programming through libc and xv6

## Outline

- **Intro**
  - About the class/xv6
    - If you've kept up with me over the past few months, you'll know that I was taking Georgia Tech's Operating Systems class. This class was possibly the hardest class I've taken in college, both in terms of concepts and workload. In spite of this, it's definitely been one of the most rewarding and classes for me. The class culminates in a final project, where your group can choose pretty much feature to implement in the little operating system we use, xv6. In this post, I'm going to talk about some of my favorite things that I learned about operating systems through this project.
  - About the project
    - For some background, xv6 is a teaching operating system originally developed at MIT. xv6 is a stripped down UNIX Version 6. Over the course of the semester, we took this skeleton OS and implemented several key components such as memory management, scheduling, and asynchronous I/O. For this final project, we could pick a feature that we found interesting to add to the operating system. For example, some groups added audio support, a networking stack, or a graphical user interface to xv6. My group chose to implement libc, the C standard library.
- **Body 0: Getting started** 
  - Why does xv6 need libc
    - First things first: what is libc, and why does xv6 need it? The C standard library is a key part of the C language. C is a pretty small language. There isn't a lot of functionality built into the C language spec, so to be able to do useful things, the C standard library was developed. libc contains things like I/O functionality, utility functions, complex mathematical operations, and other pieces of functionality that are important to write useful programs. Without libc, userspace programs in xv6 were difficult to write. There is a small userspace library in [ulib.c](xv6 ulib), but this contains only a handful of functions. To write userspace programs to run under xv6, having a libc implementation would be essential.
  - Porting easier functions
  - Bigger functions... How do?
- **Body 1**
  - `stdio` woes
  - Defining the interface
    - Whole point of libc: abstractions!
    - `stdio` is very closely linked with the OS's abstractions
    - Needed some deeper thought about how to implement these functions
- **Body 2: `readv` and `writev` for buffered IO**
  - What are system calls??
  - Creating the system calls
    - Realizing that I needed them
    - Doing some research
    - `iovec`s
- **Outro**
  - Great project for learning about systems!
    - Learned xv6 more closely
    - Learned to work within system designs and creating my own