// Grammar Cloze passages — append new passages to this array, do not recreate.
// Each blank's "answer" is the letter key from that passage's wordBank.
const GC_PASSAGES = [
  {
    id: "2025-gc2025-p2",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "Nature & Birdsong",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from nationalgeographic.com — “Birds sing, brain benefits: how birdsong boosts mental health”",
    wordBank: [
      { letter: "A", word: "a" },
      { letter: "B", word: "against" },
      { letter: "C", word: "and" },
      { letter: "D", word: "are" },
      { letter: "E", word: "at" },
      { letter: "F", word: "because" },
      { letter: "G", word: "but" },
      { letter: "H", word: "for" },
      { letter: "J", word: "is" },
      { letter: "K", word: "like" },
      { letter: "L", word: "that" },
      { letter: "M", word: "the" },
      { letter: "N", word: "when" },
      { letter: "P", word: "which" },
      { letter: "Q", word: "with" }
    ],
    // Use [[n]] to mark a blank position inside the text. \n\n starts a new paragraph.
    text:
      "Research has proven that nature is food for the soul. Spending time outdoors lowers your stress levels and blood pressure. Simply gazing [[26]] the greenery outdoors improves your mood. It makes the problems you face feel small [[27]] the vast nature.\n\n" +
      "When outdoors, birds and their melodic songs [[28]] impossible to drown out too. It has been scientifically proven that birdsong bolsters our mental health. Research has shown [[29]] when people listen to birdsong, they have a significantly better sense of mental well-being that lingers [[30]] hours. Birdsong refreshes your mind; some studies have indicated that exposure to nature on a whole reduces activity in parts of the brain associated [[31]] stress and anxiety. Being out in nature helps us to relax [[32]] peaceful surroundings calm our minds.\n\n" +
      "Listening to birdsong is also a form of relaxation as it immerses us in [[33]] present moment. Being in nature not only delights your senses [[34]] also captures your attention. The sights, smells and sounds of the outdoors are starkly delicate [[35]] compared to flashing lights and blaring horns. Watching tree buds unravel, soaking in the smell after rain and hearing the gentle sounds of animals in nature make us feel alive.",
    blanks: [
      { num: 26, answer: "E", note_en: "Fixed collocation — “gaze at” something.", note_cn: "固定搭配 gaze at（凝视、注视）" },
      { num: 27, answer: "B", note_en: "“Against” sets up a contrast — feeling small against/in contrast to something vast.", note_cn: "against 表示对比、衬托，与……相比之下" },
      { num: 28, answer: "D", note_en: "Subject–verb agreement: the plural subject “songs” takes “are”.", note_cn: "主谓一致：复数主语 songs 应搭配 are" },
      { num: 29, answer: "L", note_en: "“That” introduces the noun clause after “shown”.", note_cn: "that 引导宾语从句，紧跟在 shown 之后" },
      { num: 30, answer: "H", note_en: "“For” + a period of time expresses duration.", note_cn: "for + 时间段，表示持续的时间" },
      { num: 31, answer: "Q", note_en: "Fixed collocation — “associated with”.", note_cn: "固定搭配 associated with（与……相关联）" },
      { num: 32, answer: "F", note_en: "“Because” introduces the reason peaceful surroundings help us relax.", note_cn: "because 引导原因状语从句" },
      { num: 33, answer: "M", note_en: "Definite article “the” before the specific noun phrase “present moment”.", note_cn: "定冠词 the 修饰特指名词 present moment" },
      { num: 34, answer: "G", note_en: "Fixed structure — “not only … but also …”.", note_cn: "固定结构 not only...but also..." },
      { num: 35, answer: "N", note_en: "“When compared to” — an implied clause of comparison.", note_cn: "when compared to 表比较，从句主语被省略" }
    ]
  },
  {
    id: "2025-gc2025-p3",
    source: "2025 Henry Park — Grammar Cloze",
    title: "Screen Time & Digital Balance",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from healthhub.sg — “Help your child untangle from the web”",
    wordBank: [
      { letter: "A", word: "any" },
      { letter: "B", word: "are" },
      { letter: "C", word: "as" },
      { letter: "D", word: "at" },
      { letter: "E", word: "however" },
      { letter: "F", word: "is" },
      { letter: "G", word: "might" },
      { letter: "H", word: "my" },
      { letter: "J", word: "or" },
      { letter: "K", word: "should" },
      { letter: "L", word: "then" },
      { letter: "M", word: "this" },
      { letter: "N", word: "to" },
      { letter: "P", word: "with" },
      { letter: "Q", word: "which" }
    ],
    text:
      "Spending time on your phone, tablet, or computer can be very enjoyable. [[26]], it is important to remember that too much screen time can have negative effects. If you spend long hours looking [[27]] a screen, it can make you feel tired, affect your sleep and even leave you feeling less energetic.\n\n" +
      "You [[28]] also find it harder to focus on other important things, like schoolwork or spending quality time [[29]] family and friends.\n\n" +
      "To stay healthy, you [[30]] balance screen time with other activities. Make time for outdoor play, reading; [[31]] hobbies that do not involve screens. Setting limits on how much time you spend on devices [[32]] an effective way to keep things in balance. For example, you could decide to play for thirty minutes and [[33]] take a break to do something else. This is more beneficial than spending the entire day on screens [[34]] can leave you feeling drained.\n\n" +
      "It is also a good idea to have days when you do not use screens at all and take [[35]] chance to explore new activities. Remember, technology is fun, but it is important to enjoy the world around you too!",
    blanks: [
      { num: 26, answer: "E", note_en: "“However” opens the sentence to contrast the earlier idea of enjoyment with the negative effects that follow.", note_cn: "however 表转折，位于句首，后接逗号" },
      { num: 27, answer: "D", note_en: "Fixed collocation — “look at” a screen.", note_cn: "固定搭配 look at（看着、盯着）" },
      { num: 28, answer: "G", note_en: "Modal verb of possibility, echoing “can” earlier in the passage.", note_cn: "情态动词 might 表可能性，与前文 can 呼应" },
      { num: 29, answer: "P", note_en: "Fixed collocation — “spend time with” someone.", note_cn: "固定搭配 spend time with（与……共度时光）" },
      { num: 30, answer: "K", note_en: "Modal verb expressing advice/recommendation.", note_cn: "情态动词 should 表建议" },
      { num: 31, answer: "J", note_en: "Coordinating conjunction “or” joins the last item in the list of activities.", note_cn: "并列连词 or，连接列举的最后一项" },
      { num: 32, answer: "F", note_en: "Subject–verb agreement: the singular gerund-phrase subject (“Setting limits…”) takes “is”.", note_cn: "主谓一致：动名词短语作主语，谓语用单数 is" },
      { num: 33, answer: "L", note_en: "Sequencing adverb — “and then” shows what happens next.", note_cn: "顺序副词 then，表示接下来发生的动作" },
      { num: 34, answer: "Q", note_en: "Relative pronoun “which” introduces a non-defining clause referring back to the whole idea.", note_cn: "关系代词 which 引导非限定性定语从句，指代前面整句内容" },
      { num: 35, answer: "M", note_en: "Demonstrative adjective in the fixed phrase “take this chance”.", note_cn: "指示形容词 this，固定搭配 take this chance" }
    ]
  },
  {
    id: "2025-gc2025-p4",
    source: "2025 Ai Tong — Grammar Cloze",
    title: "Mandai Wildlife Reserve",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from mandai.com",
    wordBank: [
      { letter: "A", word: "and" },
      { letter: "B", word: "are" },
      { letter: "C", word: "as" },
      { letter: "D", word: "by" },
      { letter: "E", word: "can" },
      { letter: "F", word: "for" },
      { letter: "G", word: "is" },
      { letter: "H", word: "or" },
      { letter: "J", word: "over" },
      { letter: "K", word: "since" },
      { letter: "L", word: "so" },
      { letter: "M", word: "than" },
      { letter: "N", word: "that" },
      { letter: "P", word: "then" },
      { letter: "Q", word: "will" }
    ],
    text:
      "Nestled within the Mandai Wildlife Reserve are renowned zoological parks such as Singapore Zoo, Night Safari, River Wonders and Bird Paradise. Managed [[26]] Mandai Wildlife Group, these parks are home to more [[27]] 20,000 animals across 1,000 species, of which some are endangered. [[28]] the years, the wildlife parks have also become a key habitat [[29]] wildlife native to Singapore. The varied landscapes have created living environments [[30]] are suitable for reptiles, mammals, amphibians and birds.\n\n" +
      "Singapore's fifth wildlife park, Rainforest Wild Asia, has opened to the public [[31]] March 2025. Filled with animal species and various adventure elements, visitors [[32]] look forward to trekking through forest trails scattered with fallen logs, boulders [[33]] streams, as well as elevated walkways. One of the park's design considerations [[34]] to include a variety of paths with different levels of difficulty, [[35]] guests can tailor their visits according to their preferences. Those seeking adrenaline-pumping experiences will definitely find challenge in these rainforest adventures.",
    blanks: [
      { num: 26, answer: "D", note_en: "Passive voice agent marker — “managed by” Mandai Wildlife Group.", note_cn: "被动语态：by 引出动作的执行者" },
      { num: 27, answer: "M", note_en: "Fixed collocation — “more than” a quantity.", note_cn: "固定搭配 more than（超过）" },
      { num: 28, answer: "J", note_en: "Fixed phrase — “over the years”.", note_cn: "固定短语 over the years（多年来）" },
      { num: 29, answer: "F", note_en: "Fixed collocation — “a habitat for” wildlife.", note_cn: "固定搭配 habitat for（……的栖息地）" },
      { num: 30, answer: "N", note_en: "Relative pronoun “that” introduces a defining clause describing “environments”.", note_cn: "that 引导限定性定语从句，修饰 environments" },
      { num: 31, answer: "K", note_en: "Present perfect + “since” + a point in time — “has opened … since March 2025”.", note_cn: "现在完成时 + since + 时间点" },
      { num: 32, answer: "E", note_en: "Modal verb expressing possibility/ability.", note_cn: "情态动词 can 表可能性" },
      { num: 33, answer: "A", note_en: "Coordinating conjunction joining the last item in a list — “logs, boulders and streams”.", note_cn: "并列连词 and，连接列举的最后一项" },
      { num: 34, answer: "G", note_en: "Subject–verb agreement: “One (of the park's design considerations)” is singular, so it takes “is”.", note_cn: "主谓一致：主语 One 为单数，谓语用 is" },
      { num: 35, answer: "L", note_en: "“So” shows the result — the range of paths lets guests tailor their visits.", note_cn: "so 表结果，引出前面情况带来的后果" }
    ]
  },
  {
    id: "2025-gc2025-p5",
    source: "2025 ACS Junior — Grammar Cloze",
    title: "The Story Behind Play-Doh",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from businessinsider.com — “The shocking story behind Play-Doh's original purpose”",
    wordBank: [
      { letter: "A", word: "are" },
      { letter: "B", word: "as" },
      { letter: "C", word: "between" },
      { letter: "D", word: "but" },
      { letter: "E", word: "however" },
      { letter: "F", word: "more" },
      { letter: "G", word: "most" },
      { letter: "H", word: "off" },
      { letter: "J", word: "under" },
      { letter: "K", word: "was" },
      { letter: "L", word: "were" },
      { letter: "M", word: "when" },
      { letter: "N", word: "where" },
      { letter: "P", word: "which" },
      { letter: "Q", word: "who" }
    ],
    text:
      "Many of you might have played with the popular children's toy, Play-doh, but did you know that it was not originally meant to be a toy? It all began [[26]] Cleo McVicker took over the soap company, Kutol, which was about to go [[27]] in the late 1920s. Together with his brother, Noah, they managed to keep the company afloat. [[28]] Cleo continued to head the company, he managed to close a business deal with the representatives from Kroger, a grocery chain, [[29]] was looking for a wallpaper cleaner to be sold in their stores. Back then, families commonly burned coals to heat up their homes [[30]] it left soot that was difficult to clean off the wallpapers.\n\n" +
      "Noah set about to come up with the product and ended up inventing a version of the dough-like substance that children all over the world [[31]] familiar with today. The product was a success as it was easy to use – consumers only needed to roll the dough-like substance across their dirty walls to clean [[32]] the soot and dirt!\n\n" +
      "[[33]], it was only much later that it was reinvented as a children's toy. Detergent from the dough [[34]] removed and it was originally only available in white. With the intention to make it [[35]] marketable, it was soon made in red, yellow and blue. Initially named as \"Kutol's Rainbow Modeling Compound\", it was later rebranded into the \"Play-doh\" that we know today.",
    blanks: [
      { num: 26, answer: "M", note_en: "“When” introduces the temporal clause explaining what started the story.", note_cn: "when 引导时间状语从句" },
      { num: 27, answer: "J", note_en: "Fixed phrasal verb — “go under” means a business fails/collapses.", note_cn: "固定短语 go under（倒闭）" },
      { num: 28, answer: "B", note_en: "“As” here means “while” — during the time Cleo continued to head the company.", note_cn: "as 表伴随，相当于 while（当……的时候）" },
      { num: 29, answer: "P", note_en: "Relative pronoun “which” refers back to “Kroger, a grocery chain”.", note_cn: "关系代词 which，指代 Kroger 这家公司" },
      { num: 30, answer: "D", note_en: "“But” contrasts the practical benefit of burning coal with its unwanted side effect (soot).", note_cn: "but 表转折" },
      { num: 31, answer: "A", note_en: "Subject–verb agreement: the plural subject “children” takes “are”.", note_cn: "主谓一致：复数主语 children 用 are" },
      { num: 32, answer: "H", note_en: "Fixed phrasal verb — “clean off” means to remove by wiping/rubbing.", note_cn: "固定短语 clean off（擦掉、清除）" },
      { num: 33, answer: "E", note_en: "“However” opens the sentence to contrast the product's early success with its later reinvention.", note_cn: "however 表转折，位于句首" },
      { num: 34, answer: "K", note_en: "Passive past tense, singular subject “Detergent”.", note_cn: "被动语态过去式，主语 Detergent 为单数，用 was" },
      { num: 35, answer: "F", note_en: "Comparative form — “more marketable”.", note_cn: "比较级 more marketable（更具市场性）" }
    ]
  },
  {
    id: "2025-gc2025-p6",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "The Tembusu Tree",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from nparks.gov.sg",
    wordBank: [
      { letter: "A", word: "a" },
      { letter: "B", word: "an" },
      { letter: "C", word: "behind" },
      { letter: "D", word: "being" },
      { letter: "E", word: "had" },
      { letter: "F", word: "has" },
      { letter: "G", word: "having" },
      { letter: "H", word: "on" },
      { letter: "J", word: "since" },
      { letter: "K", word: "some" },
      { letter: "L", word: "still" },
      { letter: "M", word: "those" },
      { letter: "N", word: "to" },
      { letter: "P", word: "while" },
      { letter: "Q", word: "with" }
    ],
    text:
      "Within the Singapore Botanic Gardens stands a living landmark of national pride. Native [[26]] Singapore, the Tembusu Tree can grow up to 40 metres tall. Its most distinctive feature – a gently curled, low-hanging branch – reaches outward as if offering a reminder of its presence to [[27]] who walk past. Also known affectionately as the \"Five-dollar Tree\", this is the tree that graces the back of the note. Few would expect such [[28]] iconic image to be not only real but also [[29]] accessible to the public. The image is so ingrained in our everyday life that people often overlook the significance [[30]] the symbol.\n\n" +
      "This heritage tree is believed to have existed [[31]] the Botanic Gardens was officially founded in 1859. Close to two centuries old, this tree [[32]] been admired by generations, some of whom return just to marvel at its resilience. [[33]] its thick, weathered trunk and an expansive canopy of branches, the tree represents the enduring spirit of a nation. Standing unshaken by storms [[34]] remaining deeply grounded in its values, it never forsakes the roots that define it. The Tembusu Tree is truly a symbol of what Singapore takes pride in – [[35]] anchored and forward-looking. Such is the spirit of the country.",
    blanks: [
      { num: 26, answer: "N", note_en: "Fixed collocation — “native to” a place.", note_cn: "固定搭配 native to（原产于）" },
      { num: 27, answer: "M", note_en: "“Those who” refers to the people walking past.", note_cn: "those who 指代……的人" },
      { num: 28, answer: "B", note_en: "Indefinite article “an” before a vowel sound — “an iconic image”.", note_cn: "不定冠词 an，用于元音音素开头的词前" },
      { num: 29, answer: "L", note_en: "“Still” — the image remains accessible to this day.", note_cn: "still 表示至今仍然如此" },
      { num: 30, answer: "C", note_en: "Fixed collocation — “the significance behind” something.", note_cn: "固定搭配 significance behind（……背后的意义）" },
      { num: 31, answer: "J", note_en: "Present perfect + “since” + a point in time.", note_cn: "现在完成时 + since + 时间点" },
      { num: 32, answer: "F", note_en: "Present perfect passive — “has been admired”.", note_cn: "现在完成时被动语态 has been admired" },
      { num: 33, answer: "Q", note_en: "“With” introduces the descriptive phrase at the start of the sentence.", note_cn: "with 引导状语，描述伴随状态" },
      { num: 34, answer: "P", note_en: "“While” links two parallel participle clauses — “standing unshaken … while remaining grounded”.", note_cn: "while 连接两个并列的分词结构" },
      { num: 35, answer: "D", note_en: "Gerund “being” after the preposition “in”.", note_cn: "介词 in 后接动名词 being" }
    ]
  },
  {
    id: "2025-gc2025-p7",
    source: "2025 Nan Yang — Grammar Cloze",
    title: "Maria Hertogh's Story",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    wordBank: [
      { letter: "A", word: "against" },
      { letter: "B", word: "even" },
      { letter: "C", word: "had" },
      { letter: "D", word: "however" },
      { letter: "E", word: "like" },
      { letter: "F", word: "many" },
      { letter: "G", word: "over" },
      { letter: "H", word: "therefore" },
      { letter: "J", word: "these" },
      { letter: "K", word: "this" },
      { letter: "L", word: "unlike" },
      { letter: "M", word: "were" },
      { letter: "N", word: "when" },
      { letter: "P", word: "who" },
      { letter: "Q", word: "whom" }
    ],
    text:
      "Maria Hertogh's court case in Singapore received a lot of attention. [[26]] over in the Netherlands, film crews covered the development of the case. Her sad story was [[27]] known by many.\n\n" +
      "Maria was separated from her birth parents, the Hertoghs, [[28]] she was five years old due to circumstances of war. For the next seven years, she was cared for by Aminah Mohamed and grew to love her like family. After the war, [[29]] her wishes, she was taken from Aminah Mohamed and sent to live with the Hertoghs in the Netherlands. This ruling by the court triggered tensions which erupted into riots. At the same time in other parts of the world, other children [[30]] also taken away from families they loved. [[31]] Maria's case, there were no protests, riots, or news reports about [[32]] children. People only got to hear about their tragic stories years later, [[33]] of which reminded us of the impact of separating children from their loved ones.\n\n" +
      "Today, we know that when there are conflicts — whether [[34]] issues like race, religion, or other differences — it is often the children [[35]] suffer the most. We must remember these stories and prevent children from experiencing such suffering again.",
    blanks: [
      { num: 26, answer: "B", note_en: "“Even” emphasises that the case was covered even as far away as the Netherlands.", note_cn: "even 表强调，甚至……" },
      { num: 27, answer: "H", note_en: "“Therefore” shows the result of the case receiving so much media coverage.", note_cn: "therefore 表结果，因此" },
      { num: 28, answer: "N", note_en: "“When” introduces the temporal clause — “when she was five years old”.", note_cn: "when 引导时间状语从句" },
      { num: 29, answer: "A", note_en: "Fixed phrase — “against her wishes”.", note_cn: "固定短语 against her wishes（违背她的意愿）" },
      { num: 30, answer: "M", note_en: "Passive past tense, plural subject “children” — “were also taken away”.", note_cn: "被动语态过去式，复数主语 children 用 were" },
      { num: 31, answer: "L", note_en: "“Unlike” contrasts Maria's case with the lack of reaction to other children's cases.", note_cn: "unlike 表对比，与……不同" },
      { num: 32, answer: "J", note_en: "“These children” refers back to the “other children” mentioned earlier.", note_cn: "these children 指代前文提到的其他孩子" },
      { num: 33, answer: "F", note_en: "“Many of which” — a quantifier referring back to the tragic stories.", note_cn: "many of which 表部分限定，指代前述的故事" },
      { num: 34, answer: "G", note_en: "Fixed collocation — “conflicts over issues” (a dispute about something).", note_cn: "固定搭配 conflicts over issues（因……而起的冲突）" },
      { num: 35, answer: "P", note_en: "Relative pronoun “who”, subject of “suffer”, referring to children.", note_cn: "关系代词 who，作 suffer 的主语，指代 children" }
    ]
  },
  {
    id: "2025-gc2025-p8",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "The Monkey's Paw",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from “The Monkey's Paw” by W. W. Jacobs",
    wordBank: [
      { letter: "A", word: "as" },
      { letter: "B", word: "both" },
      { letter: "C", word: "by" },
      { letter: "D", word: "each" },
      { letter: "E", word: "from" },
      { letter: "F", word: "had" },
      { letter: "G", word: "his" },
      { letter: "H", word: "on" },
      { letter: "J", word: "so" },
      { letter: "K", word: "their" },
      { letter: "L", word: "up" },
      { letter: "M", word: "was" },
      { letter: "N", word: "were" },
      { letter: "P", word: "which" },
      { letter: "Q", word: "whom" }
    ],
    text:
      "The night was cold and wet. In the house, the curtains were drawn and the fire burned brightly. [[26]] the outside, only a faint glow could be seen. An old man and his son [[27]] unmoved by the incoming storm. Just then, the gate banged loudly, and heavy footsteps came [[28]] to the door. The old man rose slowly from his seat and opened the door. It was a guest [[29]] they had been expecting, a man called Frank.\n\n" +
      "The old man motioned Frank to the extra chair. The trio sat [[30]] the fire and chatted heartily. As [[31]] conversation veered towards recent strange happenings, the visitor dug into his pocket and fished out a dried, little monkey's paw. It was believed that a spell had been cast upon it so that three different men would [[32]] receive three wishes from it.\n\n" +
      "Curious, the old man asked what the previous owner [[33]] wished for. Frank replied that he did not know [[34]] the man had died. For his part, Frank said the paw had brought him nothing but trouble. His tone was [[35]] grave that a silence fell upon the group. Everyone was lost in his own thoughts, and no one spoke for a while.",
    blanks: [
      { num: 26, answer: "H", note_en: "“On the outside” contrasts with “In the house” from the previous sentence.", note_cn: "on the outside 与前文 in the house 形成对比" },
      { num: 27, answer: "N", note_en: "Past tense, plural subject “An old man and his son”.", note_cn: "过去式，复数主语用 were" },
      { num: 28, answer: "L", note_en: "Fixed phrasal verb — “came up to” means approached.", note_cn: "固定短语 came up to（走近）" },
      { num: 29, answer: "Q", note_en: "Formal object relative pronoun — the guest is the object of “expecting”.", note_cn: "正式宾格关系代词 whom，guest 是 expecting 的宾语" },
      { num: 30, answer: "C", note_en: "Fixed collocation — “sat by the fire”.", note_cn: "固定搭配 sat by the fire（坐在火炉旁）" },
      { num: 31, answer: "K", note_en: "Possessive pronoun “their”, referring to the trio.", note_cn: "物主代词 their，指代 the trio" },
      { num: 32, answer: "D", note_en: "Distributive pronoun “each” — every one of the three men individually.", note_cn: "分配代词 each，表示三人中每一个" },
      { num: 33, answer: "F", note_en: "Past perfect tense — the wish happened before this point in the story.", note_cn: "过去完成时 had wished，表更早发生的动作" },
      { num: 34, answer: "A", note_en: "“As” used causally, meaning “because/since”.", note_cn: "as 表原因，相当于 because" },
      { num: 35, answer: "J", note_en: "“So … that” structure showing result.", note_cn: "so...that 结构，表结果" }
    ]
  },
  {
    id: "2025-gc2025-p9",
    source: "2025 Paya Lebar MGS — Grammar Cloze",
    title: "Jellyfish in Singapore Waters",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    wordBank: [
      { letter: "A", word: "although" },
      { letter: "B", word: "at" },
      { letter: "C", word: "despite" },
      { letter: "D", word: "during" },
      { letter: "E", word: "even" },
      { letter: "F", word: "if" },
      { letter: "G", word: "in" },
      { letter: "H", word: "its" },
      { letter: "J", word: "on" },
      { letter: "K", word: "than" },
      { letter: "L", word: "their" },
      { letter: "M", word: "then" },
      { letter: "N", word: "these" },
      { letter: "P", word: "this" },
      { letter: "Q", word: "thus" }
    ],
    text:
      "Jellyfish can be found in oceans all around the world. [[26]] creatures have bell-shaped bodies and long tentacles that make them fascinating and mysterious. [[27]] jellyfish do not have a brain, heart or bones, some species can be highly dangerous to humans.\n\n" +
      "A jellyfish sting happens when [[28]] tentacles make contact with the skin. These tentacles contain tiny barbs that inject venom which may cause pain, swelling or [[29]] serious allergic reactions. Box jellyfish, for example, are among the most venomous marine creatures and have been known to cause fatalities [[30]] extreme cases.\n\n" +
      "In Singapore, jellyfish sightings and stings are reported more frequently [[31]] the warmer months. These happen particularly at popular beaches like Sentosa and East Coast Park. Lifeguards stationed [[32]] these beaches are trained to manage such situations calmly and quickly. [[33]] a person is stung, it is crucial not to scratch or rub the affected area as this could cause the venom to spread.\n\n" +
      "Medical experts advise that the sting should be rinsed with vinegar and [[34]] soaked in warm water to ease the pain. In more urgent cases, emergency medical attention must be sought without delay.\n\n" +
      "[[35]] their beauty, jellyfish should be observed from a safe distance. With the right precautions, a trip to the beach can still be safe and enjoyable.",
    blanks: [
      { num: 26, answer: "N", note_en: "“These creatures” refers back to jellyfish.", note_cn: "指示代词 these，指代 jellyfish" },
      { num: 27, answer: "A", note_en: "“Although” introduces a concession clause contrasting with the danger described after.", note_cn: "although 引导让步状语从句" },
      { num: 28, answer: "H", note_en: "Possessive pronoun “its”, referring to the singular “jellyfish”.", note_cn: "物主代词 its，指代单数 jellyfish" },
      { num: 29, answer: "E", note_en: "“Or even” emphasises the escalation from mild to serious symptoms.", note_cn: "or even 表递进强调" },
      { num: 30, answer: "G", note_en: "Fixed collocation — “in extreme cases”.", note_cn: "固定搭配 in extreme cases（在极端情况下）" },
      { num: 31, answer: "D", note_en: "Fixed collocation — “during the warmer months”.", note_cn: "固定搭配 during（在……期间）" },
      { num: 32, answer: "B", note_en: "Fixed collocation — “stationed at” a place.", note_cn: "固定搭配 stationed at（驻守在）" },
      { num: 33, answer: "F", note_en: "“If” introduces the conditional clause.", note_cn: "if 引导条件状语从句" },
      { num: 34, answer: "M", note_en: "“Then” shows the sequence of first aid steps.", note_cn: "then 表顺序，先后动作" },
      { num: 35, answer: "C", note_en: "“Despite” introduces a concession — beauty vs. the need for caution.", note_cn: "despite 表让步，尽管" }
    ]
  },
  {
    id: "2025-gc2025-p10",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "The History of Reading",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    wordBank: [
      { letter: "A", word: "as" },
      { letter: "B", word: "at" },
      { letter: "C", word: "by" },
      { letter: "D", word: "could" },
      { letter: "E", word: "for" },
      { letter: "F", word: "has" },
      { letter: "G", word: "had" },
      { letter: "H", word: "over" },
      { letter: "J", word: "through" },
      { letter: "K", word: "with" },
      { letter: "L", word: "who" },
      { letter: "M", word: "while" },
      { letter: "N", word: "which" },
      { letter: "P", word: "would" },
      { letter: "Q", word: "until" }
    ],
    text:
      "Have you ever thought about how reading became such a big part of our lives?\n\n" +
      "Reading [[26]] been important for thousands of years, beginning as a way to record and share information using symbols in ancient civilisations. At first, only a few educated people [[27]] understand these symbols. It was not [[28]] the Phoenicians invented one of the first earliest alphabets – letters representing sounds – that reading began to transform. This made reading easier and more widespread, especially after the Greeks and Romans improved the alphabet, [[29]] influenced many modern languages.\n\n" +
      "For centuries, books were rare and expensive and could only be accessed [[30]] wealthy or religious groups. However, everything changed [[31]] the invention of the printing press – books were produced quickly and in large numbers, available to all. [[32]] time, libraries and cheaper books made reading more accessible, encouraging many people to develop a love for it. Reading became part of everyday life, both [[33]] pleasure and learning.\n\n" +
      "Today, reading habits continue to evolve rapidly. [[34]] many still enjoy printed books, digital formats like e-books and audiobooks have become common. The internet also encourages shorter, more frequent reading, especially [[35]] social media platforms.\n\n" +
      "Despite these changes, the value of reading remains strong. It helps us connect with new ideas, emotions and perspectives – something people will likely continue to treasure for generations.",
    blanks: [
      { num: 26, answer: "F", note_en: "Present perfect — “has been important … for thousands of years”.", note_cn: "现在完成时 has been，与 for + 时间段连用" },
      { num: 27, answer: "D", note_en: "Past ability modal — “could understand”.", note_cn: "过去时情态动词 could，表过去的能力" },
      { num: 28, answer: "Q", note_en: "Cleft sentence — “It was not until … that …”.", note_cn: "强调句型 It was not until...that..." },
      { num: 29, answer: "N", note_en: "Non-defining relative clause referring back to the improved alphabet.", note_cn: "which 引导非限定性定语从句，指代前文的字母改进" },
      { num: 30, answer: "C", note_en: "Passive voice agent marker — “accessed by” wealthy or religious groups.", note_cn: "被动语态：by 引出动作的执行者" },
      { num: 31, answer: "K", note_en: "Fixed collocation — “changed with the invention of”.", note_cn: "固定搭配 changed with（随着……而改变）" },
      { num: 32, answer: "H", note_en: "Fixed phrase — “Over time”.", note_cn: "固定短语 over time（随着时间推移）" },
      { num: 33, answer: "E", note_en: "Parallel structure — “both for pleasure and (for) learning”.", note_cn: "both...and... 并列结构，搭配 for" },
      { num: 34, answer: "M", note_en: "“While” introduces the contrast between printed books and newer digital formats.", note_cn: "while 表对比、转折" },
      { num: 35, answer: "J", note_en: "Fixed collocation — “through social media platforms”.", note_cn: "固定搭配 through（通过……）" }
    ]
  },
  {
    id: "2025-gc2025-p11",
    source: "2025 Red Swastika — Grammar Cloze",
    title: "The Flower Moon",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from straitstimes.com — “Radiant Flower Moon lights up Singapore skies”",
    wordBank: [
      { letter: "A", word: "a" },
      { letter: "B", word: "as" },
      { letter: "C", word: "from" },
      { letter: "D", word: "in" },
      { letter: "E", word: "is" },
      { letter: "F", word: "its" },
      { letter: "G", word: "on" },
      { letter: "H", word: "than" },
      { letter: "J", word: "the" },
      { letter: "K", word: "their" },
      { letter: "L", word: "then" },
      { letter: "M", word: "those" },
      { letter: "N", word: "to" },
      { letter: "P", word: "was" },
      { letter: "Q", word: "which" }
    ],
    text:
      "The Flower Moon made its appearance in Singapore's sky on May 13. The event garnered widespread attention as many people went [[26]] social media platforms to post photographs. The Flower Moon is a term [[27]] comes from Native American traditions, referring to the full moon in May. It symbolises the time when flowers bloom, marking [[28]] height of spring in the northern hemisphere.\n\n" +
      "Scientifically, this same full moon, also known [[29]] a micro full moon, occurs at the point where the Moon is farthest [[30]] Earth. Hence it appears slightly smaller and dimmer [[31]] usual. However, a supermoon, [[32]] contrast, looks larger since the Moon [[33]] closer to Earth.\n\n" +
      "Despite this, the Flower Moon still lit up the night sky, impressing [[34]] who saw it. A number of viewers quickly uploaded [[35]] photographs online to share the rare sight.\n\n" +
      "The next full moon, called the Strawberry Moon, appeared on 11 June. Did you catch it?",
    blanks: [
      { num: 26, answer: "G", note_en: "Fixed phrase — “went on social media platforms”.", note_cn: "固定短语 went on social media（上社交媒体）" },
      { num: 27, answer: "Q", note_en: "Relative pronoun “which” refers back to “a term”.", note_cn: "关系代词 which，指代 a term" },
      { num: 28, answer: "J", note_en: "Definite article — “marking the height of spring”.", note_cn: "定冠词 the，修饰特指名词 height of spring" },
      { num: 29, answer: "B", note_en: "Fixed collocation — “known as”.", note_cn: "固定搭配 known as（被称为）" },
      { num: 30, answer: "C", note_en: "Fixed collocation — “farthest from” Earth.", note_cn: "固定搭配 farthest from（离……最远）" },
      { num: 31, answer: "H", note_en: "Comparative — “dimmer than usual”.", note_cn: "比较级 dimmer than usual" },
      { num: 32, answer: "D", note_en: "Fixed phrase — “in contrast”.", note_cn: "固定短语 in contrast（相比之下）" },
      { num: 33, answer: "E", note_en: "Present tense, singular subject “the Moon” — consistent with the passage's present-tense explanation.", note_cn: "现在时，单数主语 the Moon 用 is" },
      { num: 34, answer: "M", note_en: "“Those who” refers to the people who saw the moon.", note_cn: "those who 指代……的人" },
      { num: 35, answer: "K", note_en: "Possessive pronoun “their”, referring to the viewers.", note_cn: "物主代词 their，指代 viewers" }
    ]
  },
  {
    id: "2025-gc2025-p12",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "Flying Cockroaches in Singapore",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from verminator.sg — “4 facts about Singapore's most-hated pest”",
    wordBank: [
      { letter: "A", word: "across" },
      { letter: "B", word: "are" },
      { letter: "C", word: "by" },
      { letter: "D", word: "can" },
      { letter: "E", word: "for" },
      { letter: "F", word: "from" },
      { letter: "G", word: "in" },
      { letter: "H", word: "is" },
      { letter: "J", word: "of" },
      { letter: "K", word: "off" },
      { letter: "L", word: "shall" },
      { letter: "M", word: "through" },
      { letter: "N", word: "to" },
      { letter: "P", word: "what" },
      { letter: "Q", word: "with" }
    ],
    text:
      "Flying cockroaches in Singapore are a common yet unsettling sight for many. Their sudden appearance, especially in one's home, [[26]] cause alarm since they are often unexpected. These pests are often found in dark, humid areas like bathrooms and drainage systems. Despite maintaining a clean household, one may still encounter cockroaches as they navigate [[27]] open windows or shared ventilation systems.\n\n" +
      "One of the most remarkable abilities of these cockroaches [[28]] their resilience. They can survive in extreme conditions and have adapted [[29]] avoid many extermination methods. Submerging them in water may seem like an effective solution but these insects can hold their breath for up to forty minutes, allowing them to escape even after being flushed down a drain. However, their survival is ultimately limited [[30]] their inability to drink water, leading to eventual dehydration.\n\n" +
      "Despite common misconceptions, these cockroaches do not truly fly but rather glide using their wings to move [[31]] surfaces. This movement is often mistaken [[32]] aggressive behaviour when the insect is simply attempting to flee [[33]] perceived danger.\n\n" +
      "Given their adaptability, infestations can be difficult to manage without professional intervention. While household remedies may offer temporary relief, engaging pest control services is often the most effective approach to ensuring a cockroach-free home, in [[34]] may seem like an endless struggle to ward them [[35]]. A professional solution is often the key to regaining peace of mind.",
    blanks: [
      { num: 26, answer: "D", note_en: "Modal verb of possibility — “can cause alarm”.", note_cn: "情态动词 can，表可能性" },
      { num: 27, answer: "M", note_en: "Fixed collocation — “navigate through” an opening.", note_cn: "固定搭配 navigate through（穿过）" },
      { num: 28, answer: "H", note_en: "Subject–verb agreement: “One (of the … abilities)” is singular, so it takes “is”.", note_cn: "主谓一致：主语 One 为单数，谓语用 is" },
      { num: 29, answer: "N", note_en: "Infinitive of purpose — “adapted to avoid”.", note_cn: "不定式表目的 adapted to avoid" },
      { num: 30, answer: "C", note_en: "Fixed collocation — “limited by” something.", note_cn: "固定搭配 limited by（受限于）" },
      { num: 31, answer: "A", note_en: "Fixed collocation — “move across” surfaces.", note_cn: "固定搭配 move across（在……表面移动）" },
      { num: 32, answer: "E", note_en: "Fixed collocation — “mistaken for” something else.", note_cn: "固定搭配 mistaken for（被误认为）" },
      { num: 33, answer: "F", note_en: "Fixed collocation — “flee from” danger.", note_cn: "固定搭配 flee from（逃离）" },
      { num: 34, answer: "P", note_en: "Fixed idiom — “in what may seem like” an endless struggle.", note_cn: "固定用法 in what may seem like（在看似……的情况下）" },
      { num: 35, answer: "K", note_en: "Fixed phrasal verb — “ward off” means to repel or keep away.", note_cn: "固定短语 ward off（驱赶、抵御）" }
    ]
  },
  {
    id: "2025-gc2025-p13",
    source: "2025 RGPS — Grammar Cloze",
    title: "The Making of Soy Sauce",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 26 to 35, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from kikkoman.com and healthline.com",
    wordBank: [
      { letter: "A", word: "a" },
      { letter: "B", word: "an" },
      { letter: "C", word: "and" },
      { letter: "D", word: "are" },
      { letter: "E", word: "by" },
      { letter: "F", word: "either" },
      { letter: "G", word: "is" },
      { letter: "H", word: "neither" },
      { letter: "J", word: "of" },
      { letter: "K", word: "off" },
      { letter: "L", word: "on" },
      { letter: "M", word: "than" },
      { letter: "N", word: "then" },
      { letter: "P", word: "where" },
      { letter: "Q", word: "within" }
    ],
    text:
      "At some point or another, perhaps during dinner at your neighborhood restaurant, you might have wondered how Asians could ever survive a meal without our delectable, umami-filled soy sauce. Who could blame you? Present in every Asian household, it is perhaps even more recognisable [[26]] hot sauce itself.\n\n" +
      "How is soy sauce made? Firstly, soy sauce is made [[27]] combining cooked soybeans and cooked wheat grains, forming them into a paste. Next, [[28]] *Aspergillus oryzae or *Sojae moulds are added to begin fermentation. The culture is added to [[29]] salt solution and left to ferment further. Finally, the mixture is [[30]] pressed to produce the liquid condiment or sauce.\n\n" +
      "Commercial producers use [[31]] ordinary vegetable protein in place of bacterial cultures to speed up the process, creating batches [[32]] a few days. Traditional methods can take as long as six months. The longer the fermentation process, the deeper [[33]] more complex flavours the soy sauce will have.\n\n" +
      "There are hundreds of varieties of soy sauce that [[34]] available on the market today. These varieties depend [[35]] the ingredients used, the method used to create the sauce and the region in which it is made. There are four main types of soy sauce that can be found in your local supermarket, including tamari, shōyu, light, and dark.",
    blanks: [
      { num: 26, answer: "M", note_en: "Comparative — “more recognisable than hot sauce itself”.", note_cn: "比较级 more recognisable than" },
      { num: 27, answer: "E", note_en: "Passive voice — “made by combining”.", note_cn: "被动语态 made by + 动名词" },
      { num: 28, answer: "F", note_en: "“Either … or …” structure listing two alternative moulds.", note_cn: "either...or... 结构，列举两种选择" },
      { num: 29, answer: "A", note_en: "Indefinite article — “added to a salt solution”.", note_cn: "不定冠词 a，修饰 salt solution" },
      { num: 30, answer: "N", note_en: "Sequencing adverb — “is then pressed”.", note_cn: "顺序副词 then，表示接下来的步骤" },
      { num: 31, answer: "B", note_en: "Indefinite article before a vowel sound — “an ordinary vegetable protein”.", note_cn: "不定冠词 an，用于元音音素开头的词前" },
      { num: 32, answer: "Q", note_en: "Fixed collocation — “within a few days”.", note_cn: "固定搭配 within（在……之内）" },
      { num: 33, answer: "C", note_en: "Coordinating conjunction linking two comparative qualities — “deeper and more complex”.", note_cn: "并列连词 and，连接两个比较级修饰语" },
      { num: 34, answer: "D", note_en: "Subject–verb agreement: plural subject “varieties” takes “are”.", note_cn: "主谓一致：复数主语 varieties 用 are" },
      { num: 35, answer: "L", note_en: "Fixed phrasal verb — “depend on”.", note_cn: "固定短语 depend on（取决于）" }
    ]
  },
  {
    id: "2025-gc2025-p14",
    source: "2025 PSLE Prelim — Grammar Cloze",
    title: "Why Sunsets Are Colourful",
    marks: 10,
    instructions:
      "There are 10 blanks, numbered 29 to 38, in the passage below. From the list of words given, choose the most suitable word for each blank. Write its letter (A to Q) in the blank. The letters (I) and (O) have been omitted to avoid confusion during marking. Each word can be used only once.",
    credit: "Adapted from kids.niehs.nih.gov — “Why the sky is blue”",
    wordBank: [
      { letter: "A", word: "also" },
      { letter: "B", word: "are" },
      { letter: "C", word: "by" },
      { letter: "D", word: "during" },
      { letter: "E", word: "into" },
      { letter: "F", word: "is" },
      { letter: "G", word: "its" },
      { letter: "H", word: "it's" },
      { letter: "J", word: "of" },
      { letter: "K", word: "only" },
      { letter: "L", word: "than" },
      { letter: "M", word: "these" },
      { letter: "N", word: "where" },
      { letter: "P", word: "while" },
      { letter: "Q", word: "with" }
    ],
    text:
      "Many people enjoy catching sunsets. Not [[29]] are they beautiful to look at but they also provide us with an insight [[30]] the world of light and colours. Sunlight is made up of all the colours of light that travel as waves of energy. Different colours of light have different wavelengths.\n\n" +
      "The stunning array of colours seen during sunset [[31]] caused by a process called scattering which occurs when sunlight is scattered in all directions. Red light has long wavelengths [[32]] blue light has short wavelengths. Blue light is scattered more than other colours of light because of [[33]] shorter wavelengths.\n\n" +
      "During sunset, when the sun is lower in the sky, sunlight passes through more of Earth's atmosphere to reach us. This causes the blue light, [[34]] its shorter wavelengths, to scatter more. As a result, this makes red and yellow more prominent in the sky, creating a breathtaking display of warm colours in the sky during sunset.\n\n" +
      "However, the colours we see can be affected [[35]] factors like dust particles in air pollution and haze in the air. [[36]] particles can scatter sunlight differently, sometimes causing the sky to appear greyish or white [[37]] the day and affecting the colours visible during sunset.\n\n" +
      "Volcanic eruptions may impact the colours of sunsets as well. When a volcano erupts, it releases large amounts [[38]] dust into the atmosphere. Dust particles scatter sunlight and thus enhance the colours of sunsets for many months even after the eruption, creating more vibrant sunsets around the world.",
    blanks: [
      { num: 29, answer: "K", note_en: "Inverted “Not only … but also …” structure.", note_cn: "倒装结构 Not only...but also..." },
      { num: 30, answer: "E", note_en: "Fixed collocation — “an insight into” something.", note_cn: "固定搭配 insight into（对……的深入了解）" },
      { num: 31, answer: "F", note_en: "Passive voice, singular subject “array” — “is caused by”.", note_cn: "被动语态，单数主语 array 用 is" },
      { num: 32, answer: "P", note_en: "“While” contrasts red light's long wavelengths with blue light's short ones.", note_cn: "while 表对比" },
      { num: 33, answer: "G", note_en: "Possessive pronoun “its”, referring to blue light.", note_cn: "物主代词 its，指代 blue light" },
      { num: 34, answer: "Q", note_en: "“With” introduces the descriptive phrase modifying “blue light”.", note_cn: "with 引导描述性状语" },
      { num: 35, answer: "C", note_en: "Passive voice agent marker — “affected by” factors.", note_cn: "被动语态：by 引出动作的执行者" },
      { num: 36, answer: "M", note_en: "“These particles” refers back to the dust particles mentioned.", note_cn: "指示代词 these，指代前文的 dust particles" },
      { num: 37, answer: "D", note_en: "Fixed collocation — “during the day”.", note_cn: "固定搭配 during the day（在白天）" },
      { num: 38, answer: "J", note_en: "Fixed collocation — “amounts of” dust.", note_cn: "固定搭配 amounts of（大量的）" }
    ]
  }
];
