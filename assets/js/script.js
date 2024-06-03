const botaoCarrossel = document.querySelectorAll(".carrosselBtn")
const carrossel = document.querySelector(".carrossel")
const botaoAbrirMenu = document.querySelector(".menuBtn");
const menuMobile = document.querySelector("ul");
const mainContent = document.querySelector("main");
const tituloDropDown = document.querySelectorAll(".dropdown")
const descricaoDropDown = document.querySelectorAll(".dropdown-text")
const botaoAtivarModal = document.querySelector(".botao-aitvar-modal")
const botaoFecharModal = document.querySelector(".botao-fechar-modal")
const modal = document.querySelector(".modal")
const botoesCarroselServicos = document.querySelectorAll(".servico-slider-btn")


//Carrossel

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

//Navbar Mobile

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

//Accordion List

tituloDropDown.forEach((titulo, index) => {
    titulo.addEventListener("click", () => {
        if(descricaoDropDown[index].style.display == "none"){
            descricaoDropDown[index].style.display = "flex";
            console.log("Função ativada")
        }
        else{
            descricaoDropDown[index].style.display = "none";
        }
    })
});


//Modal

botaoAtivarModal.addEventListener("click", () =>{
    modal.style.display = "flex";
})

botaoFecharModal.addEventListener("click", () => {
    modal.style.display = "none"
})

//Carrossel Serviços

var cardsnum = 0;

botoesCarroselServicos.forEach(botao => {
    botao.addEventListener("click", () => {
        if(posicao != -200){
            carrossel.style.transform = `translateX(${posicao -= 100}vw)`;
        }
        else{
            carrossel.style.transform = `translateX(${posicao += 200}vw)`;
        }
    })
});



