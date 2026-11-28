import sys, json, collections
sys.stdout.reconfigure(encoding='utf-8')
res=[x for x in json.load(open(sys.argv[1],encoding='utf-8')) if 4<=x['page']<=29]
cnt=collections.Counter(x['ch'] for x in res)
want="一二三十王上下土工千中年不之六主心小人大天入八木水以法生地日口田四月力而同見子了于寺字寶宿也光我成戈戒佛信化住僧何作海流清深江池相樹林樓誦請記誰說持探授拂容宣華花菩薩道遂通進逢遠感念悲思明時景暗善香雲國因開門周如好妙自强強息精福福壽山石火金玉白白言身手足目耳色多少來去出入見行左右東西南北春秋夜空雨永長高光正真善美朙眀寳扵䏻能乃元元載方文武必由甲申末未本古今兄弟父母家安"
for c in dict.fromkeys(want):
    print(c, cnt.get(c,0), end=' | ')
print()
print(len(cnt),'distinct')
