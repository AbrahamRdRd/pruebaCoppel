
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
console.log(today);

var objForm = [{
    sku: 13245,
    descontinuado: false,
    articulo: "Celular",
    marca: "Iphone",
    modelo: "nuevo",
    departamento: 1,
    clase : 12,
    familia : 123,
    stock : 45,
    cantidad : 20,
    fechaAlta : today,
    fechaBaja : "1900-01-01"
}];

//---------- getting values of the inputs ---------------//
const getForm = document.querySelector("#form");
const getSku = document.querySelector("#sku");  
const getCheck = document.querySelector("#descontinuado-check");
const getArticule = document.querySelector("#articulo");
const getDepartment = document.querySelector("#departamento");
const getBrand = document.querySelector("#marca");
const getModel = document.querySelector("#modelo");
const getClase = document.querySelector("#clase");
const getFamily = document.querySelector("#familia");
const getStock = document.querySelector("#stock");
const getQuantity = document.querySelector("#cantidad");
const getDateUp = document.querySelector("#fecha-alta");
const getDateDown = document.querySelector("#fecha-baja");
const getBtnDelete = document.querySelector(".btn-form-delete");

console.log(getDateDown.value);

getForm.addEventListener("submit", btnFunction)


function btnFunction(event){
    event.preventDefault();
        if(objForm[0].sku == parseInt(getSku.value)){
            alert("Este SKU ya existe. Favor de ingresar otro");
            
            getArticule.value = objForm[0].articulo;
            getDepartment.value = objForm[0].departamento;
            getFamily.value = objForm[0].familia;
            getStock.value = objForm[0].stock;
            getQuantity.value = objForm[0].cantidad;
            getBrand.value = objForm[0].marca;
            getModel.value = objForm[0].modelo;
            getDateUp.value = objForm[0].fechaAlta;
            getDateDown.value = objForm[0].fechaBaja;
            
            getClase.setAttribute("disabled", "");
            getArticule.setAttribute("disabled", "");
            getDepartment.setAttribute("disabled", "");
            getFamily.setAttribute("disabled", "");
            getStock.setAttribute("disabled", "");
            getQuantity.setAttribute("disabled", "");
            getBrand.setAttribute("disabled", "");
            getModel.setAttribute("disabled", "");
            
            getClase.value = objForm.clase;
            getBtnDelete.classList.remove("inactive");

            //objForm.pop();
        
            } else {
            console.log("no ok");
                
            getClase.removeAttribute("disabled");
            getArticule.removeAttribute("disabled");
            getDepartment.removeAttribute("disabled");
            getFamily.removeAttribute("disabled");
            getStock.removeAttribute("disabled");
            getQuantity.removeAttribute("disabled");
            getBrand.removeAttribute("disabled");
            getModel.removeAttribute("disabled");

            /*console.log(getClase.value,"clase");
            //console.log(getArticule.value,"articulo");
            //console.log(getDepartment.value, "departament");
            //console.log(getFamily.value,"family");
            //console.log(getStock.value,"stock");
            //console.log(getQuantity.value,"quantity");
            //console.log(getBrand.value, "brand");
            //console.log(getModel.value, "model");
            //console.log(getDateDown.value, "fecha baja");*/
            
            isFormEmpty(getArticule, getModel);
        }
}

function isFormEmpty(getArticule, getModel){
    if(getArticule.disabled){
        //objForm.push({
        //    sku : parseInt(getSku.value),
        //    clase: getClase.value,
        //    articulo: getArticule.value,
        //    departamento: getDepartment.value,
        //    familia: getFamily.value,
        //    stock: getStock.value,
        //    cantidad: getQuantity.value,
        //    marca: getBrand.value,
        //    modelo: getModel.value,
        //    fechaAlta: today, 
        //    fechaBaja: "1900-01-01",
        //});
    }

}


function btnDeleteFunction(event){
    event.preventDefault();
    getClase.setAttribute("disabled", "");
    getArticule.setAttribute("disabled", "");
    getDepartment.setAttribute("disabled", "");
    getFamily.setAttribute("disabled", "");
    getStock.setAttribute("disabled", "");
    getQuantity.setAttribute("disabled", "");
    getBrand.setAttribute("disabled", "");
    getModel.setAttribute("disabled", "");
    confirm("¿Estás seguro que quieres eliminar este elemento?")
}

