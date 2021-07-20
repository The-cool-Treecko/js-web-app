array_of_students = [];

function array() {

    var student1 = document.getElementById("student1").value;
    var student2 = document.getElementById("student2").value;
    var student3 = document.getElementById("student3").value;
    var student4 = document.getElementById("student4").value;

    array_of_students.push(student1);
    array_of_students.push(student2);
    array_of_students.push(student3);
    array_of_students.push(student4);

    console.log(array_of_students);
    document.getElementById("arraydiv").innerHTML = array_of_students;
    document.getElementById("button-sort").style.display = "inline-block";
    document.getElementById("button-array").style.display = "none";
}

function sorting() {

    array_of_students.sort();
    console.log(array_of_students);
    document.getElementById("arraydiv").innerHTML = array_of_students;
}