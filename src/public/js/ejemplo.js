const div_e = document.getElementById("div_e");
const div_m = document.getElementById("div_m");

const radio1 = document.getElementById("customControlValidation1");
const radio2 = document.getElementById("customControlValidation2");

const radio3 = document.getElementById("customControlValidation3");
const radio4 = document.getElementById("customControlValidation4");

const div_años = document.createElement("div");
div_años.setAttribute("class", "form-row");
        const div_anio1 = document.createElement("div");        
        const div_anio2 = document.createElement("div");    
        div_anio1.setAttribute("class", "form-group col-md-2");
        div_anio2.setAttribute("class", "form-group col-md-2");
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        label1.setAttribute("for", "Anio1");
        label1.textContent = "De que año a que año?";
        label2.setAttribute("for", "Anio2");
        label2.textContent = "                  ";

        input1.setAttribute("type", "number");
        input1.setAttribute("class", "form-control");
        input1.setAttribute("id", "Anio1");
        input1.setAttribute("min", "1980");
        input1.setAttribute("max", "2020");
        input1.setAttribute("placeholder", "ej.2000");
        input1.setAttribute("required", "");

        input2.setAttribute("type", "number");
        input2.setAttribute("class", "form-control");
        input2.setAttribute("id", "Anio2");
        input2.setAttribute("min", "1980");
        input2.setAttribute("max", "2020");
        input2.setAttribute("placeholder", "ej.2005");
        input2.setAttribute("required", "");

        //div_anio1.appendChild(label1);
        div_anio1.appendChild(input1);

        //div_anio2.appendChild(label2);
        div_anio2.appendChild(input2);

        div_años.appendChild(label1);
        div_años.appendChild(div_anio1);
        div_años.appendChild(div_anio2);


        const div_años2 = document.createElement("div");
        div_años2.setAttribute("class", "form-row");
                const div_anio3 = document.createElement("div");        
                const div_anio4 = document.createElement("div");    
                div_anio3.setAttribute("class", "form-group col-md-2");
                div_anio4.setAttribute("class", "form-group col-md-2");
                const label3 = document.createElement("label");
                const label4 = document.createElement("label");
                const input3 = document.createElement("input");
                const input4 = document.createElement("input");
                label3.setAttribute("for", "Anio3");
                label3.textContent = "De que año a que año?";
                label4.setAttribute("for", "Anio4");
                label4.textContent = "                  ";
        
                input3.setAttribute("type", "number");
                input3.setAttribute("class", "form-control");
                input3.setAttribute("name", "Anio3");
                input3.setAttribute("min", "1980");
                input3.setAttribute("max", "2020");
                input3.setAttribute("placeholder", "ej.2000");
                input3.setAttribute("required", "");
        
                input4.setAttribute("type", "number");
                input4.setAttribute("class", "form-control");
                input4.setAttribute("name", "Anio4");
                input4.setAttribute("min", "1980");
                input4.setAttribute("max", "2020");
                input4.setAttribute("placeholder", "ej.2005");
                input4.setAttribute("required", "");
        
                //div_anio1.appendChild(label1);
                div_anio3.appendChild(input3);
        
                //div_anio2.appendChild(label2);
                div_anio4.appendChild(input4);
        
                div_años2.appendChild(label3);
                div_años2.appendChild(div_anio3);
                div_años2.appendChild(div_anio4);

function radioClicked(){
    if (radio1.checked){
        console.log(radio1.value);
        //div_años.remove();

        div_e.insertAdjacentElement("afterend", div_años);
        
    } else if(radio2.checked){
        console.log(radio2.value);
        div_años.remove();
    }
    
    console.log(div_e.nextElementSibling);
}

function radioClicked2(){
    if (radio3.checked){
        console.log(radio3.value);
        //div_años.remove();

        div_m.insertAdjacentElement("afterend", div_años2);
        
    } else if(radio4.checked){
        console.log(radio4.value);
        div_años2.remove();
    }
    
    console.log(div_e.nextElementSibling);
}


{/* <div class="custom-control custom-radio">
<input type="radio" class="custom-control-input" id="customControlValidation1" name="radio-stacked" onclick="radioClicked()" value="Opcion1" required>
<label class="custom-control-label" for="customControlValidation2">si</label>
</div>
<div class="custom-control custom-radio mb-3">
<input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" onclick="radioClicked()" value="Opcion2" required>
<label class="custom-control-label" for="customControlValidation3">no</label>
<div class="invalid-feedback">Seleccione una opcion</div>
</div> */}