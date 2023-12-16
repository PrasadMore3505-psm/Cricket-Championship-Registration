

let user_info = [];


let regUsers = document.getElementById('reg_user');
let render = () => {
    regUsers.innerHTML=''
    for(let i=0; i<user_info.length;i++){
        
    let div = document.createElement('div')
    let name = document.createElement('div')
    let num = document.createElement('div')
    let age = document.createElement('div')

    div.classList.add('users')
    name.innerText = user_info[i].name;
    num.innerText = user_info[i].phone;
    age.innerText = user_info[i].age

    regUsers.appendChild(div);
    div.appendChild(name);
    div.appendChild(num);
    div.appendChild(age);
}

}

let register = () => {

     let nameInput = document.getElementById('name');
    let phoneInput = document.getElementById('phone');
    let ageInput = document.getElementById('age');

    let users = {
                 'name': nameInput.value,
                'phone' : Number(phoneInput.value),
                'age' : Number(ageInput.value),
            }

    if(ageInput.value >= 20 && ageInput.value <= 24){
        user_info.push(users)
        render()
    } else {
        alert('You are not eligible for Registration...!')

    }

    nameInput.value='';
    phoneInput.value='';
    ageInput.value='';

}