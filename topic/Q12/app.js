import students,{ getstudent } from "./students.js";
import { calculateavg } from "./grades.js";
 const studentscontiner =document.getElementById("students");

 for(const stuednt of students){
    const studentelement=document.createElement("div");

    const avg=calculateavg(stuednt.grades);

    studentelement.textContent=`nsme ${stuednt.name},,,,age:${stuednt.age},,,avareg ${avg} `;
  
    studentscontiner.appendChild(studentelement);
 }