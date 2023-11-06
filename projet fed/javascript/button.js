const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);





const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num"),
    prix = document.querySelector(".prix");
let a = 1;
plus.addEventListener("click", () => {
    let b = 15;
    a++;
    a = (a < 10) ? "0" + a : a;
    b = b * a;
    num.innerText = a;
    prix.innerText = b;

});

minus.addEventListener("click", () => {
    if (a > 1) {
        let b = 15;
        a--;
        a = (a < 10) ? "0" + a : a;
        b = b * a;
        num.innerText = a;
        prix.innerText = b;
    }
});