/* =====================================================================
   PSLE SCIENCE — PRIMARY 3 DATA SOURCE
   Same shape as data/p5.js. One topic per guiding question in the P3
   textbook's table of contents, plus a "✅ What I Have Learnt" leaf that
   closes each chapter (id "c<n>-learnt").
   ===================================================================== */
(function () {

const CH1 = "Chapter 1: Diversity of Living and Non-living Things";
const CH2 = "Chapter 2: Classification of Living Things";
const CH3 = "Chapter 3: Diversity of Materials";
const CH4 = "Chapter 4: Life Cycles of Plants";
const CH5 = "Chapter 5: Life Cycles of Animals";
const CH6 = "Chapter 6: Properties of Magnets";
const CH7 = "Chapter 7: Making and Using Magnets";

const terms = list => `<ul>${list.map(([t, d]) => `<li><strong>${t}</strong> — ${d}</li>`).join('')}</ul>`;
const ul = list => `<ul>${list.map(x => `<li>${x}</li>`).join('')}</ul>`;
const learnt = list => `<ul class="learnt">${list.map(x => `<li>✅ ${x}</li>`).join('')}</ul>`;

/* ── small themed diagrams ───────────────────────────────────────────── */
const S = 'style="fill:none;stroke:var(--text);stroke-width:2"';
const T = 'style="fill:var(--text);font-size:12px;font-family:sans-serif"';
const M = 'style="fill:var(--muted);font-size:11px;font-family:sans-serif"';
const ARROW = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" style="fill:var(--text)"/></marker></defs>`;

// four stages round a loop
const cycle = (id, stages) => {
  const pos = [[160, 25], [275, 95], [160, 165], [45, 95]];
  const n = stages.length;
  const pts = n === 3 ? [[160, 25], [265, 150], [55, 150]] : pos;
  let s = `<svg viewBox="0 0 320 190">${ARROW(id)}`;
  stages.forEach((st, i) => {
    const [x, y] = pts[i];
    s += `<rect x="${x - 50}" y="${y - 15}" width="100" height="30" rx="15" style="fill:var(--accent-bg);stroke:var(--accent)"/>`;
    s += `<text x="${x}" y="${y + 4}" text-anchor="middle" ${T}>${st}</text>`;
    const [x2, y2] = pts[(i + 1) % n];
    const dx = x2 - x, dy = y2 - y, L = Math.hypot(dx, dy);
    const sx = x + dx / L * 55, sy = y + dy / L * 22, ex = x2 - dx / L * 55, ey = y2 - dy / L * 22;
    s += `<path d="M${sx.toFixed(0)} ${sy.toFixed(0)} L${ex.toFixed(0)} ${ey.toFixed(0)}" ${S} marker-end="url(#${id})"/>`;
  });
  return s + `</svg>`;
};

const DIAG_PLANT_CYCLE = cycle("pc", ["Seed", "Seedling", "Adult plant", "Flower → fruit"]);
const DIAG_BUTTERFLY = cycle("bf", ["Egg", "Larva", "Pupa", "Adult"]);
const DIAG_COCKROACH = cycle("cr", ["Egg", "Nymph", "Adult"]);

const DIAG_CLASSIFY = `<svg viewBox="0 0 320 170">
  <rect x="110" y="8" width="100" height="28" rx="8" style="fill:var(--accent);stroke:none"/>
  <text x="160" y="27" text-anchor="middle" style="fill:#fff;font-size:12px;font-family:sans-serif">Living things</text>
  <path d="M160 36 V50 M40 50 H280 M40 50 V62 M120 50 V62 M200 50 V62 M280 50 V62" ${S}/>
  ${[["Plants", 40], ["Animals", 120], ["Fungi", 200], ["Bacteria", 280]].map(([t, x]) =>
    `<rect x="${x - 36}" y="62" width="72" height="26" rx="8" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="${x}" y="80" text-anchor="middle" ${T}>${t}</text>`).join('')}
  <text x="40" y="108" text-anchor="middle" ${M}>flowering /</text><text x="40" y="121" text-anchor="middle" ${M}>non-flowering</text>
  <text x="120" y="108" text-anchor="middle" ${M}>mammals, birds,</text><text x="120" y="121" text-anchor="middle" ${M}>fish, amphibians,</text><text x="120" y="134" text-anchor="middle" ${M}>reptiles, insects</text>
  <text x="200" y="108" text-anchor="middle" ${M}>mushroom,</text><text x="200" y="121" text-anchor="middle" ${M}>mould, yeast</text>
  <text x="280" y="108" text-anchor="middle" ${M}>seen only under</text><text x="280" y="121" text-anchor="middle" ${M}>a microscope</text>
</svg>`;

const DIAG_POLES = `<svg viewBox="0 0 320 170">
  <rect x="40" y="20" width="120" height="34" style="fill:#e34948;opacity:.85"/><rect x="160" y="20" width="120" height="34" style="fill:#2a78d6;opacity:.85"/>
  <text x="100" y="42" text-anchor="middle" style="fill:#fff;font-size:14px;font-weight:700;font-family:sans-serif">N</text>
  <text x="220" y="42" text-anchor="middle" style="fill:#fff;font-size:14px;font-weight:700;font-family:sans-serif">S</text>
  ${[45, 60, 75, 245, 260, 275].map(x => `<circle cx="${x}" cy="66" r="3" style="fill:var(--muted)"/><circle cx="${x + 3}" cy="74" r="3" style="fill:var(--muted)"/>`).join('')}
  <circle cx="160" cy="64" r="2.5" style="fill:var(--muted)"/>
  <text x="160" y="96" text-anchor="middle" ${M}>most pins cling to the ends (poles) — fewest at the middle</text>
  <text x="80" y="130" text-anchor="middle" ${T}>N ↔ S  attract</text>
  <text x="240" y="130" text-anchor="middle" ${T}>N ↔ N, S ↔ S  repel</text>
  <text x="160" y="160" text-anchor="middle" ${M}>Like poles repel · unlike poles attract</text>
</svg>`;

const DIAG_STROKE = `<svg viewBox="0 0 320 150">${ARROW("st")}
  <rect x="40" y="90" width="240" height="14" rx="3" style="fill:var(--chip-bg);stroke:var(--muted)"/>
  <text x="160" y="125" text-anchor="middle" ${M}>iron / steel bar</text>
  <rect x="40" y="30" width="44" height="22" style="fill:#e34948;opacity:.85"/><text x="62" y="46" text-anchor="middle" style="fill:#fff;font-size:12px;font-family:sans-serif">N</text>
  <path d="M90 62 Q 160 75 260 80" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:6 4" marker-end="url(#st)"/>
  <path d="M265 55 Q 170 15 75 25" style="fill:none;stroke:var(--muted);stroke-width:1.5" marker-end="url(#st)"/>
  <text x="170" y="22" text-anchor="middle" ${M}>lift the magnet high and return to the start</text>
  <text x="160" y="145" text-anchor="middle" ${M}>stroke many times, same pole, same direction</text>
</svg>`;

/* ── topics ──────────────────────────────────────────────────────────── */
const TOPICS = [
/* Chapter 1 */
{
  id: "c1-t1", en: "1.1 What can we observe around us?", category: CH1, theme: "Diversity", page: 4,
  tags: ["observation", "senses", "living", "non-living"],
  summary: "We use our senses to observe the great variety (diversity) of living and non-living things around us.",
  sections: [
    { h: "Key Concepts", body: ul([
      "We <strong>observe</strong> using our five senses: sight, hearing, smell, touch and taste (taste only when it is safe).",
      "Tools such as a <strong>magnifying glass</strong> help us see small details.",
      "Things around us can be grouped into <strong>living things</strong> (plants, animals, fungi, bacteria) and <strong>non-living things</strong> (rocks, water, toys, air).",
      "There is a great <strong>variety</strong> of things around us — this is called <strong>diversity</strong>.",
      "We can <strong>group</strong> things by common characteristics such as size, colour, shape or whether they are living."
    ]) },
    { h: "Key Terms", body: terms([
      ["Diversity", "a wide variety of things"],
      ["Observe", "to use our senses to find out about things"],
      ["Living thing", "something that is alive and carries out life processes"],
      ["Non-living thing", "something that is not alive, e.g. a stone, a chair"]
    ]) }
  ],
  examples: [
    { q: "Name two senses you would use to observe a flower.", a: "Sight (colour and shape) and smell (scent). Touch can also be used." },
    { q: "Sort these into living and non-living: cat, rock, fern, plastic bottle.", a: "Living: cat, fern. Non-living: rock, plastic bottle." }
  ]
},
{
  id: "c1-t2", en: "1.2 What do living things need?", category: CH1, theme: "Diversity", page: 4,
  tags: ["needs", "air", "water", "food"],
  summary: "All living things need air, water and food to stay alive.",
  sections: [
    { h: "Key Concepts", body: ul([
      "All living things need <strong>air, water and food</strong> to survive.",
      "<strong>Plants</strong> make their own food using <strong>light</strong>, so they also need light.",
      "<strong>Animals</strong> cannot make their own food — they get food by eating plants and/or other animals.",
      "Without any one of these needs, a living thing will eventually die."
    ]) },
    { h: "Key Terms", body: terms([
      ["Needs", "things a living thing must have to stay alive"]
    ]) },
    { h: "Common Mistakes", body: ul(["A car needs fuel and air, but it is still non-living — it cannot grow or reproduce."]) }
  ],
  examples: [
    { q: "What three things do all living things need?", a: "Air, water and food." },
    { q: "A plant was kept in a dark cupboard for two weeks and became weak. Why?", a: "Plants need light to make food. Without light it could not make food." }
  ]
},
{
  id: "c1-t3", en: "1.3 What can living things do?", category: CH1, theme: "Diversity", page: 4,
  tags: ["characteristics", "grow", "reproduce", "respond", "move"],
  summary: "Living things grow, reproduce, respond to changes and need air, food and water; many can move by themselves.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Living things <strong>grow</strong> — they increase in size and change over time.",
      "Living things <strong>reproduce</strong> — they make young of their own kind (animals lay eggs or give birth; plants grow from seeds or spores).",
      "Living things <strong>respond to changes</strong> around them (e.g. the mimosa leaves fold when touched; plants grow towards light; we blink at bright light).",
      "Many animals can <strong>move</strong> from place to place by themselves; plants move parts of themselves slowly.",
      "<strong>Non-living</strong> things do not grow, reproduce or respond on their own. Some (e.g. a seed, a dead leaf) were once living or come from living things."
    ]) },
    { h: "Key Terms", body: terms([
      ["Grow", "increase in size"],
      ["Reproduce", "produce young ones of the same kind"],
      ["Respond", "react to a change in the surroundings (a stimulus)"]
    ]) }
  ],
  examples: [
    { q: "A toy robot can move and make sounds. Is it living? Explain.", a: "No. It cannot grow or reproduce, and does not need food, water and air." },
    { q: "How does a mimosa plant show it is living?", a: "It responds to touch by folding its leaves." }
  ]
},
{
  id: "c1-learnt", en: "✅ What I Have Learnt — Chapter 1", category: CH1, theme: "Diversity", page: 4,
  tags: ["summary", "review"],
  summary: "Chapter 1 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "There is a great diversity of living and non-living things around us.",
      "We observe things around us using our senses.",
      "Living things need air, water and food to survive.",
      "Living things can grow, reproduce and respond to changes.",
      "Non-living things do not have the characteristics of living things."
    ]) }
  ],
  examples: []
},

