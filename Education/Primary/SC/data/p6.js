/* =====================================================================
   PSLE SCIENCE — PRIMARY 6 DATA SOURCE
   Same shape as data/p5.js. One topic per guiding question in the P6
   textbook's table of contents, plus a "✅ What I Have Learnt" leaf that
   closes each chapter (id "c<n>-learnt"). Chinese text: data/p6_zh.js.
   ===================================================================== */
(function () {

const CH1 = "Chapter 1: Photosynthesis";
const CH2 = "Chapter 2: Energy Conversion";
const CH3 = "Chapter 3: Interaction of Forces";
const CH4 = "Chapter 4: Interactions Within the Environment";
const CH5 = "Chapter 5: Surviving in the Environment";

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

const DIAG_PHOTO = `<svg viewBox="0 0 320 200">${ARROW("ph")}
  <circle cx="40" cy="35" r="18" style="fill:#eda100"/><text x="40" y="70" text-anchor="middle" ${M}>light energy</text>
  <path d="M60 45 L140 85" style="stroke:#eda100;stroke-width:2" marker-end="url(#ph)"/>
  <path d="M150 100 Q 200 60 250 85 Q 200 115 150 100" style="fill:var(--good-bg);stroke:var(--good);stroke-width:2"/>
  <text x="200" y="92" text-anchor="middle" ${T}>leaf</text>
  <text x="8" y="150" ${M}>green leaf: chlorophyll traps light</text>
  <path d="M20 115 L140 98" ${S} marker-end="url(#ph)"/><text x="8" y="132" ${M}>carbon dioxide (air, via stomata)</text>
  <path d="M175 190 L185 112" ${S} marker-end="url(#ph)"/><text x="192" y="178" ${M}>water (roots → xylem)</text>
  <path d="M255 85 L305 55" style="stroke:var(--accent);stroke-width:2" marker-end="url(#ph)"/><text x="262" y="45" style="fill:var(--accent);font-size:11px;font-family:sans-serif">oxygen</text>
  <path d="M252 100 L305 135" style="stroke:var(--accent2);stroke-width:2" marker-end="url(#ph)"/><text x="248" y="155" style="fill:var(--accent2);font-size:11px;font-family:sans-serif">sugar (food)</text>
  <text x="160" y="16" text-anchor="middle" ${T}>water + carbon dioxide —light, chlorophyll→ sugar + oxygen</text>
</svg>`;

const DIAG_CONVERT = `<svg viewBox="0 0 320 120">${ARROW("ec")}
  ${[["Chemical PE", 10, "battery"], ["Electrical", 115, "wires"], ["Light + Heat", 220, "bulb"]].map(([t, x, d]) =>
    `<rect x="${x}" y="30" width="90" height="34" rx="10" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="${x + 45}" y="51" text-anchor="middle" ${T}>${t}</text><text x="${x + 45}" y="82" text-anchor="middle" ${M}>${d}</text>`).join('')}
  <path d="M100 47 L113 47" ${S} marker-end="url(#ec)"/><path d="M205 47 L218 47" ${S} marker-end="url(#ec)"/>
  <text x="160" y="110" text-anchor="middle" ${M}>Torch: energy is converted, never used up — some is "lost" as heat</text>
</svg>`;

const DIAG_FORCES = `<svg viewBox="0 0 320 170">${ARROW("fo", "#e34948")}
  <rect x="20" y="40" width="70" height="40" style="fill:var(--accent-bg);stroke:var(--text)"/>
  <line x1="5" y1="80" x2="140" y2="80" ${S}/>
  <path d="M95 60 L130 60" style="stroke:#e34948;stroke-width:3" marker-end="url(#fo)"/><text x="100" y="52" ${M}>push</text>
  <path d="M15 72 L-5 72" style="stroke:#2a78d6;stroke-width:3"/><text x="10" y="100" ${M}>friction opposes motion</text>
  <circle cx="230" cy="40" r="14" style="fill:var(--chip-bg);stroke:var(--text)"/>
  <path d="M230 58 L230 95" style="stroke:#e34948;stroke-width:3" marker-end="url(#fo)"/><text x="240" y="82" ${M}>gravity</text>
  <path d="M20 135 q 8 -12 16 0 q 8 12 16 0 q 8 -12 16 0 q 8 12 16 0" ${S}/><text x="20" y="160" ${M}>elastic spring force</text>
  <rect x="190" y="125" width="30" height="16" style="fill:#e34948"/><rect x="220" y="125" width="30" height="16" style="fill:#2a78d6"/>
  <text x="270" y="138" ${M}>magnetic</text>
  <text x="160" y="16" text-anchor="middle" ${T}>A force is a push or a pull</text>
</svg>`;

const DIAG_FOODWEB = `<svg viewBox="0 0 320 170">${ARROW("fw")}
  ${[["Grass", 40, 140], ["Caterpillar", 40, 75], ["Rabbit", 160, 120], ["Bird", 40, 15], ["Snake", 160, 50], ["Eagle", 270, 30]].map(([t, x, y]) =>
    `<rect x="${x - 38}" y="${y}" width="76" height="24" rx="12" style="fill:var(--accent-bg);stroke:var(--accent)"/><text x="${x}" y="${y + 16}" text-anchor="middle" ${T}>${t}</text>`).join('')}
  <path d="M40 140 L40 101" ${S} marker-end="url(#fw)"/>
  <path d="M75 145 L125 138" ${S} marker-end="url(#fw)"/>
  <path d="M40 75 L40 41" ${S} marker-end="url(#fw)"/>
  <path d="M160 120 L160 76" ${S} marker-end="url(#fw)"/>
  <path d="M78 25 L230 40" ${S} marker-end="url(#fw)"/>
  <path d="M198 58 L235 50" ${S} marker-end="url(#fw)"/>
  <path d="M195 125 L265 56" ${S} marker-end="url(#fw)"/>
  <text x="250" y="110" ${M}>→ "is eaten by"</text><text x="250" y="124" ${M}>(energy flows)</text>
</svg>`;

/* ── topics ──────────────────────────────────────────────────────────── */
const TOPICS = [
/* Chapter 1 */
{
  id: "c1-t1", en: "1.1 What do living things need to carry out life processes?", category: CH1, theme: "Energy", page: 2,
  tags: ["energy", "life-processes", "needs"],
  summary: "Living things need energy — from food — plus air and water to grow, move, reproduce and stay alive.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Life processes</strong>: growing, moving, reproducing, responding, breathing (respiration) and repairing the body.",
      "All life processes need <strong>energy</strong>.",
      "Living things get energy from <strong>food</strong>; they also need <strong>air</strong> (oxygen) and <strong>water</strong>.",
      "Without energy, living things cannot carry out life processes and will die."
    ]) },
    { h: "Key Terms", body: terms([
      ["Life processes", "activities that keep a living thing alive, e.g. growth, reproduction, respiration"],
      ["Energy", "the ability to do work — needed for every life process"]
    ]) }
  ],
  examples: [
    { q: "Why do we feel weak when we have not eaten for a long time?", a: "Food is our source of energy. Without food, the body does not have enough energy for life processes such as moving." }
  ]
},
{
  id: "c1-t2", en: "1.2 Where does the energy in living things come from?", category: CH1, theme: "Energy", page: 2,
  tags: ["sun", "food-chain", "energy-flow"],
  summary: "The Sun is the main source of energy; plants trap it to make food, and animals get it by eating plants or other animals.",
  sections: [
    { h: "Key Concepts", body: ul([
      "The <strong>Sun</strong> is the main source of energy for living things.",
      "<strong>Plants</strong> trap light energy and store it as <strong>chemical potential energy in food</strong>.",
      "<strong>Animals</strong> cannot make food; they get energy by eating plants (herbivores), other animals (carnivores) or both (omnivores).",
      "Energy passes along a <strong>food chain</strong>: Sun → plant → animal → animal.",
      "Every food chain begins with a <strong>plant</strong> (producer), so all energy in animals can be traced back to the Sun."
    ]) },
    { h: "Key Terms", body: terms([
      ["Producer", "a plant — it makes its own food"],
      ["Consumer", "an animal — it eats other living things for food"],
      ["Chemical potential energy", "energy stored in food (and fuels, batteries)"]
    ]) },
    { h: "Common Mistakes", body: ul(["\"Animals get energy from the Sun by basking\" — wrong. Sunlight warms them, but their energy comes from food."]) }
  ],
  examples: [
    { q: "A lion eats zebras. Explain how the lion's energy comes from the Sun.", a: "Grass traps the Sun's light energy to make food. The zebra eats the grass, and the lion eats the zebra, so energy passes Sun → grass → zebra → lion." },
    { q: "Why does every food chain start with a plant?", a: "Only plants can trap light energy to make food; all other organisms depend on them for energy." }
  ]
},
{
  id: "c1-t3", en: "1.3 How is energy from the Sun used by plants?", category: CH1, theme: "Energy", page: 2,
  tags: ["photosynthesis", "chlorophyll", "starch", "experiments"],
  summary: "Photosynthesis: leaves use light, chlorophyll, water and carbon dioxide to make sugar, giving out oxygen.",
  diagram: DIAG_PHOTO,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Photosynthesis</strong>: water + carbon dioxide —(light energy, chlorophyll)→ sugar + oxygen.",
      "<strong>Light</strong> is the energy source; <strong>chlorophyll</strong> (green pigment in leaves) traps light.",
      "<strong>Water</strong> is absorbed by the roots and carried up the water-carrying tubes; <strong>carbon dioxide</strong> enters the leaf through the <strong>stomata</strong>.",
      "The sugar is used for energy and growth, or changed into <strong>starch</strong> for storage. <strong>Oxygen</strong> is given out through the stomata.",
      "<strong>Starch test</strong>: iodine solution turns <strong>blue-black</strong> where starch is present (leaf is boiled and decolourised in alcohol first).",
      "<strong>Experiments</strong>: de-starch the plant in the dark first; a <strong>variegated</strong> leaf shows chlorophyll is needed; covering part of a leaf shows light is needed.",
      "<strong>Rate of photosynthesis</strong> (e.g. bubbles of oxygen from a water plant) increases with more light, more carbon dioxide and a suitable temperature."
    ]) },
    { h: "Key Terms", body: terms([
      ["Photosynthesis", "the process by which plants make food using light energy"],
      ["Chlorophyll", "green substance in leaves that traps light energy"],
      ["Stomata", "tiny openings on leaves for gases to enter and leave"],
      ["Starch", "the form in which plants store food; turns iodine blue-black"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Oxygen is a <strong>product</strong> of photosynthesis, not something the plant needs for it.",
      "In a variegated leaf, only the <strong>green</strong> parts turn blue-black."
    ]) }
  ],
  examples: [
    { q: "Why is a plant placed in the dark for 2 days before a starch test experiment?", a: "To remove (use up) the starch already in its leaves, so any starch found later was made during the experiment." },
    { q: "More bubbles come from a water plant when a lamp is brought closer. Explain.", a: "Light intensity increases, so the rate of photosynthesis increases and more oxygen is given out." },
    { q: "After iodine testing, only the green parts of a variegated leaf turned blue-black. What does this show?", a: "Chlorophyll is needed for photosynthesis — only the parts with chlorophyll made starch." }
  ]
},
{
  id: "c1-t4", en: "1.4 How do plants and animals obtain energy from food?", category: CH1, theme: "Energy", page: 2,
  tags: ["respiration", "energy-release", "compare"],
  summary: "Respiration: food + oxygen → energy + carbon dioxide + water — in all living cells, day and night.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Respiration</strong> releases energy from food: food (sugar) + oxygen → <strong>energy</strong> + carbon dioxide + water.",
      "It takes place in <strong>all living cells</strong> of plants and animals, <strong>all the time</strong> (day and night).",
      "Plants carry out <strong>both</strong> photosynthesis (only in light) and respiration (all the time).",
      "In bright light a plant photosynthesises faster than it respires, so it gives out <strong>more oxygen</strong> than it takes in; in the dark it only takes in oxygen and gives out carbon dioxide.",
      "Respiration is <strong>not</strong> the same as breathing — breathing moves air in and out of the lungs; respiration happens in cells."
    ]) },
    { h: "Key Terms", body: terms([
      ["Respiration", "the process in cells that releases energy from food using oxygen"],
      ["Breathing", "taking air into and out of the lungs"]
    ]) },
    { h: "Common Mistakes", body: ul(["\"Plants respire only at night\" — wrong. Plants respire all the time; at night it is just not masked by photosynthesis."]) }
  ],
  examples: [
    { q: "State one difference between photosynthesis and respiration.", a: "Photosynthesis makes food and only happens in light (in green parts); respiration breaks down food to release energy and happens in all living cells all the time." },
    { q: "A plant is placed in a sealed jar in the dark. What happens to the amount of carbon dioxide in the jar? Why?", a: "It increases — the plant respires (giving out carbon dioxide) but cannot photosynthesise without light." }
  ]
},
learnt(1, CH1, "Energy", 2, [
  "Living things need energy, obtained from food, to carry out life processes.",
  "The Sun is the main source of energy for living things.",
  "Plants make food by photosynthesis, using light energy, chlorophyll, water and carbon dioxide; sugar and oxygen are produced.",
  "Food made by plants can be stored as starch, which turns iodine blue-black.",
  "Animals obtain energy by eating plants or other animals.",
  "Respiration releases energy from food in all living cells, using oxygen and giving out carbon dioxide and water."
]),

