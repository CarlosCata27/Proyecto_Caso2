
/*function pruebas() {
  //'use strict';
  window.addEventListener('load', () => {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        console.log("eri gei?")
      }, false);
    });
  }, false);
};
pruebas();*/

const EnvM=document.getElementById('EnviarM');
EnvM.onclick=function(){
console.log("Formulario de maestria enviado")
let forms = document.getElementsByClassName('needs-validation');
let FormularioMaes=document.getElementById('Maestria');
    FormularioMaes.addEventListener('submit', function(event) {
      if (FormularioMaes.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      FormularioMaes.classList.add('was-validated');
    }, false);
}


const EnvD=document.getElementById('EnviarD');
EnvD.onclick=function(){
console.log("Formulario de doctorado enviado")
let forms2 = document.getElementsByClassName('needs-validation');
let FormularioDoc=document.getElementById('Doctorado');
    FormularioDoc.addEventListener('submit', function(event) {
      if (FormularioDoc.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      FormularioDoc.classList.add('was-validated');
    }, false);
}

const GdM=document.getElementById('GuardarM');
GdM.onclick=function(){
  console.log("Formulario Guardado M");
  let FormularioMaes2=document.getElementById('Maestria');
  FormularioMaes2.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  });
}

const GdD=document.getElementById('GuardarD');
GdD.onclick=function(){
  console.log("Formulario Guardado D");
  let FormularioDoc2=document.getElementById('Doctorado');
  FormularioDoc2.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  });
}