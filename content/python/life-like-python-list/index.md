---
title: Life is Like A Python List
category: Python
video:
image: 20141003_python5.1_lists.png
lesson: 11
---

Life is like a Python list. You spend most of it in boxes. Sometimes the box is empty and sometimes the box is filled with different objects. And sometimes it’s a box within a box. I like to think of Python lists as boxes because the brackets look like a container. We make an empty box, or list, like this:

```python
>>> []
[]
```

But that’s not very useful. Let’s give it a name:

```python
>>> box = []
>>> box
[]
```

Some chocolates ship with a map displaying the type and location of chocolates within the box. This is our _index._ Let’s say I just picked up a box of Whizzo Chocolates. In Python, it would look like this:

```python
>>> whizzo = ['Cherry Fondue',
            'Crunchy Frog',
            'Ram\'s Bladder Cup',
            'Cockroach Cluster',
            'Anthrax Ripple',
            'Spring Surprise']
```

The chocolate I want is ‘Crunchy Frog’. I access that delectable item by its index, like so:

```python
>>> whizzo[1]
'Crunchy Frog'
```

Remember our discussion on counting in Strings? It works the same with Lists. We always start at 0\. Here’s a quick refresher.

```python
>>> t = [1,2,3]
>>> t[1]
2
```

I named this example list **t. **It’s a convention you will encounter frequently. Why t? Because **list** is a keyword and **l** looks too much like 1 or I.

We can assign list items to variables, like this:

```python
>>> dessert = whizzo[1]
>>> dessert
'Crunchy Frog'
```

Or, to clarify the counting, look at it like this:

```python
>>> t = [1, 2, 3]
>>> two = t[1]
>>> two
2
```

Try it with the other indices.

As long as the value is an integer, we can use a variable as an index to access an item. Let me pick a chocolate for you, at random:

```python
>>> from random import randint
>>> i = randint(0, len(whizzo)-1)
>>> whizzo[i]
```

Delicious, no? Life is like a box of Whizzo chocolates. You never know what you’re going to get.

## Heterogeneity & Mutability & Nesting & What?

Unlike strings, lists are mutable. We can modify a list item through its index.

```python
>>> t = [1,2,3]
>>> t[2] = "three"
>>> t
[1,2,'three']
```

Did you see what I did there? I swapped the value of 3 with the string ‘three’. Lists are _heterogeneous_, which means “composed of parts of different kinds”. Lists can contain any type of object, even other lists.

```python
>>> t
[1,2,'three']
>>> t[2] = [4,5,6]
>>> t
[1, 2, [4, 5, 6]]
```

Here’s one more example:

```python
>>> a = [1,2,3]
>>> b = [4,5,6]
>>> c = [a,b]
>>> c
[[1, 2, 3], [4, 5, 6]]
```

Get your hands dirty in our [next tutorial on list concatenation, multiplication, and slicing](https://thehelloworldprogram.com/python/python-list-operations/).
