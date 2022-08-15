
document.addEventListener("keypress",function(e){
    if(e.key == "Enter") {
        ekleme()
        document.getElementById("mytext").value = ""
}})


 
function ekleme(){
    
    var mytext = document.getElementById("mytext")        
    if (mytext.value.trim() == "" ){
        mytext.style.outline = "1px solid red"
    }
    else {

    mytext.style.outline = "none"       
    var todo2 =  document.createTextNode(mytext.value)
    var todo4 =  document.createTextNode(" X")
    var todo3 = document.createElement("a");
    var todo1 = document.createElement("td");
    var todo = document.createElement("tr");
    var todo5 = document.createElement("span");
    todo5.addEventListener("click",()=>{
        if(todo5.style.textDecoration ==="none"){
            todo5.style.textDecoration = "line-through"
        }
        else if (todo5.style.textDecoration ==="line-through"){
            todo5.style.textDecoration = "none";
        }
          
    })

    todo.setAttribute("class","elementa3")
    todo.setAttribute("id","elementa3")
    todo1.setAttribute("id","elementa2")
    todo1.setAttribute("class","elementa2")
    todo.setAttribute("class","tg-31ua")
    todo3.setAttribute("id","removebutton")
    todo3.setAttribute("class","removebutton")
    todo5.setAttribute("id","elementa4")
    todo5.setAttribute("class","elementa4")

    todo1.style.fontFamily = 'Fira Sans';
    todo1.style.fontSize = "20px";
    todo5.style.cursor = "pointer";
    todo5.style.textTransform = "capitalize";
    todo5.style.textDecoration = "none";
    todo1.style.color = "rgb(98, 173, 173)";
    todo1.style.backgroundColor= "#ffccd1";
    todo3.style.color = "#d9182b";
    todo1.style.userSelect="none";
    todo1.style.draggable = "true";
   

    todo5.appendChild(todo2)    
    todo3.appendChild(todo4)
    todo.appendChild(todo1)
    todo1.appendChild(todo5)
    todo1.appendChild(todo3)
    var mytable = document.querySelector("#table");
  
   
    const eleRect =todo1.getBoundingClientRect();
    mytable.appendChild(todo);
    console.log(eleRect)
    document.getElementById("mytext").value = ""

    var remover = document.querySelectorAll(".removebutton");
    remover.forEach(rem => {
        rem.addEventListener("click",function handleClick(){
                rem.parentElement.remove()
        })
    })
    
}
}
    



    function silme() {
        var alldel = document.querySelectorAll(".elementa2")
         alldel.forEach(del => {
                   del.remove()
                })    
            }


            console.log("selamlar aq olu naber  götten verdin mi hiç")
class Araba {
    constructor(isim,model) {
      this.isim  = isim;
      this.model =  model;
                }
    arabaücretihesaplama(ötv,saltücret,mtv){
            if  (this.model < 2011) {
                        return ötv + saltücret;
            }
            else{
                    return ötv+saltücret+mtv;
            }

    }
            }
let araba = new Araba("golf",2011)
            console.log(araba.isim)


let ilkaraba =  new Araba("tempra",2022);
let ücret =  ilkaraba.arabaücretihesaplama(200,300,400);

console.log("ücretiniz bu kadar:"+ ücret)
