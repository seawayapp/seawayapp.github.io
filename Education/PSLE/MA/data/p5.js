/* =====================================================================
   PSLE MATHEMATICS — PRIMARY 5 DATA SOURCE
   Loaded by ../mindmap.html (visual mind-map: root -> chapter branch ->
   topic leaf, plus a nested "⭐ Tricky Questions" sub-branch inside any
   chapter that has one). This is the ONLY place P5 content lives — to add
   a topic, append an object to TOPICS below. To add another grade later
   (P3/P4/P6), create data/p3.js etc. with the same shape and register it
   in the GRADES map in mindmap.html.

   Topic shape:
   {
     id: "c<chapter>-t<n>" (unique),
     en: "<chapter>.<n> Topic Title",
     category: "Chapter N: Chapter Title"  (groups leaves into branches),
     subcategory: "tricky"  // OPTIONAL — omit for a normal numbered topic.
                             // Set this to nest the topic under that
                             // chapter's own "⭐ Tricky Questions" sub-branch
                             // instead of sitting as a direct topic — use it
                             // for non-routine / easy-to-get-wrong questions
                             // that don't belong in the main numbered
                             // sequence (drop the "N.n" prefix from `en`
                             // for these, since they're bonus content).
     tags: [...],
     summary: "1 sentence shown on the collapsed leaf node.",
     diagram: "<svg ...>...</svg>"  // optional — shown at the top of the drawer;
                                     // use inline style="fill:var(--text)" etc. so
                                     // it themes with light/dark mode (see any
                                     // existing diagram below for the pattern).
     sections: [ { h: "Key Points", body: "<ul>...</ul>" }, ... ],
     examples: [ { q: "...", a: "..." }, ... ]   // sample questions
   }

   Comparison shape: { id, title, rows: [["Aspect","A","B",...], ...] }
   ===================================================================== */
(function () {

const TOPICS = [
{
  id: "c1-t1", en: "1.1 Place Value to 10 Million",
  category: "Chapter 1: Numbers to 10 Million",
  tags: ["place-value", "whole-numbers"],
  summary: "Reading the place value chart up to ten millions, and expanded form.",
  diagram: `<div style="overflow-x:auto;"><table class="cmp" style="min-width:0;text-align:center;">
    <tr><th>10M</th><th>M</th><th>100Th</th><th>10Th</th><th>Th</th><th>H</th><th>T</th><th>O</th></tr>
    <tr><td>&nbsp;</td><td>6</td><td>4</td><td>8</td><td>2</td><td>5</td><td>7</td><td>1</td></tr>
  </table></div><p style="text-align:center;color:var(--muted);font-size:12px;margin:8px 0 0;">6,482,571</p>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>The place value chart extends to Ten Thousands, Hundred Thousands, Millions and Ten Millions.</li>
      <li>Each place is 10 times the value of the place to its right (10 &times; 1,000,000 = 10,000,000).</li>
      <li>Any number can be shown in standard form, word form, or expanded form.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Expanded form = &Sigma; (digit &times; place value)</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Write 6,482,571 in expanded form.</p><p class="ex-steps">6,482,571<br>= 6,000,000 + 400,000 + 80,000 + 2,000 + 500 + 70 + 1</p>` }
  ],
  examples: [
    { q: "What is the value of the digit 5 in 5,732,690?", a: "5,000,000 — it is in the millions place." },
    { q: "Write 8,019,304 in expanded form.", a: "8,019,304 = 8,000,000 + 10,000 + 9,000 + 300 + 4" }
  ]
},
{
  id: "c1-t2", en: "1.2 Reading, Writing & Comparing Numbers",
  category: "Chapter 1: Numbers to 10 Million",
  tags: ["place-value", "comparing", "ordering"],
  summary: "Reading large numbers in periods of 3 digits, and comparing/ordering them.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Read large numbers in groups of 3 digits from the right: ones, thousands, millions.</li>
      <li>To compare two numbers, compare digits from the leftmost (highest) place first.</li>
      <li>Order a set of numbers by comparing one place value at a time.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Compare 4,829,105 and 4,830,050.</p><p class="ex-steps">Millions: 4 = 4<br>Hundred-thousands: 8 = 8<br>Ten-thousands: 2 &lt; 3<br>So 4,830,050 is greater.</p>` }
  ],
  examples: [
    { q: "Arrange in ascending order: 3,504,210 / 3,450,999 / 3,540,000", a: "3,450,999 < 3,504,210 < 3,540,000" },
    { q: "Which is greater: 7,608,412 or 7,680,214?", a: "7,680,214 is greater — the hundred-thousands digits are equal (6=6), but the ten-thousands digit 8 beats 0." }
  ]
},
{
  id: "c1-t3", en: "1.3 Rounding Numbers",
  category: "Chapter 1: Numbers to 10 Million",
  tags: ["rounding", "estimation"],
  summary: "Rounding numbers to the nearest 10 up to nearest million.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Look at the digit right after the place you are rounding to.</li>
      <li>If that digit is 5 or more, round up. If it is less than 5, round down.</li>
      <li>You can round to the nearest 10, 100, 1,000, 10,000, 100,000 or 1,000,000.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Round 6,482,571 to the nearest hundred thousand.</p><p class="ex-steps">Look at the ten-thousands digit: 8 (&ge;5) &rarr; round up<br>6,482,571 &asymp; 6,500,000</p>` }
  ],
  examples: [
    { q: "Round 2,957,340 to the nearest ten thousand.", a: "2,960,000" },
    { q: "Round 4,995,600 to the nearest hundred thousand.", a: "5,000,000 — the ten-thousands digit is 9, so it rounds up and carries." }
  ]
},

{
  id: "c2-t1", en: "2.1 Multiply & Divide by 10, 100, 1000 (and multiples)",
  category: "Chapter 2: Four Operations of Whole Numbers",
  tags: ["multiplication", "division"],
  summary: "Shortcuts for multiplying/dividing whole numbers by 10, 100, 1000 and their multiples.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>&times;10 / &times;100 / &times;1000: shift digits left, adding 1 / 2 / 3 zeros.</li>
      <li>&divide;10 / &divide;100 / &divide;1000: shift digits right, removing 1 / 2 / 3 zeros.</li>
      <li>To multiply/divide by tens, hundreds or thousands (e.g. &times;300), use the basic fact then adjust.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">a &times; (b &times; 10<sup>n</sup>) = (a &times; b) &times; 10<sup>n</sup></div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 45 &times; 300 and 8,400 &divide; 200.</p><p class="ex-steps">45 &times; 300 = 45 &times; 3 &times; 100 = 135 &times; 100 = 13,500<br>8,400 &divide; 200 = 84 &divide; 2 = 42</p>` }
  ],
  examples: [
    { q: "36 &times; 4,000 = ?   72,000 &divide; 800 = ?", a: "144,000   and   90" },
    { q: "250 &times; 60 = ?   9,600 &divide; 300 = ?", a: "15,000   and   32" }
  ]
},
{
  id: "c2-t2", en: "2.2 Order of Operations (with brackets)",
  category: "Chapter 2: Four Operations of Whole Numbers",
  tags: ["order-of-operations", "brackets"],
  summary: "The rules for which operation to work out first in a mixed expression.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Work out brackets first.</li>
      <li>Then do multiplication and division, left to right.</li>
      <li>Then do addition and subtraction, left to right.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">( ) &rarr; &times; &divide; &rarr; + &minus;</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 15 + 6 &times; (9 &minus; 4).</p><p class="ex-steps">Brackets: 9 &minus; 4 = 5<br>6 &times; 5 = 30<br>15 + 30 = 45</p>` }
  ],
  examples: [
    { q: "40 &minus; 3 &times; (5 + 2) = ?", a: "40 &minus; 21 = 19" },
    { q: "(18 &minus; 6) &divide; 3 + 5 &times; 2 = ?", a: "12 &divide; 3 + 10 = 4 + 10 = 14" }
  ]
},
{
  id: "c2-t3", en: "2.3 Word Problems (Whole Numbers)",
  category: "Chapter 2: Four Operations of Whole Numbers",
  tags: ["word-problems"],
  summary: "Model-drawing and multi-step reasoning with the four operations.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Underline what is given and what is asked.</li>
      <li>Draw a model / bar diagram to see the relationship between quantities.</li>
      <li>Decide the correct operation(s) and their order, then estimate to check your answer.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A shop sold 240 toys on Monday and 3 times as many on Saturday. How many toys in total?</p><p class="ex-steps">Saturday: 240 &times; 3 = 720<br>Total: 240 + 720 = 960 toys</p>` }
  ],
  examples: [
    { q: "A factory packs 15 boxes of 24 pens each. 90 pens are damaged. How many good pens are left?", a: "15 &times; 24 = 360; 360 &minus; 90 = 270 pens" },
    { q: "A school buys 18 boxes of 25 storybooks each and gives away 96 books. How many books are left?", a: "18 &times; 25 = 450; 450 &minus; 96 = 354 books" }
  ]
},

{
  id: "c3-t1", en: "3.1 Division of Whole Numbers as Fractions",
  category: "Chapter 3: Fraction and Division",
  tags: ["fractions", "division"],
  summary: "Writing a division a &divide; b as the fraction a/b.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>a &divide; b can be written as the fraction a/b (b &ne; 0).</li>
      <li>The dividend becomes the numerator; the divisor becomes the denominator.</li>
      <li>Always simplify the fraction if possible.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">a &divide; b = a&frasl;b</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Express 12 &divide; 18 as a fraction in its simplest form.</p><p class="ex-steps">12 &divide; 18 = 12/18<br>&divide;6: = 2/3</p>` }
  ],
  examples: [
    { q: "Express 9 &divide; 15 as a fraction in simplest form.", a: "9/15 = 3/5" },
    { q: "Express 14 &divide; 21 as a fraction in simplest form.", a: "14/21 = 2/3" }
  ]
},
{
  id: "c3-t2", en: "3.2 Expressing Fractions as Decimals",
  category: "Chapter 3: Fraction and Division",
  tags: ["fractions", "decimals"],
  summary: "Dividing the numerator by the denominator to get a decimal.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Divide the numerator by the denominator (long division) to get a decimal.</li>
      <li>Some fractions give exact (terminating) decimals, e.g. 1/4 = 0.25.</li>
      <li>Fractions with denominators like 3, 6 or 7 may give recurring decimals.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Express 3/8 as a decimal.</p><p class="ex-steps">3 &divide; 8 = 0.375</p>` }
  ],
  examples: [
    { q: "Express 7/20 as a decimal.", a: "7 &divide; 20 = 0.35" },
    { q: "Express 9/8 as a decimal.", a: "9 &divide; 8 = 1.125" }
  ]
},

{
  id: "c4-t1", en: "4.1 Adding & Subtracting Mixed Numbers",
  category: "Chapter 4: Four Operations of Fractions",
  tags: ["fractions", "mixed-numbers", "addition", "subtraction"],
  summary: "Using a common denominator to add or subtract mixed numbers.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Convert to a common denominator before adding or subtracting.</li>
      <li>Add/subtract whole numbers and fraction parts, or convert everything to improper fractions.</li>
      <li>'Borrow' 1 whole as a fraction when subtracting a bigger fraction part.</li>
      <li>Simplify and write the final answer as a mixed number.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 3 1/4 &minus; 1 3/4.</p><p class="ex-steps">3 1/4 = 13/4,  1 3/4 = 7/4<br>13/4 &minus; 7/4 = 6/4 = 1 1/2</p>` }
  ],
  examples: [
    { q: "2 3/5 + 1 7/10 = ?", a: "26/10 + 17/10 = 43/10 = 4 3/10" },
    { q: "5 1/6 &minus; 2 5/6 = ?", a: "31/6 &minus; 17/6 = 14/6 = 2 1/3" }
  ]
},
{
  id: "c4-t2", en: "4.2 Multiplying Fractions",
  category: "Chapter 4: Four Operations of Fractions",
  tags: ["fractions", "multiplication"],
  summary: "Multiplying a fraction by a whole number, by another fraction, or as a mixed number.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Fraction &times; whole number: multiply the numerator by the whole number.</li>
      <li>Fraction &times; fraction: multiply numerators together and denominators together.</li>
      <li>Mixed number &times; whole number: convert the mixed number to an improper fraction first.</li>
      <li>Cross-cancel common factors before multiplying to keep numbers small.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">a&frasl;b &times; c&frasl;d = (a&times;c) &frasl; (b&times;d)</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 2/3 &times; 3/5.</p><p class="ex-steps">2/3 &times; 3/5 = 6/15<br>= 2/5 (&divide;3)</p>` }
  ],
  examples: [
    { q: "1 1/2 &times; 4 = ?", a: "3/2 &times; 4 = 12/2 = 6" },
    { q: "3/4 &times; 2/9 = ?", a: "6/36 = 1/6 (cross-cancel first: 3/4 &times; 2/9 = 1/6)" }
  ]
},
{
  id: "c4-t3", en: "4.3 Word Problems (Fractions)",
  category: "Chapter 4: Four Operations of Fractions",
  tags: ["word-problems", "fractions"],
  summary: "Using models and unit values to solve fraction word problems.",
  diagram: `<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="52" height="40" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="72" y="20" width="52" height="40" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="124" y="20" width="52" height="40" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
    <rect x="176" y="20" width="52" height="40" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
    <rect x="228" y="20" width="52" height="40" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
    <text x="150" y="14" text-anchor="middle" style="fill:var(--muted);font-size:11px;">60 sweets (5 equal units)</text>
    <text x="72" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px;">2 units shaded = 24 red</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>'Of' usually means multiply, e.g. '2/3 of 60' = 2/3 &times; 60.</li>
      <li>Draw a model to show the whole and the fraction parts.</li>
      <li>Find the value of 1 unit first, then scale up to find the whole or another part.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> There are 60 sweets. 2/5 are red. How many are red?</p><p class="ex-steps">2/5 &times; 60 = 24 sweets</p>` }
  ],
  examples: [
    { q: "A tank is 3/4 full with 36 litres of water. What is its full capacity?", a: "1 unit = 36 &divide; 3 = 12 l; full = 12 &times; 4 = 48 l" },
    { q: "Jerry read 2/5 of a 150-page book on Monday and 1/3 of the remainder on Tuesday. How many pages has he read altogether?", a: "Monday: 2/5 &times; 150 = 60 pages. Remainder: 90 pages. Tuesday: 1/3 &times; 90 = 30 pages. Total: 60 + 30 = 90 pages." }
  ]
},

