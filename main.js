const div = document.querySelector("div");

//Y
let divParTop;
//X
let divParLeft;

let flag = false;

div.addEventListener("mousedown", (event) => {
    div.classList.add("raised");
    flag = true;
divParTop = event.offsetY;
divParLeft = event.offsetX;
})

div.addEventListener("mousemove", (e) => {
    if(flag){
        console.log(divParLeft, divParTop);
        div.style.top = `${e.clientY - divParTop}px`;
        div.style.left = `${e.clientX - divParLeft}px`;
    } else return
    })

div.addEventListener("mouseup", () => {
    div.classList.remove("raised");
    flag = false;
})