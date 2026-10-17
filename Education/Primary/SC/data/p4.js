/* =====================================================================
   PSLE SCIENCE — PRIMARY 4 DATA SOURCE
   Same shape as data/p5.js. One topic per guiding question in the P4
   textbook's table of contents, plus a "✅ What I Have Learnt" leaf that
   closes each chapter (id "c<n>-learnt").
   ===================================================================== */
(function () {

const CH1 = "Chapter 1: Plant System";
const CH2 = "Chapter 2: Human Systems";
const CH3 = "Chapter 3: Matter";
const CH4 = "Chapter 4: Light";
const CH5 = "Chapter 5: Shadows";
const CH6 = "Chapter 6: Heat";
const CH7 = "Chapter 7: Effects of Heat";

const terms = list => `<ul>${list.map(([t, d]) => `<li><strong>${t}</strong> — ${d}</li>`).join('')}</ul>`;
const ul = list => `<ul>${list.map(x => `<li>${x}</li>`).join('')}</ul>`;
const learnt = (n, cat, theme, page, pts) => ({
  id: "c" + n + "-learnt", en: "✅ What I Have Learnt — Chapter " + n, category: cat, theme, page,
  tags: ["summary", "review"], summary: "Chapter " + n + " key points in one place.",
  sections: [{ h: "What I Have Learnt", body: `<ul class="learnt">${pts.map(x => `<li>✅ ${x}</li>`).join('')}</ul>` }],
  examples: []
});

/* ── small themed diagrams ───────────────────────────────────────────── */
const S = 'style="fill:none;stroke:var(--text);stroke-width:2"';
const T = 'style="fill:var(--text);font-size:12px;font-family:sans-serif"';
const M = 'style="fill:var(--muted);font-size:11px;font-family:sans-serif"';
const ARROW = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:${c || 'var(--text)'}"/></marker></defs>`;

const DIAG_PLANT = `<svg viewBox="0 0 300 210">
  <line x1="150" y1="200" x2="150" y2="150" style="stroke:var(--muted);stroke-width:1"/>
  <path d="M150 150 L150 50" style="stroke:var(--good);stroke-width:4"/>
  <path d="M150 110 Q 200 80 235 100 Q 200 120 150 110" style="fill:var(--good-bg);stroke:var(--good);stroke-width:2"/>
  <path d="M150 85 Q 100 55 65 75 Q 100 95 150 85" style="fill:var(--good-bg);stroke:var(--good);stroke-width:2"/>
  <circle cx="150" cy="40" r="12" style="fill:var(--accent-bg);stroke:var(--accent2);stroke-width:2"/>
  <path d="M150 150 L130 185 M150 150 L170 190 M150 150 L150 195 M140 168 L122 172 M160 170 L180 172" style="stroke:var(--accent2);stroke-width:2;fill:none"/>
  <line x1="0" y1="152" x2="300" y2="152" style="stroke:var(--muted);stroke-dasharray:4 4"/>
  <text x="170" y="40" ${T}>flower</text><text x="245" y="104" ${T}>leaf</text><text x="160" y="140" ${T}>stem</text><text x="185" y="190" ${T}>roots</text>
  <text x="10" y="30" ${M}>flower → fruits &amp; seeds</text>
  <text x="10" y="120" ${M}>leaf → makes food</text>
  <text x="10" y="135" ${M}>stem → holds up, transports</text>
  <text x="10" y="200" ${M}>roots → hold, absorb water</text>
</svg>`;

const DIAG_DIGESTIVE = `<svg viewBox="0 0 320 220">${ARROW("dg")}
  ${[["Mouth", 20, "chew + saliva begins digestion"], ["Gullet", 52, "carries food to stomach"], ["Stomach", 84, "churns + digestive juices"], ["Small intestine", 116, "digestion completed; absorbed into blood"], ["Large intestine", 148, "water absorbed"], ["Anus", 180, "undigested food removed"]].map(([t, y, d], i) =>
    `<rect x="10" y="${y}" width="120" height="26" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="70" y="${y + 17}" text-anchor="middle" ${T}>${t}</text><text x="140" y="${y + 17}" ${M}>${d}</text>` +
    (i < 5 ? `<path d="M70 ${y + 26} L70 ${y + 32}" ${S} marker-end="url(#dg)"/>` : "")).join("")}
  <text x="160" y="212" text-anchor="middle" ${M}>Digestion: mouth, stomach, small intestine · no digestion in gullet or large intestine</text>
</svg>`;

const DIAG_SHADOW = `<svg viewBox="0 0 320 170">
  <circle cx="30" cy="85" r="12" style="fill:#eda100"/>
  <text x="30" y="115" text-anchor="middle" ${M}>light source</text>
  <line x1="42" y1="80" x2="300" y2="20" style="stroke:#eda100;stroke-width:1.5"/>
  <line x1="42" y1="90" x2="300" y2="150" style="stroke:#eda100;stroke-width:1.5"/>
  <rect x="125" y="58" width="12" height="54" style="fill:var(--text)"/>
  <text x="131" y="130" text-anchor="middle" ${M}>opaque object</text>
  <line x1="137" y1="58" x2="300" y2="33" style="stroke:#eda100;stroke-width:1.5;stroke-dasharray:4 3"/>
  <line x1="137" y1="112" x2="300" y2="137" style="stroke:#eda100;stroke-width:1.5;stroke-dasharray:4 3"/>
  <rect x="296" y="10" width="8" height="150" style="fill:var(--chip-bg);stroke:var(--muted)"/>
  <rect x="296" y="33" width="8" height="104" style="fill:var(--muted)"/>
  <text x="255" y="165" text-anchor="middle" ${M}>shadow on screen</text>
  <text x="215" y="85" text-anchor="middle" ${M}>light travels in straight lines</text>
</svg>`;

const DIAG_SEE = `<svg viewBox="0 0 320 140">${ARROW("ls", "#eda100")}
  <circle cx="30" cy="40" r="14" style="fill:#eda100"/><text x="30" y="72" text-anchor="middle" ${M}>light source</text>
  <rect x="150" y="90" width="40" height="30" rx="4" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="170" y="135" text-anchor="middle" ${M}>object</text>
  <ellipse cx="285" cy="45" rx="20" ry="12" ${S}/><circle cx="285" cy="45" r="5" style="fill:var(--text)"/><text x="285" y="75" text-anchor="middle" ${M}>eye</text>
  <path d="M44 48 L150 98" style="stroke:#eda100;stroke-width:2" marker-end="url(#ls)"/>
  <path d="M190 95 L265 52" style="stroke:#eda100;stroke-width:2" marker-end="url(#ls)"/>
  <text x="85" y="95" ${M}>1. light falls on object</text>
  <text x="225" y="100" ${M}>2. reflected into eye</text>
</svg>`;

const DIAG_THERMO = `<svg viewBox="0 0 300 200">
  <rect x="135" y="10" width="30" height="150" rx="15" ${S}/>
  <circle cx="150" cy="170" r="18" style="fill:#e34948"/>
  <rect x="144" y="70" width="12" height="100" style="fill:#e34948"/>
  ${[0, 20, 40, 60, 80, 100].map((v, i) => `<line x1="165" y1="${150 - i * 24}" x2="175" y2="${150 - i * 24}" ${S}/><text x="180" y="${154 - i * 24}" ${M}>${v} °C</text>`).join("")}
  <text x="40" y="60" ${M}>read at eye level,</text><text x="40" y="74" ${M}>bulb fully in liquid,</text><text x="40" y="88" ${M}>don't touch the bulb</text>
  <text x="40" y="170" ${M}>bulb: liquid expands</text><text x="40" y="184" ${M}>when it gains heat</text>
</svg>`;

const DIAG_HEATFLOW = `<svg viewBox="0 0 320 120">${ARROW("hf", "#e34948")}
  <rect x="20" y="30" width="100" height="56" rx="10" style="fill:#e34948;opacity:.85"/><text x="70" y="62" text-anchor="middle" style="fill:#fff;font-size:13px;font-family:sans-serif">Hotter</text>
  <rect x="200" y="30" width="100" height="56" rx="10" style="fill:#2a78d6;opacity:.85"/><text x="250" y="62" text-anchor="middle" style="fill:#fff;font-size:13px;font-family:sans-serif">Cooler</text>
  <path d="M125 58 L195 58" style="stroke:#e34948;stroke-width:3" marker-end="url(#hf)"/><text x="160" y="48" text-anchor="middle" ${T}>heat</text>
  <text x="160" y="110" text-anchor="middle" ${M}>Heat flows from a hotter place to a colder place until both are the same temperature</text>
</svg>`;

/* ── topics ──────────────────────────────────────────────────────────── */
const TOPICS = [
/* Chapter 1 */
{
  id: "c1-t1", en: "1.1 What are the parts of a plant and their functions?", category: CH1, theme: "Systems", page: 4,
  tags: ["roots", "stem", "leaves", "flowers", "fruits", "plant-system"],
  summary: "Roots, stem, leaves, flowers and fruits each have functions that keep the plant alive and help it reproduce.",
  diagram: DIAG_PLANT,
  sections: [
    { h: "Key Concepts", body: ul([
      "A plant is a <strong>system</strong>: its parts work together to keep it alive.",
      "<strong>Roots</strong>: hold the plant firmly in the soil; <strong>absorb water and mineral salts</strong>; some store food (carrot, sweet potato).",
      "<strong>Stem</strong>: holds the plant upright and holds the leaves up to get light; <strong>transports</strong> water and mineral salts up, and food from the leaves to other parts; some store food (potato, sugar cane).",
      "<strong>Leaves</strong>: <strong>make food</strong> for the plant using light, water and carbon dioxide (photosynthesis); the green colour helps trap light.",
      "<strong>Flowers</strong>: develop into <strong>fruits</strong>; <strong>fruits</strong> protect the <strong>seeds</strong>, which grow into new plants."
    ]) },
    { h: "Key Terms", body: terms([
      ["System", "parts working together to perform a function"],
      ["Absorb", "take in"],
      ["Transport", "carry from one part to another"],
      ["Photosynthesis", "how plants make food using light"]
    ]) },
    { h: "Common Mistakes", body: ul(["Roots do not make food — only the green parts (mostly leaves) make food."]) }
  ],
  examples: [
    { q: "State two functions of the roots.", a: "Hold the plant firmly in the soil; absorb water and mineral salts from the soil." },
    { q: "Why does the stem of a sunflower plant grow tall and upright?", a: "To hold the leaves up so they can get more light to make food." }
  ]
},
{
  id: "c1-t2", en: "1.2 How do the plant parts look in different plants?", category: CH1, theme: "Systems", page: 4,
  tags: ["tap-root", "fibrous-root", "stems", "leaf-shapes", "adaptations"],
  summary: "Plant parts vary: tap vs fibrous roots, strong vs weak stems, leaves of many shapes and sizes.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Roots</strong>: <strong>tap root</strong> — one main root with smaller side roots (e.g. balsam, rambutan); <strong>fibrous roots</strong> — many thin roots of similar size (e.g. grass, rice, onion).",
      "Some plants have <strong>aerial roots</strong> (orchid), <strong>prop roots</strong> (mangrove, maize) or <strong>clinging roots</strong> (money plant).",
      "<strong>Stems</strong>: <strong>strong/woody</strong> stems stand upright (trees); <strong>weak</strong> stems <strong>climb</strong> using tendrils or twining (morning glory) or <strong>creep</strong> along the ground (sweet potato).",
      "Some stems are <strong>underground</strong> (potato, ginger) or store water (cactus).",
      "<strong>Leaves</strong> differ in shape, size, edge and colour; cactus leaves are spines (reduce water loss); some plants have non-green leaves but still make food.",
      "<strong>Fruits</strong> can be <strong>fleshy</strong> (mango) or <strong>dry</strong> (peanut) and contain one or many seeds."
    ]) },
    { h: "Key Terms", body: terms([
      ["Tap root", "one main root with side roots"],
      ["Fibrous roots", "many thin roots of about the same size"],
      ["Climber / creeper", "plant with a weak stem that climbs a support / spreads along the ground"]
    ]) }
  ],
  examples: [
    { q: "How does a weak-stemmed plant like the morning glory get enough light?", a: "It twines/climbs around a support so its leaves are held up towards the light." },
    { q: "Name one plant with a tap root and one with fibrous roots.", a: "Tap root: balsam / chilli plant. Fibrous roots: grass / rice / onion." }
  ]
},
learnt(1, CH1, "Systems", 4, [
  "A plant is made up of parts: roots, stem, leaves, flowers and fruits.",
  "Roots hold the plant in the soil and absorb water and mineral salts.",
  "The stem holds the plant upright and transports water, mineral salts and food.",
  "Leaves make food for the plant.",
  "Flowers develop into fruits, which contain seeds that grow into new plants.",
  "The parts of plants look different in different plants, e.g. tap roots and fibrous roots, strong and weak stems."
]),