/* Chapter 2 */
{
  id: "c2-t1", en: "2.1 What are the similarities and differences between plants and animals?", category: CH2, theme: "Diversity", page: 19,
  tags: ["plants", "animals", "compare", "classification"],
  summary: "Both are living things with the same needs; plants make their own food and stay in one place, animals eat food and move.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Similar</strong>: both need air, water and food; both grow, reproduce and respond to changes.",
      "<strong>Plants</strong> make their own food (need light); most are green; cannot move from place to place.",
      "<strong>Animals</strong> cannot make their own food — they eat plants or other animals; most can move from place to place.",
      "<strong>Plants</strong> are grouped into <strong>flowering</strong> plants (reproduce by seeds from flowers, e.g. hibiscus, rice) and <strong>non-flowering</strong> plants (e.g. ferns and mosses reproduce by spores; conifers by seeds in cones).",
      "<strong>Animals</strong> are grouped as <strong>mammals</strong>, <strong>birds</strong>, <strong>fish</strong>, <strong>amphibians</strong>, <strong>reptiles</strong> and <strong>insects</strong> by their characteristics."
    ]) },
    { h: "Animal Groups", body: terms([
      ["Mammals", "body covered with hair/fur; most give birth to young alive; young feed on mother's milk (e.g. cat, whale, bat)"],
      ["Birds", "feathers, beak, two wings, two legs; lay eggs with hard shells"],
      ["Fish", "scales, fins, gills; live in water; most lay eggs"],
      ["Amphibians", "moist smooth skin; live on land and in water; lay eggs in water (e.g. frog, toad)"],
      ["Reptiles", "dry scaly skin; lay eggs with leathery shells (e.g. snake, lizard, crocodile, turtle)"],
      ["Insects", "3 body parts (head, thorax, abdomen), 6 legs, 1 pair of feelers; most have wings"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Whales and dolphins are <strong>mammals</strong>, not fish. Bats are mammals, not birds.",
      "Spiders are <strong>not</strong> insects — 8 legs, 2 body parts. Penguins are birds even though they cannot fly."
    ]) }
  ],
  examples: [
    { q: "A whale lives in the sea. Why is it classified as a mammal and not a fish?", a: "It gives birth to young alive and feeds them with milk, and it breathes with lungs (not gills)." },
    { q: "How can you tell a spider is not an insect?", a: "It has 8 legs and 2 body parts; an insect has 6 legs and 3 body parts." }
  ]
},
{
  id: "c2-t2", en: "2.2 What other groups of living things are there?", category: CH2, theme: "Diversity", page: 19,
  tags: ["fungi", "bacteria", "classification"],
  summary: "Besides plants and animals, there are fungi (mushroom, mould, yeast) and bacteria.",
  diagram: DIAG_CLASSIFY,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Fungi</strong> (e.g. mushroom, bread mould, yeast): cannot make their own food; get food from dead or decaying matter or what they grow on; reproduce by <strong>spores</strong>; grow in warm, damp places.",
      "Fungi are <strong>not plants</strong> — they are not green and cannot make food.",
      "<strong>Bacteria</strong>: very tiny, seen only under a <strong>microscope</strong>; found almost everywhere.",
      "Some fungi and bacteria are <strong>useful</strong> (making bread, yoghurt, cheese; breaking down dead matter), some are <strong>harmful</strong> (cause food to spoil, cause diseases).",
      "Living things are <strong>classified</strong> into groups by their common characteristics."
    ]) },
    { h: "Key Terms", body: terms([
      ["Fungi", "living things that are not plants or animals and reproduce by spores"],
      ["Bacteria", "very tiny living things seen only with a microscope"],
      ["Classify", "to group things by common characteristics"],
      ["Microscope", "an instrument for seeing very tiny things"]
    ]) }
  ],
  examples: [
    { q: "Why is a mushroom not classified as a plant?", a: "It cannot make its own food and is not green; it reproduces by spores and absorbs food from what it grows on." },
    { q: "Give one useful and one harmful effect of bacteria.", a: "Useful: making yoghurt / breaking down dead matter. Harmful: causing diseases / spoiling food." }
  ]
},
{
  id: "c2-learnt", en: "✅ What I Have Learnt — Chapter 2", category: CH2, theme: "Diversity", page: 19,
  tags: ["summary", "review"],
  summary: "Chapter 2 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "Living things can be classified into groups: plants, animals, fungi and bacteria.",
      "Plants can be grouped into flowering and non-flowering plants.",
      "Animals can be grouped into mammals, birds, fish, amphibians, reptiles and insects.",
      "Plants and animals both need air, water and food, grow, reproduce and respond to changes.",
      "Plants make their own food; animals and fungi cannot.",
      "Fungi reproduce by spores; bacteria can only be seen under a microscope.",
      "Some fungi and bacteria are useful while others are harmful."
    ]) }
  ],
  examples: []
},

