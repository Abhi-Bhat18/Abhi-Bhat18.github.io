let menu = document.getElementById('mobile-item');
let button = document.getElementById('menu-icon');
let clos = document.getElementById('close-icon')
function open_menu(){
    // menu.style.display ="block";
    // menu.style.position = "absolute";
    button.style.display = "none";
    menu.style.top = "0%";
    menu.style.transition = "all 0.5s ease";
}
function closes(){
    // menu.style.display = "none"
    // menu.style.position = "absolute"
    menu.style.top ="-500%";
    menu.style.transition = "all 0.5s ease";
    button.style.display = "block";
}

