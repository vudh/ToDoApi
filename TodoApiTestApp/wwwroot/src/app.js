const { Empty, Todo, TodoId } = require('./todo_pb.js');
const { TodoServiceClient } = require('./todo_grpc_web_pb.js');

//var client = new TodoServiceClient('https://localhost:5001');
var client = new TodoServiceClient('https://mytodogrpcservice.azurewebsites.net/');

function loadData() {
    var request = new Empty();

    client.getAll(request, {}, (err, response) => {
        let content = "<i>No items</i>";
        if (err) {
            console.log("Get todos error: " + JSON.stringify(err));
        } else {
            var items = response.getTodosList();
            if (items.length > 0) content = "<ul>";
            for (let i = 0; i < items.length; i++) {
                content += "<li>" + items[i].getName() + "(" + items[i].getTodoid() + ")</li>";
            }
            if (items.length > 0) content += "</ul>";
        }
        document.querySelector("#divItems").innerHTML = content;
    });
}

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    loadData();
});

document.querySelector("#btnAdd").addEventListener("click", function () {
    const txtName = document.querySelector("#txtName");
    const request = new Todo();
    request.setName(txtName.value);

    client.insert(request, {}, (err, response) => {
        if (err) {
            alert("Error");
            console.log("Add todo error: " + JSON.stringify(err));
        } else {
            txtName.value = "";
            loadData();
        }
    });
});

document.querySelector("#btnDelete").addEventListener("click", function () {
    const txtId = document.querySelector("#txtId");
    const request = new TodoId();
    request.setId(txtId.value);

    client.delete(request, {}, (err, response) => {
        if (err) {
            alert("Error");
            console.log("Delete todo error: " + JSON.stringify(err));
        } else {
            txtId.value = "";
            loadData();
        }
    });
});