/* Chapter 2 */
{
  id: "c2-t1", en: "2.1 What are the systems that make up the human body and their functions?", category: CH2, theme: "Systems", page: 22,
  tags: ["organ-systems", "skeletal", "muscular", "respiratory", "circulatory", "digestive"],
  summary: "The body has many systems — skeletal, muscular, respiratory, circulatory, digestive — that work together.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Cells → organs → systems</strong>: an <strong>organ</strong> is a part that does a job; a <strong>system</strong> is a group of organs working together.",
      "<strong>Skeletal system</strong> (bones): supports the body, gives shape, <strong>protects</strong> organs (skull → brain, ribcage → heart and lungs), allows movement with muscles.",
      "<strong>Muscular system</strong> (muscles): works with bones to <strong>move</strong> the body.",
      "<strong>Respiratory system</strong> (nose, windpipe, lungs): takes in oxygen, removes carbon dioxide.",
      "<strong>Circulatory system</strong> (heart, blood vessels, blood): <strong>transports</strong> digested food, oxygen and water to all parts.",
      "<strong>Digestive system</strong>: breaks down food into simpler substances the body can absorb.",
      "All the systems <strong>work together</strong> — e.g. running needs muscles, bones, lungs and heart."
    ]) },
    { h: "Key Terms", body: terms([
      ["Organ", "a body part that performs a specific function, e.g. heart"],
      ["Organ system", "a group of organs working together"],
      ["Skeleton", "the framework of bones in the body"]
    ]) }
  ],
  examples: [
    { q: "Which system protects the brain? Name the organ involved.", a: "The skeletal system — the skull protects the brain." },
    { q: "Name two systems that work together when you kick a ball.", a: "Skeletal and muscular systems (also respiratory and circulatory to supply oxygen)." }
  ]
},
{
  id: "c2-t2", en: "2.2 What are the parts of the digestive system and their functions?", category: CH2, theme: "Systems", page: 22,
  tags: ["digestion", "mouth", "gullet", "stomach", "small-intestine", "large-intestine"],
  summary: "Mouth → gullet → stomach → small intestine → large intestine → anus; each part has a job.",
  diagram: DIAG_DIGESTIVE,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Digestion</strong>: breaking down food into simpler substances that can be absorbed into the blood.",
      "<strong>Mouth</strong>: teeth chew food into smaller pieces; <strong>saliva</strong> (a digestive juice) moistens food and starts digestion.",
      "<strong>Gullet (oesophagus)</strong>: muscular tube that pushes food to the stomach — <strong>no digestion</strong>.",
      "<strong>Stomach</strong>: muscular bag that churns food and mixes it with <strong>digestive juices</strong>.",
      "<strong>Small intestine</strong>: digestion is <strong>completed</strong>; digested food is <strong>absorbed into the blood</strong>.",
      "<strong>Large intestine</strong>: <strong>water</strong> (and mineral salts) is absorbed from undigested food — no digestion.",
      "<strong>Anus</strong>: undigested food leaves the body as faeces.",
      "<strong>Liver, pancreas, gall bladder</strong> help digestion by producing juices, but food does not pass through them."
    ]) },
    { h: "Key Terms", body: terms([
      ["Digestion", "breaking down food into simpler substances"],
      ["Digestive juices", "liquids that help break food down (e.g. saliva)"],
      ["Absorption", "digested food passing into the blood"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Digestion begins in the <strong>mouth</strong>, not the stomach.",
      "Digestion is <strong>completed</strong> in the small intestine; the large intestine only absorbs water."
    ]) }
  ],
  examples: [
    { q: "In which parts of the digestive system does digestion take place?", a: "Mouth, stomach and small intestine." },
    { q: "Where is digested food absorbed into the blood?", a: "In the small intestine." },
    { q: "What is the function of the large intestine?", a: "To absorb water from the undigested food." }
  ]
},
{
  id: "c2-t3", en: "2.3 How do the different parts of the digestive system work together?", category: CH2, theme: "Systems", page: 22,
  tags: ["digestive-system", "circulatory", "teamwork"],
  summary: "Each organ does part of the job in order; the digestive system also works with the circulatory system to deliver food to cells.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Food passes <strong>in order</strong> through the organs; each one does its part — chewing, carrying, churning, completing digestion, absorbing water, removing waste.",
      "If one part does not work well, the whole process is affected (e.g. a small intestine that cannot absorb well → body lacks nutrients).",
      "The digestive system works with the <strong>circulatory system</strong>: digested food in the blood is carried to all cells for energy and growth.",
      "Chewing well and drinking water help digestion; fibre helps food move through the intestines."
    ]) },
    { h: "Key Terms", body: terms([["Undigested food", "food that cannot be broken down, removed as faeces"]]) }
  ],
  examples: [
    { q: "How does the digestive system work with the circulatory system?", a: "Digested food is absorbed into the blood in the small intestine; the circulatory system then transports it to all parts of the body." },
    { q: "Why is it important to chew food well?", a: "Smaller pieces mix better with digestive juices and are digested more easily." }
  ]
},
learnt(2, CH2, "Systems", 22, [
  "The human body is made up of systems: skeletal, muscular, respiratory, circulatory and digestive.",
  "Each system is made up of organs that work together to perform a function.",
  "The digestive system breaks down food into simpler substances that can be absorbed by the body.",
  "The parts of the digestive system are the mouth, gullet, stomach, small intestine, large intestine and anus.",
  "Digestion takes place in the mouth, stomach and small intestine; digested food is absorbed in the small intestine.",
  "Water is absorbed in the large intestine; undigested food leaves through the anus.",
  "The systems of the body work together to keep us alive."
]),

