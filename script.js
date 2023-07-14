const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['pink','blue','black','green','yellow','orange'];
body.style.backgroundColor='brown';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});