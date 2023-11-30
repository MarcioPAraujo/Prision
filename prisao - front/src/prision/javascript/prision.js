import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'prision', {
    }).then(function (response) {
       
        var table = new DataTable("#table_prision", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'address' },
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
    await axios.get(url + 'prision/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#name").val(  response.data.name)
        $("#address").val(response.data.address)

    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'prision/'+ id , {
    }).then(function (response) {
        alert(`Registro de ${response.data.name}Excluido com Sucesso`);
        refreshtable()
    }).catch(function (error) {
        console.log(error);
    });
}
async function refreshtable() {
    window.location.reload(true);
}