function isToday(date) {
    var myDate = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    myDate = mm + '/' + dd + '/' + yyyy;

    if (myDate == 'today') {
        return true;
    } else {
        return false
    }
}
