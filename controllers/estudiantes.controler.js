// acceder archivo cnn
const e = require("express");
const { db } = require("../cnn");

//consultas unir base de datos con java script // palabra resevadas async await
const getEstudiantes = async (req, res) => {
  const consulta = "SELECT * FROM estudiantes ORDER BY est_apellidos;";
  const response = await db.query(consulta);
  res.status(200).json(response);
};

// cosulta estudiante por campo cedula (params)

const getEstudianteByCedula = async (req,res) => {
 
  const consulta = "SELECT * FROM estudiantes WHERE est_cedula LIKE $1;"
  try {
    const cedula = req.params.cedula
    const response = await db.one(consulta,[cedula])
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      code: error.code,
      message: e.message + " no se a encontrado un estudiantee con esta dedula " + req.params.cedula
    })
  }

}

//agregar estu

const postEstudiante = async (req, res) => {
  const consulta = "INSERT INTO estudiantes VALUES ($1,$2,$3,$4) RETURNING *;";
  //control de errores
  try {
    const estudiante = req.body;
    const response = await db.one(consulta, [
      estudiante.cedula,
      estudiante.nombres,
      estudiante.apellidos,
      estudiante.nacimiento,
    ]);
    res.status(201).json({
      message: "Estudiante igresado correctamente",
      body: response,
    });
  } catch (error) {
        res.status(400).json({
            code: error.code,
            message: error.message
        })
  }
};

// actualizacion (put)
const putEstudiante = async (req, res) => {
  const consulta = "UPDATE estudiantes SET est_nombres =$2, est_apellidos =$3,"
	                  + "est_nacimiemto =$4 WHERE est_cedula= $1 RETURNING*;"
  //control de errores
  try {
    const estudiante = req.body;
    const response = await db.one(consulta, [
      estudiante.cedula,
      estudiante.nombres,
      estudiante.apellidos,
      estudiante.nacimiento,
    ]);
    res.status(200).json({
      message: "Estudiante actualizado correctamente",
      body: response,
    });
  } catch (error) {
        res.status(400).json({
            code: error.code,
            message: error.message
        })
  }
};

// delete
const deleteEstudiante = async (req,res) => {
 
  const consulta = "DELETE FROM estudiantes WHERE est_cedula LIKE $1;"
  try {
    const cedula = req.params.cedula
    const response = await db.query(consulta,[cedula])
    res.status(200).json({
        message: "El estudiante con cédula " + cedula + " se ha eliminado correctamente"
    })
  } catch (error) {
    res.status(400).json({
      code: error.code,
      message: e.message + " no se a encontrado un estudiantee con esta dedula " + req.params.cedula
    })
  }

}

module.exports = {
  getEstudiantes,
  postEstudiante,
  getEstudianteByCedula,
  putEstudiante,
  deleteEstudiante
};