/* Chapter 3 */
{
  id: "c3-t1", en: "3.1 What is matter?", category: CH3, theme: "Cycles", page: 42,
  tags: ["matter", "mass", "volume"],
  summary: "Matter is anything that has mass and occupies space.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Matter</strong> is anything that has <strong>mass</strong> and <strong>occupies space</strong> (has <strong>volume</strong>).",
      "Living and non-living things are made of matter — including <strong>air</strong> (an inflated balloon is heavier and takes up space).",
      "<strong>Not matter</strong>: light, heat, sound, shadows, thoughts — they have no mass and occupy no space."
    ]) },
    { h: "Key Terms", body: terms([
      ["Matter", "anything that has mass and occupies space"],
      ["Mass", "the amount of matter in an object"],
      ["Volume", "the amount of space a thing occupies"]
    ]) },
    { h: "Common Mistakes", body: ul(["Air <strong>is</strong> matter. Light and heat are <strong>not</strong>."]) }
  ],
  examples: [
    { q: "Is air matter? Give evidence.", a: "Yes. A pumped-up ball has more mass than a flat one, and air in a syringe takes up space." },
    { q: "Which is not matter: water, light, rock, air?", a: "Light." }
  ]
},
{
  id: "c3-t2", en: "3.2 What are the different states of matter around us?", category: CH3, theme: "Cycles", page: 42,
  tags: ["solid", "liquid", "gas", "compress"],
  summary: "Solids have fixed shape and volume; liquids fixed volume only; gases neither and can be compressed.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Solid</strong>: <strong>definite shape</strong> and <strong>definite volume</strong>; cannot be compressed.",
      "<strong>Liquid</strong>: <strong>no definite shape</strong> (takes the shape of its container), <strong>definite volume</strong>; cannot be compressed; flows.",
      "<strong>Gas</strong>: <strong>no definite shape</strong>, <strong>no definite volume</strong> — fills up the whole container; <strong>can be compressed</strong>.",
      "Powders (sugar, sand) are solids — each grain has a definite shape and volume."
    ]) },
    { h: "Key Terms", body: terms([
      ["State of matter", "solid, liquid or gas"],
      ["Compress", "squeeze into a smaller space"]
    ]) }
  ],
  examples: [
    { q: "Why can a syringe filled with air be pushed in, but not one filled with water?", a: "Gas can be compressed; liquid cannot." },
    { q: "Sand takes the shape of the cup. Why is it still a solid?", a: "Each grain of sand has a definite shape and volume." }
  ]
},
{
  id: "c3-t3", en: "3.3 How are mass and volume of different states of matter measured?", category: CH3, theme: "Cycles", page: 42,
  tags: ["measuring", "balance", "measuring-cylinder", "displacement"],
  summary: "Mass with a balance (g, kg); volume of liquids with a measuring cylinder (ml, l); irregular solids by displacement.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Mass</strong> is measured with an <strong>electronic balance</strong> or <strong>beam balance</strong>, in grams (g) or kilograms (kg).",
      "Volume of a <strong>liquid</strong>: <strong>measuring cylinder</strong> or beaker, in millilitres (ml), litres (l) or cm³. Read at <strong>eye level</strong> at the bottom of the curved surface (meniscus).",
      "Volume of a <strong>regular solid</strong> (cube/cuboid): length × breadth × height (cm³).",
      "Volume of an <strong>irregular solid</strong> (stone): <strong>displacement</strong> — rise in water level in a measuring cylinder = volume of the solid (it must sink and not absorb water).",
      "Volume of a <strong>gas</strong> = volume of its container.",
      "1 ml = 1 cm³; 1 l = 1000 ml; 1 kg = 1000 g."
    ]) },
    { h: "Key Terms", body: terms([
      ["Measuring cylinder", "instrument to measure the volume of a liquid"],
      ["Displacement", "an object pushes water aside when placed in it, raising the water level"]
    ]) },
    { h: "Common Mistakes", body: ul(["Reading the cylinder from above or below eye level gives a wrong reading."]) }
  ],
  examples: [
    { q: "The water level in a measuring cylinder rose from 50 ml to 72 ml when a stone was put in. What is the volume of the stone?", a: "72 − 50 = 22 cm³ (22 ml)." },
    { q: "A container of 500 ml is filled with air. What is the volume of the air?", a: "500 ml — a gas fills the whole container." }
  ]
},
learnt(3, CH3, "Cycles", 42, [
  "Matter is anything that has mass and occupies space.",
  "Matter exists in three states: solid, liquid and gas.",
  "A solid has a definite shape and volume; a liquid has a definite volume but no definite shape; a gas has no definite shape or volume.",
  "Gases can be compressed; solids and liquids cannot.",
  "Mass is measured using a balance; volume of liquids is measured using a measuring cylinder.",
  "The volume of an irregular solid can be found by displacement of water."
]),

