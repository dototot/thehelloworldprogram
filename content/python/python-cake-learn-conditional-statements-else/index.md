---
title: "If Python, Then Cake! Learn Conditional Statements or Else"
category: Python
video:
image: 20150714_python_7.2_if_else.png
lesson: 18
---

When I was a young whippersnapper, I didn’t get dessert unless I finished my dinner. Dinner always consisted of healthy stuff like spinach so it was very hard to finish. That was my introduction to **conditional statements**. Conditional statements are like saying, “If this, then that.” _If_ I ate dinner, _then_ I got dessert. In my example, eating dinner is the _boolean condition_ and getting dessert is the _consequent._ if Python, then code?

## If Python, then Cake!

We can write my example above in Python:

```python
>>> dinner = True
>>> if dinner == True:
…    print('Cake!')
…
Cake!
```

Sweet! I ate dinner so I get dessert. Unless the cake is a lie…

We don’t have to explicitly evaluate True or False in our condition statement. Python will interpret the value of our variable and proceed accordingly. I can rewrite the above example like this:

```python
>>> if dinner:
…    print('Cake!')
```

Because the variable dinner was assigned True, I get cake.

**else**

Let’s write the function, dessert(), this time with what is called an _alternative._

```python
>>> def dessert(cake):
…    if cake == False:
...        print('The cake is a lie!')
…    else:
...        print('Om nom nom.')
…
```

Piece of cake, right? It gets better. Let’s combine Boolean logic operators with our variables.

```python
>>> dinner = False
>>> if not dinner:
…    print('How can you have any pudding, if you don’t eat your meat?')
```

If you recall, <span class="lang:python decode:true crayon-inline ">if not dinner</span>  is the same as “if dinner is False”.

```python
>>> dinner = True
>>> cake = True
>>> if dinner and cake:
…    print('So full!')
```

You can only get ‘So full!’ if both dinner and cake are True.

```python
>>> dinner = False
>>> cake = True
>>>if dinner or cake:
    print('Yay! I choose cake!')
```

If you want to test a condition, use an _if_ statement. If you learned nothing, start again. Else, [proceed to the next tutorial: multiple conditions](https://thehelloworldprogram.com/python/python-elif-snakes-else-ladders/).
