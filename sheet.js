(function(){
var d=document;
var rv=[].slice.call(d.querySelectorAll('.rv'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});rv.forEach(function(r){io.observe(r)})}else{rv.forEach(function(r){r.classList.add('in')})}
var bar=d.querySelector('.progress i'),ob=d.getElementById('obar'),ord=d.getElementById('order'),hero=d.querySelector('.hero2');
function onS(){var h=d.documentElement,m=h.scrollHeight-h.clientHeight;if(bar)bar.style.width=(m>0?h.scrollTop/m*100:0)+'%';
if(ob&&hero&&ord){var y=window.scrollY,hb=hero.offsetTop+hero.offsetHeight,o=ord.getBoundingClientRect();ob.classList.toggle('show',y>hb&&!(o.top<window.innerHeight&&o.bottom>0))}}
window.addEventListener('scroll',onS,{passive:true});onS();
var links=[].slice.call(d.querySelectorAll('.chnav a'));
if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-35% 0px -55% 0px'});
links.forEach(function(a){var t=d.querySelector(a.getAttribute('href'));if(t)so.observe(t)})}
var list=d.getElementById('faqlist'),q=d.getElementById('q'),cnt=d.getElementById('count'),none=d.getElementById('none'),cat='all';
if(list){var qs=[].slice.call(list.querySelectorAll('.qa'));
function f(){var t=(q.value||'').toLowerCase().trim(),n=0;qs.forEach(function(x){var ok=(cat==='all'||x.getAttribute('data-cat')===cat)&&(!t||x.textContent.toLowerCase().indexOf(t)>-1);x.hidden=!ok;if(ok)n++});cnt.textContent=n+(n===1?' question':' questions');none.hidden=n>0}
q.addEventListener('input',f);
[].slice.call(d.querySelectorAll('.pill')).forEach(function(p){p.addEventListener('click',function(){cat=p.getAttribute('data-f');[].slice.call(d.querySelectorAll('.pill')).forEach(function(z){z.classList.toggle('on',z===p)});f()})});f();
if(location.hash){var el=d.querySelector(location.hash);if(el&&el.tagName==='DETAILS')el.open=true}}
})();
