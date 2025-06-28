 // fecha
 const fecha = document.getElementById("fecha");

 function getActualDate(){
     const actualDate = new Date();
     const day = actualDate.getDate().toString().padStart(2, '0');
     const year = actualDate.getFullYear();
     const month = (actualDate.getMonth()+1);
     const monthFormat = month.toString().padStart(2, '0');
     const fechaFinal = year + "-" + monthFormat + "-" + day;
     return fechaFinal;
 };
 
 fecha.value = getActualDate();
 fecha.min = getActualDate();

 // validación formulario
 const submit = document.getElementById('enviar-formulario');

 const emailStatus = document.getElementById('emailStatus');
 const email = document.getElementById('email');
 const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

 const phone = document.getElementById("phone");
 const phoneStatus = document.getElementById('phoneStatus');
 const phoneRegex = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/

 const noches = document.getElementById('noches');
 const nochesStatus = document.getElementById('nochesStatus');

 submit.addEventListener('click', function(e) {
     if(emailRegex.test(email.value)) {
         emailStatus.innerText = ''  
     } else {
         e.preventDefault()
         emailStatus.innerText = "Ingrese un correo electrónico válido"
     }

     if(phoneRegex.test(phone.value)) {
         phoneStatus.innerText = ''
     } else {
         e.preventDefault()
         phoneStatus.innerText = "Ingrese un número de celular válido"
     }

     if(noches.value != 0 && noches.value <= 200 ) {
         nochesStatus.innerText = ''
    } else {
         e.preventDefault()
         nochesStatus.innerText = "Ingrese una cantidad de noches válida"
     }
 })