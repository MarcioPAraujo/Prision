import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'criminal-record', {
    }).then(function (response) {
       
        var table = new DataTable("#table_records", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'crime' },
                { data: 'sentence' },
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
                loadCriminalRecords(data.id);
                
            } else{
                alert('dell')
                deleteRecord(data.id);
            }           
        });        
    }).catch(function (error) {
        alert(error);
    });
}
async function loadCriminalRecords(id){
    await axios.get(url + 'criminal-record/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#crime").val(  response.data.crime)
        $("#sentence").val(response.data.sentence)
        $("#prisoner").val(  response.prisoner.name)
    
    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'criminal-record/'+ id , {
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