---
title: What’s a For Loop For? Python!
category: Python
video:
image: 20160225_py09.1_for_loops_ducks.png
lesson: 23
---

You know what’s not fun? Doing the same thing over and over again. You know what is fun? Telling a computer to do it for you! That’s when you need a for loop.

## What’s Iteration?

while loops are useful when you need something to run until a condition is met. Sometimes you know that condition at the start, but you need to repeat a process a certain number of times. Boring.

Did you hear this adage growing up?

> [If at first you don’t succeed, try, try, try again.](https://en.wikipedia.org/wiki/William_Edward_Hickson)

I did and it drove me crazy. But it’s true.

When you are learning a new skill, such as riding a bike or tying your shoe, you probably won’t get it on your first try. So you’ll try again, learning from your earlier experiences. Eventually, after enough attempts, you’ll get it.

That’s [iteration](https://en.wikipedia.org/wiki/Iteration). You repeat a process until you achieve a desired result.

## How Does a For Loop work?

Say you’ve got a group of ducks and you want to tag them as geese. In Python, for loops looks like this:

```python
for duck in flock:
    duck = goose
```

We can write that out in plainer language. It helps to read this with a ridiculous British accent (unless you have a ridiculous British accent):

```python
for the first duck in the flock:
    make it a goose
for the second duck in the flock:
    make it a goose
for the third duck in the flock:
    make it a goose
...
```

And round and round we go until all of the ducks are goosed. In professional terms, each duck is an element and the goosing is the execution of the block. Let’s see this in practice, starting with one of my favorite things, strings.

## For Loops and Strings

Let’s run a loop over a string.

```python
for letter in ‘word’:
    print(letter)
```

We can write that out in pseudocode, like this:

```python
for every letter in the string ‘word’:
    print the letter on a new line
```

Looping over a string will even process spaces, because spaces are considered characters:

```python
for char in ‘for loop’:
    print(char)
```

Why did I change the iterator to char? You will often see in code the use of char, or c, in reference to a character in a string. It’s a convention that you should be familiar with.

We can do much more than print each character.

```python
for c in ‘byting python’:
    print(c.upper())
```

AWESOME!

## Home, Home on the Range… Function

The range() function let’s you set, well, a range of numbers to process. Like chocolate syrup on vanilla ice cream, it tastes great with for loops. Try this:

```python
for number in range(10):
    print(number)
```

So far, the for loop examples we looked at process small ranges. But for loops are most useful when crunching large collections of elements and big numbers. Do you know the parable of the rice and the chessboard?

> If a chessboard were to have wheat placed upon each square such that one grain were placed on the first square, two on the second, four on the third, and so on (doubling the number of grains on each subsequent square), how many grains of wheat would be on the chessboard at the finish?

In IDLE, create a file called rice.py:

```python
rice = 1
total = 0

for i in range(1,65):
    total += rice
    print("The amount of rice on square", i, "is: ", rice)
    print(“Out total amount of rice is:”, total)
    rice = rice * 2
```

Press F5 or select Run. Hope you’re hungry!
