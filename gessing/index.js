"use strict";
 let randomNumber=Math.trunc(Math.random()*100+1);
 let chances=8;
 const messages=function(msg,bgcolor){
  document.querySelector(".message").textContent=msg;
  document.querySelector(".number").textContent=randomNumber;
    document.querySelector(".number").style.backgroundColor=bgcolor;
    document.querySelector(".match").setAttribute("disabled", ""); 
 }
 document.querySelector(".match").addEventListener("click",function(){
  const userNumber= Number(document.querySelector(".guess").value);
  
  if(userNumber>=0){
    if(chances>=1){
      if(userNumber>randomNumber){
        document.querySelector(".message").textContent=(" 🫳Guess lower Number");
      }
      else if(userNumber<randomNumber){
        document.querySelector(".message").textContent=(" 🫴Guess higher Number");
        } 
      else{
      messages("👍😀You are Winner👍","green");
      }
    }else{
      messages("😒👎You are Looser👎😒","red");
      } 
    chances--;
    
    if(chances>=0)
      document.querySelector(".score").textContent=chances; 
  }
  else{
    document.querySelector(".message").textContent=("😬 Enter Valid Number before click");
  }
 });
document.querySelector(".again").addEventListener("click",function(){
 chances=8;
 randomNumber=Math.trunc(Math.random()*100+1);
 document.querySelector(".number").textContent="?";
 document.querySelector(".guess").value="";
 document.querySelector(".match").removeAttribute("disabled");
 document.querySelector(".message").textContent=("Let's Start");
 document.querySelector(".score").textContent=chances;
 document.querySelector(".number").style.backgroundColor="";
});