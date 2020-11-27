const documento_error = document.querySelector('#CV + span.error');
const confirm = document.getElementById("");

/*function ChoseSelecc()
{
    var Maestria = document.getElementById("Maestria");
    var Doctorado = document.getElementById("Doctorado");
    var opcion = document.getElementById("Curso").value-1;

    if(opcion == "1")
    {
        console.log("Doctorado");
        Maestria.style.display="none";
        Doctorado.style.display="block";
    }
    else
    {
        console.log("Maestria");
        Doctorado.style.display="none";
        Maestria.style.display="block";
    }       
}*/

//Funcion para especificar que tamaño debe tener los documentos.
function Mostrar_Tamano()
{
    var entrada = document.getElementById('cv');
    if(!entrada.files[0])
    {
        documento_error.textContent = 'Debe subir un archivo antes de pulsar el boton Cargar';
    }
    else
    {
        documento_error.innerHTML = '';
        documento_error.className = 'error';
        var datos = document.getElementById("cv").files[0];
        //megas = parseInt(datos.size, 10);
        tamaño = datos.size / 1000000;
        var checador = Verificar_Longitud(tamaño);

        if(checador == 0)
            documento_error.textContent = 'El archivo debe pesar menos de 1 MB, el peso de este documento es de '+ tamaño + ' MB';
        
        else
            documento_error.innerHTML = '';
            documento_error.className = 'error';
    }
}

function Verificar_Longitud(peso)
{
    if(peso > 1.27)
        return 0;

    else if(peso < 1.27)
        return 1;
}

function radioClickedForm(){
    var Maestria = document.getElementById("Maestria");
    var Doctorado = document.getElementById("Doctorado");
    const R1 = document.getElementById("Curso1");
    const R2 = document.getElementById("Curso2");
    if (R1.checked){
        console.log("Maestria");
        Maestria.style.display="none";
        Doctorado.style.display="block";
        
    } else if(R2.checked){
        console.log("Doctorado");
        Doctorado.style.display="none";
        Maestria.style.display="block";
    }
    
    console.log(div_e.nextElementSibling);
}