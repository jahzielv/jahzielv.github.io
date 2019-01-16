let isDark = localStorage.getItem("isDark");
console.log("isDark: " + isDark);
if (isDark === null) {
    console.log("we here it null");
    isDark = 0;
    localStorage.setItem("isDark", 0);
}
if (isDark == 1) {
    console.log("in isDark");
    document.getElementsByTagName("body")[0].style.backgroundColor = "#002b36";
    document.getElementsByClassName("nav-menu")[0].style.color = "#839496";
    document.getElementById("greeting-text").style.color = "#839496";
    document.getElementById("theme-toggle").innerHTML = "🌝";
} else {
    console.log("it's 0!");
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fdf6e3";
    document.getElementsByClassName("nav-menu")[0].style.color = "#073642";
    document.getElementById("greeting-text").style.color = "#073642";
    document.getElementById("theme-toggle").innerHTML = "🌚";
}
function themeToggleClick() {
    if (isDark == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#fdf6e3";
        document.getElementsByClassName("nav-menu")[0].style.color = "#073642";
        document.getElementById("greeting-text").style.color = "#073642";
        document.getElementById("theme-toggle").innerHTML = "🌚";
        isDark = 0;
        localStorage.setItem("isDark", isDark);
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#002b36";
        document.getElementsByClassName("nav-menu")[0].style.color = "#839496";
        document.getElementById("greeting-text").style.color = "#839496";
        document.getElementById("theme-toggle").innerHTML = "🌝";
        isDark = 1;
        localStorage.setItem("isDark", isDark);
    }
}
