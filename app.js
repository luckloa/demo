
$().ready(function () {
    var showAlert = function (msg) {
        $("#alertMsg").html(msg)
         $("#pageAlert").show();
        setTimeout(function () {
            $("#pageAlert").hide();
        },3000);
    };

    $("#addLineBtn").click(function () {
        showAlert("Add line button clicked!");
    });

    $("#submitContinueBtn").click(function () {
        showAlert("Form has been submitted!");
    });
});