/* Chapter 2 */
{
  id: "c2-t1", en: "2.1 What is energy?", category: CH2, theme: "Energy", page: 18,
  tags: ["energy", "work"],
  summary: "Energy is the ability to do work — to make things move or change.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Energy</strong> is the ability to <strong>do work</strong>: to move, lift, heat, light or change something.",
      "We cannot see energy, but we can see and feel its <strong>effects</strong>.",
      "Living things need energy for life processes; machines need energy to work.",
      "Energy is measured in <strong>joules (J)</strong>."
    ]) },
    { h: "Key Terms", body: terms([["Energy", "the ability to do work"], ["Work", "done when a force makes something move"]]) }
  ],
  examples: [
    { q: "How do we know a moving car has energy?", a: "It can do work — e.g. if it hits something, it can push it or change its shape." }
  ]
},
{
  id: "c2-t2", en: "2.2 What are the different forms of energy?", category: CH2, theme: "Energy", page: 18,
  tags: ["kinetic", "potential", "light", "heat", "sound", "electrical"],
  summary: "Kinetic, potential (gravitational, elastic, chemical), light, heat, sound and electrical energy.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Kinetic energy</strong>: energy of a <strong>moving</strong> object — faster or heavier → more kinetic energy.",
      "<strong>Potential energy</strong> (stored energy):",
      "&nbsp;&nbsp;• <strong>Gravitational potential energy</strong> — due to height above the ground; higher or heavier → more.",
      "&nbsp;&nbsp;• <strong>Elastic potential energy</strong> — in a stretched or compressed spring, rubber band or bow.",
      "&nbsp;&nbsp;• <strong>Chemical potential energy</strong> — in food, fuels and batteries.",
      "<strong>Light energy</strong>, <strong>heat energy</strong>, <strong>sound energy</strong> and <strong>electrical energy</strong>."
    ]) },
    { h: "Key Terms", body: terms([
      ["Kinetic energy", "energy an object has because it is moving"],
      ["Gravitational potential energy", "stored energy due to an object's height"],
      ["Elastic potential energy", "stored energy in a stretched or compressed object"],
      ["Chemical potential energy", "energy stored in food, fuel and batteries"]
    ]) },
    { h: "Common Mistakes", body: ul(["A ball held still at the top of a slope has gravitational potential energy but <strong>no</strong> kinetic energy."]) }
  ],
  examples: [
    { q: "A stretched rubber band is released and flies off. What form of energy did it have before it was released?", a: "Elastic potential energy." },
    { q: "Which has more gravitational potential energy: a 1 kg book on a high shelf or the same book on a low shelf?", a: "The book on the high shelf — it is higher above the ground." }
  ]
},
{
  id: "c2-t3", en: "2.3 What is energy conversion?", category: CH2, theme: "Energy", page: 18,
  tags: ["conversion", "conservation-of-energy"],
  summary: "Energy changes from one form to another; it is never created or destroyed — some is 'lost' as heat and sound.",
  diagram: DIAG_CONVERT,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Energy conversion</strong>: energy changes from one form to another.",
      "Energy cannot be created or destroyed; the <strong>total</strong> stays the same.",
      "Torch: chemical PE (battery) → electrical → light + heat.",
      "Falling ball: gravitational PE → kinetic → (on hitting the ground) sound + heat + elastic PE.",
      "A bouncing ball rises <strong>lower</strong> each time because some energy is converted to heat and sound.",
      "Other examples: fan (electrical → kinetic + sound + heat), solar cell (light → electrical), eating and running (chemical PE → kinetic + heat)."
    ]) },
    { h: "Key Terms", body: terms([["Energy conversion", "a change of energy from one form to another"]]) },
    { h: "Common Mistakes", body: ul(["Energy is not \"used up\" — it is converted, often into heat that is not useful to us."]) }
  ],
  examples: [
    { q: "State the energy conversion when a ball is dropped and hits the floor.", a: "Gravitational potential energy → kinetic energy → sound and heat energy (and elastic potential energy as it squashes)." },
    { q: "Why does a bouncing ball not return to its original height?", a: "Some of its energy is converted into heat and sound each time it hits the ground, so it has less kinetic energy to rise." }
  ]
},
{
  id: "c2-t4", en: "2.4 Where does the energy we use come from?", category: CH2, theme: "Energy", page: 18,
  tags: ["sun", "fossil-fuels", "renewable", "non-renewable"],
  summary: "Most energy comes from the Sun — directly, or stored in fossil fuels; sources are renewable or non-renewable.",
  sections: [
    { h: "Key Concepts", body: ul([
      "The <strong>Sun</strong> is our main source of energy.",
      "<strong>Fossil fuels</strong> (coal, oil, natural gas) formed from the remains of plants and animals over millions of years — they store energy from the Sun as chemical PE.",
      "Fossil fuels are <strong>non-renewable</strong>: they cannot be replaced once used up. Burning them releases carbon dioxide and pollutants.",
      "<strong>Renewable</strong> sources do not run out: solar, wind, moving water (hydroelectric), and wood/biomass if replanted.",
      "Most of Singapore's electricity is generated by burning natural gas; solar panels are increasingly used."
    ]) },
    { h: "Key Terms", body: terms([
      ["Fossil fuels", "coal, oil and natural gas formed from remains of living things long ago"],
      ["Non-renewable", "cannot be replaced once used up"],
      ["Renewable", "can be replaced naturally / will not run out"]
    ]) }
  ],
  examples: [
    { q: "Explain why the energy in petrol came from the Sun.", a: "Petrol comes from oil, formed from the remains of plants and animals. The plants got energy from the Sun by photosynthesis, and the animals by eating plants." },
    { q: "Give one advantage of solar energy over coal.", a: "It is renewable and does not pollute the air when generating electricity." }
  ]
},
{
  id: "c2-t5", en: "2.5 How can we help to conserve energy?", category: CH2, theme: "Energy", page: 18,
  tags: ["conservation", "saving-energy", "environment"],
  summary: "Use less energy: switch off, choose energy-efficient appliances, take public transport, reduce–reuse–recycle.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Switch off lights, fans and appliances when not in use; unplug chargers.",
      "Use <strong>energy-efficient</strong> appliances and LED bulbs; set the air-conditioner at about 25 °C.",
      "Walk, cycle, or take <strong>public transport</strong> instead of a car.",
      "<strong>Reduce, reuse, recycle</strong> — making new things uses a lot of energy.",
      "Why: fossil fuels are running out, and burning them pollutes the air and adds carbon dioxide, which contributes to global warming."
    ]) },
    { h: "Key Terms", body: terms([["Conserve energy", "use energy wisely and avoid waste"]]) }
  ],
  examples: [
    { q: "How does taking the MRT instead of a car help to conserve energy?", a: "One train carries many people, so less fuel is burnt per person than if each person drove a car." }
  ]
},
learnt(2, CH2, "Energy", 18, [
  "Energy is the ability to do work.",
  "Forms of energy include kinetic, potential (gravitational, elastic, chemical), light, heat, sound and electrical energy.",
  "Energy can be converted from one form to another; it cannot be created or destroyed.",
  "The Sun is our main source of energy; fossil fuels store energy from the Sun.",
  "Energy sources can be renewable or non-renewable.",
  "We should conserve energy to save resources and protect the environment."
]),