/* Chapter 4 */
{
  id: "c4-t1", en: "4.1 Where does light come from?", category: CH4, theme: "Energy", page: 82,
  tags: ["light-source", "sun", "energy"],
  summary: "Light comes from light sources — things that give out light, like the Sun, fire and lamps.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Light is a form of <strong>energy</strong>.",
      "A <strong>light source</strong> gives out its own light: <strong>natural</strong> (Sun, stars, fire, fireflies, lightning) or <strong>man-made</strong> (light bulb, torch, candle flame, phone screen).",
      "The <strong>Sun</strong> is our main source of light.",
      "<strong>Not light sources</strong>: the <strong>Moon</strong> and mirrors only <strong>reflect</strong> light from other sources."
    ]) },
    { h: "Key Terms", body: terms([
      ["Light source", "something that gives out its own light"],
      ["Reflect", "bounce light back from a surface"]
    ]) },
    { h: "Common Mistakes", body: ul(["The Moon is <strong>not</strong> a light source — it reflects sunlight."]) }
  ],
  examples: [
    { q: "Is the Moon a light source? Explain.", a: "No. It does not give out its own light; it reflects light from the Sun." },
    { q: "Name two natural and two man-made light sources.", a: "Natural: Sun, fire / firefly. Man-made: light bulb, torch." }
  ]
},
{
  id: "c4-t2", en: "4.2 How does light help us see things around us?", category: CH4, theme: "Energy", page: 82,
  tags: ["reflection", "seeing", "eye", "mirror"],
  summary: "We see an object when light from it (given out or reflected) enters our eyes.",
  diagram: DIAG_SEE,
  sections: [
    { h: "Key Concepts", body: ul([
      "We see a <strong>light source</strong> when the light it gives out enters our eyes.",
      "We see a non-luminous object when light from a source falls on it and is <strong>reflected into our eyes</strong>.",
      "No light → we cannot see anything (a completely dark room).",
      "All objects reflect light; <strong>shiny, smooth</strong> surfaces (mirror, foil) reflect light better than dull, rough ones.",
      "Uses of reflection: mirrors, periscopes, reflective strips on vests, road safety mirrors."
    ]) },
    { h: "Key Terms", body: terms([
      ["Reflection", "light bouncing off a surface"]
    ]) },
    { h: "Common Mistakes", body: ul(["Light travels <strong>into</strong> the eye — the eye does not send out light."]) }
  ],
  examples: [
    { q: "Explain how Mei sees a book on her desk in a lit room.", a: "Light from the lamp falls on the book and is reflected into Mei's eyes." },
    { q: "Why do road workers wear vests with shiny strips at night?", a: "The strips reflect light from car headlights into the drivers' eyes, so the workers can be seen." }
  ]
},
learnt(4, CH4, "Energy", 82, [
  "Light is a form of energy.",
  "Light sources give out their own light; the Sun is our main light source.",
  "The Moon is not a light source — it reflects light from the Sun.",
  "We see objects when light from them enters our eyes.",
  "Objects that are not light sources are seen when light reflected from them enters our eyes.",
  "Shiny, smooth surfaces reflect light well."
]),

