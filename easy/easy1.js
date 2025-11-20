// // ===============firsteasy==========================================
import { employees } from "../dataset.js"; 


// function getFirstEmployeeFirstName(employees) {
//   return employees[0].firstName;

// }
// console.log(getFirstEmployeeFirstName(employees));
// // ===================secondeeasy====================================

// function getLastEmployeeLastName(employees) {
//   return employees[employees.length -  1].lastName;
// }
// console.log(getLastEmployeeLastName(employees));

// // ==================================3easy==============================
// function getEmployeeDepartmentById(employees, id) {
//   for (let i = 0; i < employees.length - 1; i++){
//     if (employees[i].id === 5){
//       return employees[i].department;
//     }
//   }
// }
// console.log(getEmployeeDepartmentById(employees, 5));

// // ==============================4easy=================================
// function countEmployees(employees){
//   let  l = employees.length;
//   return l;
// }
// console.log(countEmployees(employees));

// // ===================================================5easy==================
// function hasInactiveEmployees(employees){
//   for (let i = 0; i < employees.length - 1; i++){
//     if (!employees.isActive){
//       return true;
//     }
//   }
// }
// console.log(hasInactiveEmployees(employees));
// // =============================================6easy===========================
// function calculateAverageAge(employees){
//   let sum = 0;
//   for (let i = 0; i < employees.length - 1; i++){
//     sum += employees[i].age;
//   }
//   sum = sum/(employees.length - 1);
//   return sum;
// }
// console.log(calculateAverageAge(employees));
// // ====================================7easy================================
// function getHighestPaidEmployee(employees){
//   let sal = employees[0];
//   for (let i = 1; i < employees.length ; i++){
//     if (employees[i].salary > sal.salary){
//       sal = employees[i];
//     }
//   }
//   return sal
// }
// console.log(getHighestPaidEmployee(employees));
// =======================================8easy===========================
function countEmployeesInDepartment(employees, department) {
  let num = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      num++;
    }
  }

  return num;
}

console.log(countEmployeesInDepartment(employees, "Développement"));



// ================================================9easy========================
// function getUniqueDepartments(employees) {
//   const departments = [];

//   for (let i = 0; i < employees.length; i++) {
//     const dept = employees[i].department;

//     if (!departments.includes(dept)) {
//       departments.push(dept);
//     }
//   }

//   return departments;
// }
// console.log(getUniqueDepartments(employees));

function getUniqueDepartments(employees) {
  const departments = [];

  for (let i = 0; i < employees.length; i++) {
    const department = employees[i].department;
    let exists = false;

    for (let j = 0; j < departments.length; j++) {
      if (departments[j] === department) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      departments.push(department);
    }
  }

  return departments;
}
console.log(getUniqueDepartments(employees));


// ==============================10easy=====================
function hasEmployeesWithoutProjects(employees){
  for (let i = 0; i < employees.length; i++){
    if (!employees[i].projects || employees[i].projects.length === 0){
      return true;
    }
  }
  return false;
}
console.log(hasEmployeesWithoutProjects(employees));