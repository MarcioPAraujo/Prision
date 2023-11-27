import 'regenerator-runtime/runtime'
import axios from "axios"
const url = "http://localhost:3000/"

$("#clear").click(function () {
    try {
        clear();
    } catch (errors) {
        console.error(errors);
    }

});
function clear() {
    $("#id").val(""),
    $("#name").val(""),
    $("#address").val("")
    
}

$("#save").click(async function () {
    try {
        let register = $("#save").val()== "register"
        if(register){
            await insert();
        } else{
            alert('error')
        }
        clear();
    } catch (errors) {
        console.error(errors);
    }
});

async function insert() {
    await axios.post(url + 'prision', {
        name: $("#name").val(),
        address: $("#address").val(),
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}