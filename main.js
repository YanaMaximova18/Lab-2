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
    else
    {
        error.textContent = ""
        mail.setCustomValidity("")
    }
})

form.addEventListener("submit", (e) =>{
    console.table({email: mail.value, password: pass.value});
    e.preventDefault()
}) 