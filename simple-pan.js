
var x = 0;
var y = 0;

function onMouseMove(e) 
{
    if (e.button == 1 || e.altKey) 
    {
        document.body.scrollLeft -= e.clientX - x;
        document.body.scrollTop -= e.clientY - y;
    }
    x = e.clientX;
    y = e.clientY;
}

document.onmousemove = onMouseMove;

