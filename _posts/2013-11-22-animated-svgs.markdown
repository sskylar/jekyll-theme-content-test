---
title: 'Animated SVGs: Custom easing and timing'
date: 2013-11-22 13:21:00 -05:00
tags:
- Development
description: 
hero: 
---

![](/uploads/animated-svg-ff.svg)
{: .wide .fill}

The chart above is an animated SVG featured on [Sprout](http://sprout.is/).

This chart, and one other animation on Sprout, were initially GIFs. By using animated SVGs instead of GIFs we were able to reduce our page size **from 1.6 mb to 389 kb**, and reduce our page load time **from 8.75 s to 412 ms**. That's a huge difference.

Below, I'll break down the animation of one of the circles seen in the chart. The technique applies to all of the elements in the graphic. With this you can create your own lightweight animated graphic.




### Open your shape

If you created your shape with a vector program, it'll likely be self-closing:

```svg
<circle />
```

Open it up and include an  `animate`[&circ;](http://www.w3.org/TR/SVG/animate.html#AnimateElement) element inside:

```svg
<circle>
    <animate />
</circle>
```

Our circle looks like this. Each of the properties I walk through below apply within the `animate` tag:

```svg
<circle fill="#FFFFFF" stroke="#B450FF" stroke-width="6" stroke-miterlimit="10" cx="153" cy="127" r="6">
    <animate
```


### Select an attribute

The `attributeName`[&circ;](http://www.w3.org/TR/SVG/animate.html#AttributeNameAttribute) is the attribute that we've chosen to animate. This could be opacity, stroke-width, width, or a number of others. We've chosen to use `cy`, it refers to the y position at the center of our circle.

```svg
        attributeName="cy"
```

### From and To positions

Our `from` and `to`[&circ;](http://www.w3.org/TR/SVG/animate.html#FromAttribute) properties tell the shape where to start and end (in terms of the attribute we're animating). I want this animation to loop seamlessly so the `from` and `to` are the same value. (Note: These are the same as the `cy` in my `circle` element!)

```svg
        from="127"
        to="127"
```

### Set a Begin time and Duration

We can set an initial delay for the animation with the `begin`[&circ;](http://www.w3.org/TR/SVG/animate.html#BeginAttribute) property. Ain't nobody got time for that so I set it to `0`. The overall duration of the animation is set with the `dur`[&circ;](http://www.w3.org/TR/SVG/animate.html#DurAttribute) property.

```svg
        begin="0s"
        dur="4s"
```

### Setting Values

These `values`[&circ;](http://www.w3.org/TR/SVG/animate.html#ValuesAttribute) refer to the attribute that we're animating. Because we set our `attributeName` to `cy` above, these are the `cy` positions.
There are 3 positions this circle will take in the animation (at 127, 117, and 90 units). We repeat those values so the circle will pause (though really it's just animating to the same position). The 7th value completes the last pause and ends our loop.

```svg
        values="127;117;117;90;90;127;127"
```

Notice that the last values match the first value, and that those match our `from` and `to` values.

*Aside: Using duplicate values is one method for inserting a pause in an animation. Another, probably more proper method, is to create separate `animate` elements for each of the movements and daisychain them together with ids, .end[&circ;](http://www.w3.org/TR/SVG/animate.html#EndAttribute), and an offset value. I used the duplicate values instead to reduce the number of elements in my SVG.*

### Easing the transition

The `keySplines`[&circ;](http://www.w3.org/TR/SVG/animate.html#KeySplinesAttribute) describe the easing method, just like the [cubic Bézier easing](http://cubic-bezier.com/#.1,.8,.2,1) method in CSS transitions.

```svg
        keySplines="
            0.1 0.8 0.2 1; 
            0.1 0.8 0.2 1; 
            0.1 0.8 0.2 1; 
            0.1 0.8 0.2 1; 
            0.1 0.8 0.2 1; 
            0.1 0.8 0.2 1" 
```

The 4 values on each line are coordinates for the handles describing the easing curve. I find it easiest to first visualize this with a vector drawing:

![](/uploads/keysplines-ff.svg)

Without easing our animation looks mechanical. With easing can simulate momentum and breathe life into it.

![](/uploads/ease-ff.svg)

*Aside: The spec for keySplines[&circ;](http://www.w3.org/TR/SVG/animate.html#KeySplinesAttribute) requires these values to be between 0 and 1. Initially we had a bounce effect (below) (with values 0.4 1.6 0.8 0.8) but the effect has an out-of-range value. While this works beautifully in Webkit, the animation breaks in Firefox. (The overshoot and turnback in the resulting Bézier curve are what give the circle its bounce)*

![](/uploads/ease.svg)

Because we have 6 transitions, 3 times that the circle moves to a new position and 3 times that it moves to its current position (the pause), we list 6 keySplines, separated by semicolons. You can use different values for each transition too.

### Frames

Our `keyTimes`[&circ;](http://www.w3.org/TR/SVG/animate.html#KeyTimesAttribute) set the pace of our keyframes.

```svg
        keyTimes="0;0.22;0.33;0.55;0.66;0.88;1" 
```

These times coordinate with our `values`. I wanted the movements to take twice as long as the pauses so I gave about 0.22 units to the movements and about 0.11 units to the pauses. Putting that together with the values it looks like:

![](/uploads/values-keytimes.svg)

With even pacing the circle pauses and moves for equal amounts of time.

With our custom pacing I offset the pausing and moving to give the movement more time to play out. These shorter pauses make the animation feel snappy in the right places.

![](/uploads/keytimes-ff.svg) 

### calcMode

The `calcMode`[&circ;](http://www.w3.org/TR/SVG/animate.html#CalcModeAttribute) attribute tells the animation how to transition between values. The `spline` values refers to the cubic Bézier easing method we wrote above.

```svg
        calcMode="spline"
```

### Looping and ending

We set our `repeatCount`[&circ;](http://www.w3.org/TR/SVG/animate.html#RepeatCountAttribute) to `indefinite` so that our animation loops.

```svg
        repeatCount="indefinite"
    />
</circle>
```

Finally, we close our `animate` element and our `circle` element.

### Putting it all together

Putting it all together we get:

```svg
<circle fill="#FFFFFF" stroke="#B450FF" stroke-width="6" stroke-miterlimit="10" cx="153" cy="127" r="6">
	<animate
		attributeName="cy"
		from="127"
		to="127"
		begin="0s"
		dur="4s"
		values="127;117;117;90;90;127;127"
		keySplines="
			0.1 0.8 0.2 1; 
			0.1 0.8 0.2 1; 
			0.1 0.8 0.2 1; 
			0.1 0.8 0.2 1; 
			0.1 0.8 0.2 1; 
			0.1 0.8 0.2 1" 
		keyTimes="
			0;0.22;0.33;0.55;0.66;0.88;1" 
		calcMode="spline"
		repeatCount="indefinite"
	/>
</circle>
```

### Outro

All elements in the chart use this same method. This technique works for the lines also. With the circles we're animating the `cy` position. With each of the lines we animated the `y1` and `y2` positions (two separate `animate` elements).

We chose to use animated SVGs instead of embedded videos or animated GIFs to reduce page size and load time. Our final chart animation weighed in at just 15 kb. There are JavaScript libraries available for animating SVGs but we avoided them because they aren't as light or agile as a pure SVG animation.

Writing our animation by hand ultimately gave us a better understanding of how they work.

![](/uploads/animated-svg-ff.svg)

**Additional resources:**

* [SVG Animate element spec](http://www.w3.org/TR/SVG/animate.html)
* [Mozilla: SVG animation with SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
* [Can I Use: SVGs](http://caniuse.com/svg)
* [Can I Use: SVG SMIL Animation](http://caniuse.com/#feat=svg-smil)
