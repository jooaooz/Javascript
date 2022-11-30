function soma(){

   let n1 = document.getElementById('n1').value
   let n2 = document.getElementById('n2').value
   let resultado = document.getElementById('resultado').innerHTML =  parseInt(n1) + parseInt(n2)
}


let paragrafo = document.createElement("p")

paragrafo.innerText = "Segunda tem jogo"

//<p> Segunda tem jogo </p>

document.body.appendChild(paragrafo)


function minhaFuncao(){

document.getElementById('minhaDiv').classList.add('classe1','classe2','classe3')

}