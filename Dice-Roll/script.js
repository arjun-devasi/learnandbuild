//  "use strict"
 
//   let player1=prompt("Enter player 1 name");
//   let player2=prompt("Enter player 2 name");
 
  ludogame= () =>{
    let RandomNo1=Math.trunc(Math.random()*6)+1;
    let RandomNo2=Math.trunc(Math.random()*6)+1;
    $(".diceImg1").attr("src","./images/dice"+RandomNo1+ ".png");
    $(".diceImg2").attr("src","./images/dice"+RandomNo2+ ".png");
     if(RandomNo1==RandomNo2){
        $(".text").text(" 🤷‍♂️Match Draw 🤷‍♂️");
    }
    else if(RandomNo1>RandomNo2){
        $(".text").text("Player1 is Winner👍👍");  
    }
    else{
        $(".text").text("Player2 is Winner 👍👍");
    }
 }
 $(".again").click(function () {
    location.reload(true);
    // alert('Reloading Page');
});
//  let PlayAgain=function(){
//      RandomNo1=Math.trunc(Math.random()*6)+1;
//      RandomNo2=Math.trunc(Math.random()*6)+1;
//      $(".p-a").text("player 1👲");
//      $(".p-b").text("player 2👩‍💼");
//      $(".text").text("🤷‍♂️🙂 Let's Start Game 🙂");
    
// };
// let editName=function(){
   
//    $(".p-a").text(player1+ "👲"); 
//    $(".p-b").text(player2 +"👩‍💼"); 
// };

// $(".p-a,.p-b").on("click",editName);
// $(".again").on("click",PlayAgain);

