// Data for phonics_elaboration.html
// 28 English consonants (matching this site's IPA convention: includes tr/dr/ts/dz
// as separate "consonant cluster" entries, commonly used in Chinese phonics teaching).
//
// Each word entry has a `mark` field: the exact substring (as it appears in the word)
// that should be highlighted in red to show which letters produce the target sound.
// Each spelling pattern lists 3-8 example words.

const CATEGORY_META = [
    { key: "plosives", cn: "爆破音", en: "Plosives", color: "#3b6fa0", desc: "气流完全阻塞后突然释放" },
    { key: "fricatives", cn: "摩擦音", en: "Fricatives", color: "#4d9d3d", desc: "气流从窄缝中挤出摩擦而成" },
    { key: "affricates", cn: "破擦音", en: "Affricates", color: "#8a4fbf", desc: "先阻塞再摩擦释放的组合音" },
    { key: "nasals", cn: "鼻音", en: "Nasals", color: "#c77b1e", desc: "气流从鼻腔通过" },
    { key: "lateral", cn: "边音", en: "Lateral", color: "#1e9e9e", desc: "气流从舌头两侧流出" },
    { key: "approximants", cn: "半元音", en: "Approximants", color: "#d15a8c", desc: "舌位滑动,类似元音的辅音" }
];

