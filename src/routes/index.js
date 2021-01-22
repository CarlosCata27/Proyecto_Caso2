const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const glob = require('glob');
let multer  = require('multer');

//cata

var datosD=[];
var datosM=[];
var InformacionD=[];
var InformacionM=[];

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
//cata

glob("src/views/Maestria/*.json",function(err,files){
  if(err) {
    console.log("cannot read the folder, something goes wrong with glob", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { // Read each file
      if(err) {
        console.log("cannot read the file, something goes wrong with the file", err);
      }
      var obj = JSON.parse(data);
      datosM.push(obj);
    });
  });
});

router.get('/', (req, res) => {
  res.render('index', {datosD,datosM });
});

router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});
//creadas por jesus
router.get('/Coordinador', (req, res) => {
  res.render('Coordinador',{ datosD,datosM });
});

router.get('/Validacion', (req, res) => {
  res.render('Validacion',{InformacionD});
});

router.get('/ValidacionM', (req, res) => {
  res.render('ValidacionM',{InformacionM});
});

router.get('/RevisarSol', (req, res) => {
  res.render('RevisarSol');
});

router.get('/Busqueda', (req, res) => {
  res.render('Busqueda');
});

router.get('/BusquedaD', (req, res) => {
  res.render('BusquedaD');
});

router.get('/RevisarSolD', (req, res) => {
  res.render('RevisarSolD');
});

router.post('/new-entry', multer({
  storage: multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,'src/views/Maestria/cvsMaestria/')
    },
    filename: (req,file,cb) => {
      cb(null, req.body.CURP+".pdf")
    }
  })
}).single('cvM') ,(req, res) => {

  const {GuardarM, nombre, lugar_nacimiento, fecha_nacimiento, direccion, celular, nacionalidad, estado_civil, CURP, correo, skype,institucion,carrera,titulado , paisinst,experienciaP,experienciaD ,Anio2 ,Anio1, motivo, firma,linea,cvM, ValidacionD, Comentario,Tipo} = req.body;
  
  var date = new Date();
  
  var fechahoy = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();


  var newMaestro = {
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
    skype,
    institucion,
    titulado,
    carrera,
    paisinst,
    experienciaP,
    experienciaD,
    Anio2,
    Anio1,
    motivo,
    fechahoy,
    linea,
    firma,
    ValidacionD:"Sin Validar",
    Comentario:"Ninguno",
    Tipo:"Maestría"
  };

  // Se guardan los datos en la carpeta
  if(GuardarM=="Guardar"){
    const json_datos = JSON.stringify(newMaestro);
  fs.writeFile('src/views/MaestriaPartial/'+CURP+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  res.redirect('/new-entry');
  }else{
    if (!nombre || !lugar_nacimiento || !fecha_nacimiento || !direccion || !celular || !nacionalidad || !estado_civil || !CURP || !correo || !skype||!institucion||!carrera||!paisinst||!experienciaD||!experienciaP||!motivo||!linea) {    
      res.status(400).send("Faltan campos a llenar");
      return;
    }else{
      const json_datos = JSON.stringify(newMaestro);
      fs.writeFile('src/views/Maestria/'+CURP+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    });
    }
    res.redirect('/');
  }
});


