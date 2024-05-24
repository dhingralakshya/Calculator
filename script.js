for(var i=0;i<document.querySelectorAll(".btn").length;i++)
    {
        document.querySelectorAll(".btn")[i].addEventListener("click",function(){
            var button=this.innerHTML;
            mouseClick(button);
        })
    }
document.addEventListener("keypress",function(event){
    mouseClick(event.key);
})
document.addEventListener("keyup",function(event){
    special(event.key);
})
function mouseClick(button)
{
    switch (button) {
        case "7":   
            document.querySelector("h1").append("7");
            break;
        case "8":
            document.querySelector("h1").append("8");
            break;
        case "9":
            document.querySelector("h1").append("9");
            break;
        case "4":
            document.querySelector("h1").append("4");
            break;
        case "5":
            document.querySelector("h1").append("5");
            break;
        case "6":
            document.querySelector("h1").append("6");
            break;
        case "1":
            document.querySelector("h1").append("1");
            break;
        case "2":
            document.querySelector("h1").append("2");
            break;
        case "3":
            document.querySelector("h1").append("3");
            break;
        case "00":
            document.querySelector("h1").append("00");
            break;
        case "0":
            document.querySelector("h1").append("0");
            break;
        case ".":
            document.querySelector("h1").append(".");
            break;
        case "x":
            document.querySelector("h1").append("*");
            break;
        case "÷":
            document.querySelector("h1").append("/");
            break;
        case "/":
            document.querySelector("h1").append("/");
            break;
        case "-":
            document.querySelector("h1").append("-");
            break;        
        case "+":
            document.querySelector("h1").append("+");
            break;
        case "%":
            document.querySelector("h1").append("%");
            break;
        case "=":
            var a=document.querySelector("h1").innerHTML
            var result=eval(a);
            document.querySelector("h1").innerHTML=result;
            break;   
        case "C":
            document.querySelector("h1").innerHTML=null;
            break;
        case "Enter":
            var a=document.querySelector("h1").innerHTML
            var result=eval(a);
            document.querySelector("h1").innerHTML=result;
            break;
        default:
            var element=document.querySelector("h1");
            element.removeChild(element.lastChild);
            break;
    }
}
function special(button){
    switch(button){
        case "Escape":
            document.querySelector("h1").innerHTML=null;
            break;
        case "Backspace":
            var element=document.querySelector("h1");
            element.removeChild(element.lastChild);
        default:
            break;
    }

}