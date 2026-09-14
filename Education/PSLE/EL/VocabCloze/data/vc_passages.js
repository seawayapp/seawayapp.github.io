// Vocabulary Cloze passages — append new passages to this array, do not recreate.
// Mark tested words/phrases inline in `text` as {{num|phrase}}.
// Each question's "answer" is the 1-based index into its options array.
const VC_PASSAGES = [
  {
    id: "2025-vc-rgps",
    source: "2025 RGPS — Vocabulary Cloze",
    title: "Para-swimmer Yip Pin Xiu",
    marks: 5,
    instructions:
      "For each question, choose the word or phrase closest in meaning to the underlined word(s) in the passage. Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from “Para-swimmer Yip hopes to inspire kids” — The New Paper",
    text:
      "As a national para-swimmer, Yip Pin Xiu juggles 13 training sessions a week, school and family commitments. She often sacrifices time with loved ones for training but the experience has {{16|raised}} her morale and taught her resilience. Recently, at the One Team Singapore Roadshow in Zhonghua Primary School, she shared her experiences with enthusiastic students. The event included hands-on activities and is part of an engaging Team Singapore school outreach programme to {{17|promote}} the upcoming Olympic and Paralympic Games.\n\n" +
      "Yip, who set two world records {{18|in quick succession}} at the International Paralympic Committee Swimming European Open Championship, enjoyed speaking to the young audience. She believes such an event gives a good {{19|sense}} of Singapore's sports and teaches valuable lessons like time management. Although she does not see herself as a role model, Yip hopes to pass on moral values. Her dedication is {{20|regarded}} as an inspiration to many. Yip's story is one that shows that with perseverance, one can succeed.",
    questions: [
      { num: 16, phrase: "raised", options: ["boosted", "advanced", "celebrated", "progressed"], answer: 1,
        note_en: "“Raised her morale” means it lifted/boosted her spirits.", note_cn: "raised her morale 意为提振了她的士气，即 boosted（振奋、提升）" },
      { num: 17, phrase: "promote", options: ["improve", "publicise", "contribute", "encourage"], answer: 2,
        note_en: "An outreach programme to “promote” the Games means to publicise/advertise them.", note_cn: "promote 在此意为宣传、推广（publicise）" },
      { num: 18, phrase: "in quick succession", options: ["briefly", "rapidly", "intermittently", "consecutively"], answer: 4,
        note_en: "Setting two records “in quick succession” means one right after another — consecutively.", note_cn: "in quick succession 意为接连发生、一个接一个（consecutively）" },
      { num: 19, phrase: "sense", options: ["feel", "sight", "touch", "sound"], answer: 1,
        note_en: "“A good sense of” something means a good feel/understanding of it.", note_cn: "a good sense of 意为对……的感受、体会（feel）" },
      { num: 20, phrase: "regarded", options: ["viewed", "favoured", "observed", "approved"], answer: 1,
        note_en: "“Regarded as” means viewed/considered as.", note_cn: "regarded as 意为被视为、被看作（viewed as）" }
    ]
  },
  {
    id: "2025-vc-catholic-high",
    source: "2025 Catholic High — Vocabulary Cloze",
    title: "Racial Harmony Day",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s) in the passage. Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted — Racial Harmony Day",
    text:
      "In a multiracial country like Singapore, racial harmony is an important part of life. Racial Harmony Day is celebrated on 21 July each year to remind Singaporeans of the importance of racial and religious tolerance and unity.\n\n" +
      "Fun and special activities are held in schools to {{16|capture the attention of}} young people and help them learn about other cultures. Classrooms and halls are often {{17|adorned}} with traditional and cultural items showing Singapore's rich diversity. There are also {{18|designated}} booths for games, food tasting, and performances from different ethnic groups.\n\n" +
      "Traditional customs, such as clothing and food, have also {{19|evolved}} over time. For example, some traditional dishes now include modern ingredients, and cultural clothing is sometimes designed with a modern twist.\n\n" +
      "The education system is {{20|instrumental}} in teaching values such as respect and kindness from a young age. Through these efforts, Singapore continues to build a strong, united society where everyone feels valued and included.",
    questions: [
      { num: 16, phrase: "capture the attention of", options: ["entice", "delight", "bewitch", "captivate"], answer: 4,
        note_en: "To “capture the attention of” young people means to captivate them.", note_cn: "capture the attention of 意为吸引……的注意力，即 captivate（使着迷）" },
      { num: 17, phrase: "adorned", options: ["arrayed", "enriched", "enhanced", "decorated"], answer: 4,
        note_en: "Classrooms “adorned” with cultural items means decorated with them.", note_cn: "adorned 意为装饰（decorated）" },
      { num: 18, phrase: "designated", options: ["exclusive", "dedicated", "delegated", "customised"], answer: 2,
        note_en: "“Designated booths” are booths dedicated/assigned for a specific purpose.", note_cn: "designated 意为专门指定的（dedicated）" },
      { num: 19, phrase: "evolved", options: ["changed", "advanced", "flourished", "progressed"], answer: 1,
        note_en: "Customs that have “evolved over time” have changed gradually.", note_cn: "evolved 意为逐渐演变、改变（changed）" },
      { num: 20, phrase: "instrumental", options: ["powerful", "dominant", "significant", "necessary"], answer: 3,
        note_en: "“Instrumental in teaching values” means playing a significant/important part in it.", note_cn: "instrumental 意为起重要作用的（significant）" }
    ]
  },
  {
    id: "2025-vc-red-swastika",
    source: "2025 Red Swastika — Vocabulary Cloze",
    title: "The Physics of Brakes",
    marks: 5,
    instructions:
      "For each question, choose the word(s) closest in meaning to the underlined word(s). Shade the correct oval (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from moralstories26.com",
    text:
      "During a physics lesson, a teacher asked, \"Why do vehicles have brakes?\" {{16|An inquisitive}} student replied that it was to bring them to a stop. Another said {{17|in an assertive tone}} that it was to reduce or {{18|control}} speed. The teacher nodded and said, \"It also allows us to go faster.\" The class fell silent. The teacher continued, \"Imagine driving without the {{19|ability}} to slow down. Would you still speed up? It is that ability which gives us the courage to move swiftly, knowing we can halt when needed.\"\n\n" +
      "He added, \"In life, we have similar {{20|safeguards}}. They come in the form of your parents, teachers or mentors. They question our direction and remind us to pause. Yet these very limits give us the confidence to push ahead.\"",
    questions: [
      { num: 16, phrase: "An inquisitive", options: ["A curious", "A hesitant", "An eager", "An impulsive"], answer: 1,
        note_en: "An “inquisitive” student is a curious one.", note_cn: "inquisitive 意为好奇的（curious）" },
      { num: 17, phrase: "in an assertive tone", options: ["sternly", "timidly", "quietly", "confidently"], answer: 4,
        note_en: "An “assertive tone” is a confident, self-assured tone.", note_cn: "assertive tone 意为自信、坚定的语气（confidently）" },
      { num: 18, phrase: "control", options: ["set", "direct", "monitor", "regulate"], answer: 4,
        note_en: "To “control” speed means to regulate it.", note_cn: "control 意为调节、控制（regulate）" },
      { num: 19, phrase: "ability", options: ["skill", "power", "capacity", "potential"], answer: 3,
        note_en: "The “ability” to slow down is the capacity to do so.", note_cn: "ability 意为能力（capacity）" },
      { num: 20, phrase: "safeguards", options: ["protection", "defences", "shelters", "support"], answer: 2,
        note_en: "“Safeguards” — parents, teachers, mentors — are protective defences in our lives.", note_cn: "safeguards 意为保护措施、防线（defences）" }
    ]
  },
  {
    id: "2025-vc-mgs",
    source: "2025 MGS — Vocabulary Cloze",
    title: "Screen Time & Mental Health",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined words. Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted — screen time and children's mental health",
    text:
      "Too much screen time is bad for children. Social media may be one of the reasons that mental health among young people seems to be {{16|getting worse}}. Continuous scrolling online not only affects sleep quality, but also takes time away from playing with friends, schoolwork and other activities. {{17|Additionally}}, children are deprived of healthier physical activities. All these can add anxiety and feelings of depression.\n\n" +
      "Children are also {{18|especially}} vulnerable to being harmed in digital spaces. They are at an age where they are exploring their own identities. There is a strong need to find friends and to belong. This makes children easy prey for strangers who want to {{19|take advantage of}} them online. Also, because their self-control is not fully developed yet, they may be more {{20|prone}} to screen addiction. To help parents and teachers protect children from social media's ill effects, Singapore's Ministry of Health has provided recommendations for the optimal amount of screen time.",
    questions: [
      { num: 16, phrase: "getting worse", options: ["dissipating", "depreciating", "deteriorating", "disintegrating"], answer: 3,
        note_en: "Mental health “getting worse” means deteriorating.", note_cn: "getting worse 意为恶化（deteriorating）" },
      { num: 17, phrase: "Additionally", options: ["Moreover", "Therefore", "Meanwhile", "Regardless"], answer: 1,
        note_en: "“Additionally” adds another point, like “Moreover”.", note_cn: "Additionally 意为此外（Moreover）" },
      { num: 18, phrase: "especially", options: ["mainly", "usually", "commonly", "particularly"], answer: 4,
        note_en: "“Especially vulnerable” means particularly vulnerable.", note_cn: "especially 意为尤其、特别（particularly）" },
      { num: 19, phrase: "take advantage of", options: ["exploit", "misuse", "swindle", "deceive"], answer: 1,
        note_en: "Strangers who “take advantage of” children exploit them.", note_cn: "take advantage of 意为利用（exploit）" },
      { num: 20, phrase: "prone", options: ["averse", "exposed", "responsive", "susceptible"], answer: 4,
        note_en: "More “prone to” addiction means more susceptible to it.", note_cn: "prone 意为易于……的、倾向于……的（susceptible）" }
    ]
  },
  {
    id: "2025-vc-paya-lebar-mgs",
    source: "2025 Paya Lebar MGS — Vocabulary Cloze",
    title: "The Electric Eel",
    marks: 5,
    instructions:
      "For each question, choose the word(s) closest in meaning to the underlined words. Shade the correct oval (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from National Geographic Kids",
    text:
      "The electric eel gets its name from its ability to generate electricity. Specialised organs within its body {{16|discharge}} powerful electric shocks of up to 650 volts.\n\n" +
      "Despite having this ability, electric eels are not naturally threatening. They use their electric shocks mainly to stun their prey and {{17|deter}} predators.\n\n" +
      "Electric eels are nocturnal and are most active at night. {{18|Residing}} in murky, dark waters, they have poor vision. Rather than relying on their sight, they give out weak electric signals that function like radar, allowing them to find their prey. Upon finding smaller fish, they send a {{19|significantly}} stronger shock to prevent their catch from escaping.\n\n" +
      "How strong can an electric eel's shock be? Well, the shock of an electric eel has been known to knock a horse off its feet. Truly, it is an astonishing {{20|feat}}!",
    questions: [
      { num: 16, phrase: "discharge", options: ["eject", "expel", "release", "dispense"], answer: 3,
        note_en: "To “discharge” a shock means to release it.", note_cn: "discharge 意为释放（release）" },
      { num: 17, phrase: "deter", options: ["stop", "avoid", "divert", "defeat"], answer: 1,
        note_en: "To “deter” predators means to stop/discourage them from attacking.", note_cn: "deter 意为阻止、使打消念头（stop）" },
      { num: 18, phrase: "Residing", options: ["Living", "Lodging", "Occupying", "Frequenting"], answer: 1,
        note_en: "“Residing” in dark waters means living in them.", note_cn: "Residing 意为居住（Living）" },
      { num: 19, phrase: "significantly", options: ["slightly", "profoundly", "importantly", "considerably"], answer: 4,
        note_en: "A “significantly stronger” shock is a considerably stronger one.", note_cn: "significantly 意为相当地、显著地（considerably）" },
      { num: 20, phrase: "feat", options: ["gesture", "milestone", "performance", "accomplishment"], answer: 4,
        note_en: "An “astonishing feat” is an impressive accomplishment.", note_cn: "feat 意为壮举、成就（accomplishment）" }
    ]
  },
  {
    id: "2025-vc-nan-hua",
    source: "2025 Nan Hua — Vocabulary Cloze",
    title: "Marley the Dog",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s). Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from Marley & Me by John Grogan",
    text:
      "When we first brought Marley home, he was a tiny puppy with oversized paws and endless energy. He fitted into our hearts {{16|in the blink of an eye}}, becoming a part of our daily routines. Every morning, Marley would wait by the door, his tail wagging back and forth, eager for his walk.\n\n" +
      "\"Marley, you always know how to cheer me up,\" I said one morning as I put on his leash. He looked up at me with his big eyes, as if he {{17|comprehended}} every word. Despite his mischievous nature, Marley had a knack for finding the most comfortable spot in the house, usually our favourite couch. His playful antics and {{18|boundless}} enthusiasm brought both chaos and joy to our lives. Marley was {{19|undeniably}} clumsy, often knocking over vases and scattering newspapers around the house.\n\n" +
      "Yet, in the evenings, he would curl up beside us, breathing quietly, offering a sense of lasting {{20|companionship}} that words couldn't describe. Through all the ups and downs, Marley remained by our side, teaching us about loyalty and love.",
    questions: [
      { num: 16, phrase: "in the blink of an eye", options: ["instantly", "regularly", "gradually", "eventually"], answer: 1,
        note_en: "Fitting into our hearts “in the blink of an eye” happened instantly.", note_cn: "in the blink of an eye 意为一眨眼间、瞬间（instantly）" },
      { num: 17, phrase: "comprehended", options: ["felt", "anticipated", "recognised", "understood"], answer: 4,
        note_en: "As if he “comprehended” every word means understood it.", note_cn: "comprehended 意为理解（understood）" },
      { num: 18, phrase: "boundless", options: ["intense", "excessive", "unbearable", "inexhaustible"], answer: 4,
        note_en: "“Boundless” enthusiasm is enthusiasm without limits — inexhaustible.", note_cn: "boundless 意为无穷无尽的（inexhaustible）" },
      { num: 19, phrase: "undeniably", options: ["certainly", "extremely", "apparently", "supposedly"], answer: 1,
        note_en: "“Undeniably clumsy” means certainly/definitely clumsy.", note_cn: "undeniably 意为无可否认地、确实地（certainly）" },
      { num: 20, phrase: "companionship", options: ["warmth", "rapport", "empathy", "friendship"], answer: 4,
        note_en: "A sense of “companionship” is a sense of friendship.", note_cn: "companionship 意为陪伴、友谊（friendship）" }
    ]
  },
  {
    id: "2025-vc-nan-yang",
    source: "2025 Nan Yang — Vocabulary Cloze",
    title: "Gaming Addiction",
    marks: 5,
    instructions:
      "For each question, choose the word(s) closest in meaning to the underlined word(s). Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet (OAS).",
    credit: "Adapted from Kids+ Pediatrics",
    text:
      "Gaming addiction has become a growing concern, especially among children. While video games can be {{16|engaging}} as a pastime, excessive gaming can lead to serious consequences. Some children become so {{17|caught up}} in their games that they neglect their studies and even lose sleep. Parents who try to limit their child's gaming often face {{18|resistance}}, with some children becoming agitated or even defiant when asked to stop. One reason gaming is so {{19|compelling}} is the sense of achievement it provides. Many online games reward players for completing tasks, encouraging them to keep playing to unlock new skills and abilities. This constant reinforcement {{20|fosters}} an addictive cycle, making it difficult for some children to stop. If left unchecked, this cycle may impair a child's development, affecting attention span, emotional control, and real-life social skills.",
    questions: [
      { num: 16, phrase: "engaging", options: ["amusing", "tempting", "satisfying", "captivating"], answer: 4,
        note_en: "Games that are “engaging” are captivating — they hold your attention.", note_cn: "engaging 意为吸引人的（captivating）" },
      { num: 17, phrase: "caught up", options: ["absorbed", "distracted", "indifferent", "overwhelmed"], answer: 1,
        note_en: "Being “caught up in” games means being absorbed in them.", note_cn: "caught up 意为全神贯注、沉浸其中（absorbed）" },
      { num: 18, phrase: "resistance", options: ["hesitation", "opposition", "discomfort", "stubbornness"], answer: 2,
        note_en: "Facing “resistance” from children means facing their opposition.", note_cn: "resistance 意为抵抗、反对（opposition）" },
      { num: 19, phrase: "compelling", options: ["necessary", "irresistible", "persuasive", "compulsory"], answer: 2,
        note_en: "Gaming that is “compelling” is irresistible — hard to stop.", note_cn: "compelling 意为极具吸引力、难以抗拒的（irresistible）" },
      { num: 20, phrase: "fosters", options: ["limits", "creates", "controls", "develops"], answer: 4,
        note_en: "Reinforcement that “fosters” a cycle encourages/develops it.", note_cn: "fosters 意为促进、培养（develops）" }
    ]
  },
  {
    id: "2025-vc-tao-nan",
    source: "2025 Tao Nan — Vocabulary Cloze",
    title: "A Trip to Cambodia",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s). Shade your answer (1, 2, 3, or 4) on the Optical Answer Sheet.",
    credit: "Adapted — a grandfather's trip to Kampong Thom",
    text:
      "Kiri was on a trip to Cambodia with his granddaughter, Sophea. After months of planning, their dream was finally {{16|realised}} as they travelled to Kampong Thom, where he grew up. {{17|Entranced}} by the beautiful fields and the distant clamour of roosters crowing, Sophea walked to the river where her grandfather had once spent hours fishing.\n\n" +
      "The duo trekked {{18|laboriously}} up the hill, perspiration dotting their brows. They could see the vast countryside stretching before them from the summit. The view mirrored {{19|to a great extent}} the stories Kiri had told her of his childhood — untouched, vivid, and full of quiet wonder. Kiri was confident that although time had passed, the bond he shared with Sophea would {{20|stand the test of time}} with each cherished memory. This trip would be etched in their hearts and minds forever.",
    questions: [
      { num: 16, phrase: "realised", options: ["released", "revealed", "manifested", "materialised"], answer: 4,
        note_en: "A dream “realised” is one that materialised — became real.", note_cn: "realised 意为实现、成为现实（materialised）" },
      { num: 17, phrase: "Entranced", options: ["Gratified", "Energised", "Captivated", "Unaffected"], answer: 3,
        note_en: "“Entranced” by the fields means captivated by them.", note_cn: "Entranced 意为着迷的、陶醉的（Captivated）" },
      { num: 18, phrase: "laboriously", options: ["hastily", "tirelessly", "strenuously", "purposefully"], answer: 3,
        note_en: "Trekking “laboriously” means trekking with great effort — strenuously.", note_cn: "laboriously 意为费力地（strenuously）" },
      { num: 19, phrase: "to a great extent", options: ["briefly", "visibly", "purely", "mainly"], answer: 4,
        note_en: "The view mirrored the stories “to a great extent” — mainly/largely.", note_cn: "to a great extent 意为在很大程度上（mainly）" },
      { num: 20, phrase: "stand the test of time", options: ["last", "endure", "sustain", "deepen"], answer: 2,
        note_en: "A bond that will “stand the test of time” will endure.", note_cn: "stand the test of time 意为经得起时间考验、持久（endure）" }
    ]
  },
  {
    id: "2025-vc-acsj",
    source: "2025 ACS J — Vocabulary Cloze",
    title: "Two Tickets to the Big Game",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s). Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from “Two Tickets to the Big Game”",
    text:
      "With a twinkle in his eye, Father declared that the most worthy of us all would get a spot in the spectator's seat for the upcoming Liverstool versus Manpester City football friendly match. That {{16|spurred}} us to put on our best behaviour that week.\n\n" +
      "As the week drew to a close, my two brothers began to {{17|drift away}} from their goal. I kept up my good behaviour and went to dispose the rubbish into the big bin outside our house. As I began to replace the lid on the bin, a flash of white on the back of the black lid caught my attention. I {{18|wavered}} for a moment, unsure of what to make of it. Then, I lifted the flap of the envelope.\n\n" +
      "To my {{19|utter}} disbelief, I saw a ticket to the dream match; my hard work had been {{20|duly}} rewarded! This was a life lesson in responsibility that had stuck with me till today.",
    questions: [
      { num: 16, phrase: "spurred", options: ["compelled", "persuaded", "encouraged", "commanded"], answer: 3,
        note_en: "“Spurred” us to behave well means encouraged/motivated us.", note_cn: "spurred 意为激励、促使（encouraged）" },
      { num: 17, phrase: "drift away", options: ["lose", "stray", "leave", "depart"], answer: 2,
        note_en: "To “drift away” from a goal means to gradually stray from it.", note_cn: "drift away 意为逐渐偏离（stray）" },
      { num: 18, phrase: "wavered", options: ["thought", "decided", "trembled", "hesitated"], answer: 4,
        note_en: "To be “wavered” for a moment means to have hesitated.", note_cn: "wavered 意为犹豫（hesitated）" },
      { num: 19, phrase: "utter", options: ["huge", "great", "entire", "complete"], answer: 4,
        note_en: "“Utter disbelief” is complete/total disbelief.", note_cn: "utter 意为完全的、彻底的（complete）" },
      { num: 20, phrase: "duly", options: ["fittingly", "honestly", "peculiarly", "surprisingly"], answer: 1,
        note_en: "Work “duly” rewarded means rewarded fittingly/appropriately, as deserved.", note_cn: "duly 意为恰当地、理应地（fittingly）" }
    ]
  },
  {
    id: "2025-vc-aitong",
    source: "2025 Aitong — Vocabulary Cloze",
    title: "POSB Smart Buddy",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s). Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from www.straitstimes.com",
    text:
      "As a student, I find the POSB Smart Buddy programme helpful. {{16|Rolled out}} in 2017, it is now expanding to all schools in Singapore. With Smart Buddy, making payments in school has become so {{17|convenient}}. I just tap my smartwatch or EZ-Link card to pay for meals or items at the canteen and bookstore. My parents like it too. Using the free Smart Buddy app, they can track my spendings each day, set daily spending {{18|limits}} and even help me create savings goals. Whenever I am low on money, they can {{19|top up}} my account through the mobile app {{20|remotely}}, no matter the location, without delay. I also like that the programme is more than just about spending — it teaches me how to use digital payments safely and manage my money wisely.",
    questions: [
      { num: 16, phrase: "Rolled out", options: ["Originated", "Embarked", "Launched", "Founded"], answer: 3,
        note_en: "The programme “rolled out” in 2017 means launched in 2017.", note_cn: "Rolled out 意为推出、启动（Launched）" },
      { num: 17, phrase: "convenient", options: ["advanced", "creative", "efficient", "flexible"], answer: 3,
        note_en: "Payments that are “convenient” are efficient.", note_cn: "convenient 意为便捷高效的（efficient）" },
      { num: 18, phrase: "limits", options: ["barriers", "guidelines", "restrictions", "allowances"], answer: 3,
        note_en: "Spending “limits” are spending restrictions.", note_cn: "limits 意为限额、限制（restrictions）" },
      { num: 19, phrase: "top up", options: ["supplement", "replenish", "increase", "boost"], answer: 2,
        note_en: "To “top up” an account means to replenish it.", note_cn: "top up 意为充值、补充（replenish）" },
      { num: 20, phrase: "remotely", options: ["readily", "virtually", "indirectly", "effortlessly"], answer: 2,
        note_en: "Topping up “remotely” means doing it virtually/online, not in person.", note_cn: "remotely 意为远程地、通过网络（virtually）" }
    ]
  },
  {
    id: "2025-vc-henry-park",
    source: "2025 Henry Park — Vocabulary Cloze",
    title: "A Lesson in Sportsmanship",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word(s). Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from “Heartwarming proof that sportsmanship is not dead” by Michael Katz, USA TODAY Sports",
    text:
      "Abel Mutai, a Kenyan runner, was just a few metres from the finish line. Suddenly, he became {{16|bewildered}} by the signage and stopped, thinking he had completed the race. A Spanish runner, Ivan Fernandez, was right behind him. He noticed the situation and {{17|signalled}} the Kenyan to continue running. However, Mutai could not {{18|comprehend}} the language. Seeing the situation, Fernandez gently {{19|nudged}} Mutai forward, ensuring he crossed the finish line first.\n\n" +
      "When asked by a journalist why he acted this way, Fernandez said, \"If I had taken advantage of the situation, I wouldn't have earned the medal {{20|honestly}}. My mother has always taught me to make choices that I can be proud of.\"",
    questions: [
      { num: 16, phrase: "bewildered", options: ["excited", "shocked", "annoyed", "confused"], answer: 4,
        note_en: "“Bewildered” by the signage means confused by it.", note_cn: "bewildered 意为困惑的（confused）" },
      { num: 17, phrase: "signalled", options: ["forced", "followed", "gestured", "requested"], answer: 3,
        note_en: "To have “signalled” the Kenyan means to have gestured to him.", note_cn: "signalled 意为打手势示意（gestured）" },
      { num: 18, phrase: "comprehend", options: ["speak", "translate", "recognise", "understand"], answer: 4,
        note_en: "Could not “comprehend” the language means could not understand it.", note_cn: "comprehend 意为理解（understand）" },
      { num: 19, phrase: "nudged", options: ["pulled", "guided", "tapped", "pushed"], answer: 4,
        note_en: "To have “nudged” Mutai forward means to have gently pushed him.", note_cn: "nudged 意为轻推（pushed）" },
      { num: 20, phrase: "honestly", options: ["easily", "eagerly", "rightfully", "reluctantly"], answer: 3,
        note_en: "Earning the medal “honestly” means earning it rightfully/fairly.", note_cn: "honestly 意为光明正大地、应得地（rightfully）" }
    ]
  },
  {
    id: "2025-vc-rosyth",
    source: "2025 Rosyth — Vocabulary Cloze",
    title: "Midnight Snack",
    marks: 5,
    instructions:
      "For each question, choose the word closest in meaning to the underlined word. Shade your answer (1, 2, 3 or 4) on the Optical Answer Sheet.",
    credit: "Adapted from 'Midnight Snack' by Megan Cianfaglione",
    text:
      "A gentle breeze ruffled the curtains in Sheila's room. Her brown eyes fluttered open almost {{16|instinctively}} as the chill crept over her. Moonlight cast eerie shadows across her room. Something felt {{17|unsettling}}. She got out from under her blanket and ran across the cold wood floor to close the window.\n\n" +
      "Sheila {{18|peered intently}} at the garden. Even the pale glow from the moon was not enough to keep the darkness from enveloping her. The {{19|silence}} was simply too much for her.\n\n" +
      "Suddenly, Sheila's heart raced when she saw something {{20|flicker}} strangely in the dark like a flame struggling against the wind. She ran back to bed, pulling her blanket over her head immediately. Sheila knew from all the horror movies which she had watched that investigating never ended well.",
    questions: [
      { num: 16, phrase: "instinctively", options: ["indirectly", "inactively", "involuntarily", "inadequately"], answer: 3,
        note_en: "Eyes fluttering open “instinctively” means involuntarily, without conscious control.", note_cn: "instinctively 意为本能地、不由自主地（involuntarily）" },
      { num: 17, phrase: "unsettling", options: ["baffling", "appalling", "menacing", "disturbing"], answer: 4,
        note_en: "Something that felt “unsettling” felt disturbing.", note_cn: "unsettling 意为令人不安的（disturbing）" },
      { num: 18, phrase: "peered intently", options: ["scanned", "squinted", "surveyed", "searched"], answer: 3,
        note_en: "To have “peered intently” at the garden means to have surveyed it carefully.", note_cn: "peered intently 意为仔细凝视、审视（surveyed）" },
      { num: 19, phrase: "silence", options: ["serenity", "stillness", "isolation", "disturbance"], answer: 2,
        note_en: "The “silence” being too much for her refers to the stillness/quietness.", note_cn: "silence 意为寂静（stillness）" },
      { num: 20, phrase: "flicker", options: ["sway", "ripple", "waver", "vibrate"], answer: 3,
        note_en: "Something that seemed to “flicker” like a flame seemed to waver.", note_cn: "flicker 意为闪烁、摇曳（waver）" }
    ]
  }
];
