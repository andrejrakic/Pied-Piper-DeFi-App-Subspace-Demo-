(this["webpackJsonpsubspace-demo"]=this["webpackJsonpsubspace-demo"]||[]).push([[0],{382:function(e){e.exports=JSON.parse('[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":175875},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":82616},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"out"},{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":116814},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":12757},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function","gas":12965},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":50463},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function","gas":50671},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":47503},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function","gas":47712},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":50175},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function","gas":50384},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":51007},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":51098},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":54928},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":55019},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":49342},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":49532},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":53233},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":53423},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function","gas":5542},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function","gas":6872},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function","gas":5637},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function","gas":6897},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1413},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1443},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function","gas":1645},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":75034},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":110907},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":38769},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function","gas":1925},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1623},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1653},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1683},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1713}]')},402:function(e,t,n){e.exports=n(812)},407:function(e,t,n){},559:function(e,t){},561:function(e,t){},611:function(e,t){},695:function(e,t){},811:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAABlBMVEX///9GwjD+wKdsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABMElEQVRYw+2XvQ2EMAyFHVGkZISMwmb8bMYoGYEyBYrv2TnBcVx9doEVkOBrQuz3bIieeOK/wRJrxxw4U5SH6obsuPqVaOBCFDOeRj+k572XXcu7mCfO3gjuobglayV/RLPd8YpUjz/qwJI0lciuhdz1Y0ladBtV3fItLAlvBIngRKFgnOVUHJEG1WDSUhJOdPZDRCXM2yB5jgxYPRFYstyj1GAoh0rsibYyVbC6y0XBfol8DA3qiVIHM6XZDRHloMmhRqPUAZ914IBsAxZcG74zlbScvcQDodbn4DuTSCiTG3JYT9AuMt6mUkPS+pwu6cHjdw+2JG0+2MV90nXXDsg5j6Zm2dUZ0aNtc1VySIJqN3xPqqZEsw2ViILLZ8LtyXse1X8zDFWXHmxNnnjCPl7csoO31tQFpwAAAABJRU5ErkJggg=="},812:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),s=n(61),o=n.n(s),p=(n(407),n(119)),i=n(830),m=n(831),r=n(832),y=n(833),d=n(828),l=n(829),c=n(229),f=n(381),b=n.n(f),g=n(382),h=new b.a("https://mainnet.infura.io/v3/a0fa183dda3645a28c90e97094224e2f"),_=new c.b(h),k=new h.eth.Contract(g,"0x2a1530C4C41db0B0b2bB646CB5Eb1A67b7158667"),x=_.contract(k);_.init();var A=function(e){return u.a.createElement(m.a,Object.assign({tag:"header",direction:"row",align:"center",alignContent:"center",background:"neutral-1",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},E=function(e){return u.a.createElement(m.a,{direction:"column",align:"center",pad:"medium"},u.a.createElement(d.a,{columns:[{property:"block",header:u.a.createElement(r.a,{weight:"bold"},"Buyer")},{property:"ethBought",header:u.a.createElement(r.a,null,"ETH Bought")},{property:"tokensSold",header:u.a.createElement(r.a,null,"DAI Tokens Sold")},{property:"rate",header:u.a.createElement(r.a,null,"ETH ---\x3e DAI Exchange Rate"),primary:!0}],data:e.last5}))},T=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),s=t[0],o=t[1],d=Object(a.useState)(),f=Object(p.a)(d,2),b=f[0],g=f[1],_=Object(a.useState)(),k=Object(p.a)(_,2),T=k[0],w=k[1],v=Object(a.useState)([]),O=Object(p.a)(v,2),S=O[0],B=O[1];function I(e,t){this.tokensSold=h.utils.fromWei(e),this.ethBought=h.utils.fromWei(t),this.exchangeRate=this.tokensSold/this.ethBought}return Object(a.useEffect)((function(){if(h.eth.getBlockNumber().then((function(e){return w(e)})),"number"==typeof T){var e=x.events.EthPurchase.track({fromBlock:T-50}),t=e.pipe(Object(c.a)(5));o(e),g(t)}}),[o,g,T]),Object(a.useEffect)((function(){if(void 0!==s&&"number"==typeof T)return s.subscribe((function(e){})),s.unsubscribe}),[s,T]),Object(a.useEffect)((function(){if(void 0!==b)return b.subscribe((function(e){var t=e.map((function(e){var t=new I(e.tokens_sold,e.eth_bought);return{block:e.buyer,rate:t.exchangeRate,ethBought:t.ethBought,tokensSold:t.tokensSold}}));B(t)})),b.unsubscribe}),[b]),Object(a.useEffect)((function(){console.log("Just testing CI/CD Action")}),[]),u.a.createElement(i.a,null,u.a.createElement(A,null,"Pied Piper DeFi App - Subspace Demo"),u.a.createElement(m.a,{align:"center"},u.a.createElement(l.a,{color:"plain",size:"xlarge"}),u.a.createElement(r.a,{margin:"medium",textAlign:"center"},"Average Exchange Rate on 5 latest Uniswap DAI -> ETH trades ="," ",(S.reduce((function(e,t){return e+t.rate}),0)/S.length).toFixed(6))),u.a.createElement(E,{last5:S}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(m.a,{align:"center"},u.a.createElement(y.a,{src:n(811)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[402,1,2]]]);
//# sourceMappingURL=main.e0494907.chunk.js.map