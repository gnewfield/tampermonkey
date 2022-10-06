// ==UserScript==
// @name         Gray's Lady
// @namespace    http://graynewfield.com
// @version      0.1
// @description  Read every NYT article for free
// @author       Gray Newfield
// @match        https://www.nytimes.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

window.addEventListener("load", function () {
    setTimeout(revealArticle, 1000);
});

var revealArticle = () => {
    var content_nodes = document.getElementById("gateway-content").parentNode.childNodes;
    content_nodes[0].className = "";
    content_nodes[1].remove();
    document.getElementById("app").firstChild.firstChild.lastChild.remove();
};