//cata
router.post('/new-entry2', multer({
  storage: multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,'src/views/Doctorado/cvsDoctorado')
    },
    filename: (req,file,cb) => {
      cb(null, req.body.CURPD+".pdf")
    }
  })
}).single('cvD'), (req, res) => {

  const { accion,nombreD, lugar_nacimientoD, fecha_nacimientoD, direccionD, celularD, nacionalidadD, estado_civilD, CURPD, correoD, skypeD,institucionD,graduadoD,posgradoD , paisinstD,experienciaD,experienciadD,Anio4 ,Anio3, motivoD, lineaD,cvD,firmaD, ValidacionD, ComentarioD,TipoD} = req.body;

 
  var date = new Date();
  
  var fechahoyD = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();

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
    experienciadD,
    Anio3,
    Anio4,
    motivoD,
    fechahoyD,
    lineaD,
    firmaD,
    ValidacionD:"Sin Validar",
    ComentarioD:"Ninguno",
    Tipo:"Doctorado"
  };

  // add a new doctor to the array

  // saving the array in a file
  if(accion=="Guardar"){
    const json_datos = JSON.stringify(newDoctor);
  fs.writeFile('src/views/DoctoradoPartial/'+CURPD+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  res.redirect('/new-entry');
  }else{
    if (!nombreD || !lugar_nacimientoD || !fecha_nacimientoD || !direccionD || !celularD || !nacionalidadD || !estado_civilD || !CURPD || !correoD || !skypeD||!institucionD||!graduadoD||!posgradoD||!paisinstD||!experienciaD||!motivoD||!lineaD) {    
      res.status(400).send("Faltan campos por llenar");
      return;
    }else{
      const json_datos = JSON.stringify(newDoctor);
      fs.writeFile('src/views/Doctorado/'+CURPD+'.json', json_datos, 'utf-8',function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
      res.redirect('/');
    }
  }
});

router.get('/ValidarD/:CURPD', (req, res) => {
  InformacionD = datosD.filter(alumno => alumno.CURPD == req.params.CURPD);
  console.log(InformacionD);
  // saving data
  res.redirect('/Validacion');
});

router.get('/ValidarM/:CURP', (req, res) => {
  InformacionM = datosM.filter(alumno => alumno.CURP == req.params.CURP);
  // saving data
  res.redirect('/ValidacionM');
});

router.post('/Validacion', (req, res) => {

  const {CURPD,ValidacionD,ComentarioD} = req.body;

  let file = JSON.parse(fs.readFileSync('src/views/Doctorado/'+CURPD+'.json', 'utf8'));
  
  file.ValidacionD = ValidacionD;
  file.ComentarioD = ComentarioD;

  fs.writeFile('src/views/Doctorado/'+CURPD+'.json', JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
  });

  res.redirect('/');
});

router.post('/ValidacionM', (req, res) => {

  const {CURPV,ValidacionD,ComentarioD} = req.body;

  let file = JSON.parse(fs.readFileSync('src/views/Maestria/'+CURPV+'.json', 'utf8'));
  
  file.ValidacionD = ValidacionD;
  file.Comentario = ComentarioD;

  fs.writeFile('src/views/Maestria/'+CURPV+'.json', JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
  });

  res.redirect('/');
});

router.post('/Busqueda', (req, res) => {

  const {CURP,buscar} = req.body;

  if(buscar=="BuscarM"){
    parcialM = fs.readFileSync('src/views/MaestriaPartial/'+CURP+'.json', 'utf8')
    console.log(parcialM);
    JsBus=JSON.parse(parcialM);
    console.log(JsBus);
    console.log("Hay Maestro");
    res.redirect('/Busqueda');
  }else if(buscar=="BuscarD"){
    parcialD = fs.readFileSync('src/views/DoctoradoPartial/'+CURP+'.json', 'utf8')
    JsBusD=JSON.parse(parcialD);
    console.log(JsBusD);
    console.log(parcialD);
    console.log("Hay Doctor");
    res.redirect('/BusquedaD');
  
  }
});

router.post('/SolicitudesTerminadas',(req,res)=>{
  const{CURP,buscar}=req.body
  if(buscar=="BuscarSM"){
    SoliM=fs.readFileSync('src/views/Maestria/'+CURP+'.json', 'utf8')
    console.log(SoliM);
    JsSoliM=JSON.parse(SoliM);
    console.log(JsSoliM);
    console.log("Hay una solicitud");
    res.redirect('/RevisarSol');
  }else if(buscar=="BuscarSD"){
    SoliD=fs.readFileSync('src/views/Doctorado/'+CURP+'.json', 'utf8')
    console.log(SoliD);
    JsSoliD=JSON.parse(SoliD);
    console.log(JsSoliD);
    console.log("Hay una solicitud de Doctorado");
    res.redirect('/RevisarSolD');
  }
    
});

module.exports = router;
