---
layout: post
title: Actual Welcome (GH Pages mini tutorial)
---

# Hello MTV - Welcome To My Crib 😎

Hi there! Good to see you! Like the new place? Me too! I'm really excited to share this most recent project with you all.

## Use the Platform

The idea of actually writing my own personal site had been floating around in my head ever since I started school, but had never really been a serious thought until recently. I realized that the work I'd been doing had mostly been stuff with frameworks; those ubiquitous layers of abstraction that make it easier to get things done (or at least confuse the _heck_ out of everyone using it 😝). It dawned on me, however, that those frameworks aren't really doing anything magical. At the core, they're using HTML, CSS, and JavaScript, just like websites have for almost all of the history of the web. So I decided that I would try to create something with just the basic building blocks of the web - no frameworks. And what better thing to make than that website I'd thought of but never built! While using hosted, prebuilt solutions like WordPress (what I'd used until now) is still my suggestion to most people that want to build a website, I wanted to get the experience with working directly with the guts of the web. There's so much about these fundamentals that I don't know, and while I'm very grateful for frameworks that make it easier to build cool stuff fast, I wanted to look behind the layers of abstraction and see what can be done with just the platform.

## The Deets

The new jahz.co is built with just HTML, CSS, and <a href="http://vanilla-js.com/"><img src="http://vanilla-js.com/assets/button.png"/></a> - kinda. I started off writing a barebones site and adding some CSS and JS, and was suprised at what I could get done without special tools. I was able to do the fading in and out animation on my name and home page text with just CSS, implement a dark/light mode toggle with JavaScript, and generally get the simple look and feel I wanted from the new site. I ran into a wall, however, when I started thinking about how to implement a blog with just my bare hands.

Blogging on WordPress is, of course, super easy. I knew that the downside to going to a fully custom site would be losing the ease of blogging with WP, but I was willing to take the risk. I decided that I wanted to use Markdown to write my posts. I soon realized that I'd have to write a significant amount of code (or at least more than I wanted to write) in order to build a server that would convert the Markdown to HTML and inject it into some standard blog post template, as well as dynamically add links to posts to a blog landing page. I really didn't want to go down this path, since my goal was mainly to tinker with HTML and CSS and not to design yet another web server/CMS. Enter GitHub Pages! I'd known about GH pages for while, but I didn't realize how easy it was to actually deploy a site. The biggest feature that drew me to GH Pages, however, was that it allowed me to have the exact blogging workflow I'd been looking for: I could write posts in Markdown, push my changes to the site's repo, and see the new post immediately! When I discovered these features, I immediately created a new repo to host my site. Let's take a look at how I actually set up the site, using the HTML, CSS, and JS that I'd already written.

## Setting up GitHub Pages - without lots of Jekyll stuff

GitHub Pages is powered by [Jekyll](https://jekyllrb.com/), a very popular static site generator that makes it easy to create cool-looking sites with Markdown, HTML, CSS, and Liquid. My biggest worry when I started trying GH Pages out was that I'd have to convert a lot of my site over to using Jekyll, especially regarding the styling. Jekyll's themes that you can easily install are really handy for most people, but I didn't want to lose the work I'd put into making my site look the way I wanted. I wanted a way to use Jekyll to serve my content, without having to add a lot of extra configuration or be tied into a prepackaged theme. After a lot of poking around, I came across [Tom Preston-Werner's site](https://github.com/mojombo/mojombo.github.io), which seemed to be an exact template for what I wanted - custom CSS, with the flexibilty of Jekyll powering the blog. Using his repo as a starting point, I began to put the site together. Read on for some pointers on how to do this yourself!

---

The first step to creating your own GH Pages site is to create a new repo on GH called `your-username-here.github.io`. Make sure that the naming is correct, or else GitHub won't know to deploy the code in that repo as your GH Pages site. Once you've done that, add your existing code to the repo.

To make changes to the site, just do stuff in your favorite editor and push your changes to the repo's master branch - your changes will be added to the site almost immediately. To turn your site into a full-fledged Jekyll site, there's some boilerpate to add to your repo. You need a `_layouts` folder, a `_posts` folder, a `Gemfile`, and a `CNAME` file (only if you want to add a custom domain name). Let's look at each one of these components.

### `/_layouts`

The `_layouts` folder will hold the template HTML pages for Jekyll to use. Using Liquid, you can dynamically add content from other HTML files into a template file. I have two templates, one for general use and one for blog posts. Once you have the templates defined, you can create HTML files in your root directory that just contain your content, and let Jekyll know that this content is meant to be placed into a template. For instance,
``` html
<!-- /_layouts/myTemplate.html -->
<!DOCTYPE html>
<html>
    <head>
        <title>{% raw %}{{ page.title }}{% endraw %}</title>
        <!-- my head stuff... -->
    </head>
    <body>
        <div id="content">
            {% raw %} {{content}} {% endraw %}
        </div>
    </body>
<html>    
```
could be your template. When you want to add content using this template, create a new HTML file in your root, like so:
``` html
<!-- /my-page.html -->
1   ---
2   layout: myTemplate
3   title: My Page
4   ---
5   <div>
5       <h1>This is my content!</h1>
6       <!-- more text, images, etc... -->
7   </div>
```

Lines 1-4 are the important part. This chunk of text is what Jekyll calls "Front Matter", and is basically just some YAML text that tells Jekyll what to do with this file. In this case, we're setting the `layout` member to the name of our template, and the `title` member to our page's title. So now when Jekyll serves `myusername.github.io/my-page.html`, it will take the content from `/my-page.html` and insert it into the template where you see the `{% raw %}{{content}}{% endraw %}` Liquid object. Additionally, it will set `myusername.github.io/my-page.html`'s title to the title you specify in the front matter, using the `{% raw %}{{page.title}}{% endraw %}` Liquid object. Being able to specify content in your templates lets you write a lot of code only once and reuse it - for instance, I have my header and footer set in my templates, so that I don't have to re-write that code for each page I create.

### `/_posts`

This flexibility is also how Jekyll manages blogging. To create the blog side of my site, I created a `/blog.html` page that looks like this:

``` html
---
layout: default
title: JVE - Blog
---
<div class="main-content" id="blog-list">
    <h1>Blog Posts</h1>
    <ul class="posts">
        {% raw %} {% for post in site.posts %}{% endraw %}
        <li>
            <p>
                {% raw %} {{ post.date | date_to_string }}{% endraw %} &raquo;
                <a href="{% raw %}{{ post.url }}{% endraw %}">{% raw %} {{ post.title }}{% endraw %}</a>
            </p>
        </li>
        {% raw %}{% endfor %}{% endraw %}
    </ul>
</div>
```

Using more Liquid objects and loops, this document iterates over all the documents in my `_posts` folder (make sure you call it that, since Jekyll is expecting that name), and creates a new `<li>` for each one, organizing by date. In my `_layouts` folder, I created a `post.html` file that contains the template for my blog posts. The best part - I can write posts in Markdown. Jekyll expects a certain format for blog post file names (`YYYY-mm-dd-mypost.md`). When you create a post in your `_posts` folder and add 
``` yaml
---
layout: <yourBlogPostLayoutName>
---
```
to the front matter, it will be converted to HTML and be available on the site, inserted into your blog post template, and rendered with your custom CSS. 

### `Gemfile`

The `Gemfile` is required to use Jekyll fully, mostly because Jekyll is built on Ruby and needs lots of Ruby gems to run correctly. If you were developing a normal Jekyll site, you'd need to install Ruby and all the stuff in the `Gemfile`, but since we just want it to run on GH Pages, we can just add a `Gemfile` and forget it. Thankfully, GitHub has collected all the required gems into one concise location, so our `Gemfile` is pretty small:

``` ruby
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

### `CNAME`

Finally, the `CNAME` file. This is only required if you're adding a custom domain name, so if you're sticking with the default `username.github.io` domain, you can skip this part. This file is pretty underwhelming: all you need is a line with the custom domain you want to use. That's it. This is my `CNAME`:

``` text
jahz.co
```

Mindblowing stuff, I know 🤓

Once you've added your CNAME file, there are some more steps to take on GitHub and with your DNS provider, but nothing too complicated. You can find details [here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

---

And that's pretty much it! If I remember any other problems I had with setting GH Pages up, or run into any in the future, I'll update this post or make a new one. Happy blogging!

### Cheers, Jahz.