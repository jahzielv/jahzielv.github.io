function themeToggleClick() {
    let light = document.getElementById("light");
    if (light.disabled === true) {
        light.disabled = false;
        localStorage.removeItem("theme");
        document.getElementById("themeToggle").innerHTML = "🌚";
        twemoji.parse(document.getElementById("themeToggle"));
    } else {
        light.disabled = true;
        localStorage.setItem("theme", "dark");
        document.getElementById("themeToggle").innerHTML = "🌝";
        twemoji.parse(document.getElementById("themeToggle"));
    }
}
