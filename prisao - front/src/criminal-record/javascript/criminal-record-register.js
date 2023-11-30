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
    $("#crime").val(""),
    $("#sentence").val(""),
    $("#section").val(""),
    $("#prisoner").val("")
}

function Loadselect() {
    axios.get(url + 'prisoner', {}).then(function (response) {
        $.each(response.data, function (key, item) {
            $('#prisoner').append(
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
    await axios.post(url + 'criminal-record', {
        crime: $("#crime").val(),
        sentence: $("#sentence").val(),
        section:  $("#section").val(),
        prisoner: $("#prisoner").val()
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}
