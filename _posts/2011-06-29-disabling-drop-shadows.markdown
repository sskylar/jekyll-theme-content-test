---
title: How to disable drop shadows in OS X screenshots
date: 2011-06-29 12:00:00 -04:00
tags:
- Hacks
---

In putting together our new website, we started to collect screenshots of some of the work we’ve created over the years. Thankfully, Apple makes it pretty easy to capture a single window in OS X. I’m talking about the ol’ command+shift+4, spacebar, click.

After years of taking screenshots this way, the bizarre keyboard shortcut combo doesn’t even phase me.

However, I’ve always been annoyed by the fact that OS X adds a drop shadow around the screenshot. It can _sometimes_ be useful, but for the most part it just gets in the way. It also creates awkward spacing around the image, and adds to the file size. In other words, good for nuthin’.

A typical screenshot may look something like this:

![Screenshot of http://dropmark.in (with drop shadow)](/uploads/drop.png "Screenshot of http://dropmark.in (with drop shadow)") 

Screenshot of http://dropmark.in (with drop shadow)
{: .caption}



> Put a drop shadow on it.

— Steve Jobs [^1]

[^1]: We cannot confirm Steve Jobs actually said this.

[Paparazzi](http://derailer.org/paparazzi/) is a great alternative for taking full-length website screenshots, but sometimes you want to include the browser chrome (or take a screenshot of something else).

After a recent attempt to Photoshop out a drop shadow, I thought there _had_ to be a better way. And there is.

Drop shadows, can be disabled in Mac OS X’s screen captures using a sneaky Terminal command:

```
defaults write com.apple.screencapture disable-shadow -bool true
```

Once applied, restart your computer’s UI server for the change to take effect:

```
killall SystemUIServer
```

That’s all there is to it. You should now get something like this:

![Screenshot of http://dropmark.in (without drop shadow)](/uploads/no-drop.png "Screenshot of http://dropmark.in (without drop shadow)")

Screenshot of http://dropmark.in (without drop shadow)
{: .caption}

Want your drop shadows back? Repeat the same steps, this time using **false** instead of true:

```
defaults write com.apple.screencapture disable-shadow -bool false
killall SystemUIServer
```

Thanks to [Macgasm](http://www.macgasm.net/2011/05/23/disable-dropshadow-mac-os-window-screenshots/) for the tip.

