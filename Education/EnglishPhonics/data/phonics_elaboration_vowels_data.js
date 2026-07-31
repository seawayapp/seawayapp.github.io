// Data for phonics_elaboration_vowels.html
// 20 English vowels (matching this site's IPA convention in index_BBC_Phonics.html:
// 6 long + 7 short monophthongs, 5 closing + 3 centering diphthongs = 21 entries
// shown, since /juː/ is included as a bonus alongside the 20 "official" vowels).
//
// Each word entry has a `mark` field: the exact substring (as it appears in the word)
// that should be highlighted in red to show which letters produce the target sound.
// Every spelling pattern lists 6-8 example words.

const CATEGORY_META = [
    { key: "long", cn: "长元音", en: "Long Vowels", color: "#1e6fa8", desc: "发音时值较长,嘴型口腔保持稳定不动" },
    { key: "short", cn: "短元音", en: "Short Vowels", color: "#c0392b", desc: "发音短促,嘴型口腔保持稳定不动" },
    { key: "closingDiphthongs", cn: "合口双元音", en: "Closing Diphthongs", color: "#8e44ad", desc: "从一个元音滑向更闭合的元音,口型会变化" },
    { key: "centeringDiphthongs", cn: "集中双元音", en: "Centering Diphthongs", color: "#d68910", desc: "从一个元音滑向央元音 /ə/,口型会变化" }
];

