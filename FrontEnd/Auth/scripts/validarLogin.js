const Form =  document.getElementById('form-login');
const Inputs = [...document.querySelectorAll('.input')];
const Required = [...document.querySelectorAll('.required')];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const mostrarSenha = document.querySelector('.bi-eye');

Form.addEventListener('submit', impedirEnvio);
Inputs[0].addEventListener('input', validarEmail);
function impedirEnvio(e){
    e.preventDefault();
    validarNome();
    validarEmail();
    validarSenha();
}

document.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        impedirEnvio();
    }
})

function error(i){
    Inputs[i].style.border = '2px solid red';
    Required[i].style.display = 'block';
}

function notError(i){
    Inputs[i].style.border = '';
    Required[i].style.display = 'none';
}

function validarEmail(){
    if(emailRegex.test(Inputs[0].value)){
        return notError(0);
    }
    return error(0);
}

mostrarSenha.addEventListener('click', ()=>{
    if (Inputs[1].type === 'password'){
        Inputs[1].setAttribute('type', 'text')
        mostrarSenha.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        Inputs[1].setAttribute('type', 'password')
        mostrarSenha.classList.replace('bi-eye-slash', 'bi-eye')
    }
})
