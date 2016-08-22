---
title: Seconds Since Tupac
date: 2014-06-16 10:03:00 -04:00
tags:
- Experiments
description: |-
  Seconds Since Tupac: <a href="http://secondssincetupac.com" class="experiments"><code id="tupac">...</code></a>
  <script src="https://cdn.rawgit.com/tupactime/tupac.js/master/tupac.js"></script>
  <script>
      var t = document.getElementById('tupac');
      t.innerHTML = new Tupac().getTupac().toString();

      var interval = setInterval(function(){
        t.innerHTML = new Tupac().getTupac().toString();
      }, 1000)
  </script>
hero: 
featured: 
---

Introducing [Seconds Since Tupac](http://secondssincetupac.com) (Tupac Time), now available on [GitHub](https://github.com/tupactime).

Tupac Time (not to be confused with Epoch Time or [Unix Time](http://en.wikipedia.org/wiki/Unix_time)) is a system for describing instants in time, defined as the number of seconds that have elapsed since the death of rap legend [Tupac Shakur](http://en.wikipedia.org/wiki/Tupac_Shakur). 

Tupac, also known by his stage name 2Pac, was pronounced dead on Friday, September 13, 1996 at 4:03 pm PDT (23:03 UTC). Today would've been his 43rd birthday.


Conversion
----------

<table width="100%">
<thead><tr>
<th>UTC</th>
<th>Epoch Time</th>
<th>Tupac Time</th>
<th>Notes</th>
</tr></thead>
<tbody>
<tr>
<td><code>1996-09-13 23:03:00</code></td>
<td><code>842655780</code></td>
<td><code>0</code></td>
<td>Time of death</td>
</tr>
<tr>
<td><code>2012-04-16 06:36:00</code></td>
<td><code>1334558160</code></td>
<td><code>491902380</code></td>
<td>Hologram performs Coachella</td>
</tr>
</tbody>
</table>

Implementations
---------------
- JavaScript: [https://github.com/tupactime/tupac.js]()
- Ruby: [https://github.com/tupactime/tupac.rb]()

For more see [http://secondssincetupac.com]()
