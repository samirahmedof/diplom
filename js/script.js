$(document).ready(function () {

    // $("main .map a").draggable({

    // });
    // $("main").mouseout(function() {
    //     $( 'main .map a' ).draggable( 'option',  'revert', true ).trigger( 'mouseup' );
    // });
    $("main .contentCol .fa-pen").click(function () {
        $("main #edit").show('slow');
        var photo = $(this).parents(".contentCol").find(".image img").attr("src");
        var text = $(this).parents(".contentCol").find(".content p").text();
        $("main #edit img").attr("src", photo);
        $("main #edit textarea").val(text);
    })
    $("main #edit .fa-times").click(function () {
        $("main #edit").hide('slow');
    })
    $("main #edit .addPhoto").click(function () {
        $(this).prev().click();
    })
    $("footer .profile").click(function () {
        $("footer .dropUp").fadeToggle('fast');
        $(document).click(function (e) {
            if (!$(e.target).closest("footer .profile").length && !$(e.target).closest("footer .dropUp").length) {
                $("footer .dropUp").fadeOut('fast');

            }
        });

    })
    $("footer .setting").click(function () {
        $("footer .settingPage").fadeIn('fast');
    })
    $("footer .settingPage .fa-times").click(function () {
        $("footer .settingPage").fadeOut('fast');
    })
    $("main .mapCol .map a").click(function(){
        $("main .contentCol").removeClass("d-none");
    })

    //login
    $("#login .form .reg").click(function () {
        $(this).parents(".form").addClass("d-none");
        $("#login .registration").removeClass("d-none");
    })
    $("#login .registration .reg").click(function () {
        $(this).parents(".registration").addClass("d-none");
        $("#login .form").removeClass("d-none");
    })

    

})