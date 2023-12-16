var blocks = {}
blocks.alert = {'com':'alert *p1*','par':1,'ui':'Alert *p1*'}
blocks.setvar = {'com':'set *p1* *p2*', 'par':2,'ui':'Set *p1* value *p2*'}
blocks.print = {'com':'debug *p1*','par':1,'ui':'Say *p1*'}
blocks.getJSONBin = {'com':'getJSONBin *p1* *p2*','par':2,'ui':'Get *p1* as *p2*','bgColor':'red','pl':['bin','key'],'func':'<a href="javascript:setFunc(nm.JSONBin)">JSONBin</a>'}