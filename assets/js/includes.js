// Include files functionality
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        elmnt.removeAttribute("include-html");
                        // Re-initialize hamburger menu after include
                        if (typeof window.initHamburgerMenu === 'function') {
                            window.initHamburgerMenu();
                        }
                        includeHTML();
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
});
