const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

// Adiciona um event listener de mouseover em cada div
div1.addEventListener("mouseover", () => {
    div1.style.transform = "scale(1.1)";
    div1.style.opacity = "1";
    div2.style.opacity = "0.3";
    div3.style.opacity = "0.3";
    div4.style.opacity = "0.3";
});

div2.addEventListener("mouseover", () => {
    div2.style.transform = "scale(1.1)";
    div2.style.opacity = "1";
    div1.style.opacity = "0.3";
    div3.style.opacity = "0.3";
    div4.style.opacity = "0.3";
});

div3.addEventListener("mouseover", () => {
    div3.style.transform = "scale(1.1)";
    div3.style.opacity = "1";
    div1.style.opacity = "0.3";
    div2.style.opacity = "0.3";
    div4.style.opacity = "0.3";
});

div4.addEventListener("mouseover", () => {
    div4.style.transform = "scale(1.1)";
    div4.style.opacity = "1";
    div1.style.opacity = "0.3";
    div2.style.opacity = "0.3";
    div3.style.opacity = "0.3";
});

div1.addEventListener("mouseout", () => {
    div1.style.opacity = "1";
    div1.style.transform = "scale(1)"
    div2.style.opacity = "1";
    div2.style.transform = "scale(1)"
    div3.style.opacity = "1";
    div3.style.transform = "scale(1)"
    div4.style.opacity = "1";
    div4.style.transform = "scale(1)"
})

div2.addEventListener("mouseout", () => {
    div1.style.opacity = "1";
    div1.style.transform = "scale(1)"
    div2.style.opacity = "1";
    div2.style.transform = "scale(1)"
    div3.style.opacity = "1";
    div3.style.transform = "scale(1)"
    div4.style.opacity = "1";
    div4.style.transform = "scale(1)"
})

div3.addEventListener("mouseout", () => {
    div1.style.opacity = "1";
    div1.style.transform = "scale(1)"
    div2.style.opacity = "1";
    div2.style.transform = "scale(1)"
    div3.style.opacity = "1";
    div3.style.transform = "scale(1)"
    div4.style.opacity = "1";
    div4.style.transform = "scale(1)"
})

div4.addEventListener("mouseout", () => {
    div1.style.opacity = "1";
    div1.style.transform = "scale(1)"
    div2.style.opacity = "1";
    div2.style.transform = "scale(1)"
    div3.style.opacity = "1";
    div3.style.transform = "scale(1)"
    div4.style.opacity = "1";
    div4.style.transform = "scale(1)"
})

const divi = document.getElementsByClassName("divi")[0]; // seleciona o primeiro elemento com a classe "divi"
const ip = document.getElementById("ip");
const pi = document.getElementsByClassName("pi")[0]; // seleciona o primeiro elemento com a classe "pi"

divi.addEventListener("mouseover", () => {
    pi.style.color = "rgb(40, 39, 39)";
    ip.style.margin ="10px"
    ip.style.transform = "scale(1.9)";
    pi.style.transition = "0.2s"
});
divi.addEventListener("mouseout", () => {
    pi.style.color = "#fff";
    ip.style.transform = "scale(1)";
});

