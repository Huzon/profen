$(document).ready(function () {
    if ($(window).scrollTop() == 0) {
        console.log("On top");
    }
    $(document).scroll(
        function () {

            if ($(window).scrollTop() == 0) {
                console.log("On top");
            }
        }

    );
});