const VOWELS_DATA = [
    // ---------------- LONG VOWELS ----------------
    {
        slug: "car", symbol: "ɑː", category: "long",
        tip: "口腔张大,舌头放低靠后,发一个长长的、稳定不变的'啊~'音。",
        mnemonic: "张大嘴巴打哈欠时的 '啊~' 🥱",
        demo: { word: "car", ipa: "kɑː", cn: "汽车", mark: "ar" },
        spellings: [
            { pattern: "ar", words: [
                { word: "car", ipa: "kɑː", cn: "汽车", mark: "ar" },
                { word: "star", ipa: "stɑː", cn: "星星", mark: "ar" },
                { word: "park", ipa: "pɑːk", cn: "公园", mark: "ar" },
                { word: "farm", ipa: "fɑːm", cn: "农场", mark: "ar" },
                { word: "art", ipa: "ɑːt", cn: "艺术", mark: "ar" },
                { word: "market", ipa: "ˈmɑːkɪt", cn: "市场", mark: "ar" },
                { word: "garden", ipa: "ˈɡɑːdn", cn: "花园", mark: "ar" },
                { word: "dark", ipa: "dɑːk", cn: "黑暗的", mark: "ar" }
            ]},
            { pattern: "a", note: "少数词中 a 在 -ss/-nce/-ff 等前读长音", words: [
                { word: "class", ipa: "klɑːs", cn: "班级", mark: "a" },
                { word: "dance", ipa: "dɑːns", cn: "跳舞", mark: "a" },
                { word: "plant", ipa: "plɑːnt", cn: "植物", mark: "a" },
                { word: "after", ipa: "ˈɑːftə", cn: "在……之后", mark: "a" },
                { word: "answer", ipa: "ˈɑːnsə", cn: "回答", mark: "a" },
                { word: "grass", ipa: "ɡrɑːs", cn: "草", mark: "a" },
                { word: "glass", ipa: "ɡlɑːs", cn: "玻璃", mark: "a" },
                { word: "path", ipa: "pɑːθ", cn: "小路", mark: "a" }
            ]}
        ]
    },
    {
        slug: "for", symbol: "ɔː", category: "long",
        tip: "双唇收圆并向前突出,舌头后缩,发一个长长的'哦~'音。",
        mnemonic: "惊讶时张圆嘴巴说的 '哦~' 😮",
        demo: { word: "for", ipa: "fɔː", cn: "为了", mark: "or" },
        spellings: [
            { pattern: "or", words: [
                { word: "for", ipa: "fɔː", cn: "为了", mark: "or" },
                { word: "born", ipa: "bɔːn", cn: "出生", mark: "or" },
                { word: "sport", ipa: "spɔːt", cn: "运动", mark: "or" },
                { word: "short", ipa: "ʃɔːt", cn: "矮的", mark: "or" },
                { word: "north", ipa: "nɔːθ", cn: "北方", mark: "or" },
                { word: "morning", ipa: "ˈmɔːnɪŋ", cn: "早上", mark: "or" },
                { word: "corn", ipa: "kɔːn", cn: "玉米", mark: "or" },
                { word: "storm", ipa: "stɔːm", cn: "暴风雨", mark: "or" }
            ]},
            { pattern: "aw", words: [
                { word: "saw", ipa: "sɔː", cn: "看见(过去式)", mark: "aw" },
                { word: "draw", ipa: "drɔː", cn: "画画", mark: "aw" },
                { word: "straw", ipa: "strɔː", cn: "吸管", mark: "aw" },
                { word: "law", ipa: "lɔː", cn: "法律", mark: "aw" },
                { word: "paw", ipa: "pɔː", cn: "爪子", mark: "aw" },
                { word: "jigsaw", ipa: "ˈdʒɪɡsɔː", cn: "拼图", mark: "aw" },
                { word: "yawn", ipa: "jɔːn", cn: "打哈欠", mark: "aw" },
                { word: "crawl", ipa: "krɔːl", cn: "爬", mark: "aw" }
            ]},
            { pattern: "au", words: [
                { word: "autumn", ipa: "ˈɔːtəm", cn: "秋天", mark: "au" },
                { word: "August", ipa: "ˈɔːɡəst", cn: "八月", mark: "au" },
                { word: "sauce", ipa: "sɔːs", cn: "酱汁", mark: "au" },
                { word: "author", ipa: "ˈɔːθə", cn: "作者", mark: "au" },
                { word: "dinosaur", ipa: "ˈdaɪnəsɔː", cn: "恐龙", mark: "au" },
                { word: "astronaut", ipa: "ˈæstrənɔːt", cn: "宇航员", mark: "au" }
            ]},
            { pattern: "al", words: [
                { word: "ball", ipa: "bɔːl", cn: "球", mark: "al" },
                { word: "call", ipa: "kɔːl", cn: "打电话", mark: "al" },
                { word: "tall", ipa: "tɔːl", cn: "高的", mark: "al" },
                { word: "wall", ipa: "wɔːl", cn: "墙", mark: "al" },
                { word: "small", ipa: "smɔːl", cn: "小的", mark: "al" },
                { word: "fall", ipa: "fɔːl", cn: "落下", mark: "al" },
                { word: "hall", ipa: "hɔːl", cn: "大厅", mark: "al" },
                { word: "mall", ipa: "mɔːl", cn: "商场", mark: "al" }
            ]}
        ]
    },
    {
        slug: "her", symbol: "ɜː", category: "long",
        tip: "舌头卷起放在口腔中部,嘴唇稍收圆,发一个长长的、模糊的'饿~'音。",
        mnemonic: "犹豫思考时发出的 '饿~(嗯~)' 🤔",
        demo: { word: "her", ipa: "hɜː", cn: "她的", mark: "er" },
        spellings: [
            { pattern: "er", words: [
                { word: "her", ipa: "hɜː", cn: "她的", mark: "er" },
                { word: "term", ipa: "tɜːm", cn: "学期", mark: "er" },
                { word: "verb", ipa: "vɜːb", cn: "动词", mark: "er" },
                { word: "person", ipa: "ˈpɜːsn", cn: "人", mark: "er" },
                { word: "herself", ipa: "hɜːˈself", cn: "她自己", mark: "er" },
                { word: "germ", ipa: "dʒɜːm", cn: "细菌", mark: "er" },
                { word: "serve", ipa: "sɜːv", cn: "服务", mark: "er" },
                { word: "perfect", ipa: "ˈpɜːfɪkt", cn: "完美的", mark: "er" }
            ]},
            { pattern: "ir", words: [
                { word: "bird", ipa: "bɜːd", cn: "鸟", mark: "ir" },
                { word: "girl", ipa: "ɡɜːl", cn: "女孩", mark: "ir" },
                { word: "first", ipa: "fɜːst", cn: "第一", mark: "ir" },
                { word: "shirt", ipa: "ʃɜːt", cn: "衬衫", mark: "ir" },
                { word: "third", ipa: "θɜːd", cn: "第三", mark: "ir" },
                { word: "circle", ipa: "ˈsɜːkl", cn: "圆圈", mark: "ir" },
                { word: "dirty", ipa: "ˈdɜːti", cn: "脏的", mark: "ir" },
                { word: "thirsty", ipa: "ˈθɜːsti", cn: "口渴的", mark: "ir" }
            ]},
            { pattern: "ur", words: [
                { word: "nurse", ipa: "nɜːs", cn: "护士", mark: "ur" },
                { word: "turn", ipa: "tɜːn", cn: "转动", mark: "ur" },
                { word: "burn", ipa: "bɜːn", cn: "燃烧", mark: "ur" },
                { word: "church", ipa: "tʃɜːtʃ", cn: "教堂", mark: "ur" },
                { word: "purple", ipa: "ˈpɜːpl", cn: "紫色", mark: "ur" },
                { word: "curly", ipa: "ˈkɜːli", cn: "卷曲的", mark: "ur" },
                { word: "hurt", ipa: "hɜːt", cn: "受伤", mark: "ur" },
                { word: "Thursday", ipa: "ˈθɜːzdeɪ", cn: "星期四", mark: "ur" }
            ]},
            { pattern: "or", note: "w 后面的 or 常读 /ɜː/", words: [
                { word: "word", ipa: "wɜːd", cn: "单词", mark: "or" },
                { word: "work", ipa: "wɜːk", cn: "工作", mark: "or" },
                { word: "world", ipa: "wɜːld", cn: "世界", mark: "or" },
                { word: "worm", ipa: "wɜːm", cn: "虫子", mark: "or" },
                { word: "worse", ipa: "wɜːs", cn: "更糟的", mark: "or" },
                { word: "worth", ipa: "wɜːθ", cn: "值得", mark: "or" }
            ]},
            { pattern: "ear", words: [
                { word: "early", ipa: "ˈɜːli", cn: "早地", mark: "ear" },
                { word: "earth", ipa: "ɜːθ", cn: "地球", mark: "ear" },
                { word: "learn", ipa: "lɜːn", cn: "学习", mark: "ear" },
                { word: "heard", ipa: "hɜːd", cn: "听见(过去式)", mark: "ear" },
                { word: "search", ipa: "sɜːtʃ", cn: "搜索", mark: "ear" },
                { word: "earn", ipa: "ɜːn", cn: "赚钱", mark: "ear" }
            ]}
        ]
    },
    {
        slug: "see", symbol: "iː", category: "long",
        tip: "嘴角向两侧咧开像微笑,舌头前伸抬高,发一个长长的'衣~'音。",
        mnemonic: "咧嘴微笑时发出的 '衣~' 😄",
        demo: { word: "see", ipa: "siː", cn: "看见", mark: "ee" },
        spellings: [
            { pattern: "ee", words: [
                { word: "see", ipa: "siː", cn: "看见", mark: "ee" },
                { word: "tree", ipa: "triː", cn: "树", mark: "ee" },
                { word: "three", ipa: "θriː", cn: "三", mark: "ee" },
                { word: "bee", ipa: "biː", cn: "蜜蜂", mark: "ee" },
                { word: "green", ipa: "ɡriːn", cn: "绿色", mark: "ee" },
                { word: "sleep", ipa: "sliːp", cn: "睡觉", mark: "ee" },
                { word: "feet", ipa: "fiːt", cn: "脚(复数)", mark: "ee" },
                { word: "sweet", ipa: "swiːt", cn: "甜的", mark: "ee" }
            ]},
            { pattern: "ea", words: [
                { word: "tea", ipa: "tiː", cn: "茶", mark: "ea" },
                { word: "read", ipa: "riːd", cn: "阅读", mark: "ea" },
                { word: "eat", ipa: "iːt", cn: "吃", mark: "ea" },
                { word: "sea", ipa: "siː", cn: "海", mark: "ea" },
                { word: "meat", ipa: "miːt", cn: "肉", mark: "ea" },
                { word: "teach", ipa: "tiːtʃ", cn: "教", mark: "ea" },
                { word: "clean", ipa: "kliːn", cn: "干净的", mark: "ea" },
                { word: "dream", ipa: "driːm", cn: "梦", mark: "ea" }
            ]},
            { pattern: "e", words: [
                { word: "be", ipa: "biː", cn: "是", mark: "e" },
                { word: "he", ipa: "hiː", cn: "他", mark: "e" },
                { word: "she", ipa: "ʃiː", cn: "她", mark: "e" },
                { word: "we", ipa: "wiː", cn: "我们", mark: "e" },
                { word: "me", ipa: "miː", cn: "我(宾格)", mark: "e" },
                { word: "even", ipa: "ˈiːvn", cn: "甚至", mark: "e" },
                { word: "evening", ipa: "ˈiːvnɪŋ", cn: "傍晚", mark: "e" },
                { word: "secret", ipa: "ˈsiːkrət", cn: "秘密", mark: "e" }
            ]},
            { pattern: "ie", words: [
                { word: "field", ipa: "fiːld", cn: "田野", mark: "ie" },
                { word: "piece", ipa: "piːs", cn: "一块", mark: "ie" },
                { word: "believe", ipa: "bɪˈliːv", cn: "相信", mark: "ie" },
                { word: "achieve", ipa: "əˈtʃiːv", cn: "达成", mark: "ie" },
                { word: "chief", ipa: "tʃiːf", cn: "首领", mark: "ie" },
                { word: "thief", ipa: "θiːf", cn: "小偷", mark: "ie" },
                { word: "brief", ipa: "briːf", cn: "简短的", mark: "ie" },
                { word: "niece", ipa: "niːs", cn: "侄女", mark: "ie" }
            ]},
            { pattern: "ey", words: [
                { word: "key", ipa: "kiː", cn: "钥匙", mark: "ey" },
                { word: "monkey", ipa: "ˈmʌŋki", cn: "猴子", mark: "ey" },
                { word: "honey", ipa: "ˈhʌni", cn: "蜂蜜", mark: "ey" },
                { word: "money", ipa: "ˈmʌni", cn: "钱", mark: "ey" },
                { word: "valley", ipa: "ˈvæli", cn: "山谷", mark: "ey" },
                { word: "chimney", ipa: "ˈtʃɪmni", cn: "烟囱", mark: "ey" },
                { word: "donkey", ipa: "ˈdɒŋki", cn: "驴", mark: "ey" },
                { word: "journey", ipa: "ˈdʒɜːni", cn: "旅程", mark: "ey" }
            ]}
        ]
    },
    {
        slug: "moon", symbol: "uː", category: "long",
        tip: "双唇收圆并向前突出,舌位后缩抬高,发一个长长的'乌~'音。",
        mnemonic: "猫头鹰的叫声 '乌~' 🦉",
        demo: { word: "moon", ipa: "muːn", cn: "月亮", mark: "oo" },
        spellings: [
            { pattern: "oo", words: [
                { word: "food", ipa: "fuːd", cn: "食物", mark: "oo" },
                { word: "moon", ipa: "muːn", cn: "月亮", mark: "oo" },
                { word: "zoo", ipa: "zuː", cn: "动物园", mark: "oo" },
                { word: "room", ipa: "ruːm", cn: "房间", mark: "oo" },
                { word: "school", ipa: "skuːl", cn: "学校", mark: "oo" },
                { word: "spoon", ipa: "spuːn", cn: "勺子", mark: "oo" },
                { word: "tooth", ipa: "tuːθ", cn: "牙齿", mark: "oo" },
                { word: "cool", ipa: "kuːl", cn: "凉爽的", mark: "oo" }
            ]},
            { pattern: "u", words: [
                { word: "June", ipa: "dʒuːn", cn: "六月", mark: "u" },
                { word: "rude", ipa: "ruːd", cn: "粗鲁的", mark: "u" },
                { word: "truth", ipa: "truːθ", cn: "真相", mark: "u" },
                { word: "student", ipa: "ˈstjuːdənt", cn: "学生", mark: "u" },
                { word: "ruler", ipa: "ˈruːlə", cn: "尺子", mark: "u" },
                { word: "flu", ipa: "fluː", cn: "流感", mark: "u" },
                { word: "super", ipa: "ˈsuːpə", cn: "超级的", mark: "u" },
                { word: "tulip", ipa: "ˈtjuːlɪp", cn: "郁金香", mark: "u" }
            ]},
            { pattern: "ew", words: [
                { word: "blew", ipa: "bluː", cn: "吹(过去式)", mark: "ew" },
                { word: "chew", ipa: "tʃuː", cn: "咀嚼", mark: "ew" },
                { word: "flew", ipa: "fluː", cn: "飞(过去式)", mark: "ew" },
                { word: "grew", ipa: "ɡruː", cn: "生长(过去式)", mark: "ew" },
                { word: "screw", ipa: "skruː", cn: "螺丝", mark: "ew" },
                { word: "threw", ipa: "θruː", cn: "扔(过去式)", mark: "ew" },
                { word: "crew", ipa: "kruː", cn: "全体成员", mark: "ew" },
                { word: "stew", ipa: "stjuː", cn: "炖菜", mark: "ew" }
            ]},
            { pattern: "ue", words: [
                { word: "blue", ipa: "bluː", cn: "蓝色", mark: "ue" },
                { word: "true", ipa: "truː", cn: "真实的", mark: "ue" },
                { word: "glue", ipa: "ɡluː", cn: "胶水", mark: "ue" },
                { word: "clue", ipa: "kluː", cn: "线索", mark: "ue" },
                { word: "rescue", ipa: "ˈreskjuː", cn: "救援", mark: "ue" },
                { word: "statue", ipa: "ˈstætjuː", cn: "雕像", mark: "ue" },
                { word: "argue", ipa: "ˈɑːɡjuː", cn: "争论", mark: "ue" },
                { word: "avenue", ipa: "ˈævənjuː", cn: "大道", mark: "ue" }
            ]}
        ]
    },
    {
        slug: "use", symbol: "juː", category: "long",
        tip: "先发一个短短的 /j/(像中文'呀'的开头),再快速滑向 /uː/,合起来像中文'优'。",
        mnemonic: "开心地说 '优~'(优秀的优) 🙌",
        demo: { word: "use", ipa: "juːz", cn: "使用", mark: "u" },
        spellings: [
            { pattern: "u", words: [
                { word: "use", ipa: "juːz", cn: "使用", mark: "u" },
                { word: "unit", ipa: "ˈjuːnɪt", cn: "单元", mark: "u" },
                { word: "uniform", ipa: "ˈjuːnɪfɔːm", cn: "制服", mark: "u" },
                { word: "music", ipa: "ˈmjuːzɪk", cn: "音乐", mark: "u" },
                { word: "human", ipa: "ˈhjuːmən", cn: "人类", mark: "u" },
                { word: "universe", ipa: "ˈjuːnɪvɜːs", cn: "宇宙", mark: "u" },
                { word: "menu", ipa: "ˈmenjuː", cn: "菜单", mark: "u" },
                { word: "huge", ipa: "hjuːdʒ", cn: "巨大的", mark: "u" }
            ]},
            { pattern: "ew", words: [
                { word: "few", ipa: "fjuː", cn: "很少的", mark: "ew" },
                { word: "new", ipa: "njuː", cn: "新的", mark: "ew" },
                { word: "news", ipa: "njuːz", cn: "新闻", mark: "ew" },
                { word: "nephew", ipa: "ˈnefjuː", cn: "侄子", mark: "ew" },
                { word: "view", ipa: "vjuː", cn: "景色", mark: "ew" },
                { word: "review", ipa: "rɪˈvjuː", cn: "复习", mark: "ew" },
                { word: "interview", ipa: "ˈɪntəvjuː", cn: "面试", mark: "ew" },
                { word: "curfew", ipa: "ˈkɜːfjuː", cn: "宵禁", mark: "ew" }
            ]},
            { pattern: "ue", words: [
                { word: "cue", ipa: "kjuː", cn: "提示", mark: "ue" },
                { word: "argue", ipa: "ˈɑːɡjuː", cn: "争论", mark: "ue" },
                { word: "value", ipa: "ˈvæljuː", cn: "价值", mark: "ue" },
                { word: "venue", ipa: "ˈvenjuː", cn: "场地", mark: "ue" },
                { word: "avenue", ipa: "ˈævənjuː", cn: "大道", mark: "ue" },
                { word: "continue", ipa: "kənˈtɪnjuː", cn: "继续", mark: "ue" },
                { word: "rescue", ipa: "ˈreskjuː", cn: "救援", mark: "ue" },
                { word: "statue", ipa: "ˈstætjuː", cn: "雕像", mark: "ue" }
            ]}
        ]
    },

    // ---------------- SHORT VOWELS ----------------
    {
        slug: "up", symbol: "ʌ", category: "short",
        tip: "嘴巴半张,舌头放松居中,发一个短促的'阿'音。",
        mnemonic: "被轻轻碰了一下发出的短促 '阿!' 😲",
        demo: { word: "up", ipa: "ʌp", cn: "向上", mark: "u" },
        spellings: [
            { pattern: "u", words: [
                { word: "up", ipa: "ʌp", cn: "向上", mark: "u" },
                { word: "cup", ipa: "kʌp", cn: "杯子", mark: "u" },
                { word: "sun", ipa: "sʌn", cn: "太阳", mark: "u" },
                { word: "jump", ipa: "dʒʌmp", cn: "跳", mark: "u" },
                { word: "much", ipa: "mʌtʃ", cn: "很多", mark: "u" },
                { word: "bus", ipa: "bʌs", cn: "公交车", mark: "u" },
                { word: "drum", ipa: "drʌm", cn: "鼓", mark: "u" },
                { word: "truck", ipa: "trʌk", cn: "卡车", mark: "u" }
            ]},
            { pattern: "o", words: [
                { word: "mother", ipa: "ˈmʌðə", cn: "妈妈", mark: "o" },
                { word: "brother", ipa: "ˈbrʌðə", cn: "兄弟", mark: "o" },
                { word: "month", ipa: "mʌnθ", cn: "月份", mark: "o" },
                { word: "son", ipa: "sʌn", cn: "儿子", mark: "o" },
                { word: "come", ipa: "kʌm", cn: "来", mark: "o" },
                { word: "love", ipa: "lʌv", cn: "爱", mark: "o" },
                { word: "monkey", ipa: "ˈmʌŋki", cn: "猴子", mark: "o" },
                { word: "money", ipa: "ˈmʌni", cn: "钱", mark: "o" }
            ]},
            { pattern: "ou", words: [
                { word: "young", ipa: "jʌŋ", cn: "年轻的", mark: "ou" },
                { word: "cousin", ipa: "ˈkʌzn", cn: "表/堂兄弟姐妹", mark: "ou" },
                { word: "country", ipa: "ˈkʌntri", cn: "国家", mark: "ou" },
                { word: "double", ipa: "ˈdʌbl", cn: "双倍的", mark: "ou" },
                { word: "trouble", ipa: "ˈtrʌbl", cn: "麻烦", mark: "ou" },
                { word: "couple", ipa: "ˈkʌpl", cn: "一对", mark: "ou" },
                { word: "touch", ipa: "tʌtʃ", cn: "触摸", mark: "ou" },
                { word: "enough", ipa: "ɪˈnʌf", cn: "足够的", mark: "ou" }
            ]}
        ]
    },
    {
        slug: "hot", symbol: "ɒ", category: "short",
        tip: "嘴巴张大,舌头放低靠后,发一个短促的'哦'音。",
        mnemonic: "惊讶地发出短促的 '哦!' 😯",
        demo: { word: "hot", ipa: "hɒt", cn: "热的", mark: "o" },
        spellings: [
            { pattern: "o", words: [
                { word: "hot", ipa: "hɒt", cn: "热的", mark: "o" },
                { word: "dog", ipa: "dɒg", cn: "狗", mark: "o" },
                { word: "box", ipa: "bɒks", cn: "盒子", mark: "o" },
                { word: "clock", ipa: "klɒk", cn: "钟", mark: "o" },
                { word: "rock", ipa: "rɒk", cn: "石头", mark: "o" },
                { word: "shop", ipa: "ʃɒp", cn: "商店", mark: "o" },
                { word: "frog", ipa: "frɒg", cn: "青蛙", mark: "o" },
                { word: "pond", ipa: "pɒnd", cn: "池塘", mark: "o" }
            ]},
            { pattern: "a", note: "w 后面的 a 常读 /ɒ/", words: [
                { word: "want", ipa: "wɒnt", cn: "想要", mark: "a" },
                { word: "watch", ipa: "wɒtʃ", cn: "手表", mark: "a" },
                { word: "wash", ipa: "wɒʃ", cn: "洗", mark: "a" },
                { word: "swan", ipa: "swɒn", cn: "天鹅", mark: "a" },
                { word: "wasp", ipa: "wɒsp", cn: "黄蜂", mark: "a" },
                { word: "squash", ipa: "skwɒʃ", cn: "壁球;南瓜", mark: "a" }
            ]}
        ]
    },
    {
        slug: "ago", symbol: "ə", category: "short",
        tip: "全身最放松的一个音!舌头居中,轻轻发出模糊的'呃/额'音,只出现在非重读音节。",
        mnemonic: "犹豫不决时发出的 '呃~' 🤷",
        demo: { word: "ago", ipa: "əˈɡəʊ", cn: "以前", mark: "a" },
        spellings: [
            { pattern: "a(非重读)", words: [
                { word: "ago", ipa: "əˈɡəʊ", cn: "以前", mark: "a" },
                { word: "again", ipa: "əˈɡen", cn: "再一次", mark: "a" },
                { word: "about", ipa: "əˈbaʊt", cn: "关于", mark: "a" },
                { word: "banana", ipa: "bəˈnɑːnə", cn: "香蕉", mark: "a" },
                { word: "sofa", ipa: "ˈsəʊfə", cn: "沙发", mark: "a" },
                { word: "China", ipa: "ˈtʃaɪnə", cn: "中国", mark: "a" },
                { word: "alone", ipa: "əˈləʊn", cn: "独自的", mark: "a" },
                { word: "away", ipa: "əˈweɪ", cn: "离开", mark: "a" }
            ]},
            { pattern: "er(非重读词尾)", words: [
                { word: "teacher", ipa: "ˈtiːtʃə", cn: "老师", mark: "er" },
                { word: "water", ipa: "ˈwɔːtə", cn: "水", mark: "er" },
                { word: "sister", ipa: "ˈsɪstə", cn: "姐妹", mark: "er" },
                { word: "better", ipa: "ˈbetə", cn: "更好的", mark: "er" },
                { word: "paper", ipa: "ˈpeɪpə", cn: "纸", mark: "er" },
                { word: "summer", ipa: "ˈsʌmə", cn: "夏天", mark: "er" },
                { word: "driver", ipa: "ˈdraɪvə", cn: "司机", mark: "er" },
                { word: "brother", ipa: "ˈbrʌðə", cn: "兄弟", mark: "er" }
            ]},
            { pattern: "or(非重读词尾)", words: [
                { word: "doctor", ipa: "ˈdɒktə", cn: "医生", mark: "or" },
                { word: "actor", ipa: "ˈæktə", cn: "演员", mark: "or" },
                { word: "visitor", ipa: "ˈvɪzɪtə", cn: "访客", mark: "or" },
                { word: "mirror", ipa: "ˈmɪrə", cn: "镜子", mark: "or" },
                { word: "tractor", ipa: "ˈtræktə", cn: "拖拉机", mark: "or" },
                { word: "elevator", ipa: "ˈelɪveɪtə", cn: "电梯", mark: "or" },
                { word: "calculator", ipa: "ˈkælkjuleɪtə", cn: "计算器", mark: "or" },
                { word: "professor", ipa: "prəˈfesə", cn: "教授", mark: "or" }
            ]}
        ]
    },
    {
        slug: "it", symbol: "ɪ", category: "short",
        tip: "嘴角略微咧开,舌头前伸但不如 /iː/ 抬得高,发一个短促的'衣'音。",
        mnemonic: "短促有力地说 '一'",
        demo: { word: "it", ipa: "ɪt", cn: "它", mark: "i" },
        spellings: [
            { pattern: "i", words: [
                { word: "it", ipa: "ɪt", cn: "它", mark: "i" },
                { word: "big", ipa: "bɪg", cn: "大的", mark: "i" },
                { word: "sit", ipa: "sɪt", cn: "坐", mark: "i" },
                { word: "fish", ipa: "fɪʃ", cn: "鱼", mark: "i" },
                { word: "pink", ipa: "pɪŋk", cn: "粉色", mark: "i" },
                { word: "milk", ipa: "mɪlk", cn: "牛奶", mark: "i" },
                { word: "six", ipa: "sɪks", cn: "六", mark: "i" },
                { word: "swim", ipa: "swɪm", cn: "游泳", mark: "i" }
            ]},
            { pattern: "y", words: [
                { word: "gym", ipa: "dʒɪm", cn: "体育馆", mark: "y" },
                { word: "myth", ipa: "mɪθ", cn: "神话", mark: "y" },
                { word: "symbol", ipa: "ˈsɪmbl", cn: "符号", mark: "y" },
                { word: "system", ipa: "ˈsɪstəm", cn: "系统", mark: "y" },
                { word: "typical", ipa: "ˈtɪpɪkl", cn: "典型的", mark: "y" },
                { word: "mystery", ipa: "ˈmɪstəri", cn: "谜团", mark: "y" }
            ]}
        ]
    },
    {
        slug: "put", symbol: "ʊ", category: "short",
        tip: "双唇微收圆,舌位后缩抬高但发音短促,发一个短短的'屋'音。",
        mnemonic: "看到脏东西皱眉发出的短促 '呃(屋)' 😖",
        demo: { word: "put", ipa: "pʊt", cn: "放置", mark: "u" },
        spellings: [
            { pattern: "u", words: [
                { word: "put", ipa: "pʊt", cn: "放置", mark: "u" },
                { word: "push", ipa: "pʊʃ", cn: "推", mark: "u" },
                { word: "full", ipa: "fʊl", cn: "满的", mark: "u" },
                { word: "pull", ipa: "pʊl", cn: "拉", mark: "u" },
                { word: "bull", ipa: "bʊl", cn: "公牛", mark: "u" },
                { word: "sugar", ipa: "ˈʃʊɡə", cn: "糖", mark: "u" },
                { word: "cushion", ipa: "ˈkʊʃn", cn: "靠垫", mark: "u" },
                { word: "butcher", ipa: "ˈbʊtʃə", cn: "屠夫", mark: "u" }
            ]},
            { pattern: "oo", words: [
                { word: "book", ipa: "bʊk", cn: "书", mark: "oo" },
                { word: "look", ipa: "lʊk", cn: "看", mark: "oo" },
                { word: "foot", ipa: "fʊt", cn: "脚", mark: "oo" },
                { word: "good", ipa: "gʊd", cn: "好的", mark: "oo" },
                { word: "wood", ipa: "wʊd", cn: "木头", mark: "oo" },
                { word: "cook", ipa: "kʊk", cn: "烹饪", mark: "oo" },
                { word: "hood", ipa: "hʊd", cn: "兜帽", mark: "oo" },
                { word: "wool", ipa: "wʊl", cn: "羊毛", mark: "oo" }
            ]}
        ]
    },
    {
        slug: "egg", symbol: "e", category: "short",
        tip: "嘴巴半张,舌头前部略抬,发一个短促的'诶'音。",
        mnemonic: "发现有趣东西时的短促 '诶!' 🙂",
        demo: { word: "egg", ipa: "eg", cn: "蛋", mark: "e" },
        spellings: [
            { pattern: "e", words: [
                { word: "egg", ipa: "eg", cn: "蛋", mark: "e" },
                { word: "red", ipa: "red", cn: "红色", mark: "e" },
                { word: "pen", ipa: "pen", cn: "钢笔", mark: "e" },
                { word: "ten", ipa: "ten", cn: "十", mark: "e" },
                { word: "bed", ipa: "bed", cn: "床", mark: "e" },
                { word: "leg", ipa: "leg", cn: "腿", mark: "e" },
                { word: "desk", ipa: "desk", cn: "桌子", mark: "e" },
                { word: "wet", ipa: "wet", cn: "湿的", mark: "e" }
            ]},
            { pattern: "ea", words: [
                { word: "bread", ipa: "bred", cn: "面包", mark: "ea" },
                { word: "head", ipa: "hed", cn: "头", mark: "ea" },
                { word: "dead", ipa: "ded", cn: "死的", mark: "ea" },
                { word: "ready", ipa: "ˈredi", cn: "准备好的", mark: "ea" },
                { word: "heavy", ipa: "ˈhevi", cn: "重的", mark: "ea" },
                { word: "weather", ipa: "ˈweðə", cn: "天气", mark: "ea" },
                { word: "healthy", ipa: "ˈhelθi", cn: "健康的", mark: "ea" },
                { word: "breakfast", ipa: "ˈbrekfəst", cn: "早餐", mark: "ea" }
            ]}
        ]
    },
    {
        slug: "cat", symbol: "æ", category: "short",
        tip: "嘴巴张大,舌头前部放低,发一个短促而扁平的'哎/啊'音。",
        mnemonic: "咧嘴大笑的短促 '哎' 😆",
        demo: { word: "cat", ipa: "kæt", cn: "猫", mark: "a" },
        spellings: [
            { pattern: "a", words: [
                { word: "cat", ipa: "kæt", cn: "猫", mark: "a" },
                { word: "hat", ipa: "hæt", cn: "帽子", mark: "a" },
                { word: "bag", ipa: "bæg", cn: "包", mark: "a" },
                { word: "map", ipa: "mæp", cn: "地图", mark: "a" },
                { word: "apple", ipa: "ˈæpl", cn: "苹果", mark: "a" },
                { word: "black", ipa: "blæk", cn: "黑色", mark: "a" },
                { word: "hand", ipa: "hænd", cn: "手", mark: "a" },
                { word: "lamp", ipa: "læmp", cn: "台灯", mark: "a" }
            ]}
        ]
    },

    // ---------------- CLOSING DIPHTHONGS ----------------
    {
        slug: "my", symbol: "aɪ", category: "closingDiphthongs",
        tip: "从'啊'快速滑向'衣',两个口型连起来读,像中文的'爱'。",
        mnemonic: "疼痛时喊的 '哎哟' 里的 '爱' 😖",
        demo: { word: "my", ipa: "maɪ", cn: "我的", mark: "y" },
        spellings: [
            { pattern: "i...e", note: "词尾不发音的 e,让 i 读 /aɪ/(魔法 e)", words: [
                { word: "time", ipa: "taɪm", cn: "时间", mark: "i" },
                { word: "like", ipa: "laɪk", cn: "喜欢", mark: "i" },
                { word: "five", ipa: "faɪv", cn: "五", mark: "i" },
                { word: "bike", ipa: "baɪk", cn: "自行车", mark: "i" },
                { word: "smile", ipa: "smaɪl", cn: "微笑", mark: "i" },
                { word: "white", ipa: "waɪt", cn: "白色的", mark: "i" },
                { word: "kite", ipa: "kaɪt", cn: "风筝", mark: "i" },
                { word: "slide", ipa: "slaɪd", cn: "滑梯", mark: "i" }
            ]},
            { pattern: "y", words: [
                { word: "my", ipa: "maɪ", cn: "我的", mark: "y" },
                { word: "fly", ipa: "flaɪ", cn: "飞", mark: "y" },
                { word: "cry", ipa: "kraɪ", cn: "哭", mark: "y" },
                { word: "try", ipa: "traɪ", cn: "尝试", mark: "y" },
                { word: "sky", ipa: "skaɪ", cn: "天空", mark: "y" },
                { word: "dry", ipa: "draɪ", cn: "干燥的", mark: "y" },
                { word: "shy", ipa: "ʃaɪ", cn: "害羞的", mark: "y" },
                { word: "July", ipa: "dʒʊˈlaɪ", cn: "七月", mark: "y" }
            ]},
            { pattern: "igh", words: [
                { word: "night", ipa: "naɪt", cn: "夜晚", mark: "igh" },
                { word: "light", ipa: "laɪt", cn: "光", mark: "igh" },
                { word: "right", ipa: "raɪt", cn: "正确的", mark: "igh" },
                { word: "high", ipa: "haɪ", cn: "高的", mark: "igh" },
                { word: "sight", ipa: "saɪt", cn: "视力", mark: "igh" },
                { word: "flight", ipa: "flaɪt", cn: "航班", mark: "igh" },
                { word: "bright", ipa: "braɪt", cn: "明亮的", mark: "igh" },
                { word: "fight", ipa: "faɪt", cn: "打架", mark: "igh" }
            ]},
            { pattern: "ie", words: [
                { word: "tie", ipa: "taɪ", cn: "领带", mark: "ie" },
                { word: "pie", ipa: "paɪ", cn: "派", mark: "ie" },
                { word: "die", ipa: "daɪ", cn: "死", mark: "ie" },
                { word: "lie", ipa: "laɪ", cn: "躺;撒谎", mark: "ie" },
                { word: "tried", ipa: "traɪd", cn: "尝试了", mark: "ie" },
                { word: "cried", ipa: "kraɪd", cn: "哭了", mark: "ie" },
                { word: "fried", ipa: "fraɪd", cn: "油炸的", mark: "ie" },
                { word: "flies", ipa: "flaɪz", cn: "飞(三单)", mark: "ie" }
            ]}
        ]
    },
    {
        slug: "day", symbol: "eɪ", category: "closingDiphthongs",
        tip: "从'诶'快速滑向'衣',两个口型连起来读,像中文'诶'带一点尾音。",
        mnemonic: "打招呼时说的 '嘿!' 👋",
        demo: { word: "day", ipa: "deɪ", cn: "天", mark: "ay" },
        spellings: [
            { pattern: "a...e", note: "词尾不发音的 e,让 a 读 /eɪ/(魔法 e)", words: [
                { word: "name", ipa: "neɪm", cn: "名字", mark: "a" },
                { word: "make", ipa: "meɪk", cn: "制作", mark: "a" },
                { word: "cake", ipa: "keɪk", cn: "蛋糕", mark: "a" },
                { word: "game", ipa: "geɪm", cn: "游戏", mark: "a" },
                { word: "plate", ipa: "pleɪt", cn: "盘子", mark: "a" },
                { word: "shape", ipa: "ʃeɪp", cn: "形状", mark: "a" },
                { word: "gate", ipa: "geɪt", cn: "大门", mark: "a" },
                { word: "snake", ipa: "sneɪk", cn: "蛇", mark: "a" }
            ]},
            { pattern: "ay", words: [
                { word: "day", ipa: "deɪ", cn: "天", mark: "ay" },
                { word: "play", ipa: "pleɪ", cn: "玩", mark: "ay" },
                { word: "say", ipa: "seɪ", cn: "说", mark: "ay" },
                { word: "way", ipa: "weɪ", cn: "路;方式", mark: "ay" },
                { word: "stay", ipa: "steɪ", cn: "停留", mark: "ay" },
                { word: "today", ipa: "təˈdeɪ", cn: "今天", mark: "ay" },
                { word: "birthday", ipa: "ˈbɜːθdeɪ", cn: "生日", mark: "ay" },
                { word: "Monday", ipa: "ˈmʌndeɪ", cn: "星期一", mark: "ay" }
            ]},
            { pattern: "ai", words: [
                { word: "rain", ipa: "reɪn", cn: "雨", mark: "ai" },
                { word: "train", ipa: "treɪn", cn: "火车", mark: "ai" },
                { word: "wait", ipa: "weɪt", cn: "等待", mark: "ai" },
                { word: "paint", ipa: "peɪnt", cn: "油漆;绘画", mark: "ai" },
                { word: "chain", ipa: "tʃeɪn", cn: "链条", mark: "ai" },
                { word: "brain", ipa: "breɪn", cn: "大脑", mark: "ai" },
                { word: "snail", ipa: "sneɪl", cn: "蜗牛", mark: "ai" },
                { word: "tail", ipa: "teɪl", cn: "尾巴", mark: "ai" }
            ]},
            { pattern: "ey", words: [
                { word: "they", ipa: "ðeɪ", cn: "他们", mark: "ey" },
                { word: "grey", ipa: "ɡreɪ", cn: "灰色", mark: "ey" },
                { word: "obey", ipa: "əˈbeɪ", cn: "服从", mark: "ey" },
                { word: "survey", ipa: "ˈsɜːveɪ", cn: "调查", mark: "ey" },
                { word: "prey", ipa: "preɪ", cn: "猎物", mark: "ey" },
                { word: "convey", ipa: "kənˈveɪ", cn: "传达", mark: "ey" }
            ]}
        ]
    },
    {
        slug: "toy", symbol: "ɔɪ", category: "closingDiphthongs",
        tip: "从'哦'快速滑向'衣',两个口型连起来读,像中文'喔依'。",
        mnemonic: "惊讶时喊的 '哦哟' 😲",
        demo: { word: "toy", ipa: "tɔɪ", cn: "玩具", mark: "oy" },
        spellings: [
            { pattern: "oy", words: [
                { word: "toy", ipa: "tɔɪ", cn: "玩具", mark: "oy" },
                { word: "boy", ipa: "bɔɪ", cn: "男孩", mark: "oy" },
                { word: "joy", ipa: "dʒɔɪ", cn: "快乐", mark: "oy" },
                { word: "enjoy", ipa: "ɪnˈdʒɔɪ", cn: "享受", mark: "oy" },
                { word: "destroy", ipa: "dɪˈstrɔɪ", cn: "破坏", mark: "oy" },
                { word: "employ", ipa: "ɪmˈplɔɪ", cn: "雇用", mark: "oy" },
                { word: "royal", ipa: "ˈrɔɪəl", cn: "皇家的", mark: "oy" },
                { word: "annoy", ipa: "əˈnɔɪ", cn: "惹恼", mark: "oy" }
            ]},
            { pattern: "oi", words: [
                { word: "voice", ipa: "vɔɪs", cn: "声音", mark: "oi" },
                { word: "point", ipa: "pɔɪnt", cn: "点;指向", mark: "oi" },
                { word: "coin", ipa: "kɔɪn", cn: "硬币", mark: "oi" },
                { word: "noise", ipa: "nɔɪz", cn: "噪音", mark: "oi" },
                { word: "choice", ipa: "tʃɔɪs", cn: "选择", mark: "oi" },
                { word: "join", ipa: "dʒɔɪn", cn: "加入", mark: "oi" },
                { word: "soil", ipa: "sɔɪl", cn: "泥土", mark: "oi" },
                { word: "poison", ipa: "ˈpɔɪzn", cn: "毒药", mark: "oi" }
            ]}
        ]
    },
    {
        slug: "cow", symbol: "aʊ", category: "closingDiphthongs",
        tip: "从'啊'快速滑向'屋',两个口型连起来读,像中文'凹'或'澳'。",
        mnemonic: "疼痛时喊的 '哎哟(凹)' 😣",
        demo: { word: "cow", ipa: "kaʊ", cn: "母牛", mark: "ow" },
        spellings: [
            { pattern: "ow", words: [
                { word: "cow", ipa: "kaʊ", cn: "母牛", mark: "ow" },
                { word: "how", ipa: "haʊ", cn: "如何", mark: "ow" },
                { word: "now", ipa: "naʊ", cn: "现在", mark: "ow" },
                { word: "down", ipa: "daʊn", cn: "向下", mark: "ow" },
                { word: "brown", ipa: "braʊn", cn: "棕色", mark: "ow" },
                { word: "town", ipa: "taʊn", cn: "小镇", mark: "ow" },
                { word: "flower", ipa: "ˈflaʊə", cn: "花", mark: "ow" },
                { word: "crown", ipa: "kraʊn", cn: "皇冠", mark: "ow" }
            ]},
            { pattern: "ou", words: [
                { word: "out", ipa: "aʊt", cn: "出去", mark: "ou" },
                { word: "house", ipa: "haʊs", cn: "房子", mark: "ou" },
                { word: "mouse", ipa: "maʊs", cn: "老鼠", mark: "ou" },
                { word: "about", ipa: "əˈbaʊt", cn: "关于", mark: "ou" },
                { word: "round", ipa: "raʊnd", cn: "圆的", mark: "ou" },
                { word: "sound", ipa: "saʊnd", cn: "声音", mark: "ou" },
                { word: "mouth", ipa: "maʊθ", cn: "嘴巴", mark: "ou" },
                { word: "cloud", ipa: "klaʊd", cn: "云", mark: "ou" }
            ]}
        ]
    },
    {
        slug: "go", symbol: "əʊ", category: "closingDiphthongs",
        tip: "从模糊的'额'快速滑向'屋',两个口型连起来读,像中文'欧'。",
        mnemonic: "恍然大悟时发出的 '哦~' 💡",
        demo: { word: "go", ipa: "gəʊ", cn: "去", mark: "o" },
        spellings: [
            { pattern: "o", words: [
                { word: "go", ipa: "gəʊ", cn: "去", mark: "o" },
                { word: "no", ipa: "nəʊ", cn: "不", mark: "o" },
                { word: "so", ipa: "səʊ", cn: "所以", mark: "o" },
                { word: "open", ipa: "ˈəʊpən", cn: "打开", mark: "o" },
                { word: "old", ipa: "əʊld", cn: "老的", mark: "o" },
                { word: "cold", ipa: "kəʊld", cn: "冷的", mark: "o" },
                { word: "hold", ipa: "həʊld", cn: "拿着", mark: "o" },
                { word: "most", ipa: "məʊst", cn: "最多的", mark: "o" }
            ]},
            { pattern: "oa", words: [
                { word: "boat", ipa: "bəʊt", cn: "船", mark: "oa" },
                { word: "coat", ipa: "kəʊt", cn: "外套", mark: "oa" },
                { word: "road", ipa: "rəʊd", cn: "路", mark: "oa" },
                { word: "soap", ipa: "səʊp", cn: "肥皂", mark: "oa" },
                { word: "goat", ipa: "gəʊt", cn: "山羊", mark: "oa" },
                { word: "toast", ipa: "təʊst", cn: "吐司", mark: "oa" },
                { word: "coach", ipa: "kəʊtʃ", cn: "教练;长途汽车", mark: "oa" },
                { word: "float", ipa: "fləʊt", cn: "漂浮", mark: "oa" }
            ]},
            { pattern: "ow", words: [
                { word: "snow", ipa: "snəʊ", cn: "雪", mark: "ow" },
                { word: "slow", ipa: "sləʊ", cn: "慢的", mark: "ow" },
                { word: "grow", ipa: "grəʊ", cn: "生长", mark: "ow" },
                { word: "know", ipa: "nəʊ", cn: "知道", mark: "ow" },
                { word: "yellow", ipa: "ˈjeləʊ", cn: "黄色", mark: "ow" },
                { word: "window", ipa: "ˈwɪndəʊ", cn: "窗", mark: "ow" },
                { word: "below", ipa: "bɪˈləʊ", cn: "在……下面", mark: "ow" },
                { word: "throw", ipa: "θrəʊ", cn: "扔", mark: "ow" }
            ]}
        ]
    },

    // ---------------- CENTERING DIPHTHONGS ----------------
    {
        slug: "ear", symbol: "ɪə", category: "centeringDiphthongs",
        tip: "从'衣'快速滑向模糊的'额',两个口型连起来读,像中文'亿耳'。",
        mnemonic: "侧耳倾听时的样子 👂",
        demo: { word: "ear", ipa: "ɪə", cn: "耳朵", mark: "ear" },
        spellings: [
            { pattern: "ear", words: [
                { word: "ear", ipa: "ɪə", cn: "耳朵", mark: "ear" },
                { word: "near", ipa: "nɪə", cn: "靠近", mark: "ear" },
                { word: "hear", ipa: "hɪə", cn: "听见", mark: "ear" },
                { word: "dear", ipa: "dɪə", cn: "亲爱的", mark: "ear" },
                { word: "year", ipa: "jɪə", cn: "年", mark: "ear" },
                { word: "clear", ipa: "klɪə", cn: "清晰的", mark: "ear" },
                { word: "fear", ipa: "fɪə", cn: "恐惧", mark: "ear" },
                { word: "appear", ipa: "əˈpɪə", cn: "出现", mark: "ear" }
            ]},
            { pattern: "eer", words: [
                { word: "deer", ipa: "dɪə", cn: "鹿", mark: "eer" },
                { word: "cheer", ipa: "tʃɪə", cn: "欢呼", mark: "eer" },
                { word: "engineer", ipa: "ˌendʒɪˈnɪə", cn: "工程师", mark: "eer" },
                { word: "volunteer", ipa: "ˌvɒlənˈtɪə", cn: "志愿者", mark: "eer" },
                { word: "career", ipa: "kəˈrɪə", cn: "职业生涯", mark: "eer" },
                { word: "pioneer", ipa: "ˌpaɪəˈnɪə", cn: "先驱者", mark: "eer" }
            ]}
        ]
    },
    {
        slug: "air", symbol: "eə", category: "centeringDiphthongs",
        tip: "从'诶'快速滑向模糊的'额',两个口型连起来读,像中文'挨耳'。",
        mnemonic: "表示惊讶的 '哎呀~' 😳",
        demo: { word: "air", ipa: "eə", cn: "空气", mark: "air" },
        spellings: [
            { pattern: "air", words: [
                { word: "air", ipa: "eə", cn: "空气", mark: "air" },
                { word: "hair", ipa: "heə", cn: "头发", mark: "air" },
                { word: "chair", ipa: "tʃeə", cn: "椅子", mark: "air" },
                { word: "pair", ipa: "peə", cn: "一对", mark: "air" },
                { word: "fair", ipa: "feə", cn: "公平的", mark: "air" },
                { word: "stairs", ipa: "steəz", cn: "楼梯", mark: "air" },
                { word: "repair", ipa: "rɪˈpeə", cn: "修理", mark: "air" },
                { word: "airport", ipa: "ˈeəpɔːt", cn: "机场", mark: "air" }
            ]},
            { pattern: "are", words: [
                { word: "care", ipa: "keə", cn: "关心", mark: "are" },
                { word: "share", ipa: "ʃeə", cn: "分享", mark: "are" },
                { word: "square", ipa: "skweə", cn: "正方形", mark: "are" },
                { word: "compare", ipa: "kəmˈpeə", cn: "比较", mark: "are" },
                { word: "prepare", ipa: "prɪˈpeə", cn: "准备", mark: "are" },
                { word: "bare", ipa: "beə", cn: "赤裸的", mark: "are" },
                { word: "rare", ipa: "reə", cn: "稀有的", mark: "are" },
                { word: "stare", ipa: "steə", cn: "盯着看", mark: "are" }
            ]},
            { pattern: "ere", words: [
                { word: "there", ipa: "ðeə", cn: "那里", mark: "ere" },
                { word: "where", ipa: "weə", cn: "哪里", mark: "ere" },
                { word: "anywhere", ipa: "ˈeniweə", cn: "任何地方", mark: "ere" },
                { word: "elsewhere", ipa: "ˌelsˈweə", cn: "别处", mark: "ere" },
                { word: "nowhere", ipa: "ˈnəʊweə", cn: "无处", mark: "ere" },
                { word: "everywhere", ipa: "ˈevriweə", cn: "到处", mark: "ere" },
                { word: "wherever", ipa: "weəˈrevə", cn: "无论哪里", mark: "ere" }
            ]}
        ]
    },
    {
        slug: "tour", symbol: "ʊə", category: "centeringDiphthongs",
        tip: "从'屋'快速滑向模糊的'额',两个口型连起来读,像中文'悟耳'。这是最少见的元音,现代英语中很多人已经把它读成 /ɔː/。",
        mnemonic: "表示困惑的 '呜~额' 🤨",
        demo: { word: "tour", ipa: "tʊə", cn: "旅游", mark: "our" },
        spellings: [
            { pattern: "our / ure / oor", note: "拼写不统一,且现代发音常和 /ɔː/ 混同,是最难掌握的元音", words: [
                { word: "tour", ipa: "tʊə", cn: "旅游", mark: "our" },
                { word: "pure", ipa: "pjʊə", cn: "纯净的", mark: "ure" },
                { word: "cure", ipa: "kjʊə", cn: "治愈", mark: "ure" },
                { word: "sure", ipa: "ʃʊə", cn: "确定的", mark: "ure" },
                { word: "during", ipa: "ˈdjʊərɪŋ", cn: "在……期间", mark: "ur" },
                { word: "jury", ipa: "ˈdʒʊəri", cn: "陪审团", mark: "ur" },
                { word: "poor", ipa: "pʊə", cn: "贫穷的", mark: "oor" },
                { word: "plural", ipa: "ˈplʊərəl", cn: "复数的", mark: "ur" }
            ]}
        ]
    }
];
