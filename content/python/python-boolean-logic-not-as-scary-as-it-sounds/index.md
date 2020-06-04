---
title: "Python Boolean Logic: Not As Scary As It Sounds"
category: Python
video:
image: 20150713_python_7.1_if.png
lesson: 17
---

True or False? You use some combination of these opposite pairs everyday: Yes. No. Up. Down. Left. Right. Forward. Back. On. Off. If your answer is True, then you’re already a computer scientist! Why stay inside learning Boolean logic? You can stop reading now and go outside and play.

# Boolean Logic

What? You’re still reading? You want to know more? Okay. The above examples are called binaries. The concept of binary goes way back to [Gottfried Leibniz](https://commons.wikimedia.org/wiki/File:Gottfried_Wilhelm_Leibniz_c1700.jpg). In addition to wearing crazy wigs, Leibniz developed a system of formal logic that used 1s and 0s to perform arithmetic. This was the foundation of binary as we know it today. In the mid-19th century, mathematician George Boole developed a system of algebra based on binary, using True and False and three basic operators: AND, OR and NOT. Today we refer to it as Boolean logic or Boolean algebra. Boolean logic is the foundation of digital circuits. In a nutshell (no pun intended), your computer is a very complicated arrangement of a very simple idea. The switch is on or the switch is off. The digit is equal to 1 or the digit is equal to 0\. The value is True or the value is False. From these basic elements we can build complex programs.

Computer scientists refer to Boolean operators as Booleans, for short. As I’m sure you guessed, they are a core data type in Python. The interpreter refers to them with the keyword ‘bool’. Try this at the prompt:

```python
>>> cheese = True
>>>type(cheese)
 <class ‘bool’="">>>> cheese = False
>>> type(cheese)
<class ‘bool’=""></class></class>
```

# Boolean Operators

We can produce Booleans without assigning them to variables, but instead make comparisons and evaluations using operators. We can work with the following:

- == (is equal to)
- != (is not equal to)
- and
- or
- not
- \>= (is greater than or equal to)
- <= (is less than or equal to)

## ==

Let’s start with ==. Check this:

```python
>>> 1 == 1
True
>>> 0 == 1
False
```

Now try:

```python
>>> 0 == 0
True
```

Did you expect False? Python 3 equates 0 with False and 1 with True. Even though 0, on its own, evaluates to False, the comparison is True because, despite popular opinion, 0 is in fact equal to 0\. The following are also valid expressions:

```python
>>> 1 == True
True
>>> 0 == False
True
```

## !=

Now let’s look at !=. It looks weird, but it’s very straightforward. It’s like somebody shouting to get your attention, “Hey! This is not equal to that!”

```python
>>> 1 != 0
True
>>> 1 != 1
False
```

In the example above, “It’s True! One is not equal to zero!” and “False! One is not equal to one? Are you kidding me?!”

## and

I said earlier that you are already a computer scientist, and it’s true: you use Boolean logic all day, every day, when making decisions and answering questions. We can assign Boolean values to variables.

```python
>>> cats = True
>>> dogs = False
>>> cats and cats
True
>>> cats and dogs
False
```

The comparison between cats and cats returns True because it is true, cats and cats are the same, while dogs are a different, albeit superior, beast.

## or

The or operator lets us compare one or more values and returns True only if at least one of the values is true. It will return False if none of the values are True.

```python
>>> True or False
True
>>> False or True
True
>>> False or False
False
```

## not

The not operator negates the value we apply it to, returning the opposite. For example:

```python
>>> not True
False
```

This is like saying, “If something is not True, it is False. And if something is not False, it is True”:

```python
>>> not False
True
```

## **>, <, >=, <=**

While these symbols are great for emoticons, they are even more powerful when used mathematically. Try the following at the Python prompt:

```python
 >>> 1 > 0
True
```

This is the greater than symbol. We evaluated whether or not one is greater than zero, which is obviously True. If we reverse the operator, we evaluate whether or not 1 is less than 0:

```python
>>> 1 < 0
False
```

Like before, we can assign values to variables and evaluate:

```python
>>> dogs = 1
>>> cats = 0
 >>> cats < dogs
True
>>> cats > dogs
False
```

As you can see, dogs are greater than cats. We can also evaluate whether or not a value is greater than OR equal to another value.

```python
>>> 1 >= True
True
>>> 1 <= True
True
>>> 1 <= False
False
>>> 1 >= False
True
```

That last example is tricky, it appears as though it should return False, but it’s True. One _is_ greater than or equal to False.

This is all very well and interesting, but comparing apples to oranges gets old real quick. What’s the point? In our [next chapter, we will introduce if Statements, which are >= Boolean logic](https://thehelloworldprogram.com/python/python-cake-learn-conditional-statements-else/).
