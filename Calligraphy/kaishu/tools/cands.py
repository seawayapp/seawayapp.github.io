import sys, json
from PIL import Image, ImageDraw, ImageFont
sys.path.insert(0, sys.argv[1]); from lessons import UNITS
res=[x for x in json.load(open(sys.argv[2],encoding='utf-8')) if 4<=x['page']<=29]
pages=sys.argv[3]; out=sys.argv[4]
chars=list(dict.fromkeys(c for u in UNITS for l in u[2] for c,_,_ in l[3]))
font=ImageFont.truetype('C:/Windows/Fonts/msjh.ttc',26); sf=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',13)
S=86; MAXN=10; per=26
imc={}
def page(p):
    if p not in imc: imc[p]=Image.open(f'{pages}/p{p:02d}.jpeg')
    return imc[p]
missing=[c for c in chars if not any(x['ch']==c for x in res)]
print('missing',missing)
for s in range(0,len(chars),per):
    cs=chars[s:s+per]
    sheet=Image.new('RGB',(50+MAXN*S,len(cs)*(S+16)),'white'); d=ImageDraw.Draw(sheet)
    for r,c in enumerate(cs):
        y=r*(S+16); d.text((8,y+25),c,fill='red',font=font)
        occ=[x for x in res if x['ch']==c][:MAXN]
        for k,x in enumerate(occ):
            sheet.paste(page(x['page']).crop(x['box']).resize((S,S)),(50+k*S,y))
            d.text((50+k*S+2,y+S),f"{k}",fill='black',font=sf)
    sheet.save(f'{out}{s//per}.jpg',quality=85)
print(len(chars))
