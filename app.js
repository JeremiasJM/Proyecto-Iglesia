/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */


const button= document.querySelector(".button")
const nav = document.querySelector(".nav")

button.addEventListener("click",()=>{

    nav.classList.toggle("activo")

})

const bloque    = document.querySelectorAll('.bloque')
const h5        = document.querySelectorAll('.h5')
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h5
h5.forEach( ( cadaH5 , i )=>{
    // Asignando un CLICK a cada h2
    h5[i].addEventListener('click', ()=>{

        // Recorrer TODOS los bloque
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo')

    })
})
