const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const json_datos = fs.readFileSync('src/datos.json', 'utf-8');
let datos = JSON.parse(json_datos);

const json_datosD = fs.readFileSync('src/datosDoctorado.json', 'utf-8');
let datosD = JSON.parse(json_datosD);

router.get('/', (req, res) => {
  res.render('index', { datos,datosD });
});

router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});

router.post('/new-entry', (req, res) => {

  const { nombre, lugar_nacimiento, fecha_nacimiento, direccion, celular, nacionalidad, estado_civil, CURP, correo, skype } = req.body;

  if (!nombre || !lugar_nacimiento || !fecha_nacimiento || !direccion || !celular || !nacionalidad || !estado_civil || !CURP || !correo || !skype) {
    res.status(400).send("Error en el formulario");
    return;
  }

  var newAlumno = {
    id: uuidv4(),
    nombre,
    lugar_nacimiento,
    fecha_nacimiento,
    direccion,
    celular,
    nacionalidad,
    estado_civil,
    CURP,
    correo,
    skype
  };

  // add a new alumno to the array
  datos.push(newAlumno);

  // saving the array in a file
  const json_datos = JSON.stringify(datos);
  fs.writeFileSync('src/datos.json', json_datos, 'utf-8');

  res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
  datos = datos.filter(alumno => alumno.id != req.params.id);

  // saving data
  const json_datos = JSON.stringify(datos);
  fs.writeFileSync('src/datos.json', json_datos, 'utf-8');

  res.redirect('/')
});

router.post('/new-entry2', (req, res) => {

  const { nombreD, lugar_nacimientoD, fecha_nacimientoD, direccionD, celularD, nacionalidadD, estado_civilD, CURPD, correoD, skypeD,institucionD,graduadoD,posgradoD , paisinstD,experienciaD ,Anio4 ,Anio3, motivoD, lineaD, } = req.body;

  if (!nombreD || !lugar_nacimientoD || !fecha_nacimientoD || !direccionD || !celularD || !nacionalidadD || !estado_civilD || !CURPD || !correoD || !skypeD||!institucionD||!graduadoD||!posgradoD||!paisinstD||!experienciaD||!motivoD||!lineaD) {    
    res.status(400).send("Error en el formulario");
    return;
  }

  var newDoctor = {
    id: uuidv4(),
    nombreD,
    lugar_nacimientoD,
    fecha_nacimientoD,
    direccionD,
    celularD,
    nacionalidadD,
    estado_civilD,
    CURPD,
    correoD,
    skypeD,
    institucionD,
    graduadoD,
    posgradoD,
    paisinstD,
    experienciaD,
    Anio3,
    Anio4,
    motivoD
  };

  // add a new doctor to the array
  datosD.push(newDoctor);

  // saving the array in a file
  const json_datos = JSON.stringify(datosD);
  fs.writeFileSync('src/datosDoctorado.json', json_datos, 'utf-8');

  res.redirect('/');
});

router.get('/delete2/:id', (req, res) => {
  datosD = datosD.filter(alumno => alumno.id != req.params.id);

  // saving data
  const json_datosD = JSON.stringify(datosD);
  fs.writeFileSync('src/datosDoctorado.json', json_datosD, 'utf-8');

  res.redirect('/')
});

module.exports = router;

