import { LISTA  } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";
$(function () {
  /**HA BETÖLTŐDIK A html, AKKOR FUSSON LE A KÓD */
  const szuloElem = $(".tartalom");
  new ListaMegjelenit(LISTA,szuloElem)
});
















/* 
window.addEventListener("load",function(){
    const szuloElem=document.getElementsByClassName("tartalom")[0]
    let txt="<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        const element = LISTA[index];
        txt+=`<li>${element}</li>`
        
    }
    txt+="</ul>"
    szuloElem.innerHTML(txt)
})*/