/* Chapter 5 */
{
  id: "c5-t1", en: "5.1 What are shadows?", category: CH5, theme: "Energy", page: 94,
  tags: ["shadow", "opaque"],
  summary: "A shadow is a dark area formed when an object blocks light.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>shadow</strong> is a <strong>dark area</strong> formed when light is <strong>blocked</strong> by an object.",
      "To form a shadow we need a <strong>light source</strong>, an <strong>object</strong> that blocks light, and a <strong>screen/surface</strong> for the shadow to fall on.",
      "A shadow is <strong>not</strong> matter — it has no mass and takes up no space.",
      "Shadows have <strong>no colour</strong> and no details (eyes, patterns) — only the outline of the object."
    ]) },
    { h: "Key Terms", body: terms([["Shadow", "a dark area formed when light is blocked by an object"]]) }
  ],
  examples: [
    { q: "What three things are needed to form a shadow?", a: "A light source, an object that blocks light, and a surface (screen) for the shadow to fall on." }
  ]
},
{
  id: "c5-t2", en: "5.2 What are the properties of light that explain why a shadow is formed?", category: CH5, theme: "Energy", page: 94,
  tags: ["straight-line", "transparent", "translucent", "opaque"],
  summary: "Light travels in straight lines and cannot bend around an opaque object, so a shadow forms behind it.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Light <strong>travels in straight lines</strong> — it cannot bend around objects.",
      "<strong>Opaque</strong> objects block all light → <strong>dark</strong> shadow (wood, metal, cardboard).",
      "<strong>Translucent</strong> objects allow some light through → <strong>lighter</strong> shadow (frosted glass, tracing paper).",
      "<strong>Transparent</strong> objects allow most light through → very faint / no shadow (clear glass).",
      "Evidence that light travels in straight lines: seeing a candle through holes in three cards only when the holes are in a straight line; sunbeams through gaps."
    ]) },
    { h: "Key Terms", body: terms([
      ["Opaque", "allows no light to pass through"],
      ["Translucent", "allows some light to pass through"],
      ["Transparent", "allows most light to pass through"]
    ]) }
  ],
  examples: [
    { q: "Why is a shadow formed behind a wooden block?", a: "Light travels in straight lines and wood is opaque, so the light is blocked and cannot reach the area behind the block." },
    { q: "Why is the shadow of frosted glass lighter than that of cardboard?", a: "Frosted glass is translucent and lets some light through; cardboard is opaque and blocks all light." }
  ]
},
{
  id: "c5-t3", en: "5.3 How are shadows formed?", category: CH5, theme: "Energy", page: 94,
  tags: ["shadow-formation", "position"],
  summary: "A shadow forms on the side of the object away from the light; its outline follows the object's shape.",
  diagram: DIAG_SHADOW,
  sections: [
    { h: "Key Concepts", body: ul([
      "Light from the source travels in straight lines; the object blocks part of it; the area behind it receives no light → shadow.",
      "The shadow is always on the <strong>opposite side</strong> of the object from the light source.",
      "Moving the light source changes the <strong>position</strong> of the shadow (e.g. the Sun's position during the day: long shadows morning and evening, shortest at noon).",
      "The <strong>shape</strong> of the shadow is the outline of the object as seen from the light source."
    ]) },
    { h: "Key Terms", body: terms([["Outline", "the outer edge/shape of an object"]]) }
  ],
  examples: [
    { q: "In the morning the Sun is in the east. In which direction does a tree's shadow point?", a: "West — opposite the light source." },
    { q: "Why are shadows shortest at noon?", a: "The Sun is almost directly overhead, so less of the ground behind the object is blocked from light." }
  ]
},
{
  id: "c5-t4", en: "5.4 What factors affect the size and shape of shadows formed?", category: CH5, theme: "Energy", page: 94,
  tags: ["shadow-size", "distance", "position", "variables"],
  summary: "Shadow size depends on the distances between light, object and screen; shape depends on the object's position/angle.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Object moves <strong>closer to the light source</strong> → shadow becomes <strong>bigger</strong>.",
      "Object moves <strong>closer to the screen</strong> (further from the light) → shadow becomes <strong>smaller</strong> (and sharper).",
      "Screen moves <strong>further away</strong> from the object → shadow becomes <strong>bigger</strong>.",
      "Bigger object → bigger shadow.",
      "<strong>Shape</strong> changes when the object is <strong>turned / tilted</strong> or the light comes from a different angle (a cone can give a circle or a triangle shadow).",
      "In experiments, change only <strong>one</strong> factor and keep the rest constant."
    ]) },
    { h: "Key Terms", body: terms([["Variable", "a factor that can be changed in an experiment"]]) },
    { h: "Common Mistakes", body: ul(["Moving the object nearer the light makes the shadow <strong>bigger</strong>, not smaller."]) }
  ],
  examples: [
    { q: "A toy is moved from 20 cm to 10 cm away from a torch. The screen stays fixed. What happens to its shadow?", a: "It becomes bigger, because the toy blocks more of the light from the torch." },
    { q: "How can a cone form both a circular and a triangular shadow?", a: "Shine light on its base (circle) or from its side (triangle) — the shape depends on the object's position relative to the light." }
  ]
},
learnt(5, CH5, "Energy", 94, [
  "A shadow is formed when an object blocks light.",
  "Light travels in straight lines, so it cannot bend around an object.",
  "Opaque objects form dark shadows; translucent objects form lighter shadows; transparent objects form almost no shadow.",
  "A shadow forms on the side of the object away from the light source.",
  "The size of a shadow depends on the distance between the light source, the object and the screen.",
  "The shape of a shadow depends on the position of the object relative to the light source."
]),

