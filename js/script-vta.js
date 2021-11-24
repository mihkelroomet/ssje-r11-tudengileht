function zoomIn()
{
    var element = document.getElementById("overlay");
    element.style.visibility = "visible";

    var x = event.clientX; 
    var y = event.clientY;     

    element.style.top = y - 80;
    element.style.left = x - 80;
}

function zoomOut()
{
    var element = document.getElementById("overlay");
    element.style.visibility = "hidden";
}