import sys, json
sys.path.insert(0, sys.argv[1]); from lessons import UNITS; from tips import TIPS
units=[]
for title,desc,ls in UNITS:
    units.append(dict(title=title,desc=desc,lessons=[dict(id=i,name=n,sub=s,tips=TIPS[i],chars=[dict(c=c,s=sp,py=py,img=f"{ord(c):x}.webp") for c,sp,py in cs]) for i,n,s,cs in ls]))
js="// Generated: 颜真卿《多宝塔碑》楷书课程数据\n// 字图取自故宫博物院藏明拓本（Wikimedia Commons 公有领域扫描），见 source_map.json\nwindow.KAISHU_UNITS = "+json.dumps(units,ensure_ascii=False,indent=1)+";\n"
open(sys.argv[2],'w',encoding='utf-8').write(js)
print(sum(len(u['lessons']) for u in units),'lessons')
