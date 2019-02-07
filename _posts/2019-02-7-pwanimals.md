---
layout: post
title: PWAnimals - a PWA introduction!
---

# PWAnimals - a PWA introduction!

Hello there! I've listened to many a podcast and read many an article about PWAs (Progressive Web Apps) and Service Worker recently, so this past Thursday I decided to challenge myself: learn about and build a simple, barebones PWA in one day. To my shock, it actually wasn't all that difficult! I started Thursday with an idea and ended it with a functioning PWA that I could install on my computer or phone, was fast and responsive, and served content even while offline. Read on for a description of what I did, as well as tips and tricks that I learned while building it.

## What does it do?

First off, if you haven't checked the app out, head to [pwanimals.glitch.me](https://pwanimals.glitch.me) to see it in action! As you can see, it's super simple: it displays a random picture of an animal, and reloads a fresh animal pic when you press the button. If you're offline, the app's UI still loads, but the button is disabled and the app informs you that you're offline. Additionally, when you click the button 7 times, you're prompted to install the application on your phone or computer. Pretty basic stuff, but a solid place to start with learning the mechanisms behind a PWA.

## How to build it?

Glad you asked! Let's take a look at the fundamental parts of a PWA, and then dive into how I implemented them in PWAnimals. This brief intro to PWAs will cover the basics on how to get a PWA up and running, with code from PWAnimals as an example. I encourage you to think of your own simple application to turn into a PWA and follow along!

### The PWA Checklist

Actually... before we get into the checklist, let's quickly go over what a PWA is. A Progressive Web App can be thought of as an enhanced web application. We've had web applications for a while - they let us do things like listen to music, watch videos, or check our bank accounts. Over the years, the Web platform has grown and added a plethora of features aimed at making web apps faster increasing their functionality. Traditional web apps are great, but the problem comes when you take the client's Internet connection away. Without a live connection to the network, most web apps fail and leave users staring at the Dinosaur of Death:

![the Chrome offline dinosaur](https://fossbytes.com/wp-content/uploads/2017/08/t-rex-dinosaur-game-offline-chrome-1.jpg)

As any Web user can tell you, this isn't a great app experience. PWAs change all of this by harnessing a technology known as [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker). Service Workers allow you to intercept requests made by the browser and respond with data that you choose, essentially acting as a proxy between the app and the network. Service Workers are a type of [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), a more general class of JavaScript objects in the browser that let you do various types of work off of the main thread of execution. When you use a Service Worker in conjunction with the browser's cache, you can write an application that still serves content to the user, even when it's offline. Using those two technologies, you can cache the resources (HTML, CSS, JavaScript, images, etc.) you need to run your app when the user first visits your site, and then respond to requests made by the browser for those resources with the cache contents by intercepting the requests with a Service Worker. A PWA doesn't just need to work offline, however; it also needs to be ready to install on the user's device, particularly on mobile. This is one of the core advantages of PWA technology. As the browser has become more and more powerful, the Web has brought us closer than ever to the coveted goal of Write Once, Run Anywhere. A PWA will allow the user to "install" the application on their device, giving a native feel to an application that was developed for the Web. PWAs run in a special browser window, which runs and renders the application while maintaining the native feel.

The Chrome team at Google has led the charge for widespread adoption of PWAs, and [created a checklist](https://developers.google.com/web/progressive-web-apps/checklist) that tells developers if their app is a PWA. Here are some of the key points:

-   [ ] Registers a Service Worker (app responds with a 200 when offline)
-   [ ] Has a correct manifest
-   [ ] Prompts user to install application
-   [ ] Is responsive (correct content sizing for different size screens, has a `<meta name=viewport>` tag with `width` or `initial-scale`)
-   [ ] Uses HTTPS

If your app can check these boxes, it's most likely a PWA! Now that we've gone over the theory, let's get into the practice. I'm going to be focusing specifically on the first 3 points, since the the other 2 aren't specific to PWAs.

### First things first - a website

To get started with building a PWA, you don't need anything more fancy than a plain old website/web app. My app had one `index.html`, one `index.js`, and one `style.css` to start with. Go ahead and create those files in your directory, and fill them with whatever simple web app you want. I'd recommend you doing some AJAX in your simple app, since most real world applications involve moving data around via the Internet. In PWAnimal's case, I'm making a call to a [handy photo API](https://placeimg.com/) that serves a random animal picture. Once you have a basic AJAX web app, we can start to turn it into a PWA by going down the checklist. First up, making a Service Worker.

#### Registering a Service Worker

##### For more detail than what I've gone into thus far about Service Workers, check out [this cool article](https://developers.google.com/web/fundamentals/primers/service-workers/) from Google Web Fundamentals.

Let's get started with Service Worker! Create a new JS file in your directory called `sw.js`. This file is going to contain our Service Worker code, and will be referenced in our `index.js`. Open up `sw.js` and add the following code:

```javascript
// sw.js
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});
```

Now that you've added that, open up `index.js` and add the following code at the top of the file:

```javascript
// index.js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));
}
// the rest of your page's code...
```

Now, you should see a "registered service worker!" when you navigate to index.html and open the console. Let's take a closer look at what we did. Our addition to `index.js` is pretty straightforward. We're simply checking to see if the browser supports Service Worker, and, if so, logging a confirmation after registering. The `.register()` method returns a `Promise`, so we can use the `.then()` syntax to run our log after the previous call resolves. Registering the Service Worker associates the new Service Worker with your site, and tells the Service Worker to get its instructions from your `sw.js` script. Once registered, the Service Worker runs when the page is loaded. Let's take a look at `sw.js` now and see what the Service Worker is doing.

```javascript
// sw.js
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});
```

Here, we're adding an event listener to the Service Worker, specifically for the `fetch` event, which represents a request made by the browser to the server via the network. Remember, the Service Worker is a network proxy that can intercept network requests and respond to them programmatically. We can hook into the Service Worker and have it run our code by listening to its related events. While the Service Worker has various events that it can listen to, arguably the most important one is the `fetch` event - in fact, Chrome will not allow your PWA to be installed unless there is a registered Service Worker with a `fetch` listener. The `addeventListener()` event takes two arguments, the event to be listened to, and a callback that takes an event object. After the SW is registered, it starts listening for `fetch` events, including requests for your websites HTML, CSS, JS, images, audio, and any external requests to APIs or other websites. In our small initial example, we simply log the URL associated with the request that's being sent, but now we'll add some real functionality.

---

In order for your app to continue to serve content even while offline, you have to use cached resources in combination with a Service Worker. The cache contains the web pages and content you want to present while offline, and the Service Worker takes care of actually serving those to the browser. The great part is that we won't have to change much about `sw.js` to add this functionality. The first thing we'll add is a global array, containing the URLs of all the assets you want to store in the cache. Mine looks something like this:

```javascript
/* 
  This is all the stuff that we want to save in the cache.
  In order for the app to work offline/be installable,
  we have to save not just images but our HTML, JS, and CSS
  as well - anything we want to use when offline.
*/
const ASSETS = [
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fmstile-150x150.png?1548953441255",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Ffavicon.ico?1548953452674",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fandroid-chrome-512x512.png?1548953480872",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fapple-touch-icon.png?1548953486326",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Ffavicon-16x16.png?1548953497211",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Ffavicon-32x32.png?1548953504546",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fandroid-chrome-192x192.png?1548953531069",
    "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Foffline.jpeg?1548977019123",
    "/style.css",
    "/index.html",
    "/offline.html",
    "/"
];
```

Everything that we want to use offline must be included in the assets array. In mine, the first 8 URLs are to Glitch's CDN, where the icons and favicons for the app are stored. The rest of the relative URLs are for various documents I want to cache, including one called `offline.html`. This file contains the content that I want to show when the app is offline. While you don't have to use a separate file, I found it easier to think about what was going on by using a different file from my `index.html`. Now that we have a list of the resources we want to cache, let's actually cache them. Add this block to the top of `sw.js`:

```javascript
// sw.js

let cache_name = "pwanimals"; // The string used to identify our cache

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});
```

Remember how the SW has several events it can listen for? We're going to add a listener for the "install" event, which is fired only once during the [SW's lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle). Since we want the app to work offline on subsequent visits, we want to cache our resources on install. The callback lets us know that the SW is being installed, then uses the [`waitUntil()`](https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil) method to let the browser know that we're doing work during the installation stage. This method call makes the browser wait until the work we decide to do resolves, and if it rejects, the installation is considered a failure. Within this call to `waitUntil()`, we actually do our caching, which is the work that the browser is waiting for. According to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Cache):

> "caches" is an attribute of the service worker's `WorkerGlobalScope`.

which lets us access the cache API. We open the cache indicated by our cache name, then we use the `addAll()` method to add our array of assets to the cache. Our resources are now cached and ready to be served by the Service Worker!

In order to actually serve the cached assets, we have to modify our "fetch" event handler. This is what it'll look like now:

```javascript
self.addEventListener("fetch", event => {
    if (event.request.url === "https://pwanimals.glitch.me/") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/offline.html"))
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});
```

As you can see, we're now using our cache to serve content to the user even when the app is offline. Our request response strategy is to first attempt to get the resource from the network, and respond with the cache if that `fetch` fails. This strategy can be seen in the `respondWith()` calls. We call `fetch(event.request)` to attempt to get the resource from the network - since `fetch` is `Promise` based, the `Promise` will reject if the network is unavailable, which will trigger the `catch()` statement. We place our call to the cache in the `catch()` call, which will return a `Promise` for the cached resource.

Since requests would be either for the main content of the app or for supporting resources, such as the styles and the favicon, I divided the types of calls I'd be responding to into 2 groups: the content from `index.html`, and everything else (CSS, images, etc.). First, if the request is for the app's home URL, which corresponds to the content contained in `index.html`. Since we have a separate page for use off the network, `offline.html`, we're going to respond to requests for `https://pwanimals.glitch.me/` (really a request for `https://pwanimals.glitch.me/index.html`) with `offline.html` by opening the cache and returning the cached file. To find resources in the cache, use the `.match()` method, which can be returned using `then(response => response)`. Your page should now be able to serve content even when offline!

### Adding a Manifest

Phew - that was a lot. Let's tackle a somewhat simpler part of a PWA: a `manifest.json` file. The manifest contains metadata used enable installation of the application on phones, and if the correct setting is enabled, on PCs. For your PWA to be able to be installed using Chrome, you must have the following fields in your `manifest.json` for the "Add to home screen" prompt to be shown to users:

-   [`short_name` or `name`](https://developers.google.com/web/fundamentals/web-app-manifest/#name): the name of the application. `name` is used on the install prompt, and `short_name` is used if provided for the app shortcut.
-   [`icons`](https://developers.google.com/web/fundamentals/web-app-manifest/#icons): an array with URLs to the icons that will be used for the app shortcuts. Must include a 192px and a 512px sized icon.
-   [`start_url`](https://developers.google.com/web/fundamentals/web-app-manifest/#start-url): the starting point in your code for the application. For our case, it's `/`, which is the root of our application (and serves `index.html`).
-   [`display`](https://developers.google.com/web/fundamentals/web-app-manifest/#display): the way the app is to be displayed on the device. Must be one of: [`fullscreen`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params), [`standalone`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params), or [`minimal-ui`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params).

This is PWAnimals' manifest:

```json
{
    "name": "PWAnimals",
    "short_name": "PWAnimals",
    "icons": [
        {
            "src": "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fandroid-chrome-192x192.png?1548953531069",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://cdn.glitch.com/a1587639-fd68-4bb7-a8ac-08ca51112bed%2Fandroid-chrome-512x512.png?1548953480872",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "start_url": "/",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

To read more details about the possible members of a manifest, [read on here](https://developer.mozilla.org/en-US/docs/Web/Manifest).

Everything in your manifest _must_ be correctly entered for the prompt to be shown to users. If there is any error at all in this file, the prompt won't appear. Sad debugging story: as I was writing this app, I spent upwards of an hour trying to find out why the app wasn't prompting for installation, only to find that I'd written `start-url` instead of `start_url`...

Don't be like me - make sure your manifest is written correctly.

### Installation

To wrap up our tour of the PWA, we're going to see how to prompt the user to install the application. If your app is [passing all the other criteria](https://developers.google.com/web/fundamentals/app-install-banners/), users will be prompted to install the app meeting an engagement heuristic, which is determined by the browser. Currently in Chrome, the prompt will be shown to users after they've spent 30 seconds on the site. We can, however, listen for the prompt event and prompt the user based on our own engagement heuristic and/or using a custom UI feature. I decided to prompt the user after they click the "Click for a new animal!" button 7 times, since in PWAnimals clicking the button is the only form of user interaction. Here's the code I added `index.js`:

```javascript
let defer;
let state = {
    animalBtnClicks: 0
};

// Check to see if we're in a browser that supports ServiceWorker. If so...
if ("serviceWorker" in navigator) {
    // Let's register our service worker!
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));

    // This stuff is new!
    window.addEventListener("beforeinstallprompt", event => {
        event.preventDefault(); // Supresses the installation prompt until we decide to use it.
        defer = event;
    });
}

/*
 * Our new animal picture button onclick.
 */
function animalLoad() {
    // The global state object contains the number of times the button's been clicked.
    state.animalBtnClicks++;
    if (state.animalBtnClicks === 7) {
        // ...Then we ask the user if they want to install the app!
        defer.prompt();
        defer.userChoice.then(choiceResult => {
            if (choiceResult.outcome === "accepted") {
                console.log("accepted a2hs!"); // Yay! 🎉
            } else {
                console.log("a2hs rejected :("); // Maybe next time ☺️
            }
            defer = null;
        });
    }
    // The rest of the onclick handler...
}
```

The new lines in the `if` statement are the basis for customizing the installation prompt process. The prompt is presented after the `beforeinstallprompt` event is fired, so we add a simple 2 line listener for that event. The first line, `event.preventDefault();`, makes sure that the prompt is not shown automatically when the page is loaded, which happens on Chrome 67 and earlier. Once the default action has been suppressed, we can stash the event in our `defer` variable that we declared above the `if` statement. This lets us hang onto the event and show the prompt when we choose.

In this example. I choose to show the prompt after the user has clicked the button 7 times - you can pick some other measure of user engagement that fits your application. In the button's `onclick`, I increment the `state.animalBtnClicks` variable, and, once it reaches 7, I show the prompt using the `.prompt()` method that our saved event has. After this, we do some basic logging based on the `.userChoice` member of the event, which lets us know if the prompt was accepted or rejected.

## PWAs - the way of the future

There you have it - your very own PWA! I tried to keep this tutorial very general and stick to the parts that are unique to PWAs so that you can try this out with your own idea, like I did. I find that creating my own app helps me learn the information more deeply, as opposed to following along and building someone else's app over again. I also skipped over the responsiveness and HTTPS requirements for PWAs, since those are more general good practice topics. Be warned, however, that Service Workers won't work without the site being served over HTTPS - even more incentive to [get your site secured today](https://letsencrypt.org/)!

After digging into PWAs and how useful they are, I've realized that application development is moving steadily towards the Web. As browsers become even more sophisticated than they already are, more and more applications are going to be moved over to or created natively on the Web. If you can have one single codebase that can reach users on _all_ devices, why wouldn't you? With the coming-of-age of technologies such as [WebAssembly](https://webassembly.org/), even computationally-intensive applications that traditionally required native code to run quickly are being brought over to the Web. Learning to write Web-native PWAs will put you and your application ahead of the curve in terms of usability and reach - get cracking on one today and join the movement!

### Cheers, Jahz.
