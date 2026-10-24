// 人生感悟 — sayings and short reflections, shown with template_textslide.html.
// shuffle: a new random order every time the page is opened.
// autofit: smaller font for longer passages so they fit on one slide.
// To add one: copy a { tags, en, cn } block. <br> starts a new line.
// Tags in use: 亲子 · 个人感悟 · 情绪 · 面对得失 · 人际关系 · 家庭 · 诗词 (shown bottom-right of the slide)
var mainData = {
  title: "Reflections",
  subtitle: "人生感悟",
  shuffle: true,
  autofit: true,
  paragraph: [
    {
      tags: ["人际关系", "个人感悟"],
      en: "You can take responsibility for your own actions, but you don't have to take responsibility for everyone's opinion of you.",
      cn: "你可以对自己的行为负责，但不必对每一个人对你的评价负责。"
    },
    {
      tags: ["个人感悟"],
      en: "Appreciating how hard others work, and cherishing your own life — these two things can go together.",
      cn: "体谅别人的辛苦，同时珍惜自己的生活，这两件事可以并存。"
    },
    {
      tags: ["亲子"],
      en: "Let them know that the air-conditioner doesn't run by itself — someone installs and repairs it; food doesn't appear on the table out of nowhere; a society works because many different people are doing their own jobs conscientiously.",
      cn: "让他们知道，空调不是自己就会运转的，背后有人安装、维修；食物不是凭空出现在餐桌上的；一个社会能够正常运作，是因为许多不同的人都在认真完成自己的工作。"
    },
    {
      tags: ["亲子"],
      en: "Perhaps the best outcome of raising children is not two people who meet your expectations, but the day you can calmly watch them walk toward the lives they have chosen.",
      cn: "也许，养育孩子最好的结果，不是培养出两个符合自己期待的人，而是有一天，能够坦然地看着他们走向自己选择的人生。"
    },
    {
      tags: ["亲子"],
      en: "You need the strength to protect them, and also the courage to let them leave your protection and live lives of their own.",
      cn: "你既要有力量保护他们，也要有勇气允许他们离开你的保护，去经历属于自己的人生。"
    },
    {
      tags: ["亲子"],
      en: "You begin not only wanting to raise your children well, but also enjoying the process of them becoming who they are.",
      cn: "你开始不只是想把孩子培养好，也开始享受他们正在成为自己的这个过程。"
    },
    {
      tags: ["亲子"],
      en: "I suspect that one day, what makes you happiest will not be others praising how outstanding your children are, but seeing them stand before you — clear-eyed, strong inside, able to love, and able to bear life's hardships.<br>Then you will think: they have grown up. And I walked with them through the first stretch of the road.",
      cn: "我猜，也许有一天，你最开心的并不是别人称赞你的孩子有多么优秀，而是看见他们站在你面前，眼神坦然，内心有力量，能够爱人，也能够承受人生的不容易。<br>然后你会想：他们长大了。而我，陪他们走过了最初的那一段路。"
    },
    {
      tags: ["面对得失"],
      en: "If your income falls, can you adjust your life without seeing yourself as a failure?",
      cn: "如果收入下降，你能否在调整生活的同时，不把自己看成一个失败者？"
    },
    {
      tags: ["面对得失"],
      en: "If your health falters, can you accept that you no longer have the energy of your youth, and still treasure what you are able to do?",
      cn: "如果身体出现问题，你能否接受自己不再像年轻时那样有精力，同时仍然珍惜自己可以做的事情？"
    },
    {
      tags: ["亲子", "面对得失"],
      en: "If your children do not turn out as you hoped, can you keep loving them without feeling that your worth as a father has been lost?",
      cn: "如果孩子的发展不如预期，你能否继续爱他们，而不觉得自己的父亲身份因此失去了价值？"
    },
    {
      tags: ["人际关系", "面对得失"],
      en: "If others misunderstand or reject you, can you reflect on your own mistakes without making their judgement the whole basis of your existence?",
      cn: "如果别人误解你、否定你，你能否反省自己的错误，却不把别人的评价当成自己存在的全部依据？"
    },
    {
      tags: ["面对得失"],
      en: "Wealth is worth managing, because it can support the family, ease others' suffering and give us more choices.<br>But cherishing wealth does not mean that once it shrinks, I am worth nothing.",
      cn: "财富值得经营，因为它可以支持家庭、减轻他人的痛苦，也能让自己有更多选择。<br>珍惜财富，不等于财富一旦减少，我就一无是处。"
    },
    {
      tags: ["面对得失"],
      en: "Health is worth looking after, because the body is what we rely on to practise, to work and to care for our family.<br>But cherishing health does not mean that if illness comes, my life has failed.",
      cn: "健康值得维护，因为身体是我们修行、工作和照顾家人的重要依托。<br>珍惜健康，不等于身体出现疾病，我的人生就失败了。"
    },
    {
      tags: ["面对得失", "家庭"],
      en: "Family is worth giving to, because love and responsibility between people are meaningful in themselves.<br>But cherishing my family does not mean I can guarantee they will always be safe.",
      cn: "家庭值得付出，因为人与人之间的爱和责任本身就有意义。<br>珍惜家人，不等于我有能力保证他们永远平安。"
    },
    {
      tags: ["面对得失"],
      en: "Reputation is worth treasuring, because integrity helps us build relationships people can rely on.<br>But cherishing my reputation does not mean everyone must approve of me.",
      cn: "名誉值得珍惜，因为诚信能够帮助我们建立可靠的关系。<br>珍惜名誉，不等于我必须让所有人都认可我。"
    },
    {
      tags: ["面对得失"],
      en: "We can do our best to look after the conditions of our life, but we cannot command them never to change.",
      cn: "我们可以尽力守护因缘，却无法命令所有因缘永远不变。"
    },
    {
      tags: ["情绪"],
      en: "When you are angry, know that you are angry — instead of taking the anger to be the whole of who you are.",
      cn: "生气的时候，知道自己正在生气，而不是把愤怒当成全部的自己。"
    },
    {
      tags: ["情绪"],
      en: "When you are anxious, know that you are anxious — instead of deciding, just because you are anxious, that things are bound to go wrong.",
      cn: "着急的时候，知道自己正在着急，而不是因为着急就认定事情一定会变坏。"
    },
    {
      tags: ["情绪"],
      en: "When you meet difficulties, sort out which parts are facts and which parts are your own fears about the future.",
      cn: "遇到困难的时候，分辨哪些是事实，哪些是自己对未来的恐惧。"
    },
    {
      tags: ["情绪"],
      en: "After saying or doing something wrong, be able to admit it and put it right — instead of sinking into self-blame, or rushing to prove you were not wrong.",
      cn: "说错话、做错事以后，能够承认、修正，而不是陷入自责，或者急于证明自己没有错。"
    },
    {
      tags: ["情绪"],
      en: "It is not about demanding that you never get angry.<br>You will still have emotions, and you will still make mistakes.<br>But you begin to have a new space: the emotion arises, yet you do not have to obey all of its commands.",
      cn: "不是要求自己永远不生气。<br>你依然会有情绪，依然会犯错。<br>但你开始拥有一个新的空间：情绪出现了，你却不必完全听从情绪的命令。"
    },
    {
      tags: ["面对得失"],
      en: "You cannot guarantee that you will always be wealthy, but you can try never to harm others out of greed.",
      cn: "你不能保证自己永远富有，但可以努力不因贪欲而做出伤害他人的事情。"
    },
    {
      tags: ["面对得失"],
      en: "You cannot guarantee that you will always be healthy, but you can take good care of your body while you are well, and do your best to get treatment when illness comes.",
      cn: "你不能保证自己永远健康，但可以在健康时善护身体，在疾病到来时尽力治疗。"
    },
    {
      tags: ["面对得失"],
      en: "You cannot guarantee that others will always understand you, but you can try to be honest and upright, and be willing to reflect on your own faults.",
      cn: "你不能保证别人永远理解你，但可以尽量做到诚实、正直，愿意反省自己的过失。"
    },
    {
      tags: ["面对得失"],
      en: "You cannot guarantee that everything will succeed, but after a failure you can keep working out what ought to be done.",
      cn: "你不能保证每一件事情都成功，但可以在失败以后，继续判断什么是应该做的。"
    },
    {
      tags: ["情绪", "面对得失"],
      en: "Even when you are truly in a tight spot, even at a dead end, you don't have to demand that you act brave at once. You may be afraid, you may be sad, you may ask for help — while still not giving up the next good thing you can do.",
      cn: "甚至当你真的处于窘境、绝境时，你也不必立刻要求自己表现得勇敢。你可以害怕，可以难过，可以寻求帮助，同时不放弃下一步能够采取的善行。"
    },
    {
      tags: ["个人感悟"],
      en: "Fearlessness is not believing that I will surely win; it is being willing to do my best for what is right, even when the outcome is not mine to decide.",
      cn: "无畏，不是我相信自己一定能赢，而是即使结果不由我决定，我仍然愿意为正确的事情尽力。"
    },
    {
      tags: ["面对得失"],
      en: "Accepting reality means no longer denying that something has happened; changing reality means continuing to do all you can. The two can exist together.",
      cn: "接受现实，是不再否认事情已经发生；改变现实，则是继续尽自己所能。两者完全可以同时存在。"
    },
    {
      tags: ["个人感悟", "情绪"],
      en: "You don't have to train yourself into someone who never wavers.<br>The real practice is this: when you waver, you notice that you are wavering; after being dragged along by your troubles, you can see how you were dragged away; after making a mistake, you are willing to repent and correct it, rather than punish yourself with even harsher self-criticism.<br>In this sense, you don't need to wait for some earth-shattering moment of awakening before you begin to become the person you hope to be.",
      cn: "你不必把自己训练成一个永远不会动摇的人。<br>真正的练习，是动摇的时候，能够发现自己动摇了；被烦恼牵着走以后，能够看见自己刚才是怎么被牵走的；犯错以后，愿意忏悔、改正，而不是用更严厉的自我批判惩罚自己。<br>从这个意义上说，你不需要等到某个惊天动地的觉醒时刻，才开始成为你期待的那个人。"
    },
    {
      tags: ["个人感悟"],
      en: "In this one life of ours, where should we really put our limited time and energy?",
      cn: "我们这一生，究竟应该把有限的时间和精力，投注在哪里？"
    },
    {
      tags: ["人际关系"],
      en: "You can stay kind to others, but you don't have to let everyone into your life.",
      cn: "你可以对别人保持善意，但你不必让每一个人都进入你的生活。"
    },
    {
      tags: ["诗词", "面对得失"],
      en: "Don't listen to the rain beating through the woods and on the leaves — why not chant and whistle, and walk on slowly?<br>Bamboo staff and straw sandals, lighter than a horse — who's afraid? In a straw cape, through mist and rain, I'll live out my life.<br>A chill spring wind sobers me from the wine — a little cold; yet on the hilltop the slanting sun comes out to greet me.<br>Looking back at the bleak place I came through — I head home: no wind, no rain, and no clear sky either.<br><small>— Su Shi, \"Calming the Waves\"</small>",
      cn: "莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。<br>料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。<br><small>—— 苏轼《定风波》</small>"    },
    {
      tags: ["人际关系"],
      en: "I may not like some of the ways you treat me, but I can admit that you are really good at solving problems.",
      cn: "我可能不喜欢你某些对待我的方式，但我能够承认，你在解决事情方面真的很厉害。"
    },
    {
      tags: ["家庭"],
      en: "Sometimes the deepest reconciliation between an adult son and his father is not finally becoming close, but this:<br>I no longer ask you to be someone you were never able to be;<br>and I, too, can finally stop being the person you hoped I would be.",
      cn: "有时候，成年后的父子关系最深的和解，不是终于能够亲密无间，而是：<br>我终于不再要求你成为一个你从来没有能力成为的人；<br>而我也终于可以不再成为你希望我成为的人。"
    },
    {
      tags: ["家庭"],
      en: "A person can have flaws, and still be someone who loves you.",
      cn: "一个人可以有缺点，同时也可以是一个爱你的人。"
    },
    {
      tags: ["个人感悟"],
      en: "Acknowledge that regret.",
      cn: "承认那个遗憾。"
    },
    {
      tags: ["人际关系"],
      en: "You can love others and still keep yourself.",
      cn: "爱别人，也可以保留自己。"
    },
    {
      tags: ["个人感悟"],
      en: "Growth is something you can feel. You are a plant that loves the sunlight — when you see the sun, you want to grow toward it.<br>When you see something new, you want to learn it.<br>When you see your own shortcomings, you want to improve.<br>When you see a possibility, you want to try. This is the way you grow.<br>There is nothing wrong with it. In fact, it is a very precious part of you.",
      cn: "成长是可以被体验到的。你是一株很喜欢阳光的植物。你会看到阳光，就会想往上长。<br>看到新的东西，就想学。<br>看到自己的不足，就想改善。<br>看到一个可能性，就想尝试。这就是你的生长方式。<br>它本身没有错。甚至这是你非常宝贵的一部分。"
    },
    {
      tags: ["亲子", "个人感悟"],
      en: "Not all growth looks like growing \"upward\".<br>Some plants grow up. Some grow sideways. Some put down roots.<br>Some grow in the shade. Some grow very slowly.<br>You may be a plant that loves the sunlight — but your child is not necessarily you.",
      cn: "不是所有的成长，都表现为“向上”。<br>有的植物向上长。有的向旁边长。有的扎根。<br>有的在树荫里长。有的长得很慢。<br>你可以是一株很喜欢阳光的植物。但孩子未必是你。"
    },
    {
      tags: ["亲子"],
      en: "You can tell him: \"There's sunlight over there — you could go and have a look.\"<br>But you cannot decide for him: \"You must grow all the way up there.\"<br>One day you may even find that his strength was never \"growing taller than others\" at all —<br>but having his own branches and leaves, his own direction, his own life force.",
      cn: "你可以告诉他：“那里有阳光，你可以过去看看。”<br>但不能替他决定：“你必须长到那里。”<br>甚至有一天，你可能会发现，他的优势根本不是“比别人长得高”。<br>而是他有自己的枝叶、自己的方向、自己的生命力。"
    },
    {
      tags: ["亲子"],
      en: "What kind of plant is this child, really?<br>Where are his roots? What is he interested in?<br>In what surroundings does he grow on his own? What is he willing to do again and again?<br>What makes his eyes light up? At what pace does he grow?<br>What is his \"sunlight\"?",
      cn: "这个孩子究竟是什么植物？<br>他的根在哪里？他对什么东西有兴趣？<br>什么环境下他会自己生长？什么事情他愿意反复做？<br>什么东西会让他眼睛亮起来？他的生长速度是什么？<br>他的“阳光”是什么？"
    },
    {
      tags: ["亲子", "个人感悟"],
      en: "My child has his own growth, and I have mine.",
      cn: "孩子有孩子的成长，我有我的成长。"
    },
    {
      tags: ["亲子", "个人感悟"],
      en: "You are still a plant that loves the sunlight and loves to grow upward.<br>But you no longer ask every plant to be like you.<br>You let your child grow at his own pace, and you let yourself grow in your own way.<br>You strive for the sunlight, but you also begin to learn to put down roots.<br>Growing upward is your growth; putting down roots is the growth of your heart.<br>And a truly mature person may not be the one who grows tallest, but one whose roots go ever deeper, whose branches spread ever wider, and who can make room for the other lives around them to grow as well.",
      cn: "你仍然是一株喜欢阳光、喜欢向上生长的植物。<br>但你不再要求所有植物都和你一样。<br>你允许孩子按照他的速度成长，也允许自己按照自己的方式成长。<br>你要努力获得阳光，但你也开始学习扎根。<br>向上，是你的成长；扎根，是你的心灵成长。<br>而一个真正成熟的人，也许不是长得最高的人，而是根越来越深、枝叶越来越开，同时能够容纳身边其他生命一起生长的人。"
    }
  ]
};
