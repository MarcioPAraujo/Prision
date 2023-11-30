import "regenerator-runtime/runtime"
import axios from 'axios'

const url = "http://localhost:3000/"

$("#enter").click(async function () {
    try {
        await axios.post(url + 'login', {
            
            email: $("#email").val(),
            
            password: $("#password").val()
            
        }).then(function (response) {
           alert(`token: ${response.statusText}`)
            if(response.statusText){
                //  window.location.href = "../user-register/index.html";
                // $("body").load("index.html");
            }
            
            
        }).catch(function (error) {
            console.log(error);
        });
    } catch (errors) {
        console.error(errors);
    }
});

$("#clear").click( function () {
    try {
        
        $("#email").val(""),
            
        $("#password").val("")
        
    } catch (errors) {
        console.error(errors);
    }
});