let chave = "e4b66af286882a155a53c14a16dccc56"

function colocarNaTela(dados){
    console.log(dados)
    

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°c"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".humidade").innerHTML =  (dados.main.humidity) + "%"

}

async function buscarCidade(city) {
    let dados = await fetch(

        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&appid="
        + chave
        +"&lang=pt_br" 
        + "&units=metric")

        .then(resposta => resposta.json())

        colocarNaTela(dados)

       
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
