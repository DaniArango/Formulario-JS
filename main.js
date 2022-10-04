let nameu= document.getElementById("fname")
let email= document.getElementById("email")
let mensaje= document.getElementById("msj")
let button = document.getElementById("mostrar")
let btn=document.getElementById("clear")

function onSubmit(e)
 {

    
    localStorage.setItem('user',JSON.stringify({
        nombre:nameu.value,
        mail:email.value,
        msj:mensaje.value
    }));
    
}
function onDelete(e)
{
    localStorage.clear()
}


let perfil = JSON.parse(localStorage.getItem('user'))
console.log("Mi objeto",perfil)
    

button.addEventListener('click',onSubmit) 
btn.addEventListener('click',onDelete)

