import { employees } from "../dataset.js"; 
const emp = document.getElementById("employees-tbody");
// button = document.getElementById("btn");


function afficherEmployes(){
    console.log(emp)
    employees.forEach((e) =>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th>${e.firstName}</th>
            <th>${e.lastName}</th>
            <th>${e.department}</th>
            <th>${e.position}</th>
            <th>${e.salary}</th>
            <th>${e.skills}</th>
            <th>${e.joinDate}</th>
            <th>${e.email}</th>
            <th>${e.projects}</th>
            <th>${e.isActive}</th>
            <th>${e.languages}</th>
        `
        emp.appendChild(tr);
    })
}
afficherEmployes()

// console.log(afficherEmployes(employees));
// emp.appendChild(button);