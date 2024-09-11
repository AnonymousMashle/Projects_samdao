function addNumbers() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const sum = num1 + num2;
    
    document.getElementById('sumResult').textContent = `Your age is :  ${sum}`;
}


function manipulateArrayName() {

    const name = document.getElementById('nameInput').value;
    
    const upperCaseName = name.toUpperCase();
    
    document.getElementById('upperCaseResult').textContent = `Hello ${upperCaseName}, How are yow`;

}