const CONSONANTS_DATA = [
    // ---------------- PLOSIVES ----------------
    {
        slug: "p", symbol: "p", category: "plosives", voiced: false, pair: "b", pairSymbol: "b",
        tip: "双唇紧闭,突然张开爆破出气,声带不振动。",
        mnemonic: "像吹灭蜡烛前嘴巴突然张开的一小股气 💨",
        demo: { word: "pig", ipa: "pɪg", cn: "猪", mark: "p" },
        spellings: [
            { pattern: "p", words: [
                { word: "pen", ipa: "pen", cn: "钢笔", mark: "p" },
                { word: "pig", ipa: "pɪg", cn: "猪", mark: "p" },
                { word: "park", ipa: "pɑːk", cn: "公园", mark: "p" },
                { word: "map", ipa: "mæp", cn: "地图", mark: "p" },
                { word: "jump", ipa: "dʒʌmp", cn: "跳", mark: "p" },
                { word: "party", ipa: "ˈpɑːti", cn: "聚会", mark: "p" },
                { word: "pond", ipa: "pɒnd", cn: "池塘", mark: "p" }
            ]},
            { pattern: "pp", note: "两个 p 仍读一个 /p/", words: [
                { word: "happy", ipa: "ˈhæpi", cn: "开心的", mark: "pp" },
                { word: "puppy", ipa: "ˈpʌpi", cn: "小狗", mark: "pp" },
                { word: "apple", ipa: "ˈæpl", cn: "苹果", mark: "pp" },
                { word: "supper", ipa: "ˈsʌpə", cn: "晚餐", mark: "pp" },
                { word: "hopping", ipa: "ˈhɒpɪŋ", cn: "跳跃", mark: "pp" },
                { word: "slipper", ipa: "ˈslɪpə", cn: "拖鞋", mark: "pp" }
            ]}
        ]
    },
    {
        slug: "b", symbol: "b", category: "plosives", voiced: true, pair: "p", pairSymbol: "p",
        tip: "双唇紧闭,突然张开爆破出气,声带振动(摸喉咙会感觉到震动)。",
        mnemonic: "像敲小鼓发出的 'bo' 一声 🥁",
        demo: { word: "big", ipa: "bɪg", cn: "大的", mark: "b" },
        spellings: [
            { pattern: "b", words: [
                { word: "bag", ipa: "bæg", cn: "包", mark: "b" },
                { word: "big", ipa: "bɪg", cn: "大的", mark: "b" },
                { word: "book", ipa: "bʊk", cn: "书", mark: "b" },
                { word: "baby", ipa: "ˈbeɪbi", cn: "婴儿", mark: "b" },
                { word: "web", ipa: "web", cn: "网", mark: "b" },
                { word: "banana", ipa: "bəˈnɑːnə", cn: "香蕉", mark: "b" },
                { word: "boat", ipa: "bəʊt", cn: "船", mark: "b" }
            ]},
            { pattern: "bb", words: [
                { word: "rabbit", ipa: "ˈræbɪt", cn: "兔子", mark: "bb" },
                { word: "bubble", ipa: "ˈbʌbl", cn: "泡泡", mark: "bb" },
                { word: "hobby", ipa: "ˈhɒbi", cn: "爱好", mark: "bb" },
                { word: "robber", ipa: "ˈrɒbə", cn: "强盗", mark: "bb" },
                { word: "cabbage", ipa: "ˈkæbɪdʒ", cn: "卷心菜", mark: "bb" }
            ]}
        ]
    },
    {
        slug: "t", symbol: "t", category: "plosives", voiced: false, pair: "d", pairSymbol: "d",
        tip: "舌尖抵住上齿龈后方,突然放开,声带不振动。",
        mnemonic: "像钟表的滴答声 'tick tock' ⏰",
        demo: { word: "ten", ipa: "ten", cn: "十", mark: "t" },
        spellings: [
            { pattern: "t", words: [
                { word: "ten", ipa: "ten", cn: "十", mark: "t" },
                { word: "table", ipa: "ˈteɪbl", cn: "桌子", mark: "t" },
                { word: "cat", ipa: "kæt", cn: "猫", mark: "t" },
                { word: "star", ipa: "stɑː", cn: "星星", mark: "t" },
                { word: "eat", ipa: "iːt", cn: "吃", mark: "t" },
                { word: "tiger", ipa: "ˈtaɪgə", cn: "老虎", mark: "t" },
                { word: "toy", ipa: "tɔɪ", cn: "玩具", mark: "t" }
            ]},
            { pattern: "tt", words: [
                { word: "better", ipa: "ˈbetə", cn: "更好", mark: "tt" },
                { word: "letter", ipa: "ˈletə", cn: "信", mark: "tt" },
                { word: "kitten", ipa: "ˈkɪtn", cn: "小猫", mark: "tt" },
                { word: "bottle", ipa: "ˈbɒtl", cn: "瓶子", mark: "tt" },
                { word: "cotton", ipa: "ˈkɒtn", cn: "棉花", mark: "tt" },
                { word: "button", ipa: "ˈbʌtn", cn: "纽扣", mark: "tt" }
            ]},
            { pattern: "-ed", note: "清辅音后,-ed 读 /t/", words: [
                { word: "walked", ipa: "wɔːkt", cn: "走了", mark: "ed" },
                { word: "jumped", ipa: "dʒʌmpt", cn: "跳了", mark: "ed" },
                { word: "watched", ipa: "wɒtʃt", cn: "看了", mark: "ed" },
                { word: "helped", ipa: "helpt", cn: "帮助了", mark: "ed" },
                { word: "cooked", ipa: "kʊkt", cn: "煮了", mark: "ed" },
                { word: "looked", ipa: "lʊkt", cn: "看了", mark: "ed" }
            ]}
        ]
    },
    {
        slug: "d", symbol: "d", category: "plosives", voiced: true, pair: "t", pairSymbol: "t",
        tip: "舌尖抵住上齿龈后方,突然放开,声带振动。",
        mnemonic: "像敲门声 'dong dong' 🚪",
        demo: { word: "dog", ipa: "dɒg", cn: "狗", mark: "d" },
        spellings: [
            { pattern: "d", words: [
                { word: "dog", ipa: "dɒg", cn: "狗", mark: "d" },
                { word: "day", ipa: "deɪ", cn: "天", mark: "d" },
                { word: "red", ipa: "red", cn: "红色", mark: "d" },
                { word: "desk", ipa: "desk", cn: "桌子", mark: "d" },
                { word: "door", ipa: "dɔː", cn: "门", mark: "d" },
                { word: "dance", ipa: "dɑːns", cn: "跳舞", mark: "d" }
            ]},
            { pattern: "dd", words: [
                { word: "ladder", ipa: "ˈlædə", cn: "梯子", mark: "dd" },
                { word: "sudden", ipa: "ˈsʌdn", cn: "突然的", mark: "dd" },
                { word: "paddle", ipa: "ˈpædl", cn: "桨", mark: "dd" },
                { word: "add", ipa: "æd", cn: "加", mark: "dd" },
                { word: "muddy", ipa: "ˈmʌdi", cn: "泥泞的", mark: "dd" },
                { word: "cuddle", ipa: "ˈkʌdl", cn: "拥抱", mark: "dd" }
            ]},
            { pattern: "-ed", note: "浊辅音/元音后,-ed 读 /d/", words: [
                { word: "played", ipa: "pleɪd", cn: "玩了", mark: "ed" },
                { word: "opened", ipa: "ˈəʊpənd", cn: "打开了", mark: "ed" },
                { word: "cleaned", ipa: "kliːnd", cn: "打扫了", mark: "ed" },
                { word: "called", ipa: "kɔːld", cn: "打电话了", mark: "ed" },
                { word: "closed", ipa: "kləʊzd", cn: "关闭了", mark: "ed" },
                { word: "listened", ipa: "ˈlɪsnd", cn: "听了", mark: "ed" }
            ]}
        ]
    },
    {
        slug: "k", symbol: "k", category: "plosives", voiced: false, pair: "g", pairSymbol: "g",
        tip: "舌根抵住软腭(口腔后部),突然放开,声带不振动。",
        mnemonic: "像咳嗽前堵住气的感觉 'k'",
        demo: { word: "king", ipa: "kɪŋ", cn: "国王", mark: "k" },
        spellings: [
            { pattern: "c", note: "c 在 a/o/u 前读 /k/", words: [
                { word: "cat", ipa: "kæt", cn: "猫", mark: "c" },
                { word: "cup", ipa: "kʌp", cn: "杯子", mark: "c" },
                { word: "cold", ipa: "kəʊld", cn: "冷的", mark: "c" },
                { word: "car", ipa: "kɑː", cn: "汽车", mark: "c" },
                { word: "candy", ipa: "ˈkændi", cn: "糖果", mark: "c" },
                { word: "cake", ipa: "keɪk", cn: "蛋糕", mark: "c" }
            ]},
            { pattern: "k", words: [
                { word: "kite", ipa: "kaɪt", cn: "风筝", mark: "k" },
                { word: "king", ipa: "kɪŋ", cn: "国王", mark: "k" },
                { word: "milk", ipa: "mɪlk", cn: "牛奶", mark: "k" },
                { word: "kind", ipa: "kaɪnd", cn: "友善的", mark: "k" },
                { word: "key", ipa: "kiː", cn: "钥匙", mark: "k" },
                { word: "kangaroo", ipa: "ˌkæŋgəˈruː", cn: "袋鼠", mark: "k" }
            ]},
            { pattern: "ck", words: [
                { word: "duck", ipa: "dʌk", cn: "鸭子", mark: "ck" },
                { word: "black", ipa: "blæk", cn: "黑色", mark: "ck" },
                { word: "clock", ipa: "klɒk", cn: "钟", mark: "ck" },
                { word: "quick", ipa: "kwɪk", cn: "快的", mark: "ck" },
                { word: "rock", ipa: "rɒk", cn: "石头", mark: "ck" },
                { word: "chicken", ipa: "ˈtʃɪkɪn", cn: "鸡", mark: "ck" }
            ]},
            { pattern: "ch", words: [
                { word: "school", ipa: "skuːl", cn: "学校", mark: "ch" },
                { word: "echo", ipa: "ˈekəʊ", cn: "回声", mark: "ch" },
                { word: "chemist", ipa: "ˈkemɪst", cn: "药剂师", mark: "ch" },
                { word: "stomach", ipa: "ˈstʌmək", cn: "胃", mark: "ch" }
            ]},
            { pattern: "q(u)", note: "qu 读 /kw/", words: [
                { word: "queen", ipa: "kwiːn", cn: "女王", mark: "qu" },
                { word: "question", ipa: "ˈkwestʃən", cn: "问题", mark: "qu" },
                { word: "quiz", ipa: "kwɪz", cn: "测验", mark: "qu" },
                { word: "quite", ipa: "kwaɪt", cn: "相当", mark: "qu" }
            ]}
        ]
    },
    {
        slug: "g", symbol: "g", category: "plosives", voiced: true, pair: "k", pairSymbol: "k",
        tip: "舌根抵住软腭,突然放开,声带振动。",
        mnemonic: "像青蛙叫的 'gua' 一声 🐸",
        demo: { word: "go", ipa: "gəʊ", cn: "去", mark: "g" },
        spellings: [
            { pattern: "g", words: [
                { word: "go", ipa: "gəʊ", cn: "去", mark: "g" },
                { word: "girl", ipa: "gɜːl", cn: "女孩", mark: "g" },
                { word: "dog", ipa: "dɒg", cn: "狗", mark: "g" },
                { word: "game", ipa: "geɪm", cn: "游戏", mark: "g" },
                { word: "goat", ipa: "gəʊt", cn: "山羊", mark: "g" },
                { word: "garden", ipa: "ˈgɑːdn", cn: "花园", mark: "g" }
            ]},
            { pattern: "gg", words: [
                { word: "egg", ipa: "eg", cn: "鸡蛋", mark: "gg" },
                { word: "bigger", ipa: "ˈbɪgə", cn: "更大的", mark: "gg" },
                { word: "jogging", ipa: "ˈdʒɒgɪŋ", cn: "慢跑", mark: "gg" },
                { word: "wiggle", ipa: "ˈwɪgl", cn: "摆动", mark: "gg" },
                { word: "foggy", ipa: "ˈfɒgi", cn: "有雾的", mark: "gg" }
            ]},
            { pattern: "gu", note: "u 不发音", words: [
                { word: "guess", ipa: "ges", cn: "猜", mark: "gu" },
                { word: "guitar", ipa: "gɪˈtɑː", cn: "吉他", mark: "gu" },
                { word: "guide", ipa: "gaɪd", cn: "向导", mark: "gu" },
                { word: "guest", ipa: "gest", cn: "客人", mark: "gu" },
                { word: "guard", ipa: "gɑːd", cn: "守卫", mark: "gu" }
            ]}
        ]
    },

    // ---------------- FRICATIVES ----------------
    {
        slug: "f", symbol: "f", category: "fricatives", voiced: false, pair: "v", pairSymbol: "v",
        tip: "上齿轻轻咬住下唇,气流从缝隙中挤出摩擦而成,声带不振动。",
        mnemonic: "像风吹过的声音,牙齿咬着嘴唇 🌬️",
        demo: { word: "fish", ipa: "fɪʃ", cn: "鱼", mark: "f" },
        spellings: [
            { pattern: "f", words: [
                { word: "fat", ipa: "fæt", cn: "胖的", mark: "f" },
                { word: "fish", ipa: "fɪʃ", cn: "鱼", mark: "f" },
                { word: "for", ipa: "fɔː", cn: "为了", mark: "f" },
                { word: "food", ipa: "fuːd", cn: "食物", mark: "f" },
                { word: "famous", ipa: "ˈfeɪməs", cn: "著名的", mark: "f" },
                { word: "fabulous", ipa: "ˈfæbjələs", cn: "极好的", mark: "f" },
                { word: "family", ipa: "ˈfæməli", cn: "家庭", mark: "f" }
            ]},
            { pattern: "ff", words: [
                { word: "off", ipa: "ɒf", cn: "离开", mark: "ff" },
                { word: "staff", ipa: "stɑːf", cn: "职工", mark: "ff" },
                { word: "coffee", ipa: "ˈkɒfi", cn: "咖啡", mark: "ff" },
                { word: "muffin", ipa: "ˈmʌfɪn", cn: "松饼", mark: "ff" },
                { word: "traffic", ipa: "ˈtræfɪk", cn: "交通", mark: "ff" }
            ]},
            { pattern: "ph", words: [
                { word: "phone", ipa: "fəʊn", cn: "电话", mark: "ph" },
                { word: "photo", ipa: "ˈfəʊtəʊ", cn: "照片", mark: "ph" },
                { word: "elephant", ipa: "ˈelɪfənt", cn: "大象", mark: "ph" },
                { word: "dolphin", ipa: "ˈdɒlfɪn", cn: "海豚", mark: "ph" },
                { word: "alphabet", ipa: "ˈælfəbet", cn: "字母表", mark: "ph" }
            ]},
            { pattern: "gh", words: [
                { word: "enough", ipa: "ɪˈnʌf", cn: "足够的", mark: "gh" },
                { word: "cough", ipa: "kɒf", cn: "咳嗽", mark: "gh" },
                { word: "rough", ipa: "rʌf", cn: "粗糙的", mark: "gh" },
                { word: "laugh", ipa: "lɑːf", cn: "笑", mark: "gh" },
                { word: "tough", ipa: "tʌf", cn: "坚韧的", mark: "gh" }
            ]}
        ]
    },
    {
        slug: "v", symbol: "v", category: "fricatives", voiced: true, pair: "f", pairSymbol: "f",
        tip: "上齿轻轻咬住下唇,气流摩擦挤出,声带振动(嘴唇会有点抖动感)。",
        mnemonic: "像小蜜蜂震动翅膀的感觉 🐝",
        demo: { word: "van", ipa: "væn", cn: "货车", mark: "v" },
        spellings: [
            { pattern: "v", note: "特殊例外:'of' 中的字母 f 其实读作 /v/,是唯一的例外词", words: [
                { word: "van", ipa: "væn", cn: "货车", mark: "v" },
                { word: "very", ipa: "ˈveri", cn: "很", mark: "v" },
                { word: "voice", ipa: "vɔɪs", cn: "声音", mark: "v" },
                { word: "visit", ipa: "ˈvɪzɪt", cn: "访问", mark: "v" },
                { word: "vet", ipa: "vet", cn: "兽医", mark: "v" },
                { word: "violin", ipa: "ˌvaɪəˈlɪn", cn: "小提琴", mark: "v" }
            ]},
            { pattern: "-ve", note: "词尾 e 不发音", words: [
                { word: "give", ipa: "gɪv", cn: "给", mark: "ve" },
                { word: "live", ipa: "lɪv", cn: "生活", mark: "ve" },
                { word: "five", ipa: "faɪv", cn: "五", mark: "ve" },
                { word: "love", ipa: "lʌv", cn: "爱", mark: "ve" },
                { word: "have", ipa: "hæv", cn: "有", mark: "ve" },
                { word: "wave", ipa: "weɪv", cn: "波浪", mark: "ve" }
            ]}
        ]
    },
    {
        slug: "thv", symbol: "θ", category: "fricatives", voiced: false, pair: "thd", pairSymbol: "ð",
        tip: "舌尖轻轻放在上下齿之间,气流从缝隙挤出摩擦,声带不振动。中文没有这个音,要伸出一点点舌头。",
        mnemonic: "像蛇小声吐舌的动作(不出声版)🐍",
        demo: { word: "three", ipa: "θriː", cn: "三", mark: "th" },
        spellings: [
            { pattern: "th", words: [
                { word: "think", ipa: "θɪŋk", cn: "想", mark: "th" },
                { word: "three", ipa: "θriː", cn: "三", mark: "th" },
                { word: "thumb", ipa: "θʌm", cn: "大拇指", mark: "th" },
                { word: "bath", ipa: "bɑːθ", cn: "洗澡", mark: "th" },
                { word: "tooth", ipa: "tuːθ", cn: "牙齿", mark: "th" },
                { word: "birthday", ipa: "ˈbɜːθdeɪ", cn: "生日", mark: "th" },
                { word: "thin", ipa: "θɪn", cn: "瘦的", mark: "th" },
                { word: "throw", ipa: "θrəʊ", cn: "扔", mark: "th" }
            ]}
        ]
    },
    {
        slug: "thd", symbol: "ð", category: "fricatives", voiced: true, pair: "thv", pairSymbol: "θ",
        tip: "舌位与 /θ/ 相同,舌尖轻放上下齿间,但声带振动。",
        mnemonic: "动作跟 /θ/ 一样,但要哼出声音来～",
        demo: { word: "this", ipa: "ðɪs", cn: "这个", mark: "th" },
        spellings: [
            { pattern: "th", words: [
                { word: "this", ipa: "ðɪs", cn: "这个", mark: "th" },
                { word: "that", ipa: "ðæt", cn: "那个", mark: "th" },
                { word: "the", ipa: "ðə", cn: "这/那", mark: "th" },
                { word: "they", ipa: "ðeɪ", cn: "他们", mark: "th" },
                { word: "mother", ipa: "ˈmʌðə", cn: "妈妈", mark: "th" },
                { word: "weather", ipa: "ˈweðə", cn: "天气", mark: "th" },
                { word: "there", ipa: "ðeə", cn: "那里", mark: "th" },
                { word: "brother", ipa: "ˈbrʌðə", cn: "兄弟", mark: "th" }
            ]}
        ]
    },
    {
        slug: "s", symbol: "s", category: "fricatives", voiced: false, pair: "z", pairSymbol: "z",
        tip: "舌尖靠近上齿龈,留一条窄缝,气流摩擦而出,声带不振动。",
        mnemonic: "像蛇的嘶嘶声 'sss' 🐍",
        demo: { word: "sun", ipa: "sʌn", cn: "太阳", mark: "s" },
        spellings: [
            { pattern: "s", words: [
                { word: "sun", ipa: "sʌn", cn: "太阳", mark: "s" },
                { word: "sit", ipa: "sɪt", cn: "坐", mark: "s" },
                { word: "see", ipa: "siː", cn: "看见", mark: "s" },
                { word: "sign", ipa: "saɪn", cn: "符号", mark: "s" },
                { word: "soap", ipa: "səʊp", cn: "肥皂", mark: "s" },
                { word: "spider", ipa: "ˈspaɪdə", cn: "蜘蛛", mark: "s" }
            ]},
            { pattern: "ss", words: [
                { word: "miss", ipa: "mɪs", cn: "想念", mark: "ss" },
                { word: "class", ipa: "klɑːs", cn: "班级", mark: "ss" },
                { word: "glass", ipa: "glɑːs", cn: "玻璃", mark: "ss" },
                { word: "press", ipa: "pres", cn: "按", mark: "ss" },
                { word: "grass", ipa: "grɑːs", cn: "草", mark: "ss" },
                { word: "dress", ipa: "dres", cn: "连衣裙", mark: "ss" }
            ]},
            { pattern: "c(+e/i/y)", words: [
                { word: "city", ipa: "ˈsɪti", cn: "城市", mark: "c" },
                { word: "ice", ipa: "aɪs", cn: "冰", mark: "c" },
                { word: "cinema", ipa: "ˈsɪnəmə", cn: "电影院", mark: "c" },
                { word: "circle", ipa: "ˈsɜːkl", cn: "圆圈", mark: "c" },
                { word: "pencil", ipa: "ˈpensl", cn: "铅笔", mark: "c" }
            ]},
            { pattern: "ce / se", words: [
                { word: "face", ipa: "feɪs", cn: "脸", mark: "ce" },
                { word: "nice", ipa: "naɪs", cn: "好的", mark: "ce" },
                { word: "dance", ipa: "dɑːns", cn: "跳舞", mark: "ce" },
                { word: "house", ipa: "haʊs", cn: "房子", mark: "se" },
                { word: "mouse", ipa: "maʊs", cn: "老鼠", mark: "se" },
                { word: "rice", ipa: "raɪs", cn: "米饭", mark: "ce" },
                { word: "horse", ipa: "hɔːs", cn: "马", mark: "se" }
            ]}
        ]
    },
    {
        slug: "z", symbol: "z", category: "fricatives", voiced: true, pair: "s", pairSymbol: "s",
        tip: "舌位与 /s/ 相同,但声带振动。",
        mnemonic: "像蜜蜂飞的嗡嗡声 'zzz' 🐝",
        demo: { word: "zoo", ipa: "zuː", cn: "动物园", mark: "z" },
        spellings: [
            { pattern: "z", words: [
                { word: "zoo", ipa: "zuː", cn: "动物园", mark: "z" },
                { word: "zebra", ipa: "ˈzebrə", cn: "斑马", mark: "z" },
                { word: "zero", ipa: "ˈzɪərəʊ", cn: "零", mark: "z" },
                { word: "zip", ipa: "zɪp", cn: "拉链", mark: "z" },
                { word: "zone", ipa: "zəʊn", cn: "区域", mark: "z" }
            ]},
            { pattern: "zz", words: [
                { word: "buzz", ipa: "bʌz", cn: "嗡嗡声", mark: "zz" },
                { word: "fizz", ipa: "fɪz", cn: "起泡声", mark: "zz" },
                { word: "jazz", ipa: "dʒæz", cn: "爵士乐", mark: "zz" },
                { word: "puzzle", ipa: "ˈpʌzl", cn: "拼图", mark: "zz" },
                { word: "dizzy", ipa: "ˈdɪzi", cn: "头晕的", mark: "zz" }
            ]},
            { pattern: "s / se", note: "浊辅音/元音后, s 常读 /z/", words: [
                { word: "dogs", ipa: "dɒgz", cn: "狗们", mark: "s" },
                { word: "boys", ipa: "bɔɪz", cn: "男孩们", mark: "s" },
                { word: "is", ipa: "ɪz", cn: "是", mark: "s" },
                { word: "please", ipa: "pliːz", cn: "请", mark: "se" },
                { word: "cheese", ipa: "tʃiːz", cn: "芝士", mark: "se" },
                { word: "toys", ipa: "tɔɪz", cn: "玩具们", mark: "s" },
                { word: "rose", ipa: "rəʊz", cn: "玫瑰", mark: "se" }
            ]}
        ]
    },
    {
        slug: "sh", symbol: "ʃ", category: "fricatives", voiced: false, pair: "zh", pairSymbol: "ʒ",
        tip: "舌面拱起靠近硬腭,双唇略微突出,气流摩擦而出,声带不振动。",
        mnemonic: "像让别人安静的 '嘘~' 🤫",
        demo: { word: "ship", ipa: "ʃɪp", cn: "船", mark: "sh" },
        spellings: [
            { pattern: "sh", words: [
                { word: "she", ipa: "ʃiː", cn: "她", mark: "sh" },
                { word: "ship", ipa: "ʃɪp", cn: "船", mark: "sh" },
                { word: "fish", ipa: "fɪʃ", cn: "鱼", mark: "sh" },
                { word: "wash", ipa: "wɒʃ", cn: "洗", mark: "sh" },
                { word: "shop", ipa: "ʃɒp", cn: "商店", mark: "sh" },
                { word: "sheep", ipa: "ʃiːp", cn: "羊", mark: "sh" },
                { word: "shoe", ipa: "ʃuː", cn: "鞋", mark: "sh" }
            ]},
            { pattern: "ti / ci", note: "常见于 -tion / -cial 结尾", words: [
                { word: "station", ipa: "ˈsteɪʃn", cn: "车站", mark: "ti" },
                { word: "nation", ipa: "ˈneɪʃn", cn: "国家", mark: "ti" },
                { word: "special", ipa: "ˈspeʃl", cn: "特别的", mark: "ci" },
                { word: "delicious", ipa: "dɪˈlɪʃəs", cn: "美味的", mark: "ci" },
                { word: "action", ipa: "ˈækʃn", cn: "动作", mark: "ti" },
                { word: "vacation", ipa: "vəˈkeɪʃn", cn: "假期", mark: "ti" }
            ]},
            { pattern: "ss(+ion/ure)", words: [
                { word: "mission", ipa: "ˈmɪʃn", cn: "任务", mark: "ss" },
                { word: "pressure", ipa: "ˈpreʃə", cn: "压力", mark: "ss" },
                { word: "session", ipa: "ˈseʃn", cn: "时段", mark: "ss" }
            ]}
        ]
    },
    {
        slug: "zh", symbol: "ʒ", category: "fricatives", voiced: true, pair: "sh", pairSymbol: "ʃ",
        tip: "舌位与 /ʃ/ 相同,但声带振动。英语中较少见,常出现在单词中间。",
        mnemonic: "像相机快门或电流轻响的声音 📷",
        demo: { word: "measure", ipa: "ˈmeʒə", cn: "测量", mark: "s" },
        spellings: [
            { pattern: "s(+ure/ion)", words: [
                { word: "measure", ipa: "ˈmeʒə", cn: "测量", mark: "s" },
                { word: "treasure", ipa: "ˈtreʒə", cn: "宝藏", mark: "s" },
                { word: "television", ipa: "ˈtelɪvɪʒn", cn: "电视", mark: "si" },
                { word: "usually", ipa: "ˈjuːʒuəli", cn: "通常", mark: "s" },
                { word: "vision", ipa: "ˈvɪʒn", cn: "视力", mark: "si" },
                { word: "decision", ipa: "dɪˈsɪʒn", cn: "决定", mark: "si" }
            ]}
        ]
    },
    {
        slug: "h", symbol: "h", category: "fricatives", voiced: false, pair: null, pairSymbol: null,
        tip: "喉咙轻轻呼出一口气,像叹气,声带几乎不振动,不需要用到舌头或牙齿。",
        mnemonic: "像哈气取暖时的 'haa~' ❄️➡️💨",
        demo: { word: "hat", ipa: "hæt", cn: "帽子", mark: "h" },
        spellings: [
            { pattern: "h", words: [
                { word: "hat", ipa: "hæt", cn: "帽子", mark: "h" },
                { word: "hot", ipa: "hɒt", cn: "热的", mark: "h" },
                { word: "house", ipa: "haʊs", cn: "房子", mark: "h" },
                { word: "happy", ipa: "ˈhæpi", cn: "开心的", mark: "h" },
                { word: "hello", ipa: "həˈləʊ", cn: "你好", mark: "h" },
                { word: "horse", ipa: "hɔːs", cn: "马", mark: "h" },
                { word: "hand", ipa: "hænd", cn: "手", mark: "h" }
            ]}
        ]
    },
    {
        slug: "r", symbol: "r", category: "fricatives", voiced: true, pair: null, pairSymbol: null,
        tip: "舌尖卷起但不能碰到上颚,双唇略微收圆前突。这是中文里没有的卷舌方式。",
        mnemonic: "像小狗温和地低吼 'rrr' 🐶",
        demo: { word: "red", ipa: "red", cn: "红色", mark: "r" },
        spellings: [
            { pattern: "r", words: [
                { word: "red", ipa: "red", cn: "红色", mark: "r" },
                { word: "run", ipa: "rʌn", cn: "跑", mark: "r" },
                { word: "rabbit", ipa: "ˈræbɪt", cn: "兔子", mark: "r" },
                { word: "rain", ipa: "reɪn", cn: "雨", mark: "r" },
                { word: "river", ipa: "ˈrɪvə", cn: "河流", mark: "r" },
                { word: "road", ipa: "rəʊd", cn: "路", mark: "r" }
            ]},
            { pattern: "rr", words: [
                { word: "carry", ipa: "ˈkæri", cn: "携带", mark: "rr" },
                { word: "hurry", ipa: "ˈhʌri", cn: "匆忙", mark: "rr" },
                { word: "sorry", ipa: "ˈsɒri", cn: "抱歉", mark: "rr" },
                { word: "berry", ipa: "ˈberi", cn: "浆果", mark: "rr" },
                { word: "arrow", ipa: "ˈærəʊ", cn: "箭", mark: "rr" }
            ]},
            { pattern: "wr", note: "w 不发音", words: [
                { word: "write", ipa: "raɪt", cn: "写", mark: "wr" },
                { word: "wrong", ipa: "rɒŋ", cn: "错的", mark: "wr" },
                { word: "wrist", ipa: "rɪst", cn: "手腕", mark: "wr" },
                { word: "wrap", ipa: "ræp", cn: "包裹", mark: "wr" }
            ]}
        ]
    },

    // ---------------- AFFRICATES ----------------
    {
        slug: "ch", symbol: "tʃ", category: "affricates", voiced: false, pair: "j", pairSymbol: "dʒ",
        tip: "舌尖先抵住齿龈阻塞气流,再突然放开摩擦而出(t + sh 快速连读),声带不振动。",
        mnemonic: "像打喷嚏前的 'ch' 一声 🤧",
        demo: { word: "chair", ipa: "tʃeə", cn: "椅子", mark: "ch" },
        spellings: [
            { pattern: "ch", words: [
                { word: "chair", ipa: "tʃeə", cn: "椅子", mark: "ch" },
                { word: "chicken", ipa: "ˈtʃɪkɪn", cn: "鸡", mark: "ch" },
                { word: "much", ipa: "mʌtʃ", cn: "很多", mark: "ch" },
                { word: "cheese", ipa: "tʃiːz", cn: "芝士", mark: "ch" },
                { word: "chocolate", ipa: "ˈtʃɒklət", cn: "巧克力", mark: "ch" },
                { word: "children", ipa: "ˈtʃɪldrən", cn: "孩子们", mark: "ch" }
            ]},
            { pattern: "tch", words: [
                { word: "watch", ipa: "wɒtʃ", cn: "手表", mark: "tch" },
                { word: "catch", ipa: "kætʃ", cn: "抓", mark: "tch" },
                { word: "kitchen", ipa: "ˈkɪtʃɪn", cn: "厨房", mark: "tch" },
                { word: "match", ipa: "mætʃ", cn: "火柴/比赛", mark: "tch" },
                { word: "witch", ipa: "wɪtʃ", cn: "女巫", mark: "tch" }
            ]},
            { pattern: "t(+ure)", words: [
                { word: "picture", ipa: "ˈpɪktʃə", cn: "图片", mark: "ture" },
                { word: "nature", ipa: "ˈneɪtʃə", cn: "自然", mark: "ture" },
                { word: "future", ipa: "ˈfjuːtʃə", cn: "未来", mark: "ture" },
                { word: "adventure", ipa: "ədˈventʃə", cn: "冒险", mark: "ture" },
                { word: "furniture", ipa: "ˈfɜːnɪtʃə", cn: "家具", mark: "ture" }
            ]}
        ]
    },
    {
        slug: "j", symbol: "dʒ", category: "affricates", voiced: true, pair: "ch", pairSymbol: "tʃ",
        tip: "发音位置与 /tʃ/ 相同(d + zh 快速连读),但声带振动。",
        mnemonic: "像果冻抖动一下 'j' 🍮",
        demo: { word: "jam", ipa: "dʒæm", cn: "果酱", mark: "j" },
        spellings: [
            { pattern: "j", words: [
                { word: "jump", ipa: "dʒʌmp", cn: "跳", mark: "j" },
                { word: "jam", ipa: "dʒæm", cn: "果酱", mark: "j" },
                { word: "jelly", ipa: "ˈdʒeli", cn: "果冻", mark: "j" },
                { word: "juice", ipa: "dʒuːs", cn: "果汁", mark: "j" },
                { word: "jacket", ipa: "ˈdʒækɪt", cn: "夹克", mark: "j" }
            ]},
            { pattern: "g(+e/i/y)", words: [
                { word: "gem", ipa: "dʒem", cn: "宝石", mark: "g" },
                { word: "giant", ipa: "ˈdʒaɪənt", cn: "巨人", mark: "g" },
                { word: "gym", ipa: "dʒɪm", cn: "体育馆", mark: "g" },
                { word: "giraffe", ipa: "dʒəˈrɑːf", cn: "长颈鹿", mark: "g" },
                { word: "gentle", ipa: "ˈdʒentl", cn: "温柔的", mark: "g" }
            ]},
            { pattern: "dge / ge", words: [
                { word: "bridge", ipa: "brɪdʒ", cn: "桥", mark: "dge" },
                { word: "fridge", ipa: "frɪdʒ", cn: "冰箱", mark: "dge" },
                { word: "age", ipa: "eɪdʒ", cn: "年龄", mark: "ge" },
                { word: "cage", ipa: "keɪdʒ", cn: "笼子", mark: "ge" },
                { word: "orange", ipa: "ˈɒrɪndʒ", cn: "橙子", mark: "ge" },
                { word: "judge", ipa: "dʒʌdʒ", cn: "法官", mark: "dge" },
                { word: "village", ipa: "ˈvɪlɪdʒ", cn: "村庄", mark: "ge" }
            ]}
        ]
    },
    {
        slug: "tr", symbol: "tr", category: "affricates", voiced: false, pair: "dr", pairSymbol: "dr",
        tip: "t 和 r 快速连读,像卷舌的 '戳(chuō)'。中文phonics教学中常把 tr 当作一个整体来拼读。",
        mnemonic: "像火车启动时的 'chua~' 声 🚂",
        demo: { word: "tree", ipa: "triː", cn: "树", mark: "tr" },
        spellings: [
            { pattern: "tr", words: [
                { word: "tree", ipa: "triː", cn: "树", mark: "tr" },
                { word: "train", ipa: "treɪn", cn: "火车", mark: "tr" },
                { word: "truck", ipa: "trʌk", cn: "卡车", mark: "tr" },
                { word: "try", ipa: "traɪ", cn: "尝试", mark: "tr" },
                { word: "trip", ipa: "trɪp", cn: "旅行", mark: "tr" },
                { word: "trumpet", ipa: "ˈtrʌmpɪt", cn: "小号", mark: "tr" }
            ]}
        ]
    },
    {
        slug: "dr", symbol: "dr", category: "affricates", voiced: true, pair: "tr", pairSymbol: "tr",
        tip: "d 和 r 快速连读,声带振动,像卷舌的 '拽(zhuài)'。",
        mnemonic: "像敲鼓时带点卷舌感 🥁",
        demo: { word: "drum", ipa: "drʌm", cn: "鼓", mark: "dr" },
        spellings: [
            { pattern: "dr", words: [
                { word: "dragon", ipa: "ˈdrægən", cn: "龙", mark: "dr" },
                { word: "drum", ipa: "drʌm", cn: "鼓", mark: "dr" },
                { word: "dress", ipa: "dres", cn: "连衣裙", mark: "dr" },
                { word: "drink", ipa: "drɪŋk", cn: "喝", mark: "dr" },
                { word: "drive", ipa: "draɪv", cn: "开车", mark: "dr" },
                { word: "dream", ipa: "driːm", cn: "梦", mark: "dr" }
            ]}
        ]
    },
    {
        slug: "ts", symbol: "ts", category: "affricates", voiced: false, pair: "dz", pairSymbol: "dz",
        tip: "常见于名词复数/动词第三人称单数词尾(前一个音是清辅音时),t 和 s 快速连读,像 '次(cì)'。",
        mnemonic: "像小猫喷气时的短促声",
        demo: { word: "cats", ipa: "kæts", cn: "猫们", mark: "ts" },
        spellings: [
            { pattern: "-ts", words: [
                { word: "cats", ipa: "kæts", cn: "猫们", mark: "ts" },
                { word: "that's", ipa: "ðæts", cn: "那是", mark: "t's" },
                { word: "students", ipa: "ˈstjuːdənts", cn: "学生们", mark: "ts" },
                { word: "hats", ipa: "hæts", cn: "帽子们", mark: "ts" },
                { word: "parents", ipa: "ˈpeərənts", cn: "父母", mark: "ts" }
            ]}
        ]
    },
    {
        slug: "dz", symbol: "dz", category: "affricates", voiced: true, pair: "ts", pairSymbol: "ts",
        tip: "常见于复数/词尾(前一个音是浊辅音或元音时),d 和 z 快速连读,像 '资(zī)'。",
        mnemonic: "像小蜗牛滑动时的声音",
        demo: { word: "kids", ipa: "kɪdz", cn: "孩子们", mark: "ds" },
        spellings: [
            { pattern: "-ds", words: [
                { word: "kids", ipa: "kɪdz", cn: "孩子们", mark: "ds" },
                { word: "beds", ipa: "bedz", cn: "床们", mark: "ds" },
                { word: "cards", ipa: "kɑːdz", cn: "卡片们", mark: "ds" },
                { word: "birds", ipa: "bɜːdz", cn: "鸟们", mark: "ds" },
                { word: "friends", ipa: "frendz", cn: "朋友们", mark: "ds" },
                { word: "words", ipa: "wɜːdz", cn: "单词们", mark: "ds" }
            ]}
        ]
    },

    // ---------------- NASALS ----------------
    {
        slug: "m", symbol: "m", category: "nasals", voiced: null, pair: null, pairSymbol: null,
        tip: "双唇闭合,气流从鼻腔通过,声带振动。",
        mnemonic: "像妈妈哄睡时的 'mmm~' 🤱",
        demo: { word: "mom", ipa: "mɒm", cn: "妈妈", mark: "m" },
        spellings: [
            { pattern: "m", words: [
                { word: "man", ipa: "mæn", cn: "男人", mark: "m" },
                { word: "mom", ipa: "mɒm", cn: "妈妈", mark: "m" },
                { word: "milk", ipa: "mɪlk", cn: "牛奶", mark: "m" },
                { word: "moon", ipa: "muːn", cn: "月亮", mark: "m" },
                { word: "monkey", ipa: "ˈmʌŋki", cn: "猴子", mark: "m" },
                { word: "music", ipa: "ˈmjuːzɪk", cn: "音乐", mark: "m" }
            ]},
            { pattern: "mm", words: [
                { word: "summer", ipa: "ˈsʌmə", cn: "夏天", mark: "mm" },
                { word: "hammer", ipa: "ˈhæmə", cn: "锤子", mark: "mm" },
                { word: "swimming", ipa: "ˈswɪmɪŋ", cn: "游泳", mark: "mm" },
                { word: "yummy", ipa: "ˈjʌmi", cn: "好吃的", mark: "mm" },
                { word: "drummer", ipa: "ˈdrʌmə", cn: "鼓手", mark: "mm" }
            ]},
            { pattern: "mb", note: "b 不发音", words: [
                { word: "lamb", ipa: "læm", cn: "羊", mark: "mb" },
                { word: "comb", ipa: "kəʊm", cn: "梳子", mark: "mb" },
                { word: "climb", ipa: "klaɪm", cn: "爬", mark: "mb" },
                { word: "thumb", ipa: "θʌm", cn: "大拇指", mark: "mb" },
                { word: "limb", ipa: "lɪm", cn: "肢体", mark: "mb" }
            ]}
        ]
    },
    {
        slug: "n", symbol: "n", category: "nasals", voiced: null, pair: null, pairSymbol: null,
        tip: "舌尖抵住上齿龈,气流从鼻腔通过,声带振动。",
        mnemonic: "像思考时发出的 'nnn~' 🤔",
        demo: { word: "no", ipa: "nəʊ", cn: "不", mark: "n" },
        spellings: [
            { pattern: "n", words: [
                { word: "no", ipa: "nəʊ", cn: "不", mark: "n" },
                { word: "nose", ipa: "nəʊz", cn: "鼻子", mark: "n" },
                { word: "sun", ipa: "sʌn", cn: "太阳", mark: "n" },
                { word: "name", ipa: "neɪm", cn: "名字", mark: "n" },
                { word: "nest", ipa: "nest", cn: "巢", mark: "n" },
                { word: "moon", ipa: "muːn", cn: "月亮", mark: "n" }
            ]},
            { pattern: "nn", words: [
                { word: "dinner", ipa: "ˈdɪnə", cn: "晚餐", mark: "nn" },
                { word: "sunny", ipa: "ˈsʌni", cn: "晴朗的", mark: "nn" },
                { word: "funny", ipa: "ˈfʌni", cn: "有趣的", mark: "nn" },
                { word: "runner", ipa: "ˈrʌnə", cn: "跑步者", mark: "nn" },
                { word: "granny", ipa: "ˈgræni", cn: "奶奶", mark: "nn" }
            ]},
            { pattern: "kn / gn", note: "k / g 不发音", words: [
                { word: "know", ipa: "nəʊ", cn: "知道", mark: "kn" },
                { word: "knee", ipa: "niː", cn: "膝盖", mark: "kn" },
                { word: "knife", ipa: "naɪf", cn: "刀", mark: "kn" },
                { word: "sign", ipa: "saɪn", cn: "符号", mark: "gn" },
                { word: "knock", ipa: "nɒk", cn: "敲", mark: "kn" }
            ]}
        ]
    },
    {
        slug: "ng", symbol: "ŋ", category: "nasals", voiced: null, pair: null, pairSymbol: null,
        tip: "舌根抵住软腭,气流从鼻腔通过,声带振动。舌尖不需要动。",
        mnemonic: "像敲锣之后拖长的余音 '~ng' 🔔",
        demo: { word: "sing", ipa: "sɪŋ", cn: "唱歌", mark: "ng" },
        spellings: [
            { pattern: "ng", words: [
                { word: "sing", ipa: "sɪŋ", cn: "唱歌", mark: "ng" },
                { word: "king", ipa: "kɪŋ", cn: "国王", mark: "ng" },
                { word: "ring", ipa: "rɪŋ", cn: "戒指", mark: "ng" },
                { word: "morning", ipa: "ˈmɔːnɪŋ", cn: "早上", mark: "ng" },
                { word: "song", ipa: "sɒŋ", cn: "歌", mark: "ng" },
                { word: "swing", ipa: "swɪŋ", cn: "摇摆/秋千", mark: "ng" }
            ]},
            { pattern: "n(+k)", words: [
                { word: "bank", ipa: "bæŋk", cn: "银行", mark: "nk" },
                { word: "think", ipa: "θɪŋk", cn: "想", mark: "nk" },
                { word: "pink", ipa: "pɪŋk", cn: "粉色", mark: "nk" },
                { word: "monkey", ipa: "ˈmʌŋki", cn: "猴子", mark: "nk" },
                { word: "drink", ipa: "drɪŋk", cn: "喝", mark: "nk" }
            ]}
        ]
    },

    // ---------------- LATERAL ----------------
    {
        slug: "l", symbol: "l", category: "lateral", voiced: null, pair: null, pairSymbol: null,
        tip: "舌尖抵住上齿龈后方,气流从舌头两侧流出,声带振动。",
        mnemonic: "舌头顶住上门牙后方,像小船滑过 'lll'",
        demo: { word: "leg", ipa: "leg", cn: "腿", mark: "l" },
        spellings: [
            { pattern: "l", words: [
                { word: "leg", ipa: "leg", cn: "腿", mark: "l" },
                { word: "look", ipa: "lʊk", cn: "看", mark: "l" },
                { word: "lion", ipa: "ˈlaɪən", cn: "狮子", mark: "l" },
                { word: "love", ipa: "lʌv", cn: "爱", mark: "l" },
                { word: "lamp", ipa: "læmp", cn: "台灯", mark: "l" },
                { word: "lake", ipa: "leɪk", cn: "湖", mark: "l" }
            ]},
            { pattern: "ll", words: [
                { word: "ball", ipa: "bɔːl", cn: "球", mark: "ll" },
                { word: "tell", ipa: "tel", cn: "告诉", mark: "ll" },
                { word: "yellow", ipa: "ˈjeləʊ", cn: "黄色", mark: "ll" },
                { word: "hello", ipa: "həˈləʊ", cn: "你好", mark: "ll" },
                { word: "smell", ipa: "smel", cn: "闻/气味", mark: "ll" },
                { word: "pillow", ipa: "ˈpɪləʊ", cn: "枕头", mark: "ll" }
            ]}
        ]
    },

    // ---------------- APPROXIMANTS ----------------
    {
        slug: "y", symbol: "j", category: "approximants", voiced: null, pair: null, pairSymbol: null,
        tip: "舌面接近硬腭但不闭塞,发音像元音一样快速滑向下一个音。",
        mnemonic: "像开心地喊 '耶!' 🙌",
        demo: { word: "yes", ipa: "jes", cn: "是的", mark: "y" },
        spellings: [
            { pattern: "y", words: [
                { word: "yes", ipa: "jes", cn: "是的", mark: "y" },
                { word: "yellow", ipa: "ˈjeləʊ", cn: "黄色", mark: "y" },
                { word: "year", ipa: "jɪə", cn: "年", mark: "y" },
                { word: "yummy", ipa: "ˈjʌmi", cn: "好吃的", mark: "y" },
                { word: "you", ipa: "juː", cn: "你", mark: "y" },
                { word: "yard", ipa: "jɑːd", cn: "院子", mark: "y" }
            ]},
            { pattern: "u(+e)", note: "读作 /juː/", words: [
                { word: "use", ipa: "juːz", cn: "使用", mark: "u" },
                { word: "unit", ipa: "ˈjuːnɪt", cn: "单元", mark: "u" },
                { word: "uniform", ipa: "ˈjuːnɪfɔːm", cn: "制服", mark: "u" },
                { word: "university", ipa: "ˌjuːnɪˈvɜːsəti", cn: "大学", mark: "u" },
                { word: "united", ipa: "juˈnaɪtɪd", cn: "联合的", mark: "u" }
            ]}
        ]
    },
    {
        slug: "w", symbol: "w", category: "approximants", voiced: null, pair: null, pairSymbol: null,
        tip: "双唇收圆并向前突出,像元音一样快速滑向下一个音,牙齿不碰嘴唇。",
        mnemonic: "像惊讶地说 '哇!' 😮",
        demo: { word: "we", ipa: "wiː", cn: "我们", mark: "w" },
        spellings: [
            { pattern: "w", words: [
                { word: "we", ipa: "wiː", cn: "我们", mark: "w" },
                { word: "water", ipa: "ˈwɔːtə", cn: "水", mark: "w" },
                { word: "window", ipa: "ˈwɪndəʊ", cn: "窗", mark: "w" },
                { word: "walk", ipa: "wɔːk", cn: "走", mark: "w" },
                { word: "wet", ipa: "wet", cn: "湿的", mark: "w" },
                { word: "wind", ipa: "wɪnd", cn: "风", mark: "w" }
            ]},
            { pattern: "wh", note: "现代英语中多读 /w/", words: [
                { word: "white", ipa: "waɪt", cn: "白色的", mark: "wh" },
                { word: "what", ipa: "wɒt", cn: "什么", mark: "wh" },
                { word: "why", ipa: "waɪ", cn: "为什么", mark: "wh" },
                { word: "wheel", ipa: "wiːl", cn: "轮子", mark: "wh" },
                { word: "when", ipa: "wen", cn: "什么时候", mark: "wh" }
            ]}
        ]
    }
];