/* Chapter 3 */
{
  id: "c3-t1", en: "3.1 What is a force?", category: CH3, theme: "Interactions", page: 48,
  tags: ["force", "push", "pull", "newton", "spring-balance"],
  summary: "A force is a push or a pull; it is measured in newtons (N) with a spring balance.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>force</strong> is a <strong>push</strong> or a <strong>pull</strong>.",
      "We cannot see forces, only their <strong>effects</strong>.",
      "Some forces need <strong>contact</strong> (friction, pushing a trolley); some act <strong>without contact</strong> (gravity, magnetic force).",
      "Force is measured in <strong>newtons (N)</strong> using a <strong>spring balance</strong> (force meter).",
      "A force acts between two objects — it is an <strong>interaction</strong>."
    ]) },
    { h: "Key Terms", body: terms([
      ["Force", "a push or a pull"],
      ["Newton (N)", "the unit of force"],
      ["Spring balance", "instrument used to measure force"]
    ]) }
  ],
  examples: [
    { q: "Name the instrument used to measure force and its unit.", a: "A spring balance (force meter); newtons (N)." },
    { q: "Is the force between a magnet and a paper clip a contact or non-contact force?", a: "Non-contact — the magnet attracts the clip without touching it." }
  ]
},
{
  id: "c3-t2", en: "3.2 What are the effects of forces?", category: CH3, theme: "Interactions", page: 48,
  tags: ["motion", "speed", "direction", "shape"],
  summary: "A force can move or stop an object, change its speed or direction, or change its shape and size.",
  sections: [
    { h: "Key Concepts", body: ul([
      "Make a <strong>stationary</strong> object <strong>move</strong> (kicking a ball).",
      "<strong>Stop</strong> a moving object (catching a ball).",
      "Change the <strong>speed</strong> of a moving object — speed up or slow down.",
      "Change the <strong>direction</strong> of a moving object (hitting a ball with a bat).",
      "Change the <strong>shape or size</strong> of an object (squeezing clay, stretching a spring).",
      "A bigger force usually gives a bigger effect."
    ]) },
    { h: "Key Terms", body: terms([["Stationary", "not moving"]]) }
  ],
  examples: [
    { q: "A goalkeeper catches a ball. What is the effect of the force?", a: "It stops a moving object." },
    { q: "State two effects of a force when you squeeze a sponge ball.", a: "Changes its shape; changes its size." }
  ]
},
{
  id: "c3-t3", en: "3.3 What are the different types of forces?", category: CH3, theme: "Interactions", page: 48,
  tags: ["gravity", "friction", "elastic", "magnetic", "air-resistance"],
  summary: "Gravitational force, frictional force (incl. air resistance), elastic spring force and magnetic force.",
  diagram: DIAG_FORCES,
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Gravitational force</strong>: the Earth pulls everything towards its centre; non-contact. An object's <strong>weight</strong> is the gravitational force on it (in N).",
      "<strong>Frictional force</strong>: acts between two surfaces in contact and <strong>opposes motion</strong>; rougher surfaces → more friction. Friction produces <strong>heat</strong> and causes wear.",
      "Friction is <strong>useful</strong> (walking without slipping, brakes, writing) — but can be <strong>reduced</strong> with lubricants (oil), ball bearings, rollers, smooth surfaces.",
      "<strong>Air resistance</strong> is friction from air on a moving object — e.g. a parachute slows a fall.",
      "<strong>Elastic spring force</strong>: a stretched or compressed spring/rubber band pushes or pulls back; more stretch → bigger force (until the elastic limit).",
      "<strong>Magnetic force</strong>: attraction or repulsion between magnets, or attraction of magnetic materials; non-contact."
    ]) },
    { h: "Key Terms", body: terms([
      ["Gravitational force", "the pull of the Earth on all objects"],
      ["Weight", "the gravitational force acting on an object"],
      ["Frictional force", "a force that opposes motion between surfaces in contact"],
      ["Elastic spring force", "force exerted by a stretched or compressed elastic object"]
    ]) },
    { h: "Common Mistakes", body: ul([
      "Mass (kg) and weight (N) are not the same — weight is a force.",
      "Friction always acts <strong>opposite</strong> to the direction of motion."
    ]) }
  ],
  examples: [
    { q: "Why do shoes have rubber soles with grooves?", a: "To increase friction between the shoe and the ground so we do not slip." },
    { q: "In an experiment, a block is pulled across different surfaces with a spring balance. Which reading will be highest — glass, wood or sandpaper? Why?", a: "Sandpaper. It is the roughest surface, so there is the most friction to overcome." }
  ]
},
learnt(3, CH3, "Interactions", 48, [
  "A force is a push or a pull, measured in newtons (N) using a spring balance.",
  "A force can move or stop an object, change its speed or direction, and change its shape or size.",
  "Gravitational force pulls objects towards the Earth; weight is the gravitational force on an object.",
  "Frictional force opposes motion between surfaces in contact; it can be useful or reduced.",
  "Elastic spring force is exerted by stretched or compressed objects.",
  "Magnetic force acts between magnets and magnetic materials without contact."
]),

