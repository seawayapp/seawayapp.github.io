/* =====================================================================
   PSLE SCIENCE — PRIMARY 5 DATA SOURCE
   Loaded by ../mindmap.html (root -> chapter branch -> topic leaf).
   One topic per guiding question in the P5 textbook's table of contents.
   To add another level (P3/P4/P6), create data/p3.js etc. with the same
   shape and set ready: true for it in GRADES in mindmap.html.

   Topic shape:
   {
     id: "c<chapter>-t<n>" (unique),
     en: "<chapter>.<n> Guiding question",
     category: "Chapter N: Chapter Title"   (groups leaves into branches),
     theme: "Cycles" | "Systems" ...         (shown as a tag),
     page: textbook page of the chapter,
     tags: [...],
     summary: "1 sentence shown on the collapsed leaf node.",
     diagram: "<svg ...>"                    optional, themed with var(--text) etc.
     sections: [ { h: "Key Concepts", body }, { h: "Key Terms", body }, { h: "Common Mistakes", body } ],
     examples: [ { q, a }, ... ]             sample questions
   }
   ===================================================================== */
(function () {

const CH1 = "Chapter 1: Reproduction in Animals and Plants";
const CH2 = "Chapter 2: Cycles in Water";
const CH3 = "Chapter 3: Plant Transport System";
const CH4 = "Chapter 4: The Human Respiratory and Circulatory Systems";
const CH5 = "Chapter 5: Electrical Systems";
const CH6 = "Chapter 6: Simple Series and Parallel Electric Circuits";

const terms = list => `<ul>${list.map(([t, d]) => `<li><strong>${t}</strong> — ${d}</li>`).join('')}</ul>`;
const ul = list => `<ul>${list.map(x => `<li>${x}</li>`).join('')}</ul>`;

/* ── small themed diagrams ───────────────────────────────────────────── */
const S = 'style="fill:none;stroke:var(--text);stroke-width:2"';
const T = 'style="fill:var(--text);font-size:12px;font-family:sans-serif"';
const M = 'style="fill:var(--muted);font-size:11px;font-family:sans-serif"';

const DIAG_CELL = `<svg viewBox="0 0 300 170">
  <ellipse cx="150" cy="85" rx="120" ry="70" ${S}/>
  <circle cx="165" cy="80" r="26" style="fill:var(--accent-bg);stroke:var(--accent);stroke-width:2"/>
  <text x="165" y="84" text-anchor="middle" ${T}>nucleus</text>
  <text x="70" y="70" ${M}>cytoplasm</text>
  <text x="150" y="168" text-anchor="middle" ${M}>cell membrane (outer boundary)</text>
  <text x="165" y="128" text-anchor="middle" ${M}>genetic information in the nucleus</text>
</svg>`;

const DIAG_FLOWER = `<svg viewBox="0 0 300 200">
  <line x1="150" y1="195" x2="150" y2="110" ${S}/>
  <path d="M150 110 C 95 100, 85 45, 110 30" ${S}/>
  <path d="M150 110 C 205 100, 215 45, 190 30" ${S}/>
  <path d="M135 105 Q 150 60 165 105" style="fill:var(--accent-bg);stroke:var(--accent);stroke-width:2"/>
  <line x1="150" y1="65" x2="150" y2="35" style="stroke:var(--accent);stroke-width:2"/>
  <circle cx="150" cy="32" r="4" style="fill:var(--accent)"/>
  <line x1="128" y1="100" x2="118" y2="55" style="stroke:var(--accent2);stroke-width:2"/>
  <ellipse cx="117" cy="51" rx="6" ry="4" style="fill:var(--accent2)"/>
  <line x1="172" y1="100" x2="182" y2="55" style="stroke:var(--accent2);stroke-width:2"/>
  <ellipse cx="183" cy="51" rx="6" ry="4" style="fill:var(--accent2)"/>
  <text x="160" y="28" ${T}>stigma</text>
  <text x="160" y="88" ${M}>ovary (ovules)</text>
  <text x="200" y="55" ${M}>anther</text>
  <text x="20" y="40" ${M}>petal</text>
  <text x="20" y="150" ${M}>pistil = stigma + style + ovary</text>
  <text x="20" y="168" ${M}>stamen = anther + filament</text>
</svg>`;

const DIAG_STATES = `<svg viewBox="0 0 320 170">
  <rect x="10" y="60" width="70" height="40" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/>
  <text x="45" y="85" text-anchor="middle" ${T}>Ice (solid)</text>
  <rect x="125" y="60" width="70" height="40" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/>
  <text x="160" y="85" text-anchor="middle" ${T}>Water</text>
  <rect x="240" y="60" width="70" height="40" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/>
  <text x="275" y="85" text-anchor="middle" ${T}>Water vapour</text>
  <path d="M80 70 L125 70" ${S} marker-end="url(#a)"/><text x="102" y="58" text-anchor="middle" ${M}>melting</text>
  <path d="M125 92 L80 92" ${S} marker-end="url(#a)"/><text x="102" y="115" text-anchor="middle" ${M}>freezing</text>
  <path d="M195 70 L240 70" ${S} marker-end="url(#a)"/><text x="217" y="45" text-anchor="middle" ${M}>evaporation</text><text x="217" y="58" text-anchor="middle" ${M}>/ boiling</text>
  <path d="M240 92 L195 92" ${S} marker-end="url(#a)"/><text x="217" y="115" text-anchor="middle" ${M}>condensation</text>
  <text x="102" y="145" text-anchor="middle" style="fill:var(--accent2);font-size:11px;font-family:sans-serif">→ gains heat</text>
  <text x="217" y="145" text-anchor="middle" style="fill:var(--accent2);font-size:11px;font-family:sans-serif">← loses heat</text>
  <text x="102" y="160" text-anchor="middle" ${M}>0 °C</text><text x="217" y="160" text-anchor="middle" ${M}>100 °C (boiling)</text>
  <defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--text)"/></marker></defs>
</svg>`;

const DIAG_WATERCYCLE = `<svg viewBox="0 0 320 190">
  <defs><marker id="b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--accent)"/></marker></defs>
  <path d="M0 165 Q 80 150 160 165 T 320 165 L320 190 L0 190z" style="fill:var(--accent-bg);stroke:var(--accent)"/>
  <text x="60" y="183" ${T}>sea / lakes</text>
  <ellipse cx="200" cy="35" rx="55" ry="20" style="fill:var(--chip-bg);stroke:var(--muted)"/>
  <text x="200" y="39" text-anchor="middle" ${T}>clouds</text>
  <path d="M70 150 L 150 50" style="stroke:var(--accent);stroke-width:2;fill:none" marker-end="url(#b)"/>
  <text x="40" y="95" ${M}>evaporation</text><text x="40" y="108" ${M}>(sun heats water)</text>
  <text x="128" y="60" ${M}>condensation</text>
  <path d="M230 58 L 265 145" style="stroke:var(--accent);stroke-width:2;fill:none;stroke-dasharray:5 4" marker-end="url(#b)"/>
  <text x="252" y="95" ${M}>precipitation</text><text x="252" y="108" ${M}>(rain)</text>
  <path d="M280 160 Q 200 140 160 160" style="stroke:var(--accent);stroke-width:2;fill:none" marker-end="url(#b)"/>
  <text x="185" y="140" ${M}>flows back</text>
</svg>`;

const DIAG_PLANT = `<svg viewBox="0 0 300 200">
  <line x1="150" y1="190" x2="150" y2="40" style="stroke:var(--muted);stroke-width:14;stroke-linecap:round;opacity:.35"/>
  <path d="M150 70 Q 200 40 240 60 Q 200 85 150 70" style="fill:var(--accent-bg);stroke:var(--good)"/>
  <path d="M143 180 L143 60" style="stroke:var(--accent);stroke-width:3" marker-end="url(#c)"/>
  <path d="M157 60 L157 180" style="stroke:var(--accent2);stroke-width:3" marker-end="url(#d)"/>
  <text x="20" y="120" style="fill:var(--accent);font-size:12px;font-family:sans-serif">xylem ↑</text>
  <text x="20" y="136" ${M}>water + mineral salts</text><text x="20" y="150" ${M}>roots → leaves</text>
  <text x="185" y="120" style="fill:var(--accent2);font-size:12px;font-family:sans-serif">phloem ↓↑</text>
  <text x="185" y="136" ${M}>food (sugar)</text><text x="185" y="150" ${M}>leaves → all parts</text>
  <text x="200" y="50" ${M}>leaf makes food</text>
  <defs>
    <marker id="c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--accent)"/></marker>
    <marker id="d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--accent2)"/></marker>
  </defs>
</svg>`;

const DIAG_BLOOD = `<svg viewBox="0 0 320 180">
  <defs><marker id="e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--text)"/></marker></defs>
  <rect x="120" y="10" width="80" height="34" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="160" y="32" text-anchor="middle" ${T}>Lungs</text>
  <rect x="120" y="73" width="80" height="34" rx="8" style="fill:var(--chip-bg);stroke:var(--accent2)"/><text x="160" y="95" text-anchor="middle" ${T}>Heart</text>
  <rect x="120" y="136" width="80" height="34" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="160" y="158" text-anchor="middle" ${T}>Body cells</text>
  <path d="M200 30 Q 250 55 200 85" ${S} marker-end="url(#e)"/><text x="235" y="50" ${M}>oxygen-rich</text>
  <path d="M120 85 Q 70 55 120 30" ${S} marker-end="url(#e)"/><text x="20" y="50" ${M}>oxygen-poor</text>
  <path d="M200 98 Q 250 125 200 150" ${S} marker-end="url(#e)"/><text x="235" y="125" ${M}>oxygen-rich</text>
  <path d="M120 150 Q 70 125 120 98" ${S} marker-end="url(#e)"/><text x="5" y="125" ${M}>carbon dioxide-rich</text>
</svg>`;

const DIAG_SYMBOLS = `<svg viewBox="0 0 320 120">
  <g transform="translate(10,20)"><line x1="0" y1="20" x2="22" y2="20" ${S}/><line x1="22" y1="5" x2="22" y2="35" ${S}/><line x1="30" y1="12" x2="30" y2="28" style="stroke:var(--text);stroke-width:4"/><line x1="30" y1="20" x2="52" y2="20" ${S}/><text x="26" y="62" text-anchor="middle" ${M}>battery</text></g>
  <g transform="translate(85,20)"><line x1="0" y1="20" x2="15" y2="20" ${S}/><circle cx="30" cy="20" r="15" ${S}/><line x1="19" y1="9" x2="41" y2="31" ${S}/><line x1="41" y1="9" x2="19" y2="31" ${S}/><line x1="45" y1="20" x2="60" y2="20" ${S}/><text x="30" y="62" text-anchor="middle" ${M}>bulb</text></g>
  <g transform="translate(170,20)"><line x1="0" y1="20" x2="15" y2="20" ${S}/><circle cx="15" cy="20" r="3" style="fill:var(--text)"/><line x1="15" y1="20" x2="42" y2="6" ${S}/><circle cx="45" cy="20" r="3" style="fill:var(--text)"/><line x1="45" y1="20" x2="60" y2="20" ${S}/><text x="30" y="62" text-anchor="middle" ${M}>open switch</text></g>
  <g transform="translate(250,20)"><line x1="0" y1="20" x2="60" y2="20" ${S}/><text x="30" y="62" text-anchor="middle" ${M}>wire</text></g>
  <text x="160" y="110" text-anchor="middle" ${M}>Longer thin line of a cell = positive (+) terminal</text>
</svg>`;

const DIAG_SERIES_PARALLEL = `<svg viewBox="0 0 320 150">
  <text x="70" y="15" text-anchor="middle" ${T}>Series</text>
  <rect x="15" y="30" width="110" height="80" ${S}/>
  <circle cx="50" cy="30" r="9" style="fill:var(--panel);stroke:var(--text);stroke-width:2"/>
  <circle cx="90" cy="30" r="9" style="fill:var(--panel);stroke:var(--text);stroke-width:2"/>
  <line x1="60" y1="102" x2="60" y2="118" style="stroke:var(--text);stroke-width:2"/><line x1="68" y1="106" x2="68" y2="114" style="stroke:var(--text);stroke-width:4"/>
  <text x="70" y="138" text-anchor="middle" ${M}>one path for current</text>
  <text x="235" y="15" text-anchor="middle" ${T}>Parallel</text>
  <rect x="180" y="30" width="110" height="80" ${S}/>
  <line x1="180" y1="70" x2="290" y2="70" ${S}/>
  <circle cx="235" cy="30" r="9" style="fill:var(--panel);stroke:var(--text);stroke-width:2"/>
  <circle cx="235" cy="70" r="9" style="fill:var(--panel);stroke:var(--text);stroke-width:2"/>
  <line x1="225" y1="102" x2="225" y2="118" style="stroke:var(--text);stroke-width:2"/><line x1="233" y1="106" x2="233" y2="114" style="stroke:var(--text);stroke-width:4"/>
  <text x="235" y="138" text-anchor="middle" ${M}>each bulb on its own branch</text>
</svg>`;

/* ── topics ──────────────────────────────────────────────────────────── */
const TOPICS = [
/* Chapter 1 */
{
  id: "c1-t1", en: "1.1 What are cells and their role in reproduction?", category: CH1, theme: "Cycles", page: 2,
  tags: ["cells", "nucleus", "genetic-information"],
  summary: "The cell is the basic unit of life; its nucleus carries the genetic information passed on in reproduction.",
  diagram: DIAG_CELL,
  sections: [
    { h: "Key Concepts", body: ul([
      "All living things are made up of one or more <strong>cells</strong> — the basic unit of life.",
      "The <strong>nucleus</strong> controls the activities of the cell and contains <strong>genetic information</strong>.",
      "In reproduction, genetic information is passed from parents to offspring, so offspring have characteristics similar to their parents.",
      "Sex cells: the <strong>sperm</strong> (male) and <strong>egg</strong> (female) in humans; the <strong>pollen grain's male cell</strong> and the <strong>egg in the ovule</strong> in flowering plants."
    ]) },
    { h: "Key Terms", body: terms([
      ["Cell", "the smallest unit of a living thing"],
      ["Nucleus", "part of the cell that controls its activities and holds genetic information"],
      ["Genetic information", "instructions that decide an organism's characteristics, passed to the offspring"]
    ]) },
    { h: "Common Mistakes", body: ul(["Saying the cell membrane carries genetic information — it is the <strong>nucleus</strong>."]) }
  ],
  examples: [
    { q: "Why does a puppy look like its parents?", a: "It receives genetic information from both parents through the nuclei of the sperm and egg." },
    { q: "Which part of the cell contains genetic information?", a: "The nucleus." }
  ]
},
{
  id: "c1-t2", en: "1.2 Why do living things reproduce?", category: CH1, theme: "Cycles", page: 2,
  tags: ["life-cycle", "continuity"],
  summary: "Living things reproduce to ensure the continuity of their kind.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Every living thing eventually dies; reproduction produces <strong>new individuals</strong> to replace them.",
      "Reproduction ensures the <strong>continuity of the species</strong> — without it, the species would become extinct.",
      "Reproduction is part of the <strong>life cycle</strong>, so it is studied under the theme <em>Cycles</em>."
    ]) },
    { h: "Key Terms", body: terms([
      ["Reproduction", "the process by which living things produce young of their own kind"],
      ["Continuity of species", "the species keeps existing over many generations"],
      ["Extinct", "no more members of that kind of living thing are alive"]
    ]) }
  ],
  examples: [
    { q: "What would happen if a kind of animal stopped reproducing?", a: "When the existing members die, no new ones replace them, so that kind of animal would become extinct." }
  ]
},
{
  id: "c1-t3", en: "1.3 How do humans reproduce?", category: CH1, theme: "Cycles", page: 2,
  tags: ["fertilisation", "reproductive-system", "sperm", "egg"],
  summary: "A sperm fuses with an egg (fertilisation) to form a fertilised egg, which develops into a baby in the womb.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Male reproductive system</strong>: the <strong>testes</strong> produce sperm.",
      "<strong>Female reproductive system</strong>: the <strong>ovaries</strong> produce eggs; the <strong>womb (uterus)</strong> is where the baby develops.",
      "<strong>Fertilisation</strong> happens when the nucleus of a sperm fuses with the nucleus of an egg — in the <strong>egg tube (oviduct)</strong>.",
      "The fertilised egg develops into an <strong>embryo</strong>, then a <strong>foetus</strong>, in the womb. It gets food and oxygen from the mother through the <strong>umbilical cord</strong> and placenta.",
      "The baby gets genetic information from <strong>both</strong> parents."
    ]) },
    { h: "Key Terms", body: terms([
      ["Testis (testes)", "male organ that produces sperm"],
      ["Ovary", "female organ that produces eggs"],
      ["Fertilisation", "fusion of the male and female sex cells' nuclei"],
      ["Womb", "where the fertilised egg develops into a baby"],
      ["Umbilical cord", "connects the foetus to the mother; carries food and oxygen in, waste out"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Fertilisation does <strong>not</strong> happen in the womb — it happens in the egg tube.",
      "Many sperm reach the egg but only <strong>one</strong> sperm fertilises it."
    ]) }
  ],
  examples: [
    { q: "Name the process in which the sperm fuses with the egg, and where it takes place.", a: "Fertilisation; in the egg tube (oviduct)." },
    { q: "How does a developing foetus obtain oxygen?", a: "From the mother's blood, through the placenta and umbilical cord." }
  ]
},
{
  id: "c1-t4", en: "1.4 How do plants reproduce?", category: CH1, theme: "Cycles", page: 2,
  tags: ["pollination", "fertilisation", "seed-dispersal", "spores"],
  summary: "Flowering plants reproduce by seeds (pollination → fertilisation → fruit & seed → dispersal → germination); some plants use spores or parts of the plant.",
  diagram: DIAG_FLOWER,
  sections: [
    { h: "Key Concepts", body: ul([
      "Parts of a flower: <strong>stamen</strong> (anther + filament) is the male part; <strong>pistil</strong> (stigma + style + ovary) is the female part.",
      "<strong>Pollination</strong>: transfer of pollen grains from the anther to the stigma — by insects/animals, wind or water.",
      "<strong>Fertilisation</strong>: the male cell from the pollen grain fuses with the egg in the <strong>ovule</strong>.",
      "After fertilisation: the <strong>ovary becomes the fruit</strong>, the <strong>ovule becomes the seed</strong>; petals, stamens, stigma and style wither.",
      "<strong>Seed dispersal</strong> by wind, water, animals or splitting (explosive) — reduces overcrowding and competition for light, water, space and nutrients.",
      "<strong>Germination</strong> needs water, air (oxygen) and a suitable temperature — <em>not</em> light.",
      "Some plants reproduce from <strong>spores</strong> (ferns, mosses, mushrooms — a fungus) or from parts such as stems, leaves and roots (e.g. potato, bryophyllum)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Pollination", "pollen moves from anther to stigma"],
      ["Fertilisation", "male cell fuses with egg in the ovule"],
      ["Seed dispersal", "seeds are carried away from the parent plant"],
      ["Germination", "a seed starts to grow into a young plant"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Pollination ≠ fertilisation. Pollination is only the transfer of pollen.",
      "Insect-pollinated flowers: large, bright, scented, with nectar. Wind-pollinated: small, dull, no scent, light and many pollen grains, feathery stigma."
    ]) }
  ],
  examples: [
    { q: "After fertilisation, what does the ovary develop into? What does the ovule develop into?", a: "The ovary becomes the fruit; the ovule becomes the seed." },
    { q: "Fruit X is light and has wing-like structures. How is it most likely dispersed? Why is dispersal important?", a: "By wind. Dispersal moves seeds away from the parent so seedlings do not compete with the parent and each other for light, water, space and nutrients." },
    { q: "A seed is kept in a dark cupboard on damp cotton wool. Will it germinate?", a: "Yes — it has water, air and a suitable temperature. Light is not needed for germination." }
  ]
},
{
  id: "c1-t5", en: "1.5 How is sexual reproduction in flowering plants and in humans similar and different?", category: CH1, theme: "Cycles", page: 2,
  tags: ["compare", "fertilisation"],
  summary: "Both need a male and a female sex cell to fuse; the processes and where development happens differ.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Similar</strong>: both involve male and female sex cells; both involve <strong>fertilisation</strong> (fusion of nuclei); offspring get genetic information from both parents.",
      "<strong>Different</strong>: plants need <strong>pollination</strong> first; in humans the sperm swims to the egg.",
      "Plants: the fertilised egg develops into a <strong>seed</strong> inside a fruit; humans: it develops into a baby inside the <strong>womb</strong>.",
      "Many flowers have both male and female parts; humans have separate male and female individuals."
    ]) },
    { h: "Key Terms", body: terms([["Sexual reproduction", "reproduction involving the fusion of a male and a female sex cell"]]) }
  ],
  examples: [
    { q: "State one similarity and one difference between sexual reproduction in flowering plants and in humans.", a: "Similarity: both involve fertilisation of an egg by a male sex cell. Difference: plants need pollination before fertilisation; humans do not (the sperm swims to the egg)." }
  ]
},

