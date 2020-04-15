$(document).ready(function(){

    if (getCookie('show_cookie_message') !== 'no') {

        $('#cookie-consent').css('margin-right', Frontend.getScrollBarWidth() + 'px');
        setTimeout(function() {
            $("#cookie-consent").fadeIn(200);
        }, 1000);
    }
    $(".cookie-accept").click(function() {
        $("#cookie-consent").fadeOut(200);
        setCookie('show_cookie_message','no');
        return false;
    });
});

function setCookie(cookie_name, value)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + (365*25));
    document.cookie = cookie_name + "=" + escape(value) + "; expires="+exdate.toUTCString() + "; path=/";
}

function getCookie(cookie_name)
{
    cookie_start = null;

    if (document.cookie.length>0)
    {
        cookie_start = document.cookie.indexOf(cookie_name + "=");
        if (cookie_start !== -1)
        {
            cookie_start = cookie_start + cookie_name.length+1;
            cookie_end = document.cookie.indexOf(";",cookie_start);
            if (cookie_end === -1)
            {
                cookie_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(cookie_start,cookie_end));
        }
    }
    return "";
}
