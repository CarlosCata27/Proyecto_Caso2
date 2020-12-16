const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const glob = require('glob');
const Glob = glob.Glob;
var multer  = require('multer');
var storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, 'src/views/Doctorado/cvsDoctorado/')
  },
  filename: (req,file,cb) => {
    cb(null, file.originalname)
  }
});
var cvsDoctorado = multer({storage});
//cata
var _inArray = function(needle, haystack) {
  for(var k in haystack) {
    if(haystack[k] === needle) {
      return true;
    }
  }
  return false;
}

var datosD=[];

glob("src/views/Doctorado/*.json",function(err,files){
  if(err) {
    console.log("cannot read the folder, something goes wrong with glob", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { // Read each file
      if(err) {
        console.log("cannot read the file, something goes wrong with the file", err);
      }
      var obj = JSON.parse(data);
      datosD.push(obj);
    });
  });
});

const json_datos = fs.readFileSync('src/datos.json', 'utf-8');
let datos = JSON.parse(json_datos);

router.get('/', (req, res) => {
  res.render('index', { datos,datosD });
});
//cata


router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});
//creadas por jesus
router.get('/Coordinador', (req, res) => {
  res.render('Coordinador');
});

router.get('/Validacion', (req, res) => {
  res.render('Validacion');
});

router.get('/RevisarSol', (req, res) => {
  res.render('RevisarSol');
});
//creadas por jesus
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

//cata
router.post('/new-entry2', cvsDoctorado.single('cvD'), (req, res) => {

  const { nombreD, lugar_nacimientoD, fecha_nacimientoD, direccionD, celularD, nacionalidadD, estado_civilD, CURPD, correoD, skypeD,institucionD,graduadoD,posgradoD , paisinstD,experienciaD ,Anio4 ,Anio3, motivoD, lineaD,cvD, ValidacionD, ComentarioD,TipoD} = req.body;

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
    motivoD,
    ValidacionD:"Sin Validar",
    ComentarioD:"Ninguno",
    Tipo:"Doctorado"
  };

  // add a new doctor to the array

  // saving the array in a file
  const json_datos = JSON.stringify(newDoctor);
  fs.writeFile('src/views/Doctorado/'+CURPD+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

  res.redirect('/');
});

router.get('/delete2/:CURPD', (req, res) => {
  datosD = datosD.filter(alumno => alumno.CURPD != req.params.CURPD);
  // saving data
  fs.unlink('src/views/Doctorado/'+req.params.CURPD+'.json',(err) => {
    if (err) {
      console.error(err)
      return
    }
  
    //file removed
  });
  res.redirect('/');
});




module.exports = router;

