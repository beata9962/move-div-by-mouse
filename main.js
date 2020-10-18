const div = document.querySelector("div");

//Y
let divParTop;
//X
let divParLeft;

let flag = false;

div.addEventListener("mousedown", (event) => {
    div.classList.add("picked-up");
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
    div.classList.remove("picked-up");
    flag = false;
})