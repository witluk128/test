$(() => {
    $('#main').append('<h3>git: 1</h3>');

    $('#main').append('<p id="p"></p>');
    $('#p').append('ala ma kota' + '</br>');
    $('#p').append('ala ma kota2' + '</br>');
    $('#p').append('ala ma kota3' + '</br>');
    $('#p').append('ala ma kota4' + '</br>');
    $('#p').append('ala ma kota53' + '</br>');

    $('#reload').on('click', () => reload());

    reload();
})

var serviceUrl = "http://localhost/WebTest/ListService.svc";

reload = () => {
    $.ajax({
        type: "GET",
        url: serviceUrl + "/GetItems",
        contentType: "application/json; charset=utf-8"
    })
        .done((response) => {
            var $list = $('#uList');
            
            $list.empty();
            response.GetItemsResult.List.forEach(item => {
                $list.append("<li>" + item.Name + "</li>");                                
            });            
        })
        .fail((error) => { alert("Error: " + error.status + " : " + error.responseText) });
}


