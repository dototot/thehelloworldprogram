---
title: If Python Elif Snakes Else Ladders
category: Python
video:
image: 20150714_python_7.3_if_elif.png
lesson: 19
---

Did you ever play Snakes & Ladders? We had the tame version in America, _Chutes and Ladders_. It was supposed to teach you morals. But let’s use it to illustrate our next concept: Python elif statements. The elif statement is a _portmanteau_ of _else_ and _if_. A portmanteau is any word that is a mash-up of two other words. We use elif for if statements that have multiple choices. It’s like saying, “If not this, or this, then that.”

## Python elif Statements

In case you’ve never played [Snakes (or Chutes) and Ladders](https://en.wikipedia.org/wiki/Snakes_and_ladders), here’s a quick run-down: You play with a board mapping out twisty snakes (or chutes) and ladders, figurines for the players, and a die or a spinner. You roll the die(or spin the spinner) and move that many squares on the board. If the square your game piece lands on is the bottom of a ladder you get to climb up and skip all of the squares in between the base of the ladder and its top rung. But, if the space on which your game piece lands is the head of a snake, you slide down its body, thus losing ground gained towards reaching the end goal.

Let’s write a simple version of this game in Python. But let’s call it ‘Snakes and Pythons’, because learning Python is like climbing a ladder. Open IDLE and create a new file, snakes_pythons.py. First, we import the random module. We’re going to use it’s function, randint, to generate a roll of the die, or a random integer.

```python
from random import randint
```

Next we declare the roll of our die. Imagine our die has only three sides. Impossible? Not in programming. This is where we use the randint function to randomly generate 0, 1 or 2\. Remember that computers start counting at 0.

```python
roll = randint(0, 2)
```

Now let’s lay out our board. We’ll keep it simple and only use three squares, _neutral, ladder,_ and _snake,_ and nest them inside our _if_ statement.

```python
if roll == 0:
    print(“Python FTW!”)
elif roll == 1:
    print(“Snake bite!”)
else:
    print(“Meh. Think I'll stay here.”)
```

We don’t need to test our last condition because anything that is not 0 or 1 will be caught by the _else_ statement. Multiple conditions allow you to sort complex choices. Fun, right? If you want to learn more, [join us in the next lesson](https://thehelloworldprogram.com/python/python-while-loops-green-light/). Elif, don’t. Else, whatever.