/* Chapter 3 */
{
  id: "c3-t1", en: "3.1 What are the different types of materials around us?", category: CH3, theme: "Diversity", page: 45,
  tags: ["materials", "wood", "metal", "plastic", "glass", "fabric", "rubber", "ceramic"],
  summary: "Objects are made of materials such as wood, metal, plastic, glass, rubber, fabric and ceramic.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>material</strong> is what an object is made of.",
      "Common materials: <strong>wood, metal, plastic, glass, rubber, fabric (cloth), ceramic, paper</strong>.",
      "Some materials are <strong>natural</strong> (wood, cotton, rubber from trees, wool); some are <strong>man-made</strong> (plastic, glass).",
      "One object can be made of <strong>more than one</strong> material (e.g. a pencil: wood + graphite + rubber; a scissors: metal + plastic).",
      "The <strong>same material</strong> can make many different objects (e.g. plastic bottle, plastic chair)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Material", "the substance an object is made of"],
      ["Natural material", "comes from plants, animals or the ground"],
      ["Man-made material", "made by people from other materials"]
    ]) }
  ],
  examples: [
    { q: "Name the materials used to make a pencil.", a: "Wood (body), graphite (lead), rubber (eraser), sometimes metal (holder for the eraser)." }
  ]
},
{
  id: "c3-t2", en: "3.2 What are the physical properties of materials?", category: CH3, theme: "Diversity", page: 45,
  tags: ["properties", "strength", "flexibility", "waterproof", "float", "transparency"],
  summary: "Materials differ in strength, hardness, flexibility, waterproofness, ability to float, and how much light passes through.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Strength</strong>: how much load it can hold before breaking.",
      "<strong>Hardness</strong>: a harder material can scratch a softer one.",
      "<strong>Flexibility</strong>: can bend without breaking (e.g. rubber, fabric, thin plastic).",
      "<strong>Waterproof</strong>: does not absorb / let water through (plastic, glass, metal, rubber). <strong>Absorbent</strong> materials soak up water (fabric, paper, sponge).",
      "<strong>Ability to float</strong>: wood, cork, most plastics float; metal, glass, stone usually sink.",
      "<strong>Transparency</strong>: <em>transparent</em> (lets most light through — clear glass), <em>translucent</em> (some light — tracing paper, frosted glass), <em>opaque</em> (no light — wood, metal).",
      "To compare properties fairly, change only <strong>one</strong> thing and keep everything else the same (a <strong>fair test</strong>)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Physical property", "a characteristic of a material we can observe or measure"],
      ["Flexible", "able to bend without breaking"],
      ["Waterproof", "does not allow water to pass through"],
      ["Fair test", "an experiment where only one variable is changed"]
    ]) },
    { h: "Common Mistakes", body: ul(["Hard does not always mean strong — glass is hard but breaks easily."]) }
  ],
  examples: [
    { q: "How can you find out which of two materials is harder?", a: "Scratch one with the other. The one that is scratched is softer; the one that makes the scratch is harder." },
    { q: "In a test of which cloth absorbs the most water, name two things to keep the same.", a: "Size of the cloth, amount of water, and time the cloth is left in the water." }
  ]
},
{
  id: "c3-t3", en: "3.3 How are materials with different properties used?", category: CH3, theme: "Diversity", page: 45,
  tags: ["uses", "properties", "choosing-materials"],
  summary: "We choose a material for an object according to the properties the object needs.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Raincoat / umbrella — <strong>waterproof</strong> (plastic, treated fabric).",
      "Window — <strong>transparent</strong> glass lets light in; curtains — <strong>opaque</strong> fabric blocks light.",
      "Towel — <strong>absorbent</strong> fabric. Tyres, rubber bands — <strong>flexible</strong> rubber.",
      "Bridges, pots, cutlery — <strong>strong, hard</strong> metal. Life jackets, boats — materials that <strong>float</strong>.",
      "Pot handles — wood or plastic (do not get hot quickly).",
      "Reduce, reuse and recycle materials to save resources and reduce waste."
    ]) },
    { h: "Key Terms", body: terms([["Suitable material", "a material whose properties match what the object must do"]]) }
  ],
  examples: [
    { q: "Why is a raincoat made of plastic and not cotton?", a: "Plastic is waterproof; cotton absorbs water, so the wearer would get wet." },
    { q: "Why are rubber bands made of rubber?", a: "Rubber is flexible and can stretch and return to its original shape." }
  ]
},
{
  id: "c3-learnt", en: "✅ What I Have Learnt — Chapter 3", category: CH3, theme: "Diversity", page: 45,
  tags: ["summary", "review"],
  summary: "Chapter 3 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "There is a great variety of materials such as wood, metal, plastic, glass, rubber, fabric and ceramic.",
      "Materials have different physical properties: strength, hardness, flexibility, waterproofness, ability to float, and transparency.",
      "An object may be made of one or more materials.",
      "Materials are chosen for objects based on their properties.",
      "We should reduce, reuse and recycle materials."
    ]) }
  ],
  examples: []
},

