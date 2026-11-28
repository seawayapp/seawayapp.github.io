import sys, json
from PIL import Image, ImageDraw, ImageFont
sys.stdout.reconfigure(encoding='utf-8')
res=json.load(open(sys.argv[1],encoding='utf-8')); pages=sys.argv[2]
p0,p1=int(sys.argv[3]),int(sys.argv[4]); out=sys.argv[5]
font=ImageFont.truetype('C:/Windows/Fonts/msjh.ttc',30)
S=64; rows=list(range(p0,p1+1))
sheet=Image.new('RGB',(16*S+60, len(rows)*(S+36)),'white'); d=ImageDraw.Draw(sheet)
cache={}
for r,p in enumerate(rows):
    im=Image.open(f'{pages}/p{p:02d}.jpeg')
    items=[x for x in res if x['page']==p][:16]
    y=r*(S+36)
    d.text((2,y+18),str(p),fill='red',font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',20))
    for k,x in enumerate(items):
        c=im.crop(x['box']).resize((S,S)); sheet.paste(c,(60+k*S,y))
        d.text((60+k*S+16,y+S),x['ch'],fill='black',font=font)
sheet.save(out,quality=85)
