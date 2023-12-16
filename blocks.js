var blocks = {}
blocks.alert = {'com':'alert *p1*','par':1,'ui':'Alert *p1*','pl':['text']}
blocks.setvar = {'com':'set *p1* *p2*', 'par':2,'ui':'*p1* = *p2*','pl':['variable','value']}
blocks.print = {'com':'debug *p1*','par':1,'ui':'Say *p1*','pl':['text']}
blocks.getJSONBin = {'com':'getJSONBin *p1* *p2*','par':2,'ui':'Get *p1* as *p2*','bgColor':'red','pl':['bin','key'],'func':'<a href="javascript:setFunc(nm.JSONBin)">JSONBin</a>'}
blocks.setJSONBin = {'com':'setJSONBin *p1* *p2* *p3* *p4*','par':4,'ui':'*p1* = *p2* in *p3* as *p4*','bgColor':'red','pl':['variable','value','bin','key']}