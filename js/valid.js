$('#form').submit(function() {
    var id1 = $('#source').val();
    var id2 = $('#destination').val();
    if (id1 == id2) {
        alert('Source and Destination Can\'t be same');
        return false;
    }
    else
    {
        return true;
    }
});
