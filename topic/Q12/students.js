const students=[
    {
        id:1,
        name:"yousef",
        age:22,
         grades:[99,89,80]
    },
    {
        id:2,
        name:"mona",
        age:22,
         grades:[90,90,80]
    },
    {
        id:3,
        name:"mohammed",
        age:22,
        grades:[70,70,80]
    },
]
 
function getstudent(id){
    return students.find(stuednt =>stuednt.id ===id);
}
export {students,getstudent};
export default students;