{
  id: "c5-t1", en: "5.1 Base and Height of a Triangle",
  category: "Chapter 5: Area of Triangle",
  tags: ["triangle", "geometry"],
  summary: "The base of a triangle and its perpendicular height.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,150 240,150 165,45" style="fill:var(--accent-bg);stroke:none;"/>
    <polygon points="40,150 240,150 165,45" style="fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
    <line x1="165" y1="150" x2="165" y2="45" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3;"/>
    <path d="M165,150 L157,150 L157,142 L165,142" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
    <text x="128" y="172" style="fill:var(--text);font-size:13px;">base</text>
    <text x="172" y="100" style="fill:var(--text);font-size:13px;">height</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>The height is the perpendicular (right-angle) distance from the base to the opposite vertex.</li>
      <li>Any of the 3 sides can be the base &mdash; its height must be perpendicular to it.</li>
      <li>In a right-angled triangle, the two sides forming the right angle can be base and height.</li>
    </ul>` }
  ],
  examples: [
    { q: "A right triangle has legs 5cm and 12cm. Which pair can be used as base & height?", a: "The two legs (5cm and 12cm) — they meet at the right angle." },
    { q: "A triangle has a base of 15cm. If its area is 60cm&sup2;, find its height.", a: "60 = 1/2 &times; 15 &times; h &rarr; h = 8cm" }
  ]
},
{
  id: "c5-t2", en: "5.2 Area of Triangle",
  category: "Chapter 5: Area of Triangle",
  tags: ["triangle", "area", "geometry"],
  summary: "Area = half of base times height.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,45 140,45 40,150" style="fill:var(--chip-bg);stroke:var(--border);stroke-width:1;"/>
    <polygon points="140,45 240,45 240,150" style="fill:var(--chip-bg);stroke:var(--border);stroke-width:1;"/>
    <polygon points="40,150 240,150 140,45" style="fill:var(--accent-bg);stroke:none;"/>
    <rect x="40" y="45" width="200" height="105" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
    <polygon points="40,150 240,150 140,45" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-linejoin:round;"/>
    <text x="150" y="172" text-anchor="middle" style="fill:var(--text);font-size:12px;">base</text>
    <text x="150" y="28" text-anchor="middle" style="fill:var(--muted);font-size:11px;">the 2 grey corners together = the blue triangle</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Area of a triangle = &frac12; &times; base &times; height.</li>
      <li>Units are cm&sup2; or m&sup2;.</li>
      <li>A triangle is exactly half of the rectangle/parallelogram with the same base and height.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Area = &frac12; &times; base &times; height</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Base = 8cm, height = 5cm. Find the area.</p><p class="ex-steps">Area = 1/2 &times; 8 &times; 5 = 20 cm&sup2;</p>` }
  ],
  examples: [
    { q: "A triangle has base 14cm and height 9cm. Find its area.", a: "1/2 &times; 14 &times; 9 = 63 cm&sup2;" },
    { q: "A triangle has an area of 45cm&sup2; and height 9cm. Find its base.", a: "45 = 1/2 &times; b &times; 9 &rarr; b = 10cm" }
  ]
},
{
  id: "c5-t3", en: "5.3 Area of Composite Figures",
  category: "Chapter 5: Area of Triangle",
  tags: ["composite-figures", "area", "geometry"],
  summary: "Breaking a figure into triangles and rectangles to find total area.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,40 210,40 210,95 150,95 150,150 50,150" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
    <line x1="150" y1="40" x2="150" y2="95" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3;"/>
    <text x="35" y="98" style="fill:var(--text);font-size:12px;">6</text>
    <text x="120" y="35" style="fill:var(--text);font-size:12px;">4</text>
    <text x="175" y="35" style="fill:var(--text);font-size:12px;">5</text>
    <text x="215" y="70" style="fill:var(--text);font-size:12px;">3</text>
    <text x="130" y="168" text-anchor="middle" style="fill:var(--muted);font-size:11px;">split into 2 rectangles, then add</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Break the figure into triangles / rectangles / squares with known formulas.</li>
      <li>Add the parts together, or subtract a cut-out part from a larger shape.</li>
      <li>Label every dimension first &mdash; watch for shared or hidden lengths.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A rectangle 10cm&times;6cm has a triangular corner (base 4cm, height 6cm) cut off. Find the remaining area.</p><p class="ex-steps">Rectangle: 10 &times; 6 = 60 cm&sup2;<br>Triangle: 1/2 &times; 4 &times; 6 = 12 cm&sup2;<br>Remaining: 60 &minus; 12 = 48 cm&sup2;</p>` }
  ],
  examples: [
    { q: "An L-shape is made from a 12cm&times;8cm rectangle with a 5cm&times;3cm rectangle removed. Find its area.", a: "12&times;8 &minus; 5&times;3 = 96 &minus; 15 = 81 cm&sup2;" },
    { q: "A figure is made of a rectangle 12cm&times;5cm and a triangle (base 12cm, height 4cm) attached to one side. Find the total area.", a: "Rectangle: 60 cm&sup2;. Triangle: 1/2 &times; 12 &times; 4 = 24 cm&sup2;. Total: 84 cm&sup2;." }
  ]
},

{
  id: "c6-t1", en: "6.1 Volume in Cubic Units, cm&sup3; and m&sup3;",
  category: "Chapter 6: Volume",
  tags: ["volume", "units"],
  summary: "Counting unit cubes and converting between cm³ and m³.",
  diagram: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,90 80,90 80,130 40,130" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <polygon points="40,90 60,72 100,72 80,90" style="fill:var(--chip-bg);stroke:var(--text);stroke-width:1.5;"/>
    <polygon points="80,90 100,72 100,112 80,130" style="fill:var(--border);stroke:var(--text);stroke-width:1.5;"/>
    <text x="30" y="150" style="fill:var(--text);font-size:12px;">1 unit cube</text>
    <g transform="translate(140,60)">
      <rect x="0" y="0" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="30" y="0" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="60" y="0" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="90" y="0" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="0" y="30" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="30" y="30" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="60" y="30" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
      <rect x="90" y="30" width="30" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.2;"/>
    </g>
    <text x="140" y="145" style="fill:var(--text);font-size:12px;">8 unit cubes = 8 cubic units</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Volume is the amount of space a 3-D object occupies, measured in cubes.</li>
      <li>Count unit cubes to find volume, or use cm&sup3; / m&sup3; for real measurements.</li>
      <li>1 m&sup3; = 100cm &times; 100cm &times; 100cm = 1,000,000 cm&sup3;.</li>
    </ul>` }
  ],
  examples: [
    { q: "A box measures 2m &times; 1m &times; 1m. Express its volume in cm&sup3;.", a: "2 &times; 1,000,000 = 2,000,000 cm&sup3;" },
    { q: "Express 3.2 m&sup3; in cm&sup3;.", a: "3.2 &times; 1,000,000 = 3,200,000 cm&sup3;" }
  ]
},
{
  id: "c6-t2", en: "6.2 Isometric Drawings & Different Views",
  category: "Chapter 6: Volume",
  tags: ["volume", "isometric", "views"],
  summary: "Drawing 3-D solids on isometric grids and sketching front/side/top views.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,140 160,140 160,80 60,80" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.8;"/>
    <polygon points="60,80 100,55 200,55 160,80" style="fill:var(--chip-bg);stroke:var(--text);stroke-width:1.8;"/>
    <polygon points="160,80 200,55 200,115 160,140" style="fill:var(--border);stroke:var(--text);stroke-width:1.8;"/>
    <text x="90" y="160" style="fill:var(--text);font-size:12px;">Solid</text>
    <g transform="translate(215,35)">
      <rect x="0" y="0" width="34" height="24" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
      <text x="17" y="36" text-anchor="middle" style="fill:var(--muted);font-size:10px;">Front view</text>
    </g>
    <g transform="translate(215,82)">
      <rect x="0" y="0" width="24" height="24" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
      <text x="12" y="36" text-anchor="middle" style="fill:var(--muted);font-size:10px;">Side view</text>
    </g>
    <g transform="translate(215,129)">
      <rect x="0" y="0" width="34" height="18" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
      <text x="17" y="30" text-anchor="middle" style="fill:var(--muted);font-size:10px;">Top view</text>
    </g>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Isometric grid paper is used to draw 3-D solids so edges keep correct proportions.</li>
      <li>A solid can be drawn from its front view, side view and top view on square grids.</li>
      <li>Practising these views helps you count hidden cubes accurately.</li>
    </ul>` }
  ],
  examples: [
    { q: "Sketch the top view of a cuboid 3 cubes long and 2 cubes wide.", a: "A 3&times;2 grid of squares (6 squares in total)." },
    { q: "A cuboid is built from unit cubes 3 long, 3 wide, 2 high (18 cubes total). Looking at it from the front, how many unit squares would you see?", a: "Length &times; height = 3 &times; 2 = 6 unit squares." }
  ]
},
{
  id: "c6-t3", en: "6.3 Volume of Cubes, Cuboids & Liquids",
  category: "Chapter 6: Volume",
  tags: ["volume", "cuboid", "cube", "liquids"],
  summary: "V = L × B × H, and volume of liquid in a container.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,150 170,150 170,80 60,80" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;"/>
    <polygon points="60,80 105,50 215,50 170,80" style="fill:var(--chip-bg);stroke:var(--text);stroke-width:2;"/>
    <polygon points="170,80 215,50 215,120 170,150" style="fill:var(--border);stroke:var(--text);stroke-width:2;"/>
    <text x="105" y="170" text-anchor="middle" style="fill:var(--text);font-size:13px;">L</text>
    <text x="45" y="118" text-anchor="middle" style="fill:var(--text);font-size:13px;">H</text>
    <text x="197" y="68" text-anchor="middle" style="fill:var(--text);font-size:13px;">B</text>
    <text x="150" y="20" text-anchor="middle" style="fill:var(--muted);font-size:12px;">Volume = L &times; B &times; H</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Volume of cuboid = Length &times; Breadth &times; Height.</li>
      <li>Volume of cube = side &times; side &times; side.</li>
      <li>1 litre = 1,000 cm&sup3; = 1,000 ml.</li>
      <li>Volume of liquid in a container = base area &times; height of liquid.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">V = L &times; B &times; H</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A tank 20cm&times;15cm&times;10cm is completely filled. Find the volume in litres.</p><p class="ex-steps">V = 20 &times; 15 &times; 10 = 3,000 cm&sup3;<br>= 3,000 &divide; 1,000 = 3 litres</p>` }
  ],
  examples: [
    { q: "A fish tank (base 30cm &times; 20cm) has water filled to a height of 12cm. Find the volume of water in litres.", a: "30&times;20&times;12 = 7,200 cm&sup3; = 7.2 l" },
    { q: "A cube has sides of 6cm. Find its volume.", a: "6 &times; 6 &times; 6 = 216 cm&sup3;" }
  ]
},
{
  id: "c6-t4", en: "6.4 Word Problems (Volume)",
  category: "Chapter 6: Volume",
  tags: ["volume", "word-problems"],
  summary: "Multi-step volume problems involving fractions of a container.",
  diagram: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="30" width="140" height="130" style="fill:none;stroke:var(--text);stroke-width:2;"/>
    <rect x="80" y="108" width="140" height="52" style="fill:var(--accent-bg);stroke:none;"/>
    <line x1="80" y1="108" x2="220" y2="108" style="stroke:var(--accent);stroke-width:2;stroke-dasharray:5 3;"/>
    <text x="228" y="112" style="fill:var(--muted);font-size:11px;">water level</text>
    <text x="150" y="178" text-anchor="middle" style="fill:var(--text);font-size:12px;">volume of water = base area &times; height of water</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Draw and label the container's dimensions first.</li>
      <li>Find the volume of the whole container, then the filled/empty part as needed.</li>
      <li>Convert units (cm&sup3; &harr; litres &harr; m&sup3;) carefully before comparing.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A tank 40cm&times;30cm&times;25cm is 2/5 filled with water. Find the volume of water.</p><p class="ex-steps">Full volume: 40&times;30&times;25 = 30,000 cm&sup3;<br>Water: 2/5 &times; 30,000 = 12,000 cm&sup3;</p>` }
  ],
  examples: [
    { q: "How many more litres of water are needed to fill the tank above completely?", a: "30,000 &minus; 12,000 = 18,000 cm&sup3; = 18 l" },
    { q: "A rectangular tank 25cm&times;20cm&times;30cm is empty. Water is poured in until it is 3/5 full. Find the volume of water poured in.", a: "Full: 25&times;20&times;30 = 15,000 cm&sup3;. Water: 3/5 &times; 15,000 = 9,000 cm&sup3; = 9 litres." }
  ]
},

{
  id: "c7-t1", en: "7.1 Multiply & Divide Decimals by 10, 100, 1000",
  category: "Chapter 7: Decimals",
  tags: ["decimals", "multiplication", "division"],
  summary: "Moving the decimal point when multiplying or dividing by 10, 100 or 1000.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>&times;10 / &times;100 / &times;1000: move the decimal point right 1 / 2 / 3 places.</li>
      <li>&divide;10 / &divide;100 / &divide;1000: move the decimal point left 1 / 2 / 3 places.</li>
      <li>For tens/hundreds/thousands (e.g. &times;40), use the basic fact then adjust the decimal point.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 3.45 &times; 100 and 6.2 &divide; 1000.</p><p class="ex-steps">3.45 &times; 100 = 345<br>6.2 &divide; 1000 = 0.0062</p>` }
  ],
  examples: [
    { q: "0.086 &times; 1000 = ?   54 &divide; 200 = ?", a: "86   and   0.27" },
    { q: "7.5 &times; 40 = ?   0.63 &divide; 900 = ?", a: "300   and   0.0007" }
  ]
},
{
  id: "c7-t2", en: "7.2 Converting Measurements",
  category: "Chapter 7: Decimals",
  tags: ["decimals", "measurement", "units"],
  summary: "Converting between km/m, kg/g, l/ml and m/cm using decimals.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>km &harr; m and kg &harr; g and l &harr; ml: &times; or &divide; by 1,000.</li>
      <li>m &harr; cm: &times; or &divide; by 100.</li>
      <li>Always check whether to multiply (bigger&rarr;smaller unit) or divide (smaller&rarr;bigger unit).</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Convert 3.6kg to g, and 850ml to l.</p><p class="ex-steps">3.6 &times; 1000 = 3,600 g<br>850 &divide; 1000 = 0.85 l</p>` }
  ],
  examples: [
    { q: "Convert 4.2m to cm; convert 7,250g to kg.", a: "420 cm; 7.25 kg" },
    { q: "Convert 0.75km to m, and 3,400ml to litres.", a: "750 m; 3.4 l" }
  ]
},
{
  id: "c7-t3", en: "7.3 Word Problems (Decimals)",
  category: "Chapter 7: Decimals",
  tags: ["decimals", "word-problems"],
  summary: "Adding, subtracting, multiplying and dividing decimals in context.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Line up decimal points when adding or subtracting.</li>
      <li>Convert to the same unit before comparing or combining quantities.</li>
      <li>Estimate first, so you can check your final answer is reasonable.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A rope 5.6m long is cut into 4 equal pieces. Find the length of each piece.</p><p class="ex-steps">5.6 &divide; 4 = 1.4 m</p>` }
  ],
  examples: [
    { q: "A bottle holds 1.5l of juice. 6 bottles are filled. How many litres of juice are used?", a: "1.5 &times; 6 = 9 l" },
    { q: "Sarah has $18.50. She buys 3 notebooks at $2.35 each. How much money does she have left?", a: "3 &times; 2.35 = $7.05; 18.50 &minus; 7.05 = $11.45" }
  ]
},

