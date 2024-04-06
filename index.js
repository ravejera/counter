// set initial count

let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


btns.forEach( btn => {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
        let style = e.currentTarget.classList
        console.log(style);
        if(style.contains('increase')){
            count++;
        } else if(style.contains('decrease')){
            count--;
        } else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green"
        } else if(count < 0){
            value.style.color = "red"
        } else{
            value.style.color = "black"
        }

        value.textContent = count
    })
})