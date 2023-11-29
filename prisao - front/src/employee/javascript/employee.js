import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'employee', {
    }).then(function (response) {
       
        var table = new DataTable("#table_employee", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'task' },
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
                loadEmployee(data.id);
                
            } else{
                alert('dell')
                deleteRecord(data.id);
            }           
        });        
    }).catch(function (error) {
        alert(error);
    });
}
async function loadEmployee(id){
    await axios.get(url + 'employee/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#name").val(  response.data.name)
        $("#turno").val(response.data.turno)
        $("#task").val(  response.data.task)
        $("#accessLevel").val(response.data.accessLevel)
        ("#equipament").val(response.data.equipament)
        $("#prision").val( response.prision.id)
    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'employee/'+ id , {
    }).then(function (response) {
        alert(`Registro de ${response.status}Excluido com Sucesso`);
        refreshtable()
    }).catch(function (error) {
        console.log(error);
    });
}
async function refreshtable() {
    window.location.reload(true);
}