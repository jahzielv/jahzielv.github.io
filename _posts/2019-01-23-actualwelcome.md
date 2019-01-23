---
layout: post
title: Actual Welcome (GH Pages mini tutorial)
---

# Hello MTV - Welcome To My Crib

Hi there! Good to see you! Like the new place? Me too! I'm really excited to share this most recent project with you all.

## Use the Platform

The idea of actually writing my own personal site had been floating around in my head ever since last semester when I discovered the joys of web dev, but had never really been a serious thought until recently. I realized that the work I'd been doing had mostly been stuff with frameworks; those ubiquitous layers of abstraction that make it easier to get things done - or at least create even _higher_ levels of abstraction for building apps on the web. It dawned on me, however, that really those frameworks aren't really doing anything magical. They're using HTML, CSS, and JavaScript, just like websites have for almost all of the history of the web. So I decided that I would try to create something without any frameworks like React, just with the basic building blocks of the web. And what better thing to make than that website I'd thought of but never built! While using hosted, prebuilt solutions like WordPress (what I'd used until now) is still my suggestion to most people that want to build a website, I wanted to get the experience with working directly with the guts of the web. There's so much about these basic tools that I don't know about, and while I'm very grateful to the library and framework people for making it easier to build cool stuff fast, I think that as with all layers of abstraction, you lose a connection to the underlying systems when you only use frameworks.

## The Deets

The new jahz.co is built with just HTML, CSS, and <a href="http://vanilla-js.com/"><img src="http://vanilla-js.com/assets/button.png"/></a> - kinda. I started off with a barebones site with just bare Web building blocks, and it looked pretty good! I was able to do the fading in and out animation with just CSS, implement a dark/light mode toggle with JavaScript, and generally get the look and feel I wanted from the new site. I ran into a wall, however, when I got to the blog.

Blogging on WordPress is, of course, super easy. The editor is sleek and full of features, and publishing only takes one click. I knew that the downside to going to a fully custom site would be losing the ease of blogging with WP, but I was willing to take the risk. I decided that I wanted to use Markdown to write my posts. I soon realized that I'd have to write a significant amount of code (or at least more than I wanted to write) in order to build a server that would convert the Markdown to HTML and inject it into some standard blog post template. I really didn't want to go down this path, since my goal was mainly to tinker with HTML and CSS and not to design yet another web server/CMS. After digging for a solution, I found GitHub pages! I'd known about GH pages for while, but I didn't realize how easy it was to actually deploy a site. The biggest feature that drew me to GH Pages, however, was that it allowed me to have the exact blogging workflow I wanted! I could write posts in Markdown in VS Code, push my changes to the site's repo, and see the new post immediately! When I discovered these features, I immediately created a new repo to host my site. Let's take a look at how to actually set up the site, using the HTML, CSS, and JS that you've already written.

## Setting up GitHub Pages - without lots of Jekyll stuff

GitHub Pages is powered by [Jekyll](https://jekyllrb.com/), a very popular static site generator that makes it easy to create cool-looking sites with Markdown, HTML, CSS, and Liquid. My biggest worry when I started trying GH Pages out was that I'd have to convert a lot of my site over to using Jekyll, especially regarding the styling. Jekyll's themes that you can easily install are really handy for most people, but I didn't want to lose the work I'd put into making my site look the way I wanted. I wanted a way to use Jekyll to serve my content, without having to add a lot of extra configuration or be tied into a prepackaged theme. After a lot of poking around, I came across [Tom Preston-Werner site](https://github.com/mojombo/mojombo.github.io), which seemed to be an exact template for what I wanted - custom CSS, with the flexibilty of Jekyll powering the blog. I used the directory structure that he had and started putting the site together.

### GitHub Pages - with minimal Jekyll
The first step to creating your own GH Pages site is to create a new repo on GH called `your-username.github.io`. Once you've done that, add your existing code to the repo.

To make changes to the site, just do stuff in your favorite editor and push your changes to the repo's master branch - your changes will be added to the site almost immediately. To turn your site into a full-fledged Jekyll site, there's some boilerpate to add to your repo. You need a `_layouts` folder, a `_posts` folder, a `Gemfile`, and a `CNAME` file (only if you want to add a custom domain name). Let's look at each one of these components.

#### `/_layouts`

The `_layouts` folder will hold the template HTML pages for Jekyll to use. Using Liquid, you can dynamically add content from other HTML files into a template file. I have two templates, one for general use and one for blog posts. Once you have the templates defined, you can create HTML files in your root directory that just contain your content, and let Jekyll know that this content is meant to be placed into a template. For instance,
``` html
<!-- /_layouts/myTemplate.html -->
<!DOCTYPE html>
<html>
    <head>
        <title>{% raw %}{{ page.title }} {% endraw %}</title>
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

Lines 1-4 are the important part. This chunk of text is what Jekyll calls "Front Matter", and is basically just some YAML text that tells Jekyll what to do with this file. In this case, we're setting the `layout` member to the name of our template, and the `title` member to our page's title. So now when Jekyll serves `myusername.github.io/my-page.html`, it will take the content from `/my-page.html` and insert it into the template where you see the `{{content}}` Liquid object. Additionally, it will set `myusername.github.io/my-page.html`'s title to the title you specify in the front matter, using the `{{page.title}}` Liquid object. Being able to specify content in your templates lets you write a lot of code only once and reuse it - for instance, I have my header and footer set in my templates, so that I don't have to re-write that code for each page I create.

#### `/_posts`

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
                <a href=" {% raw %} {{ post.url }}">{% raw %} {{ post.title }}{% endraw %}</a>
            </p>
        </li>
        {% raw %} {% endfor %}{% endraw %}
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

#### `Gemfile`

The `Gemfile` is required to use Jekyll fully, mostly because Jekyll is built on Ruby and needs lots of Ruby gems to run correctly. If you were developing a normal Jekyll site, you'd need to install Ruby and all the stuff in the `Gemfile`, but since we just want it to run on GH Pages, we can just add a `Gemfile` and forget it. Thankfully, GitHub has collected all the required gems into one concise location, so our `Gemfile` is pretty small:

``` ruby
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

#### `CNAME`

Finally, the `CNAME` file. This is only required if you're adding a custom domain name, so if you're sticking with the default `username.github.io` domain, you can skip this part. This file is pretty underwhelming: all you need is a line with the custom domain you want to use. That's it. This is my `CNAME`:

``` text
jahz.co
```

Mindblowing stuff, I know :P

Once you've added your CNAME file, there's more steps to take on GitHub, plus stuff that depends on where you got your domain name; you can learn more [here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

And that's pretty much it! If I remember any other problems I had with setting GH Pages up, or run into any in the future, I'll update this post or make a new one. Happy blogging!

### Cheers, Jahz.