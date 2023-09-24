const toppart = document.getElementById("top");
const bottompart = document.getElementById("bottom");
const mark1 = document.getElementById("mark1");
const mark2 = document.getElementById("mark2");
const mark3 = document.getElementById("mark3");
const mark4 = document.getElementById("mark4");
const mark5 = document.getElementById("mark5");
const rate = document.getElementById("ratedMark");
const allMarks = Array.from(document.getElementsByClassName("rate"));

function moving(){
    toppart.classList.add("hide");
    bottompart.classList.remove("hide");
}

function styleSelector(){
    allMarks.forEach(element => {
        element.classList.remove("rateSelect");
    });
}

mark1.onclick = function(){
    styleSelector();
    mark1.classList.add("rateSelect");
    rate.innerHTML = "you selected 1 out of 5";
}
mark2.onclick = function(){
    styleSelector();
    mark2.classList.add("rateSelect");
    rate.innerHTML = "you selected 2 out of 5";
}
mark3.onclick = function(){
    styleSelector();
    mark3.classList.add("rateSelect");
    rate.innerHTML = "you selected 3 out of 5";
}
mark4.onclick = function(){
    styleSelector();
    mark4.classList.add("rateSelect");
    rate.innerHTML = "you selected 4 out of 5";
}
mark5.onclick = function(){
    styleSelector();
    mark5.classList.add("rateSelect");
    rate.innerHTML = "you selected 5 out of 5";
}
