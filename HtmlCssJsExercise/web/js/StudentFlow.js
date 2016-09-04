/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*array of objects that contains hardcoded students*/
var students = [
    {Name: "Jamie", Email: "Jamie@mail.com", Phone: 12345678, Group: "CodeHoes"},
    {Name: "Niki", Email: "Niki@mail.com", Phone: 12345678, Group: "CodeHoes"},
    {Name: "Menja", Email: "Menja@mail.com", Phone: 12345678, Group: "CodeHoes"},
    {Name: "Tanja", Email: "Tanja@mail.com", Phone: 12345678, Group: "CodeHoes"}
];


/*Puts the hardcodeddata into the table*/
var studentTable = document.getElementById("tableBody");
var showTable = function () {
    for (var i = 0; i < students.length; i++) {
        var row = studentTable.insertRow(i);
        row.insertCell(0).innerText = students[i].Name;
        row.insertCell(1).innerText = students[i].Email;
        row.insertCell(2).innerText = students[i].Phone;
        row.insertCell(3).innerText = students[i].Group;
    }
};

/*Show the data in table*/
showTable();

/*Insert data from front-end form*/
var addStudent = document.getElementById("studentForm");

addStudent.onsubmit = function (event) {
    /*event.preventDefault sørger for at dataen ikke forsvinder ud af tabellen før siden reloades*/
    event.preventDefault();
    
    var row = studentTable.insertRow();
    row.insertCell(0).innerText = addStudent.name.value;
    row.insertCell(1).innerText = addStudent.email.value;
    row.insertCell(2).innerText = addStudent.phone.value;
    row.insertCell(3).innerText = addStudent.group.value;
};




////Add student from form
///*VIRKER IKKE og ved ikke hvordan det her lort snakker sammen!!!*/
//var addStudent = [];
//
//function addTo() {
//    var row = studentTable.insertRow();
//
//    addStudent.push(document.getElementById("studentForm").value);
//    row.insertCell(0).innerText = addStudent.name.value;
//    row.insertCell(1).innerText = addStudent.email.value;
//    row.insertCell(2).innerText = addStudent.phone.value;
//    row.insertCell(3).innerText = addStudent.group.value;
//    console.log(addStudent);
//};

///*Remove data from list by Id*/
///*VIRKER IKKE og ved ikke hvordan det her lort snakker sammen!!!*/
//var removeStudent = document.getElementById("studentForm");
//
//removeStudent.onclick = function(){
//    var row = studentTable.removeAttribute()();
//    row.remove(0).innerText = removeStudent.name.value;
//    row.remove(1).innerText = removeStudent.email.value;
//    row.remove(2).innerText = removeStudent.phone.value;
//    row.remove(3).innerText = removeStudent.group.value;
//};


