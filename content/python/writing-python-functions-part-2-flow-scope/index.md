---
title: "Writing Python Functions, Part 2: Flow & Scope"
category: Python
video:
image: byting_python_06.3_functions_01.png
lesson: 16
---

The Python interpreter reads a program just like you are reading this page: one line at a time, from left to right and top to bottom. The interpreter executes operations and functions in the order that it encounters them. This is called _control flow_ or the _flow of execution_.  Unlike the Python interpreter, when we read something and encounter a word we don’t understand, we don’t freak out and shut down(usually). We continue reading and either guess the definition of the word based on context or pause and consult a dictionary. The Python interpreter isn’t so flexible. You can’t call a function before defining it. The interpreter needs to know what the function is and does _before_ it encounters that function.

## Writing Python Functions: Flow

For example, the following program, too_soon.py:

```python
too_soon()

def too_soon():
    print("Don't put the cart before the aardvark")
```

…will return this error:

```python
Traceback (most recent call last):
  File "too_soon.py", line 1, in <module>
    too_soon()
NameError: name 'too_soon' is not defined</module>
```

When we call a function, the function reads our arguments, one at a time, from left to right. It then processes the argument values and when it’s finished it returns a value. Try the following, in a program called flow.py:

```python
def flow(left, right):
    print(right)
    print(left)

flow(“(^_-)”, “(-_^)”)
```

In the example above, even though we passed in the variable ‘left’ first, our function printed ‘right’ first because that is the order in which we called it.

## Writing Python Functions: Scope

Imagine your Python program is the world(the _Hello World_), and your function is your group of friends. One of the conventions of programming is to declare variables at the top of your program. These variables are _global_. Any variables declared within a function are _local_. Global variables are accessible inside or outside a function, but local variables are only accessible inside the function where they are declared. Global variables are like the news or common knowledge: everyone knows the name of the president of the United States. Local variables are like secrets and inside-jokes: only you and your friends understand them; the rest of the world has no idea what you’re talking about. This is called _scope._ A variable that is accessible by any function in the program has _global scope_. A variable that is only accessible inside a function has _local scope._ Let’s write a program, invitation.py:

```python
global_variable = "Today is August 4th."

def party():
    local_variable = “Today is my birthday!”
    print(global_variable)
    print(local_variable)

party()
print(global_variable)
print(local_variable)
```

This will return the following error:

```python
Traceback (most recent call last):
  File "invitation.py", line 10, in <module>
    print(local_variable)
NameError: name 'local_variable' is not defined</module>
```

Change line 10 to something amusing, and run the program again:

```python
global_variable = “Today is August 4th.”

def party():
    local_variable = “Today is my birthday!”
    print(global_variable)
    print(local_variable)

party()
print(global_variable)
print("It's my party and I'll DRY if I want to...")
```

When I call the party() function, my friends know that it’s both August 4th and my birthday. Calling the global variable outside the party function returns the date, August 4th, because everyone has access to the date. But calling the local variable outside the party() function returns an error because no one outside the party() function knows it’s my birthday.

Speaking of party, [there’s cake in the next chapter](https://thehelloworldprogram.com/python/python-boolean-logic-not-as-scary-as-it-sounds/).
