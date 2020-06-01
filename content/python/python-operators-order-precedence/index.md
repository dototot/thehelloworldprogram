---
title: "Python Operators: Order & Precedence"
category: Python
video:
image: 20140620_python_bytes2.2_rur.png
lesson: 5
---

Operator precedence determines the order in which operations are processed. In this tutorial, you will perform a mathemagical trick using nested parentheses to control Python operator precedence. If you’re just joining us, you may want to start with our previous post, [Python Operators are Mathematical!](https://thehelloworldprogram.com/python/python-operators/ "Python Operators are Mathematical!")

## Python Operator Precedence

We now return to the continuing saga at Rossum’s Universal Robot Hospital. Egos flare as Drs. Plus, Minus, Slash, Asterisk and Powers debate who has the most authority. An appeal is made to the president of the hospital, Parentheses. Like any good robot hospital, there is a hierarchy among operations.

Watch what happens when we run an expression involving mixed operators:

```python
>>> 1 + 2 * 3
7
```

You might expect that to equal 9\. But the Python interpreter doesn’t _read_, or process, operators from left to right, like we do. Instead, the Python interpreter ranks operators by importance and processes them in a specific sequence. This is called the _order of operations_ or, depending on who you are talking to, _operator precedence._ In the example above, multiplication has a higher precedence than addition, so 2 \* 3 is processed first, then added to 1\. Using parentheses we can force operators of lower precedence to run first:

```python
>>> (1 + 2) * 3
9
```

Let’s take a look at PEMDAS. No, PEMDAS isn’t a line of letters on an eye chart. It’s an acronym to help you remember which mathematical operators precede the others. The abbreviation is short for Parentheses Exponentiation Multiplication Division Addition Subtraction. You can remember it with “Please Excuse My Dear Aunt Susie”. Remember Susie? She had a tugboat…

The following chart outlines operator precedence:

<table>

<tbody>

<tr>

<td>Highest Precedence</td>

<td>President</td>

<td>()</td>

<td>Parentheses</td>

</tr>

<tr>

<td></td>

<td>Dr. Powers</td>

<td>**</td>

<td>Exponentiation</td>

</tr>

<tr>

<td></td>

<td>Dr. Asterisk</td>

<td>*</td>

<td>Multiplication</td>

</tr>

<tr>

<td></td>

<td>Dr. Slash</td>

<td>/</td>

<td>Division</td>

</tr>

<tr>

<td></td>

<td>Dr. Plus</td>

<td>+</td>

<td>Addition</td>

</tr>

<tr>

<td>Lowest Precedence</td>

<td>Dr. Minus</td>

<td>–</td>

<td>Subtraction</td>

</tr>

</tbody>

</table>

In our robot hospital metaphor, President Parentheses has the most authority, followed by Dr. Powers, Dr. Asterisk, Dr. Slash, Dr. Addition, and lastly, Dr. Minus. As you can see, it pays to think big. Parentheses determine the order of operations. Any operation contained within parentheses is executed first. But it gets better. You can use parentheses to nest operations within operations, just like a Matryoshka doll made of Pythons.

## Parentheses are Mathemagical!

Let’s look at our magic trick again, this time using the rule of precedence with nested parentheses AND the magic of Python. Just to prove that it works with any number, I will use the unlucky integer 13\. You may use any positive whole number you wish. Begin building your statement on your Python prompt, but don’t hit return until I say so.

The first step of our magic trick is to add 5\. We want that to happen first, so wrap it in parentheses, like this:

```python
>>>( 13 + 5 )
```

Next we multiply that result by 2\. Wrap our first statement in another set of parentheses with \*2 tucked inside:

```python
>>>( ( 13 + 5 ) * 2)
```

Now we need to subtract 4\. Wrap that in yet another set of parentheses containing the expression ‘-4’:

```python
>>>( ( ( 13 + 5 ) * 2 ) - 4 )
```

Our last set of parentheses needs to divide the current result by 2.

```python
>>>( ( ( ( 13 + 5 ) * 2 ) - 4 ) / 2)
```

Finally, we subtract our original number. It’s not necessary to wrap it in parentheses because it will be the last operation executed:

```python
>>>( ( ( ( 13 + 5 ) * 2 ) - 4 ) / 2) - 13
```

Hit return.

Abracadabra!

What did I tell you? Three. It’s a magic number. For our next trick, [variable assignment!](https://thehelloworldprogram.com/python/python-variable-assignment-statements-rules-conventions-naming/ "Python Variable Assignment Statements and Naming Rules & Conventions")