/* Chapter 4 */
{
  id: "c4-t1", en: "4.1 What makes up an environment?", category: CH4, theme: "Interactions", page: 74,
  tags: ["environment", "physical-factors", "living-factors"],
  summary: "An environment is made up of living things and non-living (physical) factors such as light, temperature, water, air and soil.",
  sections: [
    { h: "Key Concepts", body: ul([
      "An <strong>environment</strong> is the surroundings of an organism.",
      "It has <strong>living things</strong> (plants, animals, fungi, bacteria) and <strong>non-living / physical factors</strong>.",
      "Physical factors: <strong>light</strong>, <strong>temperature</strong>, <strong>water</strong>, <strong>air</strong> (oxygen, carbon dioxide), <strong>soil / minerals</strong>.",
      "Living and non-living parts <strong>interact</strong> and affect each other."
    ]) },
    { h: "Key Terms", body: terms([
      ["Environment", "the surroundings of an organism"],
      ["Organism", "a living thing"],
      ["Physical factors", "non-living conditions such as light, temperature and water"]
    ]) }
  ],
  examples: [
    { q: "Name three physical factors in a pond environment.", a: "Light, temperature of the water, amount of dissolved oxygen (also water, minerals)." }
  ]
},
{
  id: "c4-t2", en: "4.2 What affects the survival of an organism in an environment?", category: CH4, theme: "Interactions", page: 74,
  tags: ["survival", "physical-factors", "food", "predators"],
  summary: "Physical factors (light, temperature, water, air) and living factors (food, mates, predators, space) decide whether an organism survives.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Physical factors</strong>: amount of light, temperature, water, air (oxygen), minerals in the soil.",
      "<strong>Living factors</strong>: availability of food, mates, shelter and space; presence of predators or diseases.",
      "Each organism can only survive within a certain range of conditions.",
      "If conditions change, organisms may <strong>adapt</strong>, <strong>move away</strong> or <strong>die</strong>.",
      "Example: plants under a big tree grow poorly because they get less light."
    ]) },
    { h: "Key Terms", body: terms([["Survival", "staying alive"], ["Predator", "an animal that hunts and eats other animals"], ["Prey", "an animal that is hunted and eaten"]]) }
  ],
  examples: [
    { q: "Fish in a tank died when the air pump was switched off. Explain.", a: "Less oxygen dissolved in the water, so the fish did not have enough oxygen to survive." },
    { q: "Why do few plants grow on a dark forest floor?", a: "Tall trees block most of the light, so plants below cannot make enough food." }
  ]
},
{
  id: "c4-t3", en: "4.3 Where do different organisms live?", category: CH4, theme: "Interactions", page: 74,
  tags: ["habitat", "population", "community"],
  summary: "Organisms live in habitats; organisms of one kind form a population; different populations together form a community.",
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>habitat</strong> is the place where an organism lives (pond, field, garden, mangrove, tree, under a rotting log).",
      "A habitat provides <strong>food, water, shelter</strong> and a place to reproduce.",
      "A <strong>population</strong> is a group of organisms of the <strong>same kind</strong> living in the same place at the same time.",
      "A <strong>community</strong> is made up of <strong>different populations</strong> living together in a habitat.",
      "Habitat + community (and physical factors) = an environment where interactions happen."
    ]) },
    { h: "Key Terms", body: terms([
      ["Habitat", "the place where an organism lives"],
      ["Population", "organisms of the same kind in one place at the same time"],
      ["Community", "different populations living together in a habitat"]
    ]) },
    { h: "Common Mistakes", body: ul(["All the fish in a pond are <strong>not</strong> one population if they are different kinds — each kind is a separate population."]) }
  ],
  examples: [
    { q: "In a pond there are 20 guppies, 5 frogs and many water plants. How many populations of animals are mentioned?", a: "Two — the guppy population and the frog population." },
    { q: "What is the difference between a population and a community?", a: "A population is one kind of organism; a community is all the different populations living together in a habitat." }
  ]
},
{
  id: "c4-t4", en: "4.4 How do organisms in a community interact to stay alive?", category: CH4, theme: "Interactions", page: 74,
  tags: ["food-chain", "food-web", "producer", "consumer", "decomposer"],
  summary: "Through food chains and food webs: producers make food, consumers eat, and decomposers recycle nutrients.",
  diagram: DIAG_FOODWEB,
  sections: [
    { h: "Key Concepts", body: ul([
      "A <strong>food chain</strong> shows who eats whom; the arrow means \"is eaten by\" and shows the flow of energy.",
      "<strong>Producers</strong> (plants) make food; <strong>consumers</strong> eat other organisms: herbivores (plants), carnivores (animals), omnivores (both).",
      "A <strong>food web</strong> is made of linked food chains in a community.",
      "<strong>Predators</strong> hunt <strong>prey</strong>; the numbers of predator and prey affect each other.",
      "<strong>Decomposers</strong> (fungi, bacteria) break down dead organisms and waste, returning nutrients to the soil for plants.",
      "If one population changes, others in the food web are affected (e.g. fewer snakes → more rabbits → less grass)."
    ]) },
    { h: "Key Terms", body: terms([
      ["Food chain", "a feeding relationship showing energy passing from one organism to another"],
      ["Food web", "linked food chains in a community"],
      ["Decomposer", "organism that breaks down dead matter (fungi, bacteria)"],
      ["Herbivore / carnivore / omnivore", "eats plants / animals / both"]
    ]) },
    { h: "Common Mistakes", body: ul(["Food-chain arrows point <strong>to the eater</strong> (grass → rabbit), not from it."]) }
  ],
  examples: [
    { q: "In the food chain grass → grasshopper → frog → snake, what happens to the grasshoppers if all the frogs are removed? Why?", a: "They increase at first, because no frogs eat them. (Later they may decrease when they run out of grass.)" },
    { q: "Why are decomposers important?", a: "They break down dead plants and animals and return nutrients to the soil, which plants need to grow." }
  ]
},
learnt(4, CH4, "Interactions", 74, [
  "An environment is made up of living things and physical factors such as light, temperature, water and air.",
  "Physical and living factors affect the survival of organisms.",
  "A habitat is the place where an organism lives.",
  "A population is a group of organisms of the same kind; a community is made up of different populations in a habitat.",
  "Organisms interact through food chains and food webs; energy flows from producers to consumers.",
  "Decomposers break down dead matter and return nutrients to the soil."
]),