{
  id: "c8-t1", en: "8.1 Understanding Rate",
  category: "Chapter 8: Rate",
  tags: ["rate"],
  summary: "Rate compares two different quantities and scales by the 1-unit value.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Rate compares two different quantities, e.g. distance per hour, cost per item.</li>
      <li>Find the rate (per 1 unit) first: Rate = Total Quantity &divide; Number of Units.</li>
      <li>Once you know the rate, scale it: Total = Rate &times; Number of Units.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Rate = Total &divide; Units</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A car travels 240km in 4 hours. Find the rate.</p><p class="ex-steps">240 &divide; 4 = 60 km/h</p>` }
  ],
  examples: [
    { q: "5 identical pens cost $12.50 in total. What is the cost of 1 pen?", a: "12.50 &divide; 5 = $2.50" },
    { q: "A machine produces 480 bottles in 6 hours. Find its rate of production per hour.", a: "480 &divide; 6 = 80 bottles/hour" }
  ]
},
{
  id: "c8-t2", en: "8.2 Word Problems (Rate)",
  category: "Chapter 8: Rate",
  tags: ["rate", "word-problems"],
  summary: "Two-step rate problems: find the rate, then apply it.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Find the rate (per 1 unit) first, then use it to answer what is asked.</li>
      <li>Watch the units carefully &mdash; per hour vs per minute, per item vs per dozen.</li>
      <li>Some problems need 2 steps: find the rate, then apply it differently (e.g. find time needed).</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A tap fills a tank at 15 litres/min. How long to fill a 180-litre tank?</p><p class="ex-steps">180 &divide; 15 = 12 minutes</p>` }
  ],
  examples: [
    { q: "A printer prints 45 pages in 3 minutes. How many pages in 8 minutes at the same rate?", a: "Rate = 15 pages/min; 15 &times; 8 = 120 pages" },
    { q: "A car uses 8 litres of petrol to travel 100km. At the same rate, how much petrol is needed to travel 250km?", a: "Rate = 8/100 = 0.08 l/km; 250 &times; 0.08 = 20 litres" }
  ]
},