/* Chapter 6 */
{
  id: "c6-t1", en: "6.1 What is temperature?", category: CH6, theme: "Energy", page: 120,
  tags: ["temperature", "hot", "cold"],
  summary: "Temperature is a measure of how hot or cold something is.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Temperature</strong> is a measure of <strong>how hot or cold</strong> something is.",
      "It is measured in <strong>degrees Celsius (°C)</strong>.",
      "Our sense of touch is <strong>not reliable</strong> for judging temperature (a hand from cold water feels room-temperature water as warm).",
      "Useful temperatures: water freezes at 0 °C, boils at 100 °C; body temperature ≈ 37 °C; room temperature ≈ 25–30 °C."
    ]) },
    { h: "Key Terms", body: terms([["Temperature", "how hot or cold something is, in °C"]]) }
  ],
  examples: [
    { q: "Why should we not use our hands to judge temperature?", a: "Touch is unreliable — how hot something feels depends on how warm our hand already is." }
  ]
},
{
  id: "c6-t2", en: "6.2 How is temperature measured?", category: CH6, theme: "Energy", page: 120,
  tags: ["thermometer", "datalogger", "measuring"],
  summary: "With a thermometer (laboratory, clinical, digital) or a temperature sensor/datalogger, in °C.",
  diagram: DIAG_THERMO,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Laboratory thermometer</strong>: liquid in the bulb <strong>expands</strong> and rises when it gains heat; usually −10 °C to 110 °C.",
      "<strong>Clinical / digital thermometer</strong>: body temperature (35–42 °C). <strong>Temperature sensor + datalogger</strong>: records temperature over time.",
      "Using a lab thermometer: hold by the top, keep the <strong>bulb fully in</strong> the liquid and not touching the container, wait for the reading to <strong>stop changing</strong>, read at <strong>eye level</strong>."
    ]) },
    { h: "Key Terms", body: terms([
      ["Thermometer", "instrument used to measure temperature"],
      ["Datalogger", "device that records data such as temperature over time"]
    ]) }
  ],
  examples: [
    { q: "Why must the thermometer bulb not touch the bottom of a beaker being heated?", a: "It would measure the temperature of the hot beaker, not of the liquid." },
    { q: "Why does the liquid in a thermometer rise when it is put in hot water?", a: "The liquid gains heat and expands." }
  ]
},
{
  id: "c6-t3", en: "6.3 What causes temperature to change?", category: CH6, theme: "Energy", page: 120,
  tags: ["heat-gain", "heat-loss"],
  summary: "Temperature rises when an object gains heat and falls when it loses heat.",
  sections: [
    { h: "Key Concepts", body: ul([
      "An object's temperature <strong>increases</strong> when it <strong>gains heat</strong>, and <strong>decreases</strong> when it <strong>loses heat</strong>.",
      "Hot drinks cool down by losing heat to the cooler surroundings; cold drinks warm up by gaining heat from the warmer surroundings.",
      "Temperature stops changing when the object reaches the <strong>same temperature</strong> as its surroundings."
    ]) },
    { h: "Key Terms", body: terms([["Gain / lose heat", "heat flows into / out of an object"]]) },
    { h: "Common Mistakes", body: ul(["Things do not \"gain cold\" — a cold drink in the fridge gets cold because it <strong>loses heat</strong>."]) }
  ],
  examples: [
    { q: "A cup of hot tea is left on a table. Explain why its temperature drops.", a: "The tea is hotter than the surrounding air, so it loses heat to the surroundings until it reaches room temperature." }
  ]
},
{
  id: "c6-t4", en: "6.4 What is the difference between temperature and heat?", category: CH6, theme: "Energy", page: 120,
  tags: ["heat", "temperature", "energy"],
  summary: "Heat is a form of energy that flows; temperature measures how hot or cold something is.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Heat</strong> is a form of <strong>energy</strong>; it flows from a hotter to a colder object.",
      "<strong>Temperature</strong> is a <strong>measure</strong> of how hot or cold something is (in °C), measured with a thermometer.",
      "Same temperature does not mean same heat: a <strong>bathtub</strong> of water at 40 °C contains <strong>more heat</strong> than a cup of water at 40 °C (more water).",
      "Two objects at the same temperature placed together → no heat flows."
    ]) },
    { h: "Key Terms", body: terms([["Heat", "a form of energy that flows from a hotter to a colder place"]]) },
    { h: "Common Mistakes", body: ul(["Heat and temperature are <strong>not</strong> the same thing; heat is not measured with a thermometer."]) }
  ],
  examples: [
    { q: "Pail A has 5 l of water at 60 °C; cup B has 200 ml of water at 60 °C. Which has more heat? Same temperature?", a: "Same temperature (60 °C), but pail A has more heat because it has more water." }
  ]
},
learnt(6, CH6, "Energy", 120, [
  "Heat is a form of energy.",
  "Temperature is a measure of how hot or cold something is, in degrees Celsius (°C).",
  "Temperature is measured using a thermometer or a temperature sensor.",
  "When an object gains heat, its temperature increases; when it loses heat, its temperature decreases.",
  "Heat and temperature are different: heat is energy, temperature is a measurement."
]),

