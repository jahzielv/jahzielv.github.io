---
layout: post
title: Ankiport - some background
---

# Ankiport: some background

---

I realize my last post was a little random and out of the blue, so I decided to write some background before diving into the technical details of what I’ve learned while building this app.

## Ankiport? Anki? Quizlet?

So! What is Ankiport? To answer that, you gotta know what Anki is first. Anki is a really great flashcard software. Basically, Anki lets you create flashcards for literally any subject, with the most customization that I’ve ever seen in flashcard software. Out of the box, Anki supports images, audio, video, Cloze deletion cards, and LaTeX formatting. Additionally, cards can be customized through CSS to change fonts, colors, and more. Anki is also extensible, which means that you can write add-ons in Python that make Anki even more powerful than it already is. Anki doesn’t let you run through flashcards in the same order every time – it features a spaced repetition algorithm (based on the SM-2 algorithm) that organizes cards based on what you need to review the most. While you’re studying a deck, you give Anki feedback on how easy or difficult it was for you to remember the content you’re trying to learn. Anki uses this feedback to space cards out and places the cards you need to study the most at the front of the deck for the next time you’re going to review. If you can’t tell already, Anki is the king of all flashcards 😛 There is,however, another contender in the flashcard software area – Quizlet Quizlet is a really well done app, but it doesn’t have nearly as many features as Anki. One of the biggest drawbacks to Quizlet is that to access more than the most basic features, you have to buy a subscription. Anki is 100% free and open source. In spite of this, Quizlet is far and away (at least in my experience) the more popular of the two. As a result of other people using Quizlet so much, I’ve used it pretty heavily myself, even though Anki is still my favorite flashcard product. Ankiport comes in as a bridge between the two. All you have to do is type in a Quizlet URL, and Ankiport will take that Quizlet and convert it into an Anki deck that you can import into Anki on your computer.

---

I had the idea for Ankiport early this year, but didn’t really have time to work on it much until this winter break. Back when I had the idea, I discovered genanki, a really great Python library that lets you programmatically create Anki decks. That took a lot of the heavy lifting out of the equation as far as Ankiport went – I’d basically just have to create a wrapper around genanki that would take the data from Quizlet and pass it into the library. I originally thought the app would be a CLI, and actually wrote a small Python CLI app that actually produced an Anki deck from a Quizlet. It was pretty poorly put together, though, and I didn’t make much progress on it over the year. After learning about Node, React, and the magic of web apps this semester, I was determined to take my original idea and create a web app that would accomplish the task. That’s what I’ve been up to the past week and a half, and I’m excited to share some of the technical stuff I’ve been learning over the course of this break! I’ll be back soon (maybe tonight, but def by tomorrow) with my first technical dive into Ankiport.

### Cheers, Jahz.
