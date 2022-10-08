// importaciones
const{ Router} = require("express")
const { getEstudiantes, postEstudiante, getEstudianteByCedula, putEstudiante, deleteEstudiante } = require("../controllers/estudiantes.controler")
const { getNotas, getNotasNombres, getNotasByID } = require("../controllers/notas.controles")
const router = Router()
// versiones
const URLV1 ="/v1"

// rutas de notas
router.get(URLV1+"/notas", getNotas)
// ruta notas nombres
router.get(URLV1+"/estudiantes/notas",getNotasNombres)
router.get(URLV1+ "/notas/:id", getNotasByID)


// rutas de estudiantes

router.get(URLV1+"/estudiantes",getEstudiantes)
//ruta consulta de estudiante con cedula
router.get(URLV1+"/estudiantes/:cedula", getEstudianteByCedula)
//ruta put
router.put(URLV1+"/estudiantes",putEstudiante)
// ruta delete
router.delete(URLV1+"/estudiantes/:cedula",deleteEstudiante)

//*
    router.post(URLV1 + "/estudiantes",postEstudiante)

//exprtar rutas
module.exports=router