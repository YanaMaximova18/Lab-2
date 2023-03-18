const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.modal');
const checkPass = document.querySelector('.checkPass');
const temp = document.getElementById("pass");
const pass = document.getElementById("pass");
const mail = document.getElementById("mail");
const error = document.getElementById("error");
const input = document.querySelector("input");
const form = document.getElementById("form");

openModal.addEventListener('click', () =>{
    modal.showModal()
})
modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.close()
})

checkPass.addEventListener('pointerdown', () =>{
    temp.type = "text"
})
checkPass.addEventListener('pointerup', () =>{
    temp.type = "password"
})

mail.addEventListener("blur", () => {
    if (mail.validity.typeMismatch) {
        error.textContent = "Error! Chek your address."
        mail.setCustomValidity("Error! Chek your address.")
    }
    else if (mail.validity.valueMissing){
        error.textContent = "Error! Fill in the fieled."
        mail.setCustomValidity("Error! Fill in the fieled.")
    }
    else
    {
        error.textContent = ""
        mail.setCustomValidity("")
    }
})

pass.addEventListener("blur", () => {
    if (pass.validity.tooShort) {
        error.textContent = "Error! Minimum of 6 symbols."
        pass.setCustomValidity("Error! Minimum of 6 symbols.")
    }
    else if (pass.validity.valueMissing){
        error.textContent = "Error! Fill in the fieled."
        pass.setCustomValidity("Error! Fill in the fieled.")
    }
    else
    {
        error.textContent = ""
        pass.setCustomValidity("")
    }
}) 

form.addEventListener("submit", (e) =>{
    console.table({email: mail.value, password: pass.value});
    e.preventDefault()
}) 