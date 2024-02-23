let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click', ()=>{

let nome = document.getElementById('nome').value
let base = Number(document.getElementById('base').value)
let altura = Number(document.getElementById('altura').value)
let raio = Number(document.getElementById('raio').value)

const volume = new Volume(base, altura, raio)

if((nome = "prisma") || (nome = "Prisma")) {

} else if ((nome = "pirâmide") || (nome = "Pirâmide")) {

} else if ((nome = "cilindro") || (nome = "Cilindro")) {

} else if ((nome = "cone") || (nome = "Cone")) {

} else if ((nome = "esfera") || (nome = "Esfera")) {
    
} else {
    resposta.innerHTML = "Esse sólido não existe, por favor digite um dos seguintes valores: Prisma, Pirâmide, Cilindro, Cone ou Esfera"   
}

});