/* Chapter 7 */
{
  id: "c7-t1", en: "7.1 How does heat flow?", category: CH7, theme: "Energy", page: 134,
  tags: ["heat-flow", "hotter-to-colder"],
  summary: "Heat flows from a hotter place to a colder place until both reach the same temperature.",
  diagram: DIAG_HEATFLOW,
  sections: [
    { h: "Key Concepts", body: ul([
      "Heat flows from a <strong>hotter</strong> object/place to a <strong>colder</strong> one.",
      "The hotter object <strong>loses</strong> heat (temperature falls); the colder object <strong>gains</strong> heat (temperature rises).",
      "Heat flow stops when both are at the <strong>same temperature</strong>.",
      "Examples: ice in a drink melts (gains heat from the drink); a metal spoon in hot soup gets hot."
    ]) },
    { h: "Key Terms", body: terms([["Heat flow", "movement of heat from a hotter to a colder region"]]) }
  ],
  examples: [
    { q: "A hot metal block is placed in a basin of cold water. Describe the heat flow.", a: "Heat flows from the hotter block to the colder water. The block's temperature falls and the water's rises until they are the same." }
  ]
},
{
  id: "c7-t2", en: "7.2 What is a source of heat?", category: CH7, theme: "Energy", page: 134,
  tags: ["heat-source", "sun"],
  summary: "A heat source gives out heat — the Sun is our main source; others include fire, stoves and electric heaters.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>source of heat</strong> gives out heat.",
      "The <strong>Sun</strong> is our <strong>main</strong> source of heat (and light).",
      "Other sources: fire, burning fuels (gas stove, candle), electric appliances (iron, toaster, heater, kettle), our bodies.",
      "Many light sources are also heat sources (Sun, fire, bulbs)."
    ]) },
    { h: "Key Terms", body: terms([["Heat source", "something that gives out heat"]]) }
  ],
  examples: [
    { q: "Name the main source of heat for the Earth.", a: "The Sun." }
  ]
},
{
  id: "c7-t3", en: "7.3 How fast does heat flow in different materials?", category: CH7, theme: "Energy", page: 134,
  tags: ["conductors", "insulators", "heat-conduction"],
  summary: "Good conductors of heat (metals) let heat flow quickly; poor conductors/insulators (wood, plastic, air) let heat flow slowly.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Good conductors of heat</strong>: heat flows through <strong>quickly</strong> — metals (copper, iron, aluminium, steel).",
      "<strong>Poor conductors of heat (insulators)</strong>: heat flows through <strong>slowly</strong> — wood, plastic, rubber, glass, fabric, styrofoam, <strong>air</strong>.",
      "Uses: cooking pots are metal (heat flows quickly to food); pot handles are plastic/wood (heat flows slowly, safe to hold).",
      "Keeping things hot/cold: flasks, cooler boxes, oven mitts, wool clothing — use insulators (and trapped air) to slow heat flow.",
      "Metal feels <strong>colder</strong> than wood at the same temperature because it conducts heat away from the hand faster."
    ]) },
    { h: "Key Terms", body: terms([
      ["Good conductor of heat", "allows heat to flow through quickly"],
      ["Poor conductor of heat (insulator)", "allows heat to flow through slowly"]
    ]) },
    { h: "Common Mistakes", body: ul(["A metal bench and a wooden bench in the same shade are at the <strong>same temperature</strong> — the metal only <em>feels</em> colder."]) }
  ],
  examples: [
    { q: "Why is a cooking pot made of metal with a plastic handle?", a: "Metal is a good conductor of heat, so heat flows quickly to the food. Plastic is a poor conductor, so the handle stays cool enough to hold." },
    { q: "Why does a metal railing feel colder than a wooden one on a cool morning?", a: "Metal is a better conductor of heat, so heat flows from our hand to the metal faster." }
  ]
},
{
  id: "c7-t4", en: "7.4 What are the effects of heat gain or heat loss?", category: CH7, theme: "Energy", page: 134,
  tags: ["expansion", "contraction", "change-of-state"],
  summary: "Gaining heat: temperature rises, things expand, solids melt, liquids evaporate. Losing heat: the reverse.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Change in temperature</strong>: gain heat → hotter; lose heat → colder.",
      "<strong>Expansion</strong>: most things <strong>expand</strong> (get bigger) when they gain heat and <strong>contract</strong> when they lose heat — solids, liquids and gases. Gases expand the most.",
      "Examples: gaps in railway tracks and bridges allow expansion; a dented ping-pong ball pops back in hot water (air inside expands); a tight metal lid loosens under hot water.",
      "<strong>Change of state</strong>: gain heat → melting (solid → liquid), boiling/evaporation (liquid → gas); lose heat → condensation (gas → liquid), freezing (liquid → solid)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Expand", "become bigger in volume"],
      ["Contract", "become smaller in volume"]
    ]) },
    { h: "Common Mistakes", body: ul(["When things expand, their <strong>volume</strong> increases but their <strong>mass stays the same</strong>."]) }
  ],
  examples: [
    { q: "A tight metal lid on a glass jar is placed under hot running water and then opens easily. Explain.", a: "The metal lid gains heat and expands more than the glass, so it becomes looser." },
    { q: "Why do railway tracks have small gaps between sections?", a: "To leave room for the metal to expand on hot days; otherwise the tracks could bend." }
  ]
},
learnt(7, CH7, "Energy", 134, [
  "Heat flows from a hotter place to a colder place until both are at the same temperature.",
  "The Sun is our main source of heat.",
  "Good conductors of heat (e.g. metals) allow heat to flow through quickly; poor conductors (e.g. wood, plastic, air) allow heat to flow through slowly.",
  "Objects expand when they gain heat and contract when they lose heat.",
  "Heat gain or loss can cause a change in temperature or a change of state."
])
];

