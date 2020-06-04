---
title: Python Loop Control, To Infinity and Beyond!
category: Python
video:
image: 20160205_py08.2_loop_control.png
lesson: 21
---

While loops are useful when we want to maintain a state until a certain condition is met or until some external event occurs. But they can also get out of hand. Programming is like a circus: you gotta keep the lions in the ring. Or pythons in the loop. It might seem simple, but Python loop control is very important for creating bug-free interactive programs.

## Infinite Loops

With great power comes great responsibility. While _while_ loops are incredibly powerful, there’s a pitfall you need to be aware of: the infinite loop.The loop in the following function will repeat endlessly until you force it to quit or the world ends, whichever comes first:

```python
>>> while True:
…    print(“Are we there yet?”)
…
```

Try it.

Annoyed yet? Press Ctrl + C to break out of the loop. Much like a road trip, it’s important to take breaks. The break statement in Python is a means of escape from a loop.

## Python Loop Control Using input(), strip() and break

I promised interactivity in the previous tutorial and now is your moment of Zen. Create a new file, roadtrip.py, and enter the following:

```python
while True:
    n = input(“Are we there yet? “)
    if n.strip() == ‘yes’ or ‘Yes’ or ‘YES!’:
        break
```

The example above introduces two new built-in functions, input() and strip(). The input() function presents a prompt to the user of a program and patiently waits until anything is entered. We are using the strip() method to clean up any spaces that may be accidentally entered into the console when pounding out ‘YES!’ Try it: add as many spaces as you like before or after ‘yes’. They will be stripped away. Lastly, if the text entered at the prompt matches ‘yes’, ‘Yes’, or ‘YES!’, the _break_ statement is called, and we escape from the incessant while loop.

Fun fun fun! But we’re not there yet. [Join us in the next tutorial to build on this and write an interactive game, the classic ‘Rock, Paper, Scissors’.](https://thehelloworldprogram.com/python/python-game-rock-paper-scissors/)
