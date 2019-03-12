let isDark = localStorage.getItem("isDark");
if (isDark === null) {
    isDark = 0;
    localStorage.setItem("isDark", 0);
}
if (isDark == 1) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#002b36";
    document.getElementsByClassName("nav-menu")[0].style.color = "#839496";
    document.getElementsByClassName("main-content").forEach(element => {
        element.style.color = "#839496";
    });
    document.getElementById("theme-toggle").innerHTML = "🌝";
    document.getElementById("syntax-highlight").setAttribute("href", "/dark.css");
} else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fdf6e3";
    document.getElementsByClassName("nav-menu")[0].style.color = "#073642";
    document.getElementsByClassName("main-content").forEach(element => {
        element.style.color = "#073642";
    });
    document.getElementById("theme-toggle").innerHTML = "🌚";
    document.getElementById("syntax-highlight").setAttribute("href", "/light.css");
}
function themeToggleClick() {
    if (isDark == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#fdf6e3";
        document.getElementsByClassName("nav-menu")[0].style.color = "#073642";
        document.getElementsByClassName("main-content").forEach(element => {
            element.style.color = "#073642";
        });
        document.getElementById("theme-toggle").innerHTML = "🌚";
        document.getElementById("syntax-highlight").setAttribute("href", "/light.css");
        isDark = 0;
        localStorage.setItem("isDark", isDark);
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#002b36";
        document.getElementsByClassName("nav-menu")[0].style.color = "#839496";
        document.getElementsByClassName("main-content").forEach(element => {
            element.style.color = "#839496";
        });
        document.getElementById("theme-toggle").innerHTML = "🌝";
        document.getElementById("syntax-highlight").setAttribute("href", "/dark.css");
        isDark = 1;
        localStorage.setItem("isDark", isDark);
    }
}
