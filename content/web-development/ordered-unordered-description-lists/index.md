---
title: Top Three Stylish Lists for Your HTML
category: Web Development
video: https://youtu.be/LIIrTvB40iw
image: thumbnail1.jpg
lesson: 4
---

With the increasing popularity of short-form journalism, how can we talk about lists without mentioning listicles? While I enjoy a good top ten list as much as the next person, what I really find amazing are those catchy headlines. Do you want to know the secret to writing amazing listicle headlines? Phrasal template word games! Case in point: Top Ten Stylish _plural noun_ for your _noun_. We can pretty much stick any words we want into those blanks and have ourselves a killer headline. Off the top of my head I’ve come up with *Top Ten Stylish Monkeys for your Masquerade Ball*, _Top Ten Stylish Booties for your Cheetah_, and _Top Ten Stylish Cummerbunds for your Grandpa_. Can someone say link bait!

Now that I’ve shown you how easy it is to come up with listicle headlines, I’m sure your brain is overflowing with ideas. We’re going to need some way of organizing them. The HTML list elements are just the tools for the job. In the spirit of listicles, lets start with a top five list of listicle headline templates. Because we want these headlines to be numbered, we’ll use the ordered list element.

```html
<ol>
  <li>Top 10 Stylish [plural noun] for your [noun]</li>
  <li>The World’s Top 10 [adjective] Images of [plural noun] Wearing [noun]</li>
  <li>
    Five Reasons [plural noun] are Here to Stay, and Why That's [adjective]
  </li>
  <li>Ten Ridiculous [plural noun] Made for [noun] Maintenance</li>
  <li>Five [adjective] Myths Your [familial relationship] Told You</li>
</ol>
```

The `html|<ol>` tag will automatically place an incrementing number before each list item it contains. So the result of our HTML code would look like this:

<ol>
<li>Top 10 Stylish [plural noun] for your [noun]</li>
<li>The World’s Top 10 [adjective] Images of [plural noun] Wearing [noun]</li>
<li>Five Reasons [plural noun] are Here to Stay, and Why That’s [adjective]</li>
<li>Ten Ridiculous [plural noun] Made for [noun] Maintenance</li>
<li>Five [adjective] Myths Your [familial relationship] Told You.</li>
</ol>

If we wanted to list out the blanks in our headlines, we could nest another ordered list inside of each list item. We do want to do that, and here’s how:

```html
<ol>
  <li>
    Top 10 Stylish [plural noun] for your [noun]
    <ol>
      <li>plural noun</li>
      <li>noun</li>
    </ol>
  </li>
</ol>
```

<p>Nesting an ordered list inside of a list item will change the characters used to indicate the order of those list items. A second tier ordered list uses letters of the alphabet instead of numbers. So our above code would appear like this:</p>

<ol>
  <li>
    Top 10 Stylish [plural noun] for your [noun]
    <ol style="list-style-type: lower-alpha;"><li>plural noun</li>
      <li>noun</li>
    </ol>
  </li>
</ol>

Lets create a third tier for all of the words we want to stick in each blank. Because it doesn’t really matter what words we use, we can start listing out our ideas with an unordered list.

```html
<ol>
  <li>
    Top 10 Stylish [plural noun] for your [noun]
    <ol>
      <li>
        plural noun
        <ul>
          <li>monkeys</li>
          <li>booties</li>
          <li>cummerbunds</li>
        </ul>
      </li>
      <li>
        noun
        <ul>
          <li>masquerade ball</li>
          <li>cheetah</li>
          <li>grandpa</li>
        </ul>
      </li>
    </ol>
  </li>
</ol>
```

Unordered lists use bullets instead of numbers, because the order of their list items isn’t necessarily important. So a web browser will display our code like this:

<ol><li>Top 10 Stylish [plural noun] for your [noun]
<ol style="list-style-type: lower-alpha;"><li>plural noun
<ul><li>monkeys</li>
<li>booties</li>
<li>cummerbunds</li>
</ul></li>
<li>noun
<ul><li>masquerade ball</li>
<li>cheetah</li>
<li>grandpa</li>
</ul></li>
</ol></li>
</ol>

Nice, that is one organized listicle template! Using what we just learned about ordered and unordered lists, create an HTML page with ideas for all five headlines. If you are feeling inspired, you could even make a top five list of top five lists of listicle headlines. There’s no limit to the depth of nested HTML lists, so go nuts!

We used some unusual vocabulary in this tutorial, like “listicles” and “phrasal template word games”. I tried to discreetly explain these words with examples, but perhaps I should have been a little more explicit with my definitions. Lets build a little dictionary with the HTML description list so we can remember what they mean.

Despite its name, the description list is considerably different than unordered and ordered lists. Gone are the list item elements; instead we use description term and description definition elements.

```html
<dl>
  <dt>Listicle</dt>
  <dd>A short-form of writing that uses a list as its thematic structure.</dd>
</dl>
```

These tags are all block-level elements, so each term and definition display on their own line. The default behavior for description lists is to indent your definition, like so:

<dl><dt>Listicle</dt>
<dd>A short-form of writing that uses a list as its thematic structure.</dd>
</dl>

All definition elements are considered to belong to the preceding term element, so one term may have any number of definitions. We could include examples or alternate meanings for our term in these extra definition elements. You’ve probably played a phrasal word template game before called _Mad Libs_, so lets include that in our description list to clarify our term.

```html
<dl>
  <dt>Phrasal template word game</dt>
  <dd>
    A word game in which one player prompts another for a list of words to
    substitute for blanks in a story.
  </dd>
  <dd>Mad Libs.</dd>
  <dt>Listicle</dt>
  <dd>A short-form of writing that uses a list as its thematic structure.</dd>
</dl>
```

The output for our code looks like this:

<dl><dt>Phrasal template word game</dt>
<dd>A word game in which one player prompts another for a list of words to substitute for blanks in a story.</dd>
<dd>Mad Libs</dd>
<dt>Listicle</dt>
<dd>A short-form of writing that uses a list as its thematic structure.</dd>
</dl>

What other new words did you encounter today? Do you know what a cummerbund is? A masquerade ball? If not, add them to your description list and save it as your own personal vocabulary reference. In the next tutorial, we’ll learn how to create links to other pages and in page content with the anchor tag.
