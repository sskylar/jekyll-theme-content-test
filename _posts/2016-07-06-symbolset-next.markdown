---
title: What’s next for Symbolset
date: 2016-07-06 08:59:00 -04:00
tags:
- Announcement
hero: <img src="/uploads/symbolset-emoji.png">
featured: 
---

Symbols have played a vital part in human communication for around 40,000 years[^40k]. From early [cave paintings](https://en.wikipedia.org/wiki/Cave_painting), carved [hieroglyphs](https://en.wikipedia.org/wiki/Egyptian_hieroglyphs), and eventually to [modern pictograms](https://en.wikipedia.org/wiki/DOT_pictograms) as seen and recognized in every restroom and airport. 

Symbols break down language barriers, and allow us to communicate more efficiently.

![](/uploads/symbolset-dot.svg)

U.S. Department of Transportation pictograms, 1974
{: .caption}

[Symbolset](http://symbolset.com) is a platform for making symbols semantic and accessible, returning iconography to its roots as a communication device.

This is the story of why we built Symbolset at Oak, why icon fonts matter now more than ever, and what’s next for Symbolset as a product. 

<iframe src="https://player.vimeo.com/video/42300865" width="640" height="360" frameborder="0" webkitallowfullscreen mozalowfullscreen allowfullscreen></iframe>

Symbolset teaser, 2012
{: .caption}

* * *

It was 2011, and the state of stock icons for user interface design was pretty bleak. At Oak, choosing icons for a client project typically meant wasting hours sifting through folders of crudely drawn vector files, bringing these into Photoshop to apply snazzy emboss effects[^emboss], and exporting these as PNGs. If you are someone like our designer Mike Fortress, you also spend time cleaning up stray points in Illustrator and reconciling inconsistencies between icons.

This repetitive process had Mike thinking about designing his own set of icons. As he was already dabbling in typeface design, he aimed to create a well-crafted set of icons drawn with the sensibility and discipline of a cohesive typeface. In fact, why not make it a typeface? That's a thing, right?

## Icon fonts

Symbol fonts are not a new concept. They have been used throughout the history of the printing press, sold and used alongside type as ornaments, and commonly referred to as [dingbats](https://en.wikipedia.org/wiki/Dingbat).

For years our computers have shipped with common symbol fonts like [Zapf Dingbats](http://en.wikipedia.org/wiki/Zapf_Dingbats) (1978) which would eventually become [part](http://www.fileformat.info/info/unicode/block/dingbats/list.htm) of [Unicode](http://unicode.org/standard/WhatIsUnicode.html); [Wingdings](http://en.wikipedia.org/wiki/Wingdings) (1990); and [Webdings](http://en.wikipedia.org/wiki/Webdings) (1997) designed by, among others, [Vincent Connare](http://connare.com/) of Comic Sans fame.

2011 was a hot year for webfonts, Adobe had just acquired Typekit. We saw people experimenting with putting user interface icons into webfonts. Interesting things were happening, but something wasn’t quite right.

## Made with k in NYC

For years, [Vimeo.com](http://vimeo.com) used one of the more popular icon fonts in their footer with the message “Made with ❤️ in NYC”. However, since this particular font mapped icons to A-Z characters, it actually said “Made with **k** in NYC”. This is how Google and screen readers would have interpreted the icon, and it made us think. 

We could do better.

With Symbolset, we aimed to make icons meaningful, easy, and accessible for both humans _and_ computers.

Our approach is three-fold:

1. Semantically map icons to Unicode standards. A heart should map to [U+2764](http://www.fileformat.info/info/unicode/char/2764/index.htm), so a heart is a heart not a letter [k](http://www.fileformat.info/info/unicode/char/006b/index.htm).

2. Use OpenType ligature features to represent common terms in icon form while retaining screen reader accessibility (a heart can be read as “love” or “heart”). 

3. Include CSS and JavaScript implementations for use on the modern web.

Mapping our icons to standard Unicode values not only allowed us to be consistent across [all sets](https://symbolset.com/icons) we release, but be interoperable with other font vendors and platforms as well. Our dream was to allow designers to choose an icon font, use it in their layout, and easily swap between icon sets—just as you would with any text font. We’re still pretty happy with how that turned out.

## Now more than ever

Are icon fonts still relevant? While some party poopers have declared “[death to icon fonts](https://speakerdeck.com/ninjanails/death-to-icon-fonts)”, we think that's a load of 💩 and icon fonts are absolutely the future.

One only has to look to [emoji](http://blog.symbolset.com/making-ss-emoji) and its incredible rise to see why icon fonts are ubiquitous and here to stay. Exactly like Symbolsets, emoji are icon fonts mapped semantically to Unicode values. 

There are many emoji fonts, but [Apple Color Emoji](https://en.wikipedia.org/wiki/Apple_Color_Emoji) is probably the most well known. In a recent study, 92% of online consumers report using emoji[^stat]. That’s a lot of people using icon fonts every day. 

![](/uploads/symbolset-ios10.gif)

Apple's upcoming iOS 10 features emoji prediction, reminiscent of Symbolset's keyword functionality
{: .caption}

A ⭐ or 🍔 written in emoji can be shown in Symbolset just the same. Unlike image formats like PNG or SVG, computers understand exactly what ⭐ or 🍔 means. Fonts work on any device with a display, and are future-proof in a way image formats can’t be. For as long as we have text, we’ll have fonts.[^text]

With advancements in [multicolor fonts](http://blog.symbolset.com/multicolor-fonts), we’re pretty excited about what’s to come.

## So what’s next

There are so many things we haven’t accomplished with Symbolset yet. 

We released 15 icon sets from 2012 to 2015, but like traditional typefaces, we think there’s room for infinite more. We believe icon sets should be chosen to reflect your design, and even pair with your typographic choices. Luckily, there are talented icon designers today pushing the craft forward (many of which we've been able to work with[^designers]). 

In addition, we've always dreamed of working with the Unicode Consortium to create a block for common user interface icons, and open our icon mapping system to other vendors.

Hell, [Google pretty much stole it](https://design.google.com/icons/) anyway. They got the keywords mostly right, but unfortunately missed the point of Unicode (this is why we need standards!).

All of this is to say we have huge ambitions for Symbolset, but with our [small team](/about) and other [growing products](/products) we were unfortunately not able to dedicate enough resources to make it sustainable.

Still feeling passionate about growing Symbolset however, we reached out to everyone from established creative software companies, type foundries, young icon startups, and ultimately found a new home with our buddies at [Fort Awesome](https://fortawesome.com) (formerly Fonticons).

We knew Symbolset needed a team that is devoted 100% to solving icons, and we think these are the folks to do it. These are the same people who make [Font Awesome](http://fontawesome.io), which is currently being used on an incredible 73 million websites. They’re [backed by Y-Combinator](https://techcrunch.com/2015/07/22/yc-backed-fonticons-is-a-subscription-icon-service-from-the-creator-of-font-awesome/) and have some exciting things planned for the future.

We’ll be honest, most acquisitions suck. Especially for users who get left behind while the founders run off on their [incredible journey](https://ourincrediblejourney.tumblr.com). We didn’t take this lightly and very little money switched hands. We mostly were concerned with finding a team who could continue operating Symbolset as it is, and we worked hard to find the best possible fit for our users. As a user, you shouldn’t have to worry about any disruptions. But look forward to awesome stuff in the future!

To close, I thought I’d share our original [Symbolset purpose](http://blog.symbolset.com/purpose):

1. Make great icon design available to the world.
2. Make icons semantic, meaningful, and accessible to humans and machines alike.
3. Make icons easy to implement and technology-agnostic.
4. Make icon design a viable profession for talented icon designers.

We look forward to seeing Fort Awesome continue this mission, and make icon fonts great again.

Cheers to Dave, Travis, and the rest of the Fort Awesome team.

<img src="/uploads/symbolset-emoji-hearts.svg" style="height:100px; width:100%">


[^40k]: According to [Wikipedia](https://en.wikipedia.org/wiki/Cave_painting).

[^emboss]: Hey, it was 2011.

[^stat]: Via [AdWeek](http://www.adweek.com/socialtimes/report-92-of-online-consumers-use-emoji-infographic/627521).

[^text]: Though at the rate emoji is growing, maybe we’ll be [reading paragraphs of symbols](http://www.emojidick.com) soon enough.

[^designers]: Huge thanks to Mike Fortress and all our of Symbolset designers: Jory Raphael, Hemmo de Jonge, Joseph Wain, Brent Jackson, Kyle Steed, and Wen Ping Huang.