import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    Loadselect();
    
});

$("#clear").click( async function () {
    try {
        clear();
    } catch (errors) {
        console.error(errors);
    }

});

function clear() {
    $("#name").val(""),
    $("#turno").val(""),
    $("#task").val(""),
    $("#accessLevel").val(""),
    $("#equipament").val(""),
    $("#prision").val("")   
}

function Loadselect() {
    axios.get(url + 'prision', {}).then(function (response) {
        $.each(response.data, function (key, item) {
            $('#prision').append(
                $(`<option>${item}</option>`)
                    .attr("value", item.id)
                    .text(item.name)
            );
        });
    }).catch(function (error) {
        alert(error);
    });
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
    await axios.post(url + 'employee', {
        name: $("#name").val(),
        turno: $("#turno").val(),
        task: $("#task").val(),
        accessLevel: $("#accessLevel").val(),
        equipament: $("#equipament").val(),
        prision: $("#prision option:selected").val()
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}

