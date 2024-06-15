var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    setTimeout(function(){
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "assets/sun.png";
            // alert("Switched to Dark Theme");
        } else {
            icon.src = "assets/moon.png";
            // alert("Switched to Light Theme");
        }
    }, 100);
}