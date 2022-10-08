const pgPromise =require("pg-promise")

const config = {
    host:"dpg-ccsacm2en0hinukjif80-a.oregon-postgres.render.com",
    port:"5432",

    database:"programacion_jr0p",
    user:"dario",
    password:"phc1FToU9tqCJYmtLTH07XmhrklJPPOJ",
    ssl: true
}

// servidor local

const configLocal = {
    host:"localhost",
    port:"5432",

    database:"notas_ejemplo",
    user:"postgres",
    password:"dario"
}


const pgp =  pgPromise ({})
const db = pgp (config)

exports.db = db

