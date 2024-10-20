const buttonOne = document.querySelector('.tab_btn1');
const buttonTwo = document.querySelector('.tab_btn2');
const accountForm = document.querySelector('.account_form');
const header = document.querySelector('.header-1');
const paragraph = document.querySelector('.content-1');
const nameLabel = document.querySelector('.name');
const nameInput = document.querySelector('.forInputName');
const userLabel = document.querySelector('.userLabel');
const userInput = document.querySelector('.forInputUser');
const saveButton = document.querySelector('.submit_btn');

// function to change to password form

 buttonTwo.addEventListener('click', () => {
    header.innerHTML = 'password';
    paragraph.innerHTML = 
    "Change your password here. After saving, you'll be logged out.";
    nameLabel.innerHTML = 'Current Password';
    nameInput.setAttribute("placeholder"," ");
    nameInput.setAttribute("type","password");
    userLabel.innerHTML = 'New Password';
    userInput.setAttribute("placeholder"," ");
    userInput.setAttribute("type","password");
    saveButton.innerHTML = 'Save password';
    buttonTwo.style.backgroundColor = 'whitesmoke';
    buttonTwo.style.color = 'gray';
    buttonOne.style.backgroundColor = 'gray';
    buttonOne.style.color = 'white';

    console.log('Password form is displayed');
});

// function to change to account form

buttonOne.addEventListener('click', () => {
    header.innerHTML = 'Account';
    paragraph.innerHTML = 
    "Make changes to your account here. Click save when you're done.";
    nameLabel.innerHTML = 'Name';
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("placeholder","Pedro Duarte");
    userLabel.innerHTML = 'Username';
    userInput.setAttribute("type","text");
    userInput.setAttribute("placeholder","@peduarte");
    saveButton.innerHTML = 'Save Changes';
    buttonOne.style.backgroundColor = 'whitesmoke';
    buttonOne.style.color = 'gray';
    buttonTwo.style.backgroundColor = 'gray';
    buttonTwo.style.color = 'white';
    console.log('Account form is displayed');
});
