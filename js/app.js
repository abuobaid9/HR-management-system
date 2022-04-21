'use strict';


function Employee(employee_id,full_Name,department,level,imag,salary){
    this.employee_id=employee_id;
    this.full_Name=full_Name;
    this.department=department;
    this.level=level;
    this.image_URL=imag;
    this.salary=salary;
}

let ghazi= new Employee("1000" ,"Ghazi Samer","Administration","Senior");
let lana= new Employee("1001" ,"Lana Ali","Finance","Senior");
let tamara = new Employee("1002","Tamara Ayoub","Marketing","Senior");
let saif = new Employee("1003","Safi Walid","Administration","Mid-Senior");
let omar = new Employee("1004","Omar Zaid","Development","Senior");
 let rana= new Employee("1005","Rana Saleh","Development","Junior");
 let hadi =new Employee("1006","Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.salary=function(){
if(this.level == "junior"){
    let junior_Salary=Math.floor(Math.random() * (1000 - 500)) + 500;
    let grossSalary = junior_Salary;
    let incomeTax = grossSalary- (junior_Salary * (7.5/100));
    return incomeTax;
}

else if(this.level =="mid-senior") {
    let mid_Salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    let grossSalary = mid_Salary;
    let incomeTax2 = grossSalary- (mid_Salary * (7.5/100));
    return incomeTax2;
}

else if(mid-Senior=="senior"){
    let senior_Salary=Math.floor(Math.random() * (2000 - 1500)) + 1500;
    let grossSalary = senior_Salary;
    let incomeTax3 = grossSalary- (senior_Salary * (7.5/100));
    return incomeTax3;
}
else{}

}
Employee.prototype.render =function(){
    console.log(this.full_Name);
    console.log(this.salary);
    console.log(this.department);
document.write(`<h1> My name is ${this.full_Name} ,and my salary is ${this.salary}</h1>`);
}
ghazi.render();