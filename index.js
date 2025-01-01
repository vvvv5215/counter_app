let c = 0;
document.getElementById("count").innerHTML = c;

document.getElementById("but").onclick = function() {
    c = c + 1;
    document.getElementById("count").innerHTML = c;
};

document.getElementById("nut").onclick = function() {
    c = c - 1;
    document.getElementById("count").innerHTML = c;
};


document.getElementById("resetInput").onchange = function() {
    c = parseInt(document.getElementById("resetInput").value, 10);
    document.getElementById("count").innerHTML = c;
};