/* Chapter 2 */
{
  id: "c2-t1", en: "2.1 What are the states of matter that water can exist in?", category: CH2, theme: "Cycles", page: 30,
  tags: ["states-of-matter", "solid", "liquid", "gas"],
  summary: "Water exists as solid (ice), liquid (water) and gas (water vapour/steam).",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Solid (ice)</strong>: definite shape and definite volume.",
      "<strong>Liquid (water)</strong>: no definite shape (takes the shape of its container) but definite volume.",
      "<strong>Gas (water vapour)</strong>: no definite shape and no definite volume; it is invisible.",
      "Steam seen above boiling water is actually tiny <strong>water droplets</strong> formed when water vapour condenses."
    ]) },
    { h: "Key Terms", body: terms([
      ["Water vapour", "water in the gaseous state — cannot be seen"],
      ["Matter", "anything that has mass and occupies space"]
    ]) },
    { h: "Common Mistakes", body: ul(["Saying \"we can see water vapour\" — the white mist is condensed water droplets."]) }
  ],
  examples: [
    { q: "Why does water take the shape of the cup it is poured into?", a: "Water is a liquid, which has no definite shape — it takes the shape of its container." }
  ]
},
{
  id: "c2-t2", en: "2.2 How does water change from one state to another?", category: CH2, theme: "Cycles", page: 30,
  tags: ["melting", "freezing", "evaporation", "boiling", "condensation", "heat"],
  summary: "Gaining heat: melting, evaporation/boiling. Losing heat: freezing, condensation.",
  diagram: DIAG_STATES,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Melting</strong> (solid → liquid) at 0 °C; <strong>freezing</strong> (liquid → solid) at 0 °C. Temperature stays at 0 °C while melting/freezing.",
      "<strong>Boiling</strong> at 100 °C — happens throughout the liquid, temperature stays at 100 °C.",
      "<strong>Evaporation</strong> happens at any temperature, only at the <strong>surface</strong>. Faster with higher temperature, more wind, larger exposed surface area, lower humidity.",
      "<strong>Condensation</strong>: water vapour loses heat when it touches a <strong>cooler surface</strong> and becomes water droplets (e.g. droplets outside a glass of ice water).",
      "Gain heat → melting, evaporation, boiling. Lose heat → freezing, condensation."
    ]) },
    { h: "Key Terms", body: terms([
      ["Melting point", "0 °C for pure water"],
      ["Boiling point", "100 °C for pure water"],
      ["Condensation", "water vapour loses heat to a cooler surface and turns into water"],
      ["Evaporation", "liquid water turns into water vapour at the surface, at any temperature"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Droplets outside a cold glass did <strong>not</strong> leak through the glass — they come from water vapour in the surrounding air.",
      "Evaporation does not need water to reach 100 °C."
    ]) }
  ],
  examples: [
    { q: "Water droplets form on the outside of a glass of iced water. Explain.", a: "Warmer water vapour in the surrounding air touches the cooler surface of the glass, loses heat and condenses into water droplets." },
    { q: "Wet clothes dry faster on a windy, sunny day. Give two reasons.", a: "Higher temperature and wind both increase the rate of evaporation of water from the clothes." }
  ]
},
{
  id: "c2-t3", en: "2.3 What is the water cycle and its importance?", category: CH2, theme: "Cycles", page: 30,
  tags: ["water-cycle", "evaporation", "condensation", "precipitation"],
  summary: "Water moves continuously by evaporation, condensation and precipitation, renewing Earth's fresh water.",
  diagram: DIAG_WATERCYCLE,
  sections: [
    { h: "Key Concepts", body: ul([
      "The Sun heats water in seas, rivers and lakes → water <strong>evaporates</strong> into water vapour, which rises.",
      "Higher up, water vapour loses heat to the cooler surroundings and <strong>condenses</strong> into tiny water droplets that form <strong>clouds</strong>.",
      "Droplets join into bigger, heavier drops and fall as <strong>rain</strong>, flowing back into rivers, lakes and seas.",
      "Plants also return water vapour to the air through their leaves (<strong>transpiration</strong>).",
      "Importance: the water cycle <strong>recycles</strong> water so there is a continuous supply of fresh water for living things."
    ]) },
    { h: "Key Terms", body: terms([
      ["Water cycle", "the continuous movement of water between the Earth's surface and the air"],
      ["Precipitation", "water falling from clouds as rain (or snow, hail)"]
    ]) }
  ],
  examples: [
    { q: "Explain how clouds are formed.", a: "Water vapour rises, loses heat to the cooler air high up and condenses into tiny water droplets, which gather to form clouds." },
    { q: "Why is the water cycle important to living things?", a: "It continuously recycles water, providing a steady supply of fresh water." }
  ]
},
{
  id: "c2-t4", en: "2.4 What is the importance of water to life processes?", category: CH2, theme: "Cycles", page: 30,
  tags: ["life-processes", "photosynthesis", "body-temperature"],
  summary: "Water is needed for photosynthesis, transport of substances, germination, and keeping the body cool.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Plants need water to make food (<strong>photosynthesis</strong>) and to keep cells firm (plant stays upright).",
      "Water is needed for <strong>germination</strong> of seeds.",
      "Water <strong>transports</strong> substances — blood is mostly water; water carries dissolved mineral salts in plants.",
      "Water helps <strong>digestion</strong> and removes waste (urine, sweat).",
      "<strong>Sweat</strong> evaporates from the skin, removing heat and cooling the body.",
      "Water is a <strong>habitat</strong> for many organisms."
    ]) },
    { h: "Key Terms", body: terms([
      ["Life processes", "activities carried out by living things — e.g. growth, reproduction, respiration, getting food"]
    ]) }
  ],
  examples: [
    { q: "How does sweating help us on a hot day?", a: "Sweat on the skin gains heat from the body and evaporates, removing heat and cooling the body." },
    { q: "A potted plant wilts when not watered. Why?", a: "It lost more water through its leaves than it absorbed, so its cells lost water and could not keep the plant upright." }
  ]
},
{
  id: "c2-t5", en: "2.5 What is the impact of water pollution?", category: CH2, theme: "Cycles", page: 30,
  tags: ["pollution", "conservation", "environment"],
  summary: "Pollution harms living things in and around water and reduces clean water; we must conserve and keep water clean.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Sources: rubbish, oil spills, chemicals and waste from factories, farms (fertilisers, pesticides), sewage.",
      "Effects: aquatic plants and animals die (less oxygen, poisoning); harmful substances pass along <strong>food chains</strong>; less clean water for people; spread of diseases.",
      "Oil on the water surface blocks sunlight (plants cannot photosynthesise) and stops oxygen dissolving into the water.",
      "Ways to help: do not litter; reduce, reuse, recycle; treat waste water; <strong>save water</strong> (shorter showers, fix leaks, reuse water).",
      "Singapore's water sources — the <strong>Four National Taps</strong>: local catchment, imported water, NEWater, desalinated water."
    ]) },
    { h: "Key Terms", body: terms([
      ["Pollution", "harmful substances added to the environment"],
      ["Water conservation", "using water wisely and not wasting it"]
    ]) }
  ],
  examples: [
    { q: "An oil spill covers the surface of a pond. Explain why the fish in the pond may die.", a: "The oil prevents oxygen in the air from dissolving into the water, and blocks sunlight so water plants cannot photosynthesise and give out oxygen. The fish lack oxygen." }
  ]
},

