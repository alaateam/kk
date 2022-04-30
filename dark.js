if(document.readyState == "loading") 
{
    document.addEventListener("DOMContentLoaded", ready)
} 
else
{
    ready()
}
function ready() 
{
    var removeOrderItemButtons = document.getElementsByClassName("button")
    for(var i = 0; i < removeOrderItemButtons.length; i++) 
    {
        var button = removeOrderItemButtons[i]
        button.addEventListener("click", removeOrderItem)
    }
}
function removeOrderItem(event) 
{
    var buttonClicked = event.target
    if(confirm("Are you Sure?")) 
    {
        buttonClicked.parentElement.parentElement.remove()
    } 
}
var icon = document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src = "images/sun.png";
    }
    else
    {
        icon.src = "images/moon.png";
    }
    window.localStorage.setItem("dark-theme", true);
}