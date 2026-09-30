let employees=[];
const savedEmployees = localStorage.getItem("employees");

if (savedEmployees) {
    employees = JSON.parse(savedEmployees);
}


function Employee(name, email,department){
    this.name=name;
    this.email=email;
    this.department=department;
    this.salary=Math.floor(Math.random()*901)+100;
}
 
 const employeeForm = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const employeeTableBody = document.getElementById("employee-table-body");
renderEmployees();
 calculateTotal();

employeeForm.addEventListener("submit",function(event){
 event.preventDefault();// dont refrash defult into page

 const name=nameInput .value;
 const email=emailInput .value;
 const department =departmentInput .value;

 const employee= new Employee(name,email,department);
            employees.push(employee);
        localStorage.setItem("employees",JSON.stringify(employees));
            renderEmployees();
            employeeForm.reset()
            calculateTotal();
});

// هون عملنا الجزء الاساسي  هسه بدنا نبلش  دووم ناخذ الموظفين ونعرضهم في التيبل

function renderEmployees(){
    employeeTableBody.innerHTML="";

    for( const employee of employees){

        const row= document.createElement("tr");
        const namecell=document.createElement("td");
        const emailcell=document.createElement("td");
        const departmentcell=document.createElement("td");
        const salaryCell = document.createElement("td")
            namecell.textContent=employee.name;
             emailcell.textContent=employee.email;
              departmentcell.textContent=employee.department;
                salaryCell.textContent = employee.salary;

                row.appendChild(namecell);
                 row.appendChild(emailcell);
                  row.appendChild(departmentcell);
                   row.appendChild(salaryCell);
                employeeTableBody.appendChild(row);


    }
}

function calculateTotal(){
 let total=0;
  for(const employee of employees){
    total=total + employee.salary;

  }
  document.getElementById("total-salary").textContent = total;
}
