let main = document.getElementById('main')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let black = document.getElementById('black')
let yellow = document.getElementById('yellow')
let a2 = document.getElementById('a2')
let two = document.getElementById('two')
let tree = document.getElementById('tree')
let last = document.getElementById('last')
let order = document.getElementById('order')
let rrr = document.getElementById('rrr')



rrr.onclick = function(){
   scroll(
      {
         top:2205,
         behavior:"smooth",
      }
   )
   };
   order.onclick = function(){
      scroll(
         {
            top:2950,
            behavior:"smooth",
         }
      )
      };




black.onclick = function(){
   main.src=black.src 
}
red.onclick = function(){
    main.src=red.src 
 }
blue.onclick = function(){
    main.src=blue.src 
 }
 yellow.onclick = function(){
    main.src=yellow.src 
 }
 window.onload = function(){

      a2.style.height=('600px')
      a2.style.opacity=(1);

  
 }
window.onscroll = function(){
 if(scroll=1400){
   two.style.gap=('0')
   two.style.opacity=('1')

 }
 else{
   two.style.gap=('400px')

 }
 if(scrollY>900){
   tree.style.gap=('0')
   tree.style.opacity=('1')

 }
 else{
   tree.style.gap=('400')
   tree.style.opacity=('0.7')
 }






 if(scrollY>1800){
   last.style.gap=('0')
   last.style.opacity=('1')

 }
 else{
   last.style.gap=('400')
   last.style.opacity=('0.7')
 }


}

