import axios from "axios";
import 'regenerator-runtime/runtime'
const url = "http://localhost:3000/"

$(document).ready(function () {
    loadTable();
    
});
function loadTable(){
    axios.get(url + 'prisoner', {
    }).then(function (response) {
       
        var table = new DataTable("#table_prisoner", {
            data: response.data,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'age' },
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
                loadPrisoner(data.id);
                
            } else{
                alert('dell')
                deleteRecord(data.id);
            }           
        });        
    }).catch(function (error) {
        alert(error);
    });
}
async function loadPrisoner(id){
    await axios.get(url + 'prisoner/' + id, {       
    }).then(function (response) {
        $("#id").val( response.data.id)
        $("#name").val(  response.data.name)
        $("#height").val(response.data.height)
        $("#weight").val(  response.data.weight)
        $("#age").val(response.data.age)
        ("#nationality").val(response.data.nationality)
        $("#jail").val( response.jail.jailNumber)
    }).catch(function (error) {
        console.log(error);
    });
}

async function deleteRecord(id) {
    await axios.delete(url + 'jail/'+ id , {
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