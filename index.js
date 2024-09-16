// javascript

const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit',  function(e) {
    e.preventDefault()
    
    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)
    
    const name = loginFormData.get('schoolName')
    console.log(name)
    
     const email = loginFormData.get('schoolEmail')
    console.log(email)
    
     const password = loginFormData.get('password')
    console.log(password)
})