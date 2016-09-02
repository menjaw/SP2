/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var students = [
    {Name: "Tomcat1", Email: "Tomcat1@mail.com", Phone: 12345678},
    {Name: "Tomcat2", Email: "Tomcat2@mail.com", Phone: 12345678},
    {Name: "Tomcat3", Email: "Tomcat3@mail.com", Phone: 12345678}
];

//indsætter da
var tableBody = document.getElementById("studentTable");
var showTable = function () {
    
    for (var i = 0; i < students.length; i++) {
        var row = tableBody.insertRow(i);
        row.insertCell(0).innerText = students[i].Name;
        row.insertCell(1).innerText = students[i].Email;
        row.insertCell(2).innerText = students[i].Phone;
    }
};
showTable();

var studentForm = document.getElementById("studentForm");
console.log(studentForm);
studentForm.onsubmit = function (event) {
    event.preventDefault();
        var row = tableBody.insertRow();
        row.insertCell(0).innerText = studentForm.Name.value;
        row.insertCell(1).innerText = studentForm.Email.value;
        row.insertCell(2).innerText = studentForm.Phone.value; 
    
    
};