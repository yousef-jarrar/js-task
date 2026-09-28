function calculateavg(grades){
const total=grades.reduce((sum,grade) =>sum+grade,0);
return total / grades.length;
}
export{calculateavg};