/* Chapter 3 */
{
  id: "c3-t1", en: "3.1 Why do plants have a transport system?", category: CH3, theme: "Systems", page: 62,
  tags: ["transport-system", "plant-parts"],
  summary: "To carry water and mineral salts up from the roots, and food from the leaves to all parts of the plant.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Roots take in water and mineral salts from the soil; leaves make food — these need to be moved to <strong>other parts</strong> of the plant.",
      "Every part of the plant needs food for energy and growth; leaves need water to make food.",
      "The <strong>plant transport system</strong> is made up of tubes: <strong>xylem</strong> and <strong>phloem</strong>, found in roots, stems and leaves (as veins)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Transport system", "a system of tubes that carries substances to different parts of a living thing"],
      ["Vascular bundle", "a group of xylem and phloem tubes"]
    ]) }
  ],
  examples: [
    { q: "Why must food made in the leaves be transported to the roots?", a: "Root cells need food for energy to carry out life processes and grow, but roots cannot make food." }
  ]
},
{
  id: "c3-t2", en: "3.2 How are water and food transported in plants?", category: CH3, theme: "Systems", page: 62,
  tags: ["xylem", "phloem", "water-transport", "food-transport"],
  summary: "Xylem carries water and mineral salts upward from roots; phloem carries food from leaves to all parts.",
  diagram: DIAG_PLANT,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Water-carrying tubes (xylem)</strong>: carry water and dissolved mineral salts from the roots <strong>up</strong> to the stem, leaves, flowers and fruits — one direction.",
      "<strong>Food-carrying tubes (phloem)</strong>: carry food (sugar) made in the leaves to <strong>all</strong> other parts — up and down.",
      "In a dicot stem, xylem is on the <strong>inner</strong> side and phloem on the <strong>outer</strong> side of the bundle.",
      "Dyed-water experiment: a celery stalk / white flower in coloured water shows the xylem stained — evidence that water travels up in the xylem."
    ]) },
    { h: "Key Terms", body: terms([
      ["Xylem", "tubes carrying water and mineral salts from roots to other parts"],
      ["Phloem", "tubes carrying food from the leaves to other parts"]
    ]) }
  ],
  examples: [
    { q: "A white flower is placed in blue-dyed water. After some time its petals turn blue. Explain.", a: "The blue water is absorbed and carried up the stem by the water-carrying tubes (xylem) to the petals." }
  ]
},
{
  id: "c3-t3", en: "3.3 What happens if parts of the plant transport system are removed?", category: CH3, theme: "Systems", page: 62,
  tags: ["ringing", "xylem", "phloem", "experiment"],
  summary: "Removing a ring of bark (phloem) stops food going down — the part above swells; cutting xylem makes the parts above wilt.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>ring of bark</strong> removed from a tree stem removes the <strong>phloem</strong> (xylem stays).",
      "Food from the leaves cannot pass downward → it collects <strong>above the ring</strong>, which <strong>swells</strong>; parts below get no food.",
      "The roots eventually die from lack of food → no water is absorbed → the whole plant dies.",
      "The leaves do <strong>not</strong> wilt immediately because the xylem still carries water up.",
      "If the <strong>xylem</strong> is removed/blocked, water cannot reach the parts above → leaves <strong>wilt</strong>."
    ]) },
    { h: "Key Terms", body: terms([["Ringing / girdling", "removing a ring of bark (with the phloem) from a stem"]]) }
  ],
  examples: [
    { q: "A ring of bark was removed from a stem. Some weeks later, the region just above the ring became swollen. Explain.", a: "Removing the bark removed the food-carrying tubes. Food made in the leaves moving down could not pass the ring, so it accumulated above the ring, causing swelling." },
    { q: "Why did the leaves of that plant not wilt right away?", a: "The water-carrying tubes (xylem) were not removed, so water could still be carried up to the leaves." }
  ]
},

