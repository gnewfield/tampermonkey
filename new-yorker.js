// ==UserScript==
// @name         New Yorker
// @namespace    http://graynewfield.com
// @version      0.1
// @description  Jasmin wants to read the New Yorker
// @author       Gray Newfield
// @match        https://www.newyorker.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var contentNodes;

setTimeout(getContent, 1000);

function getContent() {
    contentNodes = Array.from(document.getElementsByClassName("body__inner-container"))
    contentNodes.forEach((node) => {
        node.parentNode.className += " gray";
        node.className = "";
    });
}

function injectContent() {
   var parentNodes = Array.from(document.getElementsByClassName("gray"));
   contentNodes.forEach((node) => {
       parentNodes[0].appendChild(node);
   });
}

const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			if(added_node.id == 'failsafe-clickthrough') {
        added_node.remove();
        injectContent();
				observer.disconnect();
			}
		});
	});
});

observer.observe(document.getElementById('app-root'), { subtree: true, childList: true });
