const section=document.getElementById("cards");
const div=document.getElementById("card");

window.addEventListener("load",function(){


    const user=JSON.parse(localStorage.getItem("users"))
      for (const users of user) {
        
        const divs=document.createElement("div");
       divs.classList.add("card");
         const dh3=document.createElement("h3");
         dh3.textContent=users.username;
          const dp=document.createElement("p");
          dp.textContent=users.email;
            section.appendChild(divs);
            divs.appendChild(dh3);
            divs.appendChild(dp);
        
     }
});