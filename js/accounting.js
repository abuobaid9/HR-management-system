'use strict';


let form= document.getElementById("formId");
let sectionEl = document.getElementById("separatId");
let tr_id1 = document.getElementById("trId1");

let allEmployee =[];



function Table(department,num_emp,total,avg_sar){
    this.department = department;
    this.num_emp=numberEmployees();
    this.total=totalOfsalary();
    this.avg_sar=avgSalary();
    allEmployee.push(this);
}

method

Table.prototype.renderTable = function () {
    let tr0 = document.createElement("tr");
    trId1.appendChild(tr);

    let departTd =document.createElement("td");
    departTd.textContent= this.department;
    trId1.appendChild(departTd);

    let numberTd = document.createElement("td");
    numberTd.textContent = this.num_emp;
    trId1.appendChild(numberTd);
    
    let totalSalary =document.createElement("td")
    totalSalary.textContent=this.total;
    trId1.appendChild(totalSalary);
    

    let avgOfsalary = document.createElement("td");
    avgOfsalary.textContent = this.avg_sar;
    trId1.appendChild(avgOfsalary); 

saveData(allEmployee);

}

let employee1 =new Table("Administration",11,22,45);
let employee2 =new Table("Finance",81,252,65);
let employee3 =new Table("Marketing",19,82,45);
let employee4 =new Table("Development",151,22,455);

function renderA() {
    for (let i = 0; i < allEmployee.length; i++) {
        
        allEmployee[i].renderTable();
    }
}
renderA();



// finction
// function myFunction(){

//     let tableEl = document.getElementById("tableID");
//     let row =tableEl.insertRow();
//     let cell_1=row.insertCell();
//     let cell_2=row.insertCell();
//     let cell_3=row.insertCell();
//     let cell_4=row.insertCell();
//     cell_1.innerHTML = "S321";
//     cell_2.innerHTML = numberEmployees();
//     cell_3.innerHTML = "S321";
//     cell_4.innerHTML = "S321";
// }
console.log(myFunction);
function avgSalary(){
let sar=0;
let avg=0;
for (let i = 0; i < allEmployee.length; i++) {
    sar+=sar+this.salary;
}
avg =sar /allEmployee.length;
return avg;
}

function totalOfsalary(){
    let sar=0;
    for (let i = 0; i < allEmployee.length; i++) {

        sar+=sar+this.salary;
    }
    return sar;
}

function numberEmployees(){
    if(department === "Administration"){
        namAdmin = 0;
    for(let i=0;i< allEmployee.length;i++){
        namAdmin+=namAdmin+1;
    }
    return namAdmin;
}
    if(department === "Finance"){
        namFin = 0;
    for(let i=0;i< allEmployee.length;i++){
        namFin+=namFin+1;
    }
    return namFin;}
    
    if(department === "Marketing"){
        namMar = 0;
    for(let i=0;i< allEmployee.length;i++){
        namMar+=namMar+1;
    }
    return namMar;}
    
    if(department === "Development"){
        namDevel = 0;
    for(let i=0;i< allEmployee.length;i++){
        namDevel+=namDevel+1;
    }
    return namDevel;}
}


//local storage

function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("Employee", stringfiyData);
}

function getData() {
    let retrievedData = localStorage.getItem("Table");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Table(arrayData[i].department, arrayData[i].num_emp, arrayData[i].total, arrayData[i].avg_sar);
         }
       localStorage.clear()
    }
    renderAll();
}
getData();