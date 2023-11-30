import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'reabilitation-program', {
    }).then(function (response) {
       
        var table = new DataTable("#reabilitation_table", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'task' },
                { data: 'duration' },
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
                loadReabilitationProgram(data.id);
                
            } else{
                alert('dell')
                deleteRecord(data.id);
            }           
        });        
    }).catch(function (error) {
        alert(error);
    });
}
async function loadReabilitationProgram(id){
    await axios.get(url + 'reabilitation-program/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#task").val(  response.data.task)
        $("#timesPerWeek").val(response.data.timesPerWeek)
        $("#duration").val(  response.data.duration)
        $("#subjectOfStudy").val(response.data.subjectOfStudy)
        ("#prisoner").val(response.prisoner.name)
    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'reabilitation-program/'+ id , {
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