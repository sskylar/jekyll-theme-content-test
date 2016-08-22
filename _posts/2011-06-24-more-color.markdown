---
title: Newswordy just got more colorful
date: 2011-06-24 00:00:00 -04:00
tags:
- Products
- Experiments
- Design
description: <a href="http://newswordy.com" target="_blank" class="products">Newswordy:</a>
  Now with 110% more color.
---

If you follow [Newswordy](http://newswordy.com) on Twitter, you might’ve noticed something different today (and if you’re not following Newswordy on Twitter, [you should](http://twitter.com/newswordy)).

Newswordy is a collection of news media buzzwords, built by Oak and curated by [Josh Smith](http://joshsmithdesign.com). Each day, a new word is posted along with a definition, a quote of its use (or misuse) in the media, and a news and Twitter feed on the subject. If that’s not already enough to win you over, the site algorithmically generates a unique background color for each word, based on the characters in the word itself.

[Expatriate](http://newswordy.com/words/expatriate/) is blue, [Hacktivist](http://newswordy.com/words/hacktivist/) is orange, [Grifter](http://newswordy.com/words/grifter/) is yellow, and so on. Each day, a colorful surprise awaits.

We love the variety colors so much, it felt a bit dull when we had to settle on [yellow](http://newswordy.com/assets/img/logo.png) for the site’s favicon. Well, not anymore. With a little help from [GD](http://en.wikipedia.org/wiki/GD_Graphics_Library), we made it possible for the favicon to automatically assume the word of the day’s color. Call it a chameleon favicon (chamelecon?) if you will.

Here we are in a cool shade of _expatriate_, favicon to match:

![Expatriate: word of the day with matching favicon](/uploads/favicon.png "Expatriate: word of the day with matching favicon") 

Expatriate: word of the day with matching favicon
{: .caption}


![A Newswordy rainbow in Chrome tabs](/uploads/favicons.png "A Newswordy rainbow in Chrome tabs")

A Newswordy rainbow in Chrome tabs
{: .caption}

The colorful icons also carry over to your favorite Apple touch device. Add Newswordy.com to your [home screen](http://www.apple.com/iphone/features/home-screen.html#row2) and the color will update everyday when you launch the app:

![Colorful Newswordy icons on an iPhone (multiple iOS icons shown for illustrative purposes)](/uploads/iphone.png)

Colorful Newswordy icons on an iPhone (multiple iOS icons shown for illustrative purposes)
{: .caption}

And finally, for the trifecta, we also automatically push the color of the day to the [@Newswordy](http://twitter.com/newswordy) Twitter profile (today’s color is lovely shade of _certitude_).

![@Newswordy on Twitter in a lovely shade of certitude](/uploads/twitter-orange.png "@Newswordy on Twitter in a lovely shade of certitude")

@Newswordy on Twitter in a lovely shade of certitude
{: .caption}

![@Newswordy on Twitter in a cool shade of expatriate](/uploads/twitter-blue.png "@Newswordy on Twitter in a cool shade of Expatriate")

@Newswordy on Twitter in a cool shade of expatriate
{: .caption}

This is made possible thanks to the Twitter API, which we are using to update the [profile image](http://dev.twitter.com/doc/post/account/update_profile_image), [background color](http://dev.twitter.com/doc/post/account/update_profile_colors), and sidebar colors. Lucky for us, it seems Twitter is much happier when changing profile images through the API vs. the website (which seems to be broken at least 50% of the time).

Since the profile image now correlates with the word of the day, it’s easy spot and recognize in your Twitter feed:

![A Newswordy tweet, with corresponding colors](/uploads/tweet.png "A Newswordy tweet, with corresponding colors")

A Newswordy tweet, with corresponding colors
{: .caption}

This is our way of injecting a little bit of color into your day. We hope you enjoy it with [_certitude_](http://newswordy.com/words/certitude/).

_In an upcoming post, we’ll talk more about the algorithmic process we use to convert words into colors. Subscribe to our [RSS feed](http://oak.is/rss) for updates._