const COMPARISONS = [
  {
    id: "cmp-roots", title: "Tap root vs fibrous roots",
    rows: [
      ["", "Tap root", "Fibrous roots"],
      ["Appearance", "One main root with smaller side roots", "Many thin roots of about the same size"],
      ["Examples", "Balsam, chilli, rambutan", "Grass, rice, onion, maize"]
    ]
  },
  {
    id: "cmp-digest", title: "Digestive system — what happens where",
    rows: [
      ["", "Digestion?", "Absorption?", "Job"],
      ["Mouth", "Yes", "No", "Chew, saliva"],
      ["Gullet", "No", "No", "Carry food to stomach"],
      ["Stomach", "Yes", "No", "Churn, digestive juices"],
      ["Small intestine", "Yes — completed", "Digested food", "Finish digestion, absorb food"],
      ["Large intestine", "No", "Water", "Absorb water"]
    ]
  },
  {
    id: "cmp-matter", title: "States of matter",
    rows: [
      ["", "Solid", "Liquid", "Gas"],
      ["Definite shape", "Yes", "No", "No"],
      ["Definite volume", "Yes", "Yes", "No"],
      ["Can be compressed", "No", "No", "Yes"],
      ["Examples", "Stone, ice, sand", "Water, oil, milk", "Air, steam, oxygen"]
    ]
  },
  {
    id: "cmp-shadow", title: "Shadow size",
    rows: [
      ["Change", "Shadow becomes"],
      ["Object moved closer to the light", "Bigger"],
      ["Object moved closer to the screen", "Smaller"],
      ["Screen moved further from object", "Bigger"],
      ["Light source moved further away", "Smaller"]
    ]
  },
  {
    id: "cmp-heat", title: "Heat vs temperature",
    rows: [
      ["", "Heat", "Temperature"],
      ["What it is", "A form of energy", "A measure of how hot or cold"],
      ["Unit / tool", "—", "°C, thermometer"],
      ["Depends on amount?", "Yes — more matter, more heat", "No"]
    ]
  },
  {
    id: "cmp-conductor", title: "Conductors of heat",
    rows: [
      ["", "Good conductors", "Poor conductors (insulators)"],
      ["Heat flows", "Quickly", "Slowly"],
      ["Examples", "Copper, iron, aluminium, steel", "Wood, plastic, rubber, cloth, styrofoam, air"],
      ["Uses", "Pots, kettles, irons", "Handles, oven mitts, flasks, cooler boxes"]
    ]
  }
];

const CATEGORY_PALETTE = [
  { light: "#008300", dark: "#33a033" }, // 1 plant system — green
  { light: "#e34948", dark: "#e66767" }, // 2 human systems — red
  { light: "#1baf7a", dark: "#199e70" }, // 3 matter — aqua
  { light: "#eda100", dark: "#c98500" }, // 4 light — yellow
  { light: "#4a3aa7", dark: "#9085e9" }, // 5 shadows — violet
  { light: "#eb6834", dark: "#d95926" }, // 6 heat — orange
  { light: "#e87ba4", dark: "#d55181" }  // 7 effects of heat — magenta
];

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p4 = {
  root: "P4 Science",
  source: "Primary 4 Science textbook — Themes: Systems (Ch 1–2), Cycles (Ch 3), Energy (Ch 4–7)",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE,
  trickyColor: { light: "#b8912a", dark: "#d4aa4a" }
};

})();
