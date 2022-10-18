
function showmenu(){
    document.getElementById("links").style.transition = "all 1s";
    document.getElementById("links").style.zIndex = "20000";
    document.getElementById("links").style.right = "0vw";
    document.getElementById("links").style.visibility = "visible";
    document.getElementById("open").style.visibility = "hidden";
    document.getElementById("close").style.visibility = "visible";
    
    
}
function hidemenu(){
    document.getElementById("links").style.right = "-100vw";
    document.getElementById("links").style.zIndex = "-15";
    document.getElementById("links").style.visibility = "hidden";
    document.getElementById("hm").style.visibility = "hambrger-menu.png";
    document.getElementById("open").style.visibility = "visible";
    document.getElementById("close").style.visibility = "hidden";
    delay(1000).then(() => document.getElementById("links").style.transition = "none")
}