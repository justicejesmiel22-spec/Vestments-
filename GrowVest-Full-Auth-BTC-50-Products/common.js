function qs(s){
    return document.querySelector(s)}
function moneyBTC(n){
    return Number(n).toFixed(8)+" BTC"}
    function toast(m){let x=qs("#toast");
        if(!x){x=document.createElement("div");
            x.id="toast";x.style="position:fixed;bottom:20px;right:20px;background:#111827;color:white;padding:14px 18px;border-radius:10px;z-index:100";
            document.body.appendChild(x)}x.textContent=m;setTimeout(()=>x.remove(),2800)}
//function nav(){let t=qs(".toggle"),l=qs(".links");
  //  if(t)t.onclick=()=>l.classList.toggle("open")}
function getState()
{return JSON.parse(localStorage.getItem("gv_state")
||'{"btcBalance":0,"investedBTC":0,"positions":[],"transactions":[]}')}
function saveState(s){
    localStorage.setItem("gv_state",JSON.stringify(s))}
function addTx(type,product,btc,status="Pending"){
    let s=getState();s.transactions.unshift({date:new Date().toISOString(),type,product,btc,status});saveState(s)}
document.addEventListener("DOMContentLoaded",nav);