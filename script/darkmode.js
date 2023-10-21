/*
    Implement logic of darkmode toggle
*/

// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.querySelector('link[title="dark"]').disabled = false;
//     document.querySelector('link[title="light"]').disabled = true;
// }

// Control theme preference by diabling corresponding CSS file
var e = document.getElementById("dark-mode-toggle-5");
e.addEventListener("colorschemechange", function() {
    if (e.getAttribute("mode") == "dark") {
        document.querySelector('link[title="dark"]').disabled = false;
        document.querySelector('link[title="light"]').disabled = true;
    } else {
        document.querySelector('link[title="dark"]').disabled = true;
        document.querySelector('link[title="light"]').disabled = false;
    }
})