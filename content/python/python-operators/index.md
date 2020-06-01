---
title: Python Operators are Mathematical!
category: Python
video:
image: 20140609_python_bytes02.1.png
lesson: 4
---

Not only is math essential to programming, it’s also fascinating. Especially when you have a super-powerful calculator like Python to do the heavy-lifting for you. In this tutorial you will learn how to use Python operators to perform basic mathematical operations. You don’t have to be an Einstein to be a computer scientist (though it wouldn’t hurt). You only need to understand the basics. Then you can fake your math chops just like the rest of us. If you are just joining us, you may want to start at the beginning with our [Introduction to Python](https://thehelloworldprogram.com/python/now-something-completely-different/ "And Now For Something Completely Different… An Introduction to the Python Programming Language").

## Python operators, operands and operations

Imagine you are in an operating room at Rossum’s Universal Robot Hospital. Dr. Plus, Dr. Minus, Dr. Slash and Dr. Asterisk are working on a patient.

Our robot patient needs to maintain a certain voltage to continue running, currently 12 V. The Drs. operate.

Dr. Plus increases the voltage by 108.

```python
>>>12 + 108
120
```

Dr. Minus makes a minor adjustment:

```python
>>>120 - 10
110
```

Dr. Asterisk has determined that the robot is European and multiplies the voltage by a factor of 2:

```python
>>>110 * 2
220
```

At the last moment, Dr. Slash rushes in and saves the patient from circuit overload:

```python
>>>220 / 44
5.0
```

## Commercial Break: Floats, Integers & Division

Why did 220/44 return 5.0 rather than simply 5? Just to make your head explode, Python 3 has two division operators.  
A single slash, ‘/’, is true division. The other operator is called floor division and consists of two slashes, ‘//’. True division returns what is called in computer science a floating point. In Python we refer to these as floats. You can think of a float as a number with a decimal point bobbing about inside it. Or, because true division is a single slash, ‘/’, it is _lighter_ than floor division and therefore floats. It’s really useful when working with exponents. Floor division on the other hand, because it is composed of two slashes, is heavier, and bottoms out at the nearest integer. For example:

```python
>>> 5/2
2.5

>>> 5//2
2

>>> -5/2
-2.5

>>> -5//2
-3
```

What’s an integer? It’s any positive or negative whole number, including zero. You may find that you don’t want a float. You can fix that with the int() function.

```python
>>> int(2.5)
2

>>> int(-2.5)
-2
```

And you can convert integers to floats with the float() function.

```python
>>> float(5)
5.0
```

But we’re getting ahead of ourselves…

## We Now Return You to Rossum’s Universal Robot Hospital

With our patient near the end of its consumer life cycle, an expert is called in.

“Paging Dr. Powers, Dr. Powers…”

Dr. Powers saunters into the operating room and performs his specialty: exponentiation.

```python
>>> 5 ** 2
25
```

You can think of exponentiation as “times times”. In the above example, 5**2 is the same as 5 \* 5\. And 5**3 can be thought of as 5 _ 5 _ 5.

This metaphorical medical drama illustrates the basic mathematical constructs used in any programming language: operators, operands, and operations. An operator is a special symbol indicating a specific computation. An operand is a value on which an operator performs. And an operation is any statement in which one or more operands are operated upon by an operator.

Let’s dissect this on our operating table:

<table>

<tbody>

<tr>

<td>Operator</td>

<td>English</td>

<td>Operand</td>

<td>Operation</td>

<td>Result</td>

</tr>

<tr>

<td>+</td>

<td>Addition</td>

<td>12, 108</td>

<td>12 + 108</td>

<td>120</td>

</tr>

<tr>

<td>–</td>

<td>Subtraction</td>

<td>120, 10</td>

<td>120 -10</td>

<td>110</td>

</tr>

<tr>

<td>*</td>

<td>Multiplication</td>

<td>110, 2</td>

<td>110 * 2</td>

<td>220</td>

</tr>

<tr>

<td>/</td>

<td>Division</td>

<td>220, 44</td>

<td>220 / 44</td>

<td>5</td>

</tr>

<tr>

<td>**</td>

<td>Exponentiation</td>

<td>5, 2</td>

<td>5**2</td>

<td>25</td>

</tr>

</tbody>

</table>

I said above that math is fascinating. Let me prove it with this magic trick. I will transform any whole number into the number 3\. Follow along with your Python prompt.

Pick a number, any number, and enter it in your Python prompt. I’m going to pick lucky number 7.

```python
>>>7
```

Add 5 and hit Enter.

```python
>>>7 + 5
12
```

Multiply the result by 2.

```python
>>>12 * 2
24
```

Subtract 4.

```python
>>>24 - 4
20
```

Divide by 2.

```python
>>> 20 / 2
10
```

Subtract the original number.

```python
>>> 10 - 7
3
```

Mathematical! Or should I say, mathemagical? Use this magic link to learn our next trick: [operator precedence](https://thehelloworldprogram.com/python/python-operators-order-precedence/ "Python Operators: Order & Precedence").