/* Chapter 4 */
{
  id: "c4-t1", en: "4.1 What is air made up of?", category: CH4, theme: "Systems", page: 75,
  tags: ["air", "oxygen", "carbon-dioxide", "nitrogen"],
  summary: "Air is a mixture of gases — mostly nitrogen, then oxygen, with small amounts of carbon dioxide, water vapour and others.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Air is a <strong>mixture</strong>: about <strong>78% nitrogen</strong>, <strong>21% oxygen</strong>, 0.04% carbon dioxide, plus water vapour and other gases.",
      "<strong>Exhaled air</strong> has <strong>less oxygen</strong>, <strong>more carbon dioxide</strong> and more water vapour than inhaled air; it is also warmer.",
      "The amount of nitrogen stays about the same in inhaled and exhaled air.",
      "Limewater turns <strong>chalky</strong> with carbon dioxide — exhaled air turns it chalky faster."
    ]) },
    { h: "Key Terms", body: terms([
      ["Inhaled air", "air breathed in"],
      ["Exhaled air", "air breathed out"],
      ["Limewater", "a test for carbon dioxide — turns chalky (milky)"]
    ]) },
    { h: "Common Mistakes", body: ul(["Exhaled air still contains oxygen (about 16%) — not \"only carbon dioxide\"."]) }
  ],
  examples: [
    { q: "Which gas makes up most of the air?", a: "Nitrogen (about 78%)." },
    { q: "Air is blown into limewater through a straw. What will be observed and why?", a: "The limewater turns chalky because exhaled air contains more carbon dioxide." }
  ]
},
{
  id: "c4-t2", en: "4.2 How does gaseous exchange take place in the body?", category: CH4, theme: "Systems", page: 75,
  tags: ["respiratory-system", "lungs", "air-sacs", "gaseous-exchange"],
  summary: "In the air sacs of the lungs, oxygen passes into the blood and carbon dioxide passes out of the blood.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Path of air: <strong>nose → windpipe → lungs (air tubes) → air sacs</strong>.",
      "The nose has hair and mucus that trap dust and germs and warms/moistens the air.",
      "<strong>Air sacs</strong> have thin walls and are surrounded by many <strong>blood capillaries</strong> — this gives a large surface for gaseous exchange.",
      "<strong>Oxygen</strong> moves from the air sacs into the blood; <strong>carbon dioxide</strong> moves from the blood into the air sacs and is breathed out.",
      "Breathing in: chest expands, air goes in. Breathing out: chest contracts, air goes out.",
      "Other animals: fish use <strong>gills</strong>; insects use <strong>breathing holes (spiracles)</strong> and air tubes. Plants exchange gases through <strong>stomata</strong> on the leaves."
    ]) },
    { h: "Key Terms", body: terms([
      ["Respiratory system", "organs that take in oxygen and remove carbon dioxide"],
      ["Air sacs", "tiny sacs in the lungs where gaseous exchange happens"],
      ["Gaseous exchange", "oxygen is taken in and carbon dioxide is given out"],
      ["Gills / spiracles / stomata", "breathing structures in fish / insects / leaves"]
    ]) }
  ],
  examples: [
    { q: "Where in the body does gaseous exchange take place?", a: "In the air sacs of the lungs." },
    { q: "How are fish able to take in oxygen?", a: "Water passes over the gills; oxygen dissolved in the water passes into the blood in the gills." }
  ]
},
{
  id: "c4-t3", en: "4.3 How are oxygen and carbon dioxide transported in the body?", category: CH4, theme: "Systems", page: 75,
  tags: ["circulatory-system", "heart", "blood", "blood-vessels"],
  summary: "The heart pumps blood through blood vessels: oxygen from the lungs to body cells, carbon dioxide from cells back to the lungs.",
  diagram: DIAG_BLOOD,
  sections: [
    { h: "Key Concepts", body: ul([
      "The <strong>circulatory system</strong> = heart + blood + blood vessels.",
      "The <strong>heart</strong> is a muscular pump; heartbeat can be felt as the <strong>pulse</strong>.",
      "<strong>Blood</strong> carries oxygen, digested food and water to all parts of the body, and carries carbon dioxide and other waste away.",
      "Oxygen-rich blood: lungs → heart → body. Carbon dioxide-rich blood: body → heart → lungs.",
      "During exercise, the body cells need more energy → <strong>breathing rate and heart rate (pulse) increase</strong> to deliver more oxygen and remove more carbon dioxide."
    ]) },
    { h: "Key Terms", body: terms([
      ["Circulatory system", "transports substances around the body"],
      ["Blood vessels", "tubes that carry blood around the body"],
      ["Pulse rate", "number of heartbeats per minute"]
    ]) },
    { h: "Common Mistakes", body: ul(["Saying the heart \"makes\" oxygen — it only pumps blood. Oxygen enters the blood in the lungs."]) }
  ],
  examples: [
    { q: "Why does your pulse rate go up when you run?", a: "Muscles need more energy, so the heart pumps faster to carry more oxygen and digested food to them and remove more carbon dioxide." }
  ]
},
{
  id: "c4-t4", en: "4.4 How do systems work together for the survival of living things?", category: CH4, theme: "Systems", page: 75,
  tags: ["systems", "integration", "digestive", "respiratory", "circulatory"],
  summary: "The digestive, respiratory and circulatory systems work together to supply cells with food and oxygen for energy.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Body cells need <strong>digested food + oxygen</strong> to release <strong>energy</strong>.",
      "<strong>Digestive system</strong> breaks food down; digested food is absorbed into the blood in the small intestine.",
      "<strong>Respiratory system</strong> takes oxygen into the blood and removes carbon dioxide.",
      "<strong>Circulatory system</strong> carries food and oxygen to cells and carries waste away.",
      "<strong>Skeletal and muscular systems</strong> support the body and allow movement.",
      "If one system fails, the others cannot work properly — e.g. blocked air tubes mean less oxygen reaches cells."
    ]) },
    { h: "Key Terms", body: terms([["System", "a group of organs working together to perform a function"]]) }
  ],
  examples: [
    { q: "Explain how the respiratory and circulatory systems work together.", a: "The respiratory system takes oxygen into the lungs, where it enters the blood. The circulatory system then transports the oxygen to all body cells, and carries carbon dioxide back to the lungs to be breathed out." }
  ]
},

