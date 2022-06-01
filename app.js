function loop(){
  let scr = window.pageYOffset
  if(scr>50){
    nav.style.top = 0
  }
  if(scr<50){
    nav.style.top = '-50px'
  }
  
  requestAnimationFrame(loop)
}
loop()
n.addEventListener('click',()=>{
  se()
})
let an = document.getElementsByClassName('a')
for(var i = 0;i<an.length;i++)  {
  an[i].addEventListener('click',()=>{
    se()
  })
  }
  function se(){
    if (up.style.display == 'none'){
  up.style.display = 'block'
  }
  else{
    up.style.display = 'none'
  }
  }
