window.addEventListener("DOMContentLoaded",(function(){document.getElementById("WeDevelop_Portfolio_CasesFilterForm").addEventListener("submit",(function(e){for(var t=e.target,n={},o=0;o<t.length;o+=1){var a,l=t.elements[o],c=l.name;"text"===l.type&&l.value&&(n[c]=l.value),"checkbox"===l.type&&l.checked&&(n[c=l.name.substring(0,l.name.indexOf("["))]=null!==(a=n[c])&&void 0!==a?a:[],n[c].push(l.value)),"select-one"===l.type&&l.value&&(n[c]=l.value)}var i=location.protocol+"//"+location.host+location.pathname,r=decodeURIComponent(new URLSearchParams(n).toString());window.location.href="".concat(i,"?").concat(r),e.preventDefault()}))}));