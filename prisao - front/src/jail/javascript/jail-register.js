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
    $("#capacity").val(""),
    $("#jailNumber").val(""),
    $("#securityLevel").val(""),
    $("#employee").val(""),
    $("#rangeData").val("50"),
    $("#confortLevel").val("")   
}

function Loadselect() {
    axios.get(url + 'employee', {}).then(function (response) {
        $.each(response.data, function (key, item) {
            $('#employee').append(
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
    await axios.post(url + 'jail', {
        capacity: $("#capacity").val(),
        jailNumber: $("#jailNumber").val(),
        securityLevel: $("#securityLevel").val(),
        confortLevel: $("#confortLevel option:selected").val(),
        employee: $("#employee option:selected").val()
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}