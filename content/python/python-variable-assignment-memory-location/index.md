---
title: Python Variable Assignment and Memory Location
category: Python
video:
image: 20140714_python_bytes3.3_storage_jars.png
lesson: 7
---

Open your kitchen cupboard. In it you will find various means of storing food. Cardboard boxes, Ziplocs, Tupperware, plastic bags sealed with twist ties, and the focus of our discussion, storage jars. Computer memory is like a cupboard filled with storage jars. Using Python, you put values in the jars and then you put a label, a variable, on the jar, so you can find your value later.

The storage jar is our location in memory where I want to keep my peanut butter and jelly. Suppose I have a value of peanut butter, 5\. We can see the location of the memory address of that value with the id() function.

```python
>>> id(5)
10188960
```

Think of that long number as a storage jar.

I can put a label on the jar:

```python
>>> peanut_butter = 5
>>> peanut_butter
5
```

I can check the location of the value associated with peanut_butter by passing my variable to the id() function.

```python
>>> id(peanut_butter)
10188960
```

I can also put more than one label on the jar:

```python
>>> crunchy = 5
>>> crunchy
5
```

And check it’s location in memory:

```python
>>> id(crunchy)
10188960
```

We can assign variables to other variables. Let’s change the value of crunchy first:

```python
>>> crunchy = 7
>>> peanut_butter = crunchy
>>> peanut_butter
7
>>> crunchy
7
```

Watch what happens if we change crunchy back to 5.

```python
>>> crunchy = 5
>>> crunchy
5
>>> peanut_butter
7
```

Our variable peanut_butter didn’t change. That’s because when we assigned it to crunchy, like this:

```python
>>> peanut_butter = crunchy
```

We passed it the value associated with crunchy, which was 7\. Where on the shelf is our storage jar of 7?

```python
>>> id(peanut_butter)
10189024
```

Let’s say I have five scoops of peanut butter in my storage jar:

```python
>>> pb = 5
```

Jelly is usually stored in a smaller container, so let’s say I have three scoops:

```python
>>> j = 3
```

How many scoops of peanut butter and jelly do I have?

```python
>>> pb + j
8
```

Let’s assign that statement to a variable.

```python
>>> pbj = pb + j
>>> pbj
8
```

All of these food metaphors are getting me hungry. Let’s make a sandwich. If we use two scoops of peanut butter and one scoop of jelly, we need to assign new values to our variables with the subtraction operator like this:

```python
>>> pb = pb - 2
>>> pb
3
>>> j = j - 1
>>> j
2
```

Now how much peanut butter and jelly do we have left?

```python
>>> pbj = pb + j
>>> pbj
5
```

Delicious! When you are hungry for more [learn all about strings in the next chapter…](https://thehelloworldprogram.com/python/python-strings-characters/ "print(“Python Strings & Characters”)")
