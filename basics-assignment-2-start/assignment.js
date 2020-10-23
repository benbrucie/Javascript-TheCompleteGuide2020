const task3Element = document.getElementById('task-3');

function noParameter() {
    alert('Hello!');
}

function withParameter(name){
    alert('Name is ' + name)
}

noParameter();
withParameter('Bensille');

task3Element.addEventListener('click', noParameter);

function threeParameter(para1, para2, para3){
    return para1 + ' ' + para2 + ' ' + para3;
}

alert (threeParameter('Bensille', 'Bruce', 'Aburinya'));