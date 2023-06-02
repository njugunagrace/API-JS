const userContainer=document.getElementById('users');


const getUsers=()=>{
 return   fetch('https://dummyjson.com/users')   //?limit=100  to place limit to users
    .then(response=>response.json())                //its a func without curly braces as it is only one line
    .then(response=>response)
    .catch(error=>error)
}
// getUsers();

const displayUsers= async()=>{
    const users=await getUsers();
    // console.log({users});


    users.users.map(x=>{
        let div=document.createElement('div');
        let image=document.createElement('img');
        let name=document.createElement('h2');
        let userName=document.createElement('p');

        image.src=x.image;
        name.innerHTML=`${x.firstName} ${x.lastName}`;
        userName.innerHTML=x.username;

        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(userName);

        div.setAttribute('key',x.id);

        div.setAttribute('class','people');
        userContainer.appendChild(div)
    })
}
displayUsers();