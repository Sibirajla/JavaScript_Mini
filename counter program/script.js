const countlabel = document.getElementById("countlabel");
const increase = document.getElementById("incBtn");
const decrease = document.getElementById("decBtn");
const reset = document.getElementById("reset");

let val = 0;

 decrease.onclick = function(){
        val -= 1;
    countlabel.textContent = val;
}
 reset.onclick = function(){
    val = 0;
    countlabel.textContent = val;
}

 increase.onclick = function(){
    val += 1;
    countlabel.textContent = val;
}