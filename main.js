const objForm = {
    sku: "13245",
    descontinuado: false,
    articulo: "celular",
    marca: "modelo",
    departamento: 1,
    clase : 12,
    familia : 123,
    stock : 45,
    cantidad : 20,
    fecha_alta: Date,
    fecha_baja: Date
}

const getForm = document.querySelector("#form");
const getSku = document.querySelector("#sku");

getForm.addEventListener("submit", btnFunction)

function btnFunction(){

    return console.log(getSku.value);
}
