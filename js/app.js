"use strict";
let form= document.getElementById("formId");
let sectionEl = document.getElementById("separatId");
let allEmployee =[];






//constructor
function Employee(employee_id,full_Name,department,level,imag,salary){
    this.employee_id=getrandom();
    this.full_Name=full_Name;
    this.department=department;
    this.level=level;
    this.image_URL=imag;
    this.salary=salary;

    allEmployee.push(this);

}


//method
Employee.prototype.render =function(){
    let images =document.createElement("img");
    images.src=this.image_URL;
    sectionEl.appendChild(images);
    
          let employeeID= document.createElement("h4");
         employeeID.textContent=` ID: ${this.employee_id}`;
        sectionEl.appendChild(employeeID);


let name =document.createElement("h3");
name.textContent=` Name : ${this.full_Name}`;
sectionEl.appendChild(name);
       
   
        let depart =document.createElement("h4");
        depart.textContent=`Department : ${this.department}`;
        sectionEl.appendChild(depart);

 let leveles =document.createElement("h4");
 leveles.textContent=`Level : ${this.level}`;
 sectionEl.appendChild(leveles);
         

        

let salarySec =document.createElement("p");
salarySec.textContent=`Salary :${this.salary} JD`;
sectionEl.appendChild(salarySec);   


}

let ghazi= new Employee(1,"Ghazi Samer","Administration","senior","./img/Ghazi.jpg",1800);
let lana= new Employee(1001,"Lana Ali","Finance","senior","./img/Lana.jpg",2000);
let tamara = new Employee(1002,"Tamara Ayoub","Marketing","senior","./img/Tamara.jpg",1600);
let saif = new Employee(1003,"Safi Walid","Administration","mid-senior","./img/Safi.jpg",1200);
let omar = new Employee(1004,"Omar Zaid","Development","senior","./img/Omar.jpg",1700);
let rana= new Employee(1005,"Rana Saleh","Development","junior","./img/Rana.jpg",650);
let hadi =new Employee(1006,"Hadi Ahmad","Finance","mid-senior","./img/Hadi.jpg",1350);

console.log(allEmployee);

//  ghazi.render();

function renderAll() {
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].render();
       
    }
}
renderAll();

form.addEventListener("submit",handleSubmit);

// finction
function getrandom (){
    let val = Math.floor(1000 + Math.random() * 9000);
return val;
}   

function handleSubmit(event){
    event.preventDefault();
 
    // let pesronID=event.target.pesronID.value;
    let imag = event.target.imag.value;
    let fname=event.target.fname.value;
    let department=event.target.department.value;
    let level = event.target.level.value;
    // let personSalary = event.target.personSalary.value;

    let newinfo=new Employee (imag,fname,department,level);
    newinfo.render();
    saveData(allEmployee);
    console.log(newinfo);
}
s
//local storage

function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("Employee", stringfiyData);
}

function getData() {
    let retrievedData = localStorage.getItem("Employee");

    let arrayData = JSON.parse(retrievedData);

    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
          
            new Employee(arrayData[i].name, arrayData[i].depart, arrayData[i].images, arrayData[i].leveles, arrayData[i].salarySec);
           
        }
         localStorage.clear();

    }
    renderAll();
}
getData();


