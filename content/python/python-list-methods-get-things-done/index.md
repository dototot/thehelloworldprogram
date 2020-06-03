---
title: "Python List Operations: Python List Methods Get Things Done"
category: Python
video:
image: hello_world_byting_python_05.3_list_methods.jpg
lesson: 13
---

Life is full of amazing opportunities. You can explore forests, climb mountains, run with wolves. Or you could learn Python. What do you do when you’re overwhelmed with choices? Creating a Python list and using Python list methods will help you prioritize your goals and achieve success.

## Getting Things Done with Python List Methods

I wrote a to-do list.

- Things to do today

- Go to the store
- Play
- Sing a tune or song
- Eat
- Draw
- Drink
- Get dizzy
- Sit down

Lists are so useful. I have so much to do today! Let’s put my to-do list in a Python list:

```python
>>> todo = ['Go to the store', 'Play', 'Sing a tune or song', 'Eat', 'Draw', 'Drink', 'Get dizzy', 'Sit down']
>>> todo
['Go to the store', 'Play', 'Sing a tune or song', 'Eat', 'Draw', 'Drink', 'Get dizzy', 'Sit down']
```

What’s on your to-do list?

## append()

If I want to add an item to my list, I use the append() method, like this:

```python
>>> todo.append(“Save the world!”)
>>> todo
['Go to the store', 'Play', 'Sing a tune or song', 'Eat', 'Draw', 'Drink', 'Get dizzy', 'Sit down', ‘Save the world!’]
```

## extend()

If I didn’t finish my to-do list from yesterday, I can add it to today’s list:

```python
>>> yesterday = [‘Nap’, ‘Learn Python’, ‘Read “Don Quixote” ‘]
>>> todo.extend(yesterday)
>>> todo
['Go to the store', 'Play', 'Sing a tune or song', 'Eat', 'Draw', 'Drink', 'Get dizzy', 'Sit down', 'Save the world!', 'Nap', 'Learn Python', ‘Read “Don Quixote”’]
```

## remove()

When it’s time to get realistic about our goals, we can remove items using the remove() method.

```python
>>>todo.remove(‘Read “Don Quixote”’)
```

## pop()

When a list item needs extra attention, make it pop! The pop() method removes and returns an item by index.

```python
>>>todo.pop(0)
‘Go to the store’
```

The pop() method is useful when you want to remove an item from a list and perform another action on it, like moving it to a different list.

```python
>>>done = todo.pop(0)
>>>done
>>>’Play’
```

If ‘Learn Python’ is still on your list, see you in [the next chapter introducing Python functions](https://thehelloworldprogram.com/python/python-functions/).
