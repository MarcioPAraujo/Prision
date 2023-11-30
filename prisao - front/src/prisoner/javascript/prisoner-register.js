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
    $("#height").val(""),
    $("#weight").val(""),
    $("#age").val(""),
    $("#nationality").val(""),
    $("#jail").val("")   
}

function Loadselect() {
    axios.get(url + 'jail', {}).then(function (response) {
        $.each(response.data, function (key, item) {
            $('#jail').append(
                $(`<option>${item}</option>`)
                    .attr("value", item.id)
                    .text(item.jailNumber)
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
    await axios.post(url + 'prisoner', {
        name: $("#name").val(),
        height: $("#height").val(),
        weight: $("#weight").val(),
        age:  $("#age").val(),
        nationality: $("#nationality").val(),
        jail:  $("#jail").val()
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}
