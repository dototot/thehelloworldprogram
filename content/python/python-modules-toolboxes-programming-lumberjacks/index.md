---
title: Python Modules are Toolboxes for Programming Lumberjacks
category: Python
video:
image: 20160307_py10.1_lumberjack.png
lesson: 24
---

Whether or not you like to press wildflowers, Python modules make coding much easier. If you were building a house, you wouldn’t start by making your own hammer, saw and measuring tape, unless, of course, you were a crazy DIY [lumberjack](https://www.youtube.com/watch?v=QgaRd4d8hOY). Instead, you would go to your workshop and pick up your toolbox. The same is true for programming. You _could_ write a program from scratch, and while you would learn a lot, it would take a very long time.

Python ships with a big, invisible workshop. This workshop is called [the Standard Library](https://docs.python.org/3/library/) and it’s filled with toolboxes called modules. We used a few of these toolboxes already, such as math and random. Each module is loaded with tools related to a specific task. Carpenters, plumbers, and electricians each have very different tools in their toolboxes. The same is true of modules. Modules are a collection of functions. The math module, for example, is a toolbox filled with math tools.

## Python Modules: Toolboxes for Programming Lumberjacks

To access a module, we use the import statement. To see what’s available in a module, we use the help() function.

Try this:

```python
>>> import math
>>> help(math)
```

This will present you with NAME, DESCRIPTION, and a list of FUNCTIONS. The functions are listed in alphabetical order. Scroll down to the ‘s’ section. See the function sqrt()?

```python
sqrt(...)
    sqrt(x)

    Return the square root of x.
```

The help file presents you with an example of how to use the function and a short description of what it will do, just like the functions we wrote.

If you scroll down further, you will see under DATA two predefined variables: e and pi. Cool, right? Type ‘q’ to quit and return to the Python prompt.

We access those predefined variables like this:

```python
>>> math.pi
3.141592653589793
```

And we use our math functions like this:

```python
>>> math.sqrt(169)
13.0
>>> math.sqrt(170)
13.038404810405298
```

## The Dot

What’s up with that dot? Didn’t we import math? Why do we need to write it out like that?

Importing a module is like placing that toolbox on your workbench. If there’s a specific tool you want to use, you need to tell the interpreter to fetch it from its toolbox. But, if you know which tools you plan to use, you can take them out of the toolbox and put them on the workbench, like this:

```python
>>> from math import pi, sqrt
```

And then you can call those tools, without the math prefix, like this:

```python
>>> pi
3.141592653589793
>>> sqrt(64)
8.0
```

Whether or not you want to be a programmer or a lumberjack, you now know how to import Python modules from the Standard Library. You can now spend your free time to pressing wildflowers.
