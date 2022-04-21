"use strict";

let allEmployee =[];
function Employee(employee_id,full_Name,department,level,imag){
    this.employee_id=employee_id;
    this.full_Name=full_Name;
    this.department=department;
    this.level=level;
    this.image_URL=imag;
    this.salary=0;
    allEmployee.push(this);
}

let ghazi= new Employee(1000 ,"Ghazi Samer","Administration","senior");
let lana= new Employee(1001,"Lana Ali","Finance","senior");
let tamara = new Employee(1002,"Tamara Ayoub","Marketing","senior");
let saif = new Employee(1003,"Safi Walid","Administration","mid-senior");
let omar = new Employee(1004,"Omar Zaid","Development","senior");
 let rana= new Employee(1005,"Rana Saleh","Development","junior");
 let hadi =new Employee(1006,"Hadi Ahmad","Finance","mid-senior");


Employee.prototype.newSalary=function(){
if(this.level==="junior"){
    this.salary=getRndInteger(500, 1000);
    this.salary=this.salary * (7.5/100); 
}
 if(this.level==="mid-senior") {
    this.salary=getRndInteger(1000, 1500);
    this.salary=this.salary * (7.5/100);
}
if(this.level==="senior"){
    this.salary=getRndInteger(1500, 2000);
    this.salary=this.salary * (7.5/100);
  }
}
Employee.prototype.render =function(){
document.write(`<h1> My name is ${this.full_Name} ,and my salary is ${this.salary}</h1>`);
}
for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].newSalary();
    allEmployee[i].render();
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }