---
title: "Python String Operations: Concatenation, Multiplication, Indexing and Slicing"
category: Python
video:
image: 20140916_python4.2_string_operations.png
lesson: 9
---

Did the excitement of the print() function wear off? There’s a lot more to strings than simply printing them out in IDLE. In this tutorial we will cover Python string operations: concatenation, multiplication, indexing and slicing. If you’re just joining us, you might want to check out [our previous tutorial introducing strings](https://thehelloworldprogram.com/python/python-strings-characters/ "print(“Python Strings & Characters”)").

## String Operations

Think of strings like beads on a necklace. In fact, let’s make a string necklace right now. First, we need an empty string. We create strings by wrapping quotation marks around a value. I’m calling my string `python|necklace` and I’m declaring it with two quotation marks with nothing in-between.

```python
>>> necklace = “”
```

Now, when I call necklace…

```python
>>> necklace
‘’
```

The interpreter returns an empty string. Even though there is nothing to display, an empty string is still a string. See for yourself…

```python
>>> type(necklace)
<class ‘str’=""></class>
```

And it still holds a place in memory (remember: your memory location will be different than mine):

```python
>>> id(necklace)
140302760209408

```

A blank space is considered a character so a single space is also a string. Try it:

```python
>>> blank = ‘ ‘
>>>blank
‘ ‘
>>> type(blank)
<class ‘str’=""></class>
```

Let’s add our first bead. We do so using the **+** operator and any character so long as it is wrapped in quotation marks…

```python
>>> necklace = necklace + “O”
>>> necklace
>>> ‘O’
```

Great! Now we have one bead on our necklace, or, rather, character on our string.

The operation we performed there wasn’t addition, though. It’s what in computer programming is referred to as **concatenation**. Concatenation is the joining of two strings end-to-end.

But wait a minute! Why did I add `python|necklace` to itself? Because strings are _immutable_, which means they can’t be changed. Unlike numerical values, a string can’t be changed after it is declared. In order to store the value of a string operation, we need to assign it to a new variable. In this case, I am assigning to `python|necklace` the value currently stored in `python|necklace`, ‘’, an empty string, plus the value ‘O’.

Try adding another character without assigning our string value to a new variable.

```python
>>> necklace + ‘o’
‘Oo’
```

That gave us the output we expected. But as you will see, it didn’t store that value. Call `python|necklace` again:

```python
>>> necklace
‘O’
```

Let’s add another bead to our necklace with an assignment statement:

```python
>>> necklace = necklace + ‘o’
>>> necklace
‘Oo’
```

That’s more like it. But at this rate it’s going to take forever to make a nice, long string of characters. Let’s speed up the process with the **\*** operator.

```python
>>> necklace = necklace * 20
>>> necklace
'OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo'
```

Ooh, pretty!

## String Indices and Slices

Because a string is a sequence, we can access a single character or _slices_ of it with the **index operator**, **[ ]**. I like to think of the index operator like the claw crane game you find in an arcade. Let’s create a new string, ‘sock monkey’, assigned to the variable `python|s` , for string.

```python
>>> s = ‘sock monkey’
```

I drop my index claw into my variable, like so:

```python
>>> s[0]
‘s’
```

And I pull out the zeroth element, ‘s’.

Let’s try that again…

```python
>>> s[1]
‘o’
```

What happens if I grab the 4th element?

```python
>>> s[4]
‘ ‘
```

My index claw grabs the blank, which, though it doesn’t look like much, is still a valid and very important character.

Grabbing individual letters from a string is fun… the first few times. So let’s extract larger chunks. We can pass more than one value to the index operator, defining the range of the slice we want to extract. I want the monkey without the sock, so…

```python
>>> s[5:11]
‘monkey’
```

This is the same as:

```python
>>> s[5:]
‘monkey’
```

If we want everything beyond our starting index, we don’t need to specify our end point.

It works in the other direction, too.

```python
>>> s[:4]
‘sock’
```

Did you notice something odd there? We declared index 4, and though our interpreter returned four characters, it only returned those from the indices 0, 1, 2 & 3, not 4\. This is how slicing works in Python. The operation returns everything up to the specified index.

```python
>>> s[2:7]
‘ck mo’
```

Let’s verify this by calling the indices individually:

```python
>>> s[2]
‘c’
>>> s[7]
‘n’
```

We can also access indices backwards with negative integers:

```python
>>> s[:-2]
‘sock monk’
>>> s[-3:]
‘key’
```

Cool, right? It gets better. [Next up? String methods!](https://thehelloworldprogram.com/python/python-string-methods/ "Python String Methods: str(), upper(), lower(), count(), find(), replace() & len()")
