const botaoCarrossel = document.querySelectorAll(".carrosselBtn")
const carrossel = document.querySelector(".carrossel")

/*botaoCarrossel.addEventListener("click", () =>{
    carrossel.style.transform = "translateX(-100vw)"
})*/

var posicao = 0;

var passsarcarrossel = botaoCarrossel.forEach(botao => {
    botao.addEventListener("click", () => {
        if(posicao != -200){
            carrossel.style.transform = `translateX(${posicao -= 100}vw)`;
        }
        else{
            carrossel.style.transform = `translateX(${posicao += 200}vw)`;
        }
    });
});