/* Chapter 5 */
{
  id: "c5-t1", en: "5.1 How do organisms survive well in an environment?", category: CH5, theme: "Interactions", page: 88,
  tags: ["adaptation", "structural", "behavioural", "camouflage"],
  summary: "By adaptations — structural (body features) and behavioural (actions) — that help them get food, air and water, escape enemies, reproduce and survive extremes.",
  sections: [
    { h: "Key Concepts", body: ul([
      "An <strong>adaptation</strong> is a feature or behaviour that helps an organism survive in its environment.",
      "<strong>Structural adaptations</strong> (body parts): thick fur and fat (polar bear), webbed feet (duck), beak shape for its food, sharp claws, <strong>camouflage</strong> colours, cactus spines and thick waxy stem, water lily with large floating leaves and stomata on the upper surface.",
      "<strong>Behavioural adaptations</strong> (actions): migration, hibernation, playing dead, living in groups, coming out at night (nocturnal), building nests.",
      "Adaptations help organisms: <strong>obtain food</strong>, <strong>get air/water</strong>, <strong>protect themselves</strong> from enemies, <strong>reproduce</strong> (bright flowers, seed dispersal), and survive <strong>extreme temperatures</strong>.",
      "Mangrove plants: breathing roots stick out of the mud; prop roots hold the plant in soft mud."
    ]) },
    { h: "Key Terms", body: terms([
      ["Adaptation", "a feature or behaviour that helps an organism survive"],
      ["Structural adaptation", "a body part or feature"],
      ["Behavioural adaptation", "the way an organism acts"],
      ["Camouflage", "colours or patterns that help an organism blend into its surroundings"]
    ]) },
    { h: "Common Mistakes", body: ul(["Answer with the <strong>link</strong>: state the feature AND how it helps survival (e.g. \"thick fur traps heat, keeping the bear warm in the cold\")."]) }
  ],
  examples: [
    { q: "How do the spines of a cactus help it survive in the desert?", a: "Spines are leaves with very small surface area, reducing water loss; they also protect the cactus from animals." },
    { q: "Is migration a structural or behavioural adaptation? How does it help birds?", a: "Behavioural. Birds move to warmer places with more food during winter." }
  ]
},
{
  id: "c5-t2", en: "5.2 How do the actions of humans affect the environment?", category: CH5, theme: "Interactions", page: 88,
  tags: ["deforestation", "pollution", "global-warming", "conservation"],
  summary: "Deforestation, pollution, over-hunting and burning fuels harm habitats; conservation, recycling and replanting protect them.",
  sections: [
    { h: "Key Concepts", body: ul([
      "<strong>Deforestation</strong> (clearing forests): loss of habitats, fewer plants taking in carbon dioxide, soil erosion, organisms may become extinct.",
      "<strong>Pollution</strong>: air (smoke, exhaust), water (oil spills, chemicals), land (litter, plastic) — harms or kills organisms.",
      "<strong>Burning fossil fuels</strong> increases carbon dioxide in the air → <strong>global warming</strong> (higher temperatures, melting ice, rising sea levels).",
      "<strong>Over-fishing and hunting</strong> reduce populations and upset food webs.",
      "<strong>Positive actions</strong>: nature reserves and parks, replanting trees, laws protecting wildlife, recycling, saving energy and water, using renewable energy."
    ]) },
    { h: "Key Terms", body: terms([
      ["Deforestation", "cutting down large areas of forest"],
      ["Global warming", "the rise in Earth's average temperature"],
      ["Conservation", "protecting the environment and its organisms"],
      ["Extinct", "no more of that kind of organism is alive"]
    ]) }
  ],
  examples: [
    { q: "Explain how cutting down forests can contribute to global warming.", a: "Fewer trees take in carbon dioxide for photosynthesis, so more carbon dioxide stays in the air, trapping more heat. Burning the trees also releases carbon dioxide." },
    { q: "Give two ways your school can help protect the environment.", a: "Recycle paper and plastic; switch off lights and fans when not in use; plant trees; reduce use of disposables." }
  ]
},
learnt(5, CH5, "Interactions", 88, [
  "Organisms have adaptations that help them survive in their environment.",
  "Structural adaptations are body features; behavioural adaptations are actions.",
  "Adaptations help organisms obtain food, air and water, protect themselves, reproduce and survive extreme temperatures.",
  "Human actions such as deforestation, pollution and burning fuels harm the environment.",
  "We can protect the environment through conservation, recycling, replanting and saving energy."
])
];