{
  id: "c9-t1", en: "9.1 Per Cent & Conversions",
  category: "Chapter 9: Percentage",
  tags: ["percentage", "conversions"],
  summary: "Converting between fractions, decimals and percentages.",
  diagram: `<div style="overflow-x:auto;width:100%;"><svg width="660" height="150" viewBox="0 0 660 150" style="width:660px;max-width:none;display:block;" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="55" x2="630" y2="55" style="stroke:var(--text);stroke-width:2;"/>
    <line x1="20" y1="115" x2="630" y2="115" style="stroke:var(--text);stroke-width:2;"/>
    <line x1="30" y1="62" x2="30" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="88" y1="62" x2="88" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="146" y1="62" x2="146" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="204" y1="62" x2="204" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="262" y1="62" x2="262" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="320" y1="62" x2="320" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="378" y1="62" x2="378" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="436" y1="62" x2="436" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="494" y1="62" x2="494" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="552" y1="62" x2="552" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="610" y1="62" x2="610" y2="108" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3;opacity:0.5;"/>
    <line x1="30" y1="48" x2="30" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="88" y1="48" x2="88" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="146" y1="48" x2="146" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="204" y1="48" x2="204" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="262" y1="48" x2="262" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="320" y1="48" x2="320" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="378" y1="48" x2="378" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="436" y1="48" x2="436" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="494" y1="48" x2="494" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="552" y1="48" x2="552" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="610" y1="48" x2="610" y2="62" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="30" y1="108" x2="30" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="88" y1="108" x2="88" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="146" y1="108" x2="146" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="204" y1="108" x2="204" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="262" y1="108" x2="262" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="320" y1="108" x2="320" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="378" y1="108" x2="378" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="436" y1="108" x2="436" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="494" y1="108" x2="494" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="552" y1="108" x2="552" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <line x1="610" y1="108" x2="610" y2="122" style="stroke:var(--text);stroke-width:1.5;"/>
    <text x="30" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0</text>
    <text x="88" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.1</text>
    <text x="146" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.2</text>
    <text x="204" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.3</text>
    <text x="262" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.4</text>
    <text x="320" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.5</text>
    <text x="378" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.6</text>
    <text x="436" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.7</text>
    <text x="494" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.8</text>
    <text x="552" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">0.9</text>
    <text x="610" y="38" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">1.0</text>
    <text x="30" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">0/10</text>
    <text x="88" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">1/10</text>
    <text x="146" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">2/10</text>
    <text x="204" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">3/10</text>
    <text x="262" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">4/10</text>
    <text x="320" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">5/10</text>
    <text x="378" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">6/10</text>
    <text x="436" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">7/10</text>
    <text x="494" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">8/10</text>
    <text x="552" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">9/10</text>
    <text x="610" y="80" text-anchor="middle" style="fill:var(--accent);font-size:11px;">10/10</text>
    <text x="30" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">0%</text>
    <text x="88" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">10%</text>
    <text x="146" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">20%</text>
    <text x="204" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">30%</text>
    <text x="262" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">40%</text>
    <text x="320" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">50%</text>
    <text x="378" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">60%</text>
    <text x="436" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">70%</text>
    <text x="494" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">80%</text>
    <text x="552" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">90%</text>
    <text x="610" y="137" text-anchor="middle" style="fill:var(--accent2);font-size:12px;font-weight:600;">100%</text>
    <text x="20" y="20" style="fill:var(--muted);font-size:11px;">decimal (above) &amp; fraction (below, in tenths)</text>
    <text x="20" y="148" style="fill:var(--muted);font-size:11px;">percentage</text>
  </svg></div>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>'Per cent' (%) means 'out of 100'.</li>
      <li>The scale above lines up the same value 3 ways: swipe it to see that 0.3 = 3/10 = 30%, and so on.</li>
      <li>Fraction or decimal &rarr; %: multiply by 100%.</li>
      <li>% &rarr; fraction: write over 100 and simplify. % &rarr; decimal: divide by 100.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">% = (part &divide; whole) &times; 100%</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Convert 3/4 and 0.6 to percentages.</p><p class="ex-steps">3/4 &times; 100% = 75%<br>0.6 &times; 100% = 60%</p>` }
  ],
  examples: [
    { q: "Convert 5/8 to a percentage; convert 8% to a decimal.", a: "62.5%;  0.08" },
    { q: "Convert 0.06 to a percentage, and convert 45% to a fraction in simplest form.", a: "6%;  45/100 = 9/20" },
    { q: "Using the scale idea: what fraction (in tenths) and decimal is equal to 70%?", a: "70% = 7/10 = 0.7" }
  ]
},
{
  id: "c9-t2", en: "9.2 Percentage Part of a Whole & Pie Charts",
  category: "Chapter 9: Percentage",
  tags: ["percentage", "pie-chart"],
  summary: "Finding a percentage of a quantity, and reading pie charts.",
  diagram: `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(75,75)">
      <path d="M0,0 L0,-60 A60,60 0 0 1 48.5,35.3 Z" style="fill:var(--accent);"/>
      <path d="M0,0 L48.5,35.3 A60,60 0 0 1 -35.3,48.5 Z" style="fill:var(--accent2);"/>
      <path d="M0,0 L-35.3,48.5 A60,60 0 0 1 0,-60 Z" style="fill:var(--chip-bg);stroke:var(--border);stroke-width:1;"/>
    </g>
    <circle cx="150" cy="30" r="5" style="fill:var(--accent);"/>
    <text x="160" y="34" style="fill:var(--text);font-size:11px;">Sports 35%</text>
    <circle cx="150" cy="55" r="5" style="fill:var(--accent2);"/>
    <text x="160" y="59" style="fill:var(--text);font-size:11px;">Art 25%</text>
    <circle cx="150" cy="80" r="5" style="fill:var(--chip-bg);stroke:var(--border);"/>
    <text x="160" y="84" style="fill:var(--text);font-size:11px;">Music 40%</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Percentage of a quantity = (%/100) &times; quantity.</li>
      <li>Going the <strong>other way</strong> &mdash; "what % is one number OF another?" &mdash; use: % = (part &divide; whole) &times; 100%.</li>
      <li>In a pie chart, all percentages (or parts) add up to 100% (the whole).</li>
      <li>Find a missing % or quantity using the 'total = 100%' relationship.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">What % is X of Y?  &rarr;  (X &divide; Y) &times; 100%</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> What percentage of 80 is 60?</p><p class="ex-steps">60 &divide; 80 = 0.75<br>0.75 &times; 100% = 75%</p>` }
  ],
  examples: [
    { q: "A pie chart: Sports 35%, Art 25%, the rest is Music. Out of 200 students, how many take Music?", a: "Music = 100&minus;35&minus;25 = 40%; 40/100&times;200 = 80 students" },
    { q: "Out of 320 students, 15% walk to school. How many students walk to school?", a: "15/100 &times; 320 = 48 students" },
    { q: "What percentage of 40 is 10?", a: "(10 &divide; 40) &times; 100% = 25%" },
    { q: "In a pie chart of 200 students' favourite subjects, 80 students chose Sports. What percentage slice of the pie chart is Sports?", a: "(80 &divide; 200) &times; 100% = 40% &mdash; so Sports takes up a 40% slice of the pie chart." },
    { q: "1780 contestants take part in a talent show. 45% of the contestants are adults and the rest are children. How many children are there?", a: "Children's percentage = 100% &minus; 45% = 55%. Children = 55/100 &times; 1780 = 979." },
    { q: "Mr Karm saves 40% of his salary and spends 3/10 of the remainder. What percentage of his salary does he spend?", a: "Remainder after saving = 100% &minus; 40% = 60%. He spends 3/10 of this remainder: 3/10 &times; 60% = 18%." }
  ]
},
{
  id: "c9-t3", en: "9.3 GST, Discount & Annual Interest",
  category: "Chapter 9: Percentage",
  tags: ["percentage", "gst", "discount", "interest"],
  summary: "Applying percentages to shopping and banking contexts.",
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Discount: Sale Price = Marked Price &minus; (Discount% &times; Marked Price).</li>
      <li>GST (tax) is added on: Final Price = Price + (GST% &times; Price).</li>
      <li>Annual (simple) Interest = Principal &times; Rate% &times; Number of years.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Interest = P &times; R% &times; T</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A $80 jacket has a 25% discount. Find the sale price.</p><p class="ex-steps">Discount = 25/100 &times; 80 = $20<br>Sale price = 80 &minus; 20 = $60</p>` },
    { h: "🌍 Maths Around Us", body: `<p style="margin:0 0 10px;">An LED (light emitting diode) bulb is an energy-efficient light bulb. LED bulbs use <strong>80% less electricity</strong> than conventional bulbs, and last longer too. <span style="color:var(--muted);font-size:0.85em;">(Source: NEA, 2023)</span></p>
      <div class="diagram-box" style="padding:10px 4px;margin:0 0 10px;"><svg viewBox="0 0 300 165" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(55,45)">
          <circle cx="0" cy="0" r="32" style="fill:var(--chip-bg);stroke:var(--text);stroke-width:2;"/>
          <path d="M-10,25 L10,25 L10,38 L-10,38 Z" style="fill:var(--muted);stroke:var(--text);stroke-width:1.5;"/>
          <line x1="-8" y1="30" x2="8" y2="30" style="stroke:var(--text);stroke-width:1;"/>
          <line x1="-8" y1="34" x2="8" y2="34" style="stroke:var(--text);stroke-width:1;"/>
          <path d="M-10,-10 L-4,10 M10,-10 L4,10" style="stroke:var(--muted);stroke-width:1.2;fill:none;"/>
          <text x="0" y="70" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">Conventional</text>
          <text x="0" y="86" text-anchor="middle" style="fill:var(--muted);font-size:12px;">$100/month</text>
        </g>
        <line x1="110" y1="45" x2="185" y2="45" style="stroke:var(--accent);stroke-width:2;"/>
        <path d="M178,39 L188,45 L178,51" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-linejoin:round;"/>
        <text x="147" y="33" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:600;">80% less</text>
        <g transform="translate(245,45)">
          <circle cx="0" cy="0" r="26" style="fill:var(--accent-bg);stroke:var(--accent);stroke-width:2;"/>
          <path d="M-8,20 L8,20 L8,32 L-8,32 Z" style="fill:var(--accent2);stroke:var(--text);stroke-width:1.5;"/>
          <line x1="-6" y1="24" x2="6" y2="24" style="stroke:var(--text);stroke-width:1;"/>
          <line x1="-6" y1="28" x2="6" y2="28" style="stroke:var(--text);stroke-width:1;"/>
          <text x="0" y="64" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">LED</text>
          <text x="0" y="80" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:700;">$20/month</text>
        </g>
        <text x="150" y="155" text-anchor="middle" style="fill:var(--muted);font-size:11px;">Save 80% of $100 = $80 a month</text>
      </svg></div>
      <p class="ex-q"><strong>Q:</strong> A family pays $100 a month for lighting using conventional bulbs. How much would they save by switching to LED bulbs?</p>
      <p class="ex-steps">LED bulbs use 80% less electricity, so the saving is 80% of the monthly bill.<br>Savings = 80/100 &times; $100 = $80<br>The family would save <strong>$80 a month</strong> (paying about $20 instead of $100).</p>` }
  ],
  examples: [
    { q: "A $2,000 deposit earns 2% interest per year. Find the interest after 3 years.", a: "2000 &times; 2% &times; 3 = $120" },
    { q: "A television is marked at $650 with 9% GST to be added. Find the total price to be paid.", a: "GST = 9/100 &times; 650 = $58.50; total = $708.50" },
    { q: "A family currently pays $60 a month for lighting with conventional bulbs. If LED bulbs use 80% less electricity, how much would their new monthly lighting cost be after switching?", a: "Savings = 80/100 &times; $60 = $48; new cost = $60 &minus; $48 = $12 a month." },
    { q: "The usual price of an oven was $450. During a sale, Suzanne paid $360 for it. What was the percentage discount given? (1) 20% (2) 25% (3) 75% (4) 80%", a: "Discount = 450 &minus; 360 = $90. Percentage discount = (90 &divide; 450) &times; 100% = 20%. Answer: (1) 20%." }
  ]
},
{
  id: "c9-t4", en: "Percentage More Than / Less Than (The 1% Method)",
  category: "Chapter 9: Percentage",
  subcategory: "tricky",
  tags: ["percentage", "unitary-method", "comparison", "word-problems", "more-than", "less-than"],
  summary: "Solving 'X% more/less than' comparison problems using the 1%-unitary method.",
  diagram: `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="35" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="100" y="35" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="140" y="35" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="180" y="35" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <text x="10" y="55" style="fill:var(--text);font-size:12px;font-weight:600;">Jenny</text>
    <text x="140" y="80" text-anchor="middle" style="fill:var(--muted);font-size:11px;">100% (400 dresses)</text>
    <rect x="60" y="95" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="100" y="95" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="140" y="95" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="180" y="95" width="40" height="30" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="220" y="95" width="40" height="30" style="fill:var(--accent2);stroke:var(--text);stroke-width:1.5;"/>
    <text x="14" y="115" style="fill:var(--text);font-size:12px;font-weight:600;">Ella</text>
    <text x="150" y="140" text-anchor="middle" style="fill:var(--muted);font-size:11px;">125% (500 dresses)</text>
    <text x="240" y="80" text-anchor="middle" style="fill:var(--accent2);font-size:10px;">25%</text>
    <text x="240" y="90" text-anchor="middle" style="fill:var(--accent2);font-size:10px;">more</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>If A is X% <strong>MORE</strong> than B, treat B as the base (100%): A's percentage = 100% + X%.</li>
      <li>If A is X% <strong>LESS</strong> than B, treat B as the base (100%): A's percentage = 100% &minus; X%.</li>
      <li>Add up everyone's percentage to find the <strong>total percentage</strong> &mdash; this can be more than 100% when comparing two people/items.</li>
      <li>Use the <strong>1% method</strong>: value of 1% = actual total &divide; total percentage. Then multiply by any percentage you need.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Value of 1% = Total &divide; Total%</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Jenny and Ella sewed dresses for a fashion show. Ella sewed 25% more dresses than Jenny. Together they sewed 900 dresses. How many dresses did Ella sew?</p><p class="ex-steps"><strong>Step 1</strong> &mdash; Percentage of dresses Ella sewed:<br>= 100% + 25%<br>= 125%<br><br><strong>Step 2</strong> &mdash; Total percentage of dresses sewed:<br>= 100% (Jenny) + 125% (Ella)<br>= 225%<br><br><strong>Step 3</strong> &mdash; Number of dresses represented by 1%:<br>225% &rarr; 900<br>1% &rarr; 900 &divide; 225<br>= 4<br><br><strong>Step 4</strong> &mdash; Number of dresses Ella sewed:<br>125% &rarr; 4 &times; 125<br>= <strong>500 dresses</strong></p>` }
  ],
  examples: [
    { q: "Using the same question: how many dresses did Jenny sew?", a: "100% &rarr; 4 &times; 100 = 400 dresses. (Check: 400 + 500 = 900 &check;, and 500 is 25% more than 400 since 400 &times; 1.25 = 500.)" },
    { q: "Ravi has 40% more marbles than Suresh. Together they have 480 marbles. How many marbles does Ravi have?", a: "Ravi's % = 100% + 40% = 140%. Total % = 100% + 140% = 240%. 1% = 480 &divide; 240 = 2. Ravi = 140 &times; 2 = 280 marbles. (Check: Suresh = 100 &times; 2 = 200; 200 + 280 = 480 &check;, and 200 &times; 1.4 = 280 &check;.)" },
    { q: "A shop sold 60% fewer umbrellas in February than in January. In January it sold 250 umbrellas. How many did it sell in February?", a: "February's % = 100% &minus; 60% = 40% of January's amount. February = 40/100 &times; 250 = 100 umbrellas." }
  ]
},
{
  id: "c9-t5", en: "Comparing Discounts & Successive Discounts",
  category: "Chapter 9: Percentage",
  subcategory: "tricky",
  tags: ["percentage", "discount", "comparison", "successive-discount", "word-problems"],
  summary: "Comparing discounted prices between two shops, and finding the price after a second (successive) discount.",
  diagram: `<div style="overflow-x:auto;"><table class="cmp" style="min-width:0;">
    <tr><th></th><th>Original Price</th><th>Discount</th><th>Discounted Price</th></tr>
    <tr><td>Shop X</td><td>$2000</td><td>15%</td><td>$1700</td></tr>
    <tr><td>Shop Y</td><td>$1850</td><td>10%</td><td>$1665</td></tr>
  </table></div><p style="text-align:center;color:var(--good);font-size:12px;margin:8px 0 0;font-weight:600;">Shop Y is cheaper, by $35</p>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>To compare deals, find the discounted price at each shop separately, then compare.</li>
      <li>Discounted price = (100% &minus; discount%) &times; original price.</li>
      <li>A <strong>further/successive discount</strong> is a SECOND, separate calculation &mdash; apply it to the already-discounted price, not the original price.</li>
      <li>Add up the individual prices to find the total amount paid for multiple items.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Discounted price = (100% &minus; discount%) &times; original price</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Shop X sells a tableware set at $2000 with a 15% discount. Shop Y sells the same set at $1850 with a 10% discount. (a) Which shop should Lois buy from to spend less? (b) Shop X gives a further 15% discount on a second set. Morris bought 2 sets from Shop X. How much did he pay in total?</p><p class="ex-steps"><strong>Step 1</strong> &mdash; Discounted price from Shop X:<br>100% &minus; 15% = 85%<br>= 85/100 &times; $2000<br>= $1700<br><br><strong>Step 2</strong> &mdash; Discounted price from Shop Y:<br>100% &minus; 10% = 90%<br>= 90/100 &times; $1850<br>= $1665<br>Since $1665 &lt; $1700, she should buy from <strong>Shop Y</strong>. (Part a)<br><br><strong>Step 3</strong> &mdash; Price of the second tableware set from Shop X (a further 15% off the already-discounted $1700):<br>= 85/100 &times; $1700<br>= $1445<br><br>Total amount paid = $1700 + $1445<br>= <strong>$3145</strong> (Part b)</p>` }
  ],
  examples: [
    { q: "A shop gives a 20% discount on a $500 item, and a further 10% discount if you buy a second one. If Ken buys 2 of these items, how much does he pay in total?", a: "First item: 80/100 &times; $500 = $400. Second item: a further 10% off $400 &rarr; 90/100 &times; $400 = $360. Total = $400 + $360 = $760." },
    { q: "Store A sells a bag at $80 with a 25% discount. Store B sells the same bag at $75 with a 20% discount. Which store offers the cheaper price?", a: "Store A: 75/100 &times; $80 = $60. Store B: 80/100 &times; $75 = $60. Both stores offer exactly the same price, $60 &mdash; a bigger % discount doesn't always mean a lower price!" },
    { q: "Shop P sells a lamp at $120 with a 25% discount. Shop Q sells the same lamp at $140 with a 30% discount. Which shop is cheaper, and by how much?", a: "Shop P: 75/100 &times; $120 = $90. Shop Q: 70/100 &times; $140 = $98. Shop P is cheaper, by $98 &minus; $90 = $8." }
  ]
},

{
  id: "c10-t1", en: "10.1 Types of Angles: Acute, Right & Obtuse",
  category: "Chapter 10: Angles",
  tags: ["angles", "classification", "acute", "obtuse", "right-angle"],
  summary: "Classifying an angle as acute, right or obtuse by comparing it to 90°.",
  diagram: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
    <g>
      <line x1="15" y1="95" x2="70" y2="95" style="stroke:var(--text);stroke-width:2;"/>
      <line x1="15" y1="95" x2="46.6" y2="50" style="stroke:var(--text);stroke-width:2;"/>
      <path d="M37,95 A22,22 0 0 0 27.6,77" style="fill:none;stroke:var(--accent);stroke-width:1.8;"/>
      <text x="40" y="82" style="fill:var(--accent);font-size:11px;">55&deg;</text>
      <text x="8" y="122" style="fill:var(--text);font-size:11px;">Acute (&lt;90&deg;)</text>
    </g>
    <g transform="translate(110,0)">
      <line x1="15" y1="95" x2="70" y2="95" style="stroke:var(--text);stroke-width:2;"/>
      <line x1="15" y1="95" x2="15" y2="40" style="stroke:var(--text);stroke-width:2;"/>
      <path d="M15,83 L27,83 L27,95" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
      <text x="31" y="88" style="fill:var(--accent);font-size:11px;">90&deg;</text>
      <text x="7" y="122" style="fill:var(--text);font-size:11px;">Right (=90&deg;)</text>
    </g>
    <g transform="translate(230,0)">
      <line x1="15" y1="95" x2="70" y2="95" style="stroke:var(--text);stroke-width:2;"/>
      <line x1="15" y1="95" x2="-20.4" y2="52.9" style="stroke:var(--text);stroke-width:2;"/>
      <path d="M37,95 A22,22 0 0 0 0.9,78.1" style="fill:none;stroke:var(--accent2);stroke-width:1.8;"/>
      <text x="-2" y="68" style="fill:var(--accent2);font-size:11px;">130&deg;</text>
      <text x="-6" y="122" style="fill:var(--text);font-size:11px;">Obtuse (&gt;90&deg;)</text>
    </g>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>An <strong>acute</strong> angle is less than 90&deg; &mdash; smaller than a right angle.</li>
      <li>A <strong>right</strong> angle is exactly 90&deg; &mdash; marked with a small square at the vertex.</li>
      <li>An <strong>obtuse</strong> angle is more than 90&deg; but less than 180&deg;.</li>
      <li>A <strong>straight</strong> angle is exactly 180&deg; &mdash; it looks like a straight line.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Acute &lt; 90&deg;&nbsp; &middot; &nbsp;Right = 90&deg;&nbsp; &middot; &nbsp;90&deg; &lt; Obtuse &lt; 180&deg;</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Classify 35&deg;, 90&deg;, 120&deg; and 180&deg;.</p><p class="ex-steps">35&deg; &rarr; acute (less than 90&deg;)<br>90&deg; &rarr; right angle<br>120&deg; &rarr; obtuse (between 90&deg; and 180&deg;)<br>180&deg; &rarr; straight angle</p>` }
  ],
  examples: [
    { q: "Is an angle of 72&deg; acute, right or obtuse?", a: "Acute &mdash; it is less than 90&deg;." },
    { q: "A door is opened so that the angle between the door and the wall is 110&deg;. Is this acute, right or obtuse?", a: "Obtuse &mdash; 110&deg; is more than 90&deg; but less than 180&deg;." },
    { q: "Classify each of these angles as acute, right or obtuse: 45&deg;, 90&deg;, 91&deg;, 179&deg;.", a: "45&deg; acute; 90&deg; right; 91&deg; obtuse; 179&deg; obtuse (still less than 180&deg;, the straight angle)." }
  ]
},
{
  id: "c10-t2", en: "10.2 Angles on a Line, at a Point & Vertically Opposite",
  category: "Chapter 10: Angles",
  tags: ["angles"],
  summary: "The 180°, 360° and vertically-opposite angle facts.",
  diagram: `<svg viewBox="0 0 300 205" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="100" x2="270" y2="100" style="stroke:var(--text);stroke-width:2;"/>
    <line x1="90" y1="20" x2="210" y2="180" style="stroke:var(--text);stroke-width:2;"/>
    <path d="M175,100 A25,25 0 0 0 160,79" style="fill:none;stroke:var(--accent);stroke-width:2;"/>
    <path d="M125,100 A25,25 0 0 1 140,121" style="fill:none;stroke:var(--accent);stroke-width:2;"/>
    <path d="M125,100 A25,25 0 0 0 140,79" style="fill:none;stroke:var(--accent2);stroke-width:2;"/>
    <path d="M175,100 A25,25 0 0 1 160,121" style="fill:none;stroke:var(--accent2);stroke-width:2;"/>
    <text x="185" y="90" style="fill:var(--accent);font-size:14px;font-weight:600;">a</text>
    <text x="105" y="118" style="fill:var(--accent);font-size:14px;font-weight:600;">a</text>
    <text x="98" y="90" style="fill:var(--accent2);font-size:14px;font-weight:600;">b</text>
    <text x="192" y="118" style="fill:var(--accent2);font-size:14px;font-weight:600;">b</text>
    <text x="150" y="200" text-anchor="middle" style="fill:var(--muted);font-size:12px;">vertically opposite angles are equal &middot; a + b = 180&deg;</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Angles on a straight line add up to 180&deg;.</li>
      <li>Angles all the way around a point add up to 360&deg;.</li>
      <li>When two straight lines intersect, they form <strong>two pairs</strong> of vertically opposite angles &mdash; each pair is equal.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Straight line = 180&deg;   &middot;   Full turn = 360&deg;</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> On a straight line: a + 65&deg; + 90&deg; = 180&deg;. Find a.</p><p class="ex-steps">a = 180 &minus; 65 &minus; 90 = 25&deg;</p>` }
  ],
  examples: [
    { q: "Three angles meet at a point: 110&deg;, 95&deg;, and x&deg;. Find x.", a: "x = 360 &minus; 110 &minus; 95 = 155&deg;" },
    { q: "Two straight lines intersect. One of the four angles formed is 118&deg;. Find the other three angles.", a: "Opposite angle = 118&deg;. The other two = 180 &minus; 118 = 62&deg; each." },
    { q: "Two straight lines cross at a point. One angle is 3 times the size of its adjacent angle (they lie on the same straight line). Find both angles.", a: "Let the smaller angle = x, the larger = 3x. x + 3x = 180 &rarr; x = 45&deg;. The angles are 45&deg; and 135&deg;." }
  ]
},
{
  id: "c10-t3", en: "10.3 Finding Unknown Angles",
  category: "Chapter 10: Angles",
  tags: ["angles", "problem-solving"],
  summary: "Combining angle facts to solve for unknowns in a diagram.",
  diagram: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="100" x2="270" y2="100" style="stroke:var(--text);stroke-width:2;"/>
    <line x1="90" y1="20" x2="210" y2="180" style="stroke:var(--text);stroke-width:2;"/>
    <path d="M175,100 A25,25 0 0 0 160,79" style="fill:none;stroke:var(--accent2);stroke-width:2;"/>
    <path d="M125,100 A25,25 0 0 1 140,121" style="fill:none;stroke:var(--accent2);stroke-width:2;"/>
    <path d="M125,100 A25,25 0 0 0 140,79" style="fill:none;stroke:var(--accent);stroke-width:2;"/>
    <path d="M175,100 A25,25 0 0 1 160,121" style="fill:none;stroke:var(--accent);stroke-width:2;"/>
    <text x="182" y="90" style="fill:var(--accent2);font-size:13px;font-weight:600;">48&deg;</text>
    <text x="90" y="118" style="fill:var(--accent2);font-size:13px;font-weight:600;">48&deg;</text>
    <text x="100" y="90" style="fill:var(--accent);font-size:14px;font-weight:600;">?</text>
    <text x="196" y="118" style="fill:var(--accent);font-size:14px;font-weight:600;">?</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Mark all known angles on the diagram first.</li>
      <li>Decide which rule applies: straight line (180&deg;), point (360&deg;), or vertically opposite (equal).</li>
      <li>Set up and solve an equation for the unknown angle.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Two lines cross; one angle is 48&deg;. Find the other 3 angles.</p><p class="ex-steps">Opposite angle = 48&deg; (vertically opposite)<br>Other two = 180 &minus; 48 = 132&deg; each</p>` }
  ],
  examples: [
    { q: "y and 73&deg; are vertically opposite. z is on the same straight line as y. Find y and z.", a: "y = 73&deg;;  z = 180 &minus; 73 = 107&deg;" },
    { q: "At a point, three angles are in the ratio 2:3:4 and together make a full turn. Find the smallest angle.", a: "Total parts = 9; 360 &divide; 9 = 40; smallest = 2 &times; 40 = 80&deg;" },
    { q: "At point O, three lines meet forming angles a, 90&deg; and b in order around the point, where a = b. Find a and b.", a: "a + 90 + b = 360 (angles at a point); since a = b: 2a = 270 &rarr; a = b = 135&deg;." }
  ]
},

{
  id: "c11-t1", en: "11.1 Types of Triangles",
  category: "Chapter 11: Properties of Triangles",
  tags: ["triangles", "classification"],
  summary: "Equilateral, isosceles, scalene and right-angled triangles.",
  diagram: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10,15)">
      <polygon points="35,0 70,60 0,60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <text x="35" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px;">Equilateral</text>
    </g>
    <g transform="translate(90,15)">
      <polygon points="35,0 65,60 5,60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <text x="35" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px;">Isosceles</text>
    </g>
    <g transform="translate(170,15)">
      <polygon points="10,0 68,25 30,60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <text x="35" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px;">Scalene</text>
    </g>
    <g transform="translate(250,15)">
      <polygon points="0,60 0,0 65,60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <path d="M0,52 L8,52 L8,60" style="fill:none;stroke:var(--text);stroke-width:1.5;"/>
      <text x="30" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px;">Right-angled</text>
    </g>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Equilateral: 3 equal sides, 3 equal angles (60&deg; each).</li>
      <li>Isosceles: 2 equal sides, 2 equal base angles.</li>
      <li>Scalene: no equal sides, no equal angles.</li>
      <li>Right-angled: has one 90&deg; angle.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> An isosceles triangle has a 40&deg; apex angle. Find the base angles.</p><p class="ex-steps">Base angles are equal: (180 &minus; 40) &divide; 2 = 70&deg; each</p>` }
  ],
  examples: [
    { q: "What is each angle of an equilateral triangle?", a: "60&deg; each (180 &divide; 3)" },
    { q: "An isosceles triangle has two equal angles of 55&deg; each. Find the third angle.", a: "180 &minus; 55 &minus; 55 = 70&deg;" }
  ]
},
{
  id: "c11-t2", en: "11.2 Angle Sum & Finding Unknown Angles",
  category: "Chapter 11: Properties of Triangles",
  tags: ["triangles", "angle-sum"],
  summary: "The 3 angles of a triangle always add up to 180°.",
  diagram: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 210,140 90,140" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
    <text x="150" y="45" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:600;">a</text>
    <text x="105" y="132" style="fill:var(--accent2);font-size:12px;font-weight:600;">b</text>
    <text x="188" y="132" style="fill:var(--text);font-size:12px;font-weight:600;">c</text>
    <text x="150" y="165" text-anchor="middle" style="fill:var(--muted);font-size:14px;">&#8595;</text>
    <line x1="60" y1="188" x2="240" y2="188" style="stroke:var(--text);stroke-width:2;"/>
    <path d="M100,188 A20,20 0 0 1 116,171" style="fill:none;stroke:var(--accent2);stroke-width:2;"/>
    <path d="M116,171 A20,20 0 0 1 145,171" style="fill:none;stroke:var(--text);stroke-width:2;"/>
    <path d="M145,171 A20,20 0 0 1 180,188" style="fill:none;stroke:var(--accent);stroke-width:2;"/>
    <text x="103" y="183" style="fill:var(--accent2);font-size:11px;">b</text>
    <text x="128" y="163" style="fill:var(--text);font-size:11px;">c</text>
    <text x="163" y="183" style="fill:var(--accent);font-size:11px;">a</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>The 3 angles inside any triangle always add up to 180&deg;.</li>
      <li>Combine this with known facts (isosceles, equilateral, right-angle) to find unknowns.</li>
      <li>Shortcut: an exterior angle equals the sum of the two interior opposite angles.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">&ang;A + &ang;B + &ang;C = 180&deg;</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Two angles of a triangle are 55&deg; and 65&deg;. Find the third.</p><p class="ex-steps">180 &minus; 55 &minus; 65 = 60&deg;</p>` }
  ],
  examples: [
    { q: "A right-angled triangle has one other angle of 35&deg;. Find the third angle.", a: "180 &minus; 90 &minus; 35 = 55&deg;" },
    { q: "In triangle ABC, angle A is twice angle B, and angle C is 90&deg;. Find angles A and B.", a: "A + B = 90&deg;; since A = 2B, 2B + B = 90 &rarr; B = 30&deg;, A = 60&deg;" }
  ]
},
{
  id: "c11-t3", en: "11.3 Drawing Triangles",
  category: "Chapter 11: Properties of Triangles",
  tags: ["triangles", "construction"],
  summary: "Constructing triangles with a ruler and protractor from given sides/angles.",
  diagram: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="130" x2="180" y2="130" style="stroke:var(--text);stroke-width:2;"/>
    <text x="105" y="150" text-anchor="middle" style="fill:var(--text);font-size:12px;">6 cm</text>
    <path d="M60,130 A20,20 0 0 0 46,113" style="fill:none;stroke:var(--accent);stroke-width:1.5;"/>
    <text x="55" y="118" style="fill:var(--accent);font-size:11px;">90&deg;</text>
    <line x1="40" y1="130" x2="40" y2="30" style="stroke:var(--text);stroke-width:2;"/>
    <text x="12" y="82" style="fill:var(--text);font-size:12px;">8 cm</text>
    <line x1="40" y1="30" x2="180" y2="130" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3;"/>
    <text x="175" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px;">join to close the triangle</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Use a ruler for side lengths and a protractor for angles.</li>
      <li>Common methods: 2 sides + included angle (SAS), 2 angles + a side (ASA), or 3 sides (SSS).</li>
      <li>Always check the drawn angles/sides match what was given.</li>
    </ul>` }
  ],
  examples: [
    { q: "Describe the steps to draw a triangle with sides 6cm, 8cm and an included angle of 90&deg;.", a: "Draw a 6cm line, use a protractor to mark 90&deg; at one end, draw an 8cm line along that angle, then join the two loose ends." },
    { q: "Given all three angles but no side lengths, why can't you draw one unique triangle?", a: "Three angles alone (AAA) fix the shape but not the size — many similar triangles of different sizes share the same three angles. You need at least one side length to fix a unique triangle." }
  ]
},

{
  id: "c12-t1", en: "12.1 Properties of Parallelogram & Rhombus",
  category: "Chapter 12: Properties of Parallelogram, Rhombus and Trapezium",
  tags: ["parallelogram", "rhombus", "quadrilaterals"],
  summary: "Opposite sides/angles and diagonal properties of parallelograms and rhombi.",
  diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">
    <g>
      <polygon points="20,130 110,130 140,40 50,40" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <text x="65" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px;">Parallelogram</text>
      <text x="45" y="90" style="fill:var(--accent);font-size:11px;">65&deg;</text>
      <text x="95" y="65" style="fill:var(--accent2);font-size:11px;">115&deg;</text>
    </g>
    <g transform="translate(170,0)">
      <polygon points="65,25 115,80 65,135 15,80" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
      <line x1="65" y1="25" x2="65" y2="135" style="stroke:var(--muted);stroke-width:1.3;stroke-dasharray:3 3;"/>
      <line x1="15" y1="80" x2="115" y2="80" style="stroke:var(--muted);stroke-width:1.3;stroke-dasharray:3 3;"/>
      <path d="M65,75 L60,80 L65,85 L70,80 Z" style="fill:none;stroke:var(--accent);stroke-width:1.3;"/>
      <text x="65" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px;">Rhombus</text>
    </g>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Parallelogram: opposite sides parallel & equal; opposite angles equal; adjacent angles add to 180&deg;.</li>
      <li>Rhombus: all 4 sides equal; opposite angles equal; diagonals bisect each other at right angles.</li>
      <li>In both shapes, the diagonals bisect each other (cut exactly in half).</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A parallelogram has one angle of 65&deg;. Find the other three angles.</p><p class="ex-steps">Opposite angle = 65&deg;<br>Adjacent angles = 180 &minus; 65 = 115&deg; each</p>` }
  ],
  examples: [
    { q: "A rhombus has one angle of 72&deg;. Find the other three angles.", a: "72&deg;, 108&deg;, 108&deg; (opposite equal, adjacent add to 180&deg;)" },
    { q: "A parallelogram has adjacent angles in the ratio 2:3. Find all four angles.", a: "2x + 3x = 180 &rarr; x = 36; angles = 72&deg;, 108&deg;, 72&deg;, 108&deg;" }
  ]
},
{
  id: "c12-t2", en: "12.2 Properties of Trapezium & Finding Unknown Angles",
  category: "Chapter 12: Properties of Parallelogram, Rhombus and Trapezium",
  tags: ["trapezium", "quadrilaterals"],
  summary: "Trapeziums have one pair of parallel sides; co-interior angles sum to 180°.",
  diagram: `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,120 220,120 180,40 100,40" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:2;stroke-linejoin:round;"/>
    <text x="90" y="35" style="fill:var(--muted);font-size:12px;">&#9656;</text>
    <text x="185" y="35" style="fill:var(--muted);font-size:12px;">&#9656;</text>
    <text x="42" y="124" style="fill:var(--muted);font-size:12px;">&#9656;</text>
    <text x="222" y="124" style="fill:var(--muted);font-size:12px;">&#9656;</text>
    <text x="80" y="90" style="fill:var(--accent);font-size:12px;">P</text>
    <text x="78" y="112" style="fill:var(--accent2);font-size:12px;">S</text>
    <text x="150" y="15" text-anchor="middle" style="fill:var(--muted);font-size:11px;">one pair of parallel sides (top &amp; bottom)</text>
    <text x="150" y="148" text-anchor="middle" style="fill:var(--muted);font-size:11px;">&ang;P + &ang;S = 180&deg; (same leg)</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>A trapezium has exactly one pair of parallel sides.</li>
      <li>Angles between the two parallel sides, on the same leg, add up to 180&deg;.</li>
      <li>Combine shape properties with angle-sum facts to solve for unknowns in figures.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Trapezium ABCD, AB&parallel;DC, &ang;A = 100&deg;. Find &ang;D.</p><p class="ex-steps">&ang;A and &ang;D are on the same leg: &ang;D = 180 &minus; 100 = 80&deg;</p>` }
  ],
  examples: [
    { q: "In a trapezium, one angle next to the parallel sides is 70&deg;. Find the angle directly above it on the same leg.", a: "180 &minus; 70 = 110&deg;" },
    { q: "In trapezium PQRS with PQ&parallel;SR, angle P = 65&deg; and angle Q = 72&deg;. Find angles S and R.", a: "S = 180 &minus; 65 = 115&deg;; R = 180 &minus; 72 = 108&deg;" }
  ]
},
{
  id: "c12-t3", en: "12.3 Drawing 4-Sided Figures",
  category: "Chapter 12: Properties of Parallelogram, Rhombus and Trapezium",
  tags: ["quadrilaterals", "construction"],
  summary: "Constructing parallelograms, rhombi and trapeziums step by step.",
  diagram: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="130" x2="140" y2="130" style="stroke:var(--text);stroke-width:2;"/>
    <text x="90" y="150" text-anchor="middle" style="fill:var(--text);font-size:12px;">5 cm</text>
    <path d="M40,130 A24,24 0 0 0 60,105" style="fill:none;stroke:var(--accent);stroke-width:1.5;"/>
    <text x="50" y="118" style="fill:var(--accent);font-size:11px;">60&deg;</text>
    <line x1="40" y1="130" x2="70" y2="78" style="stroke:var(--text);stroke-width:2;"/>
    <text x="30" y="100" style="fill:var(--text);font-size:12px;">3 cm</text>
    <line x1="70" y1="78" x2="170" y2="78" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3;"/>
    <line x1="140" y1="130" x2="170" y2="78" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3;"/>
    <text x="155" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px;">complete with sides parallel &amp; equal</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>Use given side lengths and angles with a ruler and protractor.</li>
      <li>Start with one side, then build up angle by angle using the shape's properties.</li>
      <li>Check opposite sides/angles match the shape's known properties before finishing.</li>
    </ul>` }
  ],
  examples: [
    { q: "Describe how to draw a parallelogram with sides 5cm and 3cm, and one angle of 60&deg;.", a: "Draw a 5cm base, mark 60&deg; at one end, draw a 3cm side along that angle, then draw the remaining two sides parallel and equal to the first two." },
    { q: "You are given a rhombus with a diagonal of 8cm and a side of 5cm. Describe one way to construct it.", a: "Draw the 8cm diagonal. From each end, use compasses set to 5cm to draw arcs above and below the diagonal. The arc intersections give the other two vertices — join up all four sides." }
  ]
},

{
  id: "c6-x1", en: "Fitting Whole Cubes into a Box (Non-Exact Fit)",
  category: "Chapter 6: Volume",
  subcategory: "tricky",
  tags: ["volume", "cubes", "non-routine", "psle-trap", "wrong-questions"],
  summary: "A 'trap' question: cubes must fit as WHOLE numbers along each edge — any leftover space is wasted, so you can't just divide total volumes.",
  diagram: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="30" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="110" y="30" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="170" y="30" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="50" y="90" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="110" y="90" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <rect x="170" y="90" width="60" height="60" style="fill:var(--accent-bg);stroke:var(--text);stroke-width:1.5;"/>
    <text x="80" y="65" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <text x="140" y="65" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <text x="200" y="65" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <text x="80" y="125" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <text x="140" y="125" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <text x="200" y="125" text-anchor="middle" style="fill:var(--accent);font-size:16px;font-weight:700;">&#10003;</text>
    <rect x="230" y="30" width="30" height="120" style="fill:var(--chip-bg);stroke:var(--muted);stroke-width:1.5;stroke-dasharray:3 2;"/>
    <text x="266" y="88" style="fill:var(--muted);font-size:10px;">&larr; 1cm</text>
    <text x="266" y="100" style="fill:var(--muted);font-size:10px;">wasted</text>
    <text x="140" y="168" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">7 cm</text>
    <text x="15" y="94" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600;">4 cm</text>
    <text x="140" y="16" text-anchor="middle" style="fill:var(--muted);font-size:11px;">top view (footprint): 3 &times; 2 = 6 cubes fit per layer</text>
  </svg>`,
  sections: [
    { h: "Key Points", body: `<ul>
      <li>When packing whole cubes into a box, work out how many WHOLE cubes fit along <strong>each edge separately</strong> &mdash; any leftover space smaller than one cube side is wasted.</li>
      <li>Cubes along an edge = the edge length &divide; cube side, <strong>rounded DOWN</strong> to a whole number (ignore the remainder).</li>
      <li>Total cubes = (cubes along length) &times; (cubes along breadth) &times; (cubes along height).</li>
      <li>Do NOT just divide the box's total volume by one cube's volume &mdash; that overcounts whenever a side does not divide exactly.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Cubes along an edge = &lfloor; edge length &divide; cube side &rfloor;  (round down)</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Chrystal wanted to fill a box (7cm &times; 4cm &times; ?cm) with 2-cm cubes. She could only fit a <em>maximum</em> of 18 cubes. What is a possible height of the box? (1) 3cm (2) 4cm (3) 6cm (4) 8cm</p><p class="ex-steps">Along the 7cm length: 7 &divide; 2 = 3.5 &rarr; only 3 whole cubes fit (6cm used, 1cm wasted)<br>Along the 4cm breadth: 4 &divide; 2 = 2 &rarr; exactly 2 whole cubes fit (no waste)<br>So each 2cm-tall layer holds 3 &times; 2 = 6 cubes<br>To reach a maximum of 18 cubes: 18 &divide; 6 = 3 layers needed<br>Height = 3 layers &times; 2cm = 6cm<br><br><strong>Check the options:</strong> height 8cm &rarr; 4 layers &rarr; 24 cubes (too many); height 4cm &rarr; 2 layers &rarr; 12 cubes (too few); height 3cm &rarr; 1 layer &rarr; 6 cubes (too few); height 6cm &rarr; 3 layers &rarr; exactly 18 cubes &check;<br><strong>Answer: (3) 6 cm</strong></p>` }
  ],
  examples: [
    { q: "A box measures 9cm by 5cm by 6cm. What is the maximum number of 2-cm cubes that can be packed into it?", a: "9 &divide; 2 = 4 whole (1cm wasted); 5 &divide; 2 = 2 whole (1cm wasted); 6 &divide; 2 = 3 whole (exact). Total = 4 &times; 2 &times; 3 = 24 cubes." },
    { q: "A box measures 10cm by 7cm by 4cm. What is the maximum number of 3-cm cubes that can be packed into it?", a: "10 &divide; 3 = 3 whole (1cm wasted); 7 &divide; 3 = 2 whole (1cm wasted); 4 &divide; 3 = 1 whole (1cm wasted). Total = 3 &times; 2 &times; 1 = 6 cubes &mdash; even though the volumes (280cm&sup3; &divide; 27cm&sup3; &asymp; 10.4) might suggest more would fit!" }
  ]
}
];

const COMPARISONS = [
  {
    id: "triangle-types",
    title: "Types of Triangles — Equilateral vs Isosceles vs Scalene vs Right-angled",
    rows: [
      ["Sides", "All 3 equal", "2 equal", "None equal", "No requirement"],
      ["Angles", "All 60&deg;", "2 base angles equal", "All different", "One angle is 90&deg;"],
      ["Angle sum", "180&deg;", "180&deg;", "180&deg;", "180&deg;"],
      ["Lines of symmetry", "3", "1", "0", "0 (unless also isosceles)"],
      ["Quick check", "Given 1 side &rarr; know all 3", "Given apex angle &rarr; base angles = (180&minus;apex)&divide;2", "No shortcuts &mdash; use angle sum", "Use a&sup2;+b&sup2;=c&sup2; if it's the hypotenuse you need"]
    ]
  },
  {
    id: "quad-properties",
    title: "Parallelogram vs Rhombus vs Trapezium — Key Properties",
    rows: [
      ["Parallel sides", "2 pairs", "2 pairs", "Exactly 1 pair"],
      ["Side lengths", "Opposite sides equal", "All 4 sides equal", "No requirement"],
      ["Opposite angles", "Equal", "Equal", "Not necessarily equal"],
      ["Adjacent / co-interior angles", "Add up to 180&deg;", "Add up to 180&deg;", "Add up to 180&deg; (on the same leg, between the parallel sides)"],
      ["Diagonals", "Bisect each other", "Bisect each other at 90&deg;", "Do not generally bisect each other"]
    ]
  }
];

