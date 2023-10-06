 var selectedRow = null;
function onFormSubmit() {}

function readFormData() {
    var formData = {};
    formData["singerName"] = document.getElementById("singerName").value;
    formData["singTitle"] = document.getElementById("singTitle").value;
    formData["time"] = document.getElementById("time").value;
    return formData;
}

function insertNewData(data){
    var table = document.getElementById("storelabel").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.singerName;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.singTitle;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.time;
}