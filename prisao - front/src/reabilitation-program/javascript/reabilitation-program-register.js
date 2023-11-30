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
    $("#task").val(""),
    $("#timePerWeek").val(""),
    $("#duration").val(""),
    $("#subjectOfStudy").val(""),
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
    await axios.post(url + 'reabilitation-program', {
        task: $("#task").val(),
        timesPerWeek: $("#timePerWeek").val(),
        duration: $("#duration").val(),
        subjectOfStudy: $("#subjectOfStudy").val(),
        prisoner: $("#prisoner").val()
       
    }).then(function (response) {
        alert("Registro Incluído com Sucesso");
    }).catch(function (error) {
        console.log(error);
    });
}

