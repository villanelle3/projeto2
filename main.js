document.addEventListener('DOMContentLoaded', function (){
    document.getElementById("form1").addEventListener("submit", function(event){
        event.preventDefault()
        var nome = document.getElementById("nome").value
        var phone = document.getElementById("phone").value
        var table = document.getElementById("table")
        var row = table.insertRow(1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell1.innerHTML = nome
        cell2.innerHTML = phone
        document.getElementById("form1").reset();
    });
});

