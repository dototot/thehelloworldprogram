---
title: "Python List Operations: Concatenation, Multiplication, Slicing & del"
category: Python
video:
image: hello_world_byting_python_05.2_list_operations.jpg
lesson: 12
---

Lists and strings have a lot in common. They are both sequences and, like pythons, they get longer as you feed them. Like a string, we can concatenate and multiply a Python list.

## Python List Concatenation & Multiplication

Old MacDonald had a farm, E-I-E-I-O. And on this farm there was a python, E-I-E-I-O. At the prompt, create a Python list with an item, ‘farm’:

```python
>>> t = [‘farm’]
>>> t += ‘EIEIO’
>>> t
['farm', 'E', 'I', 'E', 'I', 'O']
```

That’s not what we wanted. Our string, EIEIO, was split into individual items and then added to our list. Why? Because strings are iterable. So how do you add strings to a Python list? With brackets.

```python
>>>t += [‘EIEIO’]
>>>t
['farm', 'E', 'I', 'E', 'I', 'O', ‘EIEIO’]
```

Try adding a number to a list…

```python
>>>t += 128
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable</module></stdin>
```

How do we add integers to lists? Just like we did with strings.

```python
>>>t += [128]
```

Lastly, what do you think will happen when you run this?

```python
>>>t += ‘128’
```

We can also perform multiplication on the entire list or individual items in the list by index.

For example:

```python
>>>t*2
>>>t
```

E-I-E-I-O!

And by index:

```python
>>>t[1]*4
```

Eeee! How exciting!

```python
>>>t[7]*16
```

You win! Time for dessert.

## Slicing a Python List

Care for a bite of hedgehog? A hedgehog slice is a cake made of layers of chocolate and biscuit. It’s delicious. A group of hedgehogs is called an array. Let’s create a list called ‘array’ and populate it with hedgehogs.

```python
array = [‘Plato’, ‘Lucretius’, ‘Dante’, ‘Hegel’, ‘Dostoevsky’, ‘Nietzsche’, ‘Ibsen’, ‘Proust’, ‘Braudel’]
```

Using an index we can easily see what the first item is:

```python
>>> array[0]
'Plato'
```

But what if we want everything _but_ the first item? We slice it, just like a cake.

```python
>>> array[1:]
['Lucretius', 'Dante', 'Hegel', 'Dostoevsky', 'Nietzsche', 'Ibsen', 'Proust', 'Braudel']
```

And if we only want the middle?

```python
>>> array [1:-1]
['Lucretius', 'Dante', 'Hegel', 'Dostoevsky', 'Nietzsche', 'Ibsen', 'Proust']
```

## Deleting Items from a Python List

Because our array is populated with prickly and disagreeable hedgehogs, their spines are irritating one another. So we need to clear out a few items.

Use del to remove one item, or a slice of items

```python
>>> del array[2]
>>> array
['Plato', 'Lucretius', 'Hegel', 'Dostoevsky', 'Nietzsche', 'Ibsen', 'Proust', 'Braudel']
>>> del array[2:4]
>>> array
['Plato', 'Lucretius', 'Nietzsche', 'Ibsen', 'Proust', 'Braudel']
```

## Meanwhile, Back at the Ranch…

This little piggy learned Python list operations,

This little piggy stayed home,

This little piggy ate a hedgehog slice,

And this little piggy had none.

[And this little piggy went wee wee wee all the way to the next Python list lesson](https://thehelloworldprogram.com/).
