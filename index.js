function themeToggleClick() {
    let light = document.getElementById("light");
    if (light.disabled === true) {
        light.disabled = false;
        localStorage.removeItem("theme");
        // document.getElementById("themeToggle").innerHTML = "🌚";
        // document.getElementById("blog-icon").src = "/assets/blogging-dark.svg";
        // document.getElementById("resume-icon").src = "/assets/resume.svg";
        // document.getElementById("contact-icon").src = "/assets/contact.svg";
        // document.getElementById("theme-icon").src = "/assets/switch-dark.svg";
    } else {
        light.disabled = true;
        localStorage.setItem("theme", "dark");
        // document.getElementById("themeToggle").innerHTML = "🌝";
        // document.getElementById("blog-icon").src = "/assets/blogging-dark.svg";
        // document.getElementById("resume-icon").src = "/assets/resume-dark.svg";
        // document.getElementById("contact-icon").src = "/assets/contact-dark.svg";
        // document.getElementById("theme-icon").src = "/assets/switch-on.svg";
    }
}
