

let btn = document.querySelectorAll(".btn");
let result = document.getElementById("result");

for(let i = 0; i < btn.length;i++){
    btn[i].addEventListener("click", function() {
        result.innerText = `You just clicked button ${i + 1}`;
    })
}