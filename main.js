const cards=Array.from(document.querySelectorAll(".card"));
const deletebtns=Array.from(document.querySelectorAll(".del"));
const plusbtns=Array.from(document.querySelectorAll(".plus"));
const minusbtns=Array.from(document.querySelectorAll(".moins"));
const favs= Array.from(document.querySelectorAll(".like"))
for(let fav of favs){
    fav.addEventListener("click",function(){
        if(fav.style.color=="black"){
            fav.style.color="red"
        }
        else{
            fav.style.color="black"
        }
    })
}



for (let i in deletebtns){
    deletebtns[i].  addEventListener("click",function(){
        cards[i].remove()
        total()
    })
}
for(let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++
        total()
    })
}
for(let minusbtn of minusbtns){
    minusbtn.addEventListener("click",function(){
        if( minusbtn.previousElementSibling.innerHTML>0){
          minusbtn.previousElementSibling.innerHTML--;
          total()
        }
        
    })
}
function total(){
    const qte=Array.from(document.querySelectorAll("qute"))
    const price= Array.from(document.querySelectorAll(".unitt-price"))
    let s=0 
    for     (var i=0; i<price.length ; i++){
           s=s +qte[i].innerhtml * price[i].innerHTML
    }
    document.getElementById("tot").innerHTML = s
    
}