/* Chapter 4 */
{
  id: "c4-t1", en: "4.1 What is a life cycle?", category: CH4, theme: "Cycles", page: 74,
  tags: ["life-cycle", "stages", "repeat"],
  summary: "A life cycle is the series of stages a living thing goes through from birth until it reproduces — and the cycle repeats.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Every living thing goes through different <strong>stages</strong> of growth and development.",
      "The series of stages from the start of life to becoming an adult that can <strong>reproduce</strong> is its <strong>life cycle</strong>.",
      "The cycle <strong>repeats</strong>: the young become adults, which produce young of their own.",
      "Different living things have different life cycles; the <strong>length</strong> of a life cycle differs too (a balsam takes months, a mango tree takes years)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Life cycle", "the stages of development a living thing goes through during its life"],
      ["Stage", "one step in the life cycle"]
    ]) }
  ],
  examples: [
    { q: "Why is it called a life 'cycle'?", a: "Because the stages repeat: adults reproduce, and the young grow into adults again." }
  ]
},
{
  id: "c4-t2", en: "4.2 What are the stages in the life cycle of a plant?", category: CH4, theme: "Cycles", page: 74,
  tags: ["seed", "germination", "seedling", "flowering-plant"],
  summary: "Flowering plant: seed → seedling → young plant → adult plant (flowers → fruits with seeds).",
  diagram: DIAG_PLANT_CYCLE,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Seed</strong>: has a seed coat, and stored food for the young plant inside.",
      "<strong>Germination</strong>: the seed takes in water, the seed coat splits, the <strong>root</strong> grows out first (grows downward), then the <strong>shoot</strong> (grows upward).",
      "A seed needs <strong>water, air and warmth</strong> to germinate.",
      "<strong>Seedling</strong>: first leaves appear; it starts making its own food using light.",
      "<strong>Adult plant</strong>: produces <strong>flowers</strong>, which develop into <strong>fruits</strong> containing <strong>seeds</strong>.",
      "Some plants reproduce by <strong>spores</strong> (ferns) or from parts of the plant, not from seeds.",
      "Examples studied: balsam, green bean (mung bean), sunflower."
    ]) },
    { h: "Key Terms", body: terms([
      ["Germination", "a seed starting to grow into a young plant"],
      ["Seedling", "a young plant that has just grown from a seed"],
      ["Seed coat", "protective covering of a seed"]
    ]) },
    { h: "Common Mistakes", body: ul(["The root comes out of the seed before the shoot."]) }
  ],
  examples: [
    { q: "Which part comes out first when a seed germinates?", a: "The root." },
    { q: "Put in order: adult plant, seed, seedling, fruit.", a: "Seed → seedling → adult plant → fruit (with seeds) → …" }
  ]
},
{
  id: "c4-learnt", en: "✅ What I Have Learnt — Chapter 4", category: CH4, theme: "Cycles", page: 74,
  tags: ["summary", "review"],
  summary: "Chapter 4 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "A life cycle is the series of stages a living thing goes through during its lifetime.",
      "The life cycle of a flowering plant: seed → seedling → young plant → adult plant.",
      "A seed needs water, air and warmth to germinate.",
      "When a seed germinates, the root grows out first, followed by the shoot.",
      "Adult plants produce flowers, which develop into fruits containing seeds.",
      "Different plants have life cycles of different lengths."
    ]) }
  ],
  examples: []
},

