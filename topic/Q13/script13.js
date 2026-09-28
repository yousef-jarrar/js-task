localStorage.setItem("name","yousef");
 
const name=localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");
//console.log(localStorage.getItem("name"));

localStorage.setItem("name","yousef");
localStorage.setItem("age","23");
localStorage.setItem("city","amman");

localStorage.clear();

localStorage.setItem("name","yousef");
localStorage.setItem("age","23");
localStorage.setItem("city","amman");

const firstke=localStorage.key(0);
 console.log(firstke);

 const count=localStorage.length;
 console.log(count);

 const storegcontent=document.getElementById("storeg-content");

 function displaystoreg(){
    storegcontent.innerHTML= "";

    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const value =localStorage.getItem(key);
         const item=document.createElement("p")

         item.textContent=`${key} : ${value}`
         storegcontent.appendChild(item);
    }
 }
 displaystoreg();