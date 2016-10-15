
( function(){

    var mdFile = "";
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    mdFile = getParameterByName("md");

    if(mdFile){
        let section = document.getElementById("md");
        section.setAttribute("data-markdown",mdFile)
    }

})();