
$( document ).ready(function() {

    function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (10 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
      
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    //       $('#header').css({
//         'padding': '30px 0',

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height  > 250 && getCookie("closeModal") !== "yes") {
            $('#test').show();
            $('#test').addClass('slideInUp');
            $('#test').removeClass('slideOutDown');
        } else if(getCookie("closeModal") === "yes") {
            $('#test').hide();
        }
    });

    $("#close_get_email").click(function () {
        $('#test').removeClass('slideInUp');
        $('#test').addClass('slideOutDown');
        setCookie("closeModal", "yes");

    });

    $(".acceptcookies").click(function () {
        $('.cookiealert').removeClass('show');
        $('.cookiealert').addClass('slideOutUp');
        $("#header").css("padding", "30px 0");
    });
        
});

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
