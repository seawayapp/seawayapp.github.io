import sys, re, json, importlib.util
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, sys.argv[1]); import seg
raw=open(sys.argv[2],encoding='utf-8').read()
body=raw.split('<onlyinclude>')[1].split('</onlyinclude>')[0]
body=re.sub(r'\{\{-\|(其.)\}\}','',body)
body=re.sub(r'-\{(.*?)\}-',r'\1',body)
body=re.sub(r'<[^>]+>','',body)
chars=[c for c in body if '㐀'<=c<='鿿' or '\U00020000'<=c<='\U0002ffff']
print(len(chars), ''.join(chars[:20]))
start=chars.index('諸')
seq=chars[start:]
pages=sys.argv[3]
res=[]
for p in range(4,34):
    boxes=seg.segment(f'{pages}/p{p:02d}.jpeg')
    i0=(p-4)*64
    for k,b in enumerate(boxes):
        res.append(dict(page=p,idx=k,ch=seq[i0+k] if i0+k<len(seq) else '?',box=[int(v) for v in b]))
    print(p, ''.join(seq[i0:i0+8]), len(boxes))
json.dump(res,open(sys.argv[4],'w',encoding='utf-8'),ensure_ascii=False)
