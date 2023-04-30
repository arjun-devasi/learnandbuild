"use strict";
let mainbody=document.querySelector("body");
let showbtn=document.querySelector(".btn-show");
let mainModal=document.querySelector(".modal");
let closebtn=document.querySelector(".btn-modal");
let dispalybtn=document.querySelector(".blurdisplay");
 let showPage=function(){
     mainModal.classList.remove("hidden");
     dispalybtn.classList.remove("hidden");
 };
 let closePage=function(){
    mainModal.classList.add("hidden");
    dispalybtn.classList.add("hidden");
 };
showbtn.addEventListener("keypress",(event)=>{
   mainModal.classList.add("hidden");
   dispalybtn.classList.add("hidden");
 });
showbtn.addEventListener("click",showPage);
closebtn.addEventListener("click",closePage);
dispalybtn.addEventListener("click",closePage);