$(document).ready(function () {
    $("#groceries").submit(function (e) {
        e.preventDefault();

        let input1 = $("#groc1").val().toUpperCase()
        let input2 = $("#groc2").val().toUpperCase()
        let input3 = $("#groc3").val().toUpperCase()
        let input4 = $("#groc4").val().toUpperCase()
        let input5 = $("#groc5").val().toUpperCase()
        let input6 = $("#groc6").val().toUpperCase()

        let RecentrArray = [input1, input2, input3, input4, input5, input6]
        let RecentrArray1 = RecentrArray .sort();

        $("#groceries").hide();

        RecentrArray1.forEach(function (list){
            $("#output").append("<li>".concat(list,));
        })

    });

});