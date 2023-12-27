const username = "Syakira"
const password = "12345678"

function auth () {
    //Tangkap nilai yang di input user
    let userInput = document.getElementById ("username").value
    let PasswordInput = document.getElementById ("password").value

    let form = document.getElementById('form')

    if(username == userInput && password == PasswordInput){
        alert('Login Berhasil')
        form.submit()
    } else {
        alert('Login Gagal!')
    }
}