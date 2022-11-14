const mySql = require('mysql');
const conection = mySql.createConnection({
        host: "localhost",
        user: "AdminBD-coppel-prueba",
        password: "Mayhem31",
        database: "BD_prueba_coppel"
    }
);

conection.connect((err)=>{
    if(err){ console.log(err)} 
        else {
        console.log("La conexion funciona")
    }
})