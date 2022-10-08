// acceder archivo cnn 
const {db} = require("../cnn")

//consultas unir base de datos con java script // palabra resevadas async await
const getNotas = async (req,res)=> {
    const consulta = "SELECT * FROM notas;"
    const response = await db.query(consulta)
    // de query a .json
    res.status(200).json(response)    
    console.log("xxxxxx")
}
// VIEW 
const getNotasNombres = async (req,res )=>{
    const consulta = "SELECT * FROM vw_notas_nombres_apellidos ORDER BY concat;"
    const response = await db.query(consulta)
    // de query a .json
    res.status(200).json(response)  
}
// notas con ID
const getNotasByID = async (req,res) => {
    const consulta = "SELECT * FROM notas WHERE not_id = $1;"
    try {
        const ID = req.params.id
        const response = await db.one(consulta,[ID])
        res.status(200).json(response)    
    } catch (error) {
        res.status(400).json({
            code: error.code,
            message: "No se a encontrado un registro de notas con este ID " + req.params.id
        })
    }
}

module.exports = {
    getNotas,
    getNotasNombres,
    getNotasByID
}
