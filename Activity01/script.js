var grade1 = parseFloat(document.getElementById("grade1").innerHTML);
var grade2 = parseFloat(document.getElementById("grade2").innerHTML);
var grade3 = parseFloat(document.getElementById("grade3").innerHTML);


var average = (grade1 + grade2 + grade3) / 3;
document.getElementById("average").innerHTML = average.toFixed(2);

var remarks;
if(average <= 74){
    remarks = "Poor";
}
else if(average <= 80){
    remarks = "Fair"
}
else if(average <= 89){
    remarks = "Good!"
}
else{
    remarks = "Exellent!"
}

document.getElementById("remarks").innerHTML = remarks;
alert("Your average is " + average.toFixed(2) + ". Remarks: " + remarks);