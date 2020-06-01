---
title: Python Variable Assignment Statements and Naming Rules & Conventions
category: Python
video:
image: 20140709_python_bytes_3.1.png
lesson: 6
---

Think of a number. Any number. Now, before you forget that number, let’s store it for later. When you think of a number, you are holding that value in your head. If you want to remember it later and your memory is like mine, you write it down on a piece of paper. And if it’s really important, you will put it in a safe place. In computer science, that safe place is a _variable_. They’re called variables because, well, they’re “capable of being varied or changed”. You can name a variable (almost) anything you want and you can change the value willy-nilly.

I thought of the number 5, so at the Python prompt, I will create a variable with the clever name “number”, and enter my value:

```python
>>> number = 5
```

Now stop thinking of that number. We’ll come back to it later. If you’re just joining us, you may want to start at the beginning with our [introduction to the Python programming language](https://thehelloworldprogram.com/python/now-something-completely-different/ "And Now For Something Completely Different… An Introduction to the Python Programming Language").

## Python Variable Assignment Statements

In the above illustration, Attlee, Truman, and Stalin are each thinking of a number. We can treat their names as variables and their respective numbers as values, like so:

```python
>>> Attlee = 7
>>> Truman = 101
>>> Stalin = “a number”
```

This is called an assignment statement. We use the equal sign (=) to assign a value to a variable. It’s like saying, “Attlee _is_ 7”. If I want to know what number Attlee is thinking about, I simply enter his name at the prompt:

```python
>>> Attlee
7
```

Now it’s your turn. Try it with the other heads of state.

```python
>>> Truman
101
>>> Stalin
‘a number’
```

Stalin is being a wisenheimer. ‘a number’ is a string, not a number, and we haven’t covered strings yet. You can change the value of a variable by assigning it a new value. Let’s reassign Stalin’s value to a float. How about pi?

```python
>>> Stalin = 3.14
>>> Stalin
3.14
```

My head is too full of values to remember anything more than 3.14\. Fortunately, we can easily assign the value of _pi_ to a variable using the math module.

```python
>>> import math
>>> math.pi
3.141592653589793
>>> Stalin = math.pi
>>> Stalin
3.141592653589793
```

As easy as pie.

## Variable Naming Conventions and Rules

You may be familiar with algebraic equations, such as the quadratic:

> ax² + bx + c = 0

In mathematics, variables are generally single letters like x, y, and z, or Greek symbols like π or θ. Mathematicians often use variables when they don’t know a specific value but are working towards finding it. It’s different in Python. You must assign a value to a variable before you can use it, even if that value is zero or empty. If, for example, I call the variable Guido before assigning it a value:

```python
>>> Guido
```

I will get the following error:

```python
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
NameError: name 'Guido' is not defined</module></stdin>
```

Variable assignment works left to right.

```python
>>>> Guido = 0
```

Is acceptable. As is:

```python
>>> Guido = ""
```

And even:

```python
>>>> Guido = False
```

But the following will give you a nasty error.

```python
>>> 0 = Guido
>>> ‘’ = Guido
>>> False = Guido
```

The first two gave you an error that read:

```python
 File "<stdin>", line 1
SyntaxError: can't assign to literal</stdin>
```

But the last one gave you an error that read:

```python
 File "<stdin>", line 1
SyntaxError: assignment to keyword</stdin>
```

That’s because False is a _reserved word_ in Python. It’s what computer scientists refer to as a _Boolean value,_ and you can’t use it as a variable identifier. There’s a Python module called keyword. It has a function called kwlist. Importing keyword and calling kwlist will return a list of Python’s keywords. Try it:

```python
>>>> import keyword
>>> keyword.kwlist
```

Those are all the words you can’t use. But that’s okay. When it comes to variable names, the sky is the limit! Well, almost. There are some rules you need to follow and some conventions you ought.

### The Rules

- Variables names must start with a letter or an underscore, such as:
  - \_underscore
  - underscore\_
- The remainder of your variable name may consist of letters, numbers and underscores.
  - password1
  - n00b
  - un_der_scores
- Names are case sensitive.
  - case_sensitive, CASE_SENSITIVE, and Case_Sensitive are each a different variable.

### The Conventions

- Readability is very important. Which of the following is easiest to read? I’m hoping you’ll say the first example.
  - python_puppet
  - pythonpuppet
  - pythonPuppet
- Descriptive names are very useful. If you are writing a program that adds up all of the bad puns made in this book, which do you think is the better variable name?
  - total_bad_puns
  - super_bad
- Avoid using the lowercase letter ‘l’, uppercase ‘O’, and uppercase ‘I’. Why? Because the l and the I look a lot like each other and the number 1\. And O looks a lot like 0.

In our next lesson we will put all of this to good use [making variable sandwiches](https://thehelloworldprogram.com/python/python-variable-assignment-memory-location/ "Python Variable Assignment and Memory Location"). Mmm, just like Mom used to make.