/* Chapter 5 */
{
  id: "c5-t1", en: "5.1 What are the stages in the life cycles of different animals?", category: CH5, theme: "Cycles", page: 80,
  tags: ["butterfly", "mosquito", "cockroach", "frog", "chicken", "beetle"],
  summary: "Some animals have 4 stages (egg, larva, pupa, adult), some have 3 (egg, nymph/young, adult).",
  diagram: DIAG_BUTTERFLY,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>4-stage</strong> life cycle: <strong>egg → larva → pupa → adult</strong> — butterfly (larva = caterpillar), mosquito (larva = wriggler, pupa = tumbler), mealworm beetle.",
      "<strong>3-stage</strong> life cycle with <strong>nymph</strong>: <strong>egg → nymph → adult</strong> — cockroach, grasshopper. The nymph looks like the adult but has <strong>no wings</strong>; it <strong>moults</strong> (sheds its skin) as it grows.",
      "<strong>3-stage</strong> life cycle: <strong>egg → young → adult</strong> — chicken (chick), frog (tadpole → froglet → adult), many reptiles and fish.",
      "<strong>Frog</strong>: tadpole lives in water and breathes with gills; the adult frog lives on land and in water.",
      "<strong>Mammals</strong> (e.g. humans, dogs): young are born alive; life cycle = baby → child/young → adult.",
      "The larva <strong>eats a lot</strong> and grows; the pupa does <strong>not eat or move</strong> much."
    ]) },
    { h: "Key Terms", body: terms([
      ["Larva", "young stage that looks very different from the adult"],
      ["Pupa", "resting stage between larva and adult; does not feed"],
      ["Nymph", "young that looks like the adult but has no wings"],
      ["Moult", "shed the outer skin to grow bigger"]
    ]) },
    { h: "Common Mistakes", body: ul(["A cockroach has no pupa stage.", "A mosquito pupa still moves (tumbler) but does not feed."]) }
  ],
  examples: [
    { q: "Give the stages of the mosquito's life cycle.", a: "Egg → larva → pupa → adult." },
    { q: "Why does a cockroach nymph moult?", a: "Its outer covering does not grow, so it sheds it to grow bigger." },
    { q: "How can we stop mosquitoes breeding?", a: "Remove stagnant water (e.g. turn over pails, clear roof gutters) so the eggs, larvae and pupae cannot develop in water." }
  ]
},
{
  id: "c5-t2", en: "5.2 How are the life cycles of animals similar or different?", category: CH5, theme: "Cycles", page: 80,
  tags: ["compare", "3-stage", "4-stage"],
  summary: "All life cycles begin with young and end with an adult that reproduces; they differ in number of stages and whether the young look like the adult.",
  diagram: DIAG_COCKROACH,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Similar</strong>: all start from a young stage (egg or born alive), grow into an adult, and adults reproduce — so the cycle repeats.",
      "<strong>Different</strong>: number of stages (3 or 4); whether the young <strong>resembles the adult</strong> (nymph, chick do; larva, tadpole do not); where each stage lives (mosquito: larva and pupa in water, adult in air); life cycle length.",
      "Animals can be grouped by their life cycles: 3-stage vs 4-stage."
    ]) },
    { h: "Key Terms", body: terms([["Resemble", "look like"]]) }
  ],
  examples: [
    { q: "State one similarity and one difference between the life cycles of a butterfly and a cockroach.", a: "Similar: both start as eggs. Different: the butterfly has 4 stages (with larva and pupa); the cockroach has 3 stages (egg, nymph, adult)." }
  ]
},
{
  id: "c5-learnt", en: "✅ What I Have Learnt — Chapter 5", category: CH5, theme: "Cycles", page: 80,
  tags: ["summary", "review"],
  summary: "Chapter 5 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "Different animals have different life cycles.",
      "Some animals have a 4-stage life cycle: egg, larva, pupa and adult (e.g. butterfly, mosquito, beetle).",
      "Some animals have a 3-stage life cycle: egg, nymph and adult (e.g. cockroach, grasshopper).",
      "Some animals have a 3-stage life cycle: egg, young and adult (e.g. chicken, frog).",
      "Some young look like their parents, others look very different.",
      "All life cycles repeat when the adults reproduce."
    ]) }
  ],
  examples: []
},

