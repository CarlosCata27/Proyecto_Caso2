const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const json_datos = fs.readFileSync('src/datos.json', 'utf-8');
let datos = JSON.parse(json_datos);

router.get('/', (req, res) => {
  res.render('index', { datos });
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

module.exports = router;