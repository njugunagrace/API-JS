document.getElementById('form').addEventListener('submit', async function(event){
event.preventDefault();       //prevents data from disappearingn when you click submit


let firstName=document.getElementById('firstName').value;        //value-to get the value of the entered data
let lastName=document.getElementById('lastName').value;
let age=document.getElementById('age').value;

let data={
    firstName:firstName,
    lastName:lastName,
    age:age

};
console.log(data);

let result= await fetch('https://dummyjson.com/users/add', {               //fetch takes two args options and 
    method: 'POST',
    headers:{
   'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
})    
.then(response=> response.json())                       //assignment=>what first response does and what catch does
.then(response=>response)
.catch(error=>error.message)                             //was returning a promise in the console hence added async await





let success=document.getElementById('success');
result && result.id? success.innerHTML='user created successfully': success.innerHTML='User not created'
console.log({result});
});
