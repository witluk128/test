$(() => {
    $('#main').append('<h3>git: 1</h3>');

    $('#main').append('<p id="p"></p>');
    $('#p').append('ala ma kota' + '</br>');
    $('#p').append('ala ma kota2' + '</br>');
    $('#p').append('ala ma kota33' + '</br>');

    $('#form').on('submit', (ev) => {
        var i1 = $('#i1').val();
        var i2 = $('#i2').val();

        $('#p3').append(i1 + " : " + i2 + "</br>");
    });
})
