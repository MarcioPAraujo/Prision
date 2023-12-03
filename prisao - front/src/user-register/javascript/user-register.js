import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"


$("#clear").click( async function () {
    try {
        clear();
    } catch (errors) {
        console.error(errors);
    }

});

function clear() {
    $("#id").val(""),
    $("#name").val(""),
    $("#email").val(""),
    $("#admin").prop('checked', false),
    $("#password").val("");
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
    await axios.post(url + 'users', {
        name: $("#name").val(),
        email: $("#email").val(),
        admin: $("#admin").prop('checked'),
        password: $("#password").val(),
        
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}

