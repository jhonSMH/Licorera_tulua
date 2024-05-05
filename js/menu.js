const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");


function showPopupOnce() {
    if (!localStorage.getItem('popupShown')) {
        document.getElementById('floating-window').style.display = 'block';
        localStorage.setItem('popupShown', 'true');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('floatingWindow').style.display = 'block';
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('floatingWindow').style.display = 'none';
  });
//Funcion de botones de la ventanan emergente
document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const floatingWindow = document.getElementById("floatingWindow");

    button1.addEventListener("click", function() {
        // Ocultar la ventana flotante al hacer clic en el botón de cerrar
        floatingWindow.style.display = "none";
    });
document.getElementById('button2').addEventListener('click',function(){
    alert('Lo siento, no puedes acceder en este momento no puedes acceder')
})
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('floatingWindow').style.display = 'block';
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('floatingWindow').style.display = 'none';
  });
//Funcion de botones de la ventanan emergente
document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const floatingWindow = document.getElementById("floatingWindow");

    button1.addEventListener("click", function() {
        // Ocultar la ventana flotante al hacer clic en el botón de cerrar
        floatingWindow.style.display = "none";
    });
document.getElementById('button2').addEventListener('click',function(){
    alert('Lo siento, no puedes acceder en este momento no puedes acceder')
})
 
});
openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})