/* Chapter 5 */
{
  id: "c5-t1", en: "5.1 What is a simple electric circuit?", category: CH5, theme: "Systems", page: 104,
  tags: ["circuit", "battery", "bulb", "switch"],
  summary: "A closed path made of an energy source (battery), wires and a device such as a bulb, often with a switch.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Parts: <strong>battery (dry cell)</strong> — source of electrical energy; <strong>wires</strong> — carry current; <strong>bulb</strong> — converts electrical energy to light and heat; <strong>switch</strong> — opens/closes the circuit.",
      "A bulb has a <strong>filament</strong>; the circuit must pass through the bulb's two contact points.",
      "A battery has a positive (+) and negative (−) terminal; batteries in a row must be connected + to −."
    ]) },
    { h: "Key Terms", body: terms([
      ["Electric circuit", "a path through which electric current flows"],
      ["Electric current", "flow of electricity"],
      ["Filament", "thin coiled wire in a bulb that glows when current flows"]
    ]) }
  ],
  examples: [
    { q: "What is the function of the battery in a circuit?", a: "It is the source of electrical energy that makes current flow." }
  ]
},
{
  id: "c5-t2", en: "5.2 What allows current to flow in a simple electric circuit?", category: CH5, theme: "Systems", page: 104,
  tags: ["closed-circuit", "open-circuit"],
  summary: "Current only flows when the circuit is closed — an unbroken path from one battery terminal back to the other.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Closed circuit</strong>: no gaps — current flows, bulb lights up.",
      "<strong>Open circuit</strong>: there is a gap (open switch, loose wire, fused/broken filament) — no current, bulb does not light.",
      "A <strong>fused bulb</strong> has a broken filament, which opens the circuit.",
      "A <strong>short circuit</strong>: current takes an easier path that bypasses the bulb — the bulb does not light."
    ]) },
    { h: "Key Terms", body: terms([
      ["Closed circuit", "complete path; current flows"],
      ["Open circuit", "a break in the path; no current"],
      ["Short circuit", "current bypasses a component through a path with no device"]
    ]) }
  ],
  examples: [
    { q: "All parts of a circuit are connected but the bulb does not light up. Give two possible reasons.", a: "The bulb is fused (broken filament); the battery is flat; the switch is open; or there is a short circuit." }
  ]
},
{
  id: "c5-t3", en: "5.3 What types of materials allow current to flow in a closed circuit?", category: CH5, theme: "Systems", page: 104,
  tags: ["conductors", "insulators", "materials"],
  summary: "Electrical conductors (metals, graphite) allow current to flow; insulators (plastic, rubber, wood, glass) do not.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Conductors</strong>: allow current through — metals such as copper, iron, steel, aluminium, and graphite (pencil lead).",
      "<strong>Insulators</strong>: do not allow current through — plastic, rubber, wood, glass, cloth, paper, ceramic.",
      "Test: put the material in a gap of a circuit; if the bulb lights, it is a conductor.",
      "Wires: copper core (conductor) covered by plastic (insulator) for safety."
    ]) },
    { h: "Key Terms", body: terms([
      ["Electrical conductor", "material that allows electricity to pass through"],
      ["Electrical insulator", "material that does not allow electricity to pass through"]
    ]) },
    { h: "Common Mistakes", body: ul(["Not all metals are magnetic, but all metals conduct electricity — don't mix the two properties up."]) }
  ],
  examples: [
    { q: "Why is a wire made of copper covered with plastic?", a: "Copper is a good electrical conductor so current flows through it; plastic is an insulator that prevents electric shocks and short circuits." }
  ]
},
{
  id: "c5-t4", en: "5.4 How can a simple electric circuit be represented?", category: CH5, theme: "Systems", page: 104,
  tags: ["circuit-diagram", "symbols"],
  summary: "Circuit diagrams use standard symbols for battery, bulb, switch and wire.",
  diagram: DIAG_SYMBOLS,
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>circuit diagram</strong> uses symbols instead of drawings — clearer and quicker to draw.",
      "Battery: long thin line (+) and short thick line (−). Two or more batteries are drawn side by side.",
      "Bulb: circle with a cross. Switch: a gap with a lever (open) or a line (closed). Wire: straight line.",
      "Wires are drawn as straight lines with right-angled corners."
    ]) },
    { h: "Key Terms", body: terms([["Circuit diagram", "a drawing of a circuit using standard symbols"]]) }
  ],
  examples: [
    { q: "In a circuit diagram, how do you tell which end of a battery is positive?", a: "The longer, thinner line is the positive (+) terminal." }
  ]
},

