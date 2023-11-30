import axios from "axios"
import "regenerator-runtime/runtime"

const url = "http://localhost:3000/"

$("#clear").click( function () {
    try {
        
        $("#email").val(""),
        $("#password").val("")
        
    } catch (errors) {
        console.error(errors);
    }
});

$("#send").click(async function () {
    try {
        await axios.post(url + 'reset', {
            
            email: $("#email").val(),
            password: $('#password').val()
            
        }).then(function (response) {
            alert(`token:${response.statusText}`)
                
        }).catch(function (error) {
            console.log(error);
        });
    } catch (errors) {
        console.error(errors);
    }
});