/* Fixed-order categorical palette for tree branch colours — dataviz-skill
   validated 8-slot theme, cycled once for the 12 chapters (same palette
   used across the RES mind maps, for visual consistency). */
const CATEGORY_PALETTE = [
  { light: "#2a78d6", dark: "#3987e5" }, // 1  blue
  { light: "#eb6834", dark: "#d95926" }, // 2  orange
  { light: "#1baf7a", dark: "#199e70" }, // 3  aqua
  { light: "#eda100", dark: "#c98500" }, // 4  yellow
  { light: "#e87ba4", dark: "#d55181" }, // 5  magenta
  { light: "#008300", dark: "#008300" }, // 6  green
  { light: "#4a3aa7", dark: "#9085e9" }, // 7  violet
  { light: "#e34948", dark: "#e66767" }, // 8  red
  { light: "#2a78d6", dark: "#3987e5" }, // 9  blue (cycled)
  { light: "#eb6834", dark: "#d95926" }, // 10 orange (cycled)
  { light: "#1baf7a", dark: "#199e70" }, // 11 aqua (cycled)
  { light: "#eda100", dark: "#c98500" }  // 12 yellow (cycled)
];

/* Fixed gold used for every chapter's nested "⭐ Tricky Questions" sub-branch,
   regardless of that chapter's own colour — marks it as a distinct, cross-
   cutting collection rather than another regular topic. */
const TRICKY_COLOR = { light: "#b8912a", dark: "#d4aa4a" };

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p5 = {
  root: "P5 Math",
  source: "试卷宝 · 数学五年级下学期试卷 — Chapters 1–12",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE,
  trickyColor: TRICKY_COLOR
};

})();