/* Chapter 6 */
{
  id: "c6-t1", en: "6.1 How does the number of batteries affect the amount of current in a closed circuit?", category: CH6, theme: "Systems", page: 121,
  tags: ["batteries-in-series", "current", "brightness"],
  summary: "More batteries in series → more current → brighter bulbs (batteries used up faster).",
  sections: [
    { h: "Key Concepts", body: ul([
      "Batteries connected in <strong>series</strong> (+ to −) increase the amount of current: bulb is <strong>brighter</strong>.",
      "Batteries arranged in <strong>parallel</strong> give about the same brightness as one battery, but last <strong>longer</strong>.",
      "A battery connected the wrong way round (+ to +) works against the others — brightness drops.",
      "Brightness of a bulb shows the amount of current: brighter = more current."
    ]) },
    { h: "Key Terms", body: terms([["Current", "the amount of electricity flowing through a circuit"]]) }
  ],
  examples: [
    { q: "Circuit A has 1 battery and 1 bulb; circuit B has 2 batteries (in series) and 1 bulb. Which bulb is brighter? Why?", a: "B's bulb. Two batteries in series give a greater amount of current through the bulb." }
  ]
},
{
  id: "c6-t2", en: "6.2 How do the number and the arrangement of bulbs affect the amount of current in a closed circuit?", category: CH6, theme: "Systems", page: 121,
  tags: ["series", "parallel", "bulbs", "current"],
  summary: "More bulbs in series → dimmer and all go out if one fuses; bulbs in parallel → stay bright and work independently.",
  diagram: DIAG_SERIES_PARALLEL,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Series</strong>: one single path. Adding more bulbs in series → <strong>less current</strong> → each bulb is <strong>dimmer</strong>.",
      "In series, if one bulb fuses, the circuit is <strong>open</strong> and <strong>all</strong> bulbs go out.",
      "<strong>Parallel</strong>: each bulb is on its own branch. Each bulb is as bright as a single bulb with the same batteries.",
      "In parallel, if one bulb fuses, the <strong>others stay lit</strong>.",
      "A switch on a branch controls only that branch; a switch on the main path controls everything.",
      "Homes are wired in <strong>parallel</strong> so each appliance can be switched on/off on its own."
    ]) },
    { h: "Key Terms", body: terms([
      ["Series circuit", "components connected one after another in a single path"],
      ["Parallel circuit", "components connected on separate branches"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Tracing the path: in exam diagrams, check if removing a bulb opens the path for others — that decides series or parallel.",
      "Watch for short circuits: a wire across a bulb means that bulb won't light."
    ]) }
  ],
  examples: [
    { q: "Two bulbs are connected in series. One fuses. What happens to the other? Why?", a: "It goes out. The fused bulb breaks the only path, making the circuit open, so no current flows." },
    { q: "Why are the lights in a house connected in parallel?", a: "Each light can be switched on/off on its own, each gets full brightness, and if one bulb fuses the others still work." }
  ]
},
{
  id: "c6-t3", en: "6.3 How do we use electricity safely and wisely?", category: CH6, theme: "Systems", page: 121,
  tags: ["safety", "energy-saving", "conservation"],
  summary: "Avoid shocks and fires (dry hands, no overloading, no damaged wires) and save electricity.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Safety: never touch switches or plugs with <strong>wet hands</strong> (water conducts electricity); do not <strong>overload</strong> sockets; replace <strong>damaged/exposed wires</strong>; never poke objects into sockets.",
      "Overloading → too much current → wires heat up → <strong>fire</strong>.",
      "Save electricity: switch off lights and appliances when not in use; use energy-efficient appliances (more ticks on the energy label), LED bulbs; set air-con around 25 °C.",
      "Why save: electricity is generated mostly by burning fuels — this uses up resources and releases pollutants and carbon dioxide."
    ]) },
    { h: "Key Terms", body: terms([
      ["Electric shock", "current passing through the body"],
      ["Overloading", "too many appliances on one socket, drawing too much current"]
    ]) }
  ],
  examples: [
    { q: "Why is it dangerous to switch on a hair dryer with wet hands?", a: "Water (with dissolved impurities) conducts electricity, so current can pass through your body and give an electric shock." },
    { q: "Give two ways a family can use less electricity.", a: "Switch off lights and fans when leaving a room; use energy-efficient appliances / LED bulbs; set the air-conditioner to 25 °C." }
  ]
},
/* ✅ What I Have Learnt — one per chapter */
...[
  [CH1, "Cycles", 2, ["Living things are made up of cells; the nucleus contains genetic information.", "Living things reproduce to ensure the continuity of their kind.", "In humans, fertilisation takes place when a sperm fuses with an egg; the fertilised egg develops into a baby in the womb.", "In flowering plants, pollination is followed by fertilisation; the ovary develops into a fruit and the ovules into seeds.", "Seeds are dispersed by wind, water, animals or splitting; some plants reproduce by spores or plant parts.", "Sexual reproduction in plants and humans both involve the fusion of male and female sex cells."]],
  [CH2, "Cycles", 30, ["Water exists in three states: solid, liquid and gas.", "Water changes state when it gains or loses heat: melting, freezing, evaporation, boiling and condensation.", "The water cycle — evaporation, condensation and precipitation — ensures a continuous supply of fresh water.", "Water is essential for life processes.", "Water pollution harms living things; we must keep water clean and use it wisely."]],
  [CH3, "Systems", 62, ["Plants have a transport system to carry water, mineral salts and food to all parts.", "Water-carrying tubes (xylem) carry water and mineral salts from the roots to all other parts of the plant.", "Food-carrying tubes (phloem) carry food from the leaves to all other parts of the plant.", "Removing a ring of bark removes the food-carrying tubes: food collects above the ring, causing swelling, and parts below get no food."]],
  [CH4, "Systems", 75, ["Air is a mixture of gases, mainly nitrogen and oxygen, with some carbon dioxide and water vapour.", "The respiratory system takes in oxygen and removes carbon dioxide; gaseous exchange takes place in the air sacs of the lungs.", "Fish use gills, insects use breathing holes, and plants use tiny openings on the leaves to take in gases.", "The circulatory system (heart, blood, blood vessels) transports oxygen, digested food and waste around the body.", "The respiratory, circulatory and digestive systems work together so body cells get the oxygen and food they need."]],
  [CH5, "Systems", 104, ["An electric circuit needs a source of electrical energy, wires and electrical components.", "Electric current flows only in a closed circuit.", "Electrical conductors allow current to flow through them; electrical insulators do not.", "A circuit can be represented by a circuit diagram using symbols."]],
  [CH6, "Systems", 121, ["More batteries connected in series give more current, making bulbs brighter.", "Bulbs in series share one path: adding bulbs makes them dimmer, and if one fuses all go out.", "Bulbs in parallel each have their own path: they stay bright, and if one fuses the others stay lit.", "We must use electricity safely and save electricity."]]
].map(([cat, theme, page, pts], i) => ({
  id: "c" + (i + 1) + "-learnt", en: "✅ What I Have Learnt — Chapter " + (i + 1), category: cat, theme, page,
  tags: ["summary", "review"], summary: "Chapter " + (i + 1) + " key points in one place.",
  sections: [{ h: "What I Have Learnt", body: `<ul class="learnt">${pts.map(x => `<li>✅ ${x}</li>`).join('')}</ul>` }],
  examples: []
}))
];

