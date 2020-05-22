---
title: And Now For Something Completely Different... An Introduction to the Python Programming Language
category: Python
video:
image: 20140521_python_bytes01_01crop2.png
lesson: 1
---

Program or be programmed? That is the question. There are numerous, excellent sources that will teach you how to code following tried and true methods. We’re taking a completely different approach in this introduction to Python programming. Rather than take the traditional route and situate Python within the history of computer science, we will instead look at the big picture of language and something we think is essential to learning: a sense of humor. Come with us now on a journey through time and space…

## Natural Language, Ambiguity & Context

The human brain is an amazing object. It adapts and adjusts quickly to changes in the environment, it transforms input from our senses into meaningful information, it is responsible for movement and balance, and it regulates our breathing, body temperature, and heart rate. And that’s without our even thinking or trying. With this awesome tool, we invented computers and connected them in a global network to enable us to watch funny cat videos in our pyjamas. Brilliant!

Among the many wonders of the human brain is the ability to develop and process language. We abstract our world by assigning meaning to arbitrary sounds and symbols. From these sounds and symbols we communicate complicated feelings, complex ideas and, my personal favorite, comedy. There are just as many theories of language as there are of humor. We still don’t know how either works, but we know when they _work._

How do you interpret the following sentence?

> Time flies like an arrow; fruit flies like a banana.

This is an example of word play, a sport in which many humans take great pleasure. I don’t know about you, but it tickles my funny bone. And though “tickles my funny bone” is a very ambiguous statement, you know exactly what I mean. But what exactly are “time flies” and what does it mean to “fly like a banana”?

Even though we can process ambiguity, precision is important in communication. Journalists have the difficult task of telling us stories in a limited space on a tight deadline. The results are often unintentionally hilarious. Here are a few ambiguous headlines:

- KIDS MAKE NUTRITIOUS SNACKS
- STOLEN PAINTING FOUND BY TREE
- QUEEN MARY HAVING BOTTOM SCRAPED
- MILK DRINKERS ARE TURNING TO POWDER
- SQUAD HELPS DOG BITE VICTIM

We know what these writers _really_ meant. We understand the _context_ of the headline, though the words may have multiple meanings. We know that the tree didn’t find the stolen painting but that the painting was abandoned by the thief near the tree and later found by a passer-by.

Unless you were raised by wolves, you grew up learning a _natural language_. A natural language is, well, a language that emerged _naturally_ among its speakers. English, the language with which I am writing this introduction, is an example of a natural language and is my native language. You learned your native language by using it, later learning to read and write. Before you knew the rules of grammar and definitions of vocabulary, you understood the context. Natural language is continually evolving as we develop new ideas, new words, and new cultural perspectives. This causes the context to constantly shift and change. That’s okay, because our amazing brains are very good at extracting meaning from ambiguity.

## And Now For Something Completely Different: Formal Languages, Mathematics & Games

In contrast to natural language, a formal language is a system of precisely defined and declared symbols, statements and expressions. There’s no place for ambiguity. We can think of formal languages as games. When you play a game, all of the rules and pieces are defined in advance and the game proceeds according to the agreed upon structure. The more complicated the game is, the longer the list of rules will be. _Rock, Paper, Scissors_ is a very simple game with only a handful of rules, pun intended. _Scrabble_, on the other hand, is much more complex and is packaged with a multi-page instruction pamphlet clearly outlining the game play.

Mathematics is an example of a formal language. We understand that 2 + 3 = 5 because we all agree upon the values associated with the characters 2, 3, and 5 and the use of the symbols + and =. If you wanted to form your own branch of mathematics, you could change the meaning of + from addition to multiplication and 2 + 3 would then equal 6\. But everyone else would think you are crazy.

## Programming

What does all this talk of language have to do with Python?

> Python is a programming language.
> Programming languages are formal.
> Therefore, Socrates is mortal.

Programming is the act of declaring and defining a series of instructions to accomplish a specific task. Giving a friend directions to your house is programming. Sharing the recipe for your special oatmeal raisin cookies is programming. Explaining the rules of four square to a newcomer is programming. You can determine the success of a program by its output. Were the cookies delicious?

Here’s a snippet of Python:

```python
t = [ i**2 for i in range(10)]
```

That’s called a _list comprehension_, though I’m guessing at this point you don’t comprehend it. List comprehensions are one of the more sophisticated constructs in Python. It’s precise and condensed, or, as the Pythonistas say, idiomatic and Pythonic. (Don’t worry, you’ll pick up the jargon in no time.) This example creates a list, _t,_ and fills it with 10 values. But as it fills the list, it raises the value to the power of 2\. Our final result is:

```python
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Let’s compare the list comprehension to the example we started with:

> Time flies like an arrow; fruit flies like a banana.

This statement is intentionally loaded with ambiguity, but each ambiguous word was precisely chosen for its multiple meanings to maximize and compress the humorous effect.

Programming is like word play. It’s a game. It’s fun. It’s challenging. And the more you play, the better you get. Now that you understand how programming languages fit into the grand scheme of things, it’s time to [write your first Python program](https://thehelloworldprogram.com/python/writing-first-python-program/ "Writing Your First Python Program").
