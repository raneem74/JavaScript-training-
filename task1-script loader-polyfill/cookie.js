function getCookie(cookieName)
{
    if (arguments.length!=1||typeof(cookieName)!='string')
        throw "error in function arguments!!"
    if(!hasCookie(cookieName))
        throw "not found"
    var cookieDectioary=allCookieList();
    return cookieDectioary[cookieName];
}

function setCookie(cookieName,cookieValue,saveCookie)
{
    if (arguments.length!=3||typeof(cookieName)!='string'||typeof(cookieValue)!='string' || typeof(saveCookie)!='number')
        throw "error in function arguments"
    if(saveCookie)
    {
        var date=new Date();
        date.setMonth(date.getMonth()+1);
        document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue)+';expires='+date.toGMTString();
    }
    else
    document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue);
}

function allCookieList()
{
    if(arguments.length)
        throw "error in function arguments"
    var cookielist=document.cookie;
    cookielist=cookielist.split(";");
    var cookieDectioary=[];
    for(var i=0;i<cookielist.length;i++)
    {
        var [k ,v]=cookielist[i].split("=");
        cookieDectioary[k.trim()]=v;
    }
    return cookieDectioary;
}

function deleteCookie(cookieName)
{
    if(arguments.length!=1 || typeof(cookieName)!='string')
        throw "error in function arguments"
    if(!hasCookie(cookieName))
        throw "not found"
    var date=new Date();
    document.cookie=cookieName+"=;expires="+date.toGMTString();
}

function hasCookie(cookieName)
{
    if(arguments.length!=1 || typeof(cookieName)!='string')
        throw "error in function argument"
    var cookieDectioary=allCookieList();
    return cookieDectioary[cookieName]==undefined?0:1;
}
