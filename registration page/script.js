const form=document.getElementById('form')
const user=document.getElementById('usename')
const email=document.getElementById('email')
const password1=document.getElementById('password')
const password2=document.getElementById('password-again')

form.addEventListener('submit',e=>{
    e.preventDefault()
    checkform()
})

function checkform(){
    const uservalue=user.value.trim()
    const emailvalue=email.value.trim()
    const password1value=password1.value.trim()
    const password2value=password2.value.trim()
/*------------------------------------------------------------------*/
    if(uservalue===''){
        checkError(user,"Can't be blank")
    }
    else{
        checkSuccess(user)
    }
    /*------------------------------------------------------------------*/
    if(emailvalue===''){
        checkError(email,"Can't be blank")
    }
    else if(!isEmail(emailvalue)){
        checkSuccess(email,"Not Valid")
    }
    else{
        checkSuccess(email)
    }
    /*------------------------------------------------------------------*/
    if(password1value===''){
        checkError(password1,"Can't be blank")
    }
    else{
        checkSuccess(password1)
    }
    /*------------------------------------------------------------------*/
    if(password2value===''){
        checkError(password2,"Can't be blank")
    }
    else if(password1value!==password2value){
        checkError(password2,"Password does't match")
    }
    else{
        checkSuccess(password2)
    }

    function checkError(input,message){
        const control=input.parentElement
        const small=control.querySelector('small')
        control.className='form-field error'
        small.innerText=message
    }
    function  checkSuccess(input){
        const control=input.parentElement
        control.className='form-field success'

    }
function isEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
}


}