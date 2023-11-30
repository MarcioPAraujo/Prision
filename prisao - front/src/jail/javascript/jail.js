import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'jail', {
    }).then(function (response) {
       
        var table = new DataTable("#table_jail", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'capacity' },
                { data: 'jailNumber' },
                {
                    data: null,
                    defaultContent: '<button id="edit" value = "edit">Editar</button>&nbsp;<button id="excluir" value = "exclude">Excluir</button>',
                    targets: -1
                },
            ]
        });
        table.on('click', 'button', function (e) {
            var data = table.row( $(this).parents('tr') ).data();
            //alert(data.id);
          
            if(this.id==="edit"){
                alert('edit')
                loadPrision(data.id);
                
            } else{
                alert('dell')
                deleteRecord(data.id);
            }           
        });        
    }).catch(function (error) {
        alert(error);
    });
}
async function loadPrision(id){
    await axios.get(url + 'jail/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#capacity").val(  response.data.capacity)
        $("#jailNumber").val(response.data.jailnumber)

    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'jail/'+ id , {
    }).then(function (response) {
        alert(`Registro de ${response.data}Excluido com Sucesso`);
        refreshtable()
    }).catch(function (error) {
        console.log(error);
    });
}
async function refreshtable() {
    window.location.reload(true);
}