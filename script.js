let up=document.querySelectorAll(".up");
let down=document.querySelectorAll(".down");
let answer=document.querySelectorAll(".answer");

for (let x=0;x<up.length;x++) {
    console.log(x);
    down[x].addEventListener("click",function(){
        answer[x].classList.add("show");
        down[x].classList.add('show');
        up[x].classList.add('show');
    });
    up[x].addEventListener("click",function(){
        answer[x].classList.remove("show");
        down[x].classList.remove('show');
        up[x].classList.remove('show');
    });
     
}