const COMPARISONS = [
  {
    id: "cmp-photo-resp", title: "Photosynthesis vs respiration",
    rows: [
      ["", "Photosynthesis", "Respiration"],
      ["Purpose", "Makes food", "Releases energy from food"],
      ["Takes in", "Water + carbon dioxide", "Food + oxygen"],
      ["Gives out", "Sugar + oxygen", "Energy + carbon dioxide + water"],
      ["Where", "Green parts of plants (chlorophyll)", "All living cells (plants and animals)"],
      ["When", "Only in light", "All the time"]
    ]
  },
  {
    id: "cmp-energy-src", title: "Renewable vs non-renewable energy",
    rows: [
      ["", "Renewable", "Non-renewable"],
      ["Runs out?", "No", "Yes"],
      ["Examples", "Solar, wind, moving water", "Coal, oil, natural gas"],
      ["Pollution", "Little or none when used", "Releases carbon dioxide and pollutants"]
    ]
  },
  {
    id: "cmp-forces", title: "Types of forces",
    rows: [
      ["", "Contact?", "Example"],
      ["Gravitational force", "No", "An apple falls to the ground"],
      ["Frictional force", "Yes", "Brakes slow a bicycle"],
      ["Elastic spring force", "Yes", "A catapult launches a stone"],
      ["Magnetic force", "No", "A magnet picks up pins"]
    ]
  },
  {
    id: "cmp-roles", title: "Roles in a food web",
    rows: [
      ["", "What it does", "Examples"],
      ["Producer", "Makes its own food by photosynthesis", "Grass, trees, algae"],
      ["Consumer", "Eats other organisms", "Rabbit (herbivore), snake (carnivore), human (omnivore)"],
      ["Decomposer", "Breaks down dead matter, returns nutrients", "Mushroom, bacteria"]
    ]
  },
  {
    id: "cmp-adapt", title: "Structural vs behavioural adaptations",
    rows: [
      ["", "Structural", "Behavioural"],
      ["What it is", "A body part or feature", "The way an organism acts"],
      ["Examples", "Webbed feet, thick fur, camouflage, cactus spines", "Migration, hibernation, playing dead, living in groups"]
    ]
  }
];

const CATEGORY_PALETTE = [
  { light: "#008300", dark: "#33a033" }, // 1 photosynthesis — green
  { light: "#eda100", dark: "#c98500" }, // 2 energy conversion — yellow
  { light: "#e34948", dark: "#e66767" }, // 3 forces — red
  { light: "#2a78d6", dark: "#3987e5" }, // 4 environment — blue
  { light: "#4a3aa7", dark: "#9085e9" }  // 5 surviving — violet
];

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA.p6 = {
  root: "P6 Science",
  source: "Primary 6 Science textbook — Themes: Energy (Ch 1–2), Interactions (Ch 3–5)",
  topics: TOPICS,
  comparisons: COMPARISONS,
  categoryPalette: CATEGORY_PALETTE,
  trickyColor: { light: "#b8912a", dark: "#d4aa4a" }
};

})();