/* Chapter 6 */
{
  id: "c6-t1", en: "6.1 What is a magnet?", category: CH6, theme: "Interactions", page: 100,
  tags: ["magnet", "magnetic", "non-magnetic", "shapes"],
  summary: "A magnet attracts magnetic materials — iron, steel, nickel and cobalt.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Magnets come in different <strong>shapes</strong>: bar, horseshoe, U-shaped, ring, disc, button.",
      "Magnets <strong>attract</strong> (pull) objects made of <strong>magnetic materials</strong>: <strong>iron, steel, nickel, cobalt</strong>.",
      "<strong>Non-magnetic</strong> materials: wood, plastic, glass, rubber, fabric, paper, and metals such as <strong>copper, aluminium, gold, silver</strong>.",
      "Magnets can attract magnetic objects <strong>without touching</strong> them, and <strong>through</strong> non-magnetic materials such as paper, plastic and water.",
      "Magnets can be <strong>natural</strong> (lodestone) or <strong>man-made</strong>."
    ]) },
    { h: "Key Terms", body: terms([
      ["Magnet", "an object that attracts magnetic materials"],
      ["Magnetic material", "a material attracted by a magnet: iron, steel, nickel, cobalt"],
      ["Attract", "to pull towards"]
    ]) },
    { h: "Common Mistakes", body: ul(["Not all metals are magnetic — aluminium cans and copper wires are not attracted."]) }
  ],
  examples: [
    { q: "A magnet is placed near a steel paper clip, an aluminium can and an iron nail. Which will be attracted?", a: "The steel paper clip and the iron nail." },
    { q: "How can a magnet pick up a pin through a sheet of paper?", a: "The magnet's force can act through non-magnetic materials like paper." }
  ]
},
{
  id: "c6-t2", en: "6.2 Which parts of a magnet have the strongest pull?", category: CH6, theme: "Interactions", page: 100,
  tags: ["poles", "north-pole", "south-pole", "strength"],
  summary: "The poles (ends) of a magnet have the strongest pull; the middle has the weakest.",
  diagram: DIAG_POLES,
  sections: [
    { h: "Key Concepts", body: ul([
      "Every magnet has two <strong>poles</strong>: a <strong>north pole (N)</strong> and a <strong>south pole (S)</strong>.",
      "The magnetic pull is <strong>strongest at the poles</strong> — most pins/paper clips cling to the ends of a bar magnet.",
      "Compare strength by counting the <strong>number of paper clips</strong> attracted, or the <strong>distance</strong> at which a clip is first attracted.",
      "If a magnet is cut, each piece becomes a magnet with its own N and S poles."
    ]) },
    { h: "Key Terms", body: terms([["Pole", "the part of a magnet where the magnetic force is strongest"]]) }
  ],
  examples: [
    { q: "Iron filings are sprinkled over a bar magnet. Where will most of them gather? Why?", a: "At the two ends (poles), because the magnetic force is strongest there." },
    { q: "How could you find out which of two magnets is stronger?", a: "See how many paper clips each can hold in a chain (or how far away each can attract a clip). The one with more clips / greater distance is stronger." }
  ]
},
{
  id: "c6-t3", en: "6.3 How do magnets interact with one another?", category: CH6, theme: "Interactions", page: 100,
  tags: ["attract", "repel", "like-poles", "unlike-poles"],
  summary: "Unlike poles attract; like poles repel. Repulsion is the test for a magnet.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Unlike poles attract</strong>: N–S.",
      "<strong>Like poles repel</strong> (push away): N–N, S–S.",
      "A magnet attracts a magnetic object at <strong>either</strong> pole.",
      "To test if an object is a magnet: only a magnet can be <strong>repelled</strong> by another magnet. Attraction alone does not prove it — an unmagnetised iron bar is attracted too."
    ]) },
    { h: "Key Terms", body: terms([["Repel", "to push away"]]) },
    { h: "Common Mistakes", body: ul(["\"It is attracted to the magnet, so it is a magnet\" — wrong. You need repulsion to prove it."]) }
  ],
  examples: [
    { q: "Bar X is attracted to both ends of a magnet. Is X a magnet?", a: "No. A magnet would be repelled by one end. X is a magnetic material, not a magnet." },
    { q: "Ring magnets on a pencil appear to float above each other. Why?", a: "Like poles are facing each other and repel." }
  ]
},
{
  id: "c6-t4", en: "6.4 What direction does a freely suspended magnet point in?", category: CH6, theme: "Interactions", page: 100,
  tags: ["compass", "north-south", "suspended"],
  summary: "A freely suspended magnet comes to rest pointing North–South; this is how a compass works.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A bar magnet hung freely by a string (or floating on water) turns and stops in a <strong>North–South</strong> direction.",
      "The pole that points to the North is the <strong>north-seeking pole (N)</strong>.",
      "A <strong>compass</strong> has a small magnetic needle that points North–South — used to find directions.",
      "Keep a compass away from other magnets and magnetic objects — they make the needle point wrongly."
    ]) },
    { h: "Key Terms", body: terms([
      ["Freely suspended", "hung so that it can turn freely"],
      ["Compass", "an instrument with a magnetic needle that shows direction"]
    ]) }
  ],
  examples: [
    { q: "How can you tell which end of an unlabelled bar magnet is the north pole?", a: "Hang it freely. When it stops moving, the end pointing North is the north pole." },
    { q: "A compass needle points East when placed next to a toolbox. Why?", a: "Iron/steel objects or magnets in the toolbox are attracting the needle." }
  ]
},
{
  id: "c6-learnt", en: "✅ What I Have Learnt — Chapter 6", category: CH6, theme: "Interactions", page: 100,
  tags: ["summary", "review"],
  summary: "Chapter 6 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "Magnets come in different shapes and sizes.",
      "Magnets attract magnetic materials: iron, steel, nickel and cobalt.",
      "A magnet has two poles, north (N) and south (S); the magnetic force is strongest at the poles.",
      "Like poles repel, unlike poles attract.",
      "Repulsion is the only sure test that an object is a magnet.",
      "A freely suspended magnet comes to rest pointing in the North–South direction."
    ]) }
  ],
  examples: []
},

