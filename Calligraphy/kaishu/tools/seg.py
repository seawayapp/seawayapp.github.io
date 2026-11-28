import sys, json, numpy as np
from PIL import Image, ImageDraw
from scipy.ndimage import uniform_filter1d

def runs(mask):
    """start,end of True runs"""
    m=np.concatenate([[0],mask.astype(int),[0]]); d=np.diff(m)
    return list(zip(np.where(d==1)[0], np.where(d==-1)[0]))

def panels(g):
    dark=g<110
    colf=dark.mean(0); rowf=dark.mean(1)
    xs=[r for r in runs(colf>0.35) if r[1]-r[0]>g.shape[1]*0.15]
    ys=[r for r in runs(rowf>0.2) if r[1]-r[0]>g.shape[0]*0.3]
    y0,y1=ys[0]
    return [(x0,y0,x1,y1) for x0,x1 in xs]

def dp_cuts(proj, n, lam):
    """choose n-1 interior cuts in proj (len L) minimising proj at cuts + lam*(len-h)^2"""
    L=len(proj); h=L/n
    INF=1e18
    # positions 0..L ; cost[k][p]
    best=np.full((n+1,L+1),INF); arg=np.zeros((n+1,L+1),int)
    best[0][0]=0
    lo,hi=int(h*0.55),int(h*1.5)
    for k in range(1,n+1):
        for p in range(L+1):
            a=max(0,p-hi); b=p-lo
            if b<a: continue
            prev=best[k-1][a:b+1]
            lens=p-np.arange(a,b+1)
            c=prev+lam*((lens-h)/h)**2
            j=int(np.argmin(c)); 
            pc = 0 if p in (0,L) else proj[min(p,L-1)]
            best[k][p]=c[j]+pc; arg[k][p]=a+j
    cuts=[L]; p=L
    for k in range(n,0,-1):
        p=arg[k][p]; cuts.append(p)
    return cuts[::-1]

def segment(path, ncol=4, nrow=8, debug=None, step=4):
    im=Image.open(path).convert('L'); g=np.asarray(im).astype(np.float32)
    out=[]
    dbg=Image.open(path).convert('RGB') if debug else None
    dr=ImageDraw.Draw(dbg) if debug else None
    # panels right to left
    for (x0,y0,x1,y1) in sorted(panels(g), key=lambda r:-r[0]):
        P=g[y0:y1,x0:x1]
        bright=(P>140).astype(np.float32)
        # columns
        cp=uniform_filter1d(bright.mean(0),15)
        cs=dp_cuts(cp[::step], ncol, 0.5); cs=[c*step for c in cs]; cs[-1]=P.shape[1]
        cols=[(cs[i],cs[i+1]) for i in range(ncol)][::-1]  # right to left
        for (cx0,cx1) in cols:
            C=bright[:,cx0:cx1]
            rp=uniform_filter1d(C.mean(1),9)
            rs=dp_cuts(rp[::step], nrow, 0.15); rs=[r*step for r in rs]; rs[-1]=C.shape[0]
            for i in range(nrow):
                box=(x0+cx0, y0+rs[i], x0+cx1, y0+rs[i+1])
                out.append(box)
                if dr: dr.rectangle(box, outline=(255,0,0), width=6)
    if debug:
        dbg.thumbnail((1400,1400)); dbg.save(debug, quality=80)
    return out

if __name__=='__main__':
    print(segment(sys.argv[1], debug=sys.argv[2])[:3])
