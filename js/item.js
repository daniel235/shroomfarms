function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //let data = JSON.parse(this.responseText);
        //document.getElementById("demo").innerHTML = data;
        //console.log(data);
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "https://shroomfarm.herokuapp.com/test", true);
    //xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

function loadDocJquery() {
    $.ajax({
        url: 'https://shroomfarm.herokuapp.com/test',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var name = response[i].name;

                $("#demo").html("<p>id ->" + id + "</p>")
            }
        }
    });
}