/* Chapter 7 */
{
  id: "c7-t1", en: "7.1 How can we make a magnet?", category: CH7, theme: "Interactions", page: 113,
  tags: ["stroke-method", "electrical-method", "electromagnet", "demagnetise"],
  summary: "Make a magnet by stroking a magnetic material with a magnet, or by using electricity (electromagnet).",
  diagram: DIAG_STROKE,
  sections: [
    { h: "Key Concepts", body: ul([
      "Only <strong>magnetic materials</strong> (iron, steel, nickel, cobalt) can be made into magnets.",
      "<strong>Stroke method</strong>: stroke the iron/steel bar with <strong>one pole</strong> of a magnet, in the <strong>same direction</strong>, many times, lifting the magnet high at the end of each stroke. More strokes → stronger magnet (up to a limit).",
      "<strong>Electrical method</strong>: coil an insulated wire round an iron nail and connect it to a battery — an <strong>electromagnet</strong>. More coils or more batteries → stronger.",
      "An electromagnet loses most of its magnetism when the current is <strong>switched off</strong> — it is a <strong>temporary magnet</strong>.",
      "Magnets lose magnetism (<strong>demagnetise</strong>) if dropped or knocked repeatedly, heated, or stored badly. Store bar magnets in pairs, unlike poles side by side, with keepers."
    ]) },
    { h: "Key Terms", body: terms([
      ["Electromagnet", "a magnet made using electricity; can be switched on and off"],
      ["Temporary magnet", "loses its magnetism easily"],
      ["Permanent magnet", "keeps its magnetism for a long time"],
      ["Demagnetise", "to make a magnet lose its magnetism"]
    ]) }
  ],
  examples: [
    { q: "Ali stroked a steel nail with a magnet 10 times; Ben stroked another 30 times. Whose nail is likely to attract more pins?", a: "Ben's — more strokes usually make a stronger magnet." },
    { q: "How can you make an electromagnet stronger?", a: "Increase the number of coils of wire, or use more batteries." }
  ]
},
{
  id: "c7-t2", en: "7.2 How are magnets used in our everyday life?", category: CH7, theme: "Interactions", page: 113,
  tags: ["uses", "compass", "crane", "fridge"],
  summary: "Magnets are used in fridge doors, compasses, cranes at scrapyards, toys, cabinet catches and more.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Hold things shut or in place: <strong>refrigerator door seals</strong>, cabinet catches, magnetic pencil cases, fridge magnets, magnetic whiteboards.",
      "Find direction: <strong>compass</strong>.",
      "Separate or pick up iron and steel: <strong>electromagnetic cranes</strong> in scrapyards (switch off to drop), magnets in recycling to sort cans.",
      "Other uses: magnetic toys and games, speakers, electric motors, <strong>maglev trains</strong> (use repulsion/attraction to float), magnetic cards (keep them away from magnets)."
    ]) },
    { h: "Key Terms", body: terms([["Maglev", "magnetic levitation — trains that float using magnets"]]) }
  ],
  examples: [
    { q: "Why is an electromagnet, not a permanent magnet, used on a scrapyard crane?", a: "It can be switched off to release the iron and steel scrap at the right place." },
    { q: "How can a magnet help separate steel cans from aluminium cans?", a: "The steel cans are attracted to the magnet; aluminium is non-magnetic and is left behind." }
  ]
},
{
  id: "c7-learnt", en: "✅ What I Have Learnt — Chapter 7", category: CH7, theme: "Interactions", page: 113,
  tags: ["summary", "review"],
  summary: "Chapter 7 key points in one place.",
  sections: [
    { h: "What I Have Learnt", body: learnt([
      "Magnets can be made by the stroke method or the electrical method.",
      "An electromagnet is made by passing electric current through a coil of wire around an iron core.",
      "An electromagnet can be switched on and off; its strength increases with more coils or more batteries.",
      "Magnets can lose their magnetism if dropped, knocked or heated.",
      "Magnets are used in everyday life, e.g. compasses, refrigerator doors, cranes, toys and maglev trains."
    ]) }
  ],
  examples: []
}
];

const COMPARISONS = [
  {
    id: "cmp-living", title: "Living vs non-living things",
    rows: [
      ["", "Living things", "Non-living things"],
      ["Need air, water, food", "Yes", "No"],
      ["Grow", "Yes", "No"],
      ["Reproduce", "Yes", "No"],
      ["Respond to changes", "Yes", "No"]
    ]
  },
  {
    id: "cmp-plant-animal", title: "Plants vs animals",
    rows: [
      ["", "Plants", "Animals"],
      ["Make own food", "Yes (need light)", "No — eat plants/animals"],
      ["Move from place to place", "No", "Most can"],
      ["Colour", "Most are green", "Various"],
      ["Reproduce by", "Seeds or spores", "Laying eggs or giving birth"]
    ]
  },
  {
    id: "cmp-groups", title: "Animal groups at a glance",
    rows: [
      ["", "Body covering", "Breathes with", "Young"],
      ["Mammals", "Hair / fur", "Lungs", "Mostly born alive, fed with milk"],
      ["Birds", "Feathers", "Lungs", "Hard-shelled eggs"],
      ["Fish", "Scales", "Gills", "Mostly eggs"],
      ["Amphibians", "Moist, smooth skin", "Gills (young), lungs + skin (adult)", "Eggs in water"],
      ["Reptiles", "Dry scales", "Lungs", "Leathery eggs"],
      ["Insects", "Hard outer covering", "Breathing holes", "Eggs"]
    ]
  },
  {
    id: "cmp-lifecycle", title: "Animal life cycles",
    rows: [
      ["", "Stages", "Young looks like adult?"],
      ["Butterfly", "Egg → larva → pupa → adult", "No"],
      ["Mosquito", "Egg → larva → pupa → adult", "No"],
      ["Cockroach", "Egg → nymph → adult", "Yes (no wings)"],
      ["Frog", "Egg → tadpole → froglet → adult", "No"],
      ["Chicken", "Egg → chick → adult", "Yes"]
    ]
  },
  {
    id: "cmp-transparency", title: "How much light passes through",
    rows: [
      ["", "Transparent", "Translucent", "Opaque"],
      ["Light", "Most passes through", "Some passes through", "None passes through"],
      ["Examples", "Clear glass, clear plastic", "Frosted glass, tracing paper", "Wood, metal, cardboard"]
    ]
  },
  {
    id: "cmp-magnet", title: "Making magnets",
    rows: [
      ["", "Stroke method", "Electrical method (electromagnet)"],
      ["How", "Stroke with one pole, same direction", "Current through a coil around an iron core"],
      ["Make it stronger", "More strokes", "More coils / more batteries"],
      ["Switch off?", "No", "Yes — loses magnetism when switched off"]
    ]
  }
];

const CATEGORY_PALETTE = [
  { light: "#1baf7a", dark: "#199e70" }, // 1 diversity of living things — aqua
  { light: "#008300", dark: "#33a033" }, // 2 classification — green
  { light: "#eb6834", dark: "#d95926" }, // 3 materials — orange
  { light: "#2a78d6", dark: "#3987e5" }, // 4 plant life cycles — blue
  { light: "#e87ba4", dark: "#d55181" }, // 5 animal life cycles — magenta
  { light: "#e34948", dark: "#e66767" }, // 6 properties of magnets — red
  { light: "#4a3aa7", dark: "#9085e9" }  // 7 making & using magnets — violet
];

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p3 = {
  root: "P3 Science",
  source: "Primary 3 Science textbook — Themes: Diversity (Ch 1–3), Cycles (Ch 4–5), Interactions (Ch 6–7)",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE,
  trickyColor: { light: "#b8912a", dark: "#d4aa4a" }
};

})();
