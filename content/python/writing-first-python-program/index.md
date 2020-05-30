---
title: Writing Your First Python Program
category: Python
video:
image: 20140531_python_bytes01.02.png
lesson: 2
---

You are about to embark upon an adventure. Python is an ideal starting point for your expedition into computer science. [It might be the first, and last, programming language you need to learn.](https://dototot.com/why-python-should-be-the-first-programming-language-you-learn/ "Why Python Should Be The First Programming Language You Learn") The journey of a thousand miles begins with a single step. So let’s begin! If you are just joining us, you may want to read our previous post, [“An Introduction To The Python Programming Langauge.”](https://thehelloworldprogram.com/python/now-something-completely-different/ "And Now For Something Completely Different… An Introduction to the Python Programming Language")

## It’s… Python!

You are going to write your first Python program. But first, what’s a program? In a nutshell, a program is a sequence of instructions, like directions, recipes, or rules for a game. But a program isn’t necessarily issued in a language. An important moment in the history of computing was the development of the Jacquard loom. It used punched cards, the programs, to coordinate the design of textiles, thus speeding up the manufacturing process.

Another important moment in the history of computing was the collaboration between Charles Babbage and Ada Lovelace. Babbage designed, though never built, the Analytical Engine, a mechanical computer. Lovelace wrote what is considered the first computer program for the Analytical Engine, making her the first computer programmer.

## Installing Python 3 and IDLE

There are two versions of Python currently in use, often designated as 2.x and 3.x depending on which subversion you are using. The future is Python 3, so that’s what we will be working with throughout these tutorials. At some point in your adventures in programming, you will eventually encounter Python 2\. Don’t worry. There are some important differences that you will learn about as you proceed, but for the most part they are the same.  
If you are running Apple or Linux, you already have Python 2.7 installed. You will need to install Python 3\. Some versions of Windows are bundled with Python, but you will also need to install Python 3.

Python 3 is very easy to install in Linux. In a Terminal, run:

```bash
sudo apt-get install python3 idle3
```

This will install both Python 3 and IDLE 3.

For Windows and Apple, I refer you to the official documentation where you will find detailed instructions: [https://www.python.org/download](https://www.python.org/download)

### Starting IDLE

IDLE stands for “Integrated DeveLopment Environment”. You will encounter numerous Integrated Development Environments in your programming career, though outside of Python, they are referred to as IDE’s. IDLE is a cheeky homage to Monty Python member Eric Idle.

If you’re on Windows, select IDLE from the Start Menu.

If you’re on Apple, you can find IDLE in Applications > Python 3.

If you’re on Linux, select IDLE from Menu > Programming > IDLE (using Python-3.4).

For, both Apple and Linux, in the terminal, you can run:

```python
idle3
```

When you first run IDLE, you are presented with a screen that looks like this:

![IDLE](https://thehelloworldprogram.com/app/uploads/2014/05/20140531_python_bytes01.02idle.png)

This is the Python Shell. Those three arrows are called chevrons.

```python
>>>>
```

They signify the interpreter prompt, where you will enter commands.

Without further ado…

## Your First Program

The classic first program is “Hello, World!” Let’s adhere to tradition. Type in the following and press Enter:

```python
print("Hello, World!")
```

It may not seem like much, but the world is now at your fingertips. Say ‘Hello’ again. Then join us in the next lesson: [saving and running files in IDLE](https://thehelloworldprogram.com/python/python-program-idle/ "Writing, Saving and Running Python Programs with IDLE").
