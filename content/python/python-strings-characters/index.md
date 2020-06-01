---
title: print(“Python Strings & Characters”)
category: Python
video:
image: 20140910_python4.1_strings.jpg
lesson: 8
---

“Hello, World!” Do you remember our first program? We used the print() function to output a line of text. The phrase “Hello, World!” is a string, and a string is a sequence of characters. We create a string by wrapping a sequence of characters in quotation marks. Even a single character is considered a string. So it follows that a string of multiple characters is a string of strings. Which begs the question, which came first? The string or the character? The string was the characters idea for making more characters! But what exactly is a character? Do you remember our discussion on natural languages? Characters are units of information used in the written form of a natural language. Letters, numbers, punctuation marks, and even whitespace are characters. Why are they called strings? Why is a raven like a writing desk? I don’t know. But it might be useful to imagine yourself _stringing_ characters together, one after another, like beads on a necklace.

# Python Strings

Let’s begin. Open IDLE:

```python
>>> print("Hello, World!")
Hello, World!
```

That was our first program. Do you remember the rush of excitement you felt when you saw those words returned on the screen? Neither do I. Regardless of what some robots will tell you, computers are totally dumb. You have to tell them what to think. So let’s try this:

```python
>>> print("You are the best")
You are the best
```

Ooh, my computer thinks I’m the best. Does yours?

```python
>>> print("You are super smart")
You are super smart
```

Why thank you, computer.

```python
>>> print("You are a force of nature")
You are a force of nature
```

Flattery will get you everywhere.

```python
>>> print("Python is my favorite language)
  File "<stdin>", line 1
    print("Python is my favorite language)
                                         ^
SyntaxError: EOL while scanning string literal</stdin>
```

What happened here? I was getting such great praise. Let’s look at that again.

```python
>>> print("Python is my favorite language)
```

Do you see what’s missing? We need to close our statement with quotation marks. Let’s try it again.

```python
>>> print("Python is my favorite language")
Python is my favorite language
```

That’s more like it. And of course it’s your favorite language, computer.

## You Can Quote Me on This

Now you can use single or double quotes to enclose a statement. For example:

```python
>>> print('Single')
Single
```

And

```python
>>> print("Double")
Double
```

But you can’t mix quotation marks like this:

```python
>>> print('Dingle")
  File "<stdin>", line 1
    print('Dingle")
                  ^
SyntaxError: EOL while scanning string literal</stdin>
```

Or like this:

```python
>>> print("Souble')
  File "<stdin>", line 1
    print("Souble')
                  ^
SyntaxError: EOL while scanning string literal</stdin>
```

Whichever quotation marks you choose, you must use the same kind. But, you ask, what if I want to print quotation marks? Easy. You simply wrap your quoted statement in the other type of marks. For example, I wrap my print statement in single quotes to be able to output double quotes:

```python
>>> print('I said, "You are the best!"')
I said, "You are the best!"
```

I know. I heard you the first time, computer. You can also quote quotes like this:

```python
>>> print("I said, 'You are super smart.'")
I said, 'You are super smart.'
```

You just keep telling me that, computer. And that’s it kids. You learned how to use the print() function in Python. It should keep you entertained for about 3 minutes. When the excitement wears off, [perform string operations in our next lesson](https://thehelloworldprogram.com/python/python-string-operations-concatenation-multiplication-indexing-slicing/ "Python String Operations: Concatenation, Multiplication, Indexing and Slicing").
