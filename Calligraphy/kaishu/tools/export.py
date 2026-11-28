import sys, json
import numpy as np
from PIL import Image, ImageOps
sys.path.insert(0, sys.argv[1]); from lessons import UNITS
res=[x for x in json.load(open(sys.argv[2],encoding='utf-8')) if 4<=x['page']<=29]
pages=sys.argv[3]; outdir=sys.argv[4]
PICK=dict(一=3,二=1,三=9,王=1,十=3,下=2,千=4,中=4,年=1,之=3,六=2,主=0,玉=0,方=1,八=1,月=2,乃=2,人=2,大=2,天=1,入=2,以=5,地=0,法=8,持=2,日=2,
 四=1,目=1,山=0,于=0,寺=0,同=2,而=6,心=1,我=3,成=1,也=4,光=1,佛=0,信=1,化=1,僧=1,何=0,海=1,流=1,深=1,池=0,相=2,樹=0,授=0,誦=1,請=0,
 記=0,福=2,寳=1,宿=1,容=1,宣=0,字=0,華=1,花=0,菩=1,薩=1,道=2,遂=1,通=1,進=1,感=1,念=0,悲=0,思=1,息=1,文=1,如=1,時=1,精=1,行=1,香=1,
 雲=1,景=1,多=3,空=3,因=2,開=3,門=1,水=2,自=3,强=0,不=1,合=0,塔=1)
chars=list(dict.fromkeys(c for u in UNITS for l in u[2] for c,_,_ in l[3]))
assert set(chars)==set(PICK), set(chars)^set(PICK)
src={}
for c in chars:
    x=[x for x in res if x['ch']==c][PICK[c]]
    im=Image.open(f"{pages}/p{x['page']:02d}.jpeg").convert('L')
    x0,y0,x1,y1=x['box']; c_=im.crop((x0+6,y0+6,x1-6,y1-6))
    a=np.asarray(c_); bg=int(np.median(np.concatenate([a[:4].ravel(),a[-4:].ravel(),a[:,:4].ravel(),a[:,-4:].ravel()])))
    s=max(c_.size); sq=Image.new('L',(s,s),bg); sq.paste(c_,((s-c_.width)//2,(s-c_.height)//2))
    sq=ImageOps.autocontrast(sq,cutoff=0.5).resize((480,480),Image.LANCZOS)
    name=f"{ord(c):x}.webp"; sq.save(f"{outdir}/{name}",quality=82)
    src[c]=dict(page=x['page'],idx=x['idx'])
json.dump(src,open(f"{outdir}/../source_map.json",'w',encoding='utf-8'),ensure_ascii=False,indent=0)
print(len(chars))
