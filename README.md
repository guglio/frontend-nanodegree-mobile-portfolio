## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

For this part of the project, I compiled the css with the help of compass, to minify the styles.
To avoid block rendering of the page, I inlined part of the css, minified. I placed, at the bottom of the page, the loading line for css and JavaScript.
I also resized some images that had fixed dimension, to reduce the loading time.

####Part 2: Optimize Frames per Second in pizza.html

For the last part of the challenge, I removed the duplicate calls to `document.getElementById` and `document.getElementsByClassName` to reduce the loading time required to process the page.
I added a worker how job is specifically to create the menu.
To reduce the amount of time the page need to render the sliding pizzas, I
calculate the total of pizzas needed to fill the page, and removed from `document.addEventListener('DOMContentLoaded', function()...` the code and inserted into a function, that I call also when the page is resized.
