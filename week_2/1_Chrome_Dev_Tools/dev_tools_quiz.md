#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    - The sources tab is used to edit the HTML and CSS, however this is only temporary.  If the page is refreshed the original html/css will return.
  * Javascript Debugging
    - Javascript would be debugged in the sources tab as well.  It would allow you to make changes to the code. 
  * Performance Optimization 
    performance optimization could be done through the pagespeed tab which would give you a score on how optimized your site is at the moment.  It gives you a list of ways to improve performance such as condensing code or files.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  - The quick key for Dev tools insptector is Ctrl + shift + J.

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  http://goo.gl/5S9pA5

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  - I am not completely sure but it seems to be because the color of the text is inherited from the HTMl file, which measn changing the CSS file will not effect the color of the text.
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
    - The largest image on the website is the center picture of times square which is 316KB.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    -http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png is the URL.  I found it by going 
    to the network tab and filtering everything but the images out then ordered them by size.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  - There are two files with identical content that are served from different URLs.  by eliminating this duplication we would save 797B.












