---
layout: post
title: Weekly Update
comments: true
---

# Weekly Update: Fancy Resumes

In the words of Gandalf,

> A wizard is never late. Nor is he early; he arrives precisely when he means to.

So don't @ me.

## Fancy Resumes 📄

I'd been wanting to create an HTML resume for a couple of weeks now, mainly so that I could add a permalink to it and have it live at [jahz.co/resume](https://jahz.co/resume) (you can't add permalinks to PDFs on GitHub Pages). I like my URLs to to be neat, so I started looking around for a good tool to help me create an HTML resume. Turns out, there's been an (not so successful, unfourunately) effort to create a standard for developer resumes called [JSONResume](https://jsonresume.org/). It's exactly what I was looking for - a way to programatically create a resume from a single source of truth. People have written tools that use this standard as well, so I was able to get right into transferring content from my old PDF resume to JSONResume. You can find the template that I followed [here](https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json), or use [my own resume](https://raw.githubusercontent.com/jahzielv/jve-resume/master/jve-resume.json) as a template.

Once I had moved all of my content over to the JSON file, I had to find a resume building tool. I went with a tool called [`hackmyresume`](https://www.npmjs.com/package/hackmyresume), which seems to be the most popular one. Once you've installed that, you can start [looking around for themes for your resume](https://www.npmjs.com/search?q=jsonresume-theme). When you've picked a theme (I went with [`stackoverflow2`](https://www.npmjs.com/package/jsonresume-theme-stackoverflow2)), you can generate your resume!

```bash
hackmyresume build resume.json TO out/resume.all -t node_modules/jsonresume-theme-<yourResumeTheme>
```

should dump the output files into a new directory called `out`; `hackmyresume` currently handles output to HTML, Markdown, LaTeX, MS Word, PDF, plain text, JSON, and YAML. If you open up your HTML doc in a browser, you should see something like this:

<img src="/assets/resumepic.png" alt="Screenshot of Jahz's resume">

Go out and try it yourself!

Cheers,

### Jahz
