---
title: Python while Loops? Green Light!
category: Python
video:
image: 20160205_py08.1_while_nightwatch.png
lesson: 20
---

Did you play Red Light/Green Light growing up? I did. I still play it, though it’s hard to find adults willing to join me. If you live outside the United States you probably played a version called Statues. But what does this have to do with Python while loops? Allow me to explain…

To play Red Light/Green Light, you and your friends gather in an open space. One of you decides to be _It_ and stands at one end of the space while the rest of you line up at the other end. _It_ then turns it’s back to the group, shouting ‘Green light!’ and the group rushes forward, the goal of which is to reach the other side of the open space or touch _It_. When _It_ turns back around and shouts ‘Red light!’, everyone must stop and if _It_ sees anyone moving, that person must go back to the beginning.

## Python while Loops

That’s also how while loops work in programming. This is what a Python while loop looks:

```python
>>> while light == ‘green’:
…    go()
…
```

We can think of while loops like repeating if statements:

```python
>>> if light == ‘green’:
…    go()
>>> if light == ‘green’:
…    go()
>>> if light == ‘green’:
…    go()
```

You get the idea…

While loops are useful when we want to maintain a state until a certain condition is met or until some external event occurs, such as the light suddenly turning red. Then you best FREEZE!

## Python while Loops and Boolean Logic

If you love playing video games, like I do, and if you’re as bad at games as I am, then you probably see this all the time:

<pre class="">Continue? 10, 9, 8, 7, 6...
```

This very simple countdown is a while loop. You can write it like this:

```python
count = 10
while count > 0:
    print(“Continue? ”, count)
    count-=1
```

What’s this <span class="lang:python decode:true crayon-inline ">count-=</span>  business? This is called the decrement operator. It’s most useful in a loop because each time we use it, it subtracts 1 from the value it is operating on. Create a new file, count.py, and run the following program:

```python
count = 10
while count > 0:
    print(“count before decrement: ”, count)
    count-=1
    print(“count after decrement:”, count)
    print(“count is still greater than zero, so… run the loop again!”)
```

When we begin the while loop, count is equal to 10\. We then subtract 1, which leaves us with 9\. But 9 is still greater than zero, so we take it from the top and run the loop again and again until count is equal to zero.

We can also add to our value in a loop with the increment operator. All we need to do is make a few simple changes to the example above:

```python
count = 0
while count < 10:
    print(“count before increment: ”, count)
    count+=1
    print(“count after increment:”, count)
    print(“count is still less than ten, so… run the loop again!”)
```

Python while loops are a simple means to introduce complexity into your programs. If you choose to Continue, [join us in the next tutorial where we build upon the count example and write an interactive program](https://thehelloworldprogram.com/python/python-loop-control/).
```