const COMPARISONS = [
  {
    id: "cmp-repro", title: "Sexual reproduction — flowering plants vs humans",
    rows: [
      ["", "Flowering plants", "Humans"],
      ["Male sex cell", "Male cell in the pollen grain (from the anther)", "Sperm (from the testes)"],
      ["Female sex cell", "Egg in the ovule (in the ovary)", "Egg (from the ovary)"],
      ["Before fertilisation", "Pollination is needed", "Sperm swims to the egg"],
      ["Where fertilisation happens", "In the ovule", "In the egg tube"],
      ["Develops into", "Seed inside a fruit", "Baby inside the womb"]
    ]
  },
  {
    id: "cmp-states", title: "States of water",
    rows: [
      ["", "Solid (ice)", "Liquid (water)", "Gas (water vapour)"],
      ["Definite shape", "Yes", "No", "No"],
      ["Definite volume", "Yes", "Yes", "No"],
      ["Can be compressed", "No", "No", "Yes"]
    ]
  },
  {
    id: "cmp-transport", title: "Xylem vs phloem",
    rows: [
      ["", "Water-carrying tubes (xylem)", "Food-carrying tubes (phloem)"],
      ["Carries", "Water and mineral salts", "Food (sugar)"],
      ["From → to", "Roots → stem, leaves, flowers, fruits", "Leaves → all parts"],
      ["Direction", "Upward only", "Up and down"],
      ["If removed", "Parts above wilt", "Swelling above the cut; roots starve"]
    ]
  },
  {
    id: "cmp-air", title: "Inhaled vs exhaled air",
    rows: [
      ["", "Inhaled air", "Exhaled air"],
      ["Oxygen", "More (~21%)", "Less (~16%)"],
      ["Carbon dioxide", "Less (~0.04%)", "More (~4%)"],
      ["Water vapour", "Less", "More"],
      ["Nitrogen", "~78%", "~78% (no change)"],
      ["Temperature", "Cooler", "Warmer"]
    ]
  },
  {
    id: "cmp-circuit", title: "Series vs parallel circuits (same number of batteries)",
    rows: [
      ["", "Bulbs in series", "Bulbs in parallel"],
      ["Paths for current", "One", "More than one (branches)"],
      ["Brightness as bulbs are added", "Dimmer", "Each stays as bright"],
      ["If one bulb fuses", "All go out", "Others stay lit"],
      ["Batteries last", "Longer", "Shorter (more current drawn)"],
      ["Example", "Old festive light strings", "Lights in a home"]
    ]
  },
  {
    id: "cmp-conduct", title: "Conductors vs insulators",
    rows: [
      ["", "Electrical conductors", "Electrical insulators"],
      ["Current", "Flows through", "Does not flow through"],
      ["Examples", "Copper, iron, steel, aluminium, graphite", "Plastic, rubber, wood, glass, cloth"],
      ["Use", "Wire cores, plug pins", "Wire coverings, plug casings, switch covers"]
    ]
  }
];

const CATEGORY_PALETTE = [
  { light: "#e87ba4", dark: "#d55181" }, // 1 reproduction — magenta
  { light: "#2a78d6", dark: "#3987e5" }, // 2 water — blue
  { light: "#008300", dark: "#33a033" }, // 3 plant transport — green
  { light: "#e34948", dark: "#e66767" }, // 4 respiratory & circulatory — red
  { light: "#eda100", dark: "#c98500" }, // 5 electrical — yellow
  { light: "#4a3aa7", dark: "#9085e9" }  // 6 series & parallel — violet
];

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p5 = {
  root: "P5 Science",
  source: "Primary 5 Science textbook — Themes: Cycles (Ch 1–2), Systems (Ch 3–6)",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE,
  trickyColor: { light: "#b8912a", dark: "#d4aa4a" }
};

})();
