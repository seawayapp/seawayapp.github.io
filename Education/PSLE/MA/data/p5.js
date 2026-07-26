/* =====================================================================
   PSLE MATHEMATICS — PRIMARY 5 DATA SOURCE
   Loaded by ../index.html (visual mind-map: root -> chapter branch ->
   topic leaf, same engine as the RES mind maps). This is the ONLY place
   P5 content lives — to add a topic, append an object to TOPICS below.
   To add another grade later (P3/P4/P6), create data/p3.js etc. with the
   same three consts and register it in the GRADES map in index.html.

   Topic shape:
   {
     id: "c<chapter>-t<n>" (unique),
     en: "<chapter>.<n> Topic Title",
     category: "Chapter N: Chapter Title"  (groups leaves into branches),
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
  sections: [
    { h: "Key Points", body: `<ul>
      <li>'Per cent' (%) means 'out of 100'.</li>
      <li>Fraction or decimal &rarr; %: multiply by 100%.</li>
      <li>% &rarr; fraction: write over 100 and simplify. % &rarr; decimal: divide by 100.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">% = (part &divide; whole) &times; 100%</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Convert 3/4 and 0.6 to percentages.</p><p class="ex-steps">3/4 &times; 100% = 75%<br>0.6 &times; 100% = 60%</p>` }
  ],
  examples: [
    { q: "Convert 5/8 to a percentage; convert 8% to a decimal.", a: "62.5%;  0.08" },
    { q: "Convert 0.06 to a percentage, and convert 45% to a fraction in simplest form.", a: "6%;  45/100 = 9/20" }
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
      <li>In a pie chart, all percentages (or parts) add up to 100% (the whole).</li>
      <li>Find a missing % or quantity using the 'total = 100%' relationship.</li>
    </ul>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> Find 20% of 50 students.</p><p class="ex-steps">20/100 &times; 50 = 10 students</p>` }
  ],
  examples: [
    { q: "A pie chart: Sports 35%, Art 25%, the rest is Music. Out of 200 students, how many take Music?", a: "Music = 100&minus;35&minus;25 = 40%; 40/100&times;200 = 80 students" },
    { q: "Out of 320 students, 15% walk to school. How many students walk to school?", a: "15/100 &times; 320 = 48 students" }
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
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> A $80 jacket has a 25% discount. Find the sale price.</p><p class="ex-steps">Discount = 25/100 &times; 80 = $20<br>Sale price = 80 &minus; 20 = $60</p>` }
  ],
  examples: [
    { q: "A $2,000 deposit earns 2% interest per year. Find the interest after 3 years.", a: "2000 &times; 2% &times; 3 = $120" },
    { q: "A television is marked at $650 with 9% GST to be added. Find the total price to be paid.", a: "GST = 9/100 &times; 650 = $58.50; total = $708.50" }
  ]
},

{
  id: "c10-t1", en: "10.1 Angles on a Line, at a Point & Vertically Opposite",
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
      <li>Vertically opposite angles (formed by 2 crossing lines) are always equal.</li>
    </ul>` },
    { h: "Formula", body: `<div class="formula-box">Straight line = 180&deg;   &middot;   Full turn = 360&deg;</div>` },
    { h: "Worked Example", body: `<p class="ex-q"><strong>Q:</strong> On a straight line: a + 65&deg; + 90&deg; = 180&deg;. Find a.</p><p class="ex-steps">a = 180 &minus; 65 &minus; 90 = 25&deg;</p>` }
  ],
  examples: [
    { q: "Three angles meet at a point: 110&deg;, 95&deg;, and x&deg;. Find x.", a: "x = 360 &minus; 110 &minus; 95 = 155&deg;" },
    { q: "Two straight lines intersect. One of the four angles formed is 118&deg;. Find the other three angles.", a: "Opposite angle = 118&deg;. The other two = 180 &minus; 118 = 62&deg; each." }
  ]
},
{
  id: "c10-t2", en: "10.2 Finding Unknown Angles",
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
    { q: "At a point, three angles are in the ratio 2:3:4 and together make a full turn. Find the smallest angle.", a: "Total parts = 9; 360 &divide; 9 = 40; smallest = 2 &times; 40 = 80&deg;" }
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

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p5 = {
  root: "P5 Math",
  source: "试卷宝 · 数学五年级下学期试卷 — Chapters 1–12",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE
};

})();
