const botaoCarrossel = document.querySelectorAll(".carrosselBtn")
const carrossel = document.querySelector(".carrossel")
const botaoAbrirMenu = document.querySelector(".menuBtn");
const menuMobile = document.querySelector("ul");
const mainContent = document.querySelector("main");
const tituloDropDown = document.querySelectorAll(".dropdown")
const descricaoDropDown = document.querySelectorAll(".dropdown-text")


var posicao = 0;

botaoCarrossel.forEach(botao => {
    botao.addEventListener("click", () => {
        if(posicao != -200){
            carrossel.style.transform = `translateX(${posicao -= 100}vw)`;
        }
        else{
            carrossel.style.transform = `translateX(${posicao += 200}vw)`;
        }
    })
});

botaoAbrirMenu.addEventListener("click", () => {
    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "flex";
        mainContent.style.opacity = 0.4
    }
    else{
        menuMobile.style.display = "none";
        mainContent.style.opacity = 1
    }
})

tituloDropDown.forEach(titulo => {
    titulo.addEventListener("click", () => {
        if(descricaoDropDown[0].style.display == "none"){
            descricaoDropDown[0].style.display = "flex";
            console.log("Função ativou")
        }
        else{
            descricaoDropDown[0].style.display = "none";
        }
    })
});
