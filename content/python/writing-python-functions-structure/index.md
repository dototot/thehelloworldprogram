---
title: "Writing Python Functions Part 1: Structure"
category: Python
video:
image: byting_python_06.2_functions_02.png
lesson: 15
---

Python’s built-in functions are incredibly useful. Eventually you will find yourself repeating yourself. That’s bad. That’s when programming gets boring. Fortunately, you can write your own functions, which is why the first three letters of function are ‘F-U-N’. If you’re just joining us, you might want to start with our previous tutorial, [Python Functions are Little Machines in Your Program](https://thehelloworldprogram.com/python/python-functions/).

## Writing Python Functions

Now that we’re writing functions, you will want to use IDLE to create new files. It becomes tedious very quickly to enter and reenter functions in the shell prompt. Open IDLE and create a new file, fun.py.

Enter the following into your file.

```python
def fun():
    print(“Something that provides mirth or amusement”)

fun()
```

Now run fun.py.

```python
Something that provides mirth or amusement.
```

Fun, right?

As you may recall, we can pass arguments to a function. Let’s create a new file, snowclone.py. A snowclone is like a one sentence Mad Lib. The classic example is: _X_ is the new black, where _X_ is whatever is cool at the moment, like taupe or mauve.    [https://en.wikipedia.org/wiki/Snowclone](https://en.wikipedia.org/wiki/Snowclone)

Enter the following in your new file:

```python
def snowclone(x):
    print(x, “ is the new black.”)

snowclone(“Python”)
```

We can also pass multiple arguments to a function. Modify snowclone.py so that it looks like this:

```python
def snowclone(x, y):
    print(x, “ is the new “, y, ”.”)

snowclone(“Python”, “Java”)
```

Then run it.

## Function Structure

Let’s take a look at the structure of a function by breaking down snowclone(). Functions are composed of a header and a body.

```python
def snowclone(x, y): #header
    print(x, “ is the new “, y, ”.”) #body
```

### The Function Header

We define a function with ‘def’, which is obviously short for define. Then we give the function a name. Since we are writing the function we can name it whatever we want, but it’s best practice to name it something that reflects what it does. In our case, we named it snowclone(). We could easily name it flapdoodle(), but then nobody but us would know what it did without some digging. Lastly, we immediately follow our function name with parentheses, our argument variables, and then a colon.

### The Function Body

We indent the next line to specify that everything that follows is a part of this function. Functions can be as long and elaborate as we want. They can even contain functions within themselves. Try this:

```python
def snowclone(x, y):
    print(x, " is the new", y, ".")
    def fun():
        print("Functions are F-U-N!")
    fun()

snowclone("Fun", "function")
```

I hope you had fun writing your first functions. Here’s some extra credit: Write a function that prints a limerick with this template:

> There once was an X from place B,
> Who satisfied predicate P,
> Then X did thing A,
> In a specified way,
> Resulting in circumstance C.

A rolling stone gathers momentum. Get up to speed in [our next tutorial on Function Scope & Flow](https://thehelloworldprogram.com/python/writing-python-functions-part-2-flow-scope/).
