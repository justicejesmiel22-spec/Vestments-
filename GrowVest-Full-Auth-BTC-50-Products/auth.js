
const AUTH_KEY="gv_auth";
const USERS_KEY="gv_users";
const LOCK_KEY="gv_login_attempts";

function getAuth(){return JSON.parse(localStorage.getItem(AUTH_KEY)||"null")}
function setAuth(user){localStorage.setItem(AUTH_KEY,JSON.stringify(user))}
function clearAuth(){localStorage.removeItem(AUTH_KEY)}
function users(){return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}
function saveUsers(list){localStorage.setItem(USERS_KEY,JSON.stringify(list))}
function getAttempts(){return JSON.parse(localStorage.getItem(LOCK_KEY)||"{}")}
function saveAttempts(x){localStorage.setItem(LOCK_KEY,JSON.stringify(x))}

async function hashPassword(password){
  const bytes=new TextEncoder().encode(password);
  const hash=await crypto.subtle.digest("SHA-256",bytes);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
function validEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
function passwordScore(p){
  let s=0;
  if(p.length>=8)s++;
  if(/[A-Z]/.test(p))s++;
  if(/[a-z]/.test(p))s++;
  if(/[0-9]/.test(p))s++;
  if(/[^A-Za-z0-9]/.test(p))s++;
  return s;
}
function requireAuth(){
  if(!getAuth()){
    location.href="login.html?next="+encodeURIComponent(location.pathname+location.search);
  }
}
function currentUser(){return getAuth()}
function updateAuthUI(){
  const a=getAuth();
  document.querySelectorAll("[data-auth-name]").forEach(x=>x.textContent=a?.name||"Guest");
  document.querySelectorAll("[data-auth-email]").forEach(x=>x.textContent=a?.email||"");
}
function toast(m){
  let x=document.getElementById("toast");
  if(!x){x=document.createElement("div");x.id="toast";x.style="position:fixed;bottom:20px;right:20px;background:#111827;color:white;padding:14px 18px;border-radius:10px;z-index:1000";document.body.appendChild(x)}
  x.textContent=m; clearTimeout(window.__toastTimer); window.__toastTimer=setTimeout(()=>